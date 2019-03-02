const axios = require('axios');

const main = () => {
 axios.get('https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000')
  .then(function (response) {
    console.log(response.data);
  })
}
main();