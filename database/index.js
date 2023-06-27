const { Pool } = require("pg");

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database:'assignment10',
    user: 'sabinaismailova',
    password: ''
});

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    }
};