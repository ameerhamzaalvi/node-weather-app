const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYW1lZXJoYW16YWFsdmkiLCJhIjoiY2s5bWwzcTc0MDB1cTNlcGY5NTE0aXV6YyJ9.Gg_ZyGz3uxDG0veYXkUD3A&limit=1'
    request ({url, json: true}, (error, {body}= {}) => {
        if (error) {
            callback('Unable To Connect To Location Services!', undefined)
        } else if (body.features.length === 0){
            callback('Unable To Find Location. Please Try Another Search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode