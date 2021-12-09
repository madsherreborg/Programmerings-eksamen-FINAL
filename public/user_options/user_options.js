// Delete User
// Select button "delete_user"
document.getElementById("delete_user").addEventListener("click", (event) => {
    event.preventDefault();
    // Selecting the logged in user via Local Storage (when a user logs in, there inputs goes in Local Storage)
    const user = localStorage.getItem('User');
    // Testing if user is defined correctly
    console.log(user)
    // fetching post request.
    fetch("http://localhost:5000/user/delete", {
        method: "POST",
        body: user,
        headers: {
            'Content-Type': 'application/json'
        }
        // Fetch makes a promise that resolves request
    }).then(response => response.json().then(body => {
        localStorage.removeItem('User')
        window.location.replace("http://127.0.0.1:5500/public/front_page/frontpage.html")
    }))
})

// update user

document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();
    // select form with id "change_user_info"
    const form = document.getElementById("change_user_info")
    const password = form.password.value
    const user = JSON.parse(localStorage.getItem('User'));

    // only password changes
    const updated_user = {
        "name": user.name,
        "password": password
    }
    fetch("http://localhost:5000/user/update", {
        method: "POST",
        body: JSON.stringify(updated_user),
        headers: {
            'Content-Type': 'application/json'
        }
        // Fetch makes a promise that resolves request
    }).then(response => response.json().then(body => {
        // when user is updated an alert will appear. Grunden til der ikke er en catch er fordi at den eneste måde requestet kan fejle, er hvis den ikke kan nå hen til serveren, men fordi det er localhost virker det altid.
        localStorage.setItem("User", updated_user)
        alert("Din kode er nu blevet ændret")
    }))
})
