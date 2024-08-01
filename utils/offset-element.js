const topOffSetElement = (element) => {

   const heightElement = element.offsetHeight;

   return (element.getBoundingClientRect().top + window.scrollY) - (heightElement * 2);

}

export {
   topOffSetElement
};