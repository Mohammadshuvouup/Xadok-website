import React, {useState,useEffect } from 'react'
import {Navbar,Row,Col,Nav,Container,Image,Card,Dropdown,CardGroup,CardDeck,Badge,Toast,Button,Form,Accordion,Carousel,Modal} from 'react-bootstrap'
import logo from "../logo/logo.svg";
import Footer from "../Components/footer"
import TopBar from '../Components/topBar'
import Sidebar from '../Components/sidebar';
import '../css/explore.css';
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import { Link, useParams } from 'react-router-dom';
import { Trans ,useTranslation} from 'react-i18next';

const API_PREFIX_URL=`https://deliveryxadok.s3.us-east-2.amazonaws.com/`;

function MyVerticallyCenteredModal(props) {
  
  const { t, i18n } = useTranslation();
   

  useEffect(() => {
    
    let language = localStorage.getItem("language");

    // console.log("LANGUAGE SELECTED", language);
  
    if (language && language.length !== 0) {
      i18n.changeLanguage(language)
    }

  },[]);


 
  const [num ,setNum] = useState(1);
  const plus = () => {
    setNum(num + 1);
  };
  const minus = () => {
    setNum(num - 1);
  };
 

  return(
    <Modal show={props.show} onHide={props.onHide} className="modal-box">
          <Modal.Header closeButton>
            <Row>
              <Col md={6}>
                <Image src={`${API_PREFIX_URL}${props.cartData.pro_img}`}></Image>
              </Col>
              <Col md={6}>
                <Modal.Title>{props.cartData.product}</Modal.Title> 
                <h6 className="mt-5">{t("subCategory.categories")} : <span>{props.cartData.category}</span></h6>
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

                  <button className="modal_addcart_btn"><i className="fas fa-shopping-cart mr-2"></i> {t("explore.add-to-cart")}   </button>
                  <i class="fas fa-heart favourite-icon"></i>
                </div>

              </Col>
            </Row>

          </Modal.Header>
          <Modal.Body>
            {/* =============== Alternnative Products ========== */}
            <h2>{t("subCategory.Alternative-Products")}</h2>
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
            <h2 className="mt-3">{t("explore.similar-products")}</h2>
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

    // const {passedData}=props.location.state;
    // const shopID= passedData.shop_id;
  
    let Params = useParams();
    const shopID= Params.shop_id;

    // console.log("PARAMS",Params)
    // const shopID= shop_id;
    // localStorage.setItem("shopID", passedData.shop_id);
    // const shopID= localStorage.getItem("shopID");

    const similarProduct_Param={
      shop_id: shopID,
      user_id: ''
    }

    let modal_Param={
      shop_id: shopID,
      pro_id:"",
      user_id:""
    }

    let product_Category_Param={
      shop_id:  Params.shop_id,
      procat_id : Params.prod_cat,
      page_no : 1,
      page_size: 30
    }

    const [offer,setOffer]=useState([]);
    const [similarProd, setSimilarProd]=useState([]);
    const [category, setCategory]=useState([]);
    const [product_subcategory,setProduct_subcategory]=useState([]);
    const [cartData, setCartData]=useState([]);
    const [alternative_Product,setAlternative_Product]=useState([]);
    const[ cartSimilar_Product,setCartSimilar_Product]=useState([]);
    var list=[];
    const [slide_product,setSlide_product]=useState([]);
    const updateLocation={
      lat:26.1109803,
      lng:50.5156726
    }
    // const [cart_suggestedData,setCart_SuggestedData]=useState([])

    const handleAddCart=(data)=>{

      // console.log("cart data", data)
      setModalShow(true);

      const product_ID = data.pro_id;

      modal_Param={
        shop_id: shopID,
        pro_id: product_ID,
        user_id:""
      }

      console.log("modal param",modal_Param)
      axios.post('https://ristsys.store/api/GetProductInfo', modal_Param)
      .then(response=>{
        console.log("cart data api",response.data.data.product)
        console.log("cart alternative product api",response.data.data.alternatives)
        setCartData(response.data.data.product);
        setSlide_product(response.data.data);
        // setAlternative_Product(response.data.data.alternatives);
        // setCartSimilar_Product(response.data.data.related);
        list=[];
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
          list[index] = k;
        }
        setAlternative_Product(list);

        list=[];
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
          list[index] = n;
        }
        setCartSimilar_Product(list);
       
      })
      .catch(error=>
        console.log(error)
      )

     
    }

    /*    ======================== DISPLAY SIDEBAR SUB CATEGORIES ======================== */

    const displaySubCategory=(prod_cat)=>{

      let subcategory_arr=[]
     console.log("Product cat",prod_cat)
      product_Category_Param={
        shop_id: shopID,
        procat_id : prod_cat,
        page_no : 1,
        page_size: 30
      }

      axios.post('https://ristsys.store/api/GetShopProducts', product_Category_Param)
      .then(response=>{
        console.log("sidebar subcat api",response.data.subs);

        setProduct_subcategory(response.data.subs);
        
     
      })

      .catch(error=>{
        console.log(error)
      })
    } 

  const [shops, setShops] = useState([]);
  
  const { t, i18n } = useTranslation();

    useEffect(()=>{

    let language = localStorage.getItem("language");

    // console.log("LANGUAGE SELECTED", language);
  
    if (language && language.length !== 0) {
      i18n.changeLanguage(language)
    }
      
    axios.post('https://ristsys.store/api/homeContentWeb',updateLocation)
    .then(response=>{


      const shop_list_length = (response.data.data.shops).length;
      for(let i=0;i<shop_list_length;i++){
     
          if(response.data.data.shops[i].shop_id == Params.shop_id){
            
            setShops(response.data.data.shops[i]);
          }
      }
      console.log("shop response",shops)
   
    })
    .catch(error=>{
      console.log(error);
    });

      axios.get('https://ristsys.store/api/GetBooklets',{ params: {shop_id: shopID}  })
      .then(response=>{

        setOffer(response.data.data);
      })
      .catch(error=>
        console.log(error)
      )

      axios.post('https://ristsys.store/api/shopPage', similarProduct_Param)
      .then(response=>{
        setSimilarProd(response.data.data.suggested_products);
        setCategory(response.data.data.category);
      })
      .catch(error=>
        console.log(error)
      )

      console.log("modal param",modal_Param)


    },[])


/*    ======================== SIDE CATEGORY BAR ======================== */

    const CategoryBar=()=>{
      return(
        <>
        <Nav defaultActiveKey="" className="flex-column pt-4">
        {category && category.length>0 && category.map((value,index)=>{
          return(
            <Nav.Link 
            className="side-bar-item"
           
             eventKey="/#" key={index}>
              <Image src={`${API_PREFIX_URL}${value.procat_img}`} />{value.name}{value.procat_id}
              <Link
                to={
                "/" +
                Params.shop_name +
                "/" +
                Params.shop_id +
                "/" +
                Params.cat_name+ 
                "/"+
                value.procat_id +
                "?subcat_name=" +
                value.name+
                "?sub_id=" +
                ""
              }
              style={{ textDecoration: "none" }}>
              <Accordion defaultActiveKey="0" onClick={()=>displaySubCategory(value.procat_id)}>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <Image src={`${API_PREFIX_URL}${value.procat_img}`} />{value.name}
                    </Accordion.Toggle>
                   
                  </Card.Header>
                  {/* <SubCategory/> */}
                </Card>
               </Accordion>
               </Link>
            </Nav.Link>
     
          );
        })}
        </Nav>
        
        </>
      );
    }

 /*    ======================== OFFERS ======================== */

    const Offers=()=>{
      return(
        <CardGroup>
        { offer.length===0 ? (<h4 className="ml-5">No Offers</h4>) : offer.map((value,index)=>(
          // return(
            <Link>
            <Card className="offer-item mr-4" key={index}>
              <div className="card-image-box">
                   <Card.Img variant="top" src={`${API_PREFIX_URL}${value.booklet_image}`} />
                   </div>
                   <Card.Text className="text-muted pl-2 mt-2">{value.booklet_title_en}</Card.Text>
                </Card>
            </Link>
          // );
        ))}
        </CardGroup>
      );
    }

 /*    ======================== SIMILAR PRODUCTS ======================== */
    let recentPrice=0.00;
    let prevPrice=0.00;
    const SimilarProducts=()=>{
      return(
        <Row className="justify-content-lg-between pl-4">
        {similarProd && similarProd.length>0 && similarProd.map((value,index)=>{

          if(value.pro_special_price==0.000){
             recentPrice = value.pro_price;
             prevPrice="";
          }
          else{
             recentPrice = value.pro_special_price;
             prevPrice= value.pro_price;
          }
          return(
            
      <Col key={index} sm={5} md={4} lg={2} xl={2} className="item similar-item">
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
              <button className="addcart_btn" onClick={() => handleAddCart(value)}><i className="fas fa-shopping-cart mr-2"></i> {t("explore.add-to-cart")}  </button>
        </Col>  

  
            
          );
        })}

        </Row>
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
          />
      <Row>
   
      <Col className="menu-icon" sm={1} xs={1}>
        <i className="fas fa-bars" onClick={expandMenu}></i>
      </Col>
      <Col sm={2} lg={2} className="sideNav subcategory-nav">
      
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
                        sub_cat.length==0? null : (
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
                            sub_cat.procat_name_en +
                            "/" +
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
          <CategoryBar/>
     </div>

       <Col xs={10} sm={10} lg={10} fluid>
       <TopBar />

       <Row>
       <Col xs={12} sm={12} lg={12} 
       className="explore-banner" 
       style={{
        background: `url( ${(shops.gallery!=null && shops.gallery.length > 0 ) ? API_PREFIX_URL+shops.gallery[0].gallery_image : ""})`
        }}>
          <Image src={`${API_PREFIX_URL}${shops.shop_img}`}></Image>
        </Col>
       </Row>

       <Row className="pl-4">
       <h2 className="explore-sub-title mb-4">{Params.shop_name}  {t("explore.offers")}</h2>
          <Col xs={12} sm={12} lg={12} >
           <Offers />
          </Col> 
       </Row>

       <Row className="pl-4">
         <h2 className="explore-sub-title mb-4">{t("explore.similar-products")}</h2>
       </Row>
        
        {/* <Row> */}
         
          <SimilarProducts/>

       {/* </Row>  */}
       </Col>
      </Row>
 </Container>

  <Footer className="mt-4"/>
  
  </React.Fragment>
        
  );
    
}


