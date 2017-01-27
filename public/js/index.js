var socket = io();

socket.on('connect',function (){
    console.log('Connected to server');

    // socket.emit('createMessage',{
    //     from:'Bhavarsh Singh',
    //     text:"Hey whatsup?"
    // })
})

socket.on('disconnect',function (){
  console.log("Disconnected from server");
})



// socket.on('newEmail',function (email){
//     console.log("New Email!",email);

// })



socket.on('newMessage',function (msg){
   console.log('newMessage',msg);


   var li = $('<li></li>');

   li.text(`${msg.from} : ${msg.text}`);

   $('#messages').append(li);
})





// socket.emit("createMessage",{
//   from: "frank",
//   text: "hi"
// },function (data){
//   console.log(data);
// })

socket.on('newLocationMessage',function(message){
    var li = $('<li></li>');
    var a = $('<a target="_blank"> My Current Location </a>');

    li.text(`${message.from}:`);
    a.attr("href",message.url);
     
    li.append(a);


   $("#messages").append(li);
});

$('#message-form').on('submit', function (e) {
    e.preventDefault();

    socket.emit('createMessage',{
      from: "User",
      text: $("[name=msg]").val()
    },function (){
     
    })
})


var locationButton = $("#send-location");

locationButton.on('click',function (e){
   if(!navigator.geolocation){
     return alert("Geolocation not supported by your browser");

   }

   navigator.geolocation.getCurrentPosition(function (position){
       socket.emit('createLocationMessage',{
         latitude: position.coords.latitude,
         longitude: position.coords.longitude
       });
   },function (){
     alert("Unable to fetch location")
   })
})

