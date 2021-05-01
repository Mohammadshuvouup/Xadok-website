import React, { useState } from 'react';
import { Modal, Button, Form,Row } from 'react-bootstrap';
import '../../../css/setting_discount.css';


const Discounts = (props) => {
    const [show3, setShow3] = useState(false);
   

    return (

        <Modal show={props.shows7} className="discount-list" onHide={props.handleCloses7} animation={false} >
            <Modal.Header closeButton>
                <Modal.Title className="title">Discounts</Modal.Title>
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