import React, {useState,useEffect} from 'react'
import Footer from "../Components/footer";
import img from "../xadok/pexels-photo-102104.jpeg"
import TopBar from './topBar';
import SideDrawer from './SideDrawer/SideDrawer';
// import img from "../xadok/pexels-photo-102104.jpeg"
import "../css/exploring.css";
import { Image, Row, Col, Container, Modal, Card, CardDeck, Button, Carousel } from 'react-bootstrap'
import { Trans, useTranslation } from 'react-i18next';
import "../App.css";

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
    if(num > 0){
      setNum(num - 1);
      }
      else{
      }
  };
  return (
 
    <Modal className="hidescroll productpopup "
      {...props}
      size="xl" 
      aria-labelledby="contained-modal-title-vcenter"
      centered

      style ={{height:"90vh",width:"70%",marginLeft:"15%",overflow:"auto"}}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="topbody" style={{display:"flex"}}>
            <div>
          <div style={{
          width:"297px",
          height:"300px",
          borderTopRightRadius:"15px",
          borderTopLeftRadius:"15px"
          ,border:"1px solid silver",marginLeft:"5%",marginTop:"3%"}}>
            <img src={img} style={{width:"100%",height:"100%",
            borderTopRightRadius:"15px",borderTopLeftRadius:"15px"}}/>
          </div>

          <div style={{marginLeft:"5%",display:"flex"}}>
          <div style={{width:"78px",height:"67px",border:"1px solid silver",borderBottomLeftRadius:"10px"}}>
            <img src={img}  style={{width:"100%",height:"100%",borderBottomLeftRadius:"10px"}}/>
          </div>
          <div style={{width:"78px",height:"67px",border:"1px solid silver",}}>
            <img src={img}  style={{width:"100%",height:"100%",}}/>
          </div>
          <div style={{width:"78px",height:"67px",border:"1px solid silver",}}>
            <img src={img}  style={{width:"100%",height:"100%",}}/>
          </div>
          <div style={{width:"78px",height:"67px",border:"1px solid silver",borderBottomRightRadius:"10px"}}>
            <img src={img}  style={{width:"100%",height:"100%",borderBottomRightRadius:"10px"}}/>
          </div>
          </div>
          </div>
<div style={{marginLeft:"4%"}}>
  <h5 className="mt-1" style={{width:"85%",fontSize:"23px"}}>KRAFT CREAM CHEESE SPREAD ORIGINAL 230 GR</h5>
  <h6 className="mt-4 pt-3" style={{fontSize:"16px",fontWeight:"bold"}}>Categeory: <span style={{fontWeight:"lighter"}} > Supermarket</span></h6>
  <h6 style={{fontSize:"16px",fontWeight:"bold"}}>Description: <span style={{fontWeight:"lighter"}}>Kraft Cream Cheese Spread <br></br>Original 3 X 230 gr</span></h6>
  <del className="text-muted" style={{fontSize:"20px",fontWeight:"normal",marginTop:"-4%"}}>2.090</del>
  <div style={{display:"flex",justifyContent:"space-between",width:"107%"}}>
  <h3 style={{color:"#E3424B",fontWeight:"bold",fontSize:"27px"}}>1.050<span style={{fontSize:"14px",color:"silver"}}>BHD</span></h3>
  <div className="proucttag" 
  style={{width:"10%",marginLeft:"18%",background:"#E3424B",
  fontSize:"12px",textAlign:"center",height:"4vh",color:"white",
  clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
  <p className="pt-1 pl-2" style={{}}>25%</p>
 </div>
  </div>

  <p style={{fontSize:"13px",color:"silver"}}>{t("subCategory.add-to-cart_note")}</p>
      <div className="button-add" style={{display:"flex",marginLeft:"30%",marginTop:"2%"}}>
       <Button style={{background:"#F6F6F6",
       color:"black",
       fontWeight:"bold",width:"40px",
       height:"40px",fontSize:"20px",
       textAlign:"center", display:"flex",alignItems:"center",
       border:"none",borderTopLeftRadius:"12px",marginLeft:"-3%",
       borderBottomLeftRadius:"12px"}} onClick={minus}>-</Button>
     <Button style={{border:"none",color:"black",background:"white",
     marginLeft:"2%"}}>{num}</Button>
       <Button  style={{background:"#F6F6F6",color:"black",display:"flex",
       alignItems:"center",
       fontWeight:"bold",width:"40px",height:"40px",fontSize:"20px",
       textAlign:"center", 
       border:"none",borderTopRightRadius:"12px",marginLeft:"2%",
       borderBottomRightRadius:"12px"}} onClick={plus}>+</Button>
        </div>
     <Button className="button-cart addcartbutton" style={{marginLeft:"60%",
     position:"relative",marginTop:"-17%",
     border:"none",background:"#FFDD73", color:"black"}}>
       <i class="fas fa-shopping-cart"></i> &nbsp;
       {t("explore.add-to-cart")}</Button>
     <Button className="button-heart addcartbutton-h" style={{border:"none",color:"#BDBDBD",
     position:"absolute",marginTop:"-4.5%", marginLeft:"2%",
     background:"#F6F6F6"}}>
       <i class="fas fa-heart"></i></Button>
</div>


          </div>
        </Modal.Title>
      </Modal.Header > 
      <Modal.Body style={{border:"none"}}>
        <div  style={{background:"#F6F6F6",marginTop:"-2%"}}>
      <h4 className="pl-4 pt-2 ml-2">{t("subCategory.Alternative-Products")}</h4>

      <Carousel  style={{background:"#F6F6F6"}}>
  <Carousel.Item style={{background:"#F6F6F6"}}>
  <CardDeck className="ml-3 mt-3 pt-3 alternative" >

<Card  style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}>
<Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
 <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
     <p className="pt-1 pl-2" style={{}}>25%</p>
 </div>
 </div>
 <p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
 Milk & Hazelnut</p>
<Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;{t("explore.add-to-cart")}</small>
</Card.Footer>
</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
<Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
 <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
     <p className="pt-1 pl-2" style={{}}>25%</p>
 </div>
 </div>
 <p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
 Milk & Hazelnut</p>
<Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;{t("explore.add-to-cart")}</small>
</Card.Footer>
</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
<Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
 <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
     <p className="pt-1 pl-2" style={{}}>25%</p>
 </div>
 </div>
 <p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
 Milk & Hazelnut</p>
<Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;{t("explore.add-to-cart")}</small>
</Card.Footer>
</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}>
<Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
 <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
     <p className="pt-1 pl-2" style={{}}>25%</p>
 </div>
 </div>
 <p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
 Milk & Hazelnut</p>
<Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;{t("explore.add-to-cart")}</small>
</Card.Footer>
</Card>
</CardDeck>
  </Carousel.Item>
  <Carousel.Item style={{background:"#F6F6F6"}}>
  <CardDeck className="ml-3 mt-3 pt-3  alternative" style={{background:"#F6F6F6"}} >
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}>
<Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
 <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
     <p className="pt-1 pl-2" style={{}}>25%</p>
 </div>
 </div>
 <p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
 Milk & Hazelnut</p>
<Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;{t("explore.add-to-cart")}</small>
</Card.Footer>
</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
<Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
 <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
     <p className="pt-1 pl-2" style={{}}>25%</p>
 </div>
 </div>
 <p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
 Milk & Hazelnut</p>
<Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;{t("explore.add-to-cart")}</small>
</Card.Footer>
</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
<Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
 <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
     <p className="pt-1 pl-2" style={{}}>25%</p>
 </div>
 </div>
 <p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
 Milk & Hazelnut</p>
<Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;{t("explore.add-to-cart")}</small>
</Card.Footer>
</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
<Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
 <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
     <p className="pt-1 pl-2" style={{}}>25%</p>
 </div>
 </div>
 <p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
 Milk & Hazelnut</p>
<Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;{t("explore.add-to-cart")}</small>
</Card.Footer>
</Card>
</CardDeck>
  </Carousel.Item>

</Carousel>
</div>

{/* =========================New ArivaL----------------------- */}

      </Modal.Body>
        <h4 className="pl-4">{t("explore.similar-products")}</h4>
      <Modal.Footer style={{border:"none"}}>
    

<Carousel  style={{background:"#F6F6F6"}}>
<Carousel.Item style={{background:"#F6F6F6"}}>
<CardDeck className="ml-3 mt-4 pt-4  alternative" >

<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
<Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
<div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
<p className="pt-1 pl-2" style={{}}>25%</p>
</div>
</div>
<p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
Milk & Hazelnut</p>
<Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
<small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;{t("explore.add-to-cart")}</small>
</Card.Footer>
</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
<Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
<div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
<p className="pt-1 pl-2" style={{}}>25%</p>
</div>
</div>
<p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
Milk & Hazelnut</p>
<Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
<small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;{t("explore.add-to-cart")}</small>
</Card.Footer>
</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
<Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
<div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
<p className="pt-1 pl-2" style={{}}>25%</p>
</div>
</div>
<p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
Milk & Hazelnut</p>
<Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
<small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;{t("explore.add-to-cart")}</small>
</Card.Footer>
</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}>
<Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
<div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
<p className="pt-1 pl-2" style={{}}>25%</p>
</div>
</div>
<p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
Milk & Hazelnut</p>
<Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
<small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;{t("explore.add-to-cart")}</small>
</Card.Footer>
</Card>
</CardDeck>
</Carousel.Item>
<Carousel.Item style={{background:"#F6F6F6"}}>
<CardDeck className="ml-3 mt-4 pt-4  alternative" style={{background:"#F6F6F6"}} >
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}>
<Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
<div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
<p className="pt-1 pl-2" style={{}}>25%</p>
</div>
</div>
<p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
Milk & Hazelnut</p>
<Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
<small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;{t("explore.add-to-cart")}</small>
</Card.Footer>
</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
<Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
<div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
<p className="pt-1 pl-2" style={{}}>25%</p>
</div>
</div>
<p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
Milk & Hazelnut</p>
<Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
<small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;{t("explore.add-to-cart")}</small>
</Card.Footer>
</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
<Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
<div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
<p className="pt-1 pl-2" style={{}}>25%</p>
</div>
</div>
<p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
Milk & Hazelnut</p>
<Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
<small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;{t("explore.add-to-cart")}</small>
</Card.Footer>
</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
<Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
<div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
<p className="pt-1 pl-2" style={{}}>25%</p>
</div>
</div>
<p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
Milk & Hazelnut</p>
<Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
<small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;{t("explore.add-to-cart")}</small>
</Card.Footer>
</Card>
</CardDeck>
</Carousel.Item>

</Carousel>
      </Modal.Footer>
    </Modal>
  );
}

export default function Exploring() {
  const { t, i18n } = useTranslation();
   

    useEffect(() => {
      
      let language = localStorage.getItem("language");
  
      // console.log("LANGUAGE SELECTED", language);
    
      if (language && language.length !== 0) {
        i18n.changeLanguage(language)
      }
  
    },[]);
  
  const [modalShow, setModalShow] = React.useState(false);

  return(
  <React.Fragment>

  <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
  />

  <Container className="product-page-container" fluid>
    <Row>

      <SideDrawer />
  
      <Col xs={10} sm={10} lg={10}>
        <TopBar />
        {/*========================== Best deals ==========================*/}

          <Row className="mt-4">
            <Col>
                <h3 className="pl-4 ml-3">{t("exploring.Best-Deals")}<span>{t("exploring.See-All")} > </span></h3>
            </Col>
          </Row>

          <Row className="item-list">
            <Col sm={5} md={4} lg={3} xl={2} className="item">
            <Image  onClick={() => setModalShow(true)} src={img} />
              <div  className="price-box">
                  <p className="pl-2 old-price"><del>1.200</del></p>
                  <h4 className="pl-2 item-price">0.835<span className="currency-symbol">BDH</span></h4>
                  <div className="discount" >
                      <p className="pt-1 pl-3 ptag">25%</p>
                  </div>
              </div>
          
              <p className="item-description">Digestive Choco 200g With Milk & Hazelnut</p>
              <button className="addcart_btn"><i className="fas fa-shopping-cart mr-2"></i> {t("explore.add-to-cart")}  </button>
            </Col>
          
            <Col sm={5} md={4} lg={3} xl={2} className="item">
              <div className="thumbnail">
                  <Image  onClick={() => setModalShow(true)} src={img} />
              </div>
          
              <div  className="price-box">
                  <p className="pl-2 old-price"><del>1.200</del></p>
                  <h4 className="pl-2 item-price">0.835<span className="currency-symbol">BDH</span></h4>
                  <div className="discount" >
                      <p className="pt-1 pl-3 ptag">25%</p>
                  </div>
              </div>
          
              <p className="item-description">Digestive Choco 200g With Milk & Hazelnut</p>
              <button className="addcart_btn"><i className="fas fa-shopping-cart mr-2"></i> {t("explore.add-to-cart")}  </button>
            </Col>
          
            <Col sm={5} md={4} lg={3} xl={2} className="item">
            <Image  onClick={() => setModalShow(true)} src={img} />
              <div  className="price-box">
                  <p className="pl-2 old-price"><del>1.200</del></p>
                  <h4 className="pl-2 item-price">0.835<span className="currency-symbol">BDH</span></h4>
                  <div className="discount" >
                      <p className="pt-1 pl-3 ptag">25%</p>
                  </div>
              </div>
          
              <p className="item-description">Digestive Choco 200g With Milk & Hazelnut</p>
              <button className="addcart_btn"><i className="fas fa-shopping-cart mr-2"></i> {t("explore.add-to-cart")}  </button>
            </Col>
          
            <Col sm={5} md={4} lg={3} xl={2} className="item">
            <Image  onClick={() => setModalShow(true)} src={img} />
              <div  className="price-box">
                  <p className="pl-2 old-price"><del>1.200</del></p>
                  <h4 className="pl-2 item-price">0.835<span className="currency-symbol">BDH</span></h4>
                  <div className="discount" >
                      <p className="pt-1 pl-3 ptag">25%</p>
                  </div>
              </div>
          
              <p className="item-description">Digestive Choco 200g With Milk & Hazelnut</p>
              <button className="addcart_btn"><i className="fas fa-shopping-cart mr-2"></i> {t("explore.add-to-cart")}  </button>
            </Col>
          
            <Col sm={5} md={4} lg={3} xl={2} className="item">
            <Image  onClick={() => setModalShow(true)} src={img} />
              <div  className="price-box">
                  <p className="pl-2 old-price"><del>1.200</del></p>
                  <h4 className="pl-2 item-price">0.835<span className="currency-symbol">BDH</span></h4>
                  <div className="discount" >
                      <p className="pt-1 pl-3 ptag">25%</p>
                  </div>
              </div>
          
              <p className="item-description">Digestive Choco 200g With Milk & Hazelnut</p>
              <button className="addcart_btn"><i className="fas fa-shopping-cart mr-2"></i> {t("explore.add-to-cart")}  </button>
            </Col>
          </Row>

        {/*========================== New ArivaL ==========================*/}

          <Row className="mt-4 peach-bg">
            <Col>
                <h3 className="pl-4 ml-3">{t("exploring.New-Arrival")}<span>{t("exploring.See-All")} > </span></h3>
            </Col>
          </Row>

          <Row className="item-list peach-bg">
            
            <Col sm={5} md={4} lg={3} xl={2} className="item">
            <Image  onClick={() => setModalShow(true)} src={img} />
              <div  className="price-box">
                  <p className="pl-2 old-price"><del>1.200</del></p>
                  <h4 className="pl-2 item-price">0.835<span className="currency-symbol">BDH</span></h4>
                  <div className="discount" >
                      <p className="pt-1 pl-3 ptag">25%</p>
                  </div>
              </div>
          
              <p className="item-description">Digestive Choco 200g With Milk & Hazelnut</p>
              <button className="addcart_btn"><i className="fas fa-shopping-cart mr-2"></i> {t("explore.add-to-cart")}  </button>
            </Col>
            
            <Col sm={5} md={4} lg={3} xl={2} className="item">
              <div className="thumbnail">
                  <Image  onClick={() => setModalShow(true)} src={img} />
              </div>
          
              <div  className="price-box">
                  <p className="pl-2 old-price"><del>1.200</del></p>
                  <h4 className="pl-2 item-price">0.835<span className="currency-symbol">BDH</span></h4>
                  <div className="discount" >
                      <p className="pt-1 pl-3 ptag">25%</p>
                  </div>
              </div>
          
              <p className="item-description">Digestive Choco 200g With Milk & Hazelnut</p>
              <button className="addcart_btn"><i className="fas fa-shopping-cart mr-2"></i> {t("explore.add-to-cart")}  </button>
            </Col>
            
            <Col sm={5} md={4} lg={3} xl={2} className="item">
            <Image  onClick={() => setModalShow(true)} src={img} />
              <div  className="price-box">
                  <p className="pl-2 old-price"><del>1.200</del></p>
                  <h4 className="pl-2 item-price">0.835<span className="currency-symbol">BDH</span></h4>
                  <div className="discount" >
                      <p className="pt-1 pl-3 ptag">25%</p>
                  </div>
              </div>
          
              <p className="item-description">Digestive Choco 200g With Milk & Hazelnut</p>
              <button className="addcart_btn"><i className="fas fa-shopping-cart mr-2"></i> {t("explore.add-to-cart")}  </button>
            </Col>
            
            <Col sm={5} md={4} lg={3} xl={2} className="item">
            <Image  onClick={() => setModalShow(true)} src={img} />
              <div  className="price-box">
                  <p className="pl-2 old-price"><del>1.200</del></p>
                  <h4 className="pl-2 item-price">0.835<span className="currency-symbol">BDH</span></h4>
                  <div className="discount" >
                      <p className="pt-1 pl-3 ptag">25%</p>
                  </div>
              </div>
          
              <p className="item-description">Digestive Choco 200g With Milk & Hazelnut</p>
              <button className="addcart_btn"><i className="fas fa-shopping-cart mr-2"></i> {t("explore.add-to-cart")}  </button>
            </Col>
            
            <Col sm={5} md={4} lg={3} xl={2} className="item">
            <Image  onClick={() => setModalShow(true)} src={img} />
              <div  className="price-box">
                  <p className="pl-2 old-price"><del>1.200</del></p>
                  <h4 className="pl-2 item-price">0.835<span className="currency-symbol">BDH</span></h4>
                  <div className="discount" >
                      <p className="pt-1 pl-3 ptag">25%</p>
                  </div>
              </div>
          
              <p className="item-description">Digestive Choco 200g With Milk & Hazelnut</p>
              <button className="addcart_btn"><i className="fas fa-shopping-cart mr-2"></i> {t("explore.add-to-cart")}  </button>
            </Col>
          </Row>

        {/*========================== Top Seller ==========================*/}

          <Row className="mt-4">
            <Col>
              <h3 className="pl-4 ml-3">{t("exploring.Top-Seller")}<span>{t("exploring.See-All")} > </span></h3>
            </Col>
          </Row>

          <Row className="item-list">
        <Col sm={5} md={4} lg={3} xl={2} className="item">
        <Image  onClick={() => setModalShow(true)} src={img} />
          <div  className="price-box">
              <p className="pl-2 old-price"><del>1.200</del></p>
              <h4 className="pl-2 item-price">0.835<span className="currency-symbol">BDH</span></h4>
              <div className="discount" >
                  <p className="pt-1 pl-3 ptag">25%</p>
              </div>
          </div>
      
          <p className="item-description">Digestive Choco 200g With Milk & Hazelnut</p>
          <button className="addcart_btn"><i className="fas fa-shopping-cart mr-2"></i> {t("explore.add-to-cart")}  </button>
        </Col>
      
        <Col sm={5} md={4} lg={3} xl={2} className="item">
          <div className="thumbnail">
              <Image  onClick={() => setModalShow(true)} src={img} />
          </div>
      
          <div  className="price-box">
              <p className="pl-2 old-price"><del>1.200</del></p>
              <h4 className="pl-2 item-price">0.835<span className="currency-symbol">BDH</span></h4>
              <div className="discount" >
                  <p className="pt-1 pl-3 ptag">25%</p>
              </div>
          </div>
      
          <p className="item-description">Digestive Choco 200g With Milk & Hazelnut</p>
          <button className="addcart_btn"><i className="fas fa-shopping-cart mr-2"></i> {t("explore.add-to-cart")}  </button>
        </Col>
      
        <Col sm={5} md={4} lg={3} xl={2} className="item">
        <Image  onClick={() => setModalShow(true)} src={img} />
          <div  className="price-box">
              <p className="pl-2 old-price"><del>1.200</del></p>
              <h4 className="pl-2 item-price">0.835<span className="currency-symbol">BDH</span></h4>
              <div className="discount" >
                  <p className="pt-1 pl-3 ptag">25%</p>
              </div>
          </div>
      
          <p className="item-description">Digestive Choco 200g With Milk & Hazelnut</p>
          <button className="addcart_btn"><i className="fas fa-shopping-cart mr-2"></i> {t("explore.add-to-cart")}  </button>
        </Col>
      
        <Col sm={5} md={4} lg={3} xl={2} className="item">
        <Image  onClick={() => setModalShow(true)} src={img} />
          <div  className="price-box">
              <p className="pl-2 old-price"><del>1.200</del></p>
              <h4 className="pl-2 item-price">0.835<span className="currency-symbol">BDH</span></h4>
              <div className="discount" >
                  <p className="pt-1 pl-3 ptag">25%</p>
              </div>
          </div>
      
          <p className="item-description">Digestive Choco 200g With Milk & Hazelnut</p>
          <button className="addcart_btn"><i className="fas fa-shopping-cart mr-2"></i> {t("explore.add-to-cart")}  </button>
        </Col>
      
        <Col sm={5} md={4} lg={3} xl={2} className="item">
        <Image  onClick={() => setModalShow(true)} src={img} />
          <div  className="price-box">
              <p className="pl-2 old-price"><del>1.200</del></p>
              <h4 className="pl-2 item-price">0.835<span className="currency-symbol">BDH</span></h4>
              <div className="discount" >
                  <p className="pt-1 pl-3 ptag">25%</p>
              </div>
          </div>
      
          <p className="item-description">Digestive Choco 200g With Milk & Hazelnut</p>
          <button className="addcart_btn"><i className="fas fa-shopping-cart mr-2"></i> {t("explore.add-to-cart")}  </button>
        </Col>
      </Row>
      </Col>
    </Row>
  </Container>

  <Footer className="mt-4" />


  </React.Fragment>
  );
}
