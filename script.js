document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const links = document.querySelectorAll(".nav-links li a"); // Seleciona todos os links do menu

  // Alternar o menu quando clicar no ícone
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Fechar o menu quando um link for clicado
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
});