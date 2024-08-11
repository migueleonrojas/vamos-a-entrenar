const generateRandomIdCode = () => {

   return Math.random().toFixed(30).split('.')[1] + new Date().getTime().toString();

}

export {
   generateRandomIdCode
}