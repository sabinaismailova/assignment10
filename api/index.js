const express = require("express")
const router = express.Router();

router.use("/postActor", require("./postActor"));
router.use("/getAllKdramas", require("./getAllKdramas"));
router.use("/getKdramaGenreDescription", require("./getKdramaGenreDescription"));

//Handle 404
router.use('*', (req, res, next) => {
    const error = new Error("404 Not Found")
    error.status = 404
    next();
});

module.exports = router;