-- Script para crear la tabla bioquimicamuestras
-- Ejecutar este script en MySQL/MariaDB

-- Añadir las columnas faltantes
ALTER TABLE `bioquimicamuestras` 
  ADD COLUMN `informacion_clinica` mediumtext NULL AFTER `tecnicoIdTecnico`,
  ADD COLUMN `descripcion_microscopica` mediumtext NULL AFTER `informacion_clinica`,
  ADD COLUMN `diagnostico_final` mediumtext NULL AFTER `descripcion_microscopica`,
  ADD COLUMN `patologo_responsable` varchar(255) NULL AFTER `diagnostico_final`;
