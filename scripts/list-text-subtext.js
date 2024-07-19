const d = document;

const renderListTextAndSubtext = (
   listTextAndSubtext, 
   classParent,
   classChild, 
   classChildText, 
   classChildSubText
) => {

   const list = listTextAndSubtext;
   const $parent = d.querySelector(classParent);
   $parent.innerHTML = "";
   let $fragment = document.createDocumentFragment();
   
   list.forEach((el, index) => {

      const { text, sub_text } = el;
      let $elChild = document.createElement("article");
      let $elChildText = document.createElement("span");
      

      $elChild.classList.add(classChild);
      $elChildText.classList.add(classChildText);

      $elChildText.innerHTML = `${index + 1} - ${text}`;
      $elChild.insertAdjacentElement("beforeend", $elChildText);

      sub_text.forEach((el, index) => {
         let $elChildSubText = document.createElement("span");
         $elChildSubText.classList.add(classChildSubText);
         $elChildSubText.innerHTML = `${index + 1} - ${el}`;
         $elChild.insertAdjacentElement("beforeend", $elChildSubText);
      })

      let $clone = document.importNode($elChild, true);
      $fragment.appendChild($clone);
   });

   $parent.appendChild($fragment);
   
}

export default renderListTextAndSubtext;