import React, { useState } from 'react';
import { Modal, Button, Form,Row,Col } from 'react-bootstrap';
import '../../../css/setting_support.css';


const Support = (props) => {
    const [show3, setShow3] = useState(false);
    return (

        <Modal show={props.shows5} className="support-box" onHide={props.handleCloses5} animation={false} >
            <Modal.Header  closeButton>
                <Modal.Title className="titel">Support</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row  className="support-gap">
  
                    <Col className="support-icon" md={2}>
                        <i class="far fa-envelope"></i>
                    </Col>
                    <Col  className="support-text" md={10}>
                        <h6 className="support">LIVE CHAT</h6>
                        <p className="support">Waiting time:<b>5 min</b></p>
                        {/* <i class="fas fa-chevron-right"></i> */}
                    </Col>
                    
                       

                </Row>
                <Row  className="support-gap">
  
                    <Col className="support-icon" md={2}>
                        <i class="far fa-file-alt"></i>
                    </Col>
                       
                    
                    <Col className="support-text" md={10}>
                        <h6>FAQ</h6>
                        <p className="support">182 Park Row Street,Suit 8 </p>
                        {/* <i class="fas fa-chevron-right"></i> */}
                    </Col>
                   

                </Row>
                <Row  className="support-gap">
  
                    <Col className="support-icon" md={2} >
                        <i class="fas fa-phone-alt"></i>
                    </Col>
                    <Col className="support-text" md={10}>
                        <h6>PHONE NUMBER</h6>
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
