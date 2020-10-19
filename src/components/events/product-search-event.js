import EventEmitter from 'events';

class ProductSearchEvent extends EventEmitter {
 
 productSearchCompletedEvent =(selectedProduct)=> {
   console.log('search result raised', selectedProduct);
    this.emit('productSearchCompleted', selectedProduct);
  }

}
const productSearchEvent = new ProductSearchEvent();
export default productSearchEvent;