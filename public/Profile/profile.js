document.getElementById("logout").addEventListener("click", (event) => {
    event.preventDefault();
    console.log("succes")
    localStorage.removeItem('User');
    window.location.replace("http://127.0.0.1:5500/public/front_page/frontpage.html")
})