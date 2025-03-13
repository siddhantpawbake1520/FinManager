document.addEventListener("DOMContentLoaded", function () {
    // Toggle Login Modal
    window.toggleModal = function () {
        document.getElementById("loginModal").classList.toggle("hidden");
    };

    // Handle Form Submission
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const panCard = document.getElementById("panCard").value.trim();
            const birthDate = document.getElementById("birthDate").value;
            const age = document.getElementById("age").value;

            if (firstName === "" || lastName === "" || panCard === "" || birthDate === "" || age === "") {
                alert("Please fill all required fields.");
                return;
            }

            alert("Registration Successful!");
            window.location.href = "MainFront.html"; // Redirect after registration
        });
    }

    // Scroll Animation for Features Section
    window.addEventListener("scroll", function () {
        const section = document.getElementById("featuresSection");
        if (section) {
            const position = section.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            if (position < screenHeight - 100) {
                section.classList.add("opacity-100", "translate-y-0");
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Ensure the Register Link Works Correctly
    const registerLink = document.getElementById("registerLink");
    if (registerLink) {
        registerLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            window.location.href = "register.html"; // Redirect to register page
        });
    }
});
