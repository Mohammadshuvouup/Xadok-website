import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Navbar,Row,Col,Nav,Badge,Card,Toast,Button,Modal,Accordion} from 'react-bootstrap'
import delivery from "../topbar/delivery address.svg";
import deal from "../topbar/best deals.svg";
import img from "../xadok/pexels-photo-102104.jpeg"
import logo from "../logo/logo.svg";
import master from "../xadok/master.png";
import UserLoginModal from './Modals/user_login';
import OpenCart from './openCart';
import SavedAddresses from './Modals/settings page/saved_addresses.jsx'

import "../App.css";

import { Trans, useTranslation } from 'react-i18next';


const TopBar = () => {

  let geo_location = {
    lat: '',
    lng:''
  }
  
  const [selected_val, setSelect_val] = useState('');

  useEffect(() => {
    

    const selected_langauge = localStorage.getItem("language");
    setSelect_val(selected_langauge);

    navigator.geolocation.getCurrentPosition(function (position) {

      geo_location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude

      };
    
      localStorage.setItem('current_location_lat', JSON.stringify(geo_location.lat));
      localStorage.setItem('current_location_lng', JSON.stringify(geo_location.lng));
    })


  }, [])
  

  const [shows1, setShows1] = useState(false);
  const handleShows1 = () => setShows1(true);
  const handleCloses1 = () => setShows1(false);


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
  
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    
  }

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

              
  const cart_qty = (localStorage.getItem('cart_quantity'));
  
  const assign_language = (e) => {

    localStorage.setItem("language", e.target.value);

    setSelect_val(e.target.value);
    i18n.changeLanguage(e.target.value)
    window.location.reload();
  }

    return(
    <div>
           
        <Navbar className="mainnavbartop b" style={{marginTop:"7px"}}>
            <Nav >
                <div className="left-nav-item">
                    <Nav.Link className="topNav-item-list"  onClick={handleShows1}  >
                <img src={delivery} style={{ height: "3vh" }} className="mr-2"/> {t("topBar.Sen-Francisain-California")}
                    </Nav.Link>
                    <Nav.Link  className="topNav-item-list"  onClick={handleShow} >
                        <img src={deal} style={{height:"3vh"}} className="mr-2"/> {t("topBar.Best-deals")}
                    </Nav.Link>

                    <select value={`${selected_val || ''}`} onChange={(e) => assign_language(e)}  className="mr-4" style={{ background:"#E3424B",color:"white",borderRadius:"8px",border:"3px solid #E3424B "}}>
                      <option value="en">EN</option>
                      <option  value="ar">"ع"</option>
                    </select>
                </div>

            <form className="form-inline">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1"><i className="fas fa-search icon"></i></span>
                </div>
                <input type="text" className="form-control" placeholder={t("topBar.Search-for-anything")} aria-label="Search" aria-describedby="basic-addon1"/>
              </div>
            </form>

            <div id="fle" className="ml-2">
              <i className="fas fa-user top-bar-icon ml-3" onClick={handleShow1}></i> 
              <i className="fas fa-shopping-cart top-bar-icon ml-2" onClick={handleShow2}><span className="product_amount">{cart_qty>0 ? cart_qty: 0}</span></i>
            </div> 

            </Nav>
        </Navbar> 

        {/* -----------------Open Cart---------------------- */}
        <OpenCart
        show2={show2}
        setShow2={setShow2}
        setShow={setShow}
        handleClose2={handleClose2}
        handleShow114={handleShow114}
        handleShow={handleShow}
        
        />

        {/* -----------------Location---------------------- */}
        <SavedAddresses shows1={shows1} handleCloses1={handleCloses1} />


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
    <UserLoginModal show1={show1} show118={show118} setShow1={setShow1} setShow118={setShow118}/>
        
     \
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

    </div>
        
    );
}

export default TopBar;

