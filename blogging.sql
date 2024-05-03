-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-05-2024 a las 10:14:49
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `blogging`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Technology', '2024-05-03 07:34:24', '2024-05-03 07:34:24'),
(2, 'Travel', '2024-05-03 07:34:24', '2024-05-03 07:34:24'),
(3, 'Food', '2024-05-03 07:34:24', '2024-05-03 07:34:24'),
(4, 'Fashion', '2024-05-03 07:34:24', '2024-05-03 07:34:24'),
(5, 'Sports', '2024-05-03 07:34:24', '2024-05-03 07:34:24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `content` text DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comments`
--

INSERT INTO `comments` (`id`, `content`, `user_id`, `post_id`, `created_at`, `updated_at`) VALUES
(6, 'No creo que esten buenos esos huevos.', 1, 24, '2024-05-03 07:46:12', '2024-05-03 07:46:12'),
(7, 'Para mi se ve hermosa!!', 4, 22, '2024-05-03 07:46:12', '2024-05-03 07:46:12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id`, `title`, `content`, `user_id`, `created_at`, `updated_at`) VALUES
(21, 'la manzana fea', 'nooooooooooooooooooooooooooooooooo la manzana esta fea', 2, '2024-05-03 07:44:03', '2024-05-03 07:44:03'),
(22, 'la pera fea', 'la pera esta fea, siiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii.', 2, '2024-05-03 07:44:03', '2024-05-03 07:44:03'),
(23, 'el queso verde', 'el queso se ve verde, asssssssssssssscooooooo.', 6, '2024-05-03 07:45:11', '2024-05-03 07:45:11'),
(24, 'Desayune huevos verdes con jamon, xd.', 'me encantaaaaaaaaaaaaaaaaaaaaaaaaaaaan los huevos verdes con jamooooooooooooonnnnnnnnnnnnnnnnnnn, lo mejor.', 7, '2024-05-03 07:45:11', '2024-05-03 07:45:11');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `post_categories`
--

CREATE TABLE `post_categories` (
  `post_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `post_categories`
--

INSERT INTO `post_categories` (`post_id`, `category_id`) VALUES
(21, 4),
(24, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('user','admin') DEFAULT 'user',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `role`, `created_at`, `updated_at`) VALUES
(1, 'Erick Rabago', 'erickrabago@gmail.com', '456544645465', 'user', '2024-05-02 22:57:22', '2024-05-02 22:57:22'),
(2, 'jose luis', 'joseluisnegrito@gmail.com', 'asdasd4646546', 'admin', '2024-05-02 22:59:49', '2024-05-02 22:59:49'),
(3, 'josemartinitos', 'martinitos@hotmail.com', 'asdasdbbbbb883838', 'user', '2024-05-02 23:02:09', '2024-05-02 23:02:09'),
(4, 'alvinyakitori', 'yakitory@gmail.mz.mx', 'weqwe4545qwewe455', 'user', '2024-05-02 23:04:33', '2024-05-02 23:04:33'),
(6, 'johndoe', 'johndoe@example.com', '$2a$10$Vw32b5WEvz0h2nBlvKj98u0jN6wRjD9jGJWhtdFFXm3ukzlgAFe9.', 'user', '2024-05-03 07:35:15', '2024-05-03 07:35:15'),
(7, 'janedoe', 'janedoe@example.com', '$2a$10$FjpAICVqmrZtfqwmL0nIouMhdJOrzP7sGg6w2LjefjvzYZ3VnnQq2', 'user', '2024-05-03 07:35:15', '2024-05-03 07:35:15'),
(8, 'admin1', 'admin1@example.com', '$2a$10$8xFlIe7BdU8Nde6j7XgX9OhPyfx3AFWb4p3FojBCt5d0wU2wppDSG', 'admin', '2024-05-03 07:35:15', '2024-05-03 07:35:15'),
(9, 'testuser1', 'testuser1@example.com', '$2a$10$RG8LJyr./HRujDWey2vG.e2bXMySU3b5wrI1Irh0EuzNz1b1T4V3e', 'user', '2024-05-03 07:35:15', '2024-05-03 07:35:15'),
(10, 'testuser2', 'testuser2@example.com', '$2a$10$l07Nb4frLWphO2v6ouYmEeDsdJQuKWPOxDs2F5Mcz5NRfEgv95/7m', 'user', '2024-05-03 07:35:15', '2024-05-03 07:35:15');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `post_categories`
--
ALTER TABLE `post_categories`
  ADD PRIMARY KEY (`post_id`,`category_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `post_categories`
--
ALTER TABLE `post_categories`
  ADD CONSTRAINT `post_categories_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `post_categories_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
