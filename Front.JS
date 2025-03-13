document.addEventListener("DOMContentLoaded", function () {
    // Toggle Login Modal with Fade-in Effect
    window.toggleModal = function () {
        const modal = document.getElementById("loginModal");
        if (!modal) return;

        if (modal.classList.contains("hidden")) {
            modal.classList.remove("hidden");
            setTimeout(() => {
                modal.classList.add("opacity-100", "scale-100");
                modal.classList.remove("opacity-0", "scale-95");
            }, 10);
        } else {
            modal.classList.remove("opacity-100", "scale-100");
            modal.classList.add("opacity-0", "scale-95");
            setTimeout(() => {
                modal.classList.add("hidden");
            }, 300);
        }
    };

    // Handle Registration Form Submission
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const panCard = document.getElementById("panCard").value.trim();
            const birthDate = document.getElementById("birthDate").value;
            const age = document.getElementById("age").value;

            if (!firstName || !lastName || !panCard || !birthDate || !age) {
                alert("⚠️ Please fill in all required fields.");
                return;
            }

            alert("✅ Registration Successful!");
            window.location.href = "MainFront.html"; // Redirect after successful registration
        });
    }

    // Smooth Scroll Animation for Features Section
    const featuresSection = document.getElementById("featuresSection");
    if (featuresSection) {
        window.addEventListener("scroll", function () {
            const position = featuresSection.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (position < screenHeight - 100) {
                featuresSection.classList.add("opacity-100", "translate-y-0");
            }
        });
    }

    // Ensure the Register Link Works Correctly
    const registerLink = document.querySelector("a[href='register.html']");
    if (registerLink) {
        registerLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            window.location.href = "register.html"; // Redirect to Register Page
        });
    }
});
