-- Удалить товар Backpro (Варикоз)
DELETE FROM products WHERE id = 15;

-- Обновить категории для оставшихся товаров
UPDATE products SET category = 'skin-health' WHERE id = 1;
UPDATE products SET category = 'heart-health' WHERE id = 2;
UPDATE products SET category = 'weight-loss' WHERE id = 3;
UPDATE products SET category = 'parasites' WHERE id = 4;
UPDATE products SET category = 'prostate-health' WHERE id = 5;
UPDATE products SET category = 'mens-health' WHERE id = 6;
UPDATE products SET category = 'hearing-health' WHERE id = 7;
UPDATE products SET category = 'bone-joint' WHERE id = 8;
UPDATE products SET category = 'psoriasis' WHERE id = 9;
UPDATE products SET category = 'mens-health' WHERE id = 10;
UPDATE products SET category = 'hemorrhoids' WHERE id = 11;
UPDATE products SET category = 'weight-loss' WHERE id = 14;