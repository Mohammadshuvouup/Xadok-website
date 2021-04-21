import React, { useState } from 'react';
import {  Modal, Button, Form} from 'react-bootstrap';
import '../../../css/setting_general.css'

const PaymentMethods = () => {
    return (
        <Modal show={shows3} className="set-m-2 mt-4 "  onHide={handleCloses3} animation={false} >
            <Modal.Header  closeButton>
                <Modal.Title>
                    Payment methods
                </Modal.Title>
            </Modal.Header>
            
                <Modal.Body>
                        <Button className="p-3 mt-3" style={{background:"#E3424B",border:"none",borderRadius:"7px"}} size="lg" block>
                            <i class="far fa-address-card"></i>
                        </Button>
                
                        <div>
                            <Button>
                                <i class="fas fa-money-bill-wave"></i>
                            </Button>
                    
                            <Button>
                                <i class="fab fa-paypal"></i>
                            </Button>
                        </div>
                </Modal.Body>

                <Modal.Footer>
                <Button className="p-3 mt-2" size="lg" block>
                   Update perferences
               </Button>
                </Modal.Footer>
     </Modal>
    );
}