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
            return -1; // "ERROR BASE DE DATOS. SIN CONEXIÓN";
        }
        try {
            $sql = "SELECT * FROM $this->table  WHERE email = :useremail";
            $statement = $this->conexion->prepare($sql);
            $statement->bindParam(':useremail', $data["email"], PDO::PARAM_STR);
            $statement->execute();

            if ($statement->rowCount() == 1) {
                return -2;  //"EL USUARIO YA EXISTE"
            } else {
                $email = $data['email'];
                $password = $data['password'];
                $clave = password_hash($password, PASSWORD_DEFAULT);
                $nombre = $data['nombre'];
                $apellidos = $data['apellidos'];
                $centro = $data['centro'];

                $sql = "insert into $this->table (nombre, apellidos, email, password,centro) values ( ?,?,?,?,?)";
                $sentencia = $this->conexion->prepare($sql);

                // extraemos los parámetros de la variable post
                $sentencia->bindParam(1, $nombre);
                $sentencia->bindParam(2, $apellidos);
                $sentencia->bindParam(3, $email);
                $sentencia->bindParam(4, $clave);
                $sentencia->bindParam(5, $centro);

                $sentencia->execute();
                //devuelvo el id
                return $this->conexion->lastInsertId();
            }
        } catch (PDOException $e) {
            // return -3;
            return "Error al actualizar.<br>" . $e->getMessage();
        }
    }

    public function loginusuario($email, $clave)
    {
        if ($this->conexion == null) {
            return -4; //"ERROR BASE DE DATOS. SIN CONEXIÓN";
        }
        try {
            $sql = "SELECT * FROM $this->table  WHERE email = :email";
            $statement = $this->conexion->prepare($sql);
            $statement->bindParam(':email', $email, PDO::PARAM_STR);
            $statement->execute();

            if ($statement->rowCount() == 1) //si devuelve una fila existe
            {
                $row = $statement->fetch();

                if (password_verify($clave, $row['password'])) {
                    return $row['id_tecnico']; //"Validado. Clave correcta.";
                } else {
                    return -2; //"Clave incorrecta.";
                }
            } else
                return -3; //"Usuario inexistente.";


        } catch (PDOException $e) {
            return -4; //"ERROR AL CONSULTAR.<br>" . $e->getMessage();
        }
    } // fin consulta

}
