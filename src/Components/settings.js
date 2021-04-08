import React, {useState} from 'react'
import logo from "../logo/logo.svg";
import explore from "../logo/explore.svg"
import order from "../logo/orders.svg";
import fav from "../logo/favourites.svg";
import setting from "../sidebarw/setting.svg";
import message from "../logo/messages.svg";
import Footer from "../Components/footer";
import delivery from "../topbar/delivery address.svg";
import deal from "../topbar/best deals.svg";
import profile from "../xadok/download.png";
import master from "../xadok/master.png";
import f1 from "../xadok/download (1).png";
import f2 from "../xadok/download.png";
import img from "../xadok/pexels-photo-102104.jpeg"
import {Link} from 'react-router-dom';
import {Navbar,Row,Col,Nav,Container,Modal,Badge,Toast,Button,Form,Card,Carousel,Accordion} from 'react-bootstrap'
import "../App.css";
import './../css/setting_general.css'
import PersonalInfo from './Modals/settings page/personal_info';

export default function Settings() {
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

  const [shows, setShows] = useState(false);
  const [shows1, setShows1] = useState(false);
  const [shows2, setShows2] = useState(false);
  const [shows3, setShows3] = useState(false);
  const [shows4, setShows4] = useState(false);
  const [shows5, setShows5] = useState(false);
  const [shows6, setShows6] = useState(false);
  const [shows7, setShows7] = useState(false);







  const handleCloses = () => setShows(false);
  const handleShows = () => setShows(true);
  const handleCloses1 = () => setShows1(false);
  const handleShows1 = () => setShows1(true);
  const handleCloses2 = () => setShows2(false);
  const handleShows2 = () => setShows2(true);
  const handleCloses3 = () => setShows3(false);
  const handleShows3 = () => setShows3(true);
  const handleCloses4 = () => setShows4(false);
  const handleShows4 = () => setShows4(true);
  const handleCloses5 = () => setShows5(false);
  const handleShows5 = () => setShows5(true);
  const handleCloses6 = () => setShows6(false);
  const handleShows6 = () => setShows6(true);
  const handleCloses7 = () => setShows7(false);
  const handleShows7 = () => setShows7(true);



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

            <div>


    {/* ------------------------- location end ------------------------ */}



            {/* --------------------Setting Modals--------------------- */}

                 {/* <Modal className="set-m-1" style={{border:"none",width:"350px",height:"120vh",
                 marginLeft:"40%",marginTop:"-2%"}} 
        show={shows} onHide={handleCloses}>
        <Modal.Header style={{border:"none"}} closeButton>
          <Modal.Title style={{border:"none",marginTop:"4%",fontWeight:"bold"}}>Personal information</Modal.Title>
        </Modal.Header>
        <p className="pl-4 mt-2" style={{color:"silver",fontSize:"14px"}}>Profile Image</p>

        <Modal.Body style={{border:"none"}}>
          <div style={{display:"flex",alignItems:"center"}}>
            <img src={profile} style={{borderRadius:"6px",width:"50px",height:"50px"}} />
            <div className="ml-4" style={{display:"flex"}}>
            <Button style={{background:"#E3424B",marginleft:"1%",width:"110px",
            border:"1px solid #E3424B"}}>Upload</Button>
            <Button style={{background:"#F6F6F6",color:"silver",width:"110px",
            marginLeft:"5%",border:"none"}}>Delete</Button>
            </div>
          </div>
        <p className="mt-4 pt-4" style={{color:"silver",
        fontSize:"13px"}}>Profile Details</p>

        <div style={{display:"flex",height:"40px",marginTop:"12%"}}>
          <Button style={{border:"none",background:"#F6F6F6",color:"#223142",borderRadius:"6px"}}>
          <i class="fas fa-user"></i></Button>
          <div className="ml-3"><h6 style={{fontSize:"11px",
          fontWeight:"bold",marginLeft:"2%"}}>FULL NAME</h6>
          <p style={{fontWeight:"10px",color:"silver"}}>Mark Clarke</p>
<hr></hr>
          </div>
        
        </div>
        <div style={{display:"flex",height:"40px",marginTop:"16%"}}>
          <Button style={{border:"none",background:"#F6F6F6",color:"#223142",borderRadius:"6px"}}>
            <i class="far fa-envelope"></i></Button>
          <div className="ml-3"><h6 style={{fontSize:"11px",
          fontWeight:"bold",marginLeft:"2%"}}>EMAIL Address</h6>
          <p style={{fontWeight:"10px",color:"silver"}}>markclarke@gmail.com</p>
<hr></hr>
          </div>
        
        </div>
        <div style={{display:"flex",height:"40px",marginTop:"16%"}}>
          <Button style={{border:"none",background:"#F6F6F6",color:"#223142",borderRadius:"6px"}}>
          <i class="fas fa-phone"></i></Button>
          <div className="ml-3"><h6 style={{fontSize:"11px",fontWeight:"bold",
          marginLeft:"2%"}}>PHONE NUMBER</h6>
          <p style={{fontWeight:"10px",color:"silver"}}>+1(234)5678900</p>
          </div>
<hr></hr>

        </div>

        </Modal.Body>
        <Modal.Footer style={{border:"none"}}>
      
  <Button onClick={handleCloses} className="p-3" style={{marginTop:"5%",background:"#223142",
  border:"none",borderRadius:"7px"}}  block>
    Update profile
  </Button>

        </Modal.Footer>
      </Modal>
            */}
            


           <PersonalInfo shows={shows} handleCloses={handleCloses}/>



      <Modal show={shows1} className="set-m-2" style={{border:"none",width:"350px",
      borderRadius:"15px",marginLeft:"40%"}} onHide={handleCloses1} animation={false} >
       <Modal.Header style={{border:"none"}} closeButton>
         <Modal.Title style={{border:"none"}}>Saved addresses</Modal.Title>
       </Modal.Header>
       <Modal.Body style={{border:"none"}}>
        
         <div className="p-2 mt-2 " style={{background:"#F6F6F6",borderRadius:"10px", justifyContent:"space-between"
         ,width:"100%",display:"flex",height:"90px"}}>
           <div><h6 className="pl-2">Home</h6>
           <p className="pl-2" style={{fontSize:"15px"}}>Sn Francisco CA 94103 <br></br>94103</p>
           </div>
           <div style={{display:"flex",flexDirection:"column"}}>
             <button style={{borderRadius:"5px",width:"30px",height:"32px",border:"none",
             background:"silver",fontSize:"14px",color:"white"}}><i class="far fa-edit"></i></button>
             <button style={{marginTop:"10%",borderRadius:"5px",width:"30px",height:"32px",border:"none",
             background:"silver",fontSize:"12px",color:"white"}}><i class="fas fa-redo"></i></button>

           </div>
         </div>
         <div className="p-2 mt-2" style={{height:"90px",background:"#F6F6F6",borderRadius:"10px", justifyContent:"space-between"
         ,width:"100%",display:"flex"}}>
           <div><h6 className="pl-2">Office</h6>
           <p className="pl-2" style={{fontSize:"13px"}}>Sn Francisco CA 94103 <br></br>94103</p>
           </div>
           <div style={{display:"flex",flexDirection:"column"}}>
             <button style={{borderRadius:"5px",width:"30px",height:"32px",border:"none",
             background:"silver",fontSize:"14px",color:"white"}}><i class="far fa-edit"></i></button>
             <button style={{marginTop:"10%",borderRadius:"5px",width:"30px",height:"32px",border:"none",
             background:"silver",fontSize:"12px",color:"white"}}><i class="fas fa-redo"></i></button>

           </div>
         </div>
       </Modal.Body>
       <h6 className="pl-4  pt-4" style={{fontWeight:"bold",marginTop:"12%"}}>+ Add new addresses</h6>

       <Modal.Footer style={{border:"none"}}>
    <Button style={{background:"#223142",border:"none",borderRadius:"7px"}} size="lg" block>
    Confirm
  </Button>
       </Modal.Footer>
     </Modal>



     <Modal show={shows2} className="set-m-2" style={{border:"none",width:"330px",
  marginTop:"6%",    borderRadius:"15px",marginLeft:"40%"}} onHide={handleCloses2} animation={false} >
       <Modal.Header style={{border:"none"}} closeButton>
         <Modal.Title style={{border:"none"}}>Marketing perferences</Modal.Title>
       </Modal.Header>
       <Modal.Body style={{border:"none"}}>
        <div className="mt-4" style={{display:"flex"}}>
       <Form.Check aria-label="option 2" disabled/> 
       <h6 className="text-muted">Promotional emails</h6>
       </div>
       <div  className="mt-4"  style={{display:"flex"}}>
       <Form.Check aria-label="option 1" /> 
       <h6 >Monthly newsletter</h6>
       </div>

         <div  className="mt-4"   style={{display:"flex"}}>
       <Form.Check aria-label="option 1" disabled/> 
       <h6 className="text-muted">Feedback collection</h6>
       </div>
       <div  className="mt-4"  style={{display:"flex"}}>
       <Form.Check aria-label="option 1" /> 
       <h6 >Discount and offers</h6>
       </div>
       </Modal.Body>

       <Modal.Footer style={{border:"none"}}>
    <Button style={{background:"#223142",border:"none",borderRadius:"7px"}} size="lg" block>
    Update perferences
  </Button>
       </Modal.Footer>
     </Modal>



     <Modal show={shows3} className="set-m-2 mt-4 " style={{border:"none",width:"340px",
      borderRadius:"15px",marginLeft:"40%"}} onHide={handleCloses3} animation={false} >
       <Modal.Header style={{border:"none"}} closeButton>
         <Modal.Title style={{border:"none"}}>Payment methods</Modal.Title>
       </Modal.Header>
       <Modal.Body style={{border:"none"}}>
       <Button className="p-3 mt-3" style={{background:"#E3424B",border:"none",borderRadius:"7px"}} size="lg" block>
       <i class="far fa-address-card"></i>
  </Button>
  <div style={{display:"flex", alignItems:"center",justifyContent:"space-evenly",marginTop:"2%",fontSize:"30px"}}>
  <Button  style={{width:"145px",border:"none",background:"#F6F6F6",color:"#BFBFBF",fontSize:"30px",}}> <i class="fas fa-money-bill-wave"></i></Button>
  <Button style={{width:"145px",border:"none",background:"#F6F6F6",color:"#BFBFBF",fontSize:"30px"}}> <i class="fab fa-paypal"></i></Button>
  </div>
       </Modal.Body>

       <Modal.Footer style={{border:"none",marginTop:"5%"}}>
    <Button className="p-3 mt-2"style={{background:"#223142",border:"none",borderRadius:"7px"}} size="lg" block>
    Update perferences
  </Button>
       </Modal.Footer>
     </Modal>
        
 {/* ------------------------- cart  2 ------------------------- */}
 
     <Modal show={shows4} className="set-m-2 mt-4 " style={{border:"none",width:"340px",
      borderRadius:"15px",marginLeft:"40%"}} onHide={handleCloses4} animation={false} >
       <Modal.Header style={{border:"none"}} closeButton>
         <Modal.Title style={{border:"none"}}>My cards <span style={{fontSize:"12px"}}>  (1)</span></Modal.Title>
       </Modal.Header>
       <Modal.Body style={{border:"none"}}>
      
  <div style={{display:"flex", alignItems:"center",justifyContent:"space-evenly",marginTop:"2%",fontSize:"30px"}}>
  <Button  style={{width:"140px",border:"none",background:"#F6F6F6",height:"160px",borderRadius:"7px",
  color:"#BFBFBF",fontSize:"35px",}}> <i class="fas fa-plus"></i></Button>
  <div style={{width:"140px",border:"none",height:"160px",borderRadius:"7px"}}>
<img src={master} style={{width:"100%", height:"100%",borderRadius:"7px"
}}/>
  </div>
  </div>
       </Modal.Body>
     </Modal>


     <Modal show={shows5} className="set-m-2 mt-4 " style={{border:"none",width:"340px",
      borderRadius:"15px",marginLeft:"40%"}} onHide={handleCloses5} animation={false} >
       <Modal.Header style={{border:"none"}} closeButton>
         <Modal.Title style={{border:"none"}}>Support</Modal.Title>
       </Modal.Header>
       <Modal.Body style={{border:"none"}}>
       <div style={{display:"flex",
       justifyContent:"",marginTop:"2%",
       height:"45px"}}>
  
    <Button style={{color:"#223142",
    background:"#F6F6F6",
    borderRadius:"7px",border:"none"}}>
     <i class="far fa-envelope"></i>
      </Button>
      <div className="support" style={{marginLeft:"5%"}}>
        <h6 className="support" style={{fontSize:"12px"}}>LIVE CHAT</h6>
        <p className="support"style={{fontSize:"12px"}}>Waiting time:<b>5 min</b></p>
      </div>
    <Button  style={{color:"#223142",background:"none",border:"none",marginLeft:"35%"}}>
      <i class="fas fa-chevron-right"></i></Button>

    </div>
    <div style={{display:"flex",
       justifyContent:"",marginTop:"5%",
       height:"45px"}}>
  
    <Button style={{color:"#223142",
    background:"#F6F6F6",
    borderRadius:"7px",border:"none"}}>
  <i class="far fa-file-alt"></i>
      </Button>
      <div style={{marginLeft:"5%"}}>
        <h6 style={{fontSize:"12px"}}>FAQ</h6>
        <p className="support" style={{fontSize:"12px",color:"silver"}}>182 Park Row Street,Suit 8 </p>
      </div>
    <Button  style={{color:"#223142",background:"none",border:"none",marginLeft:"24%"}}>
      <i class="fas fa-chevron-right"></i></Button>

    </div>
    <div style={{display:"flex",
       justifyContent:"",marginTop:"5%",
       height:"45px"}}>
  
    <Button style={{color:"#223142",
    background:"#F6F6F6",
    borderRadius:"7px",border:"none"}}>
  <i class="fas fa-phone-alt"></i>
      </Button>
      <div style={{marginLeft:"5%"}}>
        <h6 style={{fontSize:"12px"}}>PHONE NUMBER</h6>
        <p style={{fontSize:"12px",color:"silver"}}>+1(987)1234098</p>
      </div>
 

    </div>
       </Modal.Body>

       <Modal.Footer style={{border:"none",marginTop:"2%"}}>
   
       </Modal.Footer>
     </Modal>

     <Modal show={shows6} className="set-m-2 mt-4 " style={{border:"none",width:"340px",
      borderRadius:"15px",marginLeft:"40%"}} onHide={handleCloses6} animation={false} >
       <Modal.Header style={{border:"none"}} closeButton>
         <Modal.Title style={{border:"none"}}>Invite a friend
         </Modal.Title>
       </Modal.Header>
       <Modal.Body style={{border:"none"}}>
       <div style={{display:"flex",
       justifyContent:"",marginTop:"1%",
       height:"40px"}}>
  
    <Button style={{color:"#223142",
    background:"#F6F6F6",
    borderRadius:"7px",border:"none"}}>
<i class="fas fa-plus"></i>
      </Button>
      <div style={{marginLeft:"5%",marginTop:"3%"}}>
        <h6 style={{fontSize:"14px"}}>Send a invite to a friend</h6>
      </div>
    </div>
    <h6 style={{color:"silver",marginTop:"8%",fontSize:"13px"}}>Invited friends (2)</h6>
    <div style={{display:"flex",
       justifyContent:"",marginTop:"5%",
       height:"45px"}}>
     <img src={f1} style={{width:"40px",height:"40px",borderRadius:"6px"}}/>

      <div style={{marginLeft:"5%"}}>
        <h6 style={{fontSize:"12px",fontWeight:"bold"}}>Kate Simpson</h6>
        <p style={{fontSize:"12px",color:"silver"}}>katesimpson@outlook.com</p>
      </div>
    <Button  style={{color:"silver",background:"none",border:"none",marginLeft:"24%"}}>
      <i class="fas fa-chevron-right"></i></Button>

    </div>
    <div style={{display:"flex",
       justifyContent:"",marginTop:"5%",
       height:"45px"}}>
     <img src={f2} style={{width:"40px",height:"40px",borderRadius:"6px"}}/>

      <div style={{marginLeft:"5%"}}>
        <h6 style={{fontSize:"12px",fontWeight:"bold"}}>Andrew Smith</h6>
        <p style={{fontSize:"12px",color:"silver"}}>andrewsmith@outlook.com</p>
      </div>
    <Button  style={{color:"silver",background:"none",border:"none",marginLeft:"24%"}}>
      <i class="fas fa-chevron-right"></i></Button>

    </div>
       </Modal.Body>

       <Modal.Footer style={{border:"none",marginTop:"2%"}}>
   
       </Modal.Footer>
     </Modal>

     <Modal show={shows7} className="set-m-2 mt-4 " style={{border:"none",width:"300px",
      borderRadius:"15px",marginLeft:"40%"}} onHide={handleCloses7} animation={false} >
       <Modal.Header style={{border:"none"}} closeButton>
         <Modal.Title style={{border:"none"}}>Discounts</Modal.Title>
       </Modal.Header>
       <Modal.Body style={{border:"none"}}>
      
  
<div style={{textAlign:"center",width:"100%",height:"100px",background:"#F6F6F6",borderRadius:"5px",border:"1px dotted silver"}}>
  <h6 style={{fontSize:"15px",marginTop:"10%",fontWeight:"bold"}}>KL7L24</h6>
  <p style={{fontSize:"12px",color:"silver",}}>+ valid until 30 Sep 2020</p>
</div>
<div style={{textAlign:"center",width:"100%",marginTop:"7%",height:"100px",background:"#F6F6F6",borderRadius:"5px",border:"1px dotted silver"}}>
  <h6 style={{fontSize:"15px",marginTop:"4%",color:"#E3424B",marginTop:"10%",fontWeight:"bold"}}>AQ1P70</h6>
  <p style={{fontSize:"12px",color:"silver",}}>+ valid until 15 Nov 2020</p>
</div>
       </Modal.Body>
     </Modal>


                  <Container className="screensize" fluid>
  <Row id="grid">
    <Col sm={2} className="sidebar">
        <Navbar.Brand href="/" className=" pt-2 logo" style={{width:"100%"}}>
          <img src={logo}  className="logo-img"  style={{height:"10vh"}} />
          </Navbar.Brand>      
        <Nav defaultActiveKey="" className="flex-column" >
<Link to="/" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-3 hs" href="/" 
  style={{color:"black",background:"transparent"}}>
<i class="fas fa-home house-s" style={{fontSize:"20px"}}></i>
&nbsp; &nbsp; <span className="home">Home</span></Nav.Link></Link>
<Link to="/exploring" 
style={{textDecoration:"none"}}>
  <Nav.Link className="mt-2 font " href="/exploring" 
  style={{borderRadius:"10px",
  color:"black",width:"112%"}}>  
  <img style={{height:"3vh",marginLeft:"1px"}} 
  src={explore}/>&nbsp; &nbsp; &nbsp;<span 
  className="home">Explore</span>
  </Nav.Link>
  </Link>
  <Link to="/favorite" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-2  font"  href="/favorite"
   style={{color:"black"}}>
  <img style={{height:"3.2vh",marginLeft:"1px"}} src={fav}/>&nbsp; &nbsp;
   &nbsp; <span className="home"> Favorite</span></Nav.Link></Link>
<Link to="/orders" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-2 font"  href="/orders" 
   style={{color:"black"}}>
  <img style={{height:"3vh",}} src={order}/>&nbsp; 
  &nbsp; &nbsp;<span className="home">Orders</span></Nav.Link>
  </Link>
<Link to="/messages" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-2 font" href="/messages" style={{color:"black"}}>
  <img style={{height:"2.5vh"}} src={message}/>&nbsp; &nbsp; &nbsp;
  <span className="home">Messages</span> &nbsp; &nbsp; &nbsp; &nbsp;
  <Badge id="no" className="badge messagebdg" style={{background:"#E3424B",
  borderRadius:'100%',color:"white"}}>2</Badge></Nav.Link>
  </Link>
  <Nav.Link className="p-3 settingstop  color" href="/settings" style={{background:"#E3424B",borderRadius:"10px",
   color:"white",fontWeight:"bold",width:"112%",marginTop:"3%"}}>
     <img style={{height:"3vh"}} className="sett" src={setting}/>&nbsp; &nbsp; &nbsp;<span className="home">Settings</span></Nav.Link>

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
    <Col sm={10} className="up" fluid>
         {/* <hr style={{width:"100%",transform:"rotate(-90deg)"}}></hr> */}
         <Navbar className="mt-1 b">
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
    style={{fontSize:"14px",background:"#F6F6F6",border:"none",
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
<Badge variant="light" className="badge1"style={{borderRadius:"12px",position:"absolute",right:"1%",padding:"6px",background:"#FFDD73",color:"black",bottom:"65%",fontSize:"12px"}}>2</Badge>
</Navbar> 


<h4 style={{fontWeight:"bold",color:"#223142",marginTop:"5%",marginLeft:"3%"}}>Settings</h4>
<div style={{marginLeft:"3%"}}>
    <h6 style={{color:"lightgray",marginTop:"3%",marginLeft:"%"}}>General</h6>
    <div onClick={handleShows} style={{display:"flex",justifyContent:"space-between",marginTop:"2%"}}>
    <Button style={{color:"#223142",background:"none",border:"none",marginLeft:"-1%"}}><i class="far fa-user"></i> &nbsp;
    <b>Personal information</b></Button>
    <Button  style={{color:"#223142",background:"none",border:"none"}}>
      <i class="fas fa-chevron-right"></i></Button>
    </div>
    <hr style={{marginTop:"-1px"}}></hr>
    <div  onClick={handleShows1} style={{display:"flex",justifyContent:"space-between",marginTop:"2%"}}>
    <Button style={{color:"#223142",background:"none",border:"none",marginLeft:"-1%"}}>
      <i class="far fa-bookmark"></i> &nbsp; <b>Saved addressess</b></Button>
    <Button style={{color:"#223142",background:"none",border:"none"}}><i class="fas fa-chevron-right"></i></Button>
    </div>
    <hr style={{marginTop:"-1px"}}></hr>
    <div onClick={handleShows2} style={{display:"flex",justifyContent:"space-between",marginTop:"2%"}}>
    <Button style={{color:"#223142",background:"none",border:"none",marginLeft:"-1%"}}><i class="far fa-envelope"></i> &nbsp; <b>Marketing perferences</b></Button>
    <Button  style={{color:"#223142",background:"none",border:"none"}}><i class="fas fa-chevron-right"></i></Button>
    </div>
    <hr style={{marginTop:"-1px"}}></hr>


    <h6 style={{color:"lightgray",marginTop:"3%",marginLeft:"%"}}>Payments</h6>
    <div onClick={handleShows3}  style={{display:"flex",justifyContent:"space-between",marginTop:"2%"}}>
    <Button style={{color:"#223142",background:"none",border:"none",marginLeft:"-1%"}}><i class="far fa-address-card"></i>&nbsp; <b>Payment methods</b></Button>
    <Button style={{color:"#223142",background:"none",border:"none"}}><i class="fas fa-chevron-right"></i></Button>
    </div>
    <hr style={{marginTop:"-1px"}}></hr>
    <div onClick={handleShows4} style={{display:"flex",justifyContent:"space-between",marginTop:"2%"}}>
    <Button style={{color:"#223142",background:"none",border:"none",marginLeft:"-1%"}}><i class="fas fa-credit-card"></i> &nbsp; <b>My cards</b></Button>
    <Button  style={{color:"#223142",background:"none",border:"none"}}>
      <i class="fas fa-chevron-right"></i></Button>
    </div>
    <hr style={{marginTop:"-1px"}}></hr>

    <h6 style={{color:"lightgray",marginTop:"3%",marginLeft:"%"}}>Others</h6>
    <div onClick={handleShows5}  style={{display:"flex",justifyContent:"space-between",marginTop:"2%"}}>
    <Button style={{color:"#223142",background:"none",border:"none",marginLeft:"-1%"}}>
       <i class="far fa-question-circle"></i> &nbsp; <b>Support</b></Button>
    <Button    style={{color:"#223142",background:"none",border:"none"}}><i class="fas fa-chevron-right"></i></Button>
    </div>
    <hr style={{marginTop:"-1px"}}></hr>
    <div  onClick={handleShows6} style={{display:"flex",justifyContent:"space-between",marginTop:"2%"}}>
    <Button style={{color:"#223142",background:"none",border:"none",marginLeft:"-1%"}}><i class="fas fa-user-plus"></i>&nbsp; <b>Invite a friend</b></Button>
    <Button  style={{color:"#223142",background:"none",border:"none"}}><i class="fas fa-chevron-right"></i></Button>
    </div>
    <hr style={{marginTop:"-1px"}}></hr>
    <div onClick={handleShows7} style={{display:"flex",justifyContent:"space-between",marginTop:"2%"}}>
    <Button style={{color:"#223142",background:"none",border:"none",marginLeft:"-1%"}}>
      <i class="far fa-money-bill-alt"></i> &nbsp; <b>Discounts</b></Button>
    <Button  style={{color:"#223142",background:"none",
    border:"none"}}><i class="fas fa-chevron-right"></i></Button>
    </div>
    <hr style={{marginTop:"-1px"}}></hr>
</div>
</Col>

</Row>
</Container>
<div className="mt-4">
<Footer/>
</div>   
            </div>
        )
    
}
