const router = require("express").Router();
module.exports = router;

router.use("/players", require("./players"));

// app.use("/api", require("./api"));