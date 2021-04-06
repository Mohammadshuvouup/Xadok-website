import http from '../utils/http';
import axios from 'axios';

const page_size=28;
export default class Service {

    static GetCategoryProducts(catId, pageNo, shopId){
        console.log("-mtg1-")
        let product_Category_Param={
            shop_id: shopId,
            procat_id : catId,
            page_no : pageNo,
            page_size: page_size
          };
          console.log(product_Category_Param)
          console.log("-mtg2-")
          axios.post('https://ristsys.store/api/GetShopProducts', product_Category_Param)
          .then(response=>{
              console.log("-mtg3-")
              return response;
          })
    }

    static ShopPage(shop_id){

    const shop_Params={
    shop_id: shop_id
    }
    
    let result = null;
    axios.post('https://ristsys.store/api/shopPage',shop_Params)
    .then(response=>{
        console.log("shop response",response)
        result =  response.data;
   
    })
    .catch(error=>{
      console.log(error);
    });
    return result;
    }
}