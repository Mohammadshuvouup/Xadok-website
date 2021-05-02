import React,{useState,useEffect} from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Trans ,useTranslation} from 'react-i18next';
import '../css/openCart.css';


const API_PREFIX_URL=`https://deliveryxadok.s3.us-east-2.amazonaws.com/`;

const OpenCart = (props) => {
  const { t, i18n } = useTranslation();
   

  useEffect(() => {
    
    let language = localStorage.getItem("language");

    // console.log("LANGUAGE SELECTED", language);
  
    if (language && language.length !== 0) {
      i18n.changeLanguage(language)
    }

  },[]);

//     const [show, setShow]  = useState(false);
//     const [show1,setShow1] = useState(false);
//     const [show2,setShow2] = useState(false);
//     const [show3,setShow3] = useState(false);
//     const [show4,setShow4] = useState(false);
//     const [show5,setShow5] = useState(false);
//     const [show8,setShow8] = useState(false);
//     const [show9,setShow9] = useState(false);
//     const [show10,setShow10] = useState(false);
//     const [show111,setShow111] = useState(false);
//     const [show112,setShow112] = useState(false);
//     const [show113,setShow113] = useState(false);
//     const [show114,setShow114] = useState(false);
//     const [show115,setShow115] = useState(false);
//     const [show116,setShow116] = useState(false);
//     const [show117,setShow117] = useState(false);
//     const [show118,setShow118] = useState(false);
//     const [shownav,setShownav] = useState(false);

//     // --------delete-------------------
//   const [show6,setShow6] = useState(true);
//   const [show7,setShow7] = useState(true);
// // ----------------------



//   const handleClose1 = () => setShow1(false);
//   const handleShow1 = () => setShow1(true);

//   const handleClose2 = () => setShow2(false);
//   const handleShow2 = () => setShow2(true);

//   const handleClose3 = () => setShow3(false);
//   const handleShow3 = () => setShow3(true);

//   const handleClose4 = () => setShow4(false);
//   const handleShow4 = () => setShow4(true);

//   const handleClose5 = () => setShow5(false);
//   const handleShow5 = () => setShow5(true);

//   const handleClose8 = () => setShow8(false);
//   const handleShow8 = () => setShow8(true);

//   const handleClose9 = () => setShow9(false);
//   const handleShow9 = () => setShow9(true);

//   const handleClose10 = () => setShow10(false);
//   const handleShow10 = () => setShow10(true);
  
//   const handleClose111 = () => setShow111(false);
//   const handleShow111 = () => setShow111(true);

//   const handleClose112 = () => setShow112(false);
//   const handleShow112 = () => setShow112(true);

//   const handleClose113 = () => setShow113(false);
//   const handleShow113 = () => setShow113(true);

//   const handleClose114 = () => setShow114(false);
//   const handleShow114 = () => setShow114(true);

//   const handleClose115 = () => setShow115(false);
//   const handleShow115 = () => setShow115(true); 


//   const handleClose116 = () => setShow116(false);
//   const handleShow116 = () => setShow116(true);

//   const handleClose117 = () => setShow117(false);
//   const handleShow117 = () => setShow117(true);

//   const handleClose118 = () => setShow118(false);
//   const handleShow118 = () => setShow118(true);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
  


    const [num ,setNum] = useState(1);
    const plus = () => {
      setNum(num + 1);
    };
    const minus = () => {
      if(num > 0){
      setNum(num - 1);
      }
      else{
      }
    };

    const cart_items = JSON.parse(localStorage.getItem('xadokCartItems'));
    const cart_qty = (localStorage.getItem('cart_quantity'));
    const modal_cart_qty = (localStorage.getItem('modal_cart_quantity'));

    return(
      <div className="open-cart-modal">
    
            <Modal className="cart  art" style={{border:"none"}} show={props.show2} 
onHide={props.handleClose2}>
        <Modal.Header style={{border:"none"}} closeButton>
            <Modal.Title style={{ border: "none", fontWeight: "bold" }}>{t("openCart.My-cart")}
          <span>&nbsp;{`(${cart_qty} items)`}
            </span></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{border:"none"}}>
       
            <h6 style={{ color: "red", fontSize: "12px", fontWeight: "bold" }}>{t("openCart.DELIVER-TO")} </h6>
        <h6 className="post" onClick={props.handleShow} 
         style={{position:"relative",
         cursor: "pointer"}} >300 Post Street San Francisco, CA 
        <span style={{color:"silver",position:"absolute",right:"0",marginTop:"-2%"}}><i class="fas fa-chevron-right"></i></span></h6>

        <h3 className="mt-3 pt-4" 
         style={{paddingLeft:"21px",fontWeight:"bold"}}>{t("openCart.Items")}</h3>
        
              {cart_items && cart_items.length>0 && cart_items.map((value,index)=>{
              
              return(
                  <>
                  <div style={{marginTop:"8%",display:"flex",alignItems:"center",
          justifyContent:"space-between" ,

        width:"100%",height:"26vh",borderTop:"1px solid silver",
        borderBottom:"1px solid silver"}}>
          <div style={{width:"70px",height:"70px"}}>
            <img   className="item-img" src={value.img} style={{width:"100%",height:"100%"
          }}/>
          </div>
          <div>
              <h5  className="item"style={{marginTop:"-8%"}}>{value.pro_name}</h5>
          <h4 style={{marginTop:"10%",color:"silver"}}className="">{value.product_price}<span style={{fontSize:"12px"}}>
            BHD</span></h4>
          </div>
          <div>

          <Button onClick={plus} style={{background:"#F6F6F6",
       color:"gray",
       fontWeight:"bold",width:"40px",
       height:"40px",fontSize:"20px",
       textAlign:"center", display:"flex",alignItems:"center",
       border:"none",borderTopRightRadius:"12px",
       borderTopLeftRadius:"12px"}} >+</Button>
      <Button style={{border:"none",color:"black",marginTop:"9%",
     background:"white"}}>{value.pro_qua}</Button>
     {/* background:"white"}}>{modal_cart_qty>1 ? modal_cart_qty : value.pro_qua}</Button> */}
       <Button onClick={minus}  style={{background:"#F6F6F6",
       color:"gray",marginTop:"7%",
       fontWeight:"bold",width:"40px",
       height:"40px",fontSize:"25px",
       display:"flex",alignItems:"center",
       border:"none",borderBottomRightRadius:"12px",
       borderBottomLeftRadius:"12px",zIndex:"1"}} >-</Button>
          </div>
        </div>
        </>
    );
})}
      <h6   className="item-add"style={{fontSize:"20px",position:"absolute",
      left:"5%",paddingTop:"70px",color:"black"}
      }>{t("openCart.Add-more-items")}</h6>
        
        <div  className="item-addb"
style={{
display:"flex",alignItems:"center",marginTop:"29%",marginLeft:"7%",
justifyContent:""}}>
<Button style={{width:"90px",borderRadius:"8px",
border:"none",color:"black",color:"#223142",
background:"#F6F6F6",fontSize:"29px"}}>
  <i class="fas fa-motorcycle"></i></Button>
<div style={{marginLeft:"10%"}}>
              <h6 style={{fontWeight:"bold"}}>{t("openCart.Delivery")}</h6>
              <h6>$0</h6>
            </div>
          </div>
          <div 
style={{
display:"flex",alignItems:"center",
marginTop:"5%",marginLeft:"7%",width:"100%",
justifyContent:""}}>
<Button style={{width:"90px",borderRadius:"8px",
border:"none",color:"#223142",
background:"#F6F6F6",fontSize:"29px"}}>
 <i class="far fa-credit-card"></i></Button>
<div style={{paddingLeft:"40px"}}>
              <h6 style={{fontWeight:"bold",}}>{t("openCart.Promo-Code")}</h6>
              <h6>HXFWO</h6>
            </div>
            <Button className="item-plus" 
            onClick={props.handleShow114} style={{background:"#223142",
            border:"none",marginLeft:"30%",
            height:"50px",width:"50px",fontSize:"25px"}} ><i class="fas fa-plus"></i></Button>
          </div>
        </Modal.Body>
        <Modal.Footer 
        style={{border:"none",}}>
           <Button className="p-3"  onClick={props.handleShow4} 
            style={{
           background:"#223142",border:"none",borderRadius:"7px",width:"91%"}} size="lg" block>
    {t("openCart.Checkout")} <span style={{fontSize:"12px"}}>(0.835 BHD)</span>
  </Button>
        </Modal.Footer>
      </Modal>
      </div>

    );
}

export default OpenCart;