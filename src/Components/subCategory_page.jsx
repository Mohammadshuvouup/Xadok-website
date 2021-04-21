import React, {useState,useEffect,useRef } from 'react';
import {Navbar,Row,Col,Nav,Container,Image,Card,Dropdown,CardGroup,CardDeck,Badge,Toast,Button,Form,Accordion,Carousel,Modal} from 'react-bootstrap'
import logo from "../logo/logo.svg";
import Footer from "./footer"
import TopBar from './topBar'
import Sidebar from './sidebar';
import '../css/explore.css';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import {Link,useParams} from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import NoProduct from './no_product_page';
import Service from '../services/service';
import { Trans, useTranslation } from 'react-i18next';

const API_PREFIX_URL=`https://deliveryxadok.s3.us-east-2.amazonaws.com/`;
const page_size= 28;
var xadokCartItems = [];

function MyVerticallyCenteredModal(props) {

  const [num ,setNum] = useState(1);
  const plus = () => {
    setNum(num + 1);
  };
  const minus = () => {
    setNum(num - 1);
  };
  const { t, i18n } = useTranslation();


  useEffect(() => {
    let language = localStorage.getItem("language");

    // console.log("LANGUAGE SELECTED", language);
  
    if (language && language.length !== 0) {
      i18n.changeLanguage(language)
    }
  },[]);

  const [cart_quantity,setCart_quantity]=useState(0);
  
  const addXadokCart=()=>{
  
     if(xadokCartItems.some((item) =>item.pro_id == props.cartData.pro_id)){
        
        xadokCartItems.map((value,index)=>{
          if(value.pro_id == props.cartData.pro_id){
            
            value.pro_qua = value.pro_qua+1;
            // value.pro_qua=num+1;
            // setNum(value.pro_qua);
        
          }
        })
      }

     else{
      xadokCartItems.push({pro_id: props.cartData.pro_id, pro_name: props.cartData.pro_name_en, pro_qua: num, pro_model: 0, product_price: ((props.cartData.pro_special_price == 0 || props.cartData.pro_special_price =='') ? props.cartData.pro_price : props.cartData.pro_special_price ), img: API_PREFIX_URL+props.cartData.pro_img, offer_price: props.cartData.pro_special_price, offer_percent: 0, offer_info: props.cartData.pro_desc_en});
      let qty=cart_quantity+1;
      setCart_quantity(qty);
      setNum(1);
      // setNum(props.cartData.pro_qua);
    }
   
    localStorage.setItem('xadokCartItems', JSON.stringify(xadokCartItems));
    localStorage.setItem('cart_quantity', JSON.stringify(cart_quantity));

    localStorage.setItem('modal_cart_quantity', JSON.stringify(num));
  }

  return(
    <Modal show={props.show} onHide={props.onHide} className="modal-box">
          <Modal.Header closeButton>
            <Row>
              <Col md={6}>
                <Image src={`${API_PREFIX_URL}${props.cartData.pro_img}`}></Image>
              </Col>
              <Col md={6}>
                <Modal.Title>{props.cartData.product}</Modal.Title> 
                <h6 className="mt-5">{t("subCategory.categories")} <span>{props.cartData.category}</span></h6>
            <h6 className="mt-2">{t("subCategory.description")} <span>{props.cartData.pro_desc_en}</span></h6>
                <del className="text-muted mt-3">{props.cartData.pro_price}</del>
                <div className="d-flex align-items-center price-box mt-1">
                  <span className="current-price mr-1">{props.cartData.pro_price}</span><span className="currency">BHD</span>
                  <div className="discount">25%</div>
                </div>
            <p className="note mt-2">{t("subCategory.add-to-cart_note")}</p>
               
               <div className="cart-options d-flex align-items-center">
                  <div className="input-group plus-minus-input">
                    <div className="input-group-button">
                      <button type="button" className="sign-btn minus" data-quantity="minus" data-field="quantity" onClick={minus}>
                        <i className="fa fa-minus" aria-hidden="true"></i>
                      </button>
                    </div>
                    <input className="input-group-field" type="number" name="quantity" value={num} />
                    <div className="input-group-button">
                      <button type="button" className="sign-btn hollow plus" data-quantity="plus" data-field="quantity" onClick={plus}>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>

              <button className="modal_addcart_btn" onClick={addXadokCart}><i className="fas fa-shopping-cart mr-2"></i> {t("explore.add-to-cart")}  </button>
                  <i class="fas fa-heart favourite-icon"></i>
                </div>
              </Col>
            </Row>

          </Modal.Header>
          <Modal.Body>
            {/* =============== Alternnative Products ========== */}
            <h2>Alternative Products</h2>
            <Row className="modal-carousel-row">
            <Carousel classname="alternative-items-carousel">
                { !props.slide_product
                ? null
                : props.alternative_Product.map((product,index)=>(
                  <Carousel.Item>
                    <CardDeck>
                      {product.map((val,index)=>(
                          !val ? null :(
                          <Card className="alternative-item">
                            <Card.Img src={`${API_PREFIX_URL}${val.pro_img}`} />
                            <Card.Body>
                              <Card.Text>
                              <p className="pl-2 old_price"><del>{val.pro_price}</del></p>
                             <div  className="priceBox">
                                <h4 className="pl-2 item_price">{val.pro_special_price}<span className="currency-symbol">BDH</span></h4>
                                  <div className="discount" >
                                      <p className="pt-1 pl-3 ptag">25%</p>
                                  </div>
                              </div>
                              <p className="item_description">{val.pro_name}</p>
                              </Card.Text>
                              <button className="addcartBtn"><i className="fas fa-shopping-cart mr-2"></i> {t("explore.add-to-cart")}  </button>
                            </Card.Body>
                          </Card>
                        )
                      ))}
                      </CardDeck>
                  </Carousel.Item>
                
                ))
                }
                </Carousel>
            </Row>

            {/* =============== Similar Products ========== */}
            <h2 className="mt-3">Similar Products</h2>
            <Row className="modal-carousel-row">
            <Carousel classname="alternative-items-carousel">
                {props.cartSimilar_Product && props.cartSimilar_Product.length>0 && props.cartSimilar_Product.map((value,index)=>{
                  return(
                    <Carousel.Item key={index}>
                      <CardDeck>
                      {value.map((val,index)=>(
                         !val ? null :(
                        <Card className="alternative-item">
                            <Card.Img src={`${API_PREFIX_URL}${val.pro_img}`} />
                            <Card.Body>
                              <Card.Text>
                              <p className="pl-2 old_price"><del>{val.pro_price}</del></p>
                             <div  className="priceBox">
                                <h4 className="pl-2 item_price">{val.pro_special_price}<span className="currency-symbol">BDH</span></h4>
                                  <div className="discount" >
                                      <p className="pt-1 pl-3 ptag">25%</p>
                                  </div>
                              </div>
                              <p className="item_description">{val.pro_name}</p>
                              </Card.Text>
                              <button className="addcartBtn"><i className="fas fa-shopping-cart mr-2"></i> {t("explore.add-to-cart")}  </button>
                            </Card.Body>
                          </Card>
              
                         )
                      ))}
                  </CardDeck>
                </Carousel.Item>
                  );
                })}
            </Carousel>
            </Row>
          </Modal.Body>
        
    </Modal>
  );

}

export default function Explore(props) {

  const [modalShow, setModalShow] = useState(false);
  const [num1 ,setNum1] = useState(1);
  const plus1 = () => {
    setNum1(num1 + 1);
  };
  const minus1 = () => {
    if(num1 > 0){
    setNum1(num1 - 1);
    }
    else{
    }
  };
  const [show, setShow]  = useState(false);
  const [show1,setShow1] = useState(false);
  const [show2,setShow2] = useState(false);
  const [show3,setShow3] = useState(false);
  const [show4,setShow4] = useState(false);
  const [show5,setShow5] = useState(false);
  const [show8,setShow8] = useState(false);
  const [show9,setShow9] = useState(false);
  const [show10,setShow10] = useState(false);
  const [show111,setShow111] = useState(false);
  const [show112,setShow112] = useState(false);
  const [show113,setShow113] = useState(false);
  const [show114,setShow114] = useState(false);
  const [show115,setShow115] = useState(false);
  const [show116,setShow116] = useState(false);
  const [show117,setShow117] = useState(false);
  const [show118,setShow118] = useState(false);





// --------delete-------------------
  const [show6,setShow6] = useState(true);
  const [show7,setShow7] = useState(true);
// ----------------------



  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const handleClose8 = () => setShow8(false);
  const handleShow8 = () => setShow8(true);

  const handleClose9 = () => setShow9(false);
  const handleShow9 = () => setShow9(true);

  const handleClose10 = () => setShow10(false);
  const handleShow10 = () => setShow10(true);
  
  const handleClose111 = () => setShow111(false);
  const handleShow111 = () => setShow111(true);

  const handleClose112 = () => setShow112(false);
  const handleShow112 = () => setShow112(true);

  const handleClose113 = () => setShow113(false);
  const handleShow113 = () => setShow113(true);

  const handleClose114 = () => setShow114(false);
  const handleShow114 = () => setShow114(true);

  const handleClose115 = () => setShow115(false);
  const handleShow115 = () => setShow115(true); 


  const handleClose116 = () => setShow116(false);
  const handleShow116 = () => setShow116(true);

  const handleClose117 = () => setShow117(false);
  const handleShow117 = () => setShow117(true);

  const handleClose118 = () => setShow118(false);
  const handleShow118 = () => setShow118(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [isOpen,setOpen]= useState(false);
  const [isClose,setClose]=useState(false); 
  const [is_AdClose,setAdClose]=useState(false);

  const expandMenu=()=>{
    if(isOpen===false){
      setOpen(true);
      setClose(false);
    }
  }

  const closeMenu=()=>{
    if(isClose===false){
      setOpen(false);
      setClose(true)
    }
  }

  const closeAd=()=>{
    alert("working");
    if(is_AdClose===false){
      setAdClose(true);
    }
  }
  
    let Params = useParams();

    const shopID= Params.shop_id;
    const [page,setPage]=useState(1);

    console.log("Params", Params)

    const similarProduct_Param={
      shop_id: shopID,
      user_id: ''
    }

    let modal_Param={
      shop_id: shopID,
      pro_id:"",
      user_id:""
    }
    
      const product_Category_Param={
      shop_id: Params.shop_id,
      procat_id : Params.cat_id,
      page_no : page,
      page_size: page_size,
    }

    const sub_category_Params={
      shop_id: Params.shop_id,
      procat_sub: Params.subcat_id,
      page_size: page_size,
      page_no: page
  
    }

    const [category, setCategory]=useState([]);
    const [product_subcategory,setProduct_subcategory]=useState([]);
    const [cartData, setCartData]=useState([]);
    const [alternative_Product,setAlternative_Product]=useState([]);
    const[ cartSimilar_Product,setCartSimilar_Product]=useState([]);
    const [shops,setShops]=useState([]);
    var similar_list=[];
    var alternate_list=[];
    const [slide_product,setSlide_product]=useState([]);
    // const updateLocation={
    //   lat:26.1109803,
    //   lng:50.5156726
    // }

    // const [sidebar_sub_cat,setSidebar_sub_cat]=useState([]);
    const [subcat_list,setsubcat_list]=useState([]);
    const [subcat_filterbtn, setsubcat_filterbtn]=useState([]);
    const [allsubcat_data,setAllsubcat_data]=useState([]);
    const [subtitle,setSubtitle]=useState("");

    const [filter_subcatID, setFilter_subcatID]=useState(0);
    // let xadokCartItems = [];
    // let count = 0;

    // const addXadokCart=()=>{
    //   xadokCartItems.push({pro_id: data.pro_id, pro_name: data.pro_name_en, pro_qua: count, pro_model: 0, product_price: ((data.pro_special_price != 0 || data.pro_special_price !='') ? data.pro_special_price : data.pro_price), img: API_PREFIX_URL+data.pro_img, offer_price: data.pro_special_price, offer_percent: 0, offer_info: data.pro_desc_en});
    // }

    const handleAddCart=(data)=>{

      // console.log("cart data", data)
      setModalShow(true);

      const product_ID = data.pro_id;

      modal_Param={
        shop_id: shopID,
        pro_id: product_ID,
        user_id:""
      }

      // console.log("modal param",modal_Param)
      axios.post('https://ristsys.store/api/GetProductInfo', modal_Param)
      .then(response=>{
        // console.log("cart data api",response.data.data.product)
        // console.log("cart alternative product api",response.data.data.alternatives)
        setCartData(response.data.data.product);
        setSlide_product(response.data.data);
        // setAlternative_Product(response.data.data.alternatives);
        // setCartSimilar_Product(response.data.data.related);
        alternate_list=[];
        var j = 0;
        for (
          let index = 0;
          index < Math.round(response.data.data.alternatives.length / 5);
          index++
        ) {
          var k = [];
          for (let i = 0; i < 5; i++) {
            if (typeof response.data.data.alternatives[j] === undefined) {
            } else {
              k.push(response.data.data.alternatives[j]);
              j++;
            }
          }
          alternate_list[index] = k;
        }
        setAlternative_Product(alternate_list);

        similar_list=[];
        var m = 0;
        for (
          let index = 0;
          index < Math.round(response.data.data.related.length / 5);
          index++
        ) {
          var n = [];
          for (let i = 0; i < 5; i++) {
            if (typeof response.data.data.related[m] === undefined) {
            } else {
              n.push(response.data.data.related[m]);
              m++;
            }
          }
          similar_list[index] = n;
        }
        setCartSimilar_Product(similar_list);
       
      })
      .catch(error=>
        console.log(error)
      )

      // xadokCartItems.push({pro_id: data.pro_id, pro_name: data.pro_name_en, pro_qua: count, pro_model: 0, product_price: ((data.pro_special_price != 0 || data.pro_special_price !='') ? data.pro_special_price : data.pro_price), img: API_PREFIX_URL+data.pro_img, offer_price: data.pro_special_price, offer_percent: 0, offer_info: data.pro_desc_en});
      // addXadokCart(xadokCartItems);
     
    }

 /*    ======================== DISPLAY SIDEBAR SUB CATEGORIES ======================== */

    const displaySubCategory=(prod_cat)=>{
     setPage(1);
     setAppState({loading:true});
     
    } 

 const shop_Params={
  shop_id: Params.shop_id,
  user_id: ""
 }


  const [appState, setAppState] = useState({ loading: false, res: null });
  const { t, i18n } = useTranslation();
  

  useEffect(() => {
    let language = localStorage.getItem("language");

    // console.log("LANGUAGE SELECTED", language);
  
    if (language && language.length !== 0) {
      i18n.changeLanguage(language)
    }

    setAppState({loading:true});
    axios.post('https://ristsys.store/api/shopPage',shop_Params)
    .then(response=>{

      if(response.status===0){
        setLoadMore(false);
      }
      setAppState({loading:false,res:response});
      setShops(response.data.data.shop);
      setCategory(response.data.data.category);
    })

    .catch(error=>{
      console.log(error);
    });
        
    if(Params.subcat_id==0){
      setAppState({loading:true});
      axios.post('https://ristsys.store/api/GetShopProducts', product_Category_Param)
      .then(response=>{
        setAppState({loading:false,res:response});
        if(response.status===0){
          setLoadMore(false);
        }
        console.log("sidebar cat subcat products api",response.data.data);
        setLoadMore(true);
        setProduct_subcategory(response.data.subs);
        setsubcat_filterbtn(response.data.subs);
        setsubcat_list(response.data.data);
        setAllsubcat_data(response.data.data);
     
    
      })

      .catch(error=>{
        console.log(error)
      })
    }

    else if(Params.subcat_id!==0){
      setAppState({loading:true});
      axios.post('https://ristsys.store/api/GetShopSubCategoryProducts', sub_category_Params)
      .then(response=>{
        if(response.status===0){
          setLoadMore(false);
        }
        
        setsubcat_list(response.data.data);
        setSubtitle("");
    
          
      })
    
      .catch(error=>{
        console.log(error)
      })
    }

   


    // const nav_sub_Cat = GetShopSubCategoryProducts(Params.shop_id,Params.subcat_id,page_size,page);
    // console.log("nav sub cats", nav_sub_Cat);
  //     axios.get('https://ristsys.store/api/GetBooklets',{ params: {shop_id: shopID}  })
  //     .then(response=>{
  //       // console.log("offfer api",response.data)
  //       // setOffer(response.data.data);
  //     })
  //     .catch(error=>
  //       console.log(error)
  //     )

  //     axios.post('https://ristsys.store/api/shopPage', similarProduct_Param)
  //     .then(response=>{

  //       // console.log("side category api",response.data.data.category)
  //       setCategory(response.data.data.category);
  //     })
  //     .catch(error=>
  //       console.log(error)
  //     )

  //     axios.post('https://ristsys.store/api/GetShopProducts', nav_category_Params)
  //     .then(response=>{
  //       // console.log("nav category page api ",response.data.data);
  //       if(response.data.data !== null){
  //       setsubcat_list(response.data.data);
  //       }

  //       if(response.status===0 && response.data==null){
  //         ProductsNotAvailable();
  //       }
  //     })
  //     .catch((error)=>{
  //       console.log(error)
  //     })


  //     axios.post('https://ristsys.store/api/GetShopProducts', filterbtn_subcat_Param)
  //     .then(response=>{
  //       // console.log("filter btn list" , response.data.data)
  //       setsubcat_filterbtn(response.data.subs);
  //       setAllsubcat_data(response.data.data);
     
  //     })

  //     .catch(error=>{
  //       console.log(error)
  //     })


  //  axios.post('https://ristsys.store/api/GetShopSubCategoryProducts', sidebar_subcat_Params)
  //     .then(response=>{
  //       console.log("subcategory api",response.data.data);
  //       console.log("subcat_paramsss", sidebar_subcat_Params);

        
  //       if(response.data.data != null){
  //         setSidebar_sub_cat(response.data.data);
  //         setsubcat_list(response.data.data);
  //       }
  
         
  //     })

  //     .catch(error=>{
  //       console.log(error)
  //     })

    },[setAppState,Params])

    const filter_btns = localStorage.getItem('filter_buttons') === 'true';

    console.log("filter btns", filter_btns)

  const FilterButtons=()=>{
    
    return(
      <>
        {subcat_filterbtn && subcat_filterbtn.length && subcat_filterbtn.map((value,index)=>{

          return(
         

          <Link
          to={
            "/" +
            Params.shop_name +
            "/" +
            Params.shop_id +
            "/" +
            value.procat_id +"/"+
            value.procat_name_en+"/"+
            value.procat_id
          }
          style={{ textDecoration: "none" }}>
            <Button
            aria-pressed="true" 
            className="filter_btn mb-4"
            key={index}
            onClick={()=>subCategoryItems(value.procat_id)}>
              {value.procat_name_en}
            </Button>
          </Link>
        
          );
        })}
      </>
    );
  }

const subCategoryItems=(passedID)=>{
  setLoadMore(true);
  setPage(1);

   if(passedID !=="All"){
  
  // const  filter_btn_Param={
  //     shop_id:  Params.shop_id,
  //     procat_sub : passedID,
  //     page_no : page,
  //     page_size: page_size
  //   }


    // axios.post('https://ristsys.store/api/GetShopSubCategoryProducts', filter_btn_Param)
    // .then(response=>{

    //   if(response.status===0){
    //     setLoadMore(false);
        
    //   }

    //   if(response.status===0 && response.data==null){
    //     ProductsNotAvailable();
    //   }
    //   // console.log("filtered subcategory api",response.data.data);
    //   if(response.data.data != null){
    //   setsubcat_list(response.data.data);
    //   }
       
    // })

    // .catch(error=>{
    //   console.log(error)
    // })

   
   }

   else{

     setsubcat_list(allsubcat_data);
     setSubtitle("All");
   }

}

const [loadMore ,setLoadMore]=useState(true);

const  ProductsNotAvailable=()=>{
  return(
    <NoProduct/>
  )
}

function loadItems(){

  if(loadMore){

    let newpage=0;

  // console.log("page ",page)

  const updated_sidebar_subcat_Params={
      shop_id:  Params.shop_id,
      procat_sub : Params.subcat_id,
      page_no : page,
      page_size: page_size
    }

    const updated_filterbtn_Params={
      shop_id:  Params.shop_id,
      procat_sub : filter_subcatID,
      page_no : page,
      page_size: page_size
    }

    const updated_nav_category_Params={
      shop_id: Params.shop_id,
      procat_id: Params.cat_id,
      page_no: page,
      page_size: page_size
   
    }

    setTimeout(() => {

      // axios.post('https://ristsys.store/api/GetShopProducts', updated_sidebar_subcat_Params)
      // .then(response=>{
      //   if(response.status==0){
      //     setLoadMore(false);
      //   }

      //   // console.log("-4 ",response.data.data);
      //   setsubcat_list(subcat_list.concat( response.data.data));
      //     newpage=page+1;
       
      //     setPage(newpage);
      // })
      // .catch((error)=>{
      //   console.log(error)
      // })

      // if(updated_filterbtn_Params.procat_sub==0 ){
        
        // axios.post('https://ristsys.store/api/GetShopSubCategoryProducts', updated_sidebar_subcat_Params)
        // .then(response=>{
        //   if(response.status==0){
        //     setLoadMore(false);
        //   }
        //   setsubcat_list(subcat_list.concat( response.data.data));
        //   newpage=page+1;
    
        //   setPage(newpage);
        // })

        // .catch(error=>{
        //   console.log(error)
        // })
      // }

      // else{
        // axios.post('https://ristsys.store/api/GetShopSubCategoryProducts', updated_filterbtn_Params)
        // .then(response=>{
        //   if(response.status==0){
        //     setLoadMore(false);
        //   }
        //   setsubcat_list(subcat_list.concat( response.data.data));
        //   newpage=page+1;
        
        //   setPage(newpage);
        // })

        // .catch(error=>{
        //   console.log(error)
        // })

      // }

  },3000);


  }

}

 /*    ======================== PRODUCTS TO DISPLAY FOR SUBCATEGORY PAGE ======================== */
    let recentPrice=0.00;
    let prevPrice=0.00;
    const SubcategoryProducts=()=>{
      return(
        
        <InfiniteScroll
            pageStart={1}
            loadMore={loadItems}
            hasMore={true || false}
            loader={<div className="loader" key={0}>
             <Loader className="text-center" type="TailSpin" color="#e3424b" height={80} width={80} />
            </div>}
            className="d-flex flex-wrap"
        >
          {/* {subcat_list.length==0 &&
    
            <Loader className="text-center" type="TailSpin" color="#e3424b" height={80} width={80}></Loader>

          } */}


        {subcat_list!==null && subcat_list.length>0 && subcat_list.map((value,index)=>{
     
          if(value!==null){

        
            if(value.pro_special_price!=null && value.pro_special_price==0.000){
              recentPrice = value.pro_price;
              prevPrice="";
            }
            else{
              recentPrice = value.pro_special_price;
              prevPrice= value.pro_price;
            }
            return(
            <Col key={index} sm={6} md={4} lg={3} xl={3} className="item similar-item">
              <div className="item-image">
              <Image src={`${API_PREFIX_URL}${value.pro_img}`} />
              </div>
              <p className="pl-2 old-price"><del>{prevPrice}</del></p>
                <div  className="price-box">
                    <h4 className="pl-2 item-price">{recentPrice}<span className="currency-symbol">BDH</span></h4>
                    <div className="discount" >
                        <p className="pt-1 pl-3 ptag">25%</p>
                    </div>
                </div>
            
                <p className="item-description">{value.pro_name_en}</p>
                <button className="addcart_btn" onClick={()=>handleAddCart(value)}><i className="fas fa-shopping-cart mr-2"></i> {t("explore.add-to-cart")}  </button>
              </Col>  
          );
          }
        })}

       
        </InfiniteScroll>
      );
    }
    
  return (
  <React.Fragment>
  
  <Container className="container-box" fluid>
  <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            cartData={cartData}
            alternative_Product={alternative_Product}
            cartSimilar_Product={cartSimilar_Product}
            slide_product={slide_product}
            // xadokCartItems={xadokCartItems}
          />
      <Row>
   
      <Col className="menu-icon" sm={1} xs={1}>
        <i className="fas fa-bars" onClick={expandMenu}></i>
      </Col>
      <Col sm={3} lg={3} className="sideNav subcategory-nav">
      
      <Navbar.Brand href="/" className="pt-2 logo" style={{ width: "100%" }}>
          <Image src={logo} className="logo-img" style={{ height: "10vh" }} />
      </Navbar.Brand>
      <Nav defaultActiveKey="" className="flex-column pt-4">
        {category && category.length>0 && category.map((value,index)=>{
          return(
            <Nav.Link 
            className="side-bar-item"
           
            >
              <Accordion defaultActiveKey="0" onClick={()=>displaySubCategory(value.procat_id)}>
                <Card>
                  <Card.Header>
                  <Link
                     to={
                      "/" +
                      Params.shop_name +
                      "/" +
                      Params.shop_id +
                      "/" +
                      value.procat_id +
                      "/"+
                      value.name+
                      "/" +
                      " 0"
                    }
                    style={{ textDecoration: "none" }}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      <Image src={`${API_PREFIX_URL}${value.procat_img}`} />{value.name}
                    </Accordion.Toggle>
                    </Link>
                  </Card.Header>

                  <Accordion.Collapse eventKey="1" key={index}>
                      <Card.Body>
                      {product_subcategory && product_subcategory.length>0 && product_subcategory.map((sub_cat , index)=>(
                        sub_cat.length==0?  <Loader className="text-center" type="TailSpin" color="#e3424b" height={80} width={80} /> : (
                        <ul className="side-nav-catgory-list">
                        {/* <Image src={`${API_PREFIX_URL}${sub_cat.procat_img}`} /> */}
                        <Link
                          to={
                            "/" +
                            Params.shop_name +
                            "/" +
                            Params.shop_id +
                            "/" +
                            value.procat_id +
                            "/"+
                            sub_cat.procat_name_en+
                            "/"+
                            sub_cat.procat_id
                          }
                          style={{ textDecoration: "none" }}><li> {sub_cat.procat_name_en}</li>
                         </Link>
                        </ul>
                      )
                      ))}
                        </Card.Body>
                       </Accordion.Collapse>
                </Card>
               </Accordion>
            </Nav.Link>
     
          );
        })}
        </Nav>
  </Col>

  {/* ========= expand menu bar ========= */}

     <div className={`expanded-menu ${isOpen ? "slide-menu" : "hide-menu"}`}>
        <i class="fas fa-times" onClick={closeMenu}></i>
          <Navbar.Brand href="/" className="pt-2 logo" style={{ width: "100%" }}>
          <Image src={logo} className="logo-img" style={{ height: "10vh" }} />
          </Navbar.Brand>
      
     </div>

       <Col xs={9} sm={9} lg={9} fluid>
       <TopBar />

       <Row>
       <Col xs={12} sm={12} lg={12} 
       className="explore-banner" 
       style={{
        background: `url( ${(shops.gallery!=null && shops.gallery.length > 0 ) ? API_PREFIX_URL+shops.gallery[0].shop_gall : ""})`,
        }}>
          {
          (appState.loading) ?  <Loader className="text-center" type="TailSpin" color="#e3424b" height={80} width={80} /> : <Image src={`${API_PREFIX_URL}${shops.shop_img}`}></Image>
          }
          
        </Col>
       </Row>

       <Row>
       
       <h2 className="explore-sub-title mb-4">{subtitle==""? Params.subcat_name:"All"}</h2>
          <Col xs={12} sm={12} lg={12}>
                <div className={`btn-container d-flex flex-wrap`}>
   
                <Button className="filter_btn mb-4"
                  onClick={()=>subCategoryItems("All")}>
                    All
                </Button>
     
                  <FilterButtons />
                </div>
          </Col>
       </Row>
         
        <Row>
            <SubcategoryProducts/>
       </Row> 
       </Col>
      </Row>
 </Container>

  <Footer className="mt-4"/>
  
  </React.Fragment>
        
  );
    
}


