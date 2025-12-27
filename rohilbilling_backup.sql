-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: rohilbilling
-- ------------------------------------------------------
-- Server version	8.0.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `client_payment_history`
--

DROP TABLE IF EXISTS `client_payment_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client_payment_history` (
  `id` int NOT NULL AUTO_INCREMENT,
  `client_name` varchar(255) NOT NULL,
  `amount_paid` decimal(10,2) NOT NULL,
  `paid_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_by` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_payment_history`
--

LOCK TABLES `client_payment_history` WRITE;
/*!40000 ALTER TABLE `client_payment_history` DISABLE KEYS */;
INSERT INTO `client_payment_history` VALUES (1,'Siva',30000.00,'2025-07-31 16:40:58',1),(2,'Nextgen',20000.00,'2025-07-31 17:45:57',1),(3,'Southern Cabs',9000.00,'2025-07-31 17:52:07',1),(4,'Eswari Pyro Tech',10000.00,'2025-08-01 18:02:02',1),(5,'ESWARI PYROTECH MRK CRACKERS',15000.00,'2025-08-18 17:51:22',1),(6,'Mage Transport',18000.00,'2025-11-17 16:18:09',1);
/*!40000 ALTER TABLE `client_payment_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_by` int DEFAULT NULL,
  `client_name` varchar(255) NOT NULL,
  `gst_number` varchar(50) DEFAULT NULL,
  `mobile_number` varchar(15) DEFAULT NULL,
  `billing_address` text NOT NULL,
  `project_title` varchar(255) NOT NULL,
  `service` varchar(100) NOT NULL,
  `duration` decimal(4,2) NOT NULL,
  `base_amount` decimal(10,2) NOT NULL,
  `discount` decimal(5,2) DEFAULT NULL,
  `gst_rate` decimal(5,2) NOT NULL DEFAULT '18.00',
  `grand_total` decimal(10,2) NOT NULL,
  `amount_paid` decimal(10,2) NOT NULL,
  `pending_payment` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (1,1,'Siva','Twe65312454','9032874232','VNR','Mobile Application & Website','',4.00,60000.00,0.00,18.00,70800.00,30000.00,40800.00,'2025-07-31 11:10:58'),(2,1,'Nextgen','RNG090234','9023456543','Sivagamni Puram, \nMadurai','Billing Software','',6.00,50000.00,2.00,18.00,57820.00,20000.00,37820.00,'2025-07-31 12:15:57'),(3,1,'Southern Cabs','TYR78945343','9522254234','35, Thallakulam, Madurai','Website','',4.00,50000.00,0.00,18.00,59000.00,9000.00,50000.00,'2025-07-31 12:22:07'),(4,1,'Eswari Pyro Tech','YUerw674234234432','9023454545','Main Street, Sivakasi','Cracker Website','Software',1.00,25000.00,0.00,18.00,29500.00,10000.00,19500.00,'2025-08-01 12:32:02'),(5,1,'ESWARI PYROTECH MRK CRACKERS','EPMC@001','8610605668','Sivakasi Main Road, Gowlur, Viruthunagar','Crackers Website','Website',1.00,25000.00,0.00,0.00,25000.00,15000.00,10000.00,'2025-08-18 12:21:22'),(6,1,'Mage Transport','','8248005059','CWS-1V-000828, 26th Floor, Amber Gem Tower, Ajman','Website','Website',1.00,26000.00,0.00,0.10,26026.00,18000.00,8026.00,'2025-11-17 10:48:09'),(7,1,'Southern Cabz','','9115549115','No:16, Nethaji 4th street, Thirunagar, 3rd Stop, Madurai-625 006','Digital Marketing','Ad service',4.00,10000.00,0.00,0.10,10010.00,0.00,10010.00,'2025-11-17 10:51:27'),(8,1,'Southern Cabz','','9115549115','Thirunagar, Madurai','Digital Marketing','Social Media Service',4.00,10000.00,0.00,0.10,10010.00,0.00,10010.00,'2025-11-17 11:15:48');
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_history`
--

DROP TABLE IF EXISTS `payment_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_history` (
  `id` int NOT NULL AUTO_INCREMENT,
  `student_id` varchar(50) NOT NULL,
  `amount_paid` decimal(10,2) NOT NULL,
  `paid_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `student_id` (`student_id`),
  CONSTRAINT `payment_history_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_history`
--

LOCK TABLES `payment_history` WRITE;
/*!40000 ALTER TABLE `payment_history` DISABLE KEYS */;
INSERT INTO `payment_history` VALUES (1,'RGC@001',3600.00,'2025-07-31 05:11:03',NULL),(2,'RGC@001',1000.00,'2025-07-31 05:23:52',1),(3,'RGC@002',650.00,'2025-07-31 05:24:54',NULL),(4,'RNG007',10000.00,'2025-08-01 12:40:24',1),(5,'RNG007',4000.00,'2025-08-18 12:05:17',NULL),(6,'RNG05',15000.00,'2025-09-23 11:59:55',1),(7,'RNG14',10000.00,'2025-09-23 12:00:43',1),(8,'RNG15',7000.00,'2025-09-23 12:01:41',1),(9,'RNG16',5000.00,'2025-09-23 12:02:31',1),(10,'RNG09',13000.00,'2025-09-23 12:03:19',1),(11,'RNG14',5000.00,'2025-09-30 08:40:47',1),(12,'RNG16',2000.00,'2025-09-30 08:41:05',1),(13,'RNG17',7000.00,'2025-11-17 10:36:33',1),(14,'RNG18',21000.00,'2025-11-17 10:37:39',1),(15,'RNG14',5000.00,'2025-11-17 10:38:13',1),(16,'RNG15',13060.00,'2025-11-17 10:39:50',1),(17,'RNG16',13060.00,'2025-11-17 10:40:25',1),(18,'RNG09',5000.00,'2025-11-17 10:40:45',1),(19,'RNG18',4.00,'2025-11-17 10:41:31',1),(20,'RNG09',10000.00,'2025-12-02 05:46:32',1),(21,'RNG20',10000.00,'2025-12-08 10:25:24',1);
/*!40000 ALTER TABLE `payment_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receipt_settings`
--

DROP TABLE IF EXISTS `receipt_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `receipt_settings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `prefix` varchar(10) DEFAULT NULL,
  `suffix` varchar(10) DEFAULT NULL,
  `digits` int DEFAULT '4',
  `starting_number` int DEFAULT '1',
  `current_number` int DEFAULT '1',
  `reset_cycle` enum('monthly','yearly','continuous') DEFAULT 'continuous',
  `last_reset` date DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receipt_settings`
--

LOCK TABLES `receipt_settings` WRITE;
/*!40000 ALTER TABLE `receipt_settings` DISABLE KEYS */;
INSERT INTO `receipt_settings` VALUES (1,'RN-','',4,1,24,'monthly','2025-08-31','2025-07-31',1,NULL);
/*!40000 ALTER TABLE `receipt_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receipt_settings_clients`
--

DROP TABLE IF EXISTS `receipt_settings_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `receipt_settings_clients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `prefix` varchar(10) DEFAULT NULL,
  `suffix` varchar(10) DEFAULT NULL,
  `digits` int DEFAULT '4',
  `starting_number` int DEFAULT '1',
  `current_number` int DEFAULT '1',
  `reset_cycle` enum('monthly','yearly','continuous') DEFAULT 'continuous',
  `last_reset` date DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receipt_settings_clients`
--

LOCK TABLES `receipt_settings_clients` WRITE;
/*!40000 ALTER TABLE `receipt_settings_clients` DISABLE KEYS */;
INSERT INTO `receipt_settings_clients` VALUES (1,'RT-','',4,1,16,'monthly','2025-08-31','2025-07-31',1,NULL);
/*!40000 ALTER TABLE `receipt_settings_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_by` int DEFAULT NULL,
  `student_name` varchar(100) NOT NULL,
  `student_id` varchar(50) NOT NULL,
  `course_name` varchar(100) NOT NULL,
  `course_category` enum('Internship','Classic Course','Professional Course','Expert Course') NOT NULL,
  `course_type` enum('Online','Offline') NOT NULL,
  `duration` int NOT NULL,
  `fees` decimal(10,2) NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `amount_paid` decimal(10,2) NOT NULL,
  `pending_payment` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `student_id` (`student_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,1,'Selva','RGC@001','MERN Stack','Professional Course','Online',4,20000.00,23600.00,4600.00,19000.00,'2025-07-31 05:11:03','2025-07-31 05:23:52'),(2,1,'anu','RGC@002','Digital Marketing','Professional Course','Online',3,17500.00,20650.00,650.00,20000.00,'2025-07-31 05:24:54','2025-07-31 05:24:54'),(3,1,'Sakthivel P','RNG007','Full Stack Python','Professional Course','Offline',3,17000.00,20060.00,14000.00,6060.00,'2025-06-16 05:11:03','2025-08-18 12:12:52'),(4,1,'Rayesha','RNG05','Mobile Application','Professional Course','Online',3,15000.00,17700.00,15000.00,2700.00,'2025-09-23 11:59:55','2025-09-23 11:59:55'),(5,1,'VetriVel','RNG14','Software Testing','Expert Course','Offline',6,30000.00,35400.00,20000.00,15400.00,'2025-09-23 12:00:43','2025-11-17 10:38:13'),(6,1,'Mohamed Afsar','RNG15','Mobile Application (Flutter)','Professional Course','Online',3,17000.00,20060.00,20060.00,0.00,'2025-09-23 12:01:41','2025-11-17 10:39:50'),(7,1,'Pavitra V','RNG16','Mobile Application (Flutter)','Professional Course','Offline',3,17000.00,20060.00,20060.00,0.00,'2025-09-23 12:02:31','2025-11-17 10:40:25'),(8,1,'Rajesh','RNG09','Full Stack Development','Expert Course','Offline',6,30000.00,30000.00,30000.00,0.00,'2025-09-23 12:03:19','2025-12-02 05:48:38'),(9,1,'Mohamed Nafis','RNG17','Mobile Application','Professional Course','Online',3,210000.00,247800.00,7000.00,240800.00,'2025-11-17 10:36:33','2025-11-17 10:36:33'),(10,1,'Swetha','RNG18','Digital Marketing','Professional Course','Offline',3,17800.00,21004.00,21004.00,0.00,'2025-11-17 10:37:39','2025-11-17 10:41:31'),(11,1,'P. Arun Kumar','RNG20','Digital Marketing','Professional Course','Offline',3,21000.00,24780.00,10000.00,14780.00,'2025-12-08 10:25:24','2025-12-08 10:25:24');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `userStatus` enum('active','inactive') DEFAULT 'active',
  `lastLogin` datetime DEFAULT NULL,
  `token` text,
  `role` varchar(50) DEFAULT 'user',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','Admin@1234','projectmanagerrgc@gmail.com','2025-07-12 11:15:03','active','2025-12-09 16:54:53',NULL,'user'),(2,'user','User@12345','user@gmail.com','2025-07-30 18:19:06','active','2025-07-30 18:19:54','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6InVzZXIiLCJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwic3RhdHVzIjoiYWN0aXZlIiwiaWF0IjoxNzUzODc5Nzk0LCJleHAiOjE3NTM5NjYxOTR9.nlKy9mIVeSo3MA6WdfcMFFuRsrOSjR6fZl27G8FcpAE','user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-27 16:48:36
