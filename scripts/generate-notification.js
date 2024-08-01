const requestPermissionNotification = async () => {


   try{
      if(Notification.permission === 'denied') throw Error('Notificaciones Denegadas');
      
      await Notification.requestPermission()
      
   }
   catch(err) {

      let { message } = err;

      if(message.includes(message)) {
         alert("Las notificaciones han sido denegadas para poder activarlas vaya a la configuración de su navegador");
      }

   }

   finally {
      return Notification.permission === 'granted';
   }


}

const showNotification = (title, msg) => {

   let notification = new Notification(title, {
      body: msg,
   });

}

export {
   requestPermissionNotification,
   showNotification
}