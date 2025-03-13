// Function to toggle the Login Modal
function toggleModal() {
    document.getElementById("loginModal").classList.toggle("hidden");
}

// Function to animate the Features Section on Scroll
window.addEventListener("scroll", function () {
    const section = document.getElementById("featuresSection");
    const position = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
        section.classList.add("opacity-100", "translate-y-0");
    }
});
