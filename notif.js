function showNotification() {
    if(window.Notification) {
        Notification.requestPermission(function(status) {
            console.log('Status: ', status); // show notification permission if permission granted then show otherwise message will not show
    var options = {
        body: 'Test notification message.', // body part of the notification
        dir: 'ltr', // direction of message, in this case left-to-right
        icon:'logo.png' // to show logo in notification

      }

              var n = new Notification('Title', options);
        });
    }
    else {
        alert('Your browser doesn\'t support notifications.');
    }
}