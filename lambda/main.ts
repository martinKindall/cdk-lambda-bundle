import axios from 'axios';

export {};

exports.handler = async (event: any) => {
    console.log(JSON.stringify(event, null, 2));

    await axios.get('http://arduino.tips/asciilogo.txt')
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })

    return "Done"
};