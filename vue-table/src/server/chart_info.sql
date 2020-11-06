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

 Date: 06/11/2020 20:08:55
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for chart_info
-- ----------------------------
DROP TABLE IF EXISTS `chart_info`;
CREATE TABLE `chart_info`  (
  `chart_name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `categorys` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `series` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  PRIMARY KEY (`chart_name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of chart_info
-- ----------------------------
INSERT INTO `chart_info` VALUES ('leftBottom', '科室床位使用率及平均住院日', '[\"外科\",\"内科\",\"神经科\",\"呼吸科\",\"儿科\",\"骨科\",\"产科\",\"心内科\",\"皮肤科\"]', '[\"平均住床日\",\"床位使用率\"]');
INSERT INTO `chart_info` VALUES ('leftCenter', '住院重点疾病检测', '[\"甲状腺肿大\",\"糖尿病\",\"累及多部位\",\"脑出血\",\"心肌梗死\",\"出血\",\"肺炎\",\"性疾病\",\"心力衰竭\",\"脑损伤\"]', '[\"本周人数\",\"上周人数\"]');
INSERT INTO `chart_info` VALUES ('leftTop', '重症医学ICU质量检测', '[\"24/48小时\",\"VAP预防\",\"VAP发病\",\"血流感染\",\"泌尿感染\",\"重症死亡\",\"压疮发生\"]', '[\"本周人数\",\"上周人数\"]');
INSERT INTO `chart_info` VALUES ('rightBottom1', '全院收入占比', '[\"医疗收入\",\"药品收入\",\"挂号收入\",\"全院收入\",\"住院收入\",\"门诊收入\"]', '[\"数量\"]');
INSERT INTO `chart_info` VALUES ('rightBottom2', '医学影像人次比对', '[\"B超\",\"心电图\",\"CT\",\"MRI\",\"X光摄影\",\"内镜科\"]', '[\"数量\"]');
INSERT INTO `chart_info` VALUES ('rightBottom3', '医学影像人次比对2', '[\"普通门诊\",\"副主任医师\",\"主任医师\",\"急诊\",\"专家门诊\"]', '[\"数量\"]');
INSERT INTO `chart_info` VALUES ('rightBottom4', '疾病诊断TOP10', '[\"上呼吸道感染\",\"高血压\",\"糖尿病\",\"妊娠反应\",\"支气管炎\",\"屈光不正\",\"胃窦炎\",\"急性肠炎\"]', '[\"数量1\",\"数量2\"]');
INSERT INTO `chart_info` VALUES ('rightTop', '住院重点手术检测', '[\"剖宫产\",\"切除术\",\"脉旁路移植\",\"胰腺切除术\",\"置换术\",\"腹腔镜\",\"动脉介入\",\"颅脑手术\",\"椎板切除\",\"食管切除\"]', '[\"本周人数\",\"上周人数\",\"本月人数\"]');

SET FOREIGN_KEY_CHECKS = 1;
