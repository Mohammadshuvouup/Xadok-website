import React, { useState } from 'react';
import { Modal, Button, Form,Row,Col } from 'react-bootstrap';
import '../../../css/setting_invite_a_friend.css';
import f1 from '../../../xadok/download (1).png';
import f2 from '../../../xadok/download.png';


const InviteFriend = (props) => {
    const [show3, setShow3] = useState(false);
   

    return (


        <Modal show={props.shows6} className="friend-list "  onHide={props.handleCloses6} animation={false} >
            <Modal.Header>
                            <Modal.Title className="friend-title">
                                Invite a friend
                            </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Row >
  
                    <Col className="friend-img" md={2} >
                        <i class="fas fa-plus"></i>
                    </Col>
                    <Col md={10}>
                        <h6>Send a invite to a friend</h6>
                    </Col>
                </Row>

                <Row>
                    <h6>Invited friends (2)</h6>
                </Row> 
                
                <Row >
                    <Col className="friend-img" md={2}>
                        <img  src={f1} />
                    </Col>

                    <Col md={10}>
                        <h6>Kate Simpson</h6>
                        <p>katesimpson@outlook.com</p>
                        {/* <i class="fas fa-chevron-right"></i> */}
                    </Col>
                    
                    </Row>
                <Row >
                    <Col className="friend-img" md={2}>
                        <img  src={f2} />
                    </Col>

                    <Col md={10}>
                        <h6>Andrew Smith</h6>
                        <p>andrewsmith@outlook.com</p>
                        {/* <i class="fas fa-chevron-right"></i> */}
                    </Col>
                </Row>

            </Modal.Body>

            <Modal.Footer>
   
            </Modal.Footer>
        </Modal>
    );
}
export default InviteFriend;