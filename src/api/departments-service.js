
import Config from '../config';
import axios from 'axios';

let departmentService = {};
const API =  `${Config.api.URL}departments`;

departmentService.getDepartments = () => {
    return axios.get(API);
  };
  
 export default departmentService;