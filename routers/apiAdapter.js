const axios = require('axios');
var http = require('http')

module.exports = (baseURL) => {
  return axios.create({
    baseURL: baseURL,
    timeout: 60000,
    httpAgent: new http.Agent({ keepAlive: true }),    
  });
}