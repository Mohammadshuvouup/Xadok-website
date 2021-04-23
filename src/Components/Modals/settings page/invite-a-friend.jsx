import React, { useState } from 'react';
import {  Modal, Button, Form} from 'react-bootstrap';


const InviteFriend = (props) => {
    const [show3, setShow3] = useState(false);
   

    return (


        <Modal show={props.shows6} className="set-m-2 mt-4 " style={{
            border: "none", width: "340px",
            borderRadius: "15px", marginLeft: "40%"
        }} onHide={props.handleCloses6} animation={false} >
            <Modal.Header style={{ border: "none" }} closeButton>
                <Modal.Title style={{ border: "none" }}>Invite a friend
         </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ border: "none" }}>
                <div style={{
                    display: "flex",
                    justifyContent: "", marginTop: "1%",
                    height: "40px"
                }}>
  
                    <Button style={{
                        color: "#223142",
                        background: "#F6F6F6",
                        borderRadius: "7px", border: "none"
                    }}>
                        <i class="fas fa-plus"></i>
                    </Button>
                    <div style={{ marginLeft: "5%", marginTop: "3%" }}>
                        <h6 style={{ fontSize: "14px" }}>Send a invite to a friend</h6>
                    </div>
                </div>
                <h6 style={{ color: "silver", marginTop: "8%", fontSize: "13px" }}>Invited friends (2)</h6>
                <div style={{
                    display: "flex",
                    justifyContent: "", marginTop: "5%",
                    height: "45px"
                }}>
                    <img src={props.f1} style={{ width: "40px", height: "40px", borderRadius: "6px" }} />

                    <div style={{ marginLeft: "5%" }}>
                        <h6 style={{ fontSize: "12px", fontWeight: "bold" }}>Kate Simpson</h6>
                        <p style={{ fontSize: "12px", color: "silver" }}>katesimpson@outlook.com</p>
                    </div>
                    <Button style={{ color: "silver", background: "none", border: "none", marginLeft: "24%" }}>
                        <i class="fas fa-chevron-right"></i></Button>

                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "", marginTop: "5%",
                    height: "45px"
                }}>
                    <img src={props.f2} style={{ width: "40px", height: "40px", borderRadius: "6px" }} />

                    <div style={{ marginLeft: "5%" }}>
                        <h6 style={{ fontSize: "12px", fontWeight: "bold" }}>Andrew Smith</h6>
                        <p style={{ fontSize: "12px", color: "silver" }}>andrewsmith@outlook.com</p>
                    </div>
                    <Button style={{ color: "silver", background: "none", border: "none", marginLeft: "24%" }}>
                        <i class="fas fa-chevron-right"></i></Button>

                </div>
            </Modal.Body>

            <Modal.Footer style={{ border: "none", marginTop: "2%" }}>
   
            </Modal.Footer>
        </Modal>
    );
}
export default InviteFriend;