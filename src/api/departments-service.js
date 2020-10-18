
import Config from '../config';

let departmentService = {};
const API =  `${Config.api.URL}/departments`;

departmentService.getDepartments = () => {
    return fetch({
      method: 'GET',
      url: API,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  };
  

 export default departmentService;