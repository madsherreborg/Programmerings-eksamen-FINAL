
// select submit button
document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();
    // select form with id "loginform"
    const form = document.getElementById("loginform")
    const name = form.name.value
    const password = form.password.value
    // testing user inputs are correct
    console.log(name)
    console.log(password)
    // && means ??
    if (name && password) {
        // define user
        const user = {
            "name": name,
            "password": password
        }
        // Testing if user is defined correctly
        console.log(user)
        // fetching post request from backend server
        fetch("http://localhost:5000/login", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
            // ????
        }).then(response => response.json().then(body => {
            if (body !== "error") {
                localStorage.setItem("User", JSON.stringify(user))
                window.location.replace("http://127.0.0.1:5500/public/Profile/profile.html")

            }
        }))
    }
})
// If user is already in localstorage and goes back to login page
function onload() {
    const user = localStorage.getItem("User")
    // If there is a user in localstorage, redirect to profile.html
    if (user) {
        window.location.replace("http://127.0.0.1:5500/public/Profile/profile.html")

    }
}