import db  from "./../firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const countUserVisit = async () => {

   let date = new Date();

   const userDoc = collection(db, "users");

   try {
      await addDoc(userDoc, {
         'info': `${date.toISOString().slice(0, 10)} - ${date.toLocaleTimeString()} - ${Intl.DateTimeFormat().resolvedOptions().timeZone}`
      });
   }
   catch (error) {
      console.log(error);
      await addDoc(userDoc, {
         'info': `${error}`
      });
   }

};

const canCountVisit = () => {

   let canCountVisitUser = false;
   let l = localStorage;

   if(l.getItem('user') === null) {
      l.setItem("user", "");
      canCountVisitUser = true;
   }

   return canCountVisitUser;

}

export  {
   canCountVisit,
   countUserVisit
}

