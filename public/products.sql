-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-07-2021 a las 00:21:01
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `laptoplandia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `marca` varchar(30) NOT NULL,
  `modelo` varchar(50) NOT NULL,
  `descripcion` varchar(150) NOT NULL,
  `caracteristicas` varchar(180) NOT NULL,
  `precio` int(11) NOT NULL,
  `url` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `marca`, `modelo`, `descripcion`, `caracteristicas`, `precio`, `url`) VALUES
(1, 'Dell', 'Inspirion', 'Lorem isue', '8 Gb Ram, 256 Gb SDD, Ryzen 5', 849, '/images/inspirion.jpg'),
(2, 'Asus', 'Vivabook', 'Lorem Isue', '12 Gb Ram, 256 Gb SSD, Ryzen 7', 950, '/images/asus.jpg'),
(4, 'Lenovo', 'Idepad', 'Lorem Isue', '8 Gb Ram, 256 Gb SSD, 1 Tb HDD, Intel I3', 799, '/images/idepad.jpg'),
(5, 'Hp', 'z1', 'sfdsdf', 'sdfsdf', 799, '/images/asus.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
