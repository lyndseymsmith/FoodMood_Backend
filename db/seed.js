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
      image_url: "https://images.unsplash.com/photo-1587731501261-9363b047c53b",
    },
    {
      title: "Comfort Mac & Cheese",
      mood_id: sad.id,
      description: "Warm mac & cheese to soothe your soul.",
      ingredients: ["Pasta", "Cheese", "Milk"],
      instructions: "Boil pasta, add cheese and milk, stir.",
      image_url: "https://images.unsplash.com/photo-1626089177282-e55baf833971",
    },
    {
      title: "Spicy Anger Tacos",
      mood_id: angry.id,
      description: "Let out the fire with these spicy tacos.",
      ingredients: ["Tortillas", "Hot sauce", "Chicken"],
      instructions: "Cook chicken, assemble in tortilla, add hot sauce.",
      image_url: "https://images.unsplash.com/photo-1601925261314-7e6704203421",
    },
    {
      title: "Romantic Chocolate Fondue",
      mood_id: romantic.id,
      description: "Perfect for a romantic night.",
      ingredients: ["Chocolate", "Strawberries"],
      instructions: "Melt chocolate, dip fruits.",
      image_url: "https://images.unsplash.com/photo-1606491956396-0f958e6e8c09",
    },
    {
      title: "Sunshine Smoothie",
      mood_id: happy.id,
      description: "A tropical blend to energize your morning.",
      ingredients: ["Banana", "Pineapple", "Orange juice", "Yogurt"],
      instructions: "Blend all ingredients until smooth.",
      image_url: "https://images.unsplash.com/photo-1559261994-44c7d60c1ea1",
    },
    {
      title: "Joyful Fruit Salad",
      mood_id: happy.id,
      description: "A colorful mix of your favorite fruits.",
      ingredients: ["Strawberries", "Blueberries", "Kiwi", "Honey"],
      instructions: "Chop and mix fruits, drizzle with honey.",
      image_url: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
    },
    {
      title: "Cheesy Omelet Delight",
      mood_id: happy.id,
      description: "Light and cheesy, great start to a happy day.",
      ingredients: ["Eggs", "Cheese", "Peppers", "Salt"],
      instructions: "Beat eggs, pour into pan, add cheese and veggies.",
      image_url: "https://images.unsplash.com/photo-1584270354949-6fbaee8d89b0",
    },
    {
      title: "Rainbow Veggie Wraps",
      mood_id: happy.id,
      description: "Crunchy veggies in a colorful wrap.",
      ingredients: ["Tortilla", "Lettuce", "Carrots", "Hummus"],
      instructions: "Spread hummus, fill with veggies, and roll up.",
      image_url: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee",
    },
    {
      title: "Lemon Zest Muffins",
      mood_id: happy.id,
      description: "Light, fluffy muffins with a citrus zing!",
      ingredients: ["Flour", "Eggs", "Lemon zest", "Sugar"],
      instructions: "Mix, pour into muffin tins, and bake.",
      image_url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    },
    {
      title: "Cozy Chicken Soup",
      mood_id: sad.id,
      description: "Classic warm soup to hug you from the inside.",
      ingredients: ["Chicken", "Carrots", "Celery", "Broth"],
      instructions: "Boil ingredients and simmer until soft.",
      image_url: "https://images.unsplash.com/photo-1608131262759-5f2a4b6e0750",
    },
    {
      title: "Sad Day Sundae",
      mood_id: sad.id,
      description: "Ice cream, chocolate, and comfort in a bowl.",
      ingredients: ["Ice cream", "Chocolate syrup", "Whipped cream"],
      instructions: "Scoop ice cream, drizzle syrup, top with cream.",
      image_url: "https://images.unsplash.com/photo-1612197598352-4b0f25e2d42a",
    },
    {
      title: "Peanut Butter Toasties",
      mood_id: sad.id,
      description: "A simple favorite when you need something fast.",
      ingredients: ["Bread", "Peanut butter", "Banana slices"],
      instructions: "Toast bread, spread PB, top with banana.",
      image_url: "https://images.unsplash.com/photo-1584983183715-9b618da1f4e7",
    },
    {
      title: "Melty Grilled Cheese",
      mood_id: sad.id,
      description: "Golden crispy bread with melted cheese inside.",
      ingredients: ["Bread", "Cheese", "Butter"],
      instructions: "Butter bread, grill with cheese inside.",
      image_url: "https://images.unsplash.com/photo-1612197528979-44c2852e54d2",
    },
    {
      title: "Cinnamon Oat Bowl",
      mood_id: sad.id,
      description: "Warm, soft oats with a cozy touch of cinnamon.",
      ingredients: ["Oats", "Milk", "Cinnamon", "Honey"],
      instructions: "Cook oats in milk, stir in cinnamon and honey.",
      image_url: "https://images.unsplash.com/photo-1572441710536-3170f4a7982c",
    },
    {
      title: "Chili Inferno",
      mood_id: angry.id,
      description: "A bold, spicy chili to match your mood.",
      ingredients: ["Ground beef", "Beans", "Chili powder", "Tomato"],
      instructions: "Cook beef, add ingredients, simmer for 30 minutes.",
      image_url: "https://images.unsplash.com/photo-1598515214213-c91e66f9082f",
    },
    {
      title: "Firecracker Wings",
      mood_id: angry.id,
      description: "Hot wings with an explosive kick!",
      ingredients: ["Chicken wings", "Hot sauce", "Butter", "Garlic"],
      instructions: "Bake wings, toss in spicy garlic sauce.",
      image_url: "https://images.unsplash.com/photo-1611995970991-23f56f7d4976",
    },
    {
      title: "Sriracha Noodles",
      mood_id: angry.id,
      description: "Noodles tossed in a fiery Sriracha glaze.",
      ingredients: ["Noodles", "Sriracha", "Soy sauce", "Sesame oil"],
      instructions: "Cook noodles, stir-fry with sauces.",
      image_url: "https://images.unsplash.com/photo-1635016302723-b2793f3d39fd",
    },
    {
      title: "Volcano Burger",
      mood_id: angry.id,
      description: "A loaded burger with spicy jalapeños and sauce.",
      ingredients: ["Beef patty", "Bun", "Jalapeños", "Hot sauce"],
      instructions: "Grill patty, assemble with toppings.",
      image_url: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    },
    {
      title: "Spicy Stir-Fry Blast",
      mood_id: angry.id,
      description: "Stir-fried veggies and meat in a fiery blend.",
      ingredients: ["Bell peppers", "Onion", "Chicken", "Chili flakes"],
      instructions: "Stir-fry all ingredients on high heat.",
      image_url: "https://images.unsplash.com/photo-1617196034449-f3e98f1251db",
    },
    {
      title: "Heart-Shaped Pizzas",
      mood_id: romantic.id,
      description: "Mini pizzas made with love.",
      ingredients: ["Pizza dough", "Tomato sauce", "Cheese", "Pepperoni"],
      instructions: "Shape dough, add toppings, bake until golden.",
      image_url: "https://images.unsplash.com/photo-1613141434794-fdb6e53e3605",
    },
    {
      title: "Creamy Garlic Pasta",
      mood_id: romantic.id,
      description: "Smooth and elegant dinner for two.",
      ingredients: ["Pasta", "Cream", "Garlic", "Parmesan"],
      instructions: "Cook pasta, stir into garlic cream sauce.",
      image_url: "https://images.unsplash.com/photo-1608731200052-bb42182f2845",
    },
    {
      title: "Strawberry Cheesecake Bites",
      mood_id: romantic.id,
      description: "Sweet little bites perfect for sharing.",
      ingredients: ["Cream cheese", "Strawberries", "Graham crackers"],
      instructions: "Mix cream cheese, spoon onto cracker, top with fruit.",
      image_url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    },
    {
      title: "Sparkling Mocktail",
      mood_id: romantic.id,
      description: "Fancy fizzy drink to toast love.",
      ingredients: ["Sparkling water", "Lime", "Mint", "Cranberry juice"],
      instructions: "Mix all in a glass and serve chilled.",
      image_url: "https://images.unsplash.com/photo-1565372513897-85d91a16427e",
    },
    {
      title: "Lover’s Chocolate Cake",
      mood_id: romantic.id,
      description: "Rich, moist cake to share with someone special.",
      ingredients: ["Cocoa", "Flour", "Sugar", "Eggs"],
      instructions: "Mix and bake, frost with love.",
      image_url: "https://images.unsplash.com/photo-1601979040924-6d3ce18d6f3d",
    },
  ];

  for (const recipe of recipes) {
    await createRecipes(
      recipe.title,
      recipe.mood_id,
      recipe.description,
      recipe.ingredients,
      recipe.instructions,
      recipe.image_url
    );
  }
}

























  



























































































  


































































