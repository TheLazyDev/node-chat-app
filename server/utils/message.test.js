var expect = require('expect');

var {generateMessage} = require('./message');

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