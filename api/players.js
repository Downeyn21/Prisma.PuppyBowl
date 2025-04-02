const router = require("express").Router();

const prisma = require("../prisma");

router.get("/", async (req, res, next) => {
    try {
        const players = await prisma.player.findMany();
        res.json(players)
    } catch (error) {
        next()
    }
})


module.exports = router;