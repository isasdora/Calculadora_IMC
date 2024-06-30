-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 30/06/2024 às 22:47
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `calculadora`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `imc`
--

CREATE TABLE `imc` (
  `peso` float NOT NULL,
  `altura` float NOT NULL,
  `horaClick` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `imc`
--

INSERT INTO `imc` (`peso`, `altura`, `horaClick`) VALUES
(100, 1.84, '2024-06-30 21:22:42'),
(50.25, 1.65, '2024-06-30 21:23:04'),
(72.36, 1.97, '2024-06-30 22:00:26'),
(78, 1.69, '2024-06-30 22:15:45'),
(1, 1, '2024-06-30 22:37:58'),
(45, 1.52, '2024-06-30 22:57:55'),
(68, 1.43, '2024-06-30 23:05:50');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
