import axios from "axios";
const BaseURL='http://localhost:3001/';

const instance=axios.create({
  baseURL:'http://localhost:3001/',
  headers: { "Content-Type": "multipart/form-data" },
})
const userRequest=(method,name,url,data)=>{
  debugger;
  const URL=('http://localhost:3001/'+url)
  debugger;
  axios({
    method: method,
    name: name, 
    url: URL,
    data: data,
    config: { headers: { "Content-Type": "multipart/form-data" } },
  })
}
const API = {
  getForm(fData) {
    userRequest('post','post','form',fData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response.response.data);
      })
  },
  getBlock(isChecked) {
    let numbArr=isChecked.map((string)=>parseInt(string))
    axios.post(BaseURL+'block',numbArr)
    return axios.get(BaseURL+'data')
  },
  getDB(){return axios.get(BaseURL+'data');},

  getUnBlock(isChecked) {
    debugger;
    let numbArr=isChecked.map((string)=>parseInt(string))
    axios.post(BaseURL+'active',numbArr)
    return axios.get(BaseURL+'data')
  },
  getDelete(isChecked) {
    let numbArr=isChecked.map((string)=>parseInt(string))
    userRequest('post','delete','delete',numbArr)
    return this.getDB()
    
  },
  getDelAll(tableAC) {
    const data = "dataTable";
    userRequest('post','deleteAll','allDelete',data)
  },
  getLog(fData) {return axios.post(BaseURL+'log',fData);},
  getRegistration(fData) {return axios.post(BaseURL+'form',fData);},
};
export default API;
