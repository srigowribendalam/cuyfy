
import React from 'react'
import {Row, Col, Button } from "antd";
const ABoutCuySection = () => {
    return (
        <div className="ABoutCuy-Section-body">
            <div  className="ABoutCuy-Section-Heading">
                <h2>What is CuyFy?</h2>
                <h1>Find your Perfect Work tool..!!</h1>
            </div>

            <Row>
            <Col md={12}>
                <div className="ABoutCuy-Section-img">
                <img src={require("../../../../Assets/Home/aboutCuy.png")}  alt="image"/>
                    </div>
                
                </Col>
                <Col md={12}>
                <div className="ABoutCuy-Section-content">
              <h1>Why CuyFy Is Useful?</h1>
              <h5>Workforce, work place and work culture is changing with inclusion of Gen Z, Gen Alfa along with immersive technology and unified range of globally inclusive tools and applications. New generation are multitaskers with 8 sec attention span, enterpreneurs from high school, digitally tech-savvy, diversity driven with global view, continous learning and ready share work with cobots.</h5>
              <h5>CuyFy is designed on the principles of 4D thinking to provide the best of the best to this generation and to the booming generation of workforce. Providing instant update, rewards, recognition and address FOMO.</h5>
                   
                   <Button>Join Us</Button>
                   
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ABoutCuySection
