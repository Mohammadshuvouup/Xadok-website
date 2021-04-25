import React, { useEffect}from 'react';
import '../../../css/setting_general.css';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Trans, useTranslation } from 'react-i18next';
import { Navbar, Row, Col, Nav, Container, Modal, Badge, Toast, Button, Form, Card, Carousel, Accordion, Image } from 'react-bootstrap';

const NewAddress = (props) => {
 
    const { t, i18n } = useTranslation();
   

    useEffect(() => {
      
      let language = localStorage.getItem("language");
  
      // console.log("LANGUAGE SELECTED", language);
    
      if (language && language.length !== 0) {
        i18n.changeLanguage(language)
      }
  
    },[]); 

    let current_lat = localStorage.getItem('current_location_lat');
    let current_lng = localStorage.getItem('current_location_lng');

    const style = {
        width: '100%',
        height: '30%'
    }
    
    return (
        <Modal show={props.show2} className="new-address-modal" style={{ border: "none" }} onHide={props.handleClose2} animation={false} >
            <Modal.Header style={{ border: "none" }} closeButton>
                <Modal.Title style={{ border: "none" }}>{t("add_address.New-addresses")}</Modal.Title>
               
                
               
                </Modal.Header>
            <Modal.Body className="new-addresses" style={{ border: "none" }}>
                    {/* <Container className="new-addresses"> */}
                <p>{t("add_address.Edit-location-on-the-map")}</p>
                <Map
                    initialCenter={{ lat: current_lat , lng : current_lng}}
                    google={props.google}
                    zoom={15}
                    style={style}
                >
                </Map>
                <div>
               
                    </div>
                
                    <form>
                      <label >
                            
                        {t("add_address.TYPE")}
                             {/* <div className="select-div"> */}
                             <select className="type" name="address_type">
                       
                            <option value="Flat">{t("add_address.Select-address-type")}</option>
                            <option value="Villa">{t("add_address.Villa")}</option>
                            <option value="Showroom">{t("add_address.Showroom")}</option>
                            <option value="Office"> {t("add_address.Office")}</option>
                            <option value="Office">{t("add_address.Compounds")}</option>
                                </select>
                                {/* </div> */}
                    </label>

                    <label>
                        {t("add_address.FULL-ADDRESS")}<input type="text" name="full_address" />
                    </label>

                    <label>
                        {t("add_address.ADDRESS-NOTE")}<input type="text" name="full_address" />
                    </label>
                    
                        {/* <label>   
                            BLOCK NUMBER<input type="number" name="number" />
                        </label>
                        <label>
                            ROAD NUMBER<input type="number " name="ROAD" />
                        </label>
                        <label>
                            BUİLDİNG NUMBER<input type="number" name="BUİLDİNG" />
                        </label>
                        <label>
                            FLAT NUMBER<input type="number" name="FLAT" />
                        </label> */}
                        <label>
                        {t("add_address.ADDRESS-MARK")}<input type="number" name="FLAT" />
                        </label>
                        {/* <label>
                            STATE
                            <select className="state" name="name">
                              <option value="Flat">Search for state</option>
                                 <option value="Villa">Villa</option>
                                 <option value="Showroom">Showroom</option>
                                <option value="Office">Office</option>
                                <option value="Office">Compounds</option>
                            </select>
                        </label> */}
                             
                      
                        {/* <input type="submit" value="Submit" /> */}
                </form>
    
           

                  

                    
                <Button className="save-btn p-3" type="submit" value="submit" onClick={props.handleClose2} > {t("add_address.Save")}</Button>
                  
       
                {/* </Container> */}

               
            
            </Modal.Body>
        </Modal>
        // <h1>hi</h1>
    );
}

// export default NewAddress;

export default GoogleApiWrapper(
    props => ({
        apiKey: ("AIzaSyAOgKEHpASQlxvZb21gHSMYHLeW3bQwT0U")
    })

  )(NewAddress)