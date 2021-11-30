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

    if (filecontent === "") {
        fs.writeFileSync("./database/users.json", JSON.stringify({
            users: [req.body]
        }))
        res.status(200).json('succes');
    } else {
        let users = JSON.parse(filecontent)
        console.log(users)
        const founduser = users.users.find(item => item.name === name)
        if (founduser) {
            res.status(200).json('error')
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
        const userindex = users.users.findIndex(item => item.name === name)
        if (userindex > -1) {
            users.users.splice(userindex, 1)
            fs.writeFileSync("./database/users.json", JSON.stringify(users))
        }
    }
    res.status(200).json("succes")
})