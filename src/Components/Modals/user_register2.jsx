import React, { useState } from 'react';
import { Row, Col, Button, Modal, Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../../css/signup.css';
import UserLoginModal from '../Modals/user_login'

const SignUpForm = (props) => {

    const [show_login, setShow_login] = useState(false);
    const handleShow_login= () => setShow_login(true);
    const handleClose_login = () => setShow_login(false);

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

    return (
     
        <>
            <Modal className="signup_modal" show={props.show_reg2} onHide={props.handleClose_reg2}>
            <Modal.Header closeButton>
                <Modal.Title className="reg_model">Create an account!</Modal.Title>
            </Modal.Header>
            <Modal.Body className="reg_body">
            
                    <p> Please create an account to continue using our service</p>
                    <form className="sign_up_form" onSubmit={formik.handleSubmit}>
                    <Container className="container-padding">
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
                            
                          
                        <Button className="btn-danger btn-block p-3 top-spacing" type="submit" value="submit">Create account</Button>
                          <h6  className="mt-4">Already have an account? <span className="sign_in" onClick={handleSignIn}>Sign in</span></h6>
             
                    </Container>
                </form>
                    
                   
            
            </Modal.Body>
    
            </Modal>
            {/* <UserLoginModal show1={handleShow_login} handleClose1={handleClose_login}/> */}
        </>
        
        
    );
}


export default SignUpForm;