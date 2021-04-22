/*
 Navicat Premium Data Transfer

 Source Server         : PostgreSQL 12
 Source Server Type    : PostgreSQL
 Source Server Version : 120003
 Source Host           : localhost:5432
 Source Catalog        : api_new
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 120003
 File Encoding         : 65001

 Date: 21/04/2021 10:30:10
*/


-- ----------------------------
-- Sequence structure for items_itemid_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."items_itemid_seq";
CREATE SEQUENCE "public"."items_itemid_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for transactionItems_itemid_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."transactionItems_itemid_seq";
CREATE SEQUENCE "public"."transactionItems_itemid_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for transactions_transactionid_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."transactions_transactionid_seq";
CREATE SEQUENCE "public"."transactions_transactionid_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for userTypes_userTypeId_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."userTypes_userTypeId_seq";
CREATE SEQUENCE "public"."userTypes_userTypeId_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for users_userid_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."users_userid_seq";
CREATE SEQUENCE "public"."users_userid_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for items
-- ----------------------------
DROP TABLE IF EXISTS "public"."items";
CREATE TABLE "public"."items" (
  "itemid" int4 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
),
  "itemName" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "itemBarcode" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "itemDescription" varchar(500) COLLATE "pg_catalog"."default" NOT NULL,
  "itemPrice" int4 NOT NULL,
  "itemQuantity" int4 NOT NULL,
  "itemStatus" varchar(32) COLLATE "pg_catalog"."default" NOT NULL,
  "userid" int4 NOT NULL
)
;

-- ----------------------------
-- Records of items
-- ----------------------------
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (1, 'Silverado 1500', '66993-062', 'Chevrolet', 2515, 1120, 'Active', 81);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (6, 'Odyssey', '55154-2064', 'Honda', 1761, 1186, 'Active', 57);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (11, '2500 Club Coupe', '54868-6041', 'GMC', 1473, 1477, 'Active', 95);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (12, 'Bronco II', '57955-1806', 'Ford', 1882, 1304, 'Active', 92);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (13, 'Rodeo', '37000-052', 'Isuzu', 2236, 351, 'Active', 60);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (14, 'Metro', '0944-4351', 'Chevrolet', 1994, 1033, 'Active', 78);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (15, 'Yukon', '51206-305', 'GMC', 2775, 1402, 'Active', 37);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (16, 'Spectra', '0168-0037', 'Kia', 934, 763, 'Active', 24);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (17, 'Relay', '0615-7663', 'Saturn', 1627, 767, 'Active', 59);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (18, 'Odyssey', '60681-1106', 'Honda', 760, 402, 'Active', 86);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (19, 'GT-R', '24385-619', 'Nissan', 1434, 1033, 'Active', 63);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (20, 'Phantom', '33261-950', 'Rolls-Royce', 2939, 728, 'Active', 15);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (21, 'Eclipse', '0143-3141', 'Mitsubishi', 1520, 338, 'Active', 28);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (22, 'E-Series', '52083-481', 'Ford', 2525, 956, 'Active', 70);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (23, 'G-Class', '51346-151', 'Mercedes-Benz', 28, 1384, 'Active', 95);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (24, 'Silhouette', '42248-115', 'Oldsmobile', 279, 1113, 'Active', 26);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (25, 'Endeavor', '0074-3163', 'Mitsubishi', 1269, 947, 'Active', 17);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (26, 'MPV', '42961-012', 'Mazda', 2081, 916, 'Active', 52);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (27, 'Vandura G3500', '32909-723', 'GMC', 1773, 697, 'Active', 45);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (28, 'L300', '0942-6307', 'Mitsubishi', 1594, 1485, 'Active', 14);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (29, 'Montero', '61919-211', 'Mitsubishi', 2738, 1262, 'Active', 8);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (30, 'GT', '48951-2015', 'Ford', 661, 1331, 'Active', 32);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (31, '3500 Club Coupe', '0904-5754', 'GMC', 2618, 1474, 'Active', 14);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (32, 'A8', '68988-010', 'Audi', 2750, 571, 'Active', 46);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (33, 'XK Series', '31720-205', 'Jaguar', 1208, 899, 'Active', 67);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (34, 'T100 Xtra', '59091-1001', 'Toyota', 1697, 461, 'Active', 97);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (35, 'Jetta', '50523-739', 'Volkswagen', 776, 1072, 'Active', 47);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (36, 'Element', '52959-822', 'Honda', 1272, 1428, 'Active', 34);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (37, '80', '54868-4609', 'Audi', 1709, 901, 'Active', 5);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (38, 'Relay', '65162-003', 'Saturn', 2100, 907, 'Active', 53);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (39, 'F250', '0904-6341', 'Ford', 1111, 332, 'Active', 19);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (40, 'Chevette', '67345-6080', 'Pontiac', 1817, 8, 'Active', 92);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (41, 'ES', '55056-0818', 'Lexus', 606, 1346, 'Active', 77);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (42, 'Camry Hybrid', '68016-351', 'Toyota', 2637, 213, 'Active', 89);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (43, 'Tracer', '0054-2526', 'Mercury', 1653, 1040, 'Active', 100);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (44, 'I', '55154-3348', 'Infiniti', 440, 1043, 'Active', 81);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (45, 'Land Cruiser', '53746-511', 'Toyota', 2691, 832, 'Active', 31);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (46, 'Montero', '50268-402', 'Mitsubishi', 1238, 1312, 'Active', 27);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (47, 'Intrigue', '36987-2409', 'Oldsmobile', 2285, 746, 'Active', 72);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (48, 'MKX', '31722-329', 'Lincoln', 1474, 965, 'Active', 75);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (49, 'Mark VII', '64117-988', 'Lincoln', 2237, 1123, 'Active', 17);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (50, '4Runner', '43063-460', 'Toyota', 1747, 683, 'Active', 81);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (51, 'Cabriolet', '55111-533', 'Audi', 1402, 1416, 'Active', 40);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (52, 'Jetta', '62670-4780', 'Volkswagen', 1344, 125, 'Active', 24);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (53, 'Coachbuilder', '54868-4740', 'Buick', 2759, 1202, 'Active', 14);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (54, 'TT', '67544-361', 'Audi', 2274, 492, 'Active', 23);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (55, 'Astro', '53329-826', 'Chevrolet', 248, 774, 'Active', 75);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (56, 'Regal', '0310-0208', 'Buick', 731, 606, 'Active', 104);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (57, 'Continental Mark VII', '35356-738', 'Lincoln', 2229, 799, 'Active', 83);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (58, '200SX', '63868-090', 'Nissan', 1822, 1468, 'Active', 101);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (59, 'Accent', '68604-023', 'Hyundai', 2955, 1298, 'Active', 63);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (60, 'A6', '49580-1417', 'Audi', 347, 27, 'Active', 96);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (61, 'Navigator', '68788-9909', 'Lincoln', 537, 1211, 'Active', 50);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (62, 'W201', '55154-9412', 'Mercedes-Benz', 1873, 803, 'Active', 22);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (63, 'Sportage', '67296-0375', 'Kia', 403, 729, 'Active', 57);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (64, 'Suburban 1500', '37808-346', 'Chevrolet', 979, 116, 'Active', 50);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (65, '240SX', '54569-2861', 'Nissan', 1173, 1096, 'Active', 53);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (66, 'Expedition', '61715-081', 'Ford', 171, 1384, 'Active', 42);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (67, 'Eclipse', '64125-118', 'Mitsubishi', 1463, 629, 'Active', 88);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (68, 'Diablo', '0074-1564', 'Lamborghini', 1035, 922, 'Active', 27);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (69, '5000S', '52125-412', 'Audi', 2020, 1278, 'Active', 29);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (70, 'B-Series', '50436-3011', 'Mazda', 836, 615, 'Active', 39);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (71, 'Rio', '55319-059', 'Kia', 2106, 52, 'Active', 35);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (72, 'Catera', '68983-003', 'Cadillac', 2202, 905, 'Active', 64);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (73, 'Corvette', '10544-016', 'Chevrolet', 1054, 383, 'Active', 91);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (74, 'GTI', '48951-9029', 'Volkswagen', 1697, 346, 'Active', 92);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (75, 'Accent', '65162-704', 'Hyundai', 633, 475, 'Active', 12);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (76, 'Crown Victoria', '54569-3693', 'Ford', 2316, 550, 'Active', 66);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (77, 'Montana', '41250-597', 'Pontiac', 1369, 1060, 'Active', 47);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (78, 'Achieva', '35000-870', 'Oldsmobile', 149, 29, 'Active', 19);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (79, 'Thunderbird', '10337-477', 'Ford', 558, 1195, 'Active', 83);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (80, 'Charger', '63629-4658', 'Dodge', 1550, 367, 'Active', 33);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (81, 'Murciélago', '68151-3048', 'Lamborghini', 695, 1311, 'Active', 17);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (82, 'G-Class', '0615-0327', 'Mercedes-Benz', 1009, 1193, 'Active', 16);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (83, 'Concorde', '66336-377', 'Chrysler', 1065, 1215, 'Active', 9);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (84, 'Sorento', '72036-230', 'Kia', 2334, 236, 'Active', 16);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (85, 'Galant', '37000-101', 'Mitsubishi', 502, 777, 'Active', 82);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (86, 'SVX', '62011-0232', 'Subaru', 2155, 1485, 'Active', 80);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (87, 'Sorento', '51532-6103', 'Kia', 1504, 1001, 'Active', 96);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (88, 'C70', '42254-222', 'Volvo', 295, 536, 'Active', 18);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (89, 'Raider', '0378-2722', 'Mitsubishi', 485, 1277, 'Active', 52);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (90, 'Century', '0299-3838', 'Buick', 2145, 191, 'Active', 47);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (91, 'Passat', '36987-1054', 'Volkswagen', 1463, 1304, 'Active', 31);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (92, 'Z4 M', '49288-0369', 'BMW', 1857, 338, 'Active', 102);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (93, 'Prizm', '63629-4171', 'Geo', 2712, 512, 'Active', 51);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (94, '300', '52125-890', 'Chrysler', 2391, 334, 'Active', 99);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (95, 'Forte', '55312-076', 'Kia', 2927, 851, 'Active', 71);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (96, 'Eclipse', '65862-031', 'Mitsubishi', 437, 216, 'Active', 9);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (97, 'Safari', '60429-946', 'GMC', 107, 172, 'Active', 55);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (98, 'CR-V', '57844-510', 'Honda', 1781, 1285, 'Active', 56);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (99, 'Viper', '54868-5604', 'Dodge', 1357, 493, 'Active', 37);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (100, 'Seville', '0093-4145', 'Cadillac', 2523, 521, 'Active', 47);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (9, 'RAV4', '42291-169', 'Toyota', 2298, 327, 'Active', 41);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (4, 'EX', '48951-5075', 'Infiniti', 539, 887, 'Active', 55);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (5, 'Galaxie', '57520-0014', 'Ford', 1488, 917, 'Active', 29);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (7, 'Grand Marquis', '51596-006', 'Mercury', 111, 571, 'Active', 104);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (10, 'Yukon XL 2500', '37808-161', 'GMC', 516, 720, 'Active', 13);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (3, 'Volt', '21695-376', 'Chevrolet', 1709, 1195, 'Active', 51);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (101, 'Tome of Strength', 'STR+++++', 'Increases STR stat', 9999, 5, 'Active', 205);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (102, 'Tome of Agility', 'AGI+++++', 'Increases AGI stat', 9999, 5, 'Active', 205);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (103, 'Tome of Intelligence', 'INT+++++', 'Increases INT stat', 9999, 5, 'Active', 205);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (104, 'Rejuvination Pill', 'REJ*&!@(', 'Revitalizes health', 999, 20, 'Active', 205);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (2, 'Azera', '49348-846', 'Hyundai', 1956, 1674, 'Active', 57);
INSERT INTO "public"."items" OVERRIDING SYSTEM VALUE VALUES (8, 'G-Series 2500', '62985-5082', 'Chevrolet', 2438, 1479, 'Active', 33);

-- ----------------------------
-- Table structure for transactionItems
-- ----------------------------
DROP TABLE IF EXISTS "public"."transactionItems";
CREATE TABLE "public"."transactionItems" (
  "itemid" int4 NOT NULL GENERATED BY DEFAULT AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
),
  "itemQuantity" int4 NOT NULL,
  "transactionid" int4 NOT NULL,
  "subTotal" numeric(255,0) NOT NULL
)
;

-- ----------------------------
-- Records of transactionItems
-- ----------------------------
INSERT INTO "public"."transactionItems" VALUES (101, 5, 230, 49995);
INSERT INTO "public"."transactionItems" VALUES (102, 5, 230, 49995);
INSERT INTO "public"."transactionItems" VALUES (103, 5, 230, 49995);
INSERT INTO "public"."transactionItems" VALUES (101, 1, 231, 9999);
INSERT INTO "public"."transactionItems" VALUES (102, 1, 231, 9999);
INSERT INTO "public"."transactionItems" VALUES (103, 1, 231, 9999);
INSERT INTO "public"."transactionItems" VALUES (2, 400, 232, 498);
INSERT INTO "public"."transactionItems" VALUES (5, 800, 232, 98);
INSERT INTO "public"."transactionItems" VALUES (3, 62, 233, 3982);
INSERT INTO "public"."transactionItems" VALUES (2, -5, 233, 500);
INSERT INTO "public"."transactionItems" VALUES (4, -5, 233, 500);
INSERT INTO "public"."transactionItems" VALUES (5, -5, 233, 500);
INSERT INTO "public"."transactionItems" VALUES (7, -5, 233, 500);
INSERT INTO "public"."transactionItems" VALUES (8, -5, 233, 500);
INSERT INTO "public"."transactionItems" VALUES (9, -5, 233, 500);
INSERT INTO "public"."transactionItems" VALUES (10, -5, 233, 500);
INSERT INTO "public"."transactionItems" VALUES (3, 62, 234, 3982);
INSERT INTO "public"."transactionItems" VALUES (2, -5, 234, 500);
INSERT INTO "public"."transactionItems" VALUES (4, -5, 234, 500);
INSERT INTO "public"."transactionItems" VALUES (5, -5, 234, 500);
INSERT INTO "public"."transactionItems" VALUES (7, -5, 234, 500);
INSERT INTO "public"."transactionItems" VALUES (8, -5, 234, 500);
INSERT INTO "public"."transactionItems" VALUES (9, -5, 234, 500);
INSERT INTO "public"."transactionItems" VALUES (10, -5, 234, 500);
INSERT INTO "public"."transactionItems" VALUES (8, 2, 235, 4876);

-- ----------------------------
-- Table structure for transactions
-- ----------------------------
DROP TABLE IF EXISTS "public"."transactions";
CREATE TABLE "public"."transactions" (
  "transactionid" int4 NOT NULL GENERATED BY DEFAULT AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
),
  "userid" int4 NOT NULL,
  "transactionDate" date NOT NULL,
  "grandTotal" int4 NOT NULL,
  "deliveryDate" date,
  "transactionType" varchar(32) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of transactions
-- ----------------------------
INSERT INTO "public"."transactions" VALUES (230, 205, '2021-04-20', 149985, '2021-04-20', 'delivery');
INSERT INTO "public"."transactions" VALUES (231, 206, '2021-04-20', 29997, NULL, 'Sales');
INSERT INTO "public"."transactions" VALUES (232, 3, '2021-04-20', 98, '2021-04-04', 'delivery');
INSERT INTO "public"."transactions" VALUES (233, 1, '2021-04-20', 98, NULL, 'Sales');
INSERT INTO "public"."transactions" VALUES (234, 1, '2021-04-20', 98, NULL, 'Sales');
INSERT INTO "public"."transactions" VALUES (235, 5, '2021-04-20', 4876, '2021-04-20', 'delivery');

-- ----------------------------
-- Table structure for userTypes
-- ----------------------------
DROP TABLE IF EXISTS "public"."userTypes";
CREATE TABLE "public"."userTypes" (
  "userTypeId" int4 NOT NULL GENERATED BY DEFAULT AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
),
  "userTypeName" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of userTypes
-- ----------------------------
INSERT INTO "public"."userTypes" VALUES (1, 'Admin');
INSERT INTO "public"."userTypes" VALUES (2, 'Employee');
INSERT INTO "public"."userTypes" VALUES (3, 'Customer');
INSERT INTO "public"."userTypes" VALUES (4, 'Supplier');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS "public"."users";
CREATE TABLE "public"."users" (
  "userid" int4 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
),
  "userName" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "userContact" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "userAddress" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "userStatus" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "userTypeId" int4 NOT NULL,
  "password" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (5, 'Devbug', '3441076147', '285 Johnson Street', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (6, 'Fanoodle', '4059205423', '119 Mosinee Avenue', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (7, 'Zoomcast', '1246337047', '225 Boyd Alley', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (8, 'Yombu', '7204015449', '03 Eagle Crest Court', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (9, 'Fiveclub', '6524390721', '85669 Esch Court', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (10, 'InnoZ', '3031176924', '706 Drewry Place', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (11, 'Blogpad', '7188314106', '6 Springview Terrace', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (12, 'Ntags', '5546220108', '9669 Messerschmidt Park', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (13, 'Babblestorm', '7808909483', '7946 Jenifer Park', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (14, 'Linktype', '8289065773', '525 Erie Parkway', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (15, 'Quatz', '1402600549', '15634 8th Pass', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (16, 'Buzzster', '8776371230', '6 Northland Trail', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (17, 'Muxo', '8041923166', '3001 Roth Drive', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (18, 'Gabcube', '3131305024', '8327 Magdeline Parkway', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (19, 'Oyoba', '9303408971', '10427 Lillian Terrace', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (20, 'Demivee', '3296262988', '151 Cardinal Way', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (21, 'Bluejam', '7574729456', '24681 Duke Hill', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (22, 'Wordtune', '1489153437', '650 Holy Cross Crossing', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (23, 'Bubblemix', '2757635616', '9 Namekagon Trail', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (24, 'Twitternation', '6464611457', '8 5th Plaza', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (25, 'Livefish', '9616868343', '76 Arkansas Pass', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (26, 'Feedfish', '6481074074', '36072 Mendota Lane', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (27, 'Realmix', '4156963856', '96848 Oak Park', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (28, 'Wordify', '8495312654', '4 Hoffman Terrace', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (29, 'Ntag', '3215395901', '853 Waubesa Court', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (30, 'Youfeed', '1377015868', '52614 School Lane', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (31, 'Mydo', '6885087881', '1 Mendota Place', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (32, 'Yata', '5163429897', '6600 Truax Park', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (33, 'Quatz', '7658262682', '09373 Delladonna Lane', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (34, 'Ntags', '9776295797', '383 Haas Park', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (35, 'Trupe', '1689824659', '4 Miller Way', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (36, 'Voonte', '6943022376', '6185 North Plaza', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (37, 'Roomm', '7416693573', '666 Anderson Avenue', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (38, 'Gigazoom', '4829445331', '06 Starling Center', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (39, 'Skippad', '2223030050', '155 Debs Junction', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (40, 'Yakijo', '2398185910', '88892 Homewood Drive', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (41, 'Kamba', '5303575950', '969 North Plaza', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (42, 'Eayo', '3176902423', '3510 Hoard Drive', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (43, 'Tagtune', '9769865014', '4 Westerfield Parkway', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (44, 'Jaxworks', '4411563077', '37540 Surrey Hill', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (45, 'Wikibox', '3798088391', '95247 Orin Center', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (1, 'Unregistered Customer', 'No Contact', 'No Address', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (2, 'admin', 'No Contact', 'No Address', 'Active', 1, 'admin');
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (3, 'Unregistered Supplier', 'No Contact', 'No Address', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (4, 'employee', 'No Contact', 'No Address', 'Active', 2, 'employee');
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (46, 'Devshare', '2017349097', '7 Meadow Ridge Avenue', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (47, 'Meembee', '2917805155', '7069 Nova Way', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (48, 'Demivee', '1036383731', '8 International Plaza', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (49, 'Jayo', '9134660124', '672 Summer Ridge Parkway', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (50, 'Edgeify', '6331061109', '67 Toban Road', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (51, 'Centidel', '1109150105', '4 Sugar Circle', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (52, 'Aivee', '6772083894', '6207 Main Center', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (53, 'Livetube', '2015053973', '053 Delaware Street', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (54, 'Zoovu', '6922649512', '9 Coleman Pass', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (55, 'Linklinks', '2082096622', '88 Sunnyside Pass', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (56, 'Shufflebeat', '7884675339', '96738 Shopko Parkway', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (57, 'Realcube', '6291432781', '87894 Spaight Pass', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (58, 'Photobean', '4544950484', '42 Loftsgordon Parkway', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (59, 'Innotype', '4292048161', '2 Eastlawn Terrace', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (60, 'Realcube', '7907145804', '58586 Rusk Way', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (61, 'Thoughtstorm', '1103556729', '688 Division Parkway', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (62, 'Twitterbridge', '7525769574', '0 Esch Plaza', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (63, 'Quimm', '6252450583', '968 Novick Road', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (64, 'Feedfish', '4621930306', '9 Roth Parkway', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (65, 'Tambee', '3595561224', '05640 Reindahl Street', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (66, 'Gigabox', '7969017875', '5 Surrey Circle', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (67, 'Zoomlounge', '1041659488', '55267 Stone Corner Place', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (68, 'Oba', '6705516678', '7 Kensington Terrace', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (69, 'Yabox', '2778830297', '2 Parkside Terrace', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (70, 'Cogidoo', '5667543054', '79 Kingsford Place', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (71, 'Dazzlesphere', '4892700839', '42 Katie Street', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (72, 'Rhyzio', '1483795733', '323 Waywood Place', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (73, 'Jayo', '7509415687', '17312 Shopko Park', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (74, 'Topiclounge', '5732604590', '2 Derek Trail', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (75, 'Mydo', '4277757867', '7 Monument Park', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (76, 'Wikido', '8066922379', '76136 Welch Hill', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (77, 'Yadel', '4957777591', '46712 Hanson Pass', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (78, 'Topicstorm', '8295675473', '97 Pearson Alley', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (79, 'Feedmix', '8173188476', '91472 Aberg Drive', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (80, 'Fivechat', '6617446066', '0 2nd Drive', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (81, 'Jabbersphere', '5443515607', '43 Esker Plaza', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (82, 'Flipbug', '7661241893', '705 Spenser Center', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (83, 'Ainyx', '2561688401', '60 Longview Road', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (84, 'Jaxspan', '6649430417', '1622 Di Loreto Center', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (85, 'Talane', '5632561699', '89843 Sherman Pass', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (86, 'Camimbo', '8723081361', '70571 Ridgeway Hill', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (87, 'Thoughtsphere', '1537254370', '39820 Cordelia Lane', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (88, 'Vinder', '5257723665', '47 Pierstorff Park', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (89, 'Lazzy', '2823083576', '05751 Graedel Crossing', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (90, 'Mita', '2497946530', '937 Doe Crossing Crossing', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (91, 'Mycat', '6843978537', '750 Glacier Hill Terrace', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (92, 'Podcat', '5164246351', '79544 Darwin Junction', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (93, 'Skyba', '3579549027', '7 Jackson Place', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (94, 'Livefish', '4034138980', '6 Bowman Trail', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (95, 'Skyndu', '8034235316', '0020 Arkansas Avenue', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (96, 'Realfire', '5583460057', '9 Sherman Junction', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (97, 'Dabfeed', '2847659096', '66636 Clyde Gallagher Circle', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (98, 'Skipstorm', '7227101124', '544 Westend Hill', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (99, 'Trupe', '9196294349', '5729 3rd Pass', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (100, 'Latz', '6847562550', '1991 Merry Crossing', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (101, 'Kwilith', '2074672512', '680 Merchant Avenue', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (102, 'Wikibox', '7046467533', '777 Dexter Junction', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (103, 'Livetube', '4108396254', '430 South Way', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (104, 'Browsecat', '3847150771', '27 Melvin Way', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (105, 'Laurella Madle', '4147808774', '99 Dixon Crossing', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (106, 'Byrann Howsden', '7506363753', '3 Russell Avenue', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (107, 'Olly Maplethorp', '4976463179', '103 Fieldstone Alley', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (108, 'Gratiana Stranger', '4393224679', '4146 Fieldstone Crossing', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (109, 'Alain Hagan', '7793007410', '16966 Brentwood Crossing', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (110, 'Ailsun Walding', '8809214600', '04 Valley Edge Park', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (111, 'Leland Bowell', '2457004625', '36291 Mitchell Lane', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (112, 'Bobby Eastop', '9068822276', '6 7th Place', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (113, 'Gael Radoux', '2396750050', '1158 Darwin Street', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (114, 'Phaidra Gommowe', '7468835560', '6201 Havey Drive', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (115, 'Winslow Glewe', '7196450017', '18 Tennessee Junction', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (116, 'Alie Oddy', '2647315275', '065 Hooker Trail', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (117, 'Maribel Cleaver', '3167106294', '93466 Waxwing Junction', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (118, 'Ellen Moors', '3364992270', '94 Riverside Circle', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (119, 'Lisetta Broxton', '2577191054', '67 Prentice Avenue', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (120, 'Eryn MacLardie', '2602683926', '7104 Truax Drive', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (121, 'Marie-ann Fanti', '2842123102', '23495 Cardinal Court', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (122, 'Rowan Ashingden', '4097566257', '3 Oak Valley Road', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (123, 'Tansy Carnell', '5794766328', '33973 Iowa Center', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (124, 'Richart Placidi', '7591089203', '03 Reindahl Court', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (125, 'Orazio Hurlin', '6105341119', '51503 Prairieview Drive', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (126, 'Emalee Berndsen', '5685402441', '97364 Onsgard Drive', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (127, 'Brunhilde Parfrey', '6821390111', '46 Green Ridge Circle', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (128, 'Derick Buffin', '2376665877', '90 Mayer Circle', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (129, 'Jessie Doleman', '6517291336', '65 Hintze Place', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (130, 'Yard Gallgher', '6786412692', '00797 Manitowish Junction', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (131, 'Octavius Caesman', '4352566728', '20935 Evergreen Road', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (132, 'Templeton Merigot', '1172300291', '66924 Utah Point', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (133, 'Marissa Costen', '6369069218', '83595 Toban Trail', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (134, 'Caryl Bigland', '7783557821', '97960 Cordelia Street', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (135, 'Silvan Boyford', '7074463421', '79396 Fairfield Way', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (136, 'Riobard Robjohns', '1963875055', '90 Lillian Circle', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (137, 'Scotty Skinn', '6619257112', '20 La Follette Terrace', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (138, 'Leandra Biaggi', '7935463839', '03 Cordelia Plaza', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (139, 'Becka Boddymead', '4399186469', '28 Meadow Valley Crossing', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (140, 'John Cleworth', '8136401882', '606 Waxwing Plaza', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (141, 'Alis Haton', '2701484902', '693 Village Crossing', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (142, 'Nicky Perico', '9332370036', '0948 Anniversary Trail', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (143, 'Ame Loude', '6482533214', '16 Lawn Crossing', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (144, 'Broddie Shippam', '3471999455', '7995 Evergreen Avenue', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (145, 'Francine Delany', '4537429444', '58679 Springview Crossing', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (146, 'Selinda Mearns', '8694470044', '9267 Reindahl Avenue', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (147, 'Michaella Yea', '1454539437', '3256 Dwight Avenue', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (148, 'Lillian Halpeine', '3418973550', '0 Dayton Alley', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (149, 'Bartolemo Shalcros', '4021865155', '8 Thierer Plaza', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (150, 'Augusto Waddoups', '6509399262', '7655 Westridge Alley', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (151, 'Athene Bozworth', '8595065232', '6 Blue Bill Park Trail', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (152, 'Nedda Sleightholme', '4379501469', '3 Gulseth Lane', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (153, 'Goldi Hannigan', '1061936584', '2 Holy Cross Junction', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (154, 'Auria Sharply', '1555660324', '696 Clove Trail', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (155, 'Uriel Alfwy', '2151101001', '76887 Pennsylvania Lane', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (156, 'Rossie Hadigate', '6234798166', '85570 Petterle Drive', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (157, 'Lorraine Freyn', '3495713466', '6 2nd Plaza', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (158, 'Sauncho Dyhouse', '8089549100', '6 Hauk Alley', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (159, 'Jenine MacCourt', '1304121541', '72 Melrose Crossing', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (160, 'Baillie Benedetti', '4597796034', '66084 Sullivan Parkway', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (161, 'Ward Snazle', '6746575467', '3 Dawn Parkway', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (162, 'Julietta Dabs', '5803699908', '5 Logan Pass', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (163, 'Rip Sporle', '9264975724', '2764 Buena Vista Road', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (164, 'Jaquelyn Stratley', '8175828010', '8 Oneill Park', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (165, 'Tandi Badgers', '7282437264', '2 Di Loreto Road', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (166, 'Thayne McReynold', '4573322358', '5589 Monument Way', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (167, 'Bradley Vannozzii', '3102529568', '3 Scoville Park', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (168, 'Clareta Teale', '6729949525', '928 Elmside Road', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (169, 'Roselia Bridgwater', '6321532329', '59 Donald Parkway', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (170, 'Rafi Hendrikse', '6935361184', '27104 Bunting Plaza', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (171, 'Derwin Camelin', '7485014610', '98 Bobwhite Alley', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (172, 'Catlaina Rubanenko', '7549454328', '404 Oxford Crossing', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (173, 'Patience Roseblade', '3787053654', '6 Hansons Alley', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (174, 'Connie Hathway', '8021622290', '1353 Beilfuss Hill', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (175, 'Todd Giron', '2187544506', '88411 Crest Line Circle', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (176, 'Hersch Pendall', '8646023280', '4 Delladonna Street', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (177, 'Magdalena Swansbury', '7031751035', '463 Hoffman Park', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (178, 'Eward Moden', '9816644559', '60469 Doe Crossing Road', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (179, 'Linnea Snazel', '5593668884', '06 Sherman Point', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (180, 'Tracie Hawket', '3504567171', '69 Green Lane', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (181, 'Dotti Rupel', '5884540108', '1 Cambridge Circle', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (182, 'Ruy Maskrey', '5737679902', '958 Hagan Park', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (183, 'Jan Navan', '1877491987', '206 Sutherland Plaza', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (184, 'Anders Kenna', '7336286935', '7527 Kinsman Drive', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (185, 'Sibel Philp', '7035551661', '348 Union Hill', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (186, 'Almeda Phelipeau', '3096416254', '7 Bunker Hill Way', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (187, 'Raffarty Fawlkes', '7912701097', '99514 Hollow Ridge Hill', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (188, 'Neysa Kleinschmidt', '7524724494', '69692 Cordelia Terrace', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (189, 'Addy Feedham', '4847890448', '3 Thackeray Point', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (190, 'Kerry Murdy', '2804754811', '2128 Sommers Plaza', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (191, 'Shirl Panchen', '8867869722', '10 Butternut Alley', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (192, 'Timmie Barabisch', '3343764264', '16 Oak Valley Avenue', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (193, 'Sallie Godsell', '5201147639', '156 Cambridge Road', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (194, 'Lorene Kobiela', '5631701489', '7 Autumn Leaf Street', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (195, 'Iorgo Charnley', '9679629294', '9290 Spenser Way', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (196, 'Zacharia Swatheridge', '4447644609', '182 Oakridge Hill', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (197, 'Tess Sibbs', '4221053318', '50 Sycamore Drive', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (198, 'Tamar Broadist', '8923266515', '2337 Beilfuss Point', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (199, 'Haley Hawes', '9162218232', '266 Comanche Terrace', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (200, 'Jasper Mereweather', '9524049584', '4 Blaine Junction', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (201, 'Paola Amies', '2032393930', '1280 Hintze Park', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (202, 'Wally MacKeig', '1284610917', '47 Eliot Junction', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (203, 'Nicol Danielli', '3497868807', '6452 Maple Street', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (204, 'Andriana Cartmer', '1027063912', '43464 Manitowish Alley', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (205, 'Golden Pavillion', '71290371', 'Golden City', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (206, 'Han Li', '98209182', 'Spirit Realm', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (207, 'Ashe', '0128390123', 'Freljord', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (208, 'Ashe', '091823091', 'Freljord', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (209, 'Blitcrank', 'No Contact', 'No Address', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (210, 'Blitcrankasd', 'No Contact', 'No Address', 'Active', 4, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (211, 'Waarasdesadfasdfn', '98102391', '5 Kings Place', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (212, 'Waarasdadfasdfn', '982391', '5 Kings Place', 'Active', 3, NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (213, 'Waarasdadsdfn', '2391', '5 Kings Place', 'Active', 3, NULL);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."items_itemid_seq"
OWNED BY "public"."items"."itemid";
SELECT setval('"public"."items_itemid_seq"', 105, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."transactionItems_itemid_seq"
OWNED BY "public"."transactionItems"."itemid";
SELECT setval('"public"."transactionItems_itemid_seq"', 8, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."transactions_transactionid_seq"
OWNED BY "public"."transactions"."transactionid";
SELECT setval('"public"."transactions_transactionid_seq"', 236, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."userTypes_userTypeId_seq"
OWNED BY "public"."userTypes"."userTypeId";
SELECT setval('"public"."userTypes_userTypeId_seq"', 5, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."users_userid_seq"
OWNED BY "public"."users"."userid";
SELECT setval('"public"."users_userid_seq"', 217, true);

-- ----------------------------
-- Primary Key structure for table items
-- ----------------------------
ALTER TABLE "public"."items" ADD CONSTRAINT "items_pkey" PRIMARY KEY ("itemid");

-- ----------------------------
-- Primary Key structure for table transactions
-- ----------------------------
ALTER TABLE "public"."transactions" ADD CONSTRAINT "transactions_pkey" PRIMARY KEY ("transactionid");

-- ----------------------------
-- Primary Key structure for table userTypes
-- ----------------------------
ALTER TABLE "public"."userTypes" ADD CONSTRAINT "userTypes_pkey" PRIMARY KEY ("userTypeId");

-- ----------------------------
-- Primary Key structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("userid");

-- ----------------------------
-- Foreign Keys structure for table items
-- ----------------------------
ALTER TABLE "public"."items" ADD CONSTRAINT "items_userId_fkey" FOREIGN KEY ("userid") REFERENCES "public"."users" ("userid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table transactionItems
-- ----------------------------
ALTER TABLE "public"."transactionItems" ADD CONSTRAINT "itemid" FOREIGN KEY ("itemid") REFERENCES "public"."items" ("itemid") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."transactionItems" ADD CONSTRAINT "transactionid" FOREIGN KEY ("transactionid") REFERENCES "public"."transactions" ("transactionid") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table transactions
-- ----------------------------
ALTER TABLE "public"."transactions" ADD CONSTRAINT "userid" FOREIGN KEY ("userid") REFERENCES "public"."users" ("userid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "users_userTypeId_fkey" FOREIGN KEY ("userTypeId") REFERENCES "public"."userTypes" ("userTypeId") ON DELETE NO ACTION ON UPDATE NO ACTION;
