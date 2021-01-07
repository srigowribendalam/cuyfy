import { Row, Col, Divider } from "antd";
import React from "react";

const DownloadAppSection = () => {
  return (
    <>
      <div className="Our-Services-section">
        <div className="our-Services-banner_img">
          <img
            className="Our-Services-banner"
              src={require("../../../../Assets/Home/curve2.png")}
              alt="banner"
            />
            </div>
          <div className="Our-Services-section-Content">
            <h2>Our Services</h2>
            <h1>We provide various kind of </h1>
            <h1>Service for you</h1>
          </div>
     
        <div className="Our-Services-section-list">
          <Row>
            <Col lg={6}>
              <div className="Our-Services-section-Card">
                <img src={require("../../../../Assets/Home/Serviers.png")} alt="Serviers1" />
                <h1>Service A</h1>
                <h4>
                  CuyFy has been such a blessing for me and my family. CuyFy has
                  been such a blessing for me
                </h4>
              </div>
            </Col>
            <Col lg={6}>
              <div className="Our-Services-section-Card">
                <img src={require("../../../../Assets/Home/Serviers.png")}  alt="Serviers2" />
                <h1>Service A</h1>
                <h4>
                  CuyFy has been such a blessing for me and my family. CuyFy has
                  been such a blessing for me
                </h4>
              </div>
            </Col>
            <Col lg={6}>
              <div className="Our-Services-section-Card">
                <img src={require("../../../../Assets/Home/Serviers.png")}  alt="Serviers3"/>
                <h1>Service A</h1>
                <h4>
                  CuyFy has been such a blessing for me and my family. CuyFy has
                  been such a blessing for me
                </h4>
              </div>
            </Col>
            <Col lg={6}>
              <div className="Our-Services-section-Card">
                <img src={require("../../../../Assets/Home/Serviers.png")}  alt="Serviers4" />
                <h1>Service A</h1>
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
