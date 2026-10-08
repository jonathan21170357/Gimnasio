// ==========================================================================
// JAVASCRIPT INTERACTIVITY FILE - TITAN GYM
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. MOBILE RESPONSIVE MENU
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("nav--active");
        });

        // Closes the menu when clicking on links
        document.querySelectorAll(".nav__link").forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("nav--active");
            });
        });
    }

    // 2. AUTOMATIC PLAN SELECTION FROM CARDS TO THE FORM
    const planButtons = document.querySelectorAll("[data-plan]");
    const selectPlan = document.getElementById("user-plan");

    planButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const selectedPlan = e.target.getAttribute("data-plan");
            if (selectPlan && selectedPlan) {
                selectPlan.value = selectedPlan;
            }
        });
    });

    // 3. FORM SUBMISSION TO WHATSAPP (SIGNUP CTA)
    const signupForm = document.getElementById("signup-form");

    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const nombre = document.getElementById("user-nombre").value.trim();
            const telefono = document.getElementById("user-tel").value.trim();
            const plan = document.getElementById("user-plan").value;
            const horario = document.getElementById("user-horario").value;

            if (!nombre || !telefono || !plan || !horario) {
                alert("Please complete all required data.");
                return;
            }

            // Create message for WhatsApp in English
            const mensajeWS = `Hello Titan Gym! I would like to sign up with the website offer:%0A` +
                `👤 *Name:* ${encodeURIComponent(nombre)}%0A` +
                `📱 *Phone:* ${encodeURIComponent(telefono)}%0A` +
                `⚡ *Selected Plan:* ${encodeURIComponent(plan)}%0A` +
                `⏰ *Preferred Schedule:* ${encodeURIComponent(horario)}`;

            const telefonoGym = "5216676271665";
            const url = `https://wa.me/${telefonoGym}?text=${mensajeWS}`;

            window.open(url, "_blank");
            signupForm.reset();
        });
    }
});