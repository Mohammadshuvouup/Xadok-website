import React, { useState ,useRef } from 'react'
import '../../../css/setting_general.css'
import { Navbar, Row, Col, Nav, Container, Modal, Badge, Toast, Button, Form, Card, Carousel, Accordion,Image } from 'react-bootstrap'
import profile from '../../../xadok/download.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';



const PersonalInfo = (props) => {

    
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const formik = useFormik({
        initialValues: {
            name: '',
            email:'',
           mobile:'',
      },
    validationSchema: Yup.object({
        name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
            .required('Required'),
        
        email: Yup.string().email('Invalid email').required('Required'),
        
        mobile: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Required'),
       
   
      }),
      onSubmit: values => {
          console.log("submitting");


    }
     
      
    });

    const inputFile = useRef(null);
    const [image, setImage] = useState('');
    
    var data = '';
    var binaryData = [];
    binaryData.push(image);
    window.URL.createObjectURL(new Blob(binaryData, {type: "image/png, image/jpeg"}))

    const upload_file = (e) => {
   
        inputFile.current.click();
        // setImage([...image, window.URL.createObjectURL(e.target.files)]);
        binaryData.push(e.target.files);
        setImage(binaryData);
    
    };

    // function deleteFile(e) {
    //     const s = file.filter((item, index) => index !== e);
    //     setFile(s);
    //     console.log(s);
    //   }

    return (
        <Modal className="personal-info" 
        show={props.shows} onHide={props.handleCloses}>
        <Modal.Header style={{border:"none"}} closeButton>
          <Modal.Title style={{border:"none",marginTop:"4%",fontWeight:"bold"}}>Personal information</Modal.Title>
        </Modal.Header>
         <p className="pl-4 mt-2" style={{color:"silver",fontSize:"14px"}}>Profile Image</p>

            <Modal.Body >
                <Container>
                    <Row className="upload-img-box">
                    <Col className="img-icon" md={3}>
                       <Image src={(image ? image: profile)} alt=""/>

                    </Col>

                        <Col claasName="box justify-content-between" md={8}>
                            <input type='file' id='file' ref={inputFile} onChange={(e)=>upload_file(e)} style={{display:'none'}} accept="image/png, image/jpeg"/>
                            <Button className="up" onClick={upload_file} >Upload</Button>
                            <Button className="delete">Delete</Button>

                    </Col>
                    </Row>
                   
                    
                    <Row className="profile-details">
                        <Col md={12}>
                            <p>Profile details</p>
                        </Col>
                    </Row>

                    <form className="sign_up_form profile-details-form" onSubmit={formik.handleSubmit}>
                                <Container>
                                    <Row className="mt-4">
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
                            
                                        <Row className="top-spacing">
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
                            <Button className="update-profile p-3 top-spacing" type="submit" value="submit">Update Profile</Button>
                            
                                   
             
                                </Container>
                            </form>
                    
                </Container>
                
       

         </Modal.Body>

       </Modal>
             



    );
}

export default PersonalInfo;