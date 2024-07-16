const d = document;

const loadIframeMapWikiloc = (urlEmbeded, iframeSelector) => {

   d.querySelector(iframeSelector).setAttribute("src", urlEmbeded);

}


export default loadIframeMapWikiloc