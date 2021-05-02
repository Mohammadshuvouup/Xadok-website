import React, { useState,useEffect } from 'react';
import { Modal, Button, Form, Row } from 'react-bootstrap';
import { Trans, useTranslation } from 'react-i18next';
import '../../../css/setting_discount.css';


const Discounts = (props) => {
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

        <Modal show={props.shows7} className="discount-list" onHide={props.handleCloses7} animation={false} >
            <Modal.Header closeButton>
                <Modal.Title className="title">{t("Discounts.Discounts")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="discount-box flex-column">
                        <h6>KL7L24</h6>
                        <p>+ valid until 30 Sep 2020</p>
               </Row>

                <Row className="discount-box flex-column">
                        
                            <h6 className="red">AQ1P70</h6>
                            <p>+ valid until 15 Nov 2020</p>
                        
                </Row>
               

            </Modal.Body>
        </Modal>
    );
}
export default Discounts;