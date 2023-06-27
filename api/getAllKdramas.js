const express = require("express");
const router = express.Router();
const database = require("../database/index");

router.get("/", (req, res) => {
    const command = "SELECT * FROM kdramas ORDER BY id ASC";
    database.query(command, (err, result) => {
        try{
            res.send(result.rows);
        }
        catch(error){
            console.error("ERROR: ", error);
        }
    })
});

module.exports = router;