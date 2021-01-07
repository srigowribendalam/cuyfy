import React, { lazy, Suspense } from "react";
import "./HomePage.scss";
// import Footer from "./Components/Footer/Footer";
// import Header from "./Components/Header/Header";
// import HomeBanner from "./Components/HomeBanner/HomeBanner";
// import SeniorCareSection from "./Components/SeniorCareSection/SeniorCareSection";
// import OurDoctorSection from "./Components/OurDoctorSection/OurDoctorSection";
// import OurHappySection from "./Components/OurHappySection/OurHappySection";
// import DownloadAppSection from "./Components/DownloadAppSection/DownloadAppSection";

const HomeBanner = lazy(() => import("./Components/HomeBanner/HomeBanner"));
const Header = lazy(() => import("./Components/Header/Header"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
const ServicesSection = lazy(() =>
  import("./Components/ServicesSection/ServicesSection")
);
const ABoutCuySection = lazy(() =>
  import("./Components/ABoutCuySection/ABoutCuySection")
);
const TutorlalSection = lazy(() =>
  import("./Components/TutorlalSection/TutorlalSection")
);
const ContactSection = lazy(() =>
  import("./Components/ContactSection/ContactSection")
);


const scrollBackToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const HomePage = () => {
  return (
    <div>
      <div className="Container">
        <div>
          <Suspense fallback={<h1>Still Loading…</h1>}></Suspense>
        </div>

        <div>
          <Suspense fallback={<h1>Still Loading…</h1>}>
            <HomeBanner />
          </Suspense>
        </div>

        <div>
          <Suspense fallback={<h1>Still Loading…</h1>}>
            <ServicesSection />
          </Suspense>
        </div>

        <div>
          <Suspense fallback={<h1>Still Loading…</h1>}>
            <ABoutCuySection />
          </Suspense>
        </div>

        <div>
          <Suspense fallback={<h1>Still Loading…</h1>}>
            <TutorlalSection />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<h1>Still Loading…</h1>}>
            <ContactSection />
          </Suspense>
        </div>
        {/* DownloadApp-section Ends Here */}
        <div>
          <Suspense fallback={<h1>Still Loading…</h1>}>
            <Footer />
          </Suspense>
        </div>
      </div>
  
      <div>
         
         <img  src={require("../../Assets/Ourservies/backtotop.png")} onClick={scrollBackToTop} className="targettop" />
       
     </div>
    </div>
  );
};

export default HomePage;
