const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d6ecae6f55d760b0efaa33815fe24996&query=' + latitude + ',' + longitude
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!')
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out, it feels like ' + body.current.feelslike + ' degrees out. Humidity is ' + body.current.humidity + '% and precipitation is ' +body.current.precip + '%, while winds is at ' + body.current.wind_speed + 'km/h.')
        }
    })
} 

module.exports = forecast