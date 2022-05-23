var axios = require('axios').default;

export {};

exports.handler = async (event: any) => {
    console.log(JSON.stringify(event, null, 2));

    await axios.get('http://arduino.tips/asciilogo.txt')
    .then(function (response: any) {
      console.log(response.data);
    })
    .catch(function (error: any) {
      console.log(error);
    })

    return "Everything went smooth";
};