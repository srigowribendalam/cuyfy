import React from 'react'
import { Row, Col, Divider } from "antd";
import ReactPlayer from "react-player";
import myVideo from './Demo-video.mp4'
const TutorlalSection = () => {
    return (
        <div className="Tutorlal-Section-body">
        <h1>LET OUR TUTORIAL SPEAK ABOUT CuyFy</h1>
        <div className="Tutorlal-Section-bg-img">
        <Row>
            <Col md={10} xs={24}>
                <div className="Tutorlal-Section-curve-img">
                <img src={require("../../../../Assets/Home/youtubecurve.png")}  alt="image" />
                    </div>
                    <div className="Tutorlal-Section-youtube" >
                    <ReactPlayer url= {myVideo} 
            controls = {true}/>
                    </div>
                </Col>
                <Col md={14} xs={24}>
                <div className="Tutorlal-Section-content">
              
              <h5>CuyFy has been such a blessing for me and my family. CuyFy has been such a blessing for me and my family. CuyFy has been such a blessing for me and my family. CuyFy has been such a blessing for me and my family.CuyFy has been such a blessing for me and my family. CuyFy has been such a blessing for me and my family. CuyFy has been such a blessing for me and my family. CuyFy has been such a blessing for me and my family.</h5>
       
                   
                 <h5>CuyFy has been such a blessing for me and my family. CuyFy has been such a blessing for me and my family. CuyFy has been such a blessing for me and my family. CuyFy has been such a blessing for me and my family.</h5>
                   
                    </div>
                </Col>
            </Row>
            </div>
        </div>
    )
}

export default TutorlalSection
