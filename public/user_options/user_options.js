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
        // ??????
    }).then(response => response.json().then(body => {
        localStorage.removeItem('User')
        window.location.replace("http://127.0.0.1:5500/public/front_page/frontpage.html")
    }))
})