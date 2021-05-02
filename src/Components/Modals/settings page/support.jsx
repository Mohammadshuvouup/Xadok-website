import React, { useState,useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { Trans, useTranslation } from 'react-i18next';
import '../../../css/setting_support.css';


const Support = (props) => {
    const { t, i18n } = useTranslation();
     
  
    useEffect(() => {
      
      let language = localStorage.getItem("language");
  
      // console.log("LANGUAGE SELECTED", language);
    
      if (language && language.length !== 0) {
        i18n.changeLanguage(language)
      }
  
    }, []); 
    
    const [show3, setShow3] = useState(false);
    return (

        <Modal show={props.shows5} className="support-box" onHide={props.handleCloses5} animation={false} >
            <Modal.Header  closeButton>
                <Modal.Title className="titel">{t("Support.Support")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row  className="support-gap">
  
                    <Col className="support-icon" md={2}>
                        <i class="far fa-envelope"></i>
                    </Col>
                    <Col  className="support-text" md={10}>
                        <h6>{t("Support.LIVE-CHAT")}</h6>
                        <p>Waiting time:<b>5 min</b></p>
                        {/* <i class="fas fa-chevron-right"></i> */}
                    </Col>
                    
                       

                </Row>
                <Row  className="support-gap">
  
                    <Col className="support-icon" md={2}>
                        <i class="far fa-file-alt"></i>
                    </Col>
                       
                    
                    <Col className="support-text" md={10}>
                        <h6>{t("Support.FAQ")}</h6>
                        <p >182 Park Row Street,Suit 8 </p>
                        {/* <i class="fas fa-chevron-right"></i> */}
                    </Col>
                   

                </Row>
                <Row  className="support-gap">
  
                    <Col className="support-icon" md={2} >
                        <i class="fas fa-phone-alt"></i>
                    </Col>
                    <Col className="support-text" md={10}>
                        <h6>{t("Support.PHONE-NUMBER")}</h6>
                        <p>+1(987)1234098</p>
                    </Col>
 

                </Row>
            </Modal.Body>

            <Modal.Footer>
   
            </Modal.Footer>
        </Modal>
    );
}

export default Support;
