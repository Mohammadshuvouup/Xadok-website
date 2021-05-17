import React, { useState } from 'react'
import { Navbar, Row, Col, Nav, Container, ProgressBar, Card, CardDeck, Modal, Badge, Toast, Button, Form, FormControl, Carousel, Accordion } from 'react-bootstrap'



const Order = (props) => { 


  return (

    <div className="upcoming mt-4">
      <h4 className="upcomingheading" className=" pl-4 ml-3">Upcoming Orders</h4>
      {/* ----------------CARD NUMBER ONE--------------------- */}
      <CardDeck>

        {
          props.show6 ?
            <Card className="ordercard1 orderupcomingcard">


              <Card.Header>
                <div>
                  <h6>Ramez Shopping</h6>
                  <Button>#1DF90E</Button></div>
                <div>
                  <i class="far fa-clock ml-2 mt-4"></i>
                  <Button>
                    <b>
                      Estimated Arrival
                      </b>
                  </Button>
                </div>
                <h3 className="ordertime">35 min</h3>
              </Card.Header>
              <div>
                <ProgressBar variant="danger" now={100}/>
                <ProgressBar variant="danger" now={100}/>
                <ProgressBar variant="danger" now={60} />
              </div>
              <Card.Body className="mt-4">
                <Button onClick={props.handleShow119}  >Details</Button>

                <Button onClick={() => props.setShow6(false)} className="ml-2"  >Cancel</Button>
    
              </Card.Body>
            </Card>
            : null
        }
        {
          props.show7 ?
            <Card className="ordercard1 orderupcomingcard">


              <Card.Header>
                <div>
                  <h6>Ramez Shopping</h6>
                  <Button>#1DF90E</Button></div>
                <div>
                  <i class="far fa-clock ml-2 mt-4"></i>

                  <Button>
                    <b>
                      Estimated Arrival
                      </b>
                  </Button>
                </div>
                <h3 className="ordertime">60 min</h3>

              </Card.Header>
              <div>
                <ProgressBar variant="danger" now={100}/>
                <ProgressBar variant="danger" now={100} />
                <ProgressBar variant="danger" now={60} />
              </div>

              <Card.Body className="mt-4">

                <Button onClick={props.handleShow119}>Details</Button>
                <Button onClick={() => props.setShow7(false)} className="ml-2">Cancel</Button>
              </Card.Body>


            </Card>
            : null
        }

      </CardDeck>

    </div>
    


    
  );
}
export default Order;




