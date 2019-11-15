import axios from 'axios';

class ApplyService{
  constructor(){
    this.apply = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
      withCredentials:true
    });
  }

  async addNewApply(body){
    return this.axios.post('/apply/', body)
    .then(({ data: apply }) => apply);
  }
}
