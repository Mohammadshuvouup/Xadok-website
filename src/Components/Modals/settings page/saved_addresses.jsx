import React from 'react';
import { Navbar, Row, Col, Nav, Container, Modal, Badge, Toast, Button, Form, Card, Carousel, Accordion, Image } from 'react-bootstrap';

const SavedAddresses = (props) => {

    const address_list = [
        {
            address: '',
            road: '',
            code:''
        }
    ]

    return (
        <Modal show={props.shows1} className="set-m-2" style={{border:"none"}} onHide={props.handleCloses1} animation={false} >
         <Modal.Header style={{border:"none"}} closeButton>
           <Modal.Title style={{border:"none"}}>Saved addresses</Modal.Title>
         </Modal.Header>
         <Modal.Body style={{border:"none"}}>
          
          </Modal.Body>
  
        
       </Modal>
    );
}

export default SavedAddresses;