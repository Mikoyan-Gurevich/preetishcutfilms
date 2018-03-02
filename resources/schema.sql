CREATE TABLE `card` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `caption` varchar(100) NOT NULL,
  `image_url` varchar(100) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `is_enabled` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `image_url` (`image_url`)
);