const generateCodeTwoFactor = (min, max) => {
   let randomNumber = Math.floor((Math.random() * (max - min + 1)) + min);

   let lengthMaxNumber =  String(max).length;
   let lengthRandomNumber = String(randomNumber).length;

   let ceroConcat = Array(lengthMaxNumber - lengthRandomNumber).fill(0).join("");

   return ceroConcat + randomNumber;
}

const validateCode = (code, inputCode) => code === inputCode;


export { 
   generateCodeTwoFactor,
   validateCode
};