function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


document.querySelector(".homeButton").addEventListener("click", function() {
    document.querySelector(".section-1").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".logo").addEventListener("click", function() {
    document.querySelector(".section-1").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".appsButton").addEventListener("click", function() {
    document.querySelector(".hero-section").scrollIntoView({ behavior: "smooth" });
});

