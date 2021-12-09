// Select "new user" button
document.getElementById("new_user").addEventListener("click", (event) => {
    // Get user inputs from "signupform"
    const form = document.getElementById("signupform")
    const name = form.name.value
    const password = form.password.value
    // Testing if user inputs are correct
    console.log(name)
    console.log(password)
    // Function for user inputs
    const user = {
        "name": name,
        "password": password
    }
    console.log(user)
    // fetch post request for backend server
    fetch("http://localhost:5000/signup", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
        // If user input is stored in users.json then the window will change to the login page
    }).then((response) => response.json().then(body => {
        if (body === "succes") {
            window.location.replace(window.location.origin + "/public/login/login.html")
            // If user input is not stored i json, the following alert will be displayed
        } else {
            alert("E-mailen er allerede i brug")
        }
    }))
    // For the page to not reload, when button is clicked
    event.preventDefault();
})