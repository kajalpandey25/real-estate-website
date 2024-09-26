import React, { useState } from "react";
import "./CityPage.css";

const CityPage = () => {
  // State to track which FAQ item is expanded
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(index === activeFAQ ? null : index);
  };

  return (
    <div className="property-page">
      {/* Header Section */}
      <header className="property-header">
        <h1>
          Find Your Most <span>exciting Property</span>
        </h1>
        <p>Featured Residential projects across India.</p>
      </header>

      {/* Image Gallery and Filters */}
      <section className="property-gallery">
        <div className="gallery-images">
          <img
            src="https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Property 1"
          />
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlYWwlMjBlc3RhdGUlMjBwcm9wZXJ0eXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Property 2"
          />
          <img
            src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWwlMjBlc3RhdGUlMjBwcm9wZXJ0eXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Property 3"
          />
          <img
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZSUyMHByb3BlcnR5fGVufDB8fDB8fHww"
            alt="Property 4"
          />
          <div className="image-overlay">
            <span>+5</span>
          </div>
        </div>

        <div className="filter-buttons">
          <button>3 Bedrooms</button>
          <button>Swimming Pool</button>
          <button>Semi-Furnished</button>
          <button className="enquire-now">Enquire Now</button>
        </div>
      </section>

      {/* Property Details Section */}
      <section className="property-details">
        <h2>More Details</h2>
        <div className="details-grid">
          <div>
            Price Breakup:{" "}
            <span style={{ color: "gray", fontSize: "16px" }}>17.5 Cr</span>
          </div>
          <div>Booking Amount:<span style={{ color: "gray", fontSize: "16px" }}>1,00,000</span></div>
          <div>Address:<span style={{ color: "gray", fontSize: "16px" }}>Noida</span></div>
          <div>Furnishing: <span style={{ color: "gray", fontSize: "16px" }}>BLK 7-1005, Vascon Tulips Gold</span></div>
          <div>Type of Ownership: <span style={{ color: "gray", fontSize: "16px" }}>Owner</span></div>
        </div>
        <div style={{marginTop:"10px"}}>See More.....</div>
      </section>

      {/* Suggested Properties Section */}
      <section className="suggested-properties">
        <h2>Suggested Properties in This Project and Nearby</h2>
        <p style={{color:"gray", marginBottom:"20px"}}>Featured Residential Projects Across India</p>
        <div className="property-cards">
          <div className="property-card">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhbHxlbnwwfHwwfHx8MA%3D%3D" alt="Property 1" />
            <div className="property-info">
              <p>3 BHK, Noida</p>
              <p>Price: 2 Cr</p>
            </div>
          </div>
          <div className="property-card">
            <img src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D" alt="Property 2" />
            <div className="property-info">
              <p>2 BHK, Mumbai</p>
              <p>Price: 1 Cr</p>
            </div>
          </div>
          {/* Repeat for other property cards */}
          <div className="property-card">
            <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8" alt="Property 3" />
            <div className="property-info">
              <p>4 BHK, Delhi</p>
              <p>Price: 5 Cr</p>
            </div>
          </div>
          <div className="property-card">
            <img src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWx8ZW58MHx8MHx8fDA%3D" alt="Property 4" />
            <div className="property-info">
              <p>4 BHK, Delhi</p>
              <p>Price: 5 Cr</p>
            </div>
          </div>
          <div className="property-card">
            <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHJlYWx8ZW58MHx8MHx8fDA%3D" alt="Property 5" />
            <div className="property-info">
              <p>4 BHK, Delhi</p>
              <p>Price: 5 Cr</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Projects Section */}
      <section className="commercial-projects">
        <h2>Commercial Projects</h2>
        <p style={{color:"gray", marginBottom:"20px"}}>Featured Residential Projects Across India</p>
        <div className="property-cards">
          <div className="property-card">
            <img src="https://images.unsplash.com/photo-1636739067155-643a5c678831?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbW1lcmNpYWwlMjByZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww" alt="Commercial 1" />
            <div className="property-info">
              <p>Office Space, Mumbai</p>
              <p>Price: ₹5 Cr</p>
            </div>
          </div>
          <div className="property-card">
            <img src="https://images.unsplash.com/photo-1656646424687-b303e1758b36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbW1lcmNpYWwlMjByZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww" alt="Commercial 2" />
            <div className="property-info">
              <p>Retail Space, Pune</p>
              <p>Price: 3 Cr</p>
            </div>
          </div>
          {/* Repeat for other commercial property cards */}
          <div className="property-card">
            <img src="https://images.unsplash.com/photo-1656646424976-845444fff394?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbW1lcmNpYWwlMjByZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww" alt="Commercial 3" />
            <div className="property-info">
              <p>Office Space, Bihar</p>
              <p>Price: 1 Cr</p>
            </div>
          </div>
          <div className="property-card">
            <img src="https://plus.unsplash.com/premium_photo-1672423154405-5fd922c11af2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D" alt="Commercial 4" />
            <div className="property-info">
              <p>Retail Space, Gurugram</p>
              <p>Price: 3 Cr</p>
            </div>
          </div>
          <div className="property-card">
            <img src="https://plus.unsplash.com/premium_photo-1661340695541-ee1ca7efedd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1aWxkaW5nfGVufDB8fDB8fHww" alt="Commercial 5" />
            <div className="property-info">
              <p>Office Space, Gujrat</p>
              <p>Price: 2 Cr</p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(1)}>
            What is the process for buying a property?
            <span>{activeFAQ === 1 ? "-" : "+"}</span>
          </div>
          {activeFAQ === 1 && (
            <div className="faq-answer">
              <p>
                The process involves selecting a property, checking legal documents, making an offer, and completing paperwork through a legal process. After paying the booking amount and signing the agreement, the rest of the payment is made to finalize the deal.
              </p>
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(2)}>
            How can I schedule a property visit?
            <span>{activeFAQ === 2 ? "-" : "+"}</span>
          </div>
          {activeFAQ === 2 && (
            <div className="faq-answer">
              <p>
                You can schedule a visit by contacting the property agent through the "Enquire Now" button or reaching out to the provided contact details on the property listing.
              </p>
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(3)}>
            What are the available payment methods?
            <span>{activeFAQ === 3 ? "-" : "+"}</span>
          </div>
          {activeFAQ === 3 && (
            <div className="faq-answer">
              <p>
                Payment can be made via bank transfer, home loans, or credit cards depending on the terms of the agreement. Full details are provided during the finalization of the property.
              </p>
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(4)}>
            Are there any additional charges besides the property price?
            <span>{activeFAQ === 4 ? "-" : "+"}</span>
          </div>
          {activeFAQ === 4 && (
            <div className="faq-answer">
              <p>
                Yes, additional charges may include registration fees, taxes, maintenance charges, and furnishing costs, depending on the property. Make sure to ask the seller or agent about these costs.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CityPage;
