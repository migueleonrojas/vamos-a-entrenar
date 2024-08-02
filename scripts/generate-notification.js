const requestPermissionNotification = async () => {


   try{

      if(!("Notification" in window)) throw new Error('Las notificaciones no son soportadas');

      if(Notification.permission === 'denied') throw new Error('Notificaciones Denegadas');
      
      await Notification.requestPermission()
      
   }
   catch(err) {

      let { message } = err;

      if(message.includes('Notificaciones Denegadas')) {
         alert("Las notificaciones han sido denegadas para poder activarlas vaya a la configuración de su navegador");
      }

      else if(message.includes('Las notificaciones no son soportadas')) {
         alert("Las notificaciones no son soportadas, se usaran cuadros de alerta para las notificaciones");

      }

   }

   finally {
      return Notification.permission === 'granted';
   }


}

const showNotification = (title, msg) => {

   if(Notification.permission === 'denied') {
      alert(`${title}\n\n${msg}`)
      return;
   }

   let notification = new Notification(title, {
      body: msg,
   });

}

export {
   requestPermissionNotification,
   showNotification
}