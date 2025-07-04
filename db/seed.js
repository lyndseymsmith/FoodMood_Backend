import { createMoods } from "./queries/mood";
import client from "./client.js";
import { createUser } from "./queries/users.js";

await client.connect()
await seed()
await client.end()
console.log("Database seeded")

async function seed(){
    await client.connect()

    await createMoods('happy', 'delighted, pleased, joyful, cheerful')
    await createMoods('sad', 'depressed, upset, melancholy, sorrowful')
    await createMoods('angry', 'furious, irritable, mad, enraged')
    await createMoods('romantic', 'enchanting, alluring, marvellous, glamourous, magical')
 
 
 
 
 
 
 
 
 
 
    await createUser("SadSkittles", "yumyum123")
    await createUser("CrazyChocolate", "cocoalove")
 
}



































  


































































