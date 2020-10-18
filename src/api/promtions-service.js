
import Config from '../config';

let promotionService = {};

const API =  `${Config.api.URL}/promotions`;

promotionService.getPromotions = () => {
    return fetch({
      method: 'GET',
      url: API,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  };
  

 export default promotionService;