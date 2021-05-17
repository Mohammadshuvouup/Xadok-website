import React, { useState } from 'react'
// import logo from "../logo/logo.svg";
// import explore from "../logo/explore.svg"
// import order from "../sidebarw/orders.svg";
// import fav from "../logo/favourites.svg";
// import setting from "../logo/setting.svg";
// import message from "../logo/messages.svg";
import Footer from "../Components/footer";
// import delivery from "../topbar/delivery address.svg";
// import deal from "../topbar/best deals.svg";
// import master from "../xadok/master.png";
// import img from "../xadok/pexels-photo-102104.jpeg"
// import {Link} from 'react-router-dom';
import {Navbar,Row,Col,Nav,Container,ProgressBar,Card,CardDeck,Modal,Badge,Toast,Button,Form,FormControl,Carousel,Accordion} from 'react-bootstrap'
import "../App.css";
import SideDrawer from './SideDrawer/SideDrawer';
import TopBar from './topBar';
import '../css/order.css'

export default function Orders() {
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
  // const [show, setShow]  = useState(false);
  // const [show1,setShow1] = useState(false);
  const [show2,setShow2] = useState(false);
  // const [show3,setShow3] = useState(false);
  // const [show4,setShow4] = useState(false);
  // const [show5,setShow5] = useState(false);
  // const [show8,setShow8] = useState(false);
  // const [show9,setShow9] = useState(false);
  // const [show10,setShow10] = useState(false);
  // const [show111,setShow111] = useState(false);
  // const [show112,setShow112] = useState(false);
  // const [show113,setShow113] = useState(false);
  // const [show114,setShow114] = useState(false);
  // const [show115,setShow115] = useState(false);
  // const [show116,setShow116] = useState(false);
  // const [show117,setShow117] = useState(false);
  // const [show118,setShow118] = useState(false);

  // ---------------ORDER DETAIL---------------
  const [show119,setShow119] = useState(false);
  const [show120,setShow120] = useState(false);


// --------delete-------------------
  const [show6,setShow6] = useState(true);
  const [show7,setShow7] = useState(true);
// ----------------------



  // const handleClose1 = () => setShow1(false);
  // const handleShow1 = () => setShow1(true);

  // const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // const handleClose3 = () => setShow3(false);
  // const handleShow3 = () => setShow3(true);

  // const handleClose4 = () => setShow4(false);
  // const handleShow4 = () => setShow4(true);

  // const handleClose5 = () => setShow5(false);
  // const handleShow5 = () => setShow5(true);

  // const handleClose8 = () => setShow8(false);
  // const handleShow8 = () => setShow8(true);

  // const handleClose9 = () => setShow9(false);
  // const handleShow9 = () => setShow9(true);

  // const handleClose10 = () => setShow10(false);
  // const handleShow10 = () => setShow10(true);
  
  // const handleClose111 = () => setShow111(false);
  // const handleShow111 = () => setShow111(true);

  // const handleClose112 = () => setShow112(false);
  // const handleShow112 = () => setShow112(true);

  // const handleClose113 = () => setShow113(false);
  // const handleShow113 = () => setShow113(true);

  // const handleClose114 = () => setShow114(false);
  // const handleShow114 = () => setShow114(true);

  // const handleClose115 = () => setShow115(false);
  // const handleShow115 = () => setShow115(true); 

  // const handleClose116 = () => setShow116(false);
  // const handleShow116 = () => setShow116(true);

  // const handleClose117 = () => setShow117(false);
  // const handleShow117 = () => setShow117(true);

  // const handleClose118 = () => setShow118(false);
  // const handleShow118 = () => setShow118(true);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // ----------orderDetails-----------------
  const handleClose119 = () => setShow119(false);
  const handleShow119 = () => setShow119(true);
  const handleClose120 = () => setShow120(false);
  const handleShow120 = () => setShow120(true);
        return (
            <>

 
{/* -----------------------------------------------------Order Details--------------------------------------------------------------- */}
<Modal show={show119} className="orderhere " style={{borderRadius:"30px ",marginTop:"9.8%",
     width:"410px",marginLeft:"33%",background:"transparent",border:"none"}} onHide={handleClose119} animation={false} >
       <Modal.Header style={{borderRadius:"1rem ",background:"transparent",border:"none"}} closeButton>

<div style={{width:"100% ",height:"10vh",display:"flex",justifyContent:"space-around"
}}>
<div style={{width:"50%"}}>
<div style={{display:"flex"}}>
<i class="far fa-clock ml-2 mt-4" 
style={{color:"yellow",fontSize:"20px"}}></i>

<Button style={{border:"none", background:"none",
marginLeft:"1%",marginTop:"-3%", fontSize:"12px"}}>
<b style={{color:"grey",fontWeight:"normal",width:"100%"}}> 
Estimated arrival</b> </Button>
</div>
<h5  style={{fontWeight:"bold",marginLeft:"25%",marginTop:"-7%"}}>
  35 min</h5>
</div>
{/* ----------------------------------- */}
<div style={{width:"50%"}}>
<div style={{display:"flex"}}>
<i class="far fa-map ml-2 mt-4" 
style={{color:"yellow",fontSize:"20px"}}></i>

<Button style={{border:"none", background:"none",
marginLeft:"1%",marginTop:"-3%", fontSize:"12px"}}>
<b style={{color:"grey",fontWeight:"normal",width:"100%"}}> 
Distance</b> </Button>
</div>
<h5  style={{fontWeight:"bold",marginLeft:"25%",marginTop:"-7%"}}>
  3.6 km</h5>
</div>

</div>
       </Modal.Header>
       <div style={{width:"90%",marginLeft:"5%",display:"flex",justifyContent:"space-evenly"}}>
  <ProgressBar variant="danger" now={100} style={{width:"12%",height:"0.9vh"}}/>
  <ProgressBar variant="danger" now={100} style={{width:"18%",height:"0.9vh"}}/>
  <ProgressBar variant="danger" now={60} style={{width:"60%",height:"0.9vh"}}/>
  </div>

       <Modal.Body style={{border:"none"}}>
       <Button style={{marginLeft:"3%",border:"none",background:"#F6F6F6",borderRadius:"8px"}}>
              <i class="far fa-clock "style={{fontSize:"13px",color:"black",borderRadius:"10px"}}></i></Button>
       <Button  style={{border:"none",background:"none",color:"black"}}>Delivery</Button>
       <div className="mt-3" style={{marginLeft:"3%",width:"92%",display:"flex",justifyContent:"space-between"}}>
         <div>
       <Button style={{border:"none",background:"#E3424B",}}>
       <i class="fas fa-check"></i></Button>
       <Button style={{border:"none",background:"none",fontWeight:"bold",color:"black"}}>On the way</Button>
         </div>
         <p style={{color:"silver"}}>12:48 am</p>

         </div>
         <div className="mt-3" style={{marginLeft:"3%",width:"92%",display:"flex",justifyContent:"space-between"}}>
         <div>
       <Button style={{border:"none",background:"#E3424B",}}>
       <i class="fas fa-check"></i></Button>
       <Button style={{border:"none",background:"none",fontWeight:"bold",color:"black"}}>Order is ready</Button>
         </div>
         <p style={{color:"silver"}}>12:42 am</p>
         
         </div>
         <div className="mt-3" style={{marginLeft:"3%",width:"93%",display:"flex",justifyContent:"space-between"}}>
           <p>See more</p> 
           <i class="fas fa-chevron-down"></i>    
         </div>
         <Button  style={{width:"80px",marginLeft:"3%",height:"7vh",fontSize:"20px",border:"none",borderRadius:"7px",background:"#F6F6F6",color:"black"}}><i class="far fa-comment-alt"></i></Button>
         <Button className="orderlast" style={{width:"240px",height:"7vh",marginLeft:"7%",border:"none",background:"#223142"}}> Call to</Button>

       </Modal.Body>

       <Modal.Footer style={{border:"none",marginLeft:"-4%",width:"100%"}}>

       </Modal.Footer>
     </Modal>
{/* ---------------------------------------PREVIOUS ORDER DETAILS----------------------------- */}
<Modal className="orderpre" style={{border:"none",marginLeft:"63.9%",
width:"510px",
marginTop:"-2.5%",height:"120vh"}} show={show120} 
onHide={handleClose120}>
        <Modal.Header style={{border:"none"}} closeButton>
          <Modal.Title style={{border:"none",fontWeight:"bold",
          fontSize:"14px",
          paddingLeft:"22px",paddingTop:"15px"}}>300 Post Street San Francisco,CA
         </Modal.Title>
      
        </Modal.Header>
        <Modal.Body style={{border:"none"}}>
        <h3 style={{fontWeight:"bold",
          paddingLeft:"22px",paddingTop:"5px"}}>Ramez Shopping</h3>
       <div style={{display:"flex",alignItems:"center",marginLeft:"5%",marginTop:"9%"}}>
         <Button style={{border:"none",background:"#F6F6F6",fontSize:"13px",fontWeight:"bold",color:"grey"}}>1</Button>
          <h6 style={{fontSize:"14px",marginLeft:"4%"}}>ALMARAI DBLE CHOCOLATE MILK SH</h6>  
          <p style={{color:"silver",paddingTop:"4%",paddingLeft:"50px",fontSize:"21px"}}>1.500 <span style={{fontSize:"13px"}}>BHD</span></p>
       </div>
       <div style={{display:"flex",alignItems:"center",marginLeft:"5%"}}>
         <Button style={{border:"none",background:"#F6F6F6",fontSize:"13px",fontWeight:"bold",color:"grey"}}>1</Button>
          <h6 style={{fontSize:"14px",marginLeft:"4%"}}>NIDO MILK POWDER POUCH 2.25KG</h6>  
          <p style={{color:"silver",marginTop:"-2%",paddingLeft:"57px",fontSize:"21px"}}>2.000 <span style={{fontSize:"13px"}}>BHD</span></p>
       </div>
       <div style={{width:"90%",marginTop:"7%",display:"flex",alignItems:"center",justifyContent:"space-between",marginLeft:"5%"}}>
  <h4 style={{fontWeight:"bold"}}>Subtotal </h4>
  <p style={{color:"silver",fontSize:"21px"}}>3.500
   <span style={{fontSize:"13px"}}>BHD</span></p>
</div>
<div style={{width:"90%",marginTop:"1%",display:"flex",alignItems:"center",justifyContent:"space-between",marginLeft:"5%"}}>
  <h4 style={{fontWeight:"bold"}}>Delivery fee</h4>
  <p style={{color:"silver",fontSize:"21px"}}>0.600 
   <span style={{fontSize:"13px"}}>BHD</span></p>

</div>
<div style={{width:"90%",marginTop:"1%",display:"flex",alignItems:"center",justifyContent:"space-between",marginLeft:"5%"}}>
  <h4 style={{fontWeight:"bold"}}>Total </h4>
  <p style={{color:"#E3424B",fontSize:"22px",fontWeight:"bold"}}>4.100
   <span style={{fontSize:"13px",color:"black",fontWeight:"lighter"}}>BHD</span></p>

</div>
<div style={{width:"90%",marginTop:"1%",display:"flex",alignItems:"center",justifyContent:"space-between",marginLeft:"5%"}}>
  <h4 style={{fontWeight:"bold"}}>Credit card</h4>
  <div style={{display:"flex",marginTop:"2%"}}>
    <div style={{width:"15px",height:"15px",borderRadius:"100%",background:"silver"}}></div>
    <div style={{width:"15px",height:"15px",marginLeft:"2px",borderRadius:"100%",background:"silver"}}></div>
    <div style={{width:"15px",height:"15px",marginLeft:"2px",borderRadius:"100%",background:"silver"}}></div>
    <div style={{width:"15px",height:"15px",marginLeft:"2px",borderRadius:"100%",background:"silver"}}></div>
    <p style={{color:"silver",fontSize:"16px",marginTop:"-5px"}}>1211</p>
    </div>

</div>
         <Button style={{marginTop:"8%",width:"80px",marginLeft:"5%",height:"8vh",fontSize:"20px",border:"none",borderRadius:"7px",background:"#F6D56E",color:"black"}}><i class="far fa-comment-alt"></i></Button>
         <Button className="orderlast"style={{marginTop:"8%",width:"310px",height:"8vh",marginLeft:"5%",border:"none",background:"#223142",borderRadius:"8px"}}>Place new order</Button>
        </Modal.Body>
        <Modal.Footer style={{border:"none"}}>
        
        </Modal.Footer>
      </Modal>


     {/* ========================================================== */}

            <Container fluid>
              <Row>
                <SideDrawer />
                
                <Col xs={10} sm={10} lg={10} fluid>
                    <TopBar/>
              

<div className="upcoming mt-4" style={{background:"#F6F6F6",width:"101%",height:"80vh"}}>
<h4 className="upcomingheading" style={{paddingTop:"60px",
fontWeight:"bold",fontSize:"25px"}} 
className=" pl-4 ml-3">Upcoming Orders</h4> 
{/* ----------------CARD NUMBER ONE--------------------- */}
<CardDeck className="order-card-deck">

{
             show6?
<Card className="ordercard1 orderupcomingcard" style={{marginLeft:"3%",marginTop:"4%",
width:"35%",height:"42vh",border:"none",borderRadius:"12px"}}>


  <Card.Header 
  style={{border:"none",background:"white",borderRadius:"15px"}} >
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
    <h6 style={{fontWeight:"bold",color:"#223142"}}>Ramez Shopping</h6>
    <Button style={{color:"silver",background:"white",
    fontSize:"12px",fontWeight:"bold",border:"none"}}>#1DF90E</Button>
  </div>
<div style={{display:"flex"}}>
<i class="far fa-clock ml-2 mt-4" style={{color:"yellow",fontSize:"28px"}}></i>
<Button style={{border:"none", background:"none",
marginLeft:"1%",marginTop:"-3%", fontSize:"12px"}}>
<b style={{color:"grey",fontWeight:"normal"}}> 
Estimated Arrival</b> </Button>
</div>
<h3 className="ordertime" style={{fontWeight:"bold",marginLeft:"15%",marginTop:"-5%"}}>35 min</h3>
  </Card.Header>
  <div style={{width:"100%",display:"flex",justifyContent:"space-evenly"}}>
  <ProgressBar variant="danger" now={100} style={{width:"12%",height:"0.9vh"}}/>
  <ProgressBar variant="danger" now={100} style={{width:"18%",height:"0.9vh"}}/>
  <ProgressBar variant="danger" now={60} style={{width:"60%",height:"0.9vh"}}/>
  </div>
  <Card.Body className="mt-4">
    <Button  onClick={handleShow119} style={{border:"none",height:"7vh",
    borderRadius:"8px",background:"#223142"}} >Details</Button>

    <Button onClick={() => setShow6(false)} className="ml-2" style={{width:"48%"
    ,color:"#223142",fontWeight:"bold",
    border:"none",height:"7vh",borderRadius:"8px",
    background:"#FCDE70"}} >Cancel</Button>
    
  </Card.Body>
</Card>
:null
}
{
  show7?
<Card  className="ordercard1 orderupcomingcard" style={{marginLeft:"3%",marginTop:"4%",
width:"35%",height:"42vh",border:"none",borderRadius:"12px"}}>


  <Card.Header 
  style={{border:"none",background:"white",borderRadius:"15px"}} >
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
 <h6 style={{fontWeight:"bold",color:"#223142"}}>Ramez Shopping</h6>
<Button style={{color:"silver",background:"white",fontSize:"12px",fontWeight:"bold",border:"none"}}>#1DF90E</Button></div>
<div style={{display:"flex"}}>
<i class="far fa-clock ml-2 mt-4" style={{color:"yellow",fontSize:"28px"}}></i>

<Button style={{border:"none", background:"none",
marginLeft:"1%",marginTop:"-3%", fontSize:"12px"}}>
<b style={{color:"grey",fontWeight:"normal"}}> 
Estimated Arrival</b> </Button>
</div>
<h3  className="ordertime" style={{fontWeight:"bold"
,marginLeft:"15%",marginTop:"-5%"}}>60 min</h3>

  </Card.Header>
  <div style={{width:"100%",display:"flex",justifyContent:"space-evenly"}}>
  <ProgressBar variant="danger" now={100} style={{width:"12%",height:"0.9vh"}}/>
  <ProgressBar variant="danger" now={100} style={{width:"18%",height:"0.9vh"}}/>
  <ProgressBar variant="danger" now={60} style={{width:"60%",height:"0.9vh"}}/>
  </div>

  <Card.Body className="mt-4">

    <Button  onClick={handleShow119}  style={{border:"none",height:"7vh",
    borderRadius:"8px",background:"#223142"}} >Details</Button>
    <Button onClick={() => setShow7(false)}  className="ml-2" style={{color:"#223142",fontWeight:"bold",
    border:"none",height:"7vh",borderRadius:"8px",
    background:"#FCDE70"}} >Cancel</Button>
  </Card.Body>


</Card>
:null
}

</CardDeck>

                  </div>
                  
                  <section className="upcoming-orders mt-4">
                      <h2>Upcoming Orders</h2>
                      <Row>
                        <Col className="upcoming-order-card" md={4}>
                          <header>
                            <h6>Ramez Shopping</h6>
                            <p>#1DF90E</p>
                          </header>

                          <span className="d-flex align-items-center">
                            <i class="far fa-clock" style={{color:"yellow",fontSize:"28px",marginBottom: "10px"}}></i>
                              <div className="arrival-time d-flex flex-column">
                                <p>Estimated Arrival</p>
                                <h3><b>35 min</b></h3>
                              </div>
                          </span>

                          <div className="d-flex justify-content-around">
                              <ProgressBar variant="danger" now={100} style={{width:"12%",height:"6px"}}/>
                              <ProgressBar variant="danger" now={100} style={{width:"18%",height:"6px"}}/>
                              <ProgressBar variant="danger" now={60} style={{width:"60%",height:"6px"}}/>
                          </div>

                          <footer className="d-flex justify-content-between">
                            <Button className="details">Details</Button>
                            <Button className="cancel">Cancel</Button>
                          </footer>
                        </Col>
                      </Row>
                  </section>



<h4 style={{paddingTop:"60px",
fontWeight:"bold",fontSize:"25px"}} 
className=" pl-4 ml-3">Previous orders</h4> 
{/* ----------------CARD NUMBER ONE--------------------- */}
<CardDeck  style={{width:"70%",marginLeft:"2%"}}>


<Card className="previous"style={{marginLeft:"3%",marginTop:"4%",
width:"35%",background:"#F6F6F6",border:"none",borderRadius:"6px"}}>


  <Card.Header 
  style={{border:"none",background:"#F6F6F6",borderRadius:"15px"}} >
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
 <h6 style={{fontWeight:"bold",color:"#223142"}}>Ramez Shopping</h6>
<Button style={{color:"green",background:"#DDEEDC",fontSize:"12px",fontWeight:"bold",border:"none"}}>Completed</Button></div>
<div  className="order1"  style={{display:"flex"}}>
<Button className="orderm" style={{border:"none", background:"none",marginLeft:"-5%", fontSize:"13px"}}>&nbsp;&nbsp;
<i class="far fa-calendar"style={{color:"#B2B2B2"}}></i> &nbsp;<b style={{color:"#E0E0E0",fontWeight:"normal"}}> 
September 16,2020</b> </Button>
    <Button className="ordert" style={{border:"none", background:"none", fontSize:"13px"}}> 
    <i class="far fa-clock" style={{color:"#B2B2B2",}}></i> &nbsp; 
    <b style={{fontWeight:"normal",color:"#E0E0E0"}}> 11:54 PM</b></Button>
</div>
  </Card.Header>
  <Card.Body>
    <Card.Title className="pall" style={{fontSize:"15px"}}>
      <Button style={{background:"white",color:"black",border:"none",fontSize:"12px"}}><b>1</b></Button> 
&nbsp;<b  className="pal pall" style={{fontWeight:"normal"}}>ALMARAI DBLE CHOCOLATE MILK SH</b></Card.Title>
    <Card.Title style={{fontSize:"15px"}}><Button style={{background:"white",color:"black",border:"none",fontSize:"12px"}}><b>1</b></Button> &nbsp;<b  className="pal" style={{fontWeight:"normal"}} >NIDO MILK POWDER POUCH 2.25KG</b></Card.Title>   
    <Card.Text style={{visibility:"invisible",color:"#F6F6F6"}}>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button onClick={handleShow120}   style={{width:"48%",border:"none",height:"7vh",
    borderRadius:"8px",background:"#223142"}} >Details</Button>
    <Button onClick={handleShow2}  className="ml-2 repeat" 
    style={{width:"48%",border:"none",height:"7vh",borderRadius:
    "8px",background:"#E3424B"}} >Repeat Order</Button>
  </Card.Body>


</Card>


<Card className="previous" style={{marginTop:"4%",
width:"35%",background:"#F6F6F6",border:"none",borderRadius:"6px"}}>



  <Card.Header 
  style={{border:"none",background:"#F6F6F6",borderRadius:"15px"}} >
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
 <h6 style={{fontWeight:"bold",color:"#223142"}}>Yasmin Cosmatics</h6>
<Button style={{color:"pink",background:"#FDDDDF",fontSize:"12px",fontWeight:"bold",border:"none"}}>Canceled</Button></div>
<div style={{display:"flex"}}>
<Button style={{border:"none", background:"none",marginLeft:"-5%", fontSize:"13px"}}>&nbsp;&nbsp;<i class="far fa-calendar"style={{color:"#B2B2B2"}}></i> &nbsp;<b style={{color:"#E0E0E0",fontWeight:"normal"}}>August 28,2020</b> </Button>
    <Button style={{border:"none", background:"none", fontSize:"13px"}}> <i class="far fa-clock" style={{color:"#B2B2B2",}}></i>
     &nbsp; <b style={{fontWeight:"normal",color:"#E0E0E0"}}> 12:06 AM</b></Button>
</div>
  </Card.Header>


  <Card.Body>
    <Card.Title style={{fontSize:"15px"}}>
    <Button style={{background:"white",color:"#223142",border:"none",fontSize:"12px"}}>
    <b>3</b></Button> &nbsp;<b  className="pal" style={{fontWeight:"normal"}} > OLIV ALOE SHOWER GEL 200 ML</b></Card.Title>
    <Card.Title style={{fontSize:"15px"}}><Button style={{background:"white",color:"black",border:"none",fontSize:"12px"}}><b>1</b></Button><b  className="pal" style={{fontWeight:"normal"}} > &nbsp; OLIV ALOE CLEANSING MILK 200ML</b></Card.Title>
    {/* <h6>1 More item</h6>    */}
    <Card.Text style={{visibility:"invisible",color:"#F6F6F6"}}>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button onClick={handleShow120}   style={{width:"48%",border:"none",height:"7vh",
    borderRadius:"8px",background:"#223142"}} >Details</Button>
    <Button onClick={handleShow2}  className="ml-2 repeat" style={{width:"48%",border:"none",height:"7vh",borderRadius:"8px",background:"#E3424B"}} >Repeat Order</Button>
  </Card.Body>


</Card>

                  </CardDeck>
                  </Col>
                  </Row>
</Container>
<div className="mt-4">
<Footer/>
</div>
            </>
        )
    
}
