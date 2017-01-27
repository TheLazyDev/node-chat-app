var expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe("generateMessage",()=>{


  it("should generate correct message object",()=>{

     var from = "Jane";
     var text = "some message";
     var msg = generateMessage(from,text);

     expect(msg.createdAt).toBeA('number');
     expect(msg).toInclude({
         from,
         text
     });


  })












})




describe('generateLocationMessage',()=>{



   it("should generate correct location object",()=>{
    var from = "Deb";
    var lati = 15;
    var longi = 19;

    var url = "https://www.google.com/maps?q=15,19";

    var msg = generateLocationMessage(from,lati,longi);
  

  
     expect(msg.createdAt).toBeA('number');
     expect(msg).toInclude({
         from,
         url
     });


   })









})