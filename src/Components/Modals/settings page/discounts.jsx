import React, { useState } from 'react';
import {  Modal, Button, Form} from 'react-bootstrap';


const Discounts = (props) => {
    const [show3, setShow3] = useState(false);
   

    return (

        <Modal show={props.shows7} className="set-m-2 mt-4 " style={{
            border: "none", width: "300px",
            borderRadius: "15px", marginLeft: "40%"
        }} onHide={props.handleCloses7} animation={false} >
            <Modal.Header style={{ border: "none" }} closeButton>
                <Modal.Title style={{ border: "none" }}>Discounts</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ border: "none" }}>
 

                <div style={{ textAlign: "center", width: "100%", height: "100px", background: "#F6F6F6", borderRadius: "5px", border: "1px dotted silver" }}>
                    <h6 style={{ fontSize: "15px", marginTop: "10%", fontWeight: "bold" }}>KL7L24</h6>
                    <p style={{ fontSize: "12px", color: "silver", }}>+ valid until 30 Sep 2020</p>
                </div>
                <div style={{ textAlign: "center", width: "100%", marginTop: "7%", height: "100px", background: "#F6F6F6", borderRadius: "5px", border: "1px dotted silver" }}>
                    <h6 style={{ fontSize: "15px", marginTop: "4%", color: "#E3424B", marginTop: "10%", fontWeight: "bold" }}>AQ1P70</h6>
                    <p style={{ fontSize: "12px", color: "silver", }}>+ valid until 15 Nov 2020</p>
                </div>
            </Modal.Body>
        </Modal>
    );
}
export default Discounts;