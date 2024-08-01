const validateTerms = (inputCheckedSelector, selectorMsg) => {
   
   inputCheckedSelector.checked ? selectorMsg.classList.add("hide"): selectorMsg.classList.remove("hide");

   return inputCheckedSelector.checked;
}

export default validateTerms;