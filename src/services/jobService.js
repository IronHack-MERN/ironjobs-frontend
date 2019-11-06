import axios from 'axios';

class JobService {
    constructor() {
        this.axios = axios.create({
            baseURL: 'http://localhost:3001',  
        });
    }

    async getAllJobs() {
        return this.axios.get('/jobs')
            .then(({ data: jobs }) => jobs);
    }
}

const jobService = new JobService()

export default jobService;