import React, { useState } from 'react';
import {  Modal, Button, Form,} from 'react-bootstrap';


const MyCards = (props) => {
    const [show3, setShow3] = useState(false);
    return (
   

        <Modal show={props.shows4} className="set-m-2 mt-4 " style={{
            border: "none", width: "340px",
            borderRadius: "15px", marginLeft: "40%"
        }} onHide={props.handleCloses4} animation={false} >
            <Modal.Header style={{ border: "none" }} closeButton>
                <Modal.Title style={{ border: "none" }}>My cards <span style={{ fontSize: "12px" }}>  (1)</span></Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ border: "none" }}>
 
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", marginTop: "2%", fontSize: "30px" }}>
                    <Button style={{
                        width: "140px", border: "none", background: "#F6F6F6", height: "160px", borderRadius: "7px",
                        color: "#BFBFBF", fontSize: "35px",
                    }}> <i class="fas fa-plus"></i></Button>
                    <div style={{ width: "140px", border: "none", height: "160px", borderRadius: "7px" }}>
                        <img src={props.master} style={{
                            width: "100%", height: "100%", borderRadius: "7px"
                        }} />
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}
    
    export default MyCards;
