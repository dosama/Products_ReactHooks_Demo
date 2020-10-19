
import Config from '../config';
import axios from 'axios';

let promotionService = {};

const API =  `${Config.api.URL}promotions`;

promotionService.getPromotions = () => {
    return axios.get(API);
  };
  

 export default promotionService;