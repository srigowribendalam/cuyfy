import { Row, Col } from "antd";
import React from "react";
import Header from "../Home/Components/Header/Header";
import Footer from "../Home/Components/Footer/Footer";
import "./OurServiecs.css";

const OurServicesPage = () => {
	
const scrollBackToTop = () => {
	window.scrollTo({
	  top: 0,
	  left: 0,
	  behavior: "smooth",
	});
  };
  return (
    <div classNameName="OurServicesPage-Container">
      <div classNameName="OurServicesPage-Header">
        <Header />
      </div>

      <section className="maincontainer" id="top">
        {/* <!-- main body section of the page starts here --> */}
        <div className="containerfluid">
          {/* <!-- introduction block starts here--> */}
          <Row>
            <Col sm={10}>
              <div
                className="col-sm-5 mtd-5 ptd-3 p-0"
                style={{ float: "right" }}
              >
                <h1 className="color mtd-5">Our Services</h1>
                <h3 className="mtd-4 pt-2">Introduction</h3>

                <p className="textmuted mt-3">
                  Cuyfy is here to remove the void of unknown between you and
                  your company. Cuyfy aims to make work places more connected
                  and fun with a gamified experience.
                </p>
              </div>
            </Col>
            <Col sm={12}>
              <div className="col-sm-6 m-0 p-0">
                <div>
                  <div className="mt-2 ">
                    <img
                      className="imgfluid"
                      src={require("../../Assets/Ourservies/banner1.png")}
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* <!-- introduction block ends here --> */}

        <div className="containerfluid">
          {/* <!-- Wisely Plan you Benefits block starts here--> */}
          <Row className="row mtd-5 ptd-5">
			  <Col sm={12}>
            <div className="col-sm-6">
              <h3 className=" mtd-5 ptd-3 pt-3">Wisely Plan you Benefits</h3>
              <div className="underbar mb-3"></div>
              <p className="textmuted">
                Organisations provide various benefits like insurance coverage,
                additional insurance, fitness clubs, golf club, higher education
                and many more.
              </p>
              <p className="textmuted mt-2">
                
                With CuyFy, you can plan according to your needs and enjoy the
                same benefits but to your taste. How cool that will be!!
              </p>
            </div>
			</Col>
			<Col sm={12}>
            <div className="col-sm-6">
              <center>
                <div className="col-sm-8">
					   
                  <img    src={require("../../Assets/Ourservies/banner2.png")} className="imgfluid" />
                </div>
              </center>
            </div>
			</Col>
          </Row>
          {/* <!-- Wisely Plan you Benefits block ends here--> */}
        </div>

        <div className="containerfluid">
          {/* <!-- Make rewads more memorable starts here--> */}
          <Row className="row mt-3">
			  <Col sm={8}>
            <div className="col-sm-4">
              <center>
			  <img    src={require("../../Assets/Ourservies/banner3.png")} className="imgfluid"  alt="/" />
              </center>
            </div>
			</Col>
			<Col sm={16}>
            <div className="col-sm-8 mtd-5">
              <div className="textright">
                <h3 className="mt-2">Make rewads more memorable</h3>
                <div className="underbar mb-3"></div>
                <div className="text-right">
                  <p className="textmuted">
                    Colleagues, direct reportees and managers do reward for the
                    great outcomes which an individual or a team delivered. They
                    can be a certificate or reward points.
                  </p>
                  <p className="textmuted mt-2">
                    At CuyFy, these reward points can be accumilated over a
                    period and turn them into a memorable item of your choice
                    and need which you will remember for good!!
                  </p>
                </div>
              </div>
            </div>
			</Col>
          </Row>
          {/* <!-- Make rewads more memorable block ends here--> */}
        </div>

        <div className="containerfluid">
          {/* <!-- Bring in the talented friends block starts here--> */}
        <Row>
			<Col sm={12}>
            <div className="col-sm-6">
              <div className="mtd-5 pt-2">
                <h3 className="">Bring in the talented friends</h3>
                <div className="underbar mb-3"></div>
                <p className="textmuted">
                  Talent is the need of any organisation and you are part of
                  bringing in the talent from your known cicles into the
                  organisation.
                </p>
                <p className="textmuted mt-2">
                  
                  CuyFy supports organisations recognising your efforts count in
                  its growth and bringin right talent through its referal
                  program which is global
                </p>
              </div>
            </div>
			</Col>
			<Col sm={12}>
            <div className="col-sm-6">
              <center>
                <div className="textright">
				<img    src={require("../../Assets/Ourservies/banner4.png")} className="imgfluid"  alt="/" />
                </div>
              </center>
            </div>
			</Col>
          </Row>
          {/* <!-- Bring in the talented friends block ends here--> */}
        </div>

        <div className="containerfluid">
          {/* <!-- Kindle the knowldge starts here--> */}
          <Row>
			  <Col sm={12}>
            <div className="col-sm-6">
              <div className="col-sm-10 mt-3">
			  <img    src={require("../../Assets/Ourservies/banner6.png")} className="imgfluid"  alt="/" />
              </div>
            </div>
			</Col>
<Col sm={12}>
            <div className="col-sm-6 mtd-5">
              <div className="textright">
                <h3 className="mt-3">Kindle the knowldge</h3>
                <div className="underbar mb-3"></div>
                <div className="text-right">
                  <p className="textmuted">
                    Mentoring and reverse mentoring within organisations will
                    creative collaborative environment and improves
                    inclusiveness in people
                  </p>
                  <p className="textmuted mt-2">
                    
                    CuyFy makes it easy with a planner by promoting people to
                    connect for mentoring and reverse mentoring sessions with
                    their interactions as To-do lists.
                  </p>
                </div>
              </div>
            </div>
			</Col>
          </Row>
          {/* <!-- Kindle the knowldge block ends here--> */}
        </div>

        <div className="containerfluid">
          {/* <!-- Plan your career block starts here--> */}
          <Row className="row mtd-5 ptd-3">
			  <Col sm={12}>
            <div className="col-sm-6">
              <h3 className="">Plan your career</h3>
              <div className="underbar mb-3"></div>
              <p className="textmuted">
                Organisations promote learning and development covering
                technical, functional and soft skill trainings across the year.
              </p>
              <p className="textmuted mt-2">
                Using CuyFy, one can set self goals, plan their training
                calendar alinged with organisations in their respective area of
                interest and enhance skills or get certified.
              </p>
            </div>
			</Col>
			<Col sm={12}>
            <div className="col-sm-6 ">
              <center>
                <div className="col-sm-8">
				<img    src={require("../../Assets/Ourservies/plan.png")} className="imgfluid"  alt="/" />
                </div>
              </center>
            </div>
			</Col>
          </Row>
          {/* <!-- Plan your career block ends here--> */}
        </div>

        <div className="containerfluid">
          {/* <!-- Plan your events starts here--> */}
          <Row>
			  <Col sm={12}>
            <div className="col-sm-6">
              <div className="col-sm-10 mt-3">
			  <img    src={require("../../Assets/Ourservies/banner6.png")} className="imgfluid"  alt="/" />
              </div>
            </div>
			</Col>
			<Col sm={12}>
            <div className="col-sm-6 ">
              <div className="textright">
                <h3 className="mt-3 mtd-5">Plan your events</h3>
                <div className="underbar mb-4"></div>
                <div className="text-right">
                  <p className="textmuted">
                    Team, Divisions, Groups all have various events planned year
                    along and across the geographies for their workforce. These
                    events can be internal town halls, knowledge sharing
                    sessions, sports events, external conferances, CSR programs
                    and many.
                  </p>
                  <p className="textmuted mt-2">
               
                    CuyFy helps in listing all these events in the calendar and
                    update with latest status. You can book a slot depending on
                    your interest and link it to your office calendar.
                  </p>
                </div>
              </div>
            </div>
			</Col>
          </Row>
          {/* <!-- Plan your events block ends here--> */}
        </div>

        <div className="containerfluid">
          {/* <!-- Conduct pulse surveys and polls block starts here--> */}
          <Row className="row mt-3 mb-5 ptd-2">
			  <Col sm={12}>
            <div className="col-sm-6">
              <h3 className="mtd-5">Conduct pulse surveys and polls</h3>

              <div className="underbar mb-3 "></div>

              <p className="textmuted">
                New laptops, new locations, change in sanks menu, change in a
                route or a laptop, organisations feel the need to understand
                their workforce.
              </p>
              <p className="textmuted mt-2">
                CuyFy can support this by creating a quick pulse surveys or
                polls for a given duration and provide results spontaneously.
              </p>
            </div>
			</Col>
			<Col sm={12}>
            <div className="col-sm-6">
              <center>
			  <Col sm={16}>
				<img    src={require("../../Assets/Ourservies/banner7.png")} className="imgfluid"  alt="/" />
                </Col>
              </center>
            </div>
			</Col>
          </Row>
          {/* <!-- Plan your career block ends here--> */}
        </div>

        <div>
         
            <img  src={require("../../Assets/Ourservies/backtotop.png")} className="targettop" onClick={scrollBackToTop} />
          
        </div>
      </section>
	  <div>
		  <Footer/>
		  </div>
    </div>
  );
};

export default OurServicesPage;
