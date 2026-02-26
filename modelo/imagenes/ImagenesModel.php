<?php
class ImagenesModel extends Basedatos
{
    private $table;
    private $conexion;

    public function __construct()
    {
        $this->table = "imagenes";
        $this->conexion = $this->getConexion();
    }

    // Creación de una imagen
    public function crearImagen($imagen, $muestraId)
    {
        try {
            $sql = "insert into $this->table 
            (imagen, muestraIdMuestra) 
            values (?,?)";
            $sentencia = $this->conexion->prepare($sql);
            $sentencia->bindParam(1, $imagen);
            $sentencia->bindParam(2, $muestraId);


            $sentencia->execute();
            if ($this->conexion->lastInsertId())
                return $this->conexion->lastInsertId();
            else
                return -1;
        } catch (PDOException $e) {
            return "ERROR AL CREAR UNA IMAGEN" . $e->getMessage();
        }
    }

    // Obtener imágenes de una muestra
    public function cargarImagenesMuestra($id)
    {
        try {
            $sql = "SELECT * FROM $this->table where muestraIdMuestra=:id";
            $statement = $this->conexion->prepare($sql);
            $statement->bindParam(':id', $id, PDO::PARAM_INT);
            $statement->execute();
            // Array para almacenar los datos de las imágenes
            $imagenes = array();

            while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
                // Obtener los datos de la imagen
                $imagenData = $row['imagen'];
                $id_imagen = $row['id_imagen'];

                // Codificar los datos de la imagen en base64
                $imagenBase64 = base64_encode($imagenData);

                // Agregar los datos de la imagen al array de imágenes
                $imagen = array(
                    "id_imagen" => $id_imagen,
                    "imagen" => $imagenBase64
                );
                $imagenes[] = $imagen;
            }

            // Devolver los datos como respuesta JSON
            header('Content-Type: application/json');
            echo json_encode($imagenes);
        } catch (PDOException $e) {
            return "ERROR AL CARGAR LAS IMAGENES DE UNA MUESTRA" . $e->getMessage();
        }
    }

    // Borrar una imagen por id
    public function borrarImagen($id)
    {
        try {
            $sql = "DELETE from $this->table where id_imagen=:id";
            $sentencia = $this->conexion->prepare($sql);
            $sentencia->bindParam(':id', $id, PDO::PARAM_INT);

            $sentencia->execute();
            if ($sentencia->rowCount() == 0)
                return  -1;
            else
                return "IMAGEN ELIMINADA: " . $id;
        } catch (PDOException $e) {
            return "ERROR AL BORRAR." . $e->getMessage();
        }
    }
}
