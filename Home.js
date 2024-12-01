function toggleMenu() {
    const menu = document.querySelector('.navbar ul');
    menu.classList.toggle('active');
}





function performSearch() {
    const searchBox = document.getElementById("searchBox").value.trim();
    if (searchBox === "") {
        alert("Unable to find, Search again.");
    }
}








































