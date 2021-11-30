
console.log(window.location.origin)
document.getElementById("new_user").addEventListener("click", (event) => {

    const form = document.getElementById("signupform")
    const name = form.name.value
    const password = form.password.value
    console.log(name)
    console.log(password)
    const user = {
        "name": name,
        "password": password
    }
    console.log(user)
    fetch("http://localhost:5000/signup", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(() => window.location.replace(window.location.origin + "/public/login/login.html"))
    event.preventDefault();
})