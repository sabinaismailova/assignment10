const express = require("express")
const router = express.Router();
const database = require("../database/index");

router.use(express.json());

router.post("/", (req, res) => {
    const {actor_name, age, dob, kdramas} = req.body;
    console.log(req.body);
    const command = 'INSERT INTO actors (actor_name, age, DOB, kdramas) VALUES ($1, $2, $3, $4) returning *';
    const values = [actor_name, age, dob, kdramas];
    database.query(command, values, (err, result) => {
        try{
            res.status(201).json({status: "success", data: result.rows});
        }
        catch (error){
            console.error('ERROR: ', error);
        }
    })
});

module.exports = router;