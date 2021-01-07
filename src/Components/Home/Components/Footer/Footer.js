import { Divider, Row, Col, List } from "antd";
import React, { Component } from "react";

import "./Footer.scss";

class Footer extends Component {
  render() {
    const columnone = [
      "Our Services",
      "Services A",
      "Services B",
      "Services C",
      "Services D",
      "Services E",
    ];
    const columnTwo = [
      "Services",
      "Tele Health",
      "Senior Care",
      "Transportation",
      "Pharmacy",
      "Medical Supplies",
    ];
    const columnThree = [
      "Address",
      "30 New Jersey, New Jersey, New Jersey New Jersey USA",
    ];
    const columnaddress = [
      {
        name: "Tel",
        number: "0123456789",
      },

      {
        name: "Email",
        number: " support@cuyfy.com",
      },
    ];
    console.log(
      "columnThree",
      columnThree.map((item, i) => item)
    );

    return (
      <React.Fragment>
        <div className="footer">
          <Row>
            <Col lg={7} sm={24}>
              <div className="footer-Logo">
                <img
                  src={require("../../../../Assets/Home/Footerlogo.png")}
                  alt="Logo"
                />
              </div>
            </Col>
            <Col lg={4} sm={24}>
              <div className="footer-columnone">
                {columnone.map((item, i) =>
                  i === 0 ? <h2 key={i}>{item}</h2> : <h3>{item}</h3>
                )}
              </div>
            </Col>
            <Col lg={4} sm={24}>
              <div className="footer-columnTwo">
                {columnTwo.map((item, i) =>
                  i === 0 ? <h2 key={i}>{item}</h2> : <h3>{item}</h3>
                )}
              </div>
              <div className="footer-columnTwo-2">
                <List
                  grid={{ gutter: 16, column: 2 }}
                  dataSource={columnTwo}
                  renderItem={(item, i) =>
                    i === 0 ? (
                      <h2>{item}</h2>
                    ) : (
                      <List.Item>
                        <h3>{item}</h3>
                      </List.Item>
                    )
                  }
                />
              </div>
            </Col>
            <Col lg={5} sm={24}>
              <div className="footer-columnThree">
                {columnThree.map((item, i) =>
                  i === 0 ? <h2 key={i}>{item}</h2> : <h3>{item}</h3>
                )}

                {columnaddress.map((item, i) => (
                  <h3 key={i} style={{ fontWeight: "600" }}>
                    {item.name}&nbsp;{" "}
                    <span style={{ fontWeight: "400" }}>{item.number}</span>
                  </h3>
                ))}
              </div>
            </Col>

            <Col lg={2}>
              <div className="social-media">
                <img
                  src={require("../../../../Assets/Home/linkedin.png")}
                  alt="Logo"
                />
                <img
                  src={require("../../../../Assets/Home/instagram.png")}
                  alt="Logo"
                />
                <img
                  src={require("../../../../Assets/Home/facebook.png")}
                  alt="Logo"
                />
                <img
                  src={require("../../../../Assets/Home/Twitter.png")}
                  alt="Logo"
                />
              </div>
            </Col>
          </Row>

          <hr />

          <div className="footer-copyright">
            <h5>© CuyFy | All rights reserved 2020</h5>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
