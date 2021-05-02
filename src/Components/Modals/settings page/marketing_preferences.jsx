import React, { useState,useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Trans, useTranslation } from 'react-i18next';
import '../../../css/setting_general.css'



const MarketingPreferences = (props) => {
      const { t, i18n } = useTranslation();
   

    useEffect(() => {
      
      let language = localStorage.getItem("language");
  
      // console.log("LANGUAGE SELECTED", language);
    
      if (language && language.length !== 0) {
        i18n.changeLanguage(language)
      }
  
    },[]); 


  const [show2, setShow2] = useState(false);

  return (

    <Modal  show={props.shows2} className="main-box"
      
      onHide={props.handleCloses2} animation={false} >
      
      <Modal.Header  style={{border: "none"}} closeButton>

            <Modal.Title >
                          {t("Marketing_preferences.Marketing-preferences")} 
            </Modal.Title>

      </Modal.Header>


      <Modal.Body >


      <Form>

            <div className="mt-4 d-flex align-items-center" >
                  <Form.Check aria-label="option 2" disabled />
                                <span className="text-muted">{t("Marketing_preferences.Promotional-emails")}</span>
            </div>
      
            <div className="mt-4 d-flex align-items-center" >
                  <Form.Check aria-label="option 1" />
                                <span >{t("Marketing_preferences.Monthly-newsletter")}</span>
            </div>

            <div className="mt-4 d-flex align-items-center" >
                  <Form.Check aria-label="option 1" disabled />
                                <span className="text-muted">{t("Marketing_preferences.Feedback-collection")}</span>
            </div>
      
            <div className="mt-4 d-flex align-items-center" >
                  <Form.Check aria-label="option 1" />
                                <span >{t("Marketing_preferences.Discount-offers")}</span>
            </div>

            <Button className="mt-4 update-btn" size="lg" block>
                                {t("Marketing_preferences.Update-perferences")}
            </Button>
                              
      </Form>
            




      </Modal.Body>
{/* 
      <Modal.Footer >

            <Button className="update-btn" size="lg" block>
                Update perferences
            </Button>
        
      </Modal.Footer> */}
    </Modal>
  );
}

export default MarketingPreferences;