import { Button, Col, Input, Row } from "antd";
import React from "react";
import Footer from "../Home/Components/Footer/Footer";
import Header from "../Home/Components/Header/Header";
import "./ContactPage.scss";

const { TextArea } = Input;
const ContactPage = () => {
  return (
    <div className="Contact-page-container">
      <div className="Contact-Banner-body">
        <div className="Contact-Header">
        <Header />
        </div>
        <Row>
          <Col lg={14} sm={14}>
          <div className="Contact-Banner-img">
              
                <img
                className="contact"
                  src={require("../../Assets/Home/contact.png")}
                  alt="banner"
                />
                {/* <div className="Contact-Banner-content">
                    <h3>  <img
                className="contact"
                  src={require("../../Assets/contact/loca.png")}
                  alt="banner"
                />123 NEW ROAD Avenue, California, cA 12315, United States</h3>
                    <h3> <img
                className="contact"
                  src={require("../../Assets/contact/call.png")}
                  alt="banner"
                />  +1 234 567 8900</h3>
                    <h3><img
                className="contact"
                  src={require("../../Assets/contact/mail.png")}
                  alt="banner"
                /> Contactus@cufuy.com</h3>
                    </div> */}
             
            </div>
          </Col>
          <Col lg={10} sm={10} xs={24}>
           <div className="Contact-form-container">
             <h2>Contact us</h2>
             <h3>Get in touch and let us know how we can help.</h3>
             <div>
             <Input placeholder="Name"/>
             <Input placeholder="Email"/>
             <TextArea placeholder="Message"/>
             </div>
             <div className="Contact-form-Button">
             <Button>Send</Button>
             </div>
            </div>
               
           

          </Col>
        </Row>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactPage;
