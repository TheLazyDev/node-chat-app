var socket = io();

socket.on('connect',function (){
    console.log('Connected to server');
})

socket.on('disconnect',function (){
  console.log("Disconnected from server");
})



socket.on('newMessage',function (msg){
  //  console.log('newMessage',msg);


  var formattedTime = moment(msg.createdAt).format('h:mm:ss a');


   var li = $('<li></li>');

   li.text(`${msg.from} ${formattedTime} : ${msg.text}`);

   $('#messages').append(li);
})



socket.on('newLocationMessage',function(message){



    var formattedTime = moment(message.createdAt).format('h:mm:ss a');
    var li = $('<li></li>');
    var a = $('<a target="_blank"> My Current Location </a>');

    li.text(`${message.from} ${formattedTime} :`);
    a.attr("href",message.url);
     
    li.append(a);


   $("#messages").append(li);
});

$('#message-form').on('submit', function (e) {
    e.preventDefault();
     
    var msgTextBox = $("[name=msg]");


    if(msgTextBox.val() === ''){
      return alert("Please Type something");
    }

    socket.emit('createMessage',{
      from: "User",
      text: msgTextBox.val()
    },function (){
        msgTextBox.val('');
    })
})


var locationButton = $("#send-location");

locationButton.on('click',function (e){
   if(!navigator.geolocation){
     return alert("Geolocation not supported by your browser");

   }


   locationButton.attr('disabled','disabled').text("Sending location ...");

   navigator.geolocation.getCurrentPosition(function (position){

     locationButton.removeAttr('disabled').text("Send Location");

       socket.emit('createLocationMessage',{
         latitude: position.coords.latitude,
         longitude: position.coords.longitude
       });


   },function (){
      locationButton.removeAttr('disabled').text("Send Location");
     alert("Unable to fetch location");
   })
})

