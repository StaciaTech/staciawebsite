import React, { useState } from "react";
import "../../styles/JobForm.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function JobForm() {
  const [phoneValue, setPhoneValue] = useState("");
  return (
    <div className="job-form">
      <div className="job-from-inner">
        <h3>Job Application</h3>
        <div className="job-form-ips">
          <div className="job-form-ip-box">
            <label htmlFor="">First Name*</label>
            <input type="text" />
          </div>
          <div className="job-form-ip-box">
            <label htmlFor="">Last Name*</label>
            <input type="text" />
          </div>
          <div className="job-form-ip-box">
            <label htmlFor="">Phone Number*</label>
            <PhoneInput
              placeholder="Enter phone number*"
              value={phoneValue}
              defaultCountry="IN"
              onChange={setPhoneValue}
              className="PhoneInput"
              // style={{ height: "100%", border: "none" }}
            />
          </div>
          <div className="job-form-ip-box">
            <label htmlFor="">Email*</label>
            <input type="email" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobForm;
