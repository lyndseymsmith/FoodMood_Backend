import { createMoods } from "./queries/mood";

async function seedMood(){
    await client.connect()

    await createMoods('happy', 'delighted, pleased, joyful, cheerful')
    await createMoods('sad', 'depressed, upset, melancholy, sorrowful')
    await createMoods('angry', 'furious, irritable, mad, enraged')
    await createMoods('romantic', 'enchanting, alluring, marvellous, glamourous, magical')

    await client.end()
}

seedMood()
































































