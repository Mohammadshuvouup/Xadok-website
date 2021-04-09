import React from 'react';

import { Navbar, Row, Col, Nav, Container, Modal, Badge, Toast, Button, Form, Card, Carousel, Accordion, Image } from 'react-bootstrap';
import '../../../css/setting_general.css';
import NewAddress from './add_address';

const SavedAddresses = (props) => {

    const [show2, setShow2] = useState(false);
    const handleShow2= () => setShow2(true);
    const handleClose2 = () => setShow2(false);

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

                    <p className="add-new-address" onClick={handleShow2}>+ Add new addresses</p>
                    <Button className="confirm-btn p-3" type="submit" value="submit">Update Profile</Button>
                  
               <NewAddress show2={show2} setShow2={setShow2} handleClose2={handleClose2} />
                </Container>

               
            
            </Modal.Body>
       </Modal>
    );
}

export default SavedAddresses;