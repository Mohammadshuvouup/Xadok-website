import React, { useState,useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Navbar, Row, Col, Nav, Container, Modal, Badge, Toast, Button, Form, Card, Carousel, Accordion, Image } from 'react-bootstrap';
import '../../../css/setting_general.css';

import NewAddress from './add_address';

const SavedAddresses = (props) => {


    const { t, i18n } = useTranslation();
   

    useEffect(() => {
      
      let language = localStorage.getItem("language");
  
      // console.log("LANGUAGE SELECTED", language);
    
      if (language && language.length !== 0) {
        i18n.changeLanguage(language)
      }
  
    },[]); 

    const [show2, setShow2] = useState(false);
    const handleShow2= () => setShow2(true);
    const handleClose2 = () => setShow2(false);

    const address_list = [
        {
            address: 'Home',
            city: 'San Francisco, CA',
            code: '94103'
        },
        {
            address: 'Office',
            city: 'San Francisco, CA',
            code: '94103'
        }
    ];

    const handleAddNewAddress = () => {
        handleShow2();
        props.handleCloses1();
   }


    return (
        <React.Fragment>
        <Modal show={props.shows1} className="save-address-modal" style={{border:"none"}} onHide={props.handleCloses1} animation={false} >
            <Modal.Header style={{border:"none"}} closeButton>
                <Modal.Title style={{border:"none"}}>{t("Saved_addresses.Saved-addresses")}</Modal.Title>
            </Modal.Header>

            <Modal.Body style={{ border: "none" }}>
                {/* <Container> */}

                    {address_list && address_list.length > 0 && address_list.map((value, index) => {
                        return (
                            <Row key={index} className="mb-4">
                                <Col md={12} className="address">
                                    <i class="fas fa-edit edit-icon "></i>

                                    <h5>{value.address}</h5>
                                    <p>{value.city}</p>
                                    <p>{value.code}</p>

                                    <i class="fas fa-trash remove-icon "></i>
                                </Col>
                            </Row>
                        );
                    })}

                    <p className="add-new-address" onClick={handleAddNewAddress}>{t("Saved_addresses.Add-new-addresses")}</p>
                    <Button className="confirm-btn p-3" type="submit" value="submit">{t("Saved_addresses.Update Profile")}</Button>
              
                {/* </Container> */}

               
            
            </Modal.Body>
       </Modal>
        
            
        <NewAddress show2={show2} setShow2={setShow2} handleShow2={handleShow2} handleClose2={handleClose2} />
    </React.Fragment>
    );
}

export default SavedAddresses;