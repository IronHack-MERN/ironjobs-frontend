import axios from 'axios';

class ApplyService{
  constructor(){
    this.apply = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
      withCredentials:true
    });
  }

  // Create new apply an offer
  async addNewApply(id, body){
    return this.apply.post(`/applies/${id}`, body)
    .then(({ data: apply }) => apply);
  }

  async getAllApplies(){
    return this.apply.get('/applies')
      .then(({ data: applies }) => applies);
  }

  // async getMyApplies(id, body){
  //   return this.apply.get(`/applies/${id}`, body)
  //     .then(({ data: myApplies }) => myApplies);
  // }

  async getMyApplies(id){
    return this.apply.get(`/applies/${id}`)
      .then(({ data: myApplies }) => myApplies);
  }
}

const applyService = new ApplyService();

export default applyService;
