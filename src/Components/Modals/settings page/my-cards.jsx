import React, { useState } from 'react';
import { Modal, Button, Form,Row,Col } from 'react-bootstrap';
import '../../../css/setting_mycards.css'
import master from '../../../xadok/master.png'


const MyCards = (props) => {
    const [show3, setShow3] = useState(false);
    return (
   

        <Modal show={props.shows4} className="main-content "
         onHide={props.handleCloses4} animation={false} >
            <Modal.Header style={{ border: "none" }} closeButton>
                <Modal.Title className="title">My cards <span>  (1)</span></Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ border: "none" }}>
 
                <Row className="card-box justify-content-between">
                       <div className="card d-flex justify-content-center align-items-center">
                               <i class="fas fa-plus"></i>
                        </div>
               
                    <div className="card" >
                        <img src={master} 
                         />
                    </div>
                </Row>
                
            </Modal.Body>
        </Modal>
    );
}
    
    export default MyCards;
