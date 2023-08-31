const { connect } = require("./database/db");
const express = require("express");
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
// const articleRouter = require("./route");

// const dotenv = require('dotenv');
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.get('/churchMembers', async (req, res) => {
    const searchTerm = req.query.input;
    console.log('searchTerm', searchTerm);
    let result = '';
    try {
        console.log('🐛1');
        const client = await connect();
        console.log('🐛2');
        result = await client.query(`SELECT * FROM church_members WHERE name ILIKE '${searchTerm}%'`);
        console.log('🐛3');
        console.log('result', result);
    } catch (error) {
        console.log('erro do endpoint:', error);
    }
    console.log(result.rows);
    return res.json(result.rows);
});

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Node.js listening... ' + port);
})
// app.use("/articles", articleRouter);
