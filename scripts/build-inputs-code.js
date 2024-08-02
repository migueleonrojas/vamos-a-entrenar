const d = document;

const buildInputsCode = (classInput) => {

   d.querySelectorAll(classInput).forEach(el => {

      el.addEventListener("input", (e) => {

         let value = e.target.value.replace(/[^0-9]/g,'');
         e.target.value = value.substring(0,1);

         if(value === "" && e.target.previousElementSibling !== null) {
            e.target.previousElementSibling.focus();
         }

         if(value.length === 1) {

            if(e.target.nextElementSibling !== null){
               e.target.nextElementSibling.focus();
            }     
                   
         }

      });
   });
};

export default buildInputsCode;