import React, { useState } from 'react';
import { Modal, Button, Form ,Row, Col} from 'react-bootstrap';
import '../../../css/setting_paymentmethods.css';


const PaymentMethods = (props) => {
    const [show3, setShow3] = useState(false);
   

    return (
        <Modal show={props.shows3} className="main-box"  onHide={props.handleCloses3} animation={false} >
            <Modal.Header  closeButton>
                <Modal.Title>
                    Payment methods
                </Modal.Title>
            </Modal.Header>
            
                <Modal.Body>
                        <Button className="option" size="lg" block>
                    
                             <i class="far fa-credit-card"></i>
                        </Button>
                
                <Row>
                    <Col md={6} className="btn-bg">
                        
                    <i class="fas fa-dollar-sign"></i>
             
                    </Col>
                    <Col md={6} className="btn-bg">
                      
                        <i class="fab fa-paypal"></i>
                     
                    </Col>
                        </Row>
                </Modal.Body>

                <Modal.Footer>
                <Button className="footer" size="lg" block>
                   Update perferences
               </Button>
                </Modal.Footer>
     </Modal>
    );
}
export default PaymentMethods;