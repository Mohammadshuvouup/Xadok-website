import React, { useState } from 'react';
import Notifications, {notify} from 'react-notify-toast';
import {Row,Col,Button,Modal,Container} from 'react-bootstrap'
import '../../css/userLogin.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Service from '../../services/service';
import axios from 'axios';
import { Link } from 'react-router-dom'
import SignUpForm from './user_register2'
// import SignUp from './user_register2'SignUpForm

const UserLoginModal=(props)=>{


    const [show1,setShow1] = useState(false);
    const [show3,setShow3] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show_reg, setShow_reg] = useState(false);
  

    const [show118,setShow118] = useState(false);



  const handleClose1 = () => props.setShow1(false);



  const handleShow1 = () => setShow1(true);

  const handleShow3 = () => setShow3(true);


  const handleShow5 = () => setShow5(true);
  const handleShow_reg = () => setShow_reg(true);
  const handleClose_reg = () => setShow_reg(false);


  const handleShow118 = () => props.setShow118(true);

  const[code,setCode]=useState('');

  axios.get(`https://ristsys.store/api/GetSettings`)
  .then(res=>{
     
      setCode(res.data.data.country_code);
  })

  const[info,setInfo]=useState({
    mobile:'',
    password:'',
    code:'',
  });

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const formik = useFormik({
      initialValues: {
        mobile: '',
        password:'',
      },
      validationSchema: Yup.object({
        mobile: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Required'),
        password: Yup.string()
        .max(6, 'Must be 6 characters or less')
        .required('Required'),
      }),
      onSubmit: values => {
          console.log("submitting");
        // console.log(JSON.stringify(values, null, 2));

        setInfo({
            mobile : values.mobile,
            password: values.password,
            code: code
        
        });
    
     
        axios.post(`https://ristsys.store/api/LoginUser`, info )
        .then(res => {
          console.log(res);
        //   console.log(res.data);
        })
        .catch(function (error) {
                if (error.response) {
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                }
        })

        props.setShow1(false);
    }
     

      
    });
       
  const loggedIn = () =>{
    
    handleClose1();
    let myColor = { background: '#0E1717', text: "#FFFFFF" };
    notify.show("Succesfully logged in!", "success", 6000, myColor);
  
}


  const handelClick = () => {
    
    handleShow_reg();
    handleClose1();
    
    }
    return(
      <React.Fragment>
        <Notifications />
            <Modal className="welcome"
              onHide={handleClose1} show={props.show1}>
                <Modal.Header closeButton>
                <Modal.Title className="mt-3">Welcome!</Modal.Title>
                </Modal.Header>
                <p className="pl-4 ml-3" style={{color:"silver",fontSize:"12px"}}>Sign in to your account to continue</p>

                <form className="sign_in_form" onSubmit={formik.handleSubmit}>
                    <div className="container-padding">
                        <Row>
                            <Col xs={2} sm={2} md={2} className="icon">
                               <i class="fas fa-phone" style={{fontSize:"19px"}}></i>
                            </Col>
                            <Col xs={10} sm={10} md={10} className="d-flex flex-column">
                                <label htmlFor="email">Mobile Number</label>
                                
                                <input
                                    id="mobile"
                                    name="mobile"
                                    type="tel"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.mobile}
                                />
                                {formik.touched.mobile && formik.errors.mobile ? (
                                    <div className="error_msg">{formik.errors.mobile}</div>
                                ) : null}
                                </Col>
                        </Row>

                        <Row className="top-spacing">
                            <Col xs={2} sm={2} md={2} className="icon">
                            <i class="fas fa-key" style={{fontSize:"19px"}}></i>
                            </Col>
                            <Col xs={10} sm={10} md={10} className="d-flex flex-column">
                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="error_msg">{formik.errors.password}</div>
                                ) : null}
                            </Col>
                        </Row>
                        <Button className="btn-danger btn-block p-3 top-spacing" onClick={loggedIn} type="submit" value="submit">Sign in</Button>
                          <h6 onClick={handleShow118} className="mt-4">Forgot password? </h6>
               
                        <Button className="btn-primary btn-block p-3 mt-4 top-spacing create_account_btn" onClick={handelClick}> Create an account</Button>
        
                    </div>
                </form>
   
            </Modal>
       
        <SignUpForm show_reg={show_reg} setShow_reg={setShow_reg} handleShow_reg={handleShow_reg} handleClose_reg={handleClose_reg}/>
      </React.Fragment>
    );
}

export default UserLoginModal;