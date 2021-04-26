import React, { useState } from 'react';
import { Modal, Button, Form,Row,Col } from 'react-bootstrap';
import '../../../css/setting_mycards.css'
import master from '../../../xadok/master.png'


const MyCards = (props) => {
    const [show3, setShow3] = useState(false);
    return (
   

        <Modal show={props.shows4} className="main-content " style={{
            border: "none", width: "340px",
            borderRadius: "15px", marginLeft: "40%"
        }} onHide={props.handleCloses4} animation={false} >
            <Modal.Header style={{ border: "none" }} closeButton>
                <Modal.Title >My cards <span>  (1)</span></Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ border: "none" }}>
 
                <Row className="main-box">
                    <Col className="box" md={6}
                        > <i class="fas fa-plus"></i></Col>
                    <Col className="box" md={6} >
                        <img src={master} 
                         />
                    </Col>
                </Row>
                
            </Modal.Body>
        </Modal>
    );
}
    
    export default MyCards;
