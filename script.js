
const form = document.querySelector('.newsletter-form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    document.getElementById('newsletterinput').value = '';
})
function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

function toggleAnswer(button) {
    const answer = button.nextElementSibling;
    answer.classList.toggle('hidden');
    button.innerText = answer.classList.contains('hidden') ? '→' : '↓';
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

document.querySelector("#contactUs").addEventListener("click", function() {
    document.querySelector(".footer").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#aboutUsButton").addEventListener("click", function() {
    document.querySelector(".footer").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#newsletterButton").addEventListener("click", function() {
    document.querySelector(".newsletter-section").scrollIntoView({ behavior: "smooth" });
    console.log('da')
});
document.querySelector('.button').addEventListener('click', ()=>{
    document.querySelector(".hero-section").scrollIntoView({ behavior: "smooth" });
})
document.querySelector(".homeButton").addEventListener("click", function() {
    document.querySelector(".section-1").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".logo").addEventListener("click", function() {
    document.querySelector(".section-1").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".appsButton").addEventListener("click", function() {
    document.querySelector(".hero-section").scrollIntoView({ behavior: "smooth" });
});





