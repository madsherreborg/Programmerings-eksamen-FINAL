

document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();
    const form = document.getElementById("loginform")
    const name = form.name.value
    const password = form.password.value
    console.log(name)
    console.log(password)
    if (name && password) {
        const user = {
            "name": name,
            "password": password
        }
        console.log(user)
        fetch("http://localhost:5000/login", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json().then(body => {
            if (body !== "error") {
                localStorage.setItem("User", JSON.stringify(user))
                window.location.replace("http://127.0.0.1:5500/public/Profile/profile.html")

            }
        }))
    }
})
// If user is already logged in and
function onload() {
    const user = localStorage.getItem("User")
    if (user) {
        window.location.replace("http://127.0.0.1:5500/public/Profile/profile.html")

    }
}