import React, { useState } from 'react'
import { Navbar, Row, Col, Nav, Container, ProgressBar, Card, CardDeck, Modal, Badge, Toast, Button, Form, FormControl, Carousel, Accordion } from 'react-bootstrap'



const Discounts = (props) => { 


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
                    <b style={{ color: "grey", fontWeight: "normal" }}>
                      Estimated Arrival</b> </Button>
                </div>
                <h3 className="ordertime" style={{ fontWeight: "bold", marginLeft: "15%", marginTop: "-5%" }}>35 min</h3>
              </Card.Header>
              <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                <ProgressBar variant="danger" now={100} style={{ width: "12%", height: "0.9vh" }} />
                <ProgressBar variant="danger" now={100} style={{ width: "18%", height: "0.9vh" }} />
                <ProgressBar variant="danger" now={60} style={{ width: "60%", height: "0.9vh" }} />
              </div>
              <Card.Body className="mt-4">
                <Button onClick={props.handleShow119} style={{
                  width: "48%", border: "none", height: "7vh",
                  borderRadius: "8px", background: "#223142"
                }} >Details</Button>

                <Button onClick={() => props.setShow6(false)} className="ml-2" style={{
                  width: "48%"
                  , color: "#223142", fontWeight: "bold",
                  border: "none", height: "7vh", borderRadius: "8px",
                  background: "#FCDE70"
                }} >Cancel</Button>
    
              </Card.Body>
            </Card>
            : null
        }
        {
          props.show7 ?
            <Card className="ordercard1 orderupcomingcard" style={{
              marginLeft: "3%", marginTop: "4%",
              width: "35%", height: "42vh", border: "none", borderRadius: "12px"
            }}>


              <Card.Header
                style={{ border: "none", background: "white", borderRadius: "15px" }} >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h6 style={{ fontWeight: "bold", color: "#223142" }}>Ramez Shopping</h6>
                  <Button style={{ color: "silver", background: "white", fontSize: "12px", fontWeight: "bold", border: "none" }}>#1DF90E</Button></div>
                <div style={{ display: "flex" }}>
                  <i class="far fa-clock ml-2 mt-4" style={{ color: "yellow", fontSize: "28px" }}></i>

                  <Button style={{
                    border: "none", background: "none",
                    marginLeft: "1%", marginTop: "-3%", fontSize: "12px"
                  }}>
                    <b style={{ color: "grey", fontWeight: "normal" }}>
                      Estimated Arrival</b> </Button>
                </div>
                <h3 className="ordertime" style={{
                  fontWeight: "bold"
                  , marginLeft: "15%", marginTop: "-5%"
                }}>60 min</h3>

              </Card.Header>
              <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                <ProgressBar variant="danger" now={100} style={{ width: "12%", height: "0.9vh" }} />
                <ProgressBar variant="danger" now={100} style={{ width: "18%", height: "0.9vh" }} />
                <ProgressBar variant="danger" now={60} style={{ width: "60%", height: "0.9vh" }} />
              </div>

              <Card.Body className="mt-4">

                <Button onClick={props.handleShow119} style={{
                  width: "48%", border: "none", height: "7vh",
                  borderRadius: "8px", background: "#223142"
                }} >Details</Button>
                <Button onClick={() => props.setShow7(false)} className="ml-2" style={{
                  width: "48%"
                  , color: "#223142", fontWeight: "bold",
                  border: "none", height: "7vh", borderRadius: "8px",
                  background: "#FCDE70"
                }} >Cancel</Button>
              </Card.Body>


            </Card>
            : null
        }

      </CardDeck>

    </div>
    


    
  );
}
export default Discounts;




