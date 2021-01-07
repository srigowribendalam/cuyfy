
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
              <h5>CuyFy has been such a blessing for me and my family. CuyFy has been such a blessing for me and my family. CuyFy has been such a blessing for me and my family. CuyFy has been such a blessing for me and my family.</h5>
              <h5>CuyFy has been such a blessing for me and my family. CuyFy has been such a blessing for me and my family. CuyFy has been such a blessing for me and my family. CuyFy has been such a blessing for me and my family.</h5>
                   
                   <Button>Join Us</Button>
                   
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ABoutCuySection
