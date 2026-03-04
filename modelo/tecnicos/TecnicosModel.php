<?php
class Tecnicos extends Basedatos
{

    private $table;
    private $conexion;

    public function __construct()
    {
        $this->table = "tecnicos";
        $this->conexion = $this->getConexion();
    }

    // Recibe el array de los post
    public function insertar($data)
    {
        if ($this->conexion == null) {
            return "Error de conexión: " . $this->getMensajeError();
        }

        try {
            // 1. Validar políticas de seguridad de la contraseña en el backend
            $password = $data['password'];
            if (!preg_match('/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/', $password)) {
                return -3; // La contraseña no cumple las políticas de seguridad
            }

            // En este modelo, el ID es autoincremental en la base de datos.
            // Omitimos la comprobación de existencia por ID ya que lo genera la DB.
            // Si existiera una comprobación por correo, se haría aquí.

            // 2. Insertar nuevo usuario (id_tecnico se genera solo)
            $clave = password_hash($password, PASSWORD_DEFAULT);
            $nombre = $data['nombre'];
            $apellidos = $data['apellidos'];
            $centro = $data['centro'];
            $rol = isset($data['rol']) ? $data['rol'] : 'patologia';

            $sql = "INSERT INTO $this->table (nombre, apellidos, email, password, centro, rol) VALUES (:nombre, :apellidos, :email, :password, :centro, :rol)";
            $sentencia = $this->conexion->prepare($sql);

            $sentencia->bindParam(':nombre', $nombre, PDO::PARAM_STR);
            $sentencia->bindParam(':apellidos', $apellidos, PDO::PARAM_STR);
            $email_placeholder = "";
            $sentencia->bindParam(':email', $email_placeholder, PDO::PARAM_STR);
            $sentencia->bindParam(':password', $clave, PDO::PARAM_STR);
            $sentencia->bindParam(':centro', $centro, PDO::PARAM_STR);
            $sentencia->bindParam(':rol', $rol, PDO::PARAM_STR);

            $sentencia->execute();
            return $this->conexion->lastInsertId();

        }
        catch (PDOException $e) {
            error_log("Error en registro: " . $e->getMessage());
            return -4; // Error genérico de BD
        }
    }

    private function verifyDjangoHash($password, $djangoHash)
    {
        // Django PBKDF2 hash format: pbkdf2_algorithm$iterations$salt$hash
        $parts = explode('$', $djangoHash);
        if (count($parts) !== 4 || strpos($parts[0], 'pbkdf2_') !== 0) {
            return false;
        }

        $algo = str_replace('pbkdf2_', '', $parts[0]);
        // Django uses SHA256 by default for PBKDF2
        if ($algo !== 'sha256') {
            return false; // Only supporting standard sha256 for now
        }

        $iterations = (int)$parts[1];
        $salt = $parts[2];
        $storedHash = base64_decode($parts[3]);

        // Generate hash using PHP's hash_pbkdf2
        // Note: Django's base64 encoding might not pad with '=', and hash_pbkdf2 output is raw binary if 5th param is true
        $calcHash = hash_pbkdf2($algo, $password, $salt, $iterations, 32, true);

        return hash_equals($storedHash, $calcHash);
    }

    public function loginusuario($userId, $clave)
    {
        if ($this->conexion == null) {
            return -4; //"ERROR BASE DE DATOS. SIN CONEXIÓN";
        }
        try {
            $sql = "SELECT * FROM $this->table  WHERE id_tecnico = :userId";
            $statement = $this->conexion->prepare($sql);
            $statement->bindParam(':userId', $userId, PDO::PARAM_INT);
            $statement->execute();

            if ($statement->rowCount() == 1) //si devuelve una fila existe
            {
                $row = $statement->fetch();

                $hashedPassword = $row['password'];
                $isCorrect = false;
                $needsRehash = false;

                if (strpos($hashedPassword, 'pbkdf2_') === 0) {
                    // Try Django hash verification
                    $isCorrect = $this->verifyDjangoHash($clave, $hashedPassword);
                    if ($isCorrect) {
                        $needsRehash = true; // Auto-migrate to PHP native
                    }
                }
                else {
                    // Standard PHP verify
                    $isCorrect = password_verify($clave, $hashedPassword);
                }

                if ($isCorrect) {
                    if ($needsRehash) {
                        // Rehash and update DB
                        $newHash = password_hash($clave, PASSWORD_DEFAULT);
                        try {
                            $updateSql = "UPDATE $this->table SET password = :newHash WHERE id_tecnico = :userId";
                            $updStmt = $this->conexion->prepare($updateSql);
                            $updStmt->bindParam(':newHash', $newHash, PDO::PARAM_STR);
                            $updStmt->bindParam(':userId', $userId, PDO::PARAM_INT);
                            $updStmt->execute();
                        }
                        catch (PDOException $ex) {
                            error_log("Failed to auto-migrate password hash for user $userId: " . $ex->getMessage());
                        }
                    }

                    // Retornamos también el rol para almacenarlo en frontend
                    return [
                        'id_tecnico' => $row['id_tecnico'],
                        'rol' => $row['rol']
                    ];
                }
                else {
                    return -2; //"Clave incorrecta.";
                }
            }
            else
                return -3; //"Usuario inexistente.";


        }
        catch (PDOException $e) {
            return -4; //"ERROR AL CONSULTAR.<br>" . $e->getMessage();
        }
    }
    public function solicitacontrasena($userId)
    {
        if ($this->conexion == null) {
            return -4;
        }
        try {
            $sql = "SELECT id_tecnico FROM $this->table WHERE id_tecnico = :userId";
            $statement = $this->conexion->prepare($sql);
            $statement->bindParam(':userId', $userId, PDO::PARAM_INT);
            $statement->execute();

            return $statement->rowCount() > 0;
        }
        catch (PDOException $e) {
            return -4;
        }
    } // fin solicitacontrasena

    public function listarTecnicos()
    {
        if ($this->conexion == null) {
            return false;
        }
        try {
            $sql = "SELECT id_tecnico, nombre, apellidos, email, centro, rol FROM $this->table";
            $statement = $this->conexion->prepare($sql);
            $statement->execute();
            return $statement->fetchAll(PDO::FETCH_ASSOC);
        }
        catch (PDOException $e) {
            error_log("Error listarTecnicos: " . $e->getMessage());
            return false;
        }
    }

    public function modificarTecnico($data)
    {
        if ($this->conexion == null) {
            return false;
        }
        try {
            $id = $data['id_tecnico'];
            $nombre = $data['nombre'];
            $apellidos = $data['apellidos'];
            $centro = $data['centro'];
            $rol = $data['rol'];

            if (!empty($data['password'])) {
                $password = $data['password'];
                if (!preg_match('/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/', $password)) {
                    return -3; // Contraseña no cumple políticas
                }
                $clave = password_hash($password, PASSWORD_DEFAULT);
                $sql = "UPDATE $this->table SET nombre = :nombre, apellidos = :apellidos, centro = :centro, rol = :rol, password = :password WHERE id_tecnico = :id";
                $statement = $this->conexion->prepare($sql);
                $statement->bindParam(':password', $clave, PDO::PARAM_STR);
            }
            else {
                $sql = "UPDATE $this->table SET nombre = :nombre, apellidos = :apellidos, centro = :centro, rol = :rol WHERE id_tecnico = :id";
                $statement = $this->conexion->prepare($sql);
            }

            $statement->bindParam(':nombre', $nombre, PDO::PARAM_STR);
            $statement->bindParam(':apellidos', $apellidos, PDO::PARAM_STR);
            $statement->bindParam(':centro', $centro, PDO::PARAM_STR);
            $statement->bindParam(':rol', $rol, PDO::PARAM_STR);
            $statement->bindParam(':id', $id, PDO::PARAM_INT);

            return $statement->execute();
        }
        catch (PDOException $e) {
            error_log("Error modificarTecnico: " . $e->getMessage());
            return false;
        }
    }

    public function eliminarTecnico($id)
    {
        if ($this->conexion == null) {
            return false;
        }
        try {
            $sql = "DELETE FROM $this->table WHERE id_tecnico = :id";
            $statement = $this->conexion->prepare($sql);
            $statement->bindParam(':id', $id, PDO::PARAM_INT);
            return $statement->execute();
        }
        catch (PDOException $e) {
            error_log("Error eliminarTecnico: " . $e->getMessage());
            return false;
        }
    }
}