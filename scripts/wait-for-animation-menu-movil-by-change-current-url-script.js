const $ancoreOtherSide = document.querySelectorAll(".other-page");


const waitForAnimationMenuMovilByChangeCurrentUrl = () => {

   $ancoreOtherSide.forEach((el) => {
      el.addEventListener("click", (e) => {
         e.preventDefault();
         setTimeout(() => {
               window.location.href = e.target.getAttribute("href");
            }, 
            300
         );
      })
   });
}



export default waitForAnimationMenuMovilByChangeCurrentUrl;
