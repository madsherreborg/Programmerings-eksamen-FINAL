// imports
const fs = require("fs");
const express = require('express');
const cors = require('cors');
const morgan = require('morgan')


const app = express();
app.use(cors())
app.use(morgan("dev"))
app.use(express.static("public"));
app.use(express.json());

// Port
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Serveren lytter på port ${PORT}`);
});

//login 

app.post('/login', (req, res) => {
    console.log(req.body)
    const filecontent = fs.readFileSync("./database/users.json", "utf8")
    if (filecontent === "") {
        res.status(200).json('error')
    }
    let users = JSON.parse(filecontent)
    console.log(users)
    console.log(users.users)
    const found_user = users.users.find(user => (user.name === req.body.name && user.password === req.body.password))
    if (found_user) {
        res.status(200).json(found_user)
    }
    else {
        res.status(200).json('error')
    }
});

// signup
app.post('/signup', (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    console.log(name)
    console.log(password)
    const filecontent = fs.readFileSync("./database/users.json", "utf8")
    // if there is no users in the json file
    if (filecontent === "") {
        fs.writeFileSync("./database/users.json", JSON.stringify({
            users: [req.body]
        }))
        res.status(200).json('succes');
        // If there is already a user in the the database with the same name
    } else {
        let users = JSON.parse(filecontent)
        console.log(users)
        const founduser = users.users.find(item => item.name === name)
        if (founduser) {
            res.status(200).json('error')
            // if there is already a user in the json file and a new user needs to be added to the array
        } else {
            users.users.push(req.body)
            fs.writeFileSync("./database/users.json", JSON.stringify(users)
            )
            res.status(200).json('succes');
        }
    }


}
)
// delete
app.post('/user/delete', (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    console.log(name)
    console.log(password)
    const filecontent = fs.readFileSync("./database/users.json", "utf8")
    if (filecontent !== "") {
        let users = JSON.parse(filecontent)
        // Find user in array an return index of the user
        const userindex = users.users.findIndex(item => item.name === name)
        if (userindex > -1) {
            // splice starts at the index of the user and deletes 1 user
            users.users.splice(userindex, 1)
            fs.writeFileSync("./database/users.json", JSON.stringify(users))
        }
    }
    res.status(200).json("succes")
})

// update user
app.post('/user/update', (req, res) => {
    const name = req.body.name;
    const password = req.body.password;

    console.log(name)
    console.log(password)
    // reads json file
    const filecontent = fs.readFileSync("./database/users.json", "utf8")
    let users = JSON.parse(filecontent)
    // "let" is a keyword that makes you change it. you cant change const. 
    const founduserindex = users.users.findIndex(item => item.name === name)
    // splice always returns an aray. But there is only 1 thing in the array. splice take the user out of the array.
    let user = users.users.splice(founduserindex, 1)
    // user = user takes the first element out of the array.
    user = user[0]
    user.password = password
    users.users.push(user)
    fs.writeFileSync("./database/users.json", JSON.stringify(users))
    res.status(200).json("succes")
})