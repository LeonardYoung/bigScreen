/*
 Navicat Premium Data Transfer

 Source Server         : mysql8
 Source Server Type    : MySQL
 Source Server Version : 80022
 Source Host           : localhost:3306
 Source Schema         : bigscreen

 Target Server Type    : MySQL
 Target Server Version : 80022
 File Encoding         : 65001

 Date: 06/11/2020 20:08:44
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for chart_data
-- ----------------------------
DROP TABLE IF EXISTS `chart_data`;
CREATE TABLE `chart_data`  (
  `chart_name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `series_name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of chart_data
-- ----------------------------
INSERT INTO `chart_data` VALUES ('leftTop', '本周人数', '[\"3\",\"1\",3,\"2\",5,6,7,8,9,10,11,12,13]');
INSERT INTO `chart_data` VALUES ('leftTop', '上周人数', '[2,3,4,5,6,7,8,9,10,11,12,13]');
INSERT INTO `chart_data` VALUES ('leftCenter', '本周人数', '[1,2,3,4,5,6,7,8,9,10,11,12,13]');
INSERT INTO `chart_data` VALUES ('leftCenter', '上周人数', '[2,3,4,5,6,7,8,9,10,11,12,13]');
INSERT INTO `chart_data` VALUES ('leftBottom', '床位使用率', '[1,2,3,4,5,6,7,8,9,10,11,12,13]');
INSERT INTO `chart_data` VALUES ('leftBottom', '平均住床日', '[2,3,4,5,6,7,8,9,10,11,12,13]');
INSERT INTO `chart_data` VALUES ('rightTop', '上周人数', '[1,2,3,4,5,6,7,8,9,10,11,12,13]');
INSERT INTO `chart_data` VALUES ('rightTop', '本周人数', '[2,3,4,5,6,7,8,9,10,11,12,13]');
INSERT INTO `chart_data` VALUES ('rightTop', '本月人数', '[3,4,5,6,7,8,9,10,11,12,13]');
INSERT INTO `chart_data` VALUES ('rightBottom2', '数量', '[1,2,3,4,5,6,7,8,9,10,11,12,13]');
INSERT INTO `chart_data` VALUES ('rightBottom3', '数量', '[1,2,3,4,5,6,7,8,9,10,11,12,13]');
INSERT INTO `chart_data` VALUES ('rightBottom4', '数量1', '[1,2,3,4,5,6,7,8,9,10,11,12,13]');
INSERT INTO `chart_data` VALUES ('rightBottom1', '数量', '[1,2,3,4,5,6,7,8,9,10,11,12,13]');
INSERT INTO `chart_data` VALUES ('rightBottom4', '数量2', '[1,2,3,4,5,6,7,8,9,10,11,12,13]');

SET FOREIGN_KEY_CHECKS = 1;
