import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText" style={{color:"green"}}>Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better{" "}
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">099 991 270 85</span>
                  </div>
                </div>
                <div className="flexCenter button">Call now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">099 991 270 85</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat now</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">011 412 199 99</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">011 412 199 99</span>
                  </div>
                </div>
                <div className="flexCenter button">Message now</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
      {/* contact page 2 */}
    <div className="contact-us-container">
      <div className="contact-info">
        <div className="contact-box">
          <i className="fas fa-phone"></i>
          <p>Phone number</p>
          <span style={{fontSize:"20px"}}>0124 6650000</span>
        </div>
        <div className="contact-box">
          <i className="fas fa-envelope"></i>
          <p>Email ID</p>
          <span style={{fontSize:"20px"}}>Life@oncoquest.net</span>
        </div>
        <div className="contact-box">
          <i className="fab fa-whatsapp"></i>
          <p>Whatsapp On:</p>
          <span style={{fontSize:"20px"}}>7085350350</span>
        </div>
      </div>
      
      <div className="office-info">
        <h3>Registered Office:</h3>
        <p style={{marginTop:"10px"}}>
          Meteryard Pvt Ltd<br />
          B-21A, Africa Avenue Road, Opposite St. Thomas Church, Safdarjung Enclave New Delhi – 110029
        </p>
        <h3 style={{marginTop:"10px"}}>National Reference Laboratory:</h3>
        <p style={{marginTop:"10px"}}>
          Meteryard Pvt Ltd<br />
          A-17, Infocity, Sector-34 Gurgaon, Haryana – 122001
        </p>
        <p className="customer-care" style={{marginTop:"10px"}}>Nationwide Customer Care: 0124 6650000</p>
      </div>

       {/* <div className="map-container"> */}
        {/* Embed the map */}
        {/* <img src="https://maps.app.goo.gl/qfcM9hCpz3k3ANwN7" alt="Location Map" />
      </div>  */}
      <div className="map-container" style={{ height: '400px', width: '100%' }}>
  <iframe
    title="Location Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0142794556875!2d144.96305731550005!3d-37.81627937975125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne!5e0!3m2!1sen!2sau!4v1600264820144!5m2!1sen!2sau"
    width="100%"
    height="100%"
    frameBorder="0"
    style={{ border: 0 }}
    allowFullScreen=""
    aria-hidden="false"
    tabIndex="0"
  ></iframe>
</div>

      <div className="contact-form">
        <h3>Contact Us</h3>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Enter Email ID" />
          <input type="tel" placeholder="Enter Your Number" />
          <input type="text" placeholder="Enter Your City" />
          <textarea placeholder="Enter Your Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
