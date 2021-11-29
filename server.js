// imports
const fs = require("fs");

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())

app.use(express.static("public"));
app.use(express.json());

// Port
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Serveren lytter på port ${PORT}`);
});

//login 

app.get('/login', (req, res) => {
    res.status(200).json('succes');
});

// signup
app.post('/signup', (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
}
)