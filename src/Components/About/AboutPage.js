import { Row, Col, Button, Divider } from "antd";
import React from "react";
import Footer from "../Home/Components/Footer/Footer";
import Header from "../Home/Components/Header/Header";
import "./AboutPage.scss";

const AboutPage = () => {
  
const scrollBackToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
  return (
    <div className="AboutPage-container">
      <div className="AboutPage-Header">
        <Header />
        <div className="AboutPage-body">
          {/* AboutPage-Banner-starts */}
          <div className="AboutPage-Banner-container">
            <Row>
              <Col md={12}>
                <div className="AboutPage-Banner-content">
                  <h1>About Us</h1>
                  <h2>Introduction</h2>
                  <h5>
                    Cuyfy is here to remove the void of unknown between you and
                    your company. Cuyfy aims to make work places more connected
                    and fun with a gamified experience.
                  </h5>
                </div>
              </Col>
              <Col md={12}>
                <div className="AboutPage-Banner-img">
                  <img
                    className="contact"
                    src={require("../../Assets/About/AboutBanner.png")}
                    alt="banner"
                  />
                </div>
              </Col>
            </Row>
          </div>
          {/* AboutPage-Banner-ends */}

          {/* AboutPage-Kudos start Here */}
          <div className="AboutPage-Kudos-container">
            <Row>
              <Col md={16}>
                <div className="AboutPage-Kudos-image">
                  <img
                    className="contact"
                    src={require("../../Assets/About/curve.png")}
                    alt="banner"
                  />
                  <div className="AboutPage-Kudos-image-content">
                    <h2>Customized benefits</h2>
                    <Divider />
                    <h4>
                      An easy to use and accessible method for employees to
                      understand company benefits, offering and allows them to
                      customize their preferred benefits to suit their needs.
                    </h4>
                  </div>
                </div>
              </Col>
              <Col md={8}>
                <div className="AboutPage-Kudos-main-content">
                  <h2>Kudos</h2>
                  <Divider />
                  <h5>
                    Everyone needs to be praised. Kudos are appreciation given
                    by peers, managers and leaders for the great work you have
                    done.
                  </h5>
                </div>
              </Col>
            </Row>
          </div>
          {/* AboutPage-Kudos ends Here */}

          {/* AboutPage-Cuyfypoints start here */}
          <div className="AboutPage-Cuyfypoints-container">
            <Row>
              <Col md={12}>
                <div className="AboutPage-Cuyfypoints-content">
                  <h2>Cuy points</h2>
                  <Divider />
                  <h5>
                    You deserve a break for all the work you have put in these
                    days. Let Cuyfy help you out with a couple of free goodies
                    or discounts from some of your favorite stores.
                  </h5>
                </div>
              </Col>
              <Col md={12}>
                <div className="AboutPage-Cuyfypoints-img">
                  <img
                    className="contact"
                    src={require("../../Assets/About/cuypoints.png")}
                    alt="banner"
                  />
                </div>
              </Col>
            </Row>
          </div>
          {/* AboutPage-Cuyfypoints ends here */}

          {/* AboutPage-feeds-start */}
          <div className="AboutPage-feeds-container">
            <Row>
              <Col md={10}>
                <div className="AboutPage-feeds-content">
                  <h2>Feeds</h2>
                  <Divider />
                  <h5>
                    Stay up to date with the organization and your fellow
                    employees with frequent updates.
                  </h5>
                </div>
              </Col>
              <Col md={14}>
                <div className="AboutPage-feeds-img">
                  <img
                    className="contact"
                    src={require("../../Assets/About/curve.png")}
                    alt="banner"
                  />
                  <div className="AboutPage-feeds-image-content">
                    <h2>Customized benefits</h2>
                    <Divider />
                    <h4>
                      An easy to use and accessible method for employees to
                      understand company benefits, offering and allows them to
                      customize their preferred benefits to suit their needs.
                    </h4>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          {/* AboutPage-feeds-ends */}

          {/* AboutPage-Cuyfypoints Start Here*/}
          <div className="AboutPage-Cuyfybox-container">
            <Row>
              <Col md={14}>
                <div className="AboutPage-Cuyfybox-image">
                  <img
                    className="contact"
                    src={require("../../Assets/About/Cuyfybox.png")}
                    alt="banner"
                  />
                </div>
              </Col>
              <Col md={10}>
                <div className="AboutPage-Cuyfybox-content">
                  <h2>
                    Cuyfybox
                  </h2>
                  <Divider />
                  <h5>
                    It’s a gift…. The starter kit given by companies along with
                    us to new recruits with all the essentials needs to embark
                    in your new and awesome journey
                  </h5>
                </div>
              </Col>
            </Row>
          </div>

          {/*  AboutPage-Cuyfypoints Ends Here */}

          <div className="AboutPage-Bottom-Banner">
            <div className="AboutPage-Bottom-content">
              
                <h1>JOIN OUR COMMUNITY </h1>
                <h5>There are always ups and downs but always give it your best shot because you are the best.</h5>
              
              <Button>GET STARTED</Button>
            </div>
            <img
                    className="contact"
                    src={require("../../Assets/About/MaskGroup.png")}
                    alt="banner"
                  />
          </div>
          {/* footer */}
          <div className="AboutPage-footer">
            <Footer/>
          </div>
          <div>
         
         <img  src={require("../../Assets/Ourservies/backtotop.png")} className="targettop"  onClick={scrollBackToTop}/>
       
     </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
