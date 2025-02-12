DROP TABLE IF EXISTS "coffee";

CREATE TABLE "coffee" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT,
  "description" TEXT,
  "price" REAL NOT NULL,
  "category" TEXT,
  "origin" TEXT,
  "reference" INTEGER,
  "available" BOOLEAN
);

set client_encoding to utf8;

INSERT INTO "coffee"("id","name","description","price","category","origin","reference","available") VALUES 
(1,'Espresso','Café fort et concentré préparé en faisant passer de l''eau chaude à travers du café finement moulu.',20.99,'Corsé','Italie',100955890,TRUE),
(2,'Columbian','Café moyennement corsé avec une acidité vive et une saveur riche.',18.75,'Acide','Colombie',100955894,TRUE),
(3,'Ethiopian Yirgacheffe','Réputé pour son arôme floral, son acidité vive et ses notes de saveur citronnée.',22.50,'Fruité','Éthiopie',105589090,TRUE),
(4,'Brazilian Santos','Café doux et lisse avec un profil de saveur de noisette.',17.80,'Doux','Brésil',134009550,TRUE),
(5,'Guatemalan Antigua','Café corsé avec des nuances chocolatées et une pointe d''épice.',21.25,'Corsé','Guatemala',256505890,TRUE),
(6,'Kenyan AA','Café complexe connu pour son acidité rappelant le vin et ses saveurs fruitées.',23.70,'Acide','Kenya',295432730,TRUE),
(7,'Sumatra Mandheling','Café profond et terreux avec un corps lourd et une faible acidité.',19.95,'Corsé','Indonésie',302932754,TRUE),
(8,'Costa Rican Tarrazu','Café vif et net avec une finition propre et une acidité vive.',24.50,'Acide','Costa Rica',327302954,TRUE),
(9,'Vietnamese Robusta','Café audacieux et fort avec une saveur robuste distinctive.',16.75,'Épicé','Vietnam',549549090,TRUE),
(10,'Tanzanian Peaberry','Acidité vive avec un profil de saveur rappelant le vin et un corps moyen.',26.80,'Fruité','Tanzanie',582954954,TRUE),
(11,'Jamaican Blue Mountain','Reconnu pour sa saveur douce, son acidité vive et son absence d''amertume.',39.25,'Doux','Jamaïque',589100954,TRUE),
(12,'Rwandan Bourbon','Café avec des notes florales prononcées, une acidité vive et un corps moyen.',21.90,'Fruité','Rwanda',650753915,TRUE),
(13,'Panamanian Geisha','Café rare aux arômes floraux complexes, une acidité brillante et un profil de saveur distinctif.',42.00,'Fruité','Panama',795501340,TRUE),
(14,'Peruvian Arabica','Café équilibré avec des notes de chocolat, une acidité modérée et un corps velouté.',19.40,'Chocolaté','Pérou',954589100,FALSE),
(15,'Hawaiian Kona','Café rare au goût riche, une acidité douce et des nuances subtiles.',55.75,'Doux','Hawaï',958090105,FALSE),
(16,'Nicaraguan Maragogipe','Café avec des notes de fruits, une acidité vive et un corps plein.',28.60,'Fruité','Nicaragua',691550753,FALSE);

