import { createMoods } from "./queries/mood.js";
import client from "./client.js";
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

  await createPlaylists(happy.id, 'https://soundcloud.com/alexrainbirdmusic/sets/good-vibes-vol-2?si=412f6775625e477ea17b3174c0dc60d4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing');
  await createPlaylists(sad.id, 'https://soundcloud.com/liavcooney/sets/sad-songs-that-will-make-you?si=a3600e05bb16455498042d96eac7f7aa&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing');
  await createPlaylists(angry.id, 'https://soundcloud.com/josh-klpa/sets/angry-angry-metal-metal-rock');
  await createPlaylists(romantic.id, 'https://soundcloud.com/andrea-torrisi-213265059/sets/love-songs-2023-english-love');

  
  await createRecipes(
      "Happy Pancakes",
      1,
      "Fluffy pancakes with syrup to brighten your day!",
      ["Flour", "Eggs", "Milk", "Sugar"],
      "Mix all and fry in pan.", 
      'https://i.imgur.com/Y8FCrXf.png');

    await createRecipes(
      "Comfort Mac & Cheese",
     2,
       "Warm mac & cheese to soothe your soul.",
      ["Pasta", "Cheese", "Milk"],
      "Boil pasta, add cheese and milk, stir.", 
      'https://i.imgur.com/D8svxw6.png' 
    );

     await createRecipes(
      "Spicy Anger Tacos",
      3,
      "Let out the fire with these spicy tacos.",
      ["Tortillas", "Hot sauce", "Chicken"],
      "Cook chicken, assemble in tortilla, add hot sauce.", 
      'https://i.imgur.com/lyvRwsS.png'
     );

     await createRecipes(
    "Romantic Chocolate Fondue",
    4,
    "Perfect for a romantic night.",
    ["Chocolate", "Strawberries"],
    "Melt chocolate, dip fruits.", 
    'https://i.imgur.com/uJr6QYj.png' 
     );

    await createRecipes(
     "Sunshine Smoothie",
      1,
      "A tropical blend to energize your morning.",
      ["Banana", "Pineapple", "Orange juice", "Yogurt"],
      "Blend all ingredients until smooth.", 
      'https://i.imgur.com/Hoa27Nn.png'   
    );
      
    await createRecipes(
    "Joyful Fruit Salad",
    1,
    "A colorful mix of your favorite fruits.",
    ["Strawberries", "Blueberries", "Kiwi", "Honey"],
    "Chop and mix fruits, drizzle with honey.", 
    'https://i.imgur.com/dZjS6us.png'
    );
      
    await createRecipes(
    "Cheesy Omelet Delight",
    1,
    "Light and cheesy, great start to a happy day.",
    ["Eggs", "Cheese", "Peppers", "Salt"],
    "Beat eggs, pour into pan, add cheese and veggies.", 
    'https://i.imgur.com/EpBFvtz.png'
    );
      
    await createRecipes(
    "Rainbow Veggie Wraps",
    1,
    "Crunchy veggies in a colorful wrap.",
    ["Tortilla", "Lettuce", "Carrots", "Hummus"],
    "Spread hummus, fill with veggies, and roll up.", 
    'https://i.imgur.com/9j4Sycw.png'  
    )
      
    await createRecipes(
    "Lemon Zest Muffins",
    1,
    "Light, fluffy muffins with a citrus zing!",
    ["Flour", "Eggs", "Lemon zest", "Sugar"],
    "Mix, pour into muffin tins, and bake.", 
    'https://i.imgur.com/OG11Jh1.png'   
    );
      
    await createRecipes(
    "Cozy Chicken Soup",
    2,
    "Classic warm soup to hug you from the inside.",
    ["Chicken", "Carrots", "Celery", "Broth"],
    "Boil ingredients and simmer until soft.", 
    'https://i.imgur.com/W5vx6he.png'   
    );
      
    await createRecipes(
    "Sad Day Sundae",
    2,
    "Ice cream, chocolate, and comfort in a bowl.",
    ["Ice cream", "Chocolate syrup", "Whipped cream"],
    "Scoop ice cream, drizzle syrup, top with cream.", 
    'https://i.imgur.com/b1HN5Dd.png'  
    );
    
    await createRecipes(
    "Peanut Butter Toasties",
    2,
    "A simple favorite when you need something fast.",
    ["Bread", "Peanut butter", "Banana slices"],
    "Toast bread, spread PB, top with banana.", 
    'https://i.imgur.com/7OsQls6.png'   
    );
      
    await createRecipes(
    "Melty Grilled Cheese",
    2,
    "Golden crispy bread with melted cheese inside.",
    ["Bread", "Cheese", "Butter"],
    "Butter bread, grill with cheese inside.", 
    'https://i.imgur.com/5z8B5yJ.png'    
    );
      
    await createRecipes(
    "Cinnamon Oat Bowl",
    2,
    "Warm, soft oats with a cozy touch of cinnamon.",
    ["Oats", "Milk", "Cinnamon", "Honey"],
    "Cook oats in milk, stir in cinnamon and honey.", 
    'https://i.imgur.com/EnG9lnX.png'   
    );
      
    await createRecipes(
    "Chili Inferno",
    3,
    "A bold, spicy chili to match your mood.",
    ["Ground beef", "Beans", "Chili powder", "Tomato"],
    "Cook beef, add ingredients, simmer for 30 minutes.", 
    'https://i.imgur.com/Cbmh46f.png'    
    );
     
    await createRecipes(
    "Firecracker Wings",
    3,
    "Hot wings with an explosive kick!",
    ["Chicken wings", "Hot sauce", "Butter", "Garlic"],
    "Bake wings, toss in spicy garlic sauce.", 
    'https://i.imgur.com/CDlmbXp.png'   
    );
      
    await createRecipes(
    "Sriracha Noodles",
    3,
    "Noodles tossed in a fiery Sriracha glaze.",
    ["Noodles", "Sriracha", "Soy sauce", "Sesame oil"],
    "Cook noodles, stir-fry with sauces.", 
    'https://i.imgur.com/V3j7cNm.png'
    );
      
    
    await createRecipes(
    "Volcano Burger",
    3,
    "A loaded burger with spicy jalapeños and sauce.",
    ["Beef patty", "Bun", "Jalapeños", "Hot sauce"],
    "Grill patty, assemble with toppings.", 
    'https://i.imgur.com/PCxZxFB.png'
    );
      
    
    await createRecipes(
    "Spicy Stir-Fry Blast",
    3,
    "Stir-fried veggies and meat in a fiery blend.",
    ["Bell peppers", "Onion", "Chicken", "Chili flakes"],
     "Stir-fry all ingredients on high heat.", 
     'https://i.imgur.com/qUKElsV.png'    
    );


    await createRecipes(
    "Heart-Shaped Pizzas",
    4,
    "Mini pizzas made with love.",
    ["Pizza dough", "Tomato sauce", "Cheese", "Pepperoni"],
    "Shape dough, add toppings, bake until golden.", 
    'https://i.imgur.com/bYoeylu.png'
    );
      
   
    await createRecipes(
    "Creamy Garlic Pasta",
    4,
    "Smooth and elegant dinner for two.",
    ["Pasta", "Cream", "Garlic", "Parmesan"],
    "Cook pasta, stir into garlic cream sauce.", 
    'https://i.imgur.com/wtn4c7t.png'   
    );
   
    await createRecipes(
    "Strawberry Cheesecake Bites",
    4,
    "Sweet little bites perfect for sharing.",
    ["Cream cheese", "Strawberries", "Graham crackers"],
    "Mix cream cheese, spoon onto cracker, top with fruit.", 
    'https://i.imgur.com/4YPpVja.png'   
    );
    
    await createRecipes(
    "Sparkling Mocktail",
    4,
    "Fancy fizzy drink to toast love.",
    ["Sparkling water", "Lime", "Mint", "Cranberry juice"],
    "Mix all in a glass and serve chilled.", 
    'https://i.imgur.com/pvdhPjS.png'   
    );
    
    await createRecipes(
     "Lover’s Chocolate Cake",
     4,
      "Rich, moist cake to share with someone special.",
     ["Cocoa", "Flour", "Sugar", "Eggs"],
      "Mix and bake, frost with love.", 
      'https://i.imgur.com/CrWuaOs.png'   
    );

}































  


































































