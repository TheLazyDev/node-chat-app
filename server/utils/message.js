var moment = require('moment');












var generateMessage = (from,text)=>{
   return {
       from,
       text,
       createdAt : moment().valueOf()
   }
}




var generateLocationMessage = (from,lat,longi)=>{
    return {
        from,
        url:`https://www.google.com/maps?q=${lat},${longi}`,
        createdAt: moment().valueOf()

    }
}

module.exports = {generateMessage,generateLocationMessage}