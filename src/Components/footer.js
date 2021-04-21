import React, { Component,useEffect } from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import logo from "../logo/whitelogo.png";
import facebook from "../social/whatsapp.svg";
import insta from "../social/instagram.svg"
import twitter from "../social/twitter.svg"
import whatsapp from "../social/facebook.svg"
import { Trans, useTranslation } from 'react-i18next';
import './../App.css';


const Footer = () => {

  const { t, i18n } = useTranslation();

  useEffect(() => {
    
    let language = localStorage.getItem("language");

    // console.log("LANGUAGE SELECTED", language);
  
    if (language && language.length !== 0) {
      i18n.changeLanguage(language)
    }

  },[]);

  
  return (
    <>
    <Container style={{background:"#223142",color:"white"}} fluid>
    <Row className="footer">
      <Col xs={12} md={3}>
        <div className="l"  style= {{width:"125px",height:"120px",paddingTop:"40px"}}>
          <img className="pl-4 " src={logo} style={{width:"100%",height:"100%"}}/>
          </div>
          <h4 className="pl-4 pt-4 footer-text" >
        "{t("footer.footer-welcome")} </h4>
      </Col>
      <Col id="no" style={{fontSize:"12px",fontWeight:"normal",marginTop:"15px"}}>
      <h4  style={{fontSize:"15px",fontWeight:"bold",marginTop:"40px"}}>{t("footer.latest-offers")}</h4>
            <h4 className="mt-2" style={{ fontSize: "13px", fontWeight: "normal" }}>{t("footer.national-day-set")}</h4>
            <h4 style={{ fontSize: "13px", fontWeight: "normal", }}>{t("footer.weekende-offer")}</h4>
            <h4 style={{ fontSize: "13px", fontWeight: "normal" }}>{t("footer.camping-seasons")}</h4>
      </Col>
    
<Col id="no" style={{fontSize:"12px",fontWeight:"normal",marginTop:"15px"}}>
            <h4 style={{ fontSize: "15px", fontWeight: "bold", marginTop: "40px" }}>{t("footer.categories")}</h4>
            <h4 className="mt-2" style={{ fontSize: "13px", fontWeight: "normal" }}>{t("footer.boutique")}</h4>
            <h4 style={{ fontSize: "13px", fontWeight: "normal", }}>{t("footer.electronics")}</h4>
      <h4 style={{fontSize:"13px",fontWeight:"normal"}}>{t("footer.camping-seasons")}</h4>
            <h4 style={{ fontSize: "13px", fontWeight: "normal" }}>{t("footer.supermarket")}</h4>
            <h4 style={{ fontSize: "13px", fontWeight: "normal" }}>{t("footer.delivery-taxi")}</h4>

      </Col>
      <Col xs={12} md={3} className="ab" style={{fontSize:"12px",fontWeight:"normal",marginTop:"15px"}}>
            <h4 className="about " style={{ fontSize: "15px", fontWeight: "bold", marginTop: "40px" }}>{t("footer.about-us")}</h4>
      <h4 className="mt-2 about f" style={{fontSize:"13px",fontWeight:"normal"}}>{t("footer.help")}</h4>
      <h4 className="about f" style={{fontSize:"13px",fontWeight:"normal",}}>{t("footer.custom-service")}</h4>
            <h4 className="about f" style={{ fontSize: "13px", fontWeight: "normal" }}>{t("footer.contacts")}</h4>
      </Col>
      <Col xs={12} md={3} className="abc" style={{marginTop:"15px"}}>
      <h4 style={{fontSize:"15px",fontWeight:"bold",marginTop:"40px"}}>{t("footer.contacts")}:</h4>
        <ul>
          <li><a href="tel:+97333505995"><img id="tw"src={whatsapp}/><span className="contact_no">+97333505995</span></a></li>
          <li><a href="http://facebook.com"><img src={facebook} /></a></li>
          <li><a href="http://twitter.com"><img src={twitter} /></a></li>
          <li><a href="http://instagram.com"><img src={insta} /></a></li>
        </ul>

      </Col>


    </Row>
   
   <div className="w-100 footer" style={{height:"12vh"}}>
          <h6 className="footer" style={{ textAlign: "center", color: "white", fontWeight: "normal", paddingTop: "3%" }}> {t("footer.Copyright")}</h6>
   </div>
  </Container>

</> 

)
}


export default Footer;
