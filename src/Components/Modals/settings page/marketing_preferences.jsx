import React, { useState } from 'react';
import {  Modal, Button, Form} from 'react-bootstrap';
import '../../../css/setting_general.css'



const MarketingPreferences = (props) => {


  const [show2, setShow2] = useState(false);

  return (

    <Modal  show={props.shows2} className="main-box"
      
      onHide={props.handleCloses2} animation={false} >
      
      <Modal.Header  style={{border: "none"}} closeButton>

            <Modal.Title >
              Marketing preferences
            </Modal.Title>

      </Modal.Header>


      <Modal.Body >


      <Form>

            <div className="mt-4 d-flex align-items-center" >
                  <Form.Check aria-label="option 2" disabled />
                  <span className="text-muted">Promotional emails</span>
            </div>
      
            <div className="mt-4 d-flex align-items-center" >
                  <Form.Check aria-label="option 1" />
                  <span >Monthly newsletter</span>
            </div>

            <div className="mt-4 d-flex align-items-center" >
                  <Form.Check aria-label="option 1" disabled />
                  <span className="text-muted">Feedback collection</span>
            </div>
      
            <div className="mt-4 d-flex align-items-center" >
                  <Form.Check aria-label="option 1" />
                  <span >Discount and offers</span>
            </div>

            <Button className="mt-4 update-btn" size="lg" block>
                Update perferences
            </Button>
                              
      </Form>
            




      </Modal.Body>
{/* 
      <Modal.Footer >

            <Button className="update-btn" size="lg" block>
                Update perferences
            </Button>
        
      </Modal.Footer> */}
    </Modal>
  );
}

export default MarketingPreferences;