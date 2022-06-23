const request = require('request')

const forecast = (latitude,longitude,callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=a10c8e28df8b336d90e71abb4c556f8b&query='+latitude+','+longitude

    request({url: url,json:true},(error,{ body }) => {
        if(error){
               callback('Unable to connect to weather app')
           }else if(body.error){
            callback('Unable to find location')
        }else{
            callback(undefined,body.current.weather_descriptions[0] + '. It is currently '+body.current.temperature+' degrees out. It feels like '+body.current.feelslike+' degrees out. The humidity is '+body.current.humidity+'%.')
        }   

    })

}

module.exports = forecast