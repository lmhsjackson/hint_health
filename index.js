const axios = require('axios').default;
module.exports = class HintClient {
  constructor(client_key, password) {
    this.client_key = client_key;
    this.password = password
    this.baseUri = 'https://api.hint.com/api';
  }

  async getLeads(){
    let hintResponse = await axios.get(`${this.baseUri}/provider/lead_sources`, {
      auth: {
        username: this.client_key,
        pass: this.password
      }
    })
      .then(function (response) {
        console.log(`STATUS: ${response.status}`)
        return({ data: response.data, status: response.status })
      })
      .catch(function (error) {
        console.log(`STATUS: ${error.response.status}`)
        return({ data: error.response.data, status: error.response.status })
      });
    // console.log(`data is: ${hintResponse.data}, status is: ${hintResponse.status}`);
    return(hintResponse);
  };
}
