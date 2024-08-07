import app from "./../firebase.js";
import { writeBatch, doc, collection, onSnapshot, query, where, and, getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import routes from "../local-variables/routes-variable.js"

const NAME_COLLECTION = "routes";

const db = getFirestore(app);

const addDocsRoutesByLots = async () => {

   const batch = writeBatch(db);

   routes.forEach(route => {
      const docRef = doc(collection(db, NAME_COLLECTION));
      batch.set(docRef, route);
   });
   await batch.commit();
}

const getDocsRoutesByLimit = (type) => {

   const queryCollection = query(collection(db, NAME_COLLECTION), and(
      where('active', "==", true),
      where('type', "==", type)
   ));
   let allRoutes = [];

   return new ReadableStream({
      start: (controller) => {
         onSnapshot(queryCollection, (querySnapShot) => {
            allRoutes = [];
            querySnapShot.forEach((doc) => {
               allRoutes.push(doc.data());
            });
            controller.enqueue(allRoutes);
         })
      },
   });

}

const getDocRouteById = (id) => {

   const queryCollection = query(collection(db, NAME_COLLECTION), where("id", "==", id));

   let routeById = {};

   return new ReadableStream({
      start: (controller) => {
         onSnapshot(queryCollection, (querySnapShot) => {
            querySnapShot.forEach(doc => routeById = doc.data());
            controller.enqueue(routeById);
         })
      }
   });


   
}




export {
   addDocsRoutesByLots,
   getDocRouteById,
   getDocsRoutesByLimit,
}






