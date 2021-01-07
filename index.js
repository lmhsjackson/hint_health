const axios = require('axios').default;
module.exports = class HintClient {
  constructor(clientKey, password) {
    this.clientKey = clientKey;
    this.password = password
    this.baseUri = 'https://api.hint.com/api';
  }

  credentials() {
    return { auth: { username: this.clientKey, pass: this.password } }
  };

  async deleteCard(params){
    try {
      const response = await axios.delete(`${this.baseUri}/provider/patients/${params.patientId}/cards/${params.id}`, this.credentials())
      console.log(`STATUS: ${response.status}`)
      return { data: response.data, status: response.status }
    } catch(error) {
      console.log(`STATUS: ${error.response.status}`)
      return { data: error.response.data, status: error.response.status }
    };
  };

  async createCard(params){
    try {
      const response = await axios.post(`${this.baseUri}/provider/patients/${params.patient_id}/cards`, params, this.credentials())
      console.log(`STATUS: ${response.status}`)
      return { data: response.data, status: response.status }
    } catch(error) {
      console.log(`STATUS: ${error.response.status}`)
      return { data: error.response.data, status: error.response.status }
    };
  };

  async deleteMembership(params){
    try {
      const response = await axios.delete(`${this.baseUri}/provider/memberships/${params.id}`, this.credentials())
      console.log(`STATUS: ${response.status}`)
      return { data: response.data, status: response.status }
    } catch(error) {
      console.log(`STATUS: ${error.response.status}`)
      return { data: error.response.data, status: error.response.status }
    };
  };

  async createMembership(params){
    try {
      const response = await axios.post(`${this.baseUri}/provider/memberships`, params, this.credentials())
      console.log(`STATUS: ${response.status}`)
      return { data: response.data, status: response.status }
    } catch(error) {
      console.log(`STATUS: ${error.response.status}`)
      return { data: error.response.data, status: error.response.status }
    };
  };

  async createPatient(params){
    try {
      const response = await axios.post(`${this.baseUri}/provider/patients`, params, this.credentials())
      console.log(`STATUS: ${response.status}`)
      return { data: response.data, status: response.status }
    } catch(error) {
      console.log(`STATUS: ${error.response.status}`)
      return { data: error.response.data, status: error.response.status }
    };
  };

  async deletePatient(params){
    try {
      const response = await axios.delete(`${this.baseUri}/provider/patients/${params.id}`, this.credentials())
      console.log(`STATUS: ${response.status}`)
      return { data: response.data, status: response.status }
    } catch (error) {
      console.log(`STATUS: ${error.response.status}`)
      return { data: error.response.data, status: error.response.status }
    };
  };

  async getLeadSources(){
    try {
      const response = await axios.get(`${this.baseUri}/provider/lead_sources`, this.credentials())
      console.log(`STATUS: ${response.status}`)
      return { data: response.data, status: response.status }
    } catch(error) {
      console.log(`STATUS: ${error.response.status}`)
      return { data: error.response.data, status: error.response.status }
    };
  };

  async getLocations(){
    try {
      const response = await axios.get(`${this.baseUri}/provider/locations`, this.credentials())
      console.log(`STATUS: ${response.status}`)
      return { data: response.data, status: response.status }
    } catch(error) {
      console.log(`STATUS: ${error.response.status}`)
      return { data: error.response.data, status: error.response.status }
    };
  };

  async getPractitioners(){
    try {
      const response = await axios.get(`${this.baseUri}/provider/practitioners`, this.credentials())
      console.log(`STATUS: ${response.status}`)
      return { data: response.data, status: response.status }
    } catch(error) {
      console.log(`STATUS: ${error.response.status}`)
      return { data: error.response.data, status: error.response.status }
    };
  };
}
