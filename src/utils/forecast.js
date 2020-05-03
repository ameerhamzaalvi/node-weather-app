const request = require('request') //Require Request Npm Module For HTTP Requests

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=968ffe7e99e61c567575fdf09cc68dc5&query='+latitude+','+longitude+'&units=m' //URL of API to get required Information From API
    request ({url, json: true}, (error, {body} = {}) => {  //Using Request NPM Module Sending HTTP Request to API Server
        if (error) { //Error Handling
            callback('Unable To Connect To Weather Services!', undefined)
        } else if (body.error){ 
            callback('Unable To Find Location. Please Try Another Search.', undefined)
        } else {
            callback(undefined, {
                time: body.location.localtime,
                temrature: body.current.temperature + '°C',
                humidity:'Humidity : ' + body.current.humidity,
                description: body.current.weather_descriptions[0]

            })
        }
    })
}

module.exports = forecast