import { Button, Col, Row,Icon } from "antd";
import React, { useState } from "react";
import Header from "../Home/Components/Header/Header";
import Footer from "../Home/Components/Footer/Footer";
import "./PricingPage.scss";

const PricingPage = () => {
  const [active, setactive] = useState("Executive");

  const [PlanType, setPlanType] = useState("Yearly");

  const toggleTab = (e) => {
    setPlanType(e.target.innerText);
  };
const contenticon=<Icon type="check-circle" style={{marginRight:'20px',color:'#6127FA'}} />
  return (
    <div className="Pricing-Container">
      <Header />
      <div className="Pricing-body">
        <h1>Pricing to suit all Sizes of companies</h1>
        <h5>Get in touch and let us know how we can help.</h5>
        <h5>Get in touch and let us know</h5>
        <div className="pricing-nav-tabs">
          <div
            className={PlanType === "Yearly" ? "active" : "in-active "}
            onClick={toggleTab}
          >
            <span>Yearly</span>
          </div>
          <div
            className={PlanType === "Monthly" ? "active" : "in-active"}
            onClick={toggleTab}
          >
            <span>Monthly</span>
          </div>
        </div>

        <div className="pricing-plan-card">
          <div
            className={
              active === "Standard"
                ? "pricing-plan-active"
                : "pricing-plan-inactive"
            }
            onClick={() => setactive("Standard")}
          >
            <h2>Standard</h2>
            <h1>{PlanType === "Yearly" ? "$1500" : "$150"}</h1>
            <span className="validate-fields">
              {PlanType === "Yearly" ? (
                <>
                  <span style={{ fontWeight: 600, color: "black" }}>
                    $80 &nbsp;
                  </span>
                  for every &nbsp;
                  <span style={{ fontWeight: 600, color: "black" }}>
                    12 &nbsp;
                  </span>
                  months
                </>
              ) : (
                <span>For Month</span>
              )}
            </span>
            <div className="pricing-button">
              <Button>Get started</Button>
              <span className="view">View details</span>
            </div>
          </div>
          <div
            className={
              active === "Executive"
                ? "pricing-plan-active"
                : "pricing-plan-inactive"
            }
            onClick={() => setactive("Executive")}
            style={{ borderRadius: "0 0px 0px 0px" }}
          >
            <h2>Executive</h2>

            <h1>{PlanType === "Yearly" ? "$1000" : "$100"}</h1>
            <span className="validate-fields">
              {PlanType === "Yearly" ? (
                <>
                  <span style={{ fontWeight: 600 }}>$80 &nbsp;</span>
                  for every &nbsp;
                  <span style={{ fontWeight: 600 }}>12 &nbsp;</span>
                  months
                </>
              ) : (
                <span>For Month</span>
              )}
            </span>
            <div className="pricing-button">
              <Button>Get started</Button>
              <span className="view">View details</span>
            </div>
          </div>
          <div
            className={
              active === "Premium"
                ? "pricing-plan-active"
                : "pricing-plan-inactive"
            }
            onClick={() => setactive("Premium")}
            style={{ borderRadius: "0 30px 30px 0px" }}
          >
            <h2>Premium</h2>
            <h1>{PlanType === "Yearly" ? "$2000" : "$200"}</h1>
            <span className="validate-fields">
              {PlanType === "Yearly" ? (
                <>
                  <span style={{ fontWeight: 600, color: "black" }}>
                    $80 &nbsp;
                  </span>
                  for every &nbsp;
                  <span style={{ fontWeight: 600, color: "black" }}>
                    12 &nbsp;
                  </span>
                  months
                </>
              ) : (
                <span>For Month</span>
              )}
            </span>
            <div className="pricing-button">
              <Button>Get started</Button>
              <span className="view">View details</span>
            </div>
          </div>
        </div>
      </div>
      <div className="Pricing-report">
        <Row>
          <Col lg={12}>
            <div className="Pricing-report-content-one">
              <h1>Standard User Included :</h1>
              <h2>{contenticon}Max users are 25 to 100 (only at one location)</h2>
              <h2>{contenticon}Customise 4 of the base CuyFy features of your choice</h2>
              <h2>{contenticon}No external links for reward redeptions etc..</h2>
              <h2>{contenticon}Email support</h2>
            </div>
          </Col>
          <Col lg={12}>
            <div className="Pricing-report-content-Two">
              <h1>Standard User Included :</h1>
              <h2>{contenticon}Max users are 25 to 100 (only at one location)</h2>
              <h2>{contenticon}Customise 4 of the base CuyFy features of your choice</h2>
              <h2>{contenticon}No external links for reward redeptions etc..</h2>
              <h2>{contenticon}Email support</h2>
            </div>
          </Col>
        </Row>
      </div>
      <div className="Pricing-Premium">
        <h1>Premium User Included :</h1>
        <Row>
          <Col lg={12}>
            <div className="Pricing-report-content-one">
              <h2>{contenticon}Max users are 25 to 100 (only at one location)</h2>
              <h2>{contenticon}Customise 4 of the base CuyFy features of your choice</h2>
              <h2>{contenticon}No external links for reward redeptions etc..</h2>
              <h2>{contenticon}Email support</h2>
            </div>
          </Col>
          <Col lg={12}>
            <div className="Pricing-report-content-Two">
             
              <h2>{contenticon}Max users are 25 to 100 (only at one location)</h2>
              <h2>{contenticon}Customise 4 of the base CuyFy features of your choice</h2>
              <h2>{contenticon}No external links for reward redeptions etc..</h2>
              <h2>{contenticon}Email support</h2>
            </div>
          </Col>
        </Row>  
        </div>
        <div>
          <Footer/>
          </div>
    </div>
  );
};

export default PricingPage;
