document.addEventListener("DOMContentLoaded", function () {
    // Efeito de destaque nos cards
    const carCards = document.querySelectorAll(".car-card");

    carCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
            card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.1)";
        });
    });

    // Menu responsivo
    const menuToggle = document.createElement("div");
    menuToggle.innerHTML = "&#9776;"; // Ícone de menu (☰)
    menuToggle.style.fontSize = "2rem";
    menuToggle.style.cursor = "pointer";
    menuToggle.style.display = "none"; // Só aparece em telas menores
    menuToggle.style.position = "absolute";
    menuToggle.style.right = "20px";
    menuToggle.style.top = "15px";
    menuToggle.style.color = "#fff";

    document.querySelector("header").appendChild(menuToggle);
    const nav = document.querySelector("nav ul");

    menuToggle.addEventListener("click", () => {
        if (nav.style.display === "flex") {
            nav.style.display = "none";
        } else {
            nav.style.display = "flex";
            nav.style.flexDirection = "column";
            nav.style.backgroundColor = "#000";
            nav.style.position = "absolute";
            nav.style.top = "60px";
            nav.style.right = "20px";
            nav.style.padding = "10px";
            nav.style.borderRadius = "5px";
        }
    });

    // Exibir menu-toggle apenas em telas menores
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = "block";
            nav.style.display = "none"; // Esconder menu por padrão
        } else {
            menuToggle.style.display = "none";
            nav.style.display = "flex";
        }
    }

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Rolagem suave para os links do menu
    document.querySelectorAll("nav ul li a").forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth",
                });
            }
        });
    });
});
