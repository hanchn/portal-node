/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 80023
 Source Host           : localhost:3306
 Source Schema         : blog

 Target Server Type    : MySQL
 Target Server Version : 80023
 File Encoding         : 65001

 Date: 30/06/2022 23:08:27
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for Article
-- ----------------------------
DROP TABLE IF EXISTS `Article`;
CREATE TABLE `Article` (
  `id` int NOT NULL COMMENT '文章id',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '文章名',
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '文章作者',
  `des` varchar(255) DEFAULT NULL COMMENT '文章描述',
  `content` text COMMENT '文章内容',
  `editDate` datetime DEFAULT NULL COMMENT '编辑日期',
  `createDate` datetime DEFAULT NULL COMMENT '创建日期',
  `categoryId` tinyint DEFAULT NULL COMMENT '归属分类',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Category
-- ----------------------------
DROP TABLE IF EXISTS `Category`;
CREATE TABLE `Category` (
  `id` int DEFAULT NULL COMMENT '分类Id',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '目录名'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Comment
-- ----------------------------
DROP TABLE IF EXISTS `Comment`;
CREATE TABLE `Comment` (
  `id` int NOT NULL COMMENT '评论主键',
  `content` varchar(255) DEFAULT NULL COMMENT '评论内容',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户名',
  `commentId` int(10) unsigned zerofill NOT NULL COMMENT '关联ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Login
-- ----------------------------
DROP TABLE IF EXISTS `Login`;
CREATE TABLE `Login` (
  `id` int unsigned NOT NULL AUTO_INCREMENT COMMENT '登录Id',
  `key` tinytext COMMENT '登录key值',
  `userId` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Performance
-- ----------------------------
DROP TABLE IF EXISTS `Performance`;
CREATE TABLE `Performance` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '唯一ID',
  `department` varchar(255) DEFAULT NULL COMMENT '部门',
  `name` varchar(255) DEFAULT NULL COMMENT '姓名',
  `jobNumber` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '工号',
  `performanceLevel` varchar(255) DEFAULT NULL COMMENT '绩效等级',
  `performanceFactor` varchar(255) DEFAULT NULL COMMENT '绩效系数',
  `confirmStatus` varchar(255) DEFAULT NULL COMMENT '本人是否确认',
  `remark` text COMMENT '备注',
  `year` varchar(255) DEFAULT NULL COMMENT '年份',
  `quarter` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '季度',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `jobNumber` (`jobNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=4312 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for User
-- ----------------------------
DROP TABLE IF EXISTS `User`;
CREATE TABLE `User` (
  `id` int unsigned NOT NULL AUTO_INCREMENT COMMENT '用户索引',
  `name` varchar(255) NOT NULL COMMENT '用户名',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '账户名',
  `userpwd` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '123' COMMENT '用户密码',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '头像',
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '用户地址',
  `level` tinyint unsigned NOT NULL DEFAULT '1' COMMENT '用户权限',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

SET FOREIGN_KEY_CHECKS = 1;
