const express = require("express");
const router = express.Router();
const database = require("../database/index");

router.get("/", (req, res) => {
    const command = "SELECT kdramas.*, genres.genre_description FROM kdramas JOIN genres ON kdramas.genre = genres.genre_name ORDER BY id ASC";
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