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



$('#message-form').on('submit', function (e) {
    e.preventDefault();

    socket.emit('createMessage',{
      from: "User",
      text: $("[name=msg]").val()
    },function (){
     
    })
})



