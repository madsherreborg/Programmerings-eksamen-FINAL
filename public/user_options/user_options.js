document.getElementById("delete_user").addEventListener("click", (event) => {
    event.preventDefault();
    const user = localStorage.getItem('User');
    console.log(user)
    fetch("http://localhost:5000/user/delete", {
        method: "POST",
        body: user,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json().then(body => {
        localStorage.removeItem('User')
        window.location.replace("http://127.0.0.1:5500/public/front_page/frontpage.html")
    }))
})