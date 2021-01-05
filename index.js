const axios = require('axios').default;
module.exports = class HintClient {
  constructor(client_key, password) {
    this.client_key = client_key;
    this.password = password
    this.baseUri = 'https://api.hint.com/api';
  }

  credentials() {
    return({ auth: { username: this.client_key, pass: this.password } })
  };

  async deleteCard(params){
    let hintResponse = await axios.delete(`${this.baseUri}/provider/patients/${params.patientId}/cards/${params.id}`, this.credentials())
      .then(function (response) {
        console.log(`STATUS: ${response.status}`)
        return({ data: response.data, status: response.status })
      })
      .catch(function (error) {
        console.log(`STATUS: ${error.response.status}`)
        return({ data: error.response.data, status: error.response.status })
      });
    return(hintResponse);
  };

  async createCard(params){
    let hintResponse = await axios.post(`${this.baseUri}/provider/patients/${params.patient_id}/cards`, params, this.credentials())
      .then(function (response) {
        console.log(`STATUS: ${response.status}`)
        return({ data: response.data, status: response.status })
      })
      .catch(function (error) {
        console.log(`STATUS: ${error.response.status}`)
        return({ data: error.response.data, status: error.response.status })
      });
    return(hintResponse);
  };

  async deleteMembership(params){
    let hintResponse = await axios.delete(`${this.baseUri}/provider/memberships/${params.id}`, this.credentials())
      .then(function (response) {
        console.log(`STATUS: ${response.status}`)
        return({ data: response.data, status: response.status })
      })
      .catch(function (error) {
        console.log(`STATUS: ${error.response.status}`)
        return({ data: error.response.data, status: error.response.status })
      });
    return(hintResponse);
  };

  async createMembership(params){
    let hintResponse = await axios.post(`${this.baseUri}/provider/memberships`, params, this.credentials())
      .then(function (response) {
        console.log(`STATUS: ${response.status}`)
        return({ data: response.data, status: response.status })
      })
      .catch(function (error) {
        console.log(`STATUS: ${error.response.status}`)
        return({ data: error.response.data, status: error.response.status })
      });
    return(hintResponse);
  };

  async createPatient(params){
    let hintResponse = await axios.post(`${this.baseUri}/provider/patients`, params, this.credentials())
      .then(function (response) {
        console.log(`STATUS: ${response.status}`)
        return({ data: response.data, status: response.status })
      })
      .catch(function (error) {
        console.log(`STATUS: ${error.response.status}`)
        return({ data: error.response.data, status: error.response.status })
      });
    return(hintResponse);
  };

  async deletePatient(params){
    let hintResponse = await axios.delete(`${this.baseUri}/provider/patients/${params.id}`, this.credentials())
      .then(function (response) {
        console.log(`STATUS: ${response.status}`)
        return({ data: response.data, status: response.status })
      })
      .catch(function (error) {
        console.log(`STATUS: ${error.response.status}`)
        return({ data: error.response.data, status: error.response.status })
      });
    return(hintResponse);
  };

  async getLeadSources(){
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
    return(hintResponse);
  };

  async getLocations(){
    let hintResponse = await axios.get(`${this.baseUri}/provider/locations`, this.credentials())
      .then(function (response) {
        console.log(`STATUS: ${response.status}`)
        return({ data: response.data, status: response.status })
      })
      .catch(function (error) {
        console.log(`STATUS: ${error.response.status}`)
        return({ data: error.response.data, status: error.response.status })
      });
    return(hintResponse);
  };

  async getPractitioners(){
    let hintResponse = await axios.get(`${this.baseUri}/provider/practitioners`, this.credentials())
      .then(function (response) {
        console.log(`STATUS: ${response.status}`)
        return({ data: response.data, status: response.status })
      })
      .catch(function (error) {
        console.log(`STATUS: ${error.response.status}`)
        return({ data: error.response.data, status: error.response.status })
      });
    return(hintResponse);
  };
}
