import React from ' react';

const NewAddress = (props) => {
    return (
        <Modal show={props.shows2} className="save-address-modal" style={{border:"none"}} onHide={props.handleCloses2} animation={false} >
            <Modal.Header style={{border:"none"}} closeButton>
                <Modal.Title style={{border:"none"}}>Saved addresses</Modal.Title>
            </Modal.Header>

            <Modal.Body style={{ border: "none" }}>
                <Container>

                  

                    
                    <Button className="confirm-btn p-3" type="submit" value="submit">Update Profile</Button>
                  
       
                </Container>

               
            
            </Modal.Body>
       </Modal>
    );
}
 
export default NewAddress;