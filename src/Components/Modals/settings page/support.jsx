import React, { useState } from 'react';
import {  Modal, Button, Form,} from 'react-bootstrap';


const Support = (props) => {
    const [show3, setShow3] = useState(false);
    return (

        <Modal show={props.shows5} className="set-m-2 mt-4 " style={{
            border: "none", width: "340px",
            borderRadius: "15px", marginLeft: "40%"
        }} onHide={props.handleCloses5} animation={false} >
            <Modal.Header style={{ border: "none" }} closeButton>
                <Modal.Title style={{ border: "none" }}>Support</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ border: "none" }}>
                <div style={{
                    display: "flex",
                    justifyContent: "", marginTop: "2%",
                    height: "45px"
                }}>
  
                    <Button style={{
                        color: "#223142",
                        background: "#F6F6F6",
                        borderRadius: "7px", border: "none"
                    }}>
                        <i class="far fa-envelope"></i>
                    </Button>
                    <div className="support" style={{ marginLeft: "5%" }}>
                        <h6 className="support" style={{ fontSize: "12px" }}>LIVE CHAT</h6>
                        <p className="support" style={{ fontSize: "12px" }}>Waiting time:<b>5 min</b></p>
                    </div>
                    <Button style={{ color: "#223142", background: "none", border: "none", marginLeft: "35%" }}>
                        <i class="fas fa-chevron-right"></i></Button>

                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "", marginTop: "5%",
                    height: "45px"
                }}>
  
                    <Button style={{
                        color: "#223142",
                        background: "#F6F6F6",
                        borderRadius: "7px", border: "none"
                    }}>
                        <i class="far fa-file-alt"></i>
                    </Button>
                    <div style={{ marginLeft: "5%" }}>
                        <h6 style={{ fontSize: "12px" }}>FAQ</h6>
                        <p className="support" style={{ fontSize: "12px", color: "silver" }}>182 Park Row Street,Suit 8 </p>
                    </div>
                    <Button style={{ color: "#223142", background: "none", border: "none", marginLeft: "24%" }}>
                        <i class="fas fa-chevron-right"></i></Button>

                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "", marginTop: "5%",
                    height: "45px"
                }}>
  
                    <Button style={{
                        color: "#223142",
                        background: "#F6F6F6",
                        borderRadius: "7px", border: "none"
                    }}>
                        <i class="fas fa-phone-alt"></i>
                    </Button>
                    <div style={{ marginLeft: "5%" }}>
                        <h6 style={{ fontSize: "12px" }}>PHONE NUMBER</h6>
                        <p style={{ fontSize: "12px", color: "silver" }}>+1(987)1234098</p>
                    </div>
 

                </div>
            </Modal.Body>

            <Modal.Footer style={{ border: "none", marginTop: "2%" }}>
   
            </Modal.Footer>
        </Modal>
    );
}

export default Support;
