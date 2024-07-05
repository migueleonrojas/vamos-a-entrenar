const d = document;

const toggleMenuMovil = () => {
   let $hamburguer = d.querySelector(".hamburger");

   let $menu_movil = d.querySelector(".menu-movil");

   $hamburguer.classList.toggle("is-active");

   $menu_movil.classList.toggle("hide-to-left");
};

export default toggleMenuMovil;