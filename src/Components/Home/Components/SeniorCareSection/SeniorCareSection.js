import { Button, Card, Modal, Row, Col, Divider } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SeniorCareSection = () => {
  const [Seniorcarevisible, setSeniorcarevisible] = useState(false);
  const history = useHistory();
  const Onclick_Seniorcare_Modal = () => {
    setSeniorcarevisible(true);
  };
  const Seniorcare_handleOk = () => {
    setSeniorcarevisible(false);
  };
  const Seniorcare_handleCancel = () => {
    setSeniorcarevisible(false);
  };
  const onClickServices = () => {
    history.push("/adult-care");
  };

  return (
    <div className="senior-care-section">
      <Row>
        <Col lg={4} sm={4} xs={24}>
          <div className="senior-care-section-content">
            <h1>
              Your Family’s <span>Trusted</span>
            </h1>
            <h2>Senior Care</h2>
            <div className="hr-setup">
              <Divider />
            </div>
            <h5>Certified doctors and medications at senior care centres</h5>
            <Button
              className="senior-care-button"
              onClick={Onclick_Seniorcare_Modal}
            >
              Book Day Care
            </Button>
          </div>
        </Col>

        <Col lg={20} sm={20} xs={24}>
          <div className="senior-care-section-img">
            <img
              src={require("../../../../Assets/seniorcare1920.png")}
              alt="banner"
            />
          </div>
        </Col>
      </Row>
      <Modal
        visible={Seniorcarevisible}
        onOk={Seniorcare_handleOk}
        onCancel={Seniorcare_handleCancel}
        header={[]}
        footer={[]}
        className="Seniorcare-modal"
      >
        <div className="senior-care-servies-card-container">
          <div
            className="senior-care-servies-card-close"
            onClick={Seniorcare_handleCancel}
          >
            <Button className="senior-care-btn-close">
               
              <img src={require("../../../../Assets/close.png")} alt="banner" />
            </Button>
          </div>
          <Row>
            <Col xs={12} lg={6}  sm={12}>
              <div className="Seniorcare-Card">
                <div className="Seniorcare-Card-slice">
                  <img
                    src={require("../../../../Assets/ModalAsset.png")}
                    alt="banner"
                  />
                </div>

                <div className="Seniorcare-Card-content">
                  <h2>Assisted Living</h2>
                  <h5>
                     Ubora has been such a blessing for me and my family. 
                     Ubora has been such a blessing for me and my family.
                  </h5>
                </div>

                <div className="Book-Now" onClick={onClickServices}>
                  <Button className="Book-Now-button">Book now</Button>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} sm={12}>
              <div className="Seniorcare-Card">
                <div className="Seniorcare-Card-slice">
                  <img
                    src={require("../../../../Assets/ModalAsset.png")}
                    alt="banner"
                  />
                </div>

                <div className="Seniorcare-Card-content">
                  <h2>Board & Care</h2>
                  <h5>
                     Ubora has been such a blessing for me and my family. 
                     Ubora has been such a blessing for me and my family.
                  </h5>
                </div>
                <div className="Book-Now">
                  <Button className="Book-Now-button">Book now</Button>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} sm={12}>
              <div className="Seniorcare-Card">
                <div className="Seniorcare-Card-slice">
                  <img
                    src={require("../../../../Assets/ModalAsset.png")}
                    alt="banner"
                  />
                </div>

                <div className="Seniorcare-Card-content">
                  <h2>Adult Day Care</h2>
                  <h5>
                     Ubora has been such a blessing for me and my family. 
                     Ubora has been such a blessing for me and my family.
                  </h5>
                </div>
                <div className="Book-Now">
                  <Button className="Book-Now-button">Book now</Button>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} sm={12}>
              <div className="Seniorcare-Card">
                <div className="Seniorcare-Card-slice">
                  <img
                    src={require("../../../../Assets/ModalAsset.png")}
                    alt="banner"
                  />
                </div>

                <div className="Seniorcare-Card-content">
                  <h2>Care Givers</h2>
                  <h5>
                     Ubora has been such a blessing for me and my family. 
                     Ubora has been such a blessing for me and my family.
                  </h5>
                </div>
                <div className="Book-Now">
                  <Button className="Book-Now-button">Book now</Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Modal>
    </div>
  );
};

export default SeniorCareSection;
