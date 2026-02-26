<?php
class MuestrasModel extends Basedatos
{
    private $table;
    private $conexion;

    public function __construct()
    {
        $this->table = "muestras";
        $this->conexion = $this->getConexion();
    }

    // Obtener muestras de un Cassette
    public function cargarMuestras($id)
    {
        try {
            $sql = "SELECT * FROM $this->table where cassetteIdCassette=:id";
            $statement = $this->conexion->prepare($sql);
            $statement->bindParam(':id', $id, PDO::PARAM_INT);
            $statement->execute();
            $muestras = $statement->fetchAll(PDO::FETCH_ASSOC);

            return $muestras;
        } catch (PDOException $e) {
            return "ERROR AL CARGAR LAS MUESTRAS DE UN CASSETTE" . $e->getMessage();
        }
    }

    // Obtener información de una muestras 
    public function cargarMuestra($id)
    {
        try {
            $sql = "SELECT * FROM $this->table where id_muestra=:id";
            $statement = $this->conexion->prepare($sql);
            $statement->bindParam(':id', $id, PDO::PARAM_INT);
            $statement->execute();
            $muestra = $statement->fetch(PDO::FETCH_ASSOC);


            return $muestra;
        } catch (PDOException $e) {
            return "ERROR AL CARGAR UNA MUESTRA" . $e->getMessage();
        }
    }

    // Creación Muestra
    public function crearMuestra($descripcion,  $fecha,  $observaciones, $tincion,  $cassetteIdCassette)
    {
        try {
            $unique_value = "--m--" . substr(uniqid() . mt_rand(), 0, 12);
            $sql = "insert into $this->table 
            (descripcion, fecha, observaciones, tincion, qr_muestra, cassetteIdCassette) 
            values (?,?,?,?,?,?)";
            $sentencia = $this->conexion->prepare($sql);

            // bindParams
            $sentencia->bindParam(1, $descripcion);
            $sentencia->bindParam(2, $fecha);
            $sentencia->bindParam(3, $observaciones);
            $sentencia->bindParam(4, $tincion);
            $sentencia->bindParam(5, $unique_value);
            $sentencia->bindParam(6, $cassetteIdCassette);


            $sentencia->execute();
            //devuelvo el id
            return $this->conexion->lastInsertId();
        } catch (PDOException $e) {
            return "ERROR AL CARGAR UNA MUESTRA" . $e->getMessage();
        }
    }

    // Borrar una muestra por id
    public function borrarMuestra($id)
    {
        try {
            $sql = "DELETE from $this->table where id_muestra=:id";
            $sentencia = $this->conexion->prepare($sql);
            $sentencia->bindParam(':id', $id, PDO::PARAM_INT);

            $sentencia->execute();
            if ($sentencia->rowCount() == 0)
                return  -1;
            else
                return "MUESTRA ELIMINADA: " . $id;
        } catch (PDOException $e) {
            return "ERROR AL BORRAR." . $e->getMessage();
        }
    }


    // Modificar Muestra
    public function modificarMuestra($data)
    {
        try {
            $sql = "update $this->table 
                    set  descripcion=?, fecha=?, observaciones=?, tincion=?
                    where id_muestra=?";
            $sentencia = $this->conexion->prepare($sql);



            $sentencia->bindParam(1, $data["descripcion"]);
            $sentencia->bindParam(2, $data["fecha"]);
            $sentencia->bindParam(3, $data["observaciones"]);
            $sentencia->bindParam(4, $data["tincion"]);
            $sentencia->bindParam(5, $data["muestraId"]);
            $sentencia->execute();
            if ($sentencia->rowCount() == 0)
                return "Registro NO actualizado, o no existe o no hay cambios: " . $data["muestraId"];
            else
                return "Registro actualizado: " . $data["muestraId"];
        } catch (PDOException $e) {
            return "Error al actualizar." . $e->getMessage();
        }
    }
    // Muestras por código QR
    public function cargarMuestraQR($qr)
    {
        try {
            $sql = "SELECT * FROM $this->table 
                    where qr_muestra=:qr";

            $statement = $this->conexion->prepare($sql);
            $statement->bindParam(":qr", $qr);
            $statement->execute();
            $muestra = $statement->fetchAll(PDO::FETCH_ASSOC);

            return $muestra;
        } catch (PDOException $e) {
            return "ERROR AL CARGAR MUESTRAS POR QR" . $e->getMessage();
        }
    }
}
