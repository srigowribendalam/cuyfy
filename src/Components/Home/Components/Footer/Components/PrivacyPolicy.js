import React,{lazy,useEffect} from "react";
import "./PrivacyPolicy.scss";
import Header from "../../Header/Header";
const Footer = lazy(() => import("../../Footer/Footer"));
const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="PrivacyPolicy-container">
      <div>
        <Header />
      </div>
      <h1>Privacy Policy</h1>
      <div className="PrivacyPolicy-Banner-img">
        <img
          src={require("../../../../../Assets/Home/privacyPolicy.png")}
          alt="Logo"
        />
      </div>
      <div className="PrivacyPolicy-content">
        <div className="PrivacyPolicy-content-safe">
          <h1>
            You are Information is <span>Safe</span>
          </h1>
          <h5>
            We at Nebutech Analytics LLP (hereinafter mentioned as “NEBUTECH”)
            are committed to protect our customers’ personal information and/or
            sensitive personal data and strive to maintain the privacy of your
            personal information. For your information, <br /> “Personal
            information” is any information that can be used by itself to
            uniquely identify, contact, or locate a person, or can be used with
            information available from other sources to uniquely identify an
            individual. For the purpose of this policy, sensitive personal data
            or information has been considered as a part of personal
            information.
          </h5>
          <h5>
            NEBUTECH’s Privacy Policy is designed and developed to address the
            privacy and security of your personal information provided to us.
            <br /> This Privacy Policy describes the personal information which
            we may collect and provides our approach towards handling or <br />
            dealing with the same.
            <br /> The policy is designed to make you understand
          </h5>
          <div className="PrivacyPolicy-content-safe-list">
            <li> kinds of personal information that may be collected by us</li>
            <li> measures taken by us to ensure its privacy and security</li>
            <li> duration for which when it may be retained by us; and</li>
            <li> how you may access and control its use</li>
          </div>
        </div>
        <div className="PrivacyPolicy-content-Personal">
          <h1>
            Collection of <span> Personal Information </span>
          </h1>

          <h5>
            NEBUTECH and its authorized third parties will collect information
            pertaining to your identity, demographics, and related evidentiary
            documentation.
          </h5>
          <h5>
            For the purposes of this document, a ‘Third Party’ is a service
            provider who associates with NEBUTECH and is involved in handling,
            managing, storing, processing, protecting and transmitting
            information of NEBUTECH. This definition also includes all
            sub-contractors, consultants and/or representatives of the Third
            party. We may also collect your personal information when you use
            our services or websites or otherwise interact with us during the
            course of our relationship. Personal information collected and held
            by us may include your name, , date of birth, current addresses,
            mobile phone number, email address, occupation and information
            contained for any payments if required. NEBUTECH and its authorized
            third parties collect, store, process following types of Sensitive
            Personal Information such as password, financial information
            (details of Bank account, credit card, debit card, or other payment
            instrument details), physiological information for providing our
            products, services and for use of our website. We may also hold
            information related to your utilization of our services which may
            include your browsing history on our website, location details and
            additional information provided by you while using our services. We
            may keep a log of the activities performed by you on our network and
            websites by using various internet techniques such as web cookies,
            web beacons, server log files, etc. for analytical purposes and for
            analysis of the amiability of various features on our site. This
            information may be used to provide you with a better experience at
            our portal along with evidentiary purposes. At any time while you
            are surfing our site, if you do not wish to share surfing
            information, you may opt out of receiving the cookies from our site
            by making appropriate changes to your browser privacy settings. In
            case you do not provide your information or consent for usage of
            personal information or later on withdraw your consent for usage of
            the personal information so collected, NEBUTECH reserves the right
            to not provide the services or to withdraw the services for which
            the said information was sought.
          </h5>
        </div>
        <div className="PrivacyPolicy-content-Disclosure">
          <h1>
            <span>Disclosure and Transfer</span> of Personal Information
          </h1>
          <h5>
            Information Internal Use: As explained in the section “Collection of
            Personal Information” NEBUTECH and its employees may utilize some or
            all available personal information for internal assessments,
            measures, operations and related activities. Authorized Third
            Parties: NEBUTECH may at its discretion employ, contract or include
            third parties (as defined in section 1: Collection of personal
            information) external to itself for strategic, tactical and
            operational purposes. Such agencies though external to NEBUTECH,
            will always be entities which are covered by contractual agreements.
            These agreements in turn include NEBUTECH’s guidelines to the
            management, treatment and secrecy of personal information. We may
            transfer your personal information or other information collected,
            stored, processed by us to any other entity or organization located
            in India or outside India only in case it is necessary for providing
            services to you or if you have consented (at the time of collection
            of information) to the same. This may also include sharing of
            aggregated information with them in order for them to understand our
            environment and consequently, provide you with better services.
            While sharing your personal information with third parties, adequate
            measures shall be taken to ensure that reasonable security practices
            are followed at the third party. We may obtain your consent for
            sharing your personal information in several ways, such as in
            writing, online, through “click-through” agreements; orally,
            including through interactive voice response; or when your consent
            is part of the terms and conditions pursuant to which we provide you
            service. We, however assure you that NEBUTECH does not disclose your
            personal information to unaffiliated third parties (parties outside
            NEBUTECH corporate network and its Strategic and Business Partners)
            which could lead to invasion of your privacy. Government Agencies:
            We may also share your personal information with Government agencie
            s or other authorized law enforcement agencies (LEAs) mandated under
            law to obtain such information for the purpose of verification of
            identity or for prevention, detection, investigation including but
            not limited to cyber incidents, prosecution, and punishment of
            offences.
          </h5>
        </div>

        <div className="PrivacyPolicy-content-Security">
          <h1>
            Security<span> Practices and Procedures</span>
          </h1>

          <h5>
           
            We adopt reasonable security practices and procedures, in line with
            international standard, to include, technical, operational,
            managerial and physical security controls in order to protect your
            personal information from unauthorized access, or disclosure while
            it is under our control. Our security practices and procedures limit
            access to personal information on need-only basis. Further, our
            employees are bound by Code of Conduct and Confidentiality Policies
            which obligate them to protect the confidentiality of personal
            information. We take adequate steps to ensure that our third parties
            adopt reasonable level of security practices and procedures to
            ensure security of personal information. We may retain your personal
            information for as long as required to provide you with services or
            if otherwise required under any law. When we dispose of your
            personal information, we use reasonable procedures to erase it or
            render it unreadable (for example, shredding documents and wiping
            electronic media). Internet Use - We maintain the security of our
            internet connections, however for reasons outside of our control,
            security risks may still arise. Any personal information transmitted
            to us or from our online products or services will therefore be your
            own risk. However, we will strive to ensure the security of your
            information. We observe reasonable security measures to protect your
            personal information against hacking and virus dissemination.
          </h5>
        </div>
        <div className="PrivacyPolicy-content-Update">
          <h1>Update of <span>Personal Information</span> </h1>
          <h5> We strive to keep our
          records updated with your latest information. To this end, if you see
          any discrepancy in your personal information or if a part of your
          personal information changes, we request you to write to us at
          support@nebutech.in and communicate the change(s) for updating our
          records. In case of non-compliance with the terms and conditions and
          privacy policy, NEBUTECH reserves the right to remove your
          non-compliant information from its systems. Further, depending on the
          seriousness of the non-compliance, we may choose to discontinue some
          or all of the services being provided to you by us. </h5>
        </div>
        <div className="PrivacyPolicy-content-Feedback">
        <h1>Feedback and <span>Concerns</span> </h1>
        <h5>We are committed to safeguard your personal information
          collected and handled by us and look forward to your continued support
          for the same. In case of any feedback or concern regarding protection
          of your personal information, you can contact us at
          support@nebutech.in. We will strive to address your feedback and
          concerns in a timely and effective manner. NEBUTECH reserves the right
          to amend or modify this Privacy Policy at any time, as and when the
          need arises. We request you to visit our website
          http://nebutech.company.in/ periodically for contemporary information
          and changes.</h5>
          </div>
      </div>
      <div className="PrivacyPolicy-Footer">
        <Footer/>
        </div>
    </div>
  );
};

export default PrivacyPolicy;
