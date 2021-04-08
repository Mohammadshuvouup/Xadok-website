import React from 'react';
import { Navbar, Row, Col, Nav, Container, Modal, Badge, Toast, Button, Form, Card, Carousel, Accordion, Image } from 'react-bootstrap';
import '../../../css/setting_general.css';

const SavedAddresses = (props) => {

    const address_list = [
        {
            address: 'Home',
            city: 'San Francisco, CA',
            code: '94103'
        },
        {
            address: 'Office',
            city: 'San Francisco, CA',
            code: '94103'
        }
    ];

    return (
        <Modal show={props.shows1} className="save-address-modal" style={{border:"none"}} onHide={props.handleCloses1} animation={false} >
            <Modal.Header style={{border:"none"}} closeButton>
                <Modal.Title style={{border:"none"}}>Saved addresses</Modal.Title>
            </Modal.Header>

            <Modal.Body style={{ border: "none" }}>
                <Container>

                    {address_list && address_list.length > 0 && address_list.map((value, index) => {
                        return (
                            <Row key={index} className="mb-4">
                                <Col md={12} className="address">
                                    <i class="fas fa-edit edit-icon "></i>

                                    <h5>{value.address}</h5>
                                    <p>{value.city}</p>
                                    <p>{value.code}</p>

                                    <i class="fas fa-trash remove-icon "></i>
                                </Col>
                            </Row>
                        );
                    })}

                    <p className="add-new-address">+ Add new addresses</p>
                    <Button className="confirm-btn p-3" type="submit" value="submit">Update Profile</Button>
               
                </Container>

               
            
            </Modal.Body>
       </Modal>
    );
}

export default SavedAddresses;