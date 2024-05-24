import React, { useEffect, useRef, useState } from "react";
import { TbSquareRoundedArrowRightFilled } from 'react-icons/tb'
import privacyPolicy from '../images/privacy-policy.svg'
import privacyPolicy2 from '../images/privacy-2.jpg'

function PrivacyPolicy() {
  return (
    <section>
      <div className="trialDiv" style={{ marginLeft: "100px", marginRight: "100px" }}>
        <div className="employeesDiv" style={{ marginBottom: 30, width: "initial" }}>
          <p style={{ textAlign: "left" }} className='ethical'>Terms of Service</p>
          <p style={{ textAlign: "left" }} className='employees'>Our Privacy Policy governs the handling of personal information by sstrack.io ("Sstrack") and its Services, focusing on data collection, usage, and protection.</p>
        </div>

        <div style={{ display: "flex", alignItems: 'center', justifyContent: "space-between" }} className="how-it-work-container">
          <div>
            <p className="features-title">Data Collection </p>
            <p className="unitedFont" style={{width:"100%"}}>We gather information to enhance our services, excluding sensitive personal details like race or health, obtained through user-provided data and service usage metrics.</p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: 'center', justifyContent: "space-between" }} className="how-it-work-container">
          <div>
            <p className="features-title">Utilization of Data </p>
            <p className="unitedFont" style={{width:"100%"}}>Collected information is used to improve, protect, and develop our Services. We share data with trusted service providers and comply with legal requirements.</p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: 'center', justifyContent: "space-between" }} className="how-it-work-container">
          <div>
            <p className="features-title">Email Communication </p>
            <p className="unitedFont" style={{width:"100%"}}>Certain service-related emails are mandatory, while optional emails can be unsubscribed from. We respect user preferences regarding communication.</p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: 'center', justifyContent: "space-between" }} className="how-it-work-container">
          <div>
            <p className="features-title">Security Measures </p>
            <p className="unitedFont" style={{width:"100%"}}>We implement standard security protocols to safeguard data from unauthorized access, ensuring encryption during transmission and storage.</p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: 'center', justifyContent: "space-between" }} className="how-it-work-container">
          <div>
            <p className="features-title">Access and Update </p>
            <p className="unitedFont" style={{width:"100%"}}>Users can manage their data through the "My Account" section or by contacting support. Upon account deletion, related data is removed, with temporary data retention in backups.</p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: 'center', justifyContent: "space-between" }} className="how-it-work-container">
          <div>
            <p className="features-title">Compliance and Updates </p>
            <p className="unitedFont" style={{width:"100%"}}>Our Privacy Policy complies with GDPR regulations, and any changes are communicated via email and website updates.</p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: 'center', justifyContent: "space-between" }} className="how-it-work-container">
          <div>
            <p className="features-title">About these Terms</p>
            <p className="unitedFont" style={{width:"100%"}}>
              We may modify these terms from time to time. We will post the changes on this page https://www.sstrack.io/privacy-policy and, if the changes are significant, we will notify you by email. You should look at the terms regularly. If you do not agree to the modified terms for a Service, you should discontinue your use of that Service. For information about how to contact us, please visit our contact page at https://www.sstrack.io.
            </p>
          </div>
        </div>

      </div>
    </section>
  )

}

export default PrivacyPolicy;