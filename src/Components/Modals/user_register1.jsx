import React,{useEffect, useState} from 'react';
import { Row, Col, Button, Modal, Container } from 'react-bootstrap'
import axios from 'axios'
import '../../css/user_register.css';
import SignUpForm from './user_register2';

const Openregister = (props) => {

  const country_code = localStorage.getItem('country_code');
  const country_currency = localStorage.getItem('country_currency');
  const [message, setMessage] = useState('');
  const [mobile_no, setmobile_no] = useState('');

  const [show_reg2, setShow_reg2] = useState(false);
  const handleShow_reg2 = () => setShow_reg2(true);
  const handleClose_reg2 = () => setShow_reg2(false);

  let reg1_Params = {
    mobile: '',
    code : country_code
  }

  const handleMobile = (e) => {
    setmobile_no(e.target.value);
   
  }

  const getOtp = () => {

    reg1_Params = {
      mobile: (mobile_no ? mobile_no : ''),
      code : country_code
    }

    axios.post(`https://ristsys.store/api/registerStepOne`, reg1_Params)
    .then(res => {
      console.log("reg data", res.data)

      if (res.data.status == 0) {
      
          setMessage(res.data.message)
   
      }
      else {
        setMessage("");
      }
    })

    .catch((error) => {
        console.log(error);
    })

    props.handleClose_reg();
    handleShow_reg2();
  }

useEffect(()=> {
  axios.get(`https://ristsys.store/api/GetSettings`)
  .then(res => {
    console.log("settings data", res.data.data.country_code)
    localStorage.setItem('country_code', res.data.data.country_code);
    localStorage.setItem('country_currency', res.data.data.country_currency);
  })

  .catch((error) => {
      console.log(error);
  })



}, [])

  return (
    <>
      <Modal className="reg_header" show={props.show_reg} onHide={props.handleClose_reg}>
        <Modal.Header closeButton>
          <Modal.Title className="reg_model">Create an account!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="reg_body">
      
          <p> Please enter your mobile number to create an account</p>
      
          <label htmlFor="mobile">Mobile
            <input  type="tel" name="mobile" id="" onKeyDown={(e)=>handleMobile(e)}/>
          </label>
          <h5>{message}</h5>
           <button className="button" onClick={getOtp}>GET OTP</button> 
        </Modal.Body>
      </Modal>

      <SignUpForm show_reg2={show_reg2} setShow_reg2={setShow_reg2} handleShow_reg2={handleShow_reg2} handleClose_reg2={handleClose_reg2} />
    </>
  );
 }
 export default Openregister;