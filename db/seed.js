import client from "./client.js";
import { createMoods } from "./queries/mood.js";
import { createUser } from "./queries/users.js";
import { createPlaylists } from "./queries/playlists.js";
import { createRecipes } from "./queries/recipes.js";

await client.connect();
await seed();
await client.end();
console.log("✅ Database seeded successfully!");

async function seed() {
  const happy = await createMoods("happy", "delighted, pleased, joyful, cheerful");
  const sad = await createMoods("sad", "depressed, upset, melancholy, sorrowful");
  const angry = await createMoods("angry", "furious, irritable, mad, enraged");
  const romantic = await createMoods("romantic", "enchanting, alluring, marvellous, glamourous, magical");

  await createUser("SadSkittles", "yumyum123");
  await createUser("CrazyChocolate", "cocoalove");

  await createPlaylists(happy.id, "https://soundcloud.com/alexrainbirdmusic/sets/good-vibes-vol-2");
  await createPlaylists(sad.id, "https://soundcloud.com/liavcooney/sets/sad-songs-that-will-make-you");
  await createPlaylists(angry.id, "https://soundcloud.com/josh-klpa/sets/angry-angry-metal-metal-rock");
  await createPlaylists(romantic.id, "https://soundcloud.com/andrea-torrisi-213265059/sets/love-songs-2023-english-love");

  const recipes = [
    {
      title: "Happy Pancakes",
      mood_id: happy.id,
      description: "Fluffy pancakes with syrup to brighten your day!",
      ingredients: ["Flour", "Eggs", "Milk", "Sugar"],
      instructions: "Mix all and fry in pan.",
      
    },
    {
      title: "Comfort Mac & Cheese",
      mood_id: sad.id,
      description: "Warm mac & cheese to soothe your soul.",
      ingredients: ["Pasta", "Cheese", "Milk"],
      instructions: "Boil pasta, add cheese and milk, stir.",
      
    },
    {
      title: "Spicy Anger Tacos",
      mood_id: angry.id,
      description: "Let out the fire with these spicy tacos.",
      ingredients: ["Tortillas", "Hot sauce", "Chicken"],
      instructions: "Cook chicken, assemble in tortilla, add hot sauce.",
      
    },
    {
      title: "Romantic Chocolate Fondue",
      mood_id: romantic.id,
      description: "Perfect for a romantic night.",
      ingredients: ["Chocolate", "Strawberries"],
      instructions: "Melt chocolate, dip fruits.",
      
    },
    {
      title: "Sunshine Smoothie",
      mood_id: happy.id,
      description: "A tropical blend to energize your morning.",
      ingredients: ["Banana", "Pineapple", "Orange juice", "Yogurt"],
      instructions: "Blend all ingredients until smooth.",
     
    },
    {
      title: "Joyful Fruit Salad",
      mood_id: happy.id,
      description: "A colorful mix of your favorite fruits.",
      ingredients: ["Strawberries", "Blueberries", "Kiwi", "Honey"],
      instructions: "Chop and mix fruits, drizzle with honey.",
     
    },
    {
      title: "Cheesy Omelet Delight",
      mood_id: happy.id,
      description: "Light and cheesy, great start to a happy day.",
      ingredients: ["Eggs", "Cheese", "Peppers", "Salt"],
      instructions: "Beat eggs, pour into pan, add cheese and veggies.",
      
    },
    {
      title: "Rainbow Veggie Wraps",
      mood_id: happy.id,
      description: "Crunchy veggies in a colorful wrap.",
      ingredients: ["Tortilla", "Lettuce", "Carrots", "Hummus"],
      instructions: "Spread hummus, fill with veggies, and roll up.",
     
    },
    {
      title: "Lemon Zest Muffins",
      mood_id: happy.id,
      description: "Light, fluffy muffins with a citrus zing!",
      ingredients: ["Flour", "Eggs", "Lemon zest", "Sugar"],
      instructions: "Mix, pour into muffin tins, and bake.",
    },
    {
      title: "Cozy Chicken Soup",
      mood_id: sad.id,
      description: "Classic warm soup to hug you from the inside.",
      ingredients: ["Chicken", "Carrots", "Celery", "Broth"],
      instructions: "Boil ingredients and simmer until soft.",
     
    },
    {
      title: "Sad Day Sundae",
      mood_id: sad.id,
      description: "Ice cream, chocolate, and comfort in a bowl.",
      ingredients: ["Ice cream", "Chocolate syrup", "Whipped cream"],
      instructions: "Scoop ice cream, drizzle syrup, top with cream.",
      
    },
    {
      title: "Peanut Butter Toasties",
      mood_id: sad.id,
      description: "A simple favorite when you need something fast.",
      ingredients: ["Bread", "Peanut butter", "Banana slices"],
      instructions: "Toast bread, spread PB, top with banana.",
      
    },
    {
      title: "Melty Grilled Cheese",
      mood_id: sad.id,
      description: "Golden crispy bread with melted cheese inside.",
      ingredients: ["Bread", "Cheese", "Butter"],
      instructions: "Butter bread, grill with cheese inside.",
     
    },
    {
      title: "Cinnamon Oat Bowl",
      mood_id: sad.id,
      description: "Warm, soft oats with a cozy touch of cinnamon.",
      ingredients: ["Oats", "Milk", "Cinnamon", "Honey"],
      instructions: "Cook oats in milk, stir in cinnamon and honey.",
      
    },
    {
      title: "Chili Inferno",
      mood_id: angry.id,
      description: "A bold, spicy chili to match your mood.",
      ingredients: ["Ground beef", "Beans", "Chili powder", "Tomato"],
      instructions: "Cook beef, add ingredients, simmer for 30 minutes.",
      
    },
    {
      title: "Firecracker Wings",
      mood_id: angry.id,
      description: "Hot wings with an explosive kick!",
      ingredients: ["Chicken wings", "Hot sauce", "Butter", "Garlic"],
      instructions: "Bake wings, toss in spicy garlic sauce.",
      
    },
    {
      title: "Sriracha Noodles",
      mood_id: angry.id,
      description: "Noodles tossed in a fiery Sriracha glaze.",
      ingredients: ["Noodles", "Sriracha", "Soy sauce", "Sesame oil"],
      instructions: "Cook noodles, stir-fry with sauces.",
      
    },
    {
      title: "Volcano Burger",
      mood_id: angry.id,
      description: "A loaded burger with spicy jalapeños and sauce.",
      ingredients: ["Beef patty", "Bun", "Jalapeños", "Hot sauce"],
      instructions: "Grill patty, assemble with toppings.",
      
    },
    {
      title: "Spicy Stir-Fry Blast",
      mood_id: angry.id,
      description: "Stir-fried veggies and meat in a fiery blend.",
      ingredients: ["Bell peppers", "Onion", "Chicken", "Chili flakes"],
      instructions: "Stir-fry all ingredients on high heat.",
      
    },
    {
      title: "Heart-Shaped Pizzas",
      mood_id: romantic.id,
      description: "Mini pizzas made with love.",
      ingredients: ["Pizza dough", "Tomato sauce", "Cheese", "Pepperoni"],
      instructions: "Shape dough, add toppings, bake until golden.",
      
    },
    {
      title: "Creamy Garlic Pasta",
      mood_id: romantic.id,
      description: "Smooth and elegant dinner for two.",
      ingredients: ["Pasta", "Cream", "Garlic", "Parmesan"],
      instructions: "Cook pasta, stir into garlic cream sauce.",
    },
    {
      title: "Strawberry Cheesecake Bites",
      mood_id: romantic.id,
      description: "Sweet little bites perfect for sharing.",
      ingredients: ["Cream cheese", "Strawberries", "Graham crackers"],
      instructions: "Mix cream cheese, spoon onto cracker, top with fruit.",
      
    },
    {
      title: "Sparkling Mocktail",
      mood_id: romantic.id,
      description: "Fancy fizzy drink to toast love.",
      ingredients: ["Sparkling water", "Lime", "Mint", "Cranberry juice"],
      instructions: "Mix all in a glass and serve chilled.",
      
    },
    {
      title: "Lover’s Chocolate Cake",
      mood_id: romantic.id,
      description: "Rich, moist cake to share with someone special.",
      ingredients: ["Cocoa", "Flour", "Sugar", "Eggs"],
      instructions: "Mix and bake, frost with love.",
    } 
  ];

  for (const recipe of recipes) {
    await createRecipes(
      recipe.title,
      recipe.mood_id,
      recipe.description,
      recipe.ingredients,
      recipe.instructions,
      
    );
  }
}

























  



























































































  


































































