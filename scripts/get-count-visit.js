import db  from "./../firebase.js";
import { doc, onSnapshot, query, collection } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const d = document;

const getCountVisitTotal = () => {
   const queryCollection = query(collection(db, "users"));
   onSnapshot(queryCollection, (querySnapShot) => {
      d.querySelector(".count-visit_number").innerHTML = `${querySnapShot['_snapshot']['docs']['size']}`;
   });
}

export default getCountVisitTotal;