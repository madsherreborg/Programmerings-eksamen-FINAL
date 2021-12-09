// Log out feature
document.getElementById("logout").addEventListener("click", (event) => {
    // so the page will not refresh
    event.preventDefault();
    console.log("succes")
    // Removes user form localstorage and changes window
    localStorage.removeItem('User');
    window.location.replace("http://127.0.0.1:5500/public/front_page/frontpage.html")
})