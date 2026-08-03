// ==========================================================================
// ARCHIVO DE INTERACTIVIDAD - TITAN GYM
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. MENÚ RESPONSIVO MÓVIL
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("nav--active");
        });

        // Cierra el menú al presionar enlaces
        document.querySelectorAll(".nav__link").forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("nav--active");
            });
        });
    }

    // 2. SELECCIÓN AUTOMÁTICA DE PLAN DESDE LAS TARJETAS HASTA EL FORMULARIO
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

    // 3. ENVÍO DEL FORMULARIO A WHATSAPP (CTA DE INSCRIPCIÓN)
    const signupForm = document.getElementById("signup-form");

    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const nombre = document.getElementById("user-nombre").value.trim();
            const telefono = document.getElementById("user-tel").value.trim();
            const plan = document.getElementById("user-plan").value;
            const horario = document.getElementById("user-horario").value;

            if (!nombre || !telefono || !plan || !horario) {
                alert("Por favor completa todos los datos requeridos.");
                return;
            }

            // Crear mensaje para WhatsApp
            const mensajeWS = `¡Hola Titan Gym! Deseo inscribirme con la oferta del sitio web:%0A` +
                `👤 *Nombre:* ${encodeURIComponent(nombre)}%0A` +
                `📱 *Teléfono:* ${encodeURIComponent(telefono)}%0A` +
                `⚡ *Plan seleccionado:* ${encodeURIComponent(plan)}%0A` +
                `⏰ *Horario de preferencia:* ${encodeURIComponent(horario)}`;

            const telefonoGym = "5216676271665";
            const url = `https://wa.me/${telefonoGym}?text=${mensajeWS}`;

            window.open(url, "_blank");
            signupForm.reset();
        });
    }
});
