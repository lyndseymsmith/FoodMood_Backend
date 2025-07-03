DELETE FROM recipes;


INSERT INTO recipes (title, mood, description, ingredients, instructions) VALUES
('Happy Pancakes', 'happy', 'Fluffy pancakes with syrup to brighten your day!', ARRAY['Flour', 'Eggs', 'Milk', 'Sugar'], 'Mix all and fry in pan.'),
('Sunshine Smoothie', 'happy', 'A tropical blend to energize your morning.', ARRAY['Banana', 'Pineapple', 'Orange juice', 'Yogurt'], 'Blend all ingredients until smooth.'),
('Joyful Fruit Salad', 'happy', 'A colorful mix of your favorite fruits.', ARRAY['Strawberries', 'Blueberries', 'Kiwi', 'Honey'], 'Chop and mix fruits, drizzle with honey.'),
('Cheesy Omelet Delight', 'happy', 'Light and cheesy, great start to a happy day.', ARRAY['Eggs', 'Cheese', 'Peppers', 'Salt'], 'Beat eggs, pour into pan, add cheese and veggies.'),
('Rainbow Veggie Wraps', 'happy', 'Crunchy veggies in a colorful wrap.', ARRAY['Tortilla', 'Lettuce', 'Carrots', 'Hummus'], 'Spread hummus, fill with veggies, and roll up.'),
('Lemon Zest Muffins', 'happy', 'Light, fluffy muffins with a citrus zing!', ARRAY['Flour', 'Eggs', 'Lemon zest', 'Sugar'], 'Mix, pour into muffin tins, and bake.'),

('Comfort Mac & Cheese', 'sad', 'Warm mac & cheese to soothe your soul.', ARRAY['Pasta', 'Cheese', 'Milk'], 'Boil pasta, add cheese and milk, stir.'),
('Cozy Chicken Soup', 'sad', 'Classic warm soup to hug you from the inside.', ARRAY['Chicken', 'Carrots', 'Celery', 'Broth'], 'Boil ingredients and simmer until soft.'),
('Sad Day Sundae', 'sad', 'Ice cream, chocolate, and comfort in a bowl.', ARRAY['Ice cream', 'Chocolate syrup', 'Whipped cream'], 'Scoop ice cream, drizzle syrup, top with cream.'),
('Peanut Butter Toasties', 'sad', 'A simple favorite when you need something fast.', ARRAY['Bread', 'Peanut butter', 'Banana slices'], 'Toast bread, spread PB, top with banana.'),
('Melty Grilled Cheese', 'sad', 'Golden crispy bread with melted cheese inside.', ARRAY['Bread', 'Cheese', 'Butter'], 'Butter bread, grill with cheese inside.'),
('Cinnamon Oat Bowl', 'sad', 'Warm, soft oats with a cozy touch of cinnamon.', ARRAY['Oats', 'Milk', 'Cinnamon', 'Honey'], 'Cook oats in milk, stir in cinnamon and honey.'),

('Spicy Anger Tacos', 'anger', 'Let out the fire with these spicy tacos.', ARRAY['Tortillas', 'Hot sauce', 'Chicken'], 'Cook chicken, assemble in tortilla, add hot sauce.'),
('Chili Inferno', 'anger', 'A bold, spicy chili to match your mood.', ARRAY['Ground beef', 'Beans', 'Chili powder', 'Tomato'], 'Cook beef, add ingredients, simmer for 30 minutes.'),
('Firecracker Wings', 'anger', 'Hot wings with an explosive kick!', ARRAY['Chicken wings', 'Hot sauce', 'Butter', 'Garlic'], 'Bake wings, toss in spicy garlic sauce.'),
('Sriracha Noodles', 'anger', 'Noodles tossed in a fiery Sriracha glaze.', ARRAY['Noodles', 'Sriracha', 'Soy sauce', 'Sesame oil'], 'Cook noodles, stir-fry with sauces.'),
('Volcano Burger', 'anger', 'A loaded burger with spicy jalapeños and sauce.', ARRAY['Beef patty', 'Bun', 'Jalapeños', 'Hot sauce'], 'Grill patty, assemble with toppings.'),
('Spicy Stir-Fry Blast', 'anger', 'Stir-fried veggies and meat in a fiery blend.', ARRAY['Bell peppers', 'Onion', 'Chicken', 'Chili flakes'], 'Stir-fry all ingredients on high heat.'),

('Romantic Chocolate Fondue', 'romantic', 'Perfect for a romantic night.', ARRAY['Chocolate', 'Strawberries'], 'Melt chocolate, dip fruits.'),
('Heart-Shaped Pizzas', 'romantic', 'Mini pizzas made with love.', ARRAY['Pizza dough', 'Tomato sauce', 'Cheese', 'Pepperoni'], 'Shape dough, add toppings, bake until golden.'),
('Creamy Garlic Pasta', 'romantic', 'Smooth and elegant dinner for two.', ARRAY['Pasta', 'Cream', 'Garlic', 'Parmesan'], 'Cook pasta, stir into garlic cream sauce.'),
('Strawberry Cheesecake Bites', 'romantic', 'Sweet little bites perfect for sharing.', ARRAY['Cream cheese', 'Strawberries', 'Graham crackers'], 'Mix cream cheese, spoon onto cracker, top with fruit.'),
('Sparkling Mocktail', 'romantic', 'Fancy fizzy drink to toast love.', ARRAY['Sparkling water', 'Lime', 'Mint', 'Cranberry juice'], 'Mix all in a glass and serve chilled.'),
('Lover’s Chocolate Cake', 'romantic', 'Rich, moist cake to share with someone special.', ARRAY['Cocoa', 'Flour', 'Sugar', 'Eggs'], 'Mix and bake, frost with love.');
