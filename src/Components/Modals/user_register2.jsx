import React, { useState } from 'react';
import Notifications, {notify} from 'react-notify-toast';
import { Row, Col, Button, Modal, Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../../css/signup.css';
import UserLoginModal from '../Modals/user_login'
import axios from 'axios'

const SignUpForm = (props) => {

    const [show_login, setShow_login] = useState(false);
    const handleShow_login= () => setShow_login(true);
    const handleClose_login = () => setShow_login(false);
    const [mobile_no, setmobile_no] = useState('');
    const [message, setMessage] = useState('');
    const country_code = localStorage.getItem('country_code');
    const [showForm1, setShowForm1] = useState(true);
    const [showForm2, setShowForm2] = useState(false);
    const [showMob, setShowMob] = useState(true);
    const [showOtp, setShowOtp] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    const [showOtpBtn, setShowOtpBtn] = useState(true);
    // const handleShow_reg2 = () => setShow_reg2(true);
    
    
    let reg1_Params = {
        mobile: '',
        code : country_code
      }


    const handleMobile = (e) => {
        setmobile_no(e.target.value);
       
    }
    
    const getOtp = () => {

        setShowOtp(true);
        setShowBtn(true);
        setShowMob(false);
        setShowOtpBtn(false);
        

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
    
        // props.handleClose_reg();
        // handleShow_reg2();
      }

    const[info,setInfo]=useState({
        mobile:'',
        password:'',
        code:'',
      });
    
      const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
        const formik = useFormik({
            initialValues: {
                name: '',
                email:'',
               password:'',
          },
        validationSchema: Yup.object({
            name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
            mobile: Yup.string()
            .matches(phoneRegExp, 'Phone number is not valid')
            .required('Required'),
            password: Yup.string()
            .max(6, 'Must be 6 characters or less')
            .required('Required'),
            email: Yup.string().email('Invalid email').required('Required'),
          }),
          onSubmit: values => {
              console.log("submitting");

              setInfo({
                  name: values.name,
                  email: values.email,
                password: values.password,
            
            });
    
    
        }
         
          
        });
    
    const handleSignIn = () => {
        props.handleClose_reg2();
        handleShow_login();
    }

    const handleContinue = () => {
     
        setShowForm2(true);
        setShowForm1(false);
    }

    const handleModalClose = () => {
        props.handleClose_reg();
        setShowForm1(true);
        setShowForm2(false);
        setShowBtn(false);
        setShowOtpBtn(true);
        setShowOtp(false);
        setShowMob(true);
     
    }

    const registeredAccount = () => {
        handleModalClose();
        let myColor = { background: '#0E1717', text: "#FFFFFF" };
        notify.show("Account created succesfully!", "success", 6000, myColor);
    }

    
    return (
     
        <React.Fragment>
            <Notifications options={{top: '30px', right:'0'}}/>
            <Modal className="signup_modal" show={props.show_reg} onHide={handleModalClose}>
            <Modal.Header closeButton>
                <Modal.Title className="reg_model">Create an account!</Modal.Title>
            </Modal.Header>
            <Modal.Body className="reg_body">
             
                    {showForm1 &&
                        <div className="reg1-contents">
                     
                            {showMob &&
                                <>
                                   <p> Please enter your mobile number to create an account</p>
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
                                            onKeyDown={(e) => handleMobile(e)} 
                                        />  
                                        {formik.touched.mobile && formik.errors.mobile ? (
                                            <div className="error_msg">{formik.errors.mobile}</div>
                                    ) : null}
                                    </Col>
                                </Row>
                                </>
                            }
                            
                            {showOtp &&
                                <>
                                <p> Please enter your OTP to verify </p>
                                <Row className="justify-content-center">
                                    <Col xs={2} sm={2} md={2} className="icon">
                                    <i class="fas fa-user-check" style={{fontSize:"19px"}}></i>
                                   </Col>
                                
                                    <Col xs={10} sm={10} md={10} className="d-flex flex-column">
                                        <label htmlFor="">OTP</label>
                                        
                                        <input
                                            id="otp"
                                            name="otp"
                                            type="text"
                                            value={formik.values.otp}
                                            onKeyDown={(e) => handleMobile(e)} 
                                        />  
                                  
                                </Col>
                                <h5 className="text-center mt-4">{message}</h5>
                                </Row>
                                </>
                            }
                                
                            <Row>
                                {showOtpBtn &&
                                    <button className="reg-form-btn mt-5" onClick={getOtp}>GET OTP</button>
                                }

                                {showBtn &&
                                    <button className="reg-form-btn mt-4" onClick={handleContinue}>Continue</button>
                                }
                            </Row>
                         
                    
                        
                        </div>
                    }

                    {showForm2 &&
                        <div className="reg2-contents">
                            <p> Please create an account to continue using our service</p>
                            <form className="sign_up_form" onSubmit={formik.handleSubmit}>
                             
                                    <Row>
                                        <Col xs={2} sm={2} md={2} className="icon">
                             
                                            <i class="far fa-user" style={{ fontSize: "19px" }}></i>
                                        </Col>
                                        <Col xs={10} sm={10} md={10} className="d-flex flex-column">
                                            <label htmlFor="email">Full Name</label>
                                
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.name}
                                            />
                                            {formik.touched.name && formik.errors.name ? (
                                                <div className="error_msg">{formik.errors.name}</div>
                                            ) : null}
                                        </Col>
                                    </Row>

                                    <Row className="top-spacing">
                                        <Col xs={2} sm={2} md={2} className="icon">
                                            <i class="far fa-envelope" style={{ fontSize: "19px" }}></i>
                                        </Col>
                                        <Col xs={10} sm={10} md={10} className="d-flex flex-column">
                                            <label htmlFor="email">Email Address</label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.email}
                                            />
                                            {formik.touched.email && formik.errors.email ? (
                                                <div className="error_msg">{formik.errors.email}</div>
                                            ) : null}
                                        </Col>
                                    </Row>
                            
                                    {/* <Row>
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
                        </Row> */}

                                    <Row className="top-spacing">
                                        <Col xs={2} sm={2} md={2} className="icon">
                                            <i class="fas fa-key" style={{ fontSize: "19px" }}></i>
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
                            
                          
                                    <Button className="btn-danger btn-block p-3 top-spacing" onClick={registeredAccount} type="submit" value="submit">Create account</Button>
                                    <h6 className="mt-4">Already have an account? <span className="sign_in" onClick={handleSignIn}>Sign in</span></h6>
             
                            </form>
                        </div>
                    }
                   
            
            </Modal.Body>
    
            </Modal>
            {/* <UserLoginModal show1={handleShow_login} handleClose1={handleClose_login}/> */}
        </React.Fragment>
        
        
    );
}


export default SignUpForm;