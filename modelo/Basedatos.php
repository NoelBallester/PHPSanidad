<?php

abstract class Basedatos
{
    private $servername = "192.168.35.124:3306";
    private $database = "sanidadPHP";
    private $username = "sanidadphp";
    private $password = "1234";
    private $conexion;
    private $mensajeerror = "";
    public function getConexion()
    {
        try {
            // Extraer host y puerto si vienen juntos (ej: 192.168.1.1:3306)
            $parts = explode(':', $this->servername);
            $host = $parts[0];
            $port = isset($parts[1]) ? ";port=" . $parts[1] : "";

            $this->conexion = new PDO(
                "mysql:host=$host$port;dbname=$this->database;charset=utf8",
                $this->username,
                $this->password
            );
            $this->conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $this->conexion;
        } catch (PDOException $e) {
            $this->mensajeerror = $e->getMessage();
            error_log("Fallo de conexión: " . $this->mensajeerror);
            return null;
        }
    }

    # Desconectar la base de datos

    public function closeConexion()
    {
        $this->conexion = null;
    }

    # Devolver mensaje de error, por si hay error.

    public function getMensajeError()
    {
        return $this->mensajeerror;
    }
}
