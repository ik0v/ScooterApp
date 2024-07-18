INSERT INTO scooter (make, model, claimed_range)
VALUES ('Xiaomi', 'Mi Pro 2', 45),
       ('Xiaomi', 'Mi 1S', 30),
       ('Xiaomi', 'Mi Essential', 20),
       ('Xiaomi', 'Mi 3', 30),
       ('Xiaomi', '4 Pro', 45),
       ('QMWHEELS', 'H7', 30),
       ('QMWHEELS', 'H6 Pro', 25),
       ('QMWHEELS', 'H8 Max', 35),
       ('E2S', 'V2 Long Range', 35),
       ('E2S', 'V2 Turbo', 25),
       ('E2S', 'V3 Max', 40),
       ('Segway', 'Ninebot MAX G30', 40),
       ('Ninebot', 'ES4', 28),
       ('Inokim', 'OX Super', 56),
       ('Kaabo', 'Mantis 8', 50),
       ('Vsett', '9+', 90),
       ('Apollo', 'Explore', 55),
       ('Pure', 'Air Pro', 50),
       ('NIU', 'KQi2 Pro', 40),
       ('Kugoo', 'G2 Pro', 50);


-- Owners for Xiaomi Mi Pro 2 (scooter_id = 1)
INSERT INTO owner (name, range, scooter_id)
SELECT CONCAT(first_name, ' ', last_name) AS name, FLOOR(claimed_range * (0.3 + (RANDOM() * 0.65))) AS range, 1 AS scooter_id
FROM (
         VALUES ('Emma', 'Johnson'), ('Liam', 'Smith'), ('Olivia', 'Brown'), ('Noah', 'Taylor'), ('Ava', 'Anderson'),
                ('William', 'Thomas'), ('Sophia', 'Jackson'), ('James', 'White'), ('Isabella', 'Harris'), ('Oliver', 'Martin')
     ) AS users(first_name, last_name)
         CROSS JOIN (
    SELECT claimed_range
    FROM scooter
    WHERE id = 1
) AS scooter_info
ORDER BY RANDOM()
LIMIT 3 + FLOOR(RANDOM() * 8); -- Between 3 and 10 owners

-- Owners for Xiaomi Mi 1S (scooter_id = 2)
INSERT INTO owner (name, range, scooter_id)
SELECT CONCAT(first_name, ' ', last_name) AS name, FLOOR(claimed_range * (0.3 + (RANDOM() * 0.65))) AS range, 2 AS scooter_id
FROM (
         VALUES ('Sophia', 'Moore'), ('Mason', 'Clark'), ('Amelia', 'Hall'), ('Elijah', 'Allen'), ('Charlotte', 'Young'),
                ('Lucas', 'King'), ('Harper', 'Wright'), ('Logan', 'Scott'), ('Evelyn', 'Green'), ('Ethan', 'Baker')
     ) AS users(first_name, last_name)
         CROSS JOIN (
    SELECT claimed_range
    FROM scooter
    WHERE id = 2
) AS scooter_info
ORDER BY RANDOM()
LIMIT 3 + FLOOR(RANDOM() * 8); -- Between 3 and 10 owners

-- Owners for Xiaomi Mi Essential (scooter_id = 3)
INSERT INTO owner (name, range, scooter_id)
SELECT CONCAT(first_name, ' ', last_name) AS name, FLOOR(claimed_range * (0.3 + (RANDOM() * 0.65))) AS range, 3 AS scooter_id
FROM (
         VALUES ('Ella', 'Nelson'), ('Jackson', 'Carter'), ('Mia', 'Mitchell'), ('Aiden', 'Perez'), ('Luna', 'Roberts'),
                ('Grayson', 'Turner'), ('Avery', 'Phillips'), ('Carter', 'Campbell'), ('Lily', 'Parker'), ('Lincoln', 'Evans')
     ) AS users(first_name, last_name)
         CROSS JOIN (
    SELECT claimed_range
    FROM scooter
    WHERE id = 3
) AS scooter_info
ORDER BY RANDOM()
LIMIT 3 + FLOOR(RANDOM() * 8); -- Between 3 and 10 owners

-- Owners for Xiaomi Mi 3 (scooter_id = 4)
INSERT INTO owner (name, range, scooter_id)
SELECT CONCAT(first_name, ' ', last_name) AS name, FLOOR(claimed_range * (0.3 + (RANDOM() * 0.65))) AS range, 4 AS scooter_id
FROM (
         VALUES ('Aria', 'Edwards'), ('Sebastian', 'Collins'), ('Layla', 'Stewart'), ('Henry', 'Sanchez'), ('Ella', 'Morris'),
                ('Benjamin', 'Rogers'), ('Avery', 'Reed'), ('Logan', 'Cook'), ('Aria', 'Morgan'), ('Grace', 'Bell')
     ) AS users(first_name, last_name)
         CROSS JOIN (
    SELECT claimed_range
    FROM scooter
    WHERE id = 4
) AS scooter_info
ORDER BY RANDOM()
LIMIT 3 + FLOOR(RANDOM() * 8); -- Between 3 and 10 owners

-- Owners for Xiaomi 4 Pro (scooter_id = 5)
INSERT INTO owner (name, range, scooter_id)
SELECT CONCAT(first_name, ' ', last_name) AS name, FLOOR(claimed_range * (0.3 + (RANDOM() * 0.65))) AS range, 5 AS scooter_id
FROM (
         VALUES ('Zoey', 'Flores'), ('Hudson', 'Rivera'), ('Luna', 'Gonzalez'), ('Carter', 'Reyes'), ('Harper', 'Kim'),
                ('Aiden', 'Cruz'), ('Oliver', 'Gomez'), ('Mia', 'Washington'), ('Charlotte', 'Hughes'), ('Ethan', 'Griffin')
     ) AS users(first_name, last_name)
         CROSS JOIN (
    SELECT claimed_range
    FROM scooter
    WHERE id = 5
) AS scooter_info
ORDER BY RANDOM()
LIMIT 3 + FLOOR(RANDOM() * 8); -- Between 3 and 10 owners

-- Owners for QMWHEELS H6 Pro (scooter_id = 6)
INSERT INTO owner (name, range, scooter_id)
SELECT CONCAT(first_name, ' ', last_name) AS name, FLOOR(claimed_range * (0.3 + (RANDOM() * 0.65))) AS range, 6 AS scooter_id
FROM (
         VALUES ('Sophie', 'Williams'), ('Mason', 'Jones'), ('Amelia', 'Davis'), ('Elijah', 'Garcia'), ('Charlotte', 'Martinez'),
                ('Lucas', 'Lopez'), ('Harper', 'Wilson'), ('Logan', 'Anderson'), ('Evelyn', 'Thomas'), ('Ethan', 'Taylor')
     ) AS users(first_name, last_name)
         CROSS JOIN (
    SELECT claimed_range
    FROM scooter
    WHERE id = 6
) AS scooter_info
ORDER BY RANDOM()
LIMIT 3 + FLOOR(RANDOM() * 8); -- Between 3 and 10 owners

-- Owners for QMWHEELS H8 Max (scooter_id = 7)
INSERT INTO owner (name, range, scooter_id)
SELECT CONCAT(first_name, ' ', last_name) AS name, FLOOR(claimed_range * (0.3 + (RANDOM() * 0.65))) AS range, 7 AS scooter_id
FROM (
         VALUES ('Ella', 'White'), ('Jackson', 'Harris'), ('Mia', 'Martin'), ('Aiden', 'Thompson'), ('Luna', 'Martinez'),
                ('Grayson', 'Clark'), ('Avery', 'Rodriguez'), ('Carter', 'Lewis'), ('Lily', 'Lee'), ('Lincoln', 'Walker')
     ) AS users(first_name, last_name)
         CROSS JOIN (
    SELECT claimed_range
    FROM scooter
    WHERE id = 7
) AS scooter_info
ORDER BY RANDOM()
LIMIT 3 + FLOOR(RANDOM() * 8); -- Between 3 and 10 owners

-- Owners for E2S V2 (scooter_id = 8)
INSERT INTO owner (name, range, scooter_id)
SELECT CONCAT(first_name, ' ', last_name) AS name, FLOOR(claimed_range * (0.3 + (RANDOM() * 0.65))) AS range, 8 AS scooter_id
FROM (
         VALUES ('Olivia', 'Brown'), ('Liam', 'Smith'), ('Emma', 'Johnson'), ('Noah', 'Williams'), ('Ava', 'Jones'),
                ('Sophia', 'Garcia'), ('Isabella', 'Martinez'), ('Mia', 'Hernandez'), ('Amelia', 'Lopez'), ('Harper', 'Gonzalez')
     ) AS users(first_name, last_name)
         CROSS JOIN (
    SELECT claimed_range
    FROM scooter
    WHERE id = 8
) AS scooter_info
ORDER BY RANDOM()
LIMIT 3 + FLOOR(RANDOM() * 8); -- Between 3 and 10 owners

-- Owners for E2S V2 Long Range (scooter_id = 9)
INSERT INTO owner (name, range, scooter_id)
SELECT CONCAT(first_name, ' ', last_name) AS name, FLOOR(claimed_range * (0.3 + (RANDOM() * 0.65))) AS range, 9 AS scooter_id
FROM (
         VALUES ('Ella', 'Nelson'), ('Jackson', 'Carter'), ('Mia', 'Mitchell'), ('Aiden', 'Perez'), ('Luna', 'Roberts'),
                ('Grayson', 'Turner'), ('Avery', 'Phillips'), ('Carter', 'Campbell'), ('Lily', 'Parker'), ('Lincoln', 'Evans')
     ) AS users(first_name, last_name)
         CROSS JOIN (
    SELECT claimed_range
    FROM scooter
    WHERE id = 9
) AS scooter_info
ORDER BY RANDOM()
LIMIT 3 + FLOOR(RANDOM() * 8); -- Between 3 and 10 owners

-- Owners for E2S V2 Turbo (scooter_id = 10)
INSERT INTO owner (name, range, scooter_id)
SELECT CONCAT(first_name, ' ', last_name) AS name, FLOOR(claimed_range * (0.3 + (RANDOM() * 0.65))) AS range, 10 AS scooter_id
FROM (
         VALUES ('Oliver', 'Hill'), ('Sophia', 'Scott'), ('William', 'Adams'), ('James', 'Baker'), ('Isabella', 'Gonzalez'),
                ('Charlotte', 'Nelson'), ('Benjamin', 'Carter'), ('Mason', 'Mitchell'), ('Lucas', 'Perez'), ('Emma', 'Roberts')
     ) AS users(first_name, last_name)
         CROSS JOIN (
    SELECT claimed_range
    FROM scooter
    WHERE id = 10
) AS scooter_info
ORDER BY RANDOM()
LIMIT 3 + FLOOR(RANDOM() * 8); -- Between 3 and 10 owners

-- Owners for E2S V3 Max (scooter_id = 11)
INSERT INTO owner (name, range, scooter_id)
SELECT CONCAT(first_name, ' ', last_name) AS name, FLOOR(claimed_range * (0.3 + (RANDOM() * 0.65))) AS range, 11 AS scooter_id
FROM (
         VALUES ('Liam', 'Turner'), ('Noah', 'Phillips'), ('Emma', 'Campbell'), ('Ava', 'Parker'), ('Sophia', 'Evans'),
                ('Oliver', 'Edwards'), ('Isabella', 'Collins'), ('Elijah', 'Stewart'), ('Mason', 'Sanchez'), ('Charlotte', 'Morris')
     ) AS users(first_name, last_name)
         CROSS JOIN (
    SELECT claimed_range
    FROM scooter
    WHERE id = 11
) AS scooter_info
ORDER BY RANDOM()
LIMIT 3 + FLOOR(RANDOM() * 8); -- Between 3 and 10 owners

-- Owners for Ninebot Max G30 (scooter_id = 12)
INSERT INTO owner (name, range, scooter_id)
SELECT CONCAT(first_name, ' ', last_name) AS name, FLOOR(claimed_range * (0.3 + (RANDOM() * 0.65))) AS range, 12 AS scooter_id
FROM (
         VALUES ('Luna', 'Ramirez'), ('Henry', 'Flores'), ('Aria', 'Rivera'), ('Sebastian', 'Gomez'), ('Grace', 'Washington'),
                ('Logan', 'Hughes'), ('Ella', 'Griffin'), ('Benjamin', 'Diaz'), ('Sophia', 'Reyes'), ('Jackson', 'Cruz')
     ) AS users(first_name, last_name)
         CROSS JOIN (
    SELECT claimed_range
    FROM scooter
    WHERE id = 12
) AS scooter_info
ORDER BY RANDOM()
LIMIT 3 + FLOOR(RANDOM() * 8); -- Between 3 and 10 owners

-- Owners for Ninebot E25E (scooter_id = 13)
INSERT INTO owner (name, range, scooter_id)
SELECT CONCAT(first_name, ' ', last_name) AS name, FLOOR(claimed_range * (0.3 + (RANDOM() * 0.65))) AS range, 13 AS scooter_id
FROM (
         VALUES ('Mia', 'Harris'), ('Aiden', 'Martin'), ('Lily', 'Lee'), ('Harper', 'Walker'), ('Carter', 'Young'),
                ('Grayson', 'Allen'), ('Evelyn', 'King'), ('Jackson', 'Wright'), ('Lincoln', 'Scott'), ('Avery', 'Green')
     ) AS users(first_name, last_name)
         CROSS JOIN (
    SELECT claimed_range
    FROM scooter
    WHERE id = 13
) AS scooter_info
ORDER BY RANDOM()
LIMIT 3 + FLOOR(RANDOM() * 8); -- Between 3 and 10 owners

-- Owners for Ninebot F40 (scooter_id = 14)
INSERT INTO owner (name, range, scooter_id)
SELECT CONCAT(first_name, ' ', last_name) AS name, FLOOR(claimed_range * (0.3 + (RANDOM() * 0.65))) AS range, 14 AS scooter_id
FROM (
         VALUES ('Olivia', 'Nelson'), ('William', 'Carter'), ('James', 'Mitchell'), ('Isabella', 'Perez'), ('Ava', 'Roberts'),
                ('Mason', 'Turner'), ('Sophia', 'Phillips'), ('Oliver', 'Campbell'), ('Charlotte', 'Parker'), ('Elijah', 'Evans')
     ) AS users(first_name, last_name)
         CROSS JOIN (
    SELECT claimed_range
    FROM scooter
    WHERE id = 14
) AS scooter_info
ORDER BY RANDOM()
LIMIT 3 + FLOOR(RANDOM() * 8); -- Between 3 and 10 owners

-- Owners for Ninebot E45E (scooter_id = 15)
INSERT INTO owner (name, range, scooter_id)
SELECT CONCAT(first_name, ' ', last_name) AS name, FLOOR(claimed_range * (0.3 + (RANDOM() * 0.65))) AS range, 15 AS scooter_id
FROM (
         VALUES ('Liam', 'Edwards'), ('Emma', 'Collins'), ('Noah', 'Stewart'), ('Ava', 'Sanchez'), ('Sophia', 'Morris'),
                ('Oliver', 'Rogers'), ('Isabella', 'Reed'), ('Elijah', 'Cook'), ('Mason', 'Morgan'), ('Charlotte', 'Bell')
     ) AS users(first_name, last_name)
         CROSS JOIN (
    SELECT claimed_range
    FROM scooter
    WHERE id = 15
) AS scooter_info
ORDER BY RANDOM()
LIMIT 3 + FLOOR(RANDOM() * 8); -- Between 3 and 10 owners

-- Owners for Pure Air Pro (scooter_id = 16)
INSERT INTO owner (name, range, scooter_id)
SELECT CONCAT(first_name, ' ', last_name) AS name, FLOOR(claimed_range * (0.3 + (RANDOM() * 0.65))) AS range, 16 AS scooter_id
FROM (
         VALUES ('Zoey', 'Flores'), ('Hudson', 'Rivera'), ('Luna', 'Gonzalez'), ('Carter', 'Reyes'), ('Harper', 'Kim'),
                ('Aiden', 'Cruz'), ('Oliver', 'Gomez'), ('Mia', 'Washington'), ('Charlotte', 'Hughes'), ('Ethan', 'Griffin')
     ) AS users(first_name, last_name)
         CROSS JOIN (
    SELECT claimed_range
    FROM scooter
    WHERE id = 16
) AS scooter_info
ORDER BY RANDOM()
LIMIT 3 + FLOOR(RANDOM() * 8); -- Between 3 and 10 owners

-- Owners for Pure Air Go (scooter_id = 17)
INSERT INTO owner (name, range, scooter_id)
SELECT CONCAT(first_name, ' ', last_name) AS name, FLOOR(claimed_range * (0.3 + (RANDOM() * 0.65))) AS range, 17 AS scooter_id
FROM (
         VALUES ('Sophie', 'Williams'), ('Mason', 'Jones'), ('Amelia', 'Davis'), ('Elijah', 'Garcia'), ('Charlotte', 'Martinez'),
                ('Lucas', 'Lopez'), ('Harper', 'Wilson'), ('Logan', 'Anderson'), ('Evelyn', 'Thomas'), ('Ethan', 'Taylor')
     ) AS users(first_name, last_name)
         CROSS JOIN (
    SELECT claimed_range
    FROM scooter
    WHERE id = 17
) AS scooter_info
ORDER BY RANDOM()
LIMIT 3 + FLOOR(RANDOM() * 8); -- Between 3 and 10 owners

-- Owners for Pure Air Pro LR (scooter_id = 18)
INSERT INTO owner (name, range, scooter_id)
SELECT CONCAT(first_name, ' ', last_name) AS name, FLOOR(claimed_range * (0.3 + (RANDOM() * 0.65))) AS range, 18 AS scooter_id
FROM (
         VALUES ('Ella', 'White'), ('Jackson', 'Harris'), ('Mia', 'Martin'), ('Aiden', 'Thompson'), ('Luna', 'Martinez'),
                ('Grayson', 'Clark'), ('Avery', 'Rodriguez'), ('Carter', 'Lewis'), ('Lily', 'Lee'), ('Lincoln', 'Walker')
     ) AS users(first_name, last_name)
         CROSS JOIN (
    SELECT claimed_range
    FROM scooter
    WHERE id = 18
) AS scooter_info
ORDER BY RANDOM()
LIMIT 3 + FLOOR(RANDOM() * 8); -- Between 3 and 10 owners

-- Owners for Ninebot Max G30E II (scooter_id = 19)
INSERT INTO owner (name, range, scooter_id)
SELECT CONCAT(first_name, ' ', last_name) AS name, FLOOR(claimed_range * (0.3 + (RANDOM() * 0.65))) AS range, 19 AS scooter_id
FROM (
         VALUES ('Ella', 'Nelson'), ('Jackson', 'Carter'), ('Mia', 'Mitchell'), ('Aiden', 'Perez'), ('Luna', 'Roberts'),
                ('Grayson', 'Turner'), ('Avery', 'Phillips'), ('Carter', 'Campbell'), ('Lily', 'Parker'), ('Lincoln', 'Evans')
     ) AS users(first_name, last_name)
         CROSS JOIN (
    SELECT claimed_range
    FROM scooter
    WHERE id = 19
) AS scooter_info
ORDER BY RANDOM()
LIMIT 3 + FLOOR(RANDOM() * 8); -- Between 3 and 10 owners

-- Owners for Pure Air 2nd Generation (scooter_id = 20)
INSERT INTO owner (name, range, scooter_id)
SELECT CONCAT(first_name, ' ', last_name) AS name, FLOOR(claimed_range * (0.3 + (RANDOM() * 0.65))) AS range, 20 AS scooter_id
FROM (
         VALUES ('Oliver', 'Hill'), ('Sophia', 'Scott'), ('William', 'Adams'), ('James', 'Baker'), ('Isabella', 'Gonzalez'),
                ('Charlotte', 'Nelson'), ('Benjamin', 'Carter'), ('Mason', 'Mitchell'), ('Lucas', 'Perez'), ('Emma', 'Roberts')
     ) AS users(first_name, last_name)
         CROSS JOIN (
    SELECT claimed_range
    FROM scooter
    WHERE id = 20
) AS scooter_info
ORDER BY RANDOM()
LIMIT 3 + FLOOR(RANDOM() * 8); -- Between 3 and 10 owners





-- Update real_range for Xiaomi Mi Pro 2 (id = 1)
UPDATE scooter
SET real_range = (SELECT AVG(range) FROM owner WHERE scooter_id = 1)
WHERE id = 1;

-- Update real_range for Xiaomi Mi 1S (id = 2)
UPDATE scooter
SET real_range = (SELECT AVG(range) FROM owner WHERE scooter_id = 2)
WHERE id = 2;

-- Update real_range for Xiaomi Mi Essential (id = 3)
UPDATE scooter
SET real_range = (SELECT AVG(range) FROM owner WHERE scooter_id = 3)
WHERE id = 3;

-- Update real_range for Xiaomi Mi 3 (id = 4)
UPDATE scooter
SET real_range = (SELECT AVG(range) FROM owner WHERE scooter_id = 4)
WHERE id = 4;

-- Update real_range for Xiaomi 4 Pro (id = 5)
UPDATE scooter
SET real_range = (SELECT AVG(range) FROM owner WHERE scooter_id = 5)
WHERE id = 5;

-- Update real_range for QMWHEELS H6 Pro (id = 6)
UPDATE scooter
SET real_range = (SELECT AVG(range) FROM owner WHERE scooter_id = 6)
WHERE id = 6;

-- Update real_range for QMWHEELS H8 Max (id = 7)
UPDATE scooter
SET real_range = (SELECT AVG(range) FROM owner WHERE scooter_id = 7)
WHERE id = 7;

-- Update real_range for E2S V2 Long Range (id = 9)
UPDATE scooter
SET real_range = (SELECT AVG(range) FROM owner WHERE scooter_id = 9)
WHERE id = 9;

-- Update real_range for E2S V2 Turbo (id = 10)
UPDATE scooter
SET real_range = (SELECT AVG(range) FROM owner WHERE scooter_id = 10)
WHERE id = 10;

-- Update real_range for E2S V3 Max (id = 11)
UPDATE scooter
SET real_range = (SELECT AVG(range) FROM owner WHERE scooter_id = 11)
WHERE id = 11;

-- Update real_range for Ninebot Max G30 (id = 12)
UPDATE scooter
SET real_range = (SELECT AVG(range) FROM owner WHERE scooter_id = 12)
WHERE id = 12;

-- Update real_range for Ninebot E25E (id = 13)
UPDATE scooter
SET real_range = (SELECT AVG(range) FROM owner WHERE scooter_id = 13)
WHERE id = 13;

-- Update real_range for Ninebot F40 (id = 14)
UPDATE scooter
SET real_range = (SELECT AVG(range) FROM owner WHERE scooter_id = 14)
WHERE id = 14;

-- Update real_range for Ninebot E45E (id = 15)
UPDATE scooter
SET real_range = (SELECT AVG(range) FROM owner WHERE scooter_id = 15)
WHERE id = 15;

-- Update real_range for Pure Air Pro (id = 16)
UPDATE scooter
SET real_range = (SELECT AVG(range) FROM owner WHERE scooter_id = 16)
WHERE id = 16;

-- Update real_range for Pure Air Go (id = 17)
UPDATE scooter
SET real_range = (SELECT AVG(range) FROM owner WHERE scooter_id = 17)
WHERE id = 17;

-- Update real_range for Pure Air Pro LR (id = 18)
UPDATE scooter
SET real_range = (SELECT AVG(range) FROM owner WHERE scooter_id = 18)
WHERE id = 18;

-- Update real_range for Ninebot Max G30E II (id = 19)
UPDATE scooter
SET real_range = (SELECT AVG(range) FROM owner WHERE scooter_id = 19)
WHERE id = 19;

-- Update real_range for Pure Air 2nd Generation (id = 20)
UPDATE scooter
SET real_range = (SELECT AVG(range) FROM owner WHERE scooter_id = 20)
WHERE id = 20;





