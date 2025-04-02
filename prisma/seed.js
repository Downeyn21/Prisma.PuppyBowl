const prisma = require("./prisma")

async function seed() {
    
    async function createPlayers() {
        const players = [
            {name: "player 1"},
            {name: "player 2"},
            {name: "player 3"},
            {name: "player 4"},
            {name: "player 5"},
            {name: "player 6"},
            {name: "player 7"},
            {name: "player 8"},
            {name: "player 9"},
            {name: "player 10"}
        ];
        await prisma.player.createMany({ data: players });
    };

    await createPlayers();
};
seed()
    .then(async () => await prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });