import { createMoodsMoods } from "./queries/mood.js";
import client from "./client.js";
import { createUser } from "./queries/users.js";
import { createRecipes} from "./recipes.js";

await client.connect();
await seed();
await client.end();
console.log("✅ Database seeded successfully!");

async function seed() {

  await createMoods("happy", "delighted, pleased, joyful, cheerful");
  await createMoods("sad", "depressed, upset, melancholy, sorrowful");
  await createMoods("angry", "furious, irritable, mad, enraged");
  await createMoods("romantic", "enchanting, alluring, marvellous, glamourous, magical");

  await createUser("SadSkittles", "yumyum123");
  await createUser("CrazyChocolate", "cocoalove");

  
  await createRecipes(
      "Happy Pancakes",
      "happy",
      "Fluffy pancakes with syrup to brighten your day!",
      ["Flour", "Eggs", "Milk", "Sugar"],
      "Mix all and fry in pan.");

    await createRecipes(
      "Comfort Mac & Cheese",
     "sad",
       "Warm mac & cheese to soothe your soul.",
      ["Pasta", "Cheese", "Milk"],
      "Boil pasta, add cheese and milk, stir."  
    );

     await createRecipes(
      "Spicy Anger Tacos",
      "anger",
      "Let out the fire with these spicy tacos.",
      ["Tortillas", "Hot sauce", "Chicken"],
      "Cook chicken, assemble in tortilla, add hot sauce." 
     );

     await createRecipes(
    "Romantic Chocolate Fondue",
    "romantic",
    "Perfect for a romantic night.",
    ["Chocolate", "Strawberries"],
    "Melt chocolate, dip fruits." 
     );

    await createRecipes(
     "Sunshine Smoothie",
      "happy",
      "A tropical blend to energize your morning.",
      ["Banana", "Pineapple", "Orange juice", "Yogurt"],
      "Blend all ingredients until smooth."   
    );
      
    await createRecipes(
    "Joyful Fruit Salad",
    "happy",
    "A colorful mix of your favorite fruits.",
    ["Strawberries", "Blueberries", "Kiwi", "Honey"],
    "Chop and mix fruits, drizzle with honey."
    );
      
    await createRecipes(
    "Cheesy Omelet Delight",
    "happy",
    "Light and cheesy, great start to a happy day.",
    ["Eggs", "Cheese", "Peppers", "Salt"],
    "Beat eggs, pour into pan, add cheese and veggies."
    );
      
    await createRecipes(
    "Rainbow Veggie Wraps",
    "happy",
    "Crunchy veggies in a colorful wrap.",
    ["Tortilla", "Lettuce", "Carrots", "Hummus"],
    "Spread hummus, fill with veggies, and roll up."  
    )
      
    await createRecipes(
    "Lemon Zest Muffins",
    "happy",
    "Light, fluffy muffins with a citrus zing!",
    ["Flour", "Eggs", "Lemon zest", "Sugar"],
    "Mix, pour into muffin tins, and bake."   
    );
      
    await createRecipes(
    "Cozy Chicken Soup",
    "sad",
    "Classic warm soup to hug you from the inside.",
    ["Chicken", "Carrots", "Celery", "Broth"],
    "Boil ingredients and simmer until soft."   
    );
      
    await createRecipes(
    "Sad Day Sundae",
    "sad",
    "Ice cream, chocolate, and comfort in a bowl.",
    ["Ice cream", "Chocolate syrup", "Whipped cream"],
    "Scoop ice cream, drizzle syrup, top with cream."  
    );
    
    await createRecipes(
    "Peanut Butter Toasties",
    "sad",
    "A simple favorite when you need something fast.",
    ["Bread", "Peanut butter", "Banana slices"],
    "Toast bread, spread PB, top with banana."   
    );
      
    await createRecipes(
    "Melty Grilled Cheese",
    "sad",
    "Golden crispy bread with melted cheese inside.",
    ["Bread", "Cheese", "Butter"],
    "Butter bread, grill with cheese inside."    
    );
      
    await createRecipes(
    "Cinnamon Oat Bowl",
    "sad",
    "Warm, soft oats with a cozy touch of cinnamon.",
    ["Oats", "Milk", "Cinnamon", "Honey"],
    "Cook oats in milk, stir in cinnamon and honey."   
    );
      
    await createRecipes(
    "Chili Inferno",
    "anger",
    "A bold, spicy chili to match your mood.",
    ["Ground beef", "Beans", "Chili powder", "Tomato"],
    "Cook beef, add ingredients, simmer for 30 minutes."    
    );
     
    await createRecipes(
    "Firecracker Wings",
    "anger",
    "Hot wings with an explosive kick!",
    ["Chicken wings", "Hot sauce", "Butter", "Garlic"],
    "Bake wings, toss in spicy garlic sauce."   
    );
      
    await createRecipes(
    "Sriracha Noodles",
    "anger",
    "Noodles tossed in a fiery Sriracha glaze.",
    ["Noodles", "Sriracha", "Soy sauce", "Sesame oil"],
    "Cook noodles, stir-fry with sauces."
    );
      
    
    await createRecipes(
    "Volcano Burger",
    "anger",
    "A loaded burger with spicy jalapeños and sauce.",
    ["Beef patty", "Bun", "Jalapeños", "Hot sauce"],
    "Grill patty, assemble with toppings."
    );
      
    
    await createRecipes(
    "Spicy Stir-Fry Blast",
    "anger",
    "Stir-fried veggies and meat in a fiery blend.",
    ["Bell peppers", "Onion", "Chicken", "Chili flakes"],
     "Stir-fry all ingredients on high heat."    
    );


    await createRecipes(
    "Heart-Shaped Pizzas",
    "romantic",
    "Mini pizzas made with love.",
    ["Pizza dough", "Tomato sauce", "Cheese", "Pepperoni"],
    "Shape dough, add toppings, bake until golden."
    );
      
   
    await createRecipes(
    "Creamy Garlic Pasta",
    "romantic",
    "Smooth and elegant dinner for two.",
    ["Pasta", "Cream", "Garlic", "Parmesan"],
    "Cook pasta, stir into garlic cream sauce."   
    );
   
    await createRecipes(
    "Strawberry Cheesecake Bites",
    "romantic",
    "Sweet little bites perfect for sharing.",
    ["Cream cheese", "Strawberries", "Graham crackers"],
    "Mix cream cheese, spoon onto cracker, top with fruit."   
    );
    
    await createRecipes(
    "Sparkling Mocktail",
    "romantic",
    "Fancy fizzy drink to toast love.",
    ["Sparkling water", "Lime", "Mint", "Cranberry juice"],
    "Mix all in a glass and serve chilled."   
    );
    
    await createRecipes(
     "Lover’s Chocolate Cake",
      "romantic",
      "Rich, moist cake to share with someone special.",
     ["Cocoa", "Flour", "Sugar", "Eggs"],
      "Mix and bake, frost with love."   
    );
      
   

//   for (const recipe of recipes) {
//     await client.query(
//       `
//       INSERT INTO recipes (title, mood, description, ingredients, instructions)
//       VALUES ($1, $2, $3, $4, $5)
//       `,
//       [
//         recipe.title,
//         recipe.mood,
//         recipe.description,
//         recipe.ingredients,
//         recipe.instructions,
//       ]
//     );
//   }
}































  


































































