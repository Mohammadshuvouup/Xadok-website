import React, { Component } from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import logo from "../logo/whitelogo.png";
import facebook from "../social/whatsapp.svg";
import insta from "../social/instagram.svg"
import twitter from "../social/twitter.svg"
import whatsapp from "../social/facebook.svg"
import "../App.css"

export default class footer extends Component {
    render() {
        return (
            <>
            <Container style={{background:"#223142",color:"white"}} fluid>
            <Row>
              <Col xs={12} md={3}>
                <div className="l"  style= {{width:"125px",height:"120px",paddingTop:"40px"}}>
                  <img className="pl-4 " src={logo} style={{width:"100%",height:"100%"}}/>
                  </div>
                  <h4 className="pl-4 pt-4 ll "style={{fontSize:"14px",fontWeight:"normal"
                  ,marginTop:"15px"}}>
                Welcome! This website is (quite<br id="no"></br> obviously) a small text generator.Its<br id="no"></br> fairly self explanatory</h4>
              </Col>
              <Col id="no" style={{fontSize:"12px",fontWeight:"normal",marginTop:"15px"}}>
              <h4  style={{fontSize:"15px",fontWeight:"bold",marginTop:"40px"}}>Latest offers</h4>
              <h4 className="mt-2" style={{fontSize:"13px",fontWeight:"normal"}}>National Day Set</h4>
              <h4 style={{fontSize:"13px",fontWeight:"normal",}}>Weekende Offer</h4>
              <h4 style={{fontSize:"13px",fontWeight:"normal"}}>Camping Seasons</h4>
              </Col>
            
<Col id="no" style={{fontSize:"12px",fontWeight:"normal",marginTop:"15px"}}>
              <h4 style={{fontSize:"15px",fontWeight:"bold",marginTop:"40px"}}>Categories</h4>
              <h4 className="mt-2" style={{fontSize:"13px",fontWeight:"normal"}}>Boutique</h4>
              <h4 style={{fontSize:"13px",fontWeight:"normal",}}>Electronics</h4>
              <h4 style={{fontSize:"13px",fontWeight:"normal"}}>Camping Seasons</h4>
              <h4 style={{fontSize:"13px",fontWeight:"normal"}}>Supermarket</h4>
              <h4 style={{fontSize:"13px",fontWeight:"normal"}}>Delivery Taxi</h4>

              </Col>
              <Col xs={12} md={3} className="ab" style={{fontSize:"12px",fontWeight:"normal",marginTop:"15px"}}>
              <h4 className="about " style={{fontSize:"15px",fontWeight:"bold",marginTop:"40px"}}>About Us</h4>
              <h4 className="mt-2 about f" style={{fontSize:"13px",fontWeight:"normal"}}>Help</h4>
              <h4 className="about f" style={{fontSize:"13px",fontWeight:"normal",}}>Custom Service</h4>
              <h4 className="about f" style={{fontSize:"13px",fontWeight:"normal"}}>Contacts</h4>
              </Col>
              <Col xs={12} md={3} className="abc" style={{marginTop:"15px"}}>
              <h4 style={{fontSize:"15px",fontWeight:"bold",marginTop:"40px"}}>Contacts:</h4>
                <ul>
                  <li><a href="tel:+97333505995"><img id="tw"src={whatsapp}/><span className="contact_no">+97333505995</span></a></li>
                  <li><a href="http://facebook.com"><img src={facebook} /></a></li>
                  <li><a href="http://twitter.com"><img src={twitter} /></a></li>
                  <li><a href="http://instagram.com"><img src={insta} /></a></li>
                </ul>
  
              </Col>


            </Row>
           
           <div className="w-100 footer" style={{height:"12vh"}}>
           <h6 className="footer" style={{textAlign:"center",color:"white",fontWeight:"normal",paddingTop:"3%"}}> © Copyright 2020 <span style={{color:"#FFDD73"}}>www.xadok.com</span> All Right Reserved.</h6>
           </div>
          </Container>

 </> 

        )
    }
}
