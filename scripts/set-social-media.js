const d = document;

const settingSocialMedia = (ancoreSelector, ancoreName, ancoreHref) => {

   const $ancore = d.querySelector(ancoreSelector);

   $ancore.innerHTML = ancoreName;
   $ancore.setAttribute("href", ancoreHref);

}

export default settingSocialMedia;