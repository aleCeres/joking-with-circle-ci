const axios = require('axios');

const makeCall = (url) => {
    axios.get(url).then(function (response) {
    console.log(response.data);
    })
}

module.exports = { makeCall }