import React, {useState } from 'react';
import img6  from "../xadok/01.png"
import img from "../xadok/pexels-photo-102104.jpeg"
import master from "../xadok/master.png";
import img3 from "../xadok/abstract-blur-supermarket-interior.jpg"
import logo from "../logo/logo.svg";
import slider1 from "../xadok/Artboard 3-100dd.png"
import slider2 from "../xadok/Artboard 4-100dd.png"
import explore from "../logo/explore.svg"
import order from "../logo/orders.svg";
import fav from "../logo/favourites.svg";
import setting from "../logo/setting.svg";
import message from "../logo/messages.svg";
import delivery from "../topbar/delivery address.svg";
import deal from "../topbar/best deals.svg";
import botique from "../category/boutique.svg";
import elec from "../category/electronics.svg";
import restaurants from "../category/restaurants.svg";
import all from "../black/all.svg";
import sup from "../category/supermarket.svg";
import taxi from "../category/delivery taxi.svg";
import Footer from "../Components/footer"
import {Link} from 'react-router-dom';
import {Navbar,Row,Col,Nav,Container,Card,CardGroup,Badge,Toast,Button,Modal,Alert,Carousel,Accordion} from 'react-bootstrap'
import "../App.css";

export default function Sidebar() {
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
  const [shownav,setShownav] = useState(false);
  





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
  


    return (

        <>
{/* -----------------Cart modal 1---------------------- */}
<Modal className="cart  art" style={{border:"none",marginLeft:"63.9%",width:"510px",marginTop:"-2.5%",height:"110vh"}} show={show2} 
onHide={handleClose2}>
        <Modal.Header style={{border:"none"}} closeButton>
          <Modal.Title style={{border:"none",fontWeight:"bold",paddingLeft:"22px"}}>My cart 
          <span style={{fontSize:"18px",fontWeight:"normal"}}>&nbsp;(2 items)
            </span></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{border:"none"}}>
       
        <h6 style={{color:"red",fontSize:"12px",fontWeight:"bold",paddingLeft:"22px"}}>DELIVER TO </h6>
        <h6 className="post" onClick={handleShow} 
         style={{position:"relative",paddingLeft:"22px",
  cursor: "pointer"}} >300 Post Street San Francisco, CA 
        <span style={{color:"silver",position:"absolute",right:"0",marginTop:"-2%"}}><i class="fas fa-chevron-right"></i></span></h6>

        <h3 className="mt-3 pt-4" 
         style={{paddingLeft:"21px",fontWeight:"bold"}}>Items</h3>
        <div style={{marginTop:"8%",display:"flex",alignItems:"center",
          justifyContent:"space-between" ,

        width:"100%",height:"26vh",borderTop:"1px solid silver",
        borderBottom:"1px solid silver"}}>
          <div style={{width:"70px",height:"70px"}}
          ><img   className="item-img"src={img} style={{width:"100%",height:"100%"
          ,marginLeft:"40%"}}/></div>
          <div><h5  className="item"style={{marginTop:"-8%"}}>DIGESTIVE CHOCO 200 G</h5>
          <h4 style={{marginTop:"10%",color:"silver"}}className="">0.835 <span style={{fontSize:"12px"}}>
            BHD</span></h4>
          </div>
          <div>
            {/* <div>{
         num < 1 && (<Alert>this is alert</Alert>)
            }
</div> */}
          <Button onClick={plus} style={{background:"#F6F6F6",
       color:"gray",
       fontWeight:"bold",width:"40px",
       height:"40px",fontSize:"20px",
       textAlign:"center", display:"flex",alignItems:"center",
       border:"none",borderTopRightRadius:"12px",
       borderTopLeftRadius:"12px"}} >+</Button>
      <Button style={{border:"none",color:"black",marginTop:"9%",
     background:"white"}}>{num}</Button>
       <Button onClick={minus}  style={{background:"#F6F6F6",
       color:"gray",marginTop:"7%",
       fontWeight:"bold",width:"40px",
       height:"40px",fontSize:"25px",
       display:"flex",alignItems:"center",
       border:"none",borderBottomRightRadius:"12px",
       borderBottomLeftRadius:"12px",zIndex:"1"}} >-</Button>
          </div>
        </div>
      <h6   className="item-add"style={{fontSize:"20px",position:"absolute",
      left:"5%",paddingLeft:"22px",paddingTop:"70px",color:"black"}
      }>+ Add more items</h6>
        
        <div  className="item-addb"
style={{
display:"flex",alignItems:"center",marginTop:"29%",marginLeft:"7%",
justifyContent:""}}>
<Button style={{width:"90px",borderRadius:"8px",
border:"none",color:"black",color:"#223142",
background:"#F6F6F6",fontSize:"29px"}}>
  <i class="fas fa-motorcycle"></i></Button>
<div style={{marginLeft:"10%"}}>
              <h6 style={{fontWeight:"bold"}}>Delivery</h6>
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
              <h6 style={{fontWeight:"bold",}}>Promo code</h6>
              <h6>HXFWO</h6>
            </div>
            <Button className="item-plus" 
            onClick={handleShow114} style={{background:"#223142",
            border:"none",marginLeft:"30%",
            height:"50px",width:"50px",fontSize:"25px"}} ><i class="fas fa-plus"></i></Button>
          </div>
        </Modal.Body>
        <Modal.Footer 
        style={{border:"none",}}>
           <Button className="p-3"  onClick={handleShow4} 
            style={{
           background:"#223142",border:"none",borderRadius:"7px",width:"91%"}} size="lg" block>
    Checkout <span style={{fontSize:"12px"}}>(0.835 BHD)</span>
  </Button>
        </Modal.Footer>
      </Modal>
{/* ------------------------------------cart modal 1 end-------------------- */}


{/* ---------------------------------PROMO CODE--------------------------- */}

<Modal show={show114} className="promo locationsidee"
 style={{borderRadius:"30px ",marginTop:"9.8%",
     width:"350px",marginLeft:"28.7%",background:"transparent",border:"none"}} onHide={handleClose114} animation={false} >
       <Modal.Header style={{borderRadius:"1rem ",background:"transparent",border:"none"}} closeButton>
         <Modal.Title style={{border:"none",padding:"10px",fontWeight:"bold",paddingLeft:"13px"}}>Enter promo code</Modal.Title>
      
       </Modal.Header>

       <Modal.Body style={{border:"none"}}>
         <h1 style={{textAlign:"center",fontSize:"20px"}} ></h1>
         <Button  style={{marginLeft:"4%",background:"#F6F6F6",fontWeight:"bold",border:"none",borderRadius:"8px",color:"#E3424B",width:"90%"}} size="lg" block>
         HXFWO
  </Button>
       </Modal.Body>

       <Modal.Footer style={{border:"none",marginLeft:"-4%",width:"100%"}}>
    <Button onClick={handleClose114} style={{background:"#223142",border:"none",borderRadius:"8px",width:"90%"}} size="lg" block>
    Confirm
  </Button>
       </Modal.Footer>
     </Modal>
        <>

        {/* ---------------------CHECKOUT PROMO------------------ */}
        <Modal className="your"  show={show116} style={{borderRadius:"30px ",marginTop:"9.8%",
     width:"410px",marginLeft:"28.7%",background:"transparent",border:"none"}} onHide={handleClose116} animation={false} >
       <Modal.Header style={{borderRadius:"1rem ",background:"transparent",border:"none"}} closeButton>
        <img src={logo} style={{width:"90px",height:"60px",marginLeft:"37%",marginTop:"20px",padding:"5px"}}/>
       </Modal.Header>

       <Modal.Body style={{border:"none"}}>
         <p style={{textAlign:"center",fontSize:"20px",
         marginTop:"-20px",fontSize:"18px",padding:"10px"}} 
         >your order has been confirmed,<br></br>Thankyou for choosing us.</p>
    
       </Modal.Body>

       <Modal.Footer style={{border:"none",marginLeft:"-4%",width:"100%"}}>

       </Modal.Footer>
     </Modal>
           
   <>
{/* ------------------------- cart  2 ------------------------- */}
<Modal className="cart" style={{border:"none",marginLeft:"63.9%",width:"510px",marginTop:"-2.5%",height:"110vh"}}
show={show4} 
onHide={handleClose4}>
        <Modal.Header style={{border:"none"}} closeButton>
        <Modal.Title style={{border:"none",paddingLeft:"22px",fontWeight:"bold"}}>Checkout</Modal.Title>
    
        </Modal.Header>
        <Modal.Body style={{border:"none"}}>
          <h4 style={{paddingLeft:"22px",paddingTop:"14px",fontWeight:"bold"}}>Delivery Address</h4>
        <h6 style={{color:"red",fontSize:"12px",paddingLeft:"22px",paddingTop:"12px"}}>DELIVER TO </h6>
        <h6 className="post" onClick={handleShow}  style={{position:"relative",paddingLeft:"22px",
  cursor: "pointer"}} >300 Post Street San Francisco, CA 
        <span style={{color:"silver",position:"absolute",right:"5%",marginTop:"-2%",}}><i class="fas fa-chevron-right"></i></span></h6>
        <h4 className="checkoutde"style={{paddingLeft:"22px",fontWeight:"",paddingTop:"45px"}}>Delivery Time</h4>
      <div onClick={handleShow115} style={{marginTop:"7%",marginLeft:"4%",width:"90%",cursor:"pointer",
      height:"9vh",alignItems:"center",justifyContent:"space-evenly",borderRadius:"8px",background:"#F6F6F6",display:"flex"}}>
        <h5 className="fifteen" style={{marginLeft:"-10%"}}>15</h5>
        <h5 style={{marginLeft:"8%"}} >December</h5>
        <h5  style={{paddingLeft:"5%"}} >2020</h5>
      </div>
        <div onClick={handleShow117} style={{width:"90%",height:"8vh",background:"#F6F6F6",marginTop:"3%",marginLeft:"4%",
        border:"none",display:"flex",justifyContent:"space-between",
        borderRadius:"8px"}}>
          <h6 className="schedule" style={{paddingTop:"4%",paddingLeft:"8%"}}>Schedule Delivery </h6>
          <i class="fas fa-chevron-down schedulei" 
          style={{color:"silver",marginRight:"4%",marginTop:"4%"}}>
          </i>
        </div>

        <h4 className="payment" style={{paddingLeft:"22px",
        paddingTop:"74px"}}>Payment methods </h4>
        <Button className="p-3 text-start ml-3" style={{marginTop:"7%",
        display:"flex",width:"90%",background:"#E3424B",border:"none",borderRadius:"10px",
       alignItems:"center",fontWeight:"normal"}}> &nbsp; &nbsp;&nbsp;&nbsp;
        <i style={{fontSize:"27px"}}class="fas fa-money-bill-alt"></i> &nbsp; &nbsp;&nbsp; Cash on delivery
        </Button>
      
        <Button className="p-3 text-start ml-3" style={{marginTop:"2.5%",
        display:"flex",width:"90%",background:"#e6e3e3",border:"none",borderRadius:"10px",
       alignItems:"center",color:"black" ,fontWeight:"normal"}}>&nbsp; &nbsp;&nbsp;&nbsp;
       <i style={{fontSize:"27px"}} class="fas fa-id-card"></i>&nbsp; &nbsp; &nbsp;Benefit pay
        </Button>

        <Button className="p-3 text-start ml-3" style={{marginTop:"2.5%",
        display:"flex",width:"90%",background:"#e6e3e3",border:"none",borderRadius:"10px",
       alignItems:"center",color:"black" ,fontWeight:"normal"}}> &nbsp; &nbsp;&nbsp;&nbsp;
      <i style={{fontSize:"27px"}}  class="fas fa-id-card"></i> &nbsp; &nbsp;&nbsp; Card on delivery
        </Button>
         <h3 style={{marginTop:"13%",fontWeight:"bold",marginLeft:"5%"}}>  My Cart 
          <span style={{fontSize:"14px",}}> &nbsp;  (2)
            </span>
            </h3> 
           <div  
           style={{marginTop:"7%",display:"flex",
           justifyContent:"space-evenly",width:"90%",
           marginLeft:"3.8%"}}>
          <Button  style=
          {{border:"none",color:"black",borderRadius:"12px",fontSize:"30px",width:"60px",marginTop:"12%",height:"10vh",background:"#e6e3e3"}}><i class="fas fa-plus"></i></Button>
          <img className="mastercard" src={master} 
          style={{width:"155px",height:"200px",borderRadius:"12px"}}/>
          < div className="mastercard"  style={{backgroundImage:`url(${master})`,
          width:"155px",height:"200px",borderRadius:"12px",
          backgroundSize:"100% 100%"}}>
            <div style={{width:"100%",height:"100%",background:"white",opacity:"0.5"}}></div>
          </div>
           </div>
        
<h4 style={{fontWeight:"bold",marginLeft:"5%",marginTop:"9%",border:"none"}}>Notes</h4>
<input  type="text" placeholder="Examples don't ring the best" className="not-input" 
style={{outline:"none",border:"none",color:"whitesmoke",marginLeft:"5%",width:"90%",marginTop:"4%",
height:"8vh",background:"#F6F6F6",borderRadius:"10px"}} />

        </Modal.Body>
    
           <Button className="p-3 mt-1"  onClick={handleShow116} 
            style={{
           background:"#223142",border:"none",borderRadius:"7px",width:"83%",marginLeft:"8%"}} size="lg" block>
    Checkout <span style={{fontSize:"12px"}}>(0.835 BHD)</span>
  </Button>
<Modal.Footer style={{color:"white",border:"none"}}>n nf mv</Modal.Footer>
      </Modal>



                    {/* -----------------------SELECT DATE------------------------ */}

     <Modal  show={show115} className="c selectdate"
      style={{borderRadius:"30px ",marginTop:"5.2%", 
      width:"370px",marginLeft:"33.7%",background:"transparent",border:"none"}} onHide={handleClose115} animation={false} >
       <Modal.Header style={{borderRadius:"1rem ",background:"transparent",border:"none"}} closeButton>
         <Modal.Title style={{border:"none",padding:"10px",fontWeight:"bold",paddingLeft:"13px"}}>Select Date</Modal.Title>
       </Modal.Header>
       <Modal.Body style={{border:"none",marginTop:"-30px",padding:"5px"}}>
       <div class="grid-container">
  <div class="grid-item">13</div>
  <div class="grid-item size">June</div>
  <div class="grid-item bgd">2020</div>  
  <div class="grid-item">14</div>
  <div class="grid-item size">July</div>
  <div class="grid-item">2021</div> 
  <div class="grid-item sized">15</div>
  <div class="grid-item size">August</div>
  <div class="grid-item">2022</div>  
  <div class="grid-item">16</div>
  <div class="grid-item size">September</div>
  <div class="grid-item">2023</div>  
  <div class="grid-item">17</div>  
  <div class="grid-item size">October</div>
  <div class="grid-item">2024</div>
  <div class="grid-item">18</div>
  <div class="grid-item size">November</div>
  <div class="grid-item">2025</div> 
  <div class="grid-item">18</div>
  <div class="grid-item size bgd">December</div>
  <div class="grid-item">2026</div> 
</div>
       </Modal.Body>

     </Modal>


     <Modal show={show117} className="c selectdate" style={{borderRadius:"30px ",marginTop:"5.5%",
     width:"370px",marginLeft:"33.7%",background:"transparent",border:"none"}} onHide={handleClose117} animation={false} >
       <Modal.Header style={{borderRadius:"1rem ",background:"transparent",border:"none"}} closeButton>
         <Modal.Title style={{border:"none",padding:"10px",fontWeight:"bold",paddingLeft:"13px"}}>Select Date</Modal.Title>
       </Modal.Header>
       <Modal.Body style={{border:"none",marginTop:"-30px"}}>
       <div class="grid-container2">
  <div class="grid-items">Fast Delivery</div>
  <div class="grid-items ">1.000 BHD</div>
  <div class="grid-items ">12:00 PM-02:00 PM</div>  
  <div class="grid-items">0.600 BHD</div>
  <div class="grid-items ">02:00 PM-04:00 PM</div>
  <div class="grid-items">0.600 BHD</div>
  <div class="grid-items">04:00 PM-06:00 PM</div> 
  <div class="grid-items">0.600 BHD</div>
  <div class="grid-items">06:00 PM-8:00 PM</div>  
  <div class="grid-items">0.600 BHD</div>
  <div class="grid-items ">08:00 PM-10:00 PM</div>
  <div class="grid-items">0.600 BHD</div> 
  <div class="grid-items">10:00 PM -12:00 PM</div>  
  <div class="grid-items">0.600 BHD</div>

  
</div>
       </Modal.Body>

     </Modal>


      {/* ------------------------------- cart 2 end ------------------ */}
</>

        {/* ------------------------ user --------------------------- */}
        <Modal className="welcome" style={{border:"none",width:"420px",
        height:"150vh",marginLeft:"69%",marginTop:"-2.3%"}} 
        show={show1} onHide={handleClose1}>
        <Modal.Header style={{border:"none", outline:"none"}} closeButton>
          <Modal.Title className="mt-3" style={{border:"none",fontSize:"30px",paddingLeft:"25.5px"}}>Welcome!</Modal.Title>
        </Modal.Header>
        <p className="pl-4 ml-3" style={{color:"silver",fontSize:"12px"}}>Sign in to your account to continue</p>

        <Modal.Body style={{border:"none"}}>
        <div className="mt-2 ml-4" style={{display:"flex",height:"50px",width:"90%",}}>
          <Button className="p-3" style={{borderRadius:"10px",
          border:"none",background:"#F6F6F6",color:"black"}}>
            <i class="far fa-envelope" style={{fontSize:"19px"}}>
            </i></Button>
          <div className="ml-3"><h6 style={{fontSize:"11px",fontWeight:"bold",marginLeft:"2%"}}>EMAIL ADDRESS</h6>
          <p style={{fontWeight:"10px",color:"silver"}}>markclarke@gmail.com</p>
          <hr style={{width:"150%"}}></hr>
          </div>
        
        </div>
        <div className="ml-4" style={{display:"flex",height:"50px",marginTop:"13%"}}>
          <Button className="p-3" style={{borderRadius:"10px",border:"none",background:"#F6F6F6",color:"black"}}>
          <i class="fas fa-key" style={{fontSize:"19px"}}></i></Button>
          <div className="ml-3"><h6 style={{fontSize:"11px",fontWeight:"bold",
          marginLeft:"2%"}}>PASWORD</h6>
          <p style={{fontWeight:"10px",color:"silver"}}>******</p>
          <hr style={{width:"400%"}}></hr>
          </div>
        </div>
        </Modal.Body>
        <Modal.Footer className="mt-4" style={{border:"none"}}>
        <Button  onClick={handleShow5}  className="p-3" style={{background:"#E3424B",border:"none",
        borderRadius:"7px",width:"82%",marginRight:"10%"}}  block>
    Sign in
  </Button>
  <h6 onClick={handleShow118} style={{fontSize:"14px",position:"absolute",left:"35%",
  textAlign:"center",marginTop:"-26%",cursor:"pointer"}}>Forgot password? </h6>
  <Button onClick={handleShow3}  className="p-3"  style={{marginTop:"18%",
  background:"gray",border:"none",borderRadius:"7px",width:"82%",marginRight:"10%"}}  block>
    Create an account
  </Button>
  <Button c  style={{marginTop:"18%",background:"transparent",border:"none",borderRadius:"7px"}} size="lg" block>
    Create an account
  </Button>


        </Modal.Footer>
      </Modal>
        
        
        {/* ------------------- User end-------------------- */}
        </>

           <>
     
{/* ------------------------location  ---------------------- */}
<Modal show={show} className="c locationside" style={{borderRadius:"30px ",marginTop:"0.5%",
     width:"390px",marginLeft:"32%",background:"transparent",border:"none"}} onHide={handleClose} animation={false} >
       <Modal.Header style={{borderRadius:"1rem ",background:"transparent",border:"none"}} closeButton>
         <Modal.Title style={{border:"none",padding:"10px"}}>Delivery address</Modal.Title>
       </Modal.Header>
       <Modal.Body style={{border:"none"}}>
         <div className="p-2 pb-3 ml-2" style={{background:"#FFDD72",borderRadius:"10px", justifyContent:"space-between"
         ,width:"95%",display:"flex"}}>
           <div><h6 className="pl-2">Current Location</h6>
           <p className="pl-2" style={{fontSize:"15px",marginTop:"-1%"}}>2919 Avenue 29,Jurdab,Bahrain</p>
           </div>
           <div style={{display:"flex",flexDirection:"column"}}>
             <button  onClick={handleShow8}  style={{borderRadius:"5px",width:"30px",height:"32px",border:"none",marginLeft:"-20%",
             background:"#E3424B",fontSize:"14px",color:"white"}}><i class="far fa-edit"></i></button>
             <button style={{marginTop:"15%",marginLeft:"-20%",borderRadius:"5px",width:"30px",height:"32px",border:"none",
             background:"#E3424B",fontSize:"12px",color:"white"}}><i class="fas fa-redo"></i></button>

           </div>
         </div>
         <div>
           {
             show6?  <div onClick={handleShow9} className="p-2 mt-2 ml-2" style={{background:"#F6F6F6",borderRadius:"10px", justifyContent:"space-between"
         ,width:"95%",display:"flex",height:"90px"}}>
           <div><h6 className="pl-2">Home</h6>
           <p className="pl-2" style={{fontSize:"15px",marginTop:"-2%"}}>Sn Francisco CA 94103 <br></br>94103</p>
           </div>
           <div style={{display:"flex",flexDirection:"column"}}>
             <button style={{borderRadius:"5px",width:"30px",marginLeft:"-20%",height:"32px",border:"none",
             background:"silver",fontSize:"14px",color:"white"}}><i class="far fa-edit"></i></button>
             <button onClick={() => setShow6(false)} style={{marginTop:"15%",borderRadius:"5px",width:"30px",marginLeft:"-20%",height:"32px",border:"none",
             background:"silver",fontSize:"12px",color:"white"}}><i class="fas fa-trash"></i></button>
</div>
           </div>:null
}
         </div>
         <div>{
       show7?  <div onClick={handleShow111}className="p-2 mt-2 ml-2" style={{height:"90px",background:"#F6F6F6",borderRadius:"10px", justifyContent:"space-between"
         ,width:"95%",display:"flex"}}>
           <div><h6 className="pl-2">Office</h6>
           <p className="pl-2" style={{fontSize:"15px",marginTop:"-2%"}}>Sn Francisco CA 94103 <br></br>94103</p>
           </div>
           <div style={{display:"flex",flexDirection:"column"}}>
             <button style={{borderRadius:"5px",width:"30px",marginLeft:"-20%",height:"32px",border:"none",
             background:"silver",fontSize:"14px",color:"white"}}><i class="far fa-edit"></i></button>
             <button  onClick={() => setShow7(false)} style={{marginTop:"15%",borderRadius:"5px",marginLeft:"-20%",width:"30px",height:"32px",border:"none",
             background:"silver",fontSize:"12px",color:"white"}}><i class="fas fa-trash"></i></button>

           </div>
         </div>:null
         }
         </div>
       </Modal.Body>
       <h6 onClick={handleShow112} className="pl-4 ml-2" style={{fontWeight:"bold",cursor:"pointer"}}>+Add new addresses</h6>

       <Modal.Footer style={{border:"none",marginLeft:"-4%",width:"100%"}}>
    <Button onClick={handleClose} style={{background:"#223142",border:"none",borderRadius:"7px",width:"90%"}} size="lg" block>
    Confirm
  </Button>
       </Modal.Footer>
     </Modal>
{/* --------------------Home loction---------------------- */}
<Modal show={show9} className="c locationside" style={{borderRadius:"30px ",marginTop:"0.5%",
     width:"390px",marginLeft:"32%",background:"transparent",border:"none"}} onHide={handleClose9} animation={false} >
       <Modal.Header style={{borderRadius:"1rem ",background:"transparent",border:"none"}} closeButton>
         <Modal.Title style={{border:"none",padding:"10px"}}>Delivery address</Modal.Title>
       </Modal.Header>
       <Modal.Body style={{border:"none"}}>
         <div onClick={handleClose9}className="p-2 pb-3 ml-2" style={{background:"#F6F6F6",borderRadius:"10px", justifyContent:"space-between"
         ,width:"95%",display:"flex"}}>
           <div><h6 className="pl-2">Current Location</h6>
           <p className="pl-2" style={{fontSize:"15px",marginTop:"-1%"}}>2919 Avenue 29,Jurdab,Bahrain</p>
           </div>
           <div style={{display:"flex",flexDirection:"column"}}>
             <button  onClick={handleShow8}  style={{borderRadius:"5px",width:"30px",height:"32px",
             border:"none",marginLeft:"-20%",
             background:"silver",fontSize:"14px",color:"white"}}><i class="far fa-edit"></i></button>
             <button style={{marginTop:"15%",marginLeft:"-20%",borderRadius:"5px",width:"30px",height:"32px",border:"none",
             background:"silver",fontSize:"12px",color:"white"}}><i class="fas fa-redo"></i></button>

           </div>
         </div>
         <div>
           {
             show6?  <div className="p-2 mt-2 ml-2" style={{background:"#FFDD72",borderRadius:"10px", justifyContent:"space-between"
         ,width:"95%",display:"flex",height:"90px"}}>
           <div><h6 className="pl-2">Home</h6>
           <p className="pl-2" style={{fontSize:"15px",marginTop:"-2%"}}>Sn Francisco CA 94103 <br></br>94103</p>
           </div>
           <div style={{display:"flex",flexDirection:"column"}}>
             <button onClick={handleShow10} style={{borderRadius:"5px",width:"30px",marginLeft:"-20%",height:"32px",border:"none",
             background:"#E3424B",fontSize:"14px",color:"white"}}><i class="far fa-edit"></i></button>
             <button onClick={() => setShow6(false)} style={{marginTop:"15%",borderRadius:"5px",width:"30px",marginLeft:"-20%",height:"32px",border:"none",
             background:"#E3424B",fontSize:"12px",color:"white"}}><i class="fas fa-trash"></i></button>
</div>
           </div>:null
}
         </div>
         <div>{
       show7?  <div onClick={handleShow111} className="p-2 mt-2 ml-2" style={{height:"90px",background:"#F6F6F6",borderRadius:"10px", justifyContent:"space-between"
         ,width:"95%",display:"flex"}}>
           <div><h6 className="pl-2">Office</h6>
           <p className="pl-2" style={{fontSize:"15px",marginTop:"-2%"}}>Sn Francisco CA 94103 <br></br>94103</p>
           </div>
           <div style={{display:"flex",flexDirection:"column"}}>
             <button style={{borderRadius:"5px",width:"30px",marginLeft:"-20%",height:"32px",border:"none",
             background:"silver",fontSize:"14px",color:"white"}}><i class="far fa-edit"></i></button>
             <button  onClick={() => setShow7(false)} style={{marginTop:"15%",borderRadius:"5px",marginLeft:"-20%",width:"30px",height:"32px",border:"none",
             background:"silver",fontSize:"12px",color:"white"}}><i class="fas fa-trash"></i></button>

           </div>
         </div>:null
         }
         </div>
       </Modal.Body>
       <h6 onClick={handleShow112}  className="pl-4 ml-2" style={{fontWeight:"bold",cursor:"pointer"}}>+Add new addresses</h6>

       <Modal.Footer style={{border:"none",marginLeft:"-4%",width:"100%"}}>
    <Button onClick={handleClose9} style={{background:"#223142",border:"none",borderRadius:"7px",width:"90%"}} size="lg" block>
    Confirm
  </Button>
       </Modal.Footer>


     </Modal>
     {/* -----------------------Office location-------------------------- */}


     <Modal show={show111} className="c locationside" style={{borderRadius:"30px ",marginTop:"0.5%",
     width:"390px",marginLeft:"32%",background:"transparent",border:"none"}} onHide={handleClose111} animation={false} >
       <Modal.Header style={{borderRadius:"1rem ",background:"transparent",border:"none"}} closeButton>
         <Modal.Title style={{border:"none",padding:"10px"}}>Delivery address</Modal.Title>
       </Modal.Header>
       <Modal.Body style={{border:"none"}}>
         <div onClick={handleShow}className="p-2 pb-3 ml-2" style={{background:"#F6F6F6",borderRadius:"10px", justifyContent:"space-between"
         ,width:"95%",display:"flex"}}>
           <div><h6 className="pl-2">Current Location</h6>
           <p className="pl-2" style={{fontSize:"15px",marginTop:"-1%"}}>2919 Avenue 29,Jurdab,Bahrain</p>
           </div>
           <div style={{display:"flex",flexDirection:"column"}}>
             <button  onClick={handleShow8}  style={{borderRadius:"5px",width:"30px",height:"32px",
             border:"none",marginLeft:"-20%",
             background:"silver",fontSize:"14px",color:"white"}}><i class="far fa-edit"></i></button>
             <button style={{marginTop:"15%",marginLeft:"-20%",borderRadius:"5px",width:"30px",height:"32px",border:"none",
             background:"silver",fontSize:"12px",color:"white"}}><i class="fas fa-redo"></i></button>

           </div>
         </div>
         <div>
           {
             show6?  <div  onClick={handleShow9} className="p-2 mt-2 ml-2" style={{background:"#F6F6F6",borderRadius:"10px", justifyContent:"space-between"
         ,width:"95%",display:"flex",height:"90px"}}>
           <div><h6 className="pl-2">Home</h6>
           <p className="pl-2" style={{fontSize:"15px",marginTop:"-2%"}}>Sn Francisco CA 94103 <br></br>94103</p>
           </div>
           <div style={{display:"flex",flexDirection:"column"}}>
             <button  style={{borderRadius:"5px",width:"30px",marginLeft:"-20%",height:"32px",border:"none",
             background:"silver",fontSize:"14px",color:"white"}}><i class="far fa-edit"></i></button>
             <button onClick={() => setShow6(false)} style={{marginTop:"15%",borderRadius:"5px",width:"30px",marginLeft:"-20%",height:"32px",border:"none",
             background:"silver",fontSize:"12px",color:"white"}}><i class="fas fa-trash"></i></button>
</div>
           </div>:null
}
         </div>
         <div>{
       show7?  <div className="p-2 mt-2 ml-2"  style={{height:"90px",background:"#FFDD72",borderRadius:"10px", justifyContent:"space-between"
         ,width:"95%",display:"flex"}}>
           <div><h6 className="pl-2">Office</h6>
           <p className="pl-2" style={{fontSize:"15px",marginTop:"-2%"}}>Sn Francisco CA 94103 <br></br>94103</p>
           </div>
           <div style={{display:"flex",flexDirection:"column"}}>
             <button onClick={handleShow10} style={{borderRadius:"5px",width:"30px",marginLeft:"-20%",height:"32px",border:"none",
             background:"#E3424B",fontSize:"14px",color:"white"}}><i class="far fa-edit"></i></button>
             <button  onClick={() => setShow7(false)} style={{marginTop:"15%",borderRadius:"5px",marginLeft:"-20%",width:"30px",height:"32px",border:"none",
             background:"#E3424B",fontSize:"12px",color:"white"}}><i class="fas fa-trash"></i></button>

           </div>
         </div>:null
         }
         </div>
       </Modal.Body>
       <h6  onClick={handleShow112}  className="pl-4 ml-2" style={{fontWeight:"bold",cursor:"pointer"}}>+Add new addresses</h6>

       <Modal.Footer style={{border:"none",marginLeft:"-4%",width:"100%"}}>
    <Button onClick={handleClose111} style={{background:"#223142",border:"none",borderRadius:"7px",width:"90%"}} size="lg" block>
    Confirm
  </Button>
       </Modal.Footer>


     </Modal>
     {/* -------------------------------edit location--------------------------- */}
 
     <Modal show={show10} id="edit-address" className="locationside" style={{marginTop:"0.5%",
     width:"390px",marginLeft:"32%",background:"transparent",border:"none"}} onHide={handleClose10} animation={false} >
       <Modal.Header style={{background:"transparent",border:"none"}} closeButton>
         <Modal.Title style={{border:"none",padding:"12px"}}>Edit Address</Modal.Title>
      
       </Modal.Header>
       <p style={{marginTop:"-28px",marginLeft:"30px",color:"silver"}}>Edit location on the map</p>

       <Modal.Body style={{border:"none"}}>
       <Accordion defaultActiveKey="0" >
      <Accordion.Toggle variant="link" eventKey="0"
       style={{ outline:"none",border:"none",textAlign:"start",
       background:"none",width:"98%"}}>
         <div>
           <h6 style={{fontSize:"10px",marginLeft:"13px",fontWeight:"bold"}}>TYPE</h6>
           <div style={{paddingLeft:"13px",display:"flex",justifyContent:"space-between",}}>
           <p className="text-muted" style={{color:""}}>Select address type</p>
           <i class="fas fa-chevron-right text-muted"></i>
           </div>
           <hr style={{width:"98%",marginTop:"-9px",marginLeft:"10px"}}></hr>
         </div>
      </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body className="ml-3" style={{marginTop:"-25px"}}>
        <h6 style={{fontWeight:"normal"}} className="" >Flat</h6>
        <h6 style={{fontWeight:"normal"}} className="mt-3">Villa</h6>
        <h6 style={{fontWeight:"normal"}} className="mt-3">Showroom</h6>
        <h6 style={{fontWeight:"normal"}} className="mt-3">Office</h6>
        <h6 style={{fontWeight:"normal"}} className="mt-3">Compounds</h6>
      </Card.Body>
    </Accordion.Collapse >
      <Accordion.Toggle as={Button} variant="link" 
      eventKey="1" style={{
        textDecoration:"none",textAlign:"start",
        outline:"none",border:"none",width:"98%",marginTop:"-5px"}}>
<div>
  <h6 style={{color:"black",fontSize:"10px",marginLeft:"9px",fontWeight:"bold"}}>BLOCK NUMBER</h6>
           <div style={{paddingLeft:"9px",display:"flex",justifyContent:"space-between",}}>
           <p  style={{color:"black"}}>960</p>
           <i style={{color:"white"}} class="fas fa-chevron-right"></i>

           </div>
         <hr style={{width:"98%",marginTop:"-9px",marginLeft:"8px"}}></hr>
         </div>
 </Accordion.Toggle>     
</Accordion>
<div style={{width:"98%"}}>
  <h6 style={{color:"black",fontSize:"10px",marginLeft:"19px",fontWeight:"bold"}}>BLOCK NUMBER</h6>
           <div style={{paddingLeft:"19px",display:"flex",justifyContent:"space-between",}}>
           <p  style={{color:"black"}}>960</p>
           <i style={{color:"white"}} class="fas fa-chevron-right"></i>
           </div>
         <hr style={{width:"90%",marginTop:"-9px",marginLeft:"20px"}}></hr>
         </div>
         <div style={{width:"98%"}}>
  <h6 style={{color:"black",fontSize:"10px",marginLeft:"19px",fontWeight:"bold"}}>ROAD NUMBER</h6>
           <div style={{paddingLeft:"19px",display:"flex",justifyContent:"space-between",}}>
           <p  style={{color:"black"}}>2929</p>
           <i style={{color:"white"}} class="fas fa-chevron-right"></i>
           </div>
         <hr style={{width:"90%",marginTop:"-9px",marginLeft:"20px"}}></hr>
         </div>
         <div style={{width:"98%"}}>
  <h6 style={{color:"black",fontSize:"10px",marginLeft:"19px",fontWeight:"bold"}}>BUILDING NUMBER</h6>
           <div style={{paddingLeft:"19px",display:"flex",justifyContent:"space-between",}}>
           <p  style={{color:"black"}}>960</p>
           <i style={{color:"white"}} class="fas fa-chevron-right"></i>
           </div>
         <hr style={{width:"90%",marginTop:"-9px",marginLeft:"20px"}}></hr>
         </div>

         <div style={{width:"98%"}}>
         <h6 style={{color:"black",fontSize:"10px",marginLeft:"19px",fontWeight:"bold"}}>FLAT NUMBER</h6>
         <div style={{paddingLeft:"19px",display:"flex",justifyContent:"space-between",}}>
         <p  style={{color:"black"}}>21</p>
         <i style={{color:"white"}} class="fas fa-chevron-right"></i>
         </div>
         <hr style={{width:"90%",marginTop:"-9px",marginLeft:"20px"}}></hr>
         </div>
         <div style={{width:"98%"}}>
         <h6 style={{color:"black",fontSize:"10px",marginLeft:"19px",fontWeight:"bold"}}>ADDRESS MARK</h6>
         <div style={{paddingLeft:"19px",display:"flex",justifyContent:"space-between",}}>
         <p  style={{color:"black"}}>21</p>
         <i style={{color:"white"}} class="fas fa-chevron-right"></i>
         </div>
         <hr style={{width:"90%",marginTop:"-9px",marginLeft:"20px"}}></hr>
         </div>
         <div  onClick={handleShow113} style={{width:"98%",cursor:"pointer"}}>
         <h6 style={{color:"black",fontSize:"10px",marginLeft:"19px",fontWeight:"bold"}}>STATE</h6>
         <div style={{paddingLeft:"19px",display:"flex",justifyContent:"space-between",}}>
         <p className="text-muted">Select State</p>
         <i  class="fas fa-chevron-right text-muted"></i>
         </div>
         <hr style={{width:"90%",marginTop:"-9px",marginLeft:"18px"}}></hr>
         </div>
       </Modal.Body>

       <Modal.Footer style={{border:"none",marginLeft:"-10px",width:"98%"}}>
         <Button onClick={handleClose10}style={{width:"90%",marginTop:"-19px",
         height:"9vh",border:"none",borderRadius:"7px",marginLeft:"-15px",
         background:"#223142"}}>Confirm</Button>
 
       </Modal.Footer>
     </Modal>

     <Modal show={show112} id="edit-address" className="locationside" style={{marginTop:"0.5%",
     width:"390px",marginLeft:"32%",background:"transparent",border:"none"}} onHide={handleClose112} animation={false} >
       <Modal.Header style={{background:"transparent",border:"none"}} closeButton>
         <Modal.Title style={{border:"none",padding:"12px"}}>New Address</Modal.Title>
      
       </Modal.Header>
       <p style={{marginTop:"-28px",marginLeft:"30px",color:"silver"}}>Edit location on the map</p>

       <Modal.Body style={{border:"none"}}>
       <Accordion defaultActiveKey="0" >
      <Accordion.Toggle variant="link" eventKey="0"
       style={{ outline:"none",border:"none",textAlign:"start",
       background:"none",width:"98%"}}>
         <div>
           <h6 style={{fontSize:"10px",marginLeft:"13px",fontWeight:"bold"}}>TYPE</h6>
           <div style={{paddingLeft:"13px",display:"flex",justifyContent:"space-between",}}>
           <p className="text-muted" style={{color:""}}>Select address type</p>
           <i class="fas fa-chevron-right text-muted"></i>
           </div>
           <hr style={{width:"98%",marginTop:"-9px",marginLeft:"10px"}}></hr>
         </div>
      </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body className="ml-3" style={{marginTop:"-25px"}}>
        <h6 style={{fontWeight:"normal"}} className="" >Flat</h6>
        <h6 style={{fontWeight:"normal"}} className="mt-3">Villa</h6>
        <h6 style={{fontWeight:"normal"}} className="mt-3">Showroom</h6>
        <h6 style={{fontWeight:"normal"}} className="mt-3">Office</h6>
        <h6 style={{fontWeight:"normal"}} className="mt-3">Compounds</h6>
      </Card.Body>
    </Accordion.Collapse >
      <Accordion.Toggle as={Button} variant="link" 
      eventKey="1" style={{
        textDecoration:"none",textAlign:"start",
        outline:"none",border:"none",width:"98%",marginTop:"-5px"}}>
<div>
  <h6 style={{color:"black",fontSize:"10px",marginLeft:"9px",fontWeight:"bold"}}>BLOCK NUMBER</h6>
           <div style={{paddingLeft:"9px",display:"flex",justifyContent:"space-between",}}>
           <p  style={{color:"black"}}>0</p>
           <i style={{color:"white"}} class="fas fa-chevron-right"></i>

           </div>
         <hr style={{width:"98%",marginTop:"-9px",marginLeft:"8px"}}></hr>
         </div>
 </Accordion.Toggle>     
</Accordion>

         <div style={{width:"98%"}}>
  <h6 style={{color:"black",fontSize:"10px",marginLeft:"19px",fontWeight:"bold"}}>ROAD NUMBER</h6>
           <div style={{paddingLeft:"19px",display:"flex",justifyContent:"space-between",}}>
           <p  style={{color:"black"}}>0</p>
           <i style={{color:"white"}} class="fas fa-chevron-right"></i>
           </div>
         <hr style={{width:"90%",marginTop:"-9px",marginLeft:"20px"}}></hr>
         </div>
         <div style={{width:"98%"}}>
  <h6 style={{color:"black",fontSize:"10px",marginLeft:"19px",fontWeight:"bold"}}>BUILDING NUMBER</h6>
           <div style={{paddingLeft:"19px",display:"flex",justifyContent:"space-between",}}>
           <p  style={{color:"black"}}>0</p>
           <i style={{color:"white"}} class="fas fa-chevron-right"></i>
           </div>
         <hr style={{width:"90%",marginTop:"-9px",marginLeft:"20px"}}></hr>
         </div>

         <div style={{width:"98%"}}>
         <h6 style={{color:"black",fontSize:"10px",marginLeft:"19px",fontWeight:"bold"}}>FLAT NUMBER</h6>
         <div style={{paddingLeft:"19px",display:"flex",justifyContent:"space-between",}}>
         <p  style={{color:"black"}}>0</p>
         <i style={{color:"white"}} class="fas fa-chevron-right"></i>
         </div>
         <hr style={{width:"90%",marginTop:"-9px",marginLeft:"20px"}}></hr>
         </div>
         <div style={{width:"98%"}}>
         <h6 style={{color:"black",fontSize:"10px",marginLeft:"19px",fontWeight:"bold"}}>ADDRESS MARK</h6>
         <div style={{paddingLeft:"19px",display:"flex",justifyContent:"space-between",}}>
         <p  style={{color:"black"}}>0</p>
         <i style={{color:"white"}} class="fas fa-chevron-right"></i>
         </div>
         <hr style={{width:"90%",marginTop:"-9px",marginLeft:"20px"}}></hr>
         </div>
         <div  onClick={handleShow113} style={{width:"98%",cursor:"pointer"}}>
         <h6 style={{color:"black",fontSize:"10px",marginLeft:"19px",fontWeight:"bold"}}>STATE</h6>
         <div style={{paddingLeft:"19px",display:"flex",justifyContent:"space-between",}}>
         <p className="text-muted">Select State</p>
         <i  class="fas fa-chevron-right text-muted"></i>
         </div>
         <hr style={{width:"90%",marginTop:"-9px",marginLeft:"18px"}}></hr>
         </div>
       </Modal.Body>

       <Modal.Footer style={{border:"none",marginLeft:"-10px",width:"98%"}}>
         <Button onClick={handleClose112}style={{width:"90%",marginTop:"-19px",cursor:"pointer",
         height:"9vh",border:"none",borderRadius:"7px",marginLeft:"-15px",
         background:"#223142"}}>Confirm</Button>
 
       </Modal.Footer>
     </Modal>



{/* --------------------- location states---------------------- */}



     <Modal id="edit-address"className="locationside" show={show113} style={{marginTop:"0.5%",
     width:"390px",marginLeft:"32%",background:"transparent",border:"none"}}
      onHide={handleClose113} animation={false} >
       <Modal.Header style={{background:"transparent",border:"none"}} closeButton>
         <Modal.Title style={{border:"none",padding:"10px",fontWeight:"bold",fontSize:"25px",marginLeft:"10px"}}>State</Modal.Title>
       </Modal.Header>
       <Modal.Body style={{border:"none"}}>
       <div className="input2-container " style={{marginTop:"-30px",marginLeft:"10px"}} >
    <i class="fas fa-search icon"></i>
    <input type="text" className="input-field input-u" 
    placeholder="Search for state "   
    style={{fontSize:"14px",background:"#F6F6F6",border:"none",
    outline:"none",padding:"13px",
  boxSizing:"border-box"}}/>
    </div>
    <h6 className="mt-3 pl-4 ml-2">Abu Saiba</h6>
    <h6 className="mt-3 pl-4 ml-2">Adliya</h6>
    <h6 className="mt-3 pl-4 ml-2">Al Bahair</h6>
    <h6 className="mt-3 pl-4 ml-2">Al Burhana</h6>
    <h6 className="mt-3 pl-4 ml-2">Al Dur</h6>
    <h6 className="mt-3 pl-4 ml-2">Al Eker</h6>
    <h6 className="mt-3 pl-4 ml-2">Al Hajar</h6>
    <h6 className="mt-3 pl-4 ml-2">Al Hoora</h6>
    <h6 className="mt-3 pl-4 ml-2">Al Jasra</h6>
    <h6 className="mt-3 pl-4 ml-2">Al Lawazi</h6>
    <h6 className="mt-3 pl-4 ml-2">Al Markha</h6>
    <h6 className="mt-3 pl-4 ml-2">Al Musalia</h6>
    <h6 className="mt-3 pl-4 ml-2">Al Qadam</h6>
    <h6 className="mt-3 pl-4 ml-2">Al Sayh</h6>
    <h6 className="mt-3 pl-4 ml-2">Al Juffair</h6>
       </Modal.Body>
     </Modal>

{/* ------------------current location------------- */}
<Modal show={show8} className="c locationside" style={{borderRadius:"30px ",marginTop:"0.5%",
     width:"390px",marginLeft:"32%",background:"transparent",border:"none"}} onHide={handleClose8} animation={false} >
       <Modal.Header style={{borderRadius:"1rem ",background:"transparent",border:"none"}} closeButton>
         <Modal.Title style={{border:"none",padding:"10px"}}>Current Location</Modal.Title>
      
       </Modal.Header>
       <p style={{marginTop:"-28px",marginLeft:"30px",color:"silver"}}>See your loaction</p>

       <Modal.Body style={{border:"none"}}>
       </Modal.Body>
<div className="iframe" style={{width:"83%",height:"55vh",borderRadius:"14px",marginLeft:"30px",}}>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1781246.1031372054!2d46
.41430174210702!3d29.311784334646042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3
fc5363fbeea51a1%3A0x74726bcd92d8edd2!2sKuwait!5e0!3m2!1sen!2s!4v1611979046409!5m2!1sen!2s" 
 frameborder="0" style={{border:"0",width:"100%",height:"100%",borderRadius:"14px"}} allowfullscreen="" aria-hidden=
"false" tabindex="0"></iframe>
</div>
       <Modal.Footer style={{border:"none",marginLeft:"-4%",width:"100%"}}>
    <Button onClick={handleClose8} style={{background:"#223142",border:"none",borderRadius:"7px",width:"90%"}} size="lg" block>
    Confirm
  </Button>
       </Modal.Footer>
     </Modal>

    {/* ------------------------- location end ------------------------ */}
   </>
   <>
   {/* ----------------------- user 2-------------------------- */}
   <Modal className="welcome" style={{border:"none",width:"420px",
        height:"150vh",marginLeft:"69%",marginTop:"-2.3%"}} 
        show={show3} onHide={handleClose3}>
        <Modal.Header style={{border:"none", outline:"none"}} 
        closeButton>
          <Modal.Title className="mt-3 pl-4" style={{border:"none",fontSize:"33px"}}>Create an account!</Modal.Title>
        </Modal.Header>
        <p  className="pl-4 ml-4 createp" style={{color:"silver",
        fontSize:"13px"}}>
          Please create an account to continue using our service</p>

        <Modal.Body style={{border:"none"}}>
        <div className="mt-4 ml-4" style={{display:"flex",height:"50px",width:"100%",}}>
          <Button className="p-3" style={{borderRadius:"10px",
          border:"none",background:"#F6F6F6",color:"black"}}>
          <i class="far fa-user" style={{fontSize:"20px"}}></i></Button>
          <div className="ml-3"><h6 style={{fontSize:"11px",fontWeight:"bold",marginLeft:"2%",width:"100%"}}>FULL NAME</h6>
          <p style={{fontWeight:"10px",color:"silver"}}>Talal</p>
          <hr style={{width:"300%"}}></hr>
          </div>
        
        </div>
          <div className=" ml-4" style={{marginTop:"10%",display:"flex",height:"50px",width:"100%",}}>
          <Button className="p-3" style={{borderRadius:"10px",
          border:"none",background:"#F6F6F6",color:"black"}}>
            <i class="far fa-envelope" style={{fontSize:"20px"}}>
            </i></Button>
          <div className="ml-3"><h6 style={{fontSize:"11px",fontWeight:"bold",marginLeft:"2%"}}>EMAIL ADDRESS</h6>
          <p style={{fontWeight:"10px",color:"silver"}}>markclarke@gmail.com</p>
          <hr style={{width:"150%"}}></hr>
          </div>
        
        </div>
        <div className="ml-4"style={{display:"flex",height:"50px",marginTop:"11%"}}>
          <Button className="p-3" style={{borderRadius:"10px",border:"none",background:"#F6F6F6",color:"black"}}>
          <i class="fas fa-key" style={{fontSize:"20px"}}></i></Button>
          <div className="ml-4"><h6 style={{fontSize:"11px",fontWeight:"bold",
        }}>PASWORD</h6>
          <p style={{fontWeight:"10px",color:"silver"}}>******</p>
          <hr style={{width:"400%"}}></hr>   
          </div>
        </div>
        </Modal.Body>
        <Modal.Footer className="" style={{border:"none"}}>
        <Button className="p-3"  
        style={{marginTop:"10%",background:"#E3424B",border:
        "none",borderRadius:"7px",width:"80%",marginRight:"10%"}} 
         block>
    Create account
  </Button>
  <h6 style={{fontSize:"14px",position:"absolute",left:"24%",
  textAlign:"center",marginTop:"15%"}}> Already have an account? <span onClick={handleClose3} style={{color:"#E3424B",fontWeight:"bold",cursor:"pointer"}}>Sign In</span></h6>
 
  <Button  style={{marginTop:"18%",background:"transparent",border:"none",borderRadius:"7px"}} size="lg" block>
    Create an account
  </Button>


        </Modal.Footer>
      </Modal>


      <Modal className="welcome" style={{border:"none",width:"420px",
        height:"150vh",marginLeft:"69%",marginTop:"-2.3%"}} 
        show={show5} onHide={handleClose5}>
        <Modal.Header style={{border:"none", outline:"none"}} closeButton>
          <Modal.Title className="mt-3 ml-3" style={{border:"none",fontSize:"33px"}}>Hi Talal...</Modal.Title>
        </Modal.Header>
        <p className="pl-4 ml-2" style={{color:"silver",fontSize:"13px"}}>Save your time and let's shop for you </p>
        <Modal.Body style={{border:"none"}}>
       <div style={{fontSize:"17px",fontWeight:"normal",marginLeft:"5%"}}>
         <h4  style={{fontSize:"17px",fontWeight:"normal",height:"38px"}}>Profile</h4>
         <h4 style={{fontSize:"17px",fontWeight:"normal",height:"38px",}}>My Addresses</h4>
         <h4 style={{fontSize:"17px",fontWeight:"normal",height:"38px"}}>Favourites</h4>
         <h4 style={{fontSize:"17px",fontWeight:"normal",height:"38px"}}>My Orders</h4>
         <h4 style={{fontSize:"17px",fontWeight:"normal",height:"38px"}}>Change Password</h4>
         <h4 style={{fontSize:"17px",fontWeight:"normal",height:"38px"}}>Setting</h4>
       </div>
        </Modal.Body>
        <Modal.Footer style={{border:"none"}}>
        <Button onClick={handleClose5} className="p-3"  style={{marginTop:"10%",background:"#E3424B",border:"none",borderRadius:"7px",width:"80%",marginRight:"10%"}}  block>
    Logout
  </Button>
  <Button  className="p-3"  style={{marginTop:"10%",background:"transparent",border:"none",borderRadius:"7px",width:"80%",marginRight:"10%"}}  block>
    Logout
  </Button>
        </Modal.Footer>


       
      </Modal>

      <Modal className="forgot" style={{border:"none",width:"330px",marginLeft:"40%",marginTop:"7%"}} 
        show={show118} onHide={handleClose118}>
        <Modal.Header style={{border:"none", outline:"none"}} closeButton>
          <Modal.Title className="mt-3" style={{border:"none",fontSize:"25px",paddingLeft:"25.5px"}}>Forgot password?</Modal.Title>
        </Modal.Header>
        <p className="pl-4 ml-3" style={{color:"silver",fontSize:"12px"}}>Please enter your email address to continue</p>

        <Modal.Body style={{border:"none"}}>
        <div className="mt-2 ml-4" style={{display:"flex",height:"50px",width:"90%",}}>
          <Button className="p-3" style={{borderRadius:"10px",
          border:"none",background:"#F6F6F6",color:"black"}}>
            <i class="far fa-envelope" style={{fontSize:"19px"}}>
            </i></Button>
          <div className="ml-3"><h6 style={{fontSize:"11px",fontWeight:"bold",marginLeft:"2%"}}>EMAIL ADDRESS</h6>
          <p style={{fontWeight:"10px",color:"silver"}}>markclarke@gmail.com</p>
          <hr style={{width:"150%"}}></hr>
          </div>
        
        </div>
        </Modal.Body>
        <Modal.Footer className="mt-4" style={{border:"none"}}>
        <Button  onClick={handleClose118}  className="p-3" style={{background:"#192531",border:"none",
        borderRadius:"7px",width:"82%",marginRight:"10%"}}  block>
         Continue
          </Button>
        </Modal.Footer>
      </Modal>   



      
   {/* ---------------------------user 2 end------------------ */}
   </>

      
  
            <Container className="screensize"  fluid>
  <Row id="grid">
    <Col sm={2} lg={2}className="sidebar">
        <Navbar.Brand href="/home" className=" pt-2 logo" 
        style={{width:"100%"}}>
          <img src={logo} className="logo-img"  style={{height:"10vh"}} />
          </Navbar.Brand>      
          {/* <button onClick={()=> setShownav(true)}>click</button> */}
  <Nav defaultActiveKey="/home" className="flex-column" >
  <Nav.Link className="mt-3 p-3 color" href="/" 
  style={{background:"#E3424B",borderRadius:"10px",
  color:"white",fontWeight:"bold",}}>
    <i class="fas fa-home house"
   style={{fontSize:"19px"}}></i>&nbsp; &nbsp; 
   <span className="home">Home</span></Nav.Link>


  <Link to="/exploring" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-2 font" href="/exploring" style={{color:"black",}}>  
  <img style={{height:"3vh",marginLeft:"1px"}} 
  src={explore}/>&nbsp; &nbsp; &nbsp;<span className="home">Explore</span>
  </Nav.Link>
  </Link>
  <Link to="/favorite" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-2 font"  href="/favorite" style={{color:"black"}}>
  <img style={{height:"3.2vh",marginLeft:"1px"}} src={fav}/>&nbsp; 
  &nbsp; &nbsp; <span className="home">
     Favourite</span></Nav.Link></Link>
  <Link to="/orders" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-2 font"  href="/orders" style={{color:"black"}}>
  <img style={{height:"3vh",}} src={order}/>&nbsp; &nbsp; &nbsp;<span 
  className="home">Orders</span></Nav.Link></Link>

  <Link to="/messages" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-2 font" href="/messages" 
  style={{color:"black"}}>
  <img style={{height:"2.5vh"}} src={message} className="m-b"/>
  &nbsp; &nbsp; &nbsp;<span className="home">Messages</span> 
  &nbsp; &nbsp; &nbsp; &nbsp;<Badge  id="no" className="badge messagebdg"
   style={{background:"#E3424B",
   borderRadius:'100%',color:"white"}}>
     2</Badge></Nav.Link>
     </Link>
  <Link to="/settings" style={{textDecoration:"none"}}>
     
  <Nav.Link className="set font settingstop" href="/settings" style={{color:"black"}}><img style={{height:"3vh"}} src={setting}/>&nbsp; &nbsp; &nbsp;<span className="home">Settings</span></Nav.Link>
</Link>
</Nav>
<Toast style={{marginTop:"40px",background:"#F7F7F7",width:"105%",
borderRadius:"16px",}} id="no" className="tost">
  <Toast.Header style={{color:"black",border:"none",background:"#F7F7F7",
  borderRadius:"16px"}}>
    <img src="holder.js/20x20?text=%20" className="rounded mr-2 ml-auto" alt="" style={{color:"black"}}/>
    </Toast.Header>
    <div style={{marginLeft:"26%"}}>
    <Button className="ml-4 fire" style={{background:"#FFDD73",color:"#E3424B",width:"55px",
    fontSize:"30px",border:"none",marginTop:"20px",borderRadius:"12px"}}><i class="fas fa-fire"></i></Button>
    </div>
  <h1 className="mt-4" style={{textAlign:"center",fontWeight:"bold",fontSize:"15px"}}>Free delivery on <br></br>
  all orders over <span style={{color:"orange"}}>$25</span></h1>
  <p style={{color:"grey",textAlign:"center"}}>it is a limited offer that<br></br>will expire soon</p>
<Button className="mt-3" style={{background:"#223142",border:"none",marginLeft:"35px",borderRadius:"8px"}}>Order Now  &nbsp; &nbsp; &nbsp;<i class="fas fa-long-arrow-alt-right"></i></Button>
<Button style={{background:"transparent",border:"none",color:"transparent"}}>i</Button>
<Button style={{background:"transparent",border:"none",color:"transparent"}}>i</Button>

</Toast>
    </Col>
   
    {/* ---------------------- */}
    <Col sm={10} lg={10} className="col-2-l" fluid>
         {/* <hr style={{width:"100%",transform:"rotate(-90deg)"}}></hr> */}
   <Navbar className="b mainnavbartop" style={{marginTop:"7px"}}>
   <Nav className="mr-4">
   <Nav.Link  onClick={handleShow} 
   style={{color:"black",fontWeight:"normal",fontSize:"14px",marginRight:"-25px"}} id="no"
    className="no" ><img src={delivery}style={{height:"3vh"}} />&nbsp; &nbsp; Sen Francisain California &nbsp;
    <i class="fas fa-angle-down"></i> </Nav.Link>
  
      <Nav.Link className="ml-4 pl-3"
      style={{color:"black",fontWeight:"normal",
      fontSize:"14px"}} id="no"><img src={deal}
      style={{height:"3vh"}} />&nbsp; &nbsp; Best deals &nbsp; <i class="fas fa-angle-down"></i></Nav.Link>
      <label for="EN" className="mt-2 ml-4 p-0" style={{background:"#E3424B",border:"none",
      color:"white",fontSize:"13px",borderRadius:"8px"}} 
      id="no"> 
       <select id="EN" style={{ background:"#E3424B",height:"3vh",color:"white",borderRadius:"8px",border:"3px solid #E3424B "}}>
       <option value="EN">EN</option>

         <option value="ع">ع</option>
       </select>
       </label> 
    </Nav>
    <div className="input-container inpu" >
    <i class="fas fa-search icon"></i>
    <input type="text" className="input-field input-u" 
    placeholder="Search for anything... "   
    style={{fontSize:"14px",background:"#F6F6F6",
    border:"none",
    outline:"none",padding:"13px",
    boxSizing:"border-box"}}/>
    </div>
<div id="fle" className="ml-2">
  <Button onClick={handleShow1} className="ml-3 userbutton"  
  style={{background:"#E3424B",paddingRight:"14px",
  textAlign:"center",border:"none",borderRadius:"7px",height:"7vh",paddingLeft:"14px"}}>
    <i class="fas fa-user" style={{textAlign:"center"}}></i> </Button>

  <Button onClick={handleShow2} className="ml-2 userbutton"  style={{background:"#E3424B",border:"none",borderRadius:"7px",
  height:"7vh",}}>
    <i class="fas fa-shopping-cart"></i> </Button>
</div>
<Badge variant="light" className="badge1" 
style={{borderRadius:"12px",position:"absolute",right:"1%"
,padding:"6px",background:"#FFDD73",color:"black",bottom:"65%",
fontSize:"12px"}}>2</Badge>
</Navbar> 
{/* ============ */}
  <Carousel className="over mt-4" id="car"style={{height:"45vh",width:"101%"}}>
  <Carousel.Item>
    <img
      className="d-block  over " id="carr" 
      src={slider1} style={{height:"45vh",width:"101%"}}
      
    />
     <Carousel.Caption style={{position:"absolute",top:"9%",left:"3%",color:"black",textAlign:"left"}}>
      <h2 id="stay" style={{fontWeight:"900",color:"#223142",fontSize:"42px"}}>Stay Home</h2>
      <h2 id="stay" style={{fontWeight:"900",color:"#E3424B",fontSize:"42px",marginTop:"-10px"}}>Shop Online</h2>
      <p className="stay-p" style={{fontSize:"15px"}}>
        Finibus feugiat libero. Duis a ex<span id="no" > nisl. Phasellus sodales justo eros.<br id="no"></br>sagittis
       fermentum sapienn </span> malesuada nec.In porta turpis ex,sed<br id="no"></br>
      sollicitudin velit finibus id.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block over" id="carr" 
      src={slider2} style={{height:"45vh",width:"101%"}}
    />
     <Carousel.Caption style={{position:"absolute",top:"9%",left:"3%",color:"black",textAlign:"left"}}>
     <h2 id="stay" style={{fontWeight:"900",color:"#223142",fontSize:"42px"}}>Stay Home</h2>
      <h2 id="stay" style={{fontWeight:"900",color:"#E3424B",fontSize:"42px",marginTop:"-10px"}}>Shop Online</h2>
      <p className="stay-p" style={{fontSize:"15px"}}>Finibus feugiat libero. Duis a ex<span id="no" >  nisl. Phasellus sodales justo eros.<br br id="no"></br>
      sagittis fermentum sapienn</span> malesuada nec.In porta turpis ex,sed<br br id="no"></br>
      sollicitudin velit finibus id.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<h3 className="exp ml-4"style={{color:"black",fontWeight:"bold", marginTop:"25px"}}> Explore Catagories</h3>
<div id="all" style={{marginTop:"30px",width:"100%",marginLeft:"22px"}}>
<Link to="/" style={{textDecoration:"none"}}>
  <Button className="mainbtns" id="alllA" style={{textAlign:"center",
  background:"#F6F6F6",color:"black",border:"none",
   borderRadius:"9px",paddingRight:"100px",
   fontSize:"17px",paddingTop:"5px",paddingBottom:"5px",height:"7.3vh",
   width:"15%"}}>
  <img className="buttona" src={all} style={{color:"black",height:"3vh"}}/>
  &nbsp; <b className="allt"style={{paddingTop:"20px",marginTop:"10px"}}>All</b>
  </Button>
  </Link>
  <Button className="mainbtns" id="alll" style={{background:"#F6F6F6",
  color:"black",border:"none",fontSize:"17px"
  ,marginLeft:"10px", paddingBottom:"5px",paddingTop:"5px",
  paddingRight:"30px",height:"7.3vh", 
  borderRadius:"9px",width:"15%"}}><img src={botique} 
  style={{height:"3vh"}}/><b className="allt1" style={{marginLeft:"15px",paddingTop:"10px",marginTop:"10px",
  fontWeight:"normal"}}>Boutique</b></Button>

<Button className="mainbtns" id="alll" style={{background:"#F6F6F6",
  color:"black",border:"none",fontSize:"17px"
  ,marginLeft:"10px", paddingBottom:"5px",paddingTop:"5px",
  paddingRight:"30px",height:"7.3vh", 
  borderRadius:"9px",width:"15%"}}><img src={elec} 
  style={{height:"3vh"}}/><b  className="allt1" style={{marginLeft:"15px",paddingTop:"10px",marginTop:"10px",
  fontWeight:"normal"}}>Electronics</b></Button>
  
  <Button className="mainbtns" id="alll" style={{background:"#F6F6F6",
  color:"black",border:"none",fontSize:"17px"
  ,marginLeft:"10px", paddingBottom:"5px",paddingTop:"5px",
  paddingRight:"30px",height:"7.3vh", 
  borderRadius:"9px",width:"15.2%"}}><img src={ restaurants } 
  style={{height:"3vh"}}/><b className="allt1" style={{marginLeft:"15px",paddingTop:"10px",marginTop:"10px",
  fontWeight:"normal"}}>Restaurants</b></Button>
  <Link to='/supermarket' style={{textDecoration:"none"}}>
  <Button className="mainbtns" id="alllS" style={{background:" #E3424B",
  color:"white",border:"none",fontSize:"17px"
  ,marginLeft:"10px", paddingBottom:"5px",paddingTop:"5px",
  paddingRight:"30px",height:"7.3vh",borderRadius:"9px",width:"17%"}}><img src={sup} 
  style={{height:"3vh"}}/><b className="allt1" style={{marginLeft:"15px",
  paddingTop:"10px",marginTop:"10px",
  fontWeight:"normal"}}>Supermarket</b></Button></Link>
    <Button className="mainbtns" id="alllD" style={{background:"#F6F6F6",
  color:"black",border:"none",fontSize:"17px"
  ,marginLeft:"10px", paddingBottom:"5px",paddingTop:"5px",
  paddingRight:"30px",height:"7.3vh", 
  borderRadius:"9px",width:"17%"}}><img src={taxi} 
  style={{height:"3vh"}}/><b className="allt1"style={{marginLeft:"15px",paddingTop:"10px",marginTop:"10px",
  fontWeight:"normal"}}>Delivery Taxi</b></Button>
</div>
<Card id="scard" 
style={{ width: '22rem',marginTop:"35px" ,marginLeft:"22px",border:"none"}}>
  <div variant="top" id="card"  className="ecc"
    style={{height:"30vh",borderRadius:"10px",width:"96%"
    ,background:`url(${img3})`,backgroundSize:"100% 100%"}}>
  <Link to="/explore"  style={{textDecoration:"none"}}>
      <div style={{color:"black",marginLeft:"6%",marginTop:"5%"}}>
      <img src={img6} style={{width:"80px",
      height:"80px",borderRadius:"100%"}}/>
      <h5  className="eccH" style={{fontWeight:"bold",marginTop:"2px"}} >Ramez</h5>
      <p style={{fontSize:"15px",marginTop:"-10px"}}>SuperMarket</p>
    </div>
    </Link>
    </div>
</Card>
    </Col>
  </Row>
</Container>
<div className="mt-4">
<Footer/>
</div>
        </>
       )
  }
