import { Row, Col, Divider, Button } from "antd";
import React from "react";

const DownloadAppSection = () => {
  return (
    <>
      <div className="Our-Services-section">
        <Button className="Our-Services-section-button">Join Us</Button>
        <div className="our-Services-banner_img">
          <img
            className="Our-Services-banner"
              src={require("../../../../Assets/Home/curve2.png")}
              alt="banner"
            />
            </div>
          <div className="Our-Services-section-Content">
            <h2>Our Services</h2>
            <h1>We provide various kind of Service for you </h1>
          
          </div>
     
        <div className="Our-Services-section-list">
          <Row>
            <Col md={6} xs={24}>
              <div className="Our-Services-section-Card">
                <img src={require("../../../../Assets/Home/Knowledge.png")} alt="Knowledge" />
                <h1>Knowledge</h1>
                <h4>
                  CuyFy has been such a blessing for me and my family. CuyFy has
                  been such a blessing for me
                </h4>
              </div>
            </Col>
            <Col md={6} xs={24}>
              <div className="Our-Services-section-Card">
                <img src={require("../../../../Assets/Home/Career.png")}  alt="Career" />
                <h1>Career</h1>
                <h4>
                  CuyFy has been such a blessing for me and my family. CuyFy has
                  been such a blessing for me
                </h4>
              </div>
            </Col>
            <Col md={6} xs={24}>
              <div className="Our-Services-section-Card">
                <img src={require("../../../../Assets/Home/Benefits.png")}  alt="Benefits"/>
                <h1>Benefits</h1>
                <h4>
                  CuyFy has been such a blessing for me and my family. CuyFy has
                  been such a blessing for me
                </h4>
              </div>
            </Col>
            <Col md={6} xs={24}>
              <div className="Our-Services-section-Card">
                <img src={require("../../../../Assets/Home/Events.png")}  alt="Events" />
                <h1>Events</h1>
                <h4>
                  CuyFy has been such a blessing for me and my family. CuyFy has
                  been such a blessing for me
                </h4>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default DownloadAppSection;
