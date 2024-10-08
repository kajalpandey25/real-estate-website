import React, { useState } from "react";
import "./Commercial.css";
import { FaPhone, FaComment } from "react-icons/fa";

const Commercial = () => {
  // Filter state management
  const [isActive, setIsActive] = useState(false);
  const [activeItems, setActiveItems] = useState({
    commercial: { home: false, villas: false, apartment: false, plots: false },
    residential: { home: false, villas: false, apartment: false, plots: false },
    agriculture: { farm: false, orchard: false, ranch: false, land: false },
  });

  // State for price, state, city, and local area
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  // const [price, setPrice] = useState(300000); 
//price
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(300000);

  
    const handleMinChange = (e) => {
      const value = Math.min(e.target.value, maxPrice - 1);
      setMinPrice(value);
    };
  
    const handleMaxChange = (e) => {
      const value = Math.max(e.target.value, minPrice + 1);
      setMaxPrice(value);
    }
  
  // data for states, cities, and local areas
  const stateCityAreaData = {
    Maharashtra: {
      Mumbai: {
        Andheri: { lat: 19.1196, lng: 72.8468 },
        Borivali: { lat: 19.2288, lng: 72.8562 },
        Juhu: { lat: 19.0969, lng: 72.8261 },
      },
      Pune: {
        "Shivaji Nagar": { lat: 18.5308, lng: 73.8478 },
        Kothrud: { lat: 18.5074, lng: 73.8077 },
        Hinjewadi: { lat: 18.5957, lng: 73.7187 },
      },
      Nashik: {
        "College Road": { lat: 20.0057, lng: 73.7931 },
        "Gangapur Road": { lat: 20.0098, lng: 73.7572 },
      },
    },
    Karnataka: {
      Bangalore: {
        Koramangala: { lat: 12.9352, lng: 77.6245 },
        Whitefield: { lat: 12.9698, lng: 77.7499 },
        Indiranagar: { lat: 12.9716, lng: 77.6412 },
      },
      Mysore: {
        Vijayanagar: { lat: 12.3165, lng: 76.6355 },
        Hebbal: { lat: 12.3489, lng: 76.6331 },
        Saraswathipuram: { lat: 12.3027, lng: 76.6394 },
      },
      Hubli: {
        "Gokul Road": { lat: 15.3647, lng: 75.1240 },
        "Vidya Nagar": { lat: 15.3507, lng: 75.1380 },
      },
    },
    TamilNadu: {
      Chennai: {
        Mylapore: { lat: 13.0339, lng: 80.2619 },
        "Anna Nagar": { lat: 13.0892, lng: 80.2095 },
      },
      Coimbatore: {
        "RS Puram": { lat: 11.0070, lng: 76.9469 },
        Gandhipuram: { lat: 11.0168, lng: 76.9558 },
      },
    },
    Delhi: {
      "New Delhi": {
        "Connaught Place": { lat: 28.6315, lng: 77.2167 },
        "Hauz Khas": { lat: 28.5494, lng: 77.2001 },
        Dwarka: { lat: 28.5916, lng: 77.0423 },
      },
      Rohini: {
        Sector5: { lat: 28.7159, lng: 77.1130 },
        Sector13: { lat: 28.7141, lng: 77.1308 },
      },
    },
    UttarPradesh: {
      Lucknow: {
        "Hazratganj": { lat: 26.8467, lng: 80.9462 },
        "Gomti Nagar": { lat: 26.8500, lng: 81.0200 },
      },
      Agra: {
        Tajganj: { lat: 27.1604, lng: 78.0399 },
        "Dayal Bagh": { lat: 27.2187, lng: 78.0216 },
      },
    },
  };
  

  // Handle category toggle
  const toggleFilter = () => {
    setIsActive(!isActive);
  };

  // Handle item selection in filters
  const toggleItem = (category, item) => {
    setActiveItems((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [item]: !prevState[category][item],
      },
    }));
  };

  // Handle state change
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedCity(""); // Reset city and local area
    setSelectedArea("");
  };

  // Handle city change
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setSelectedArea(""); // Reset local area
  };

  // Handle area change
  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
  };
  const SellerCard = ({ seller }) => {
    return (
      <div className="seller-card">
        <img src={seller.image} alt="seller" className="seller-image" />
        <div className="seller-details">
          <p>{seller.name}</p>
          <span>{seller.status}</span>
        </div>
      </div>
    );
  };

  const properties = [
    {
      id: 1,
      title: "BLK 7-1005, Vascon Tulips Gold",
      description:
        "It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.",
      propertySize: "900 Sq. Ft.",
      price: "2,75,000/-",
      imageUrl:
        "https://media.istockphoto.com/id/1138504603/photo/high-rise-buildings-in-gurgaon-delhi-ncr-shot-at-dusk.webp?a=1&b=1&s=612x612&w=0&k=20&c=pBXO7HXnbaP3tICGEMWlffHy3lLtLJQkVOf04oUzvPA=", 
    },
    {
      id: 2,
      title: "BLK 7-1005, Vascon Tulips Gold",
      description:
        "It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.",
      propertySize: "900 Sq. Ft.",
      price: "2,75,000/-",
      imageUrl:
        "https://media.istockphoto.com/id/946740780/photo/city-cityscape-street-apartment-city-street.jpg?s=612x612&w=0&k=20&c=BTZfSyWgDzTMNcKBkQq6wTDY9L9XASd8gpwl_JzrAKM=", 
    },
    {
      id: 3,
      title: "BLK 7-1005, Vascon Tulips Gold",
      description:
        "It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.",
      propertySize: "900 Sq. Ft.",
      price: "2,75,000/-",
      imageUrl:
        "https://media.istockphoto.com/id/1429383056/photo/evening-time-phrom-phong-district-cityscape-at-bangkok-pedestrian-crowd-crossing-and-traffic.jpg?s=612x612&w=0&k=20&c=LRoWV5aDZkPU5XlDzDxTjZq3zxcst2bIXOlS3Ekj-4w=", 
    },
    {
      id: 4,
      title: "BLK 7-1005, Vascon Tulips Gold",
      description:
        "It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.",
      propertySize: "900 Sq. Ft.",
      price: "2,75,000/-",
      imageUrl:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWwlMjBlc3RhdGUlMjAlMjBwcm9wZXJ0eSUyMGltYWdlfGVufDB8fDB8fHww", 
    },
    {
      id: 5,
      title: "BLK 7-1005, Vascon Tulips Gold",
      description:
        "It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.",
      propertySize: "900 Sq. Ft.",
      price: "2,75,000/-",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D", 
    },
    {
      id: 6,
      title: "BLK 7-1005, Vascon Tulips Gold",
      description:
        "It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.",
      propertySize: "900 Sq. Ft.",
      price: "2,75,000/-",
      imageUrl:
        "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZSUyMHByb3Blcnl8ZW58MHx8MHx8fDA%3D", 
    },
    {
      id: 7,
      title: "BLK 7-1005, Vascon Tulips Gold",
      description:
        "It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.",
      propertySize: "900 Sq. Ft.",
      price: "2,75,000/-",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1674035036687-616ef2d0a7cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbCUyMGVzdGF0ZSUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww", 
    },
    {
      id: 8,
      title: "BLK 7-1005, Vascon Tulips Gold",
      description:
        "It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.",
      propertySize: "900 Sq. Ft.",
      price: "2,75,000/-",
      imageUrl:
        "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZSUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww", 
    },
    {
      id: 9,
      title: "BLK 7-1005, Vascon Tulips Gold",
      description:
        "It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.",
      propertySize: "900 Sq. Ft.",
      price: "2,75,000/-",
      imageUrl:
        "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    },
  ];
  // sellers
  const sellers = [
    { name: "Philip", status: "online", verified: true, img: "philips.jpg" },
    { name: "Lily", status: "offline", verified: false, img: "lily.jpg" },
    { name: "Brandie", status: "busy", verified: false, img: "1.jpg" },
    { name: "Darrell", status: "online", verified: false, img: "2.jpg" },
    { name: "Calvin", status: "busy", verified: false, img: "3.jpg" },
    { name: "Bessie", status: "online", verified: true, img: "5.jpg" },
    { name: "Tanya", status: "online", verified: false, img: "4.jpg" },
    { name: "Gregory", status: "online", verified: false, img: "9.jpg" },
    { name: "Randall", status: "offline", verified: true, img: "6.jpg" },
    { name: "Kristin", status: "online", verified: false, img: "10.jpg" },
    { name: "Guy", status: "online", verified: true, img: "7.jpg" },
    { name: "Esther", status: "online", verified: false, img: "8.jpg" },
    { name: "Audrey", status: "offline", verified: false, img: "11.jpg" },
  ];

  // Handle Previous Page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="residential-container">
    <div className="property-header">
      <h2 style={{marginRight:"600px", marginBottom:"5px", marginTop:"5px", fontSize:"20px"}}>Residential</h2>
      <p style={{marginRight:"50px", fontSize:"15px", color:"gray"}}>Residential Projects Across India <span style={{marginLeft:"300px", fontSize:"15px", color:"gray"}}>111,117 Ads in<span style={{color:"black",fontSize:"15px", fontWeight:"bold"}}>India</span></span></p>
    </div>

    <div className="property-list-container">
      <div className="filters-container">
        {/* Property Category */}
        <div className="filter-section">
          <h3 style={{marginBottom:"30px"}}>🏠Property Category</h3>
          <div className="filter-category">
            <h4 onClick={toggleFilter}>
              <span className="toggle-icon">{isActive ? "▲" : "▼"}</span>
              🏬Commercial
            </h4>
            {isActive && (
              <ul>
                <li
                  className={
                    activeItems.commercial.home ? "active" : "inactive"
                  }
                  onClick={() => toggleItem("commercial", "home")}
                >
                  <input
                    type="checkbox"
                    id="home"
                    checked={activeItems.commercial.home}
                    readOnly
                  />
                  <label htmlFor="home">Home</label>
                </li>
                {/* Add more filter items here */}
                <li
                  className={
                    activeItems.commercial.villas ? "active" : "inactive"
                  }
                  onClick={() => toggleItem("commercial", "villas")}
                >
                  <input
                    type="checkbox"
                    id="villas"
                    checked={activeItems.commercial.villas}
                    readOnly
                  />
                  <label htmlFor="villas">Villas</label>
                </li>
                <li
                  className={
                    activeItems.commercial.apartment ? "active" : "inactive"
                  }
                  onClick={() => toggleItem("commercial", "apartment")}
                >
                  <input
                    type="checkbox"
                    id="apartment"
                    checked={activeItems.commercial.apartment}
                    readOnly
                  />
                  <label htmlFor="apartment">Apartment</label>
                </li>
                <li
                  className={
                    activeItems.commercial.plots ? "active" : "inactive"
                  }
                  onClick={() => toggleItem("commercial", "plots")}
                >
                  <input
                    type="checkbox"
                    id="plots"
                    checked={activeItems.commercial.plots}
                    readOnly
                  />
                  <label htmlFor="plots">Plots</label>
                </li>
              </ul>
            )}
          </div>
          <div className="filter-category">
            <h4 onClick={toggleFilter}>
              <span className="toggle-icon">{isActive ? "▲" : "▼"}</span>
              🏢Residential
            </h4>
            {isActive && (
              <ul>
                <li
                  className={
                    activeItems.residential.home ? "active" : "inactive"
                  }
                  onClick={() => toggleItem("residential", "home")}
                >
                  <input
                    type="checkbox"
                    id="home"
                    checked={activeItems.residential.home}
                    readOnly
                  />
                  <label htmlFor="home">Home</label>
                </li>
                <li
                  className={
                    activeItems.residential.villas ? "active" : "inactive"
                  }
                  onClick={() => toggleItem("residential", "villas")}
                >
                  <input
                    type="checkbox"
                    id="villas"
                    checked={activeItems.residential.villas}
                    readOnly
                  />
                  <label htmlFor="villas">Villas</label>
                </li>
                <li
                  className={
                    activeItems.residential.apartment ? "active" : "inactive"
                  }
                  onClick={() => toggleItem("residential", "apartment")}
                >
                  <input
                    type="checkbox"
                    id="apartment"
                    checked={activeItems.residential.apartment}
                    readOnly
                  />
                  <label htmlFor="apartment">Apartment</label>
                </li>
                <li
                  className={
                    activeItems.residential.plots ? "active" : "inactive"
                  }
                  onClick={() => toggleItem("residential", "plots")}
                >
                  <input
                    type="checkbox"
                    id="plots"
                    checked={activeItems.residential.plots}
                    readOnly
                  />
                  <label htmlFor="plots">Plots</label>
                </li>
              </ul>
            )}
          </div>
          <div className="filter-category">
            <h4 onClick={toggleFilter}>
              <span className="toggle-icon">{isActive ? "▲" : "▼"}</span>
              🌱Agriculture
            </h4>
            {isActive && (
              <ul>
                <li
                  className={
                    activeItems.agriculture.home ? "active" : "inactive"
                  }
                  onClick={() => toggleItem("agriculture", "home")}
                >
                  <input
                    type="checkbox"
                    id="home"
                    checked={activeItems.agriculture.home}
                    readOnly
                  />
                  <label htmlFor="home">Home</label>
                </li>
                <li
                  className={
                    activeItems.agriculture.villas ? "active" : "inactive"
                  }
                  onClick={() => toggleItem("agriculture", "villas")}
                >
                  <input
                    type="checkbox"
                    id="villas"
                    checked={activeItems.agriculture.villas}
                    readOnly
                  />
                  <label htmlFor="villas">Villas</label>
                </li>
                <li
                  className={
                    activeItems.agriculture.apartment ? "active" : "inactive"
                  }
                  onClick={() => toggleItem("agriculture", "apartment")}
                >
                  <input
                    type="checkbox"
                    id="apartment"
                    checked={activeItems.agriculture.apartment}
                    readOnly
                  />
                  <label htmlFor="apartment">Apartment</label>
                </li>
                <li
                  className={
                    activeItems.agriculture.plots ? "active" : "inactive"
                  }
                  onClick={() => toggleItem("agriculture", "plots")}
                >
                  <input
                    type="checkbox"
                    id="plots"
                    checked={activeItems.agriculture.plots}
                    readOnly
                  />
                  <label htmlFor="plots">Plots</label>
                </li>
              </ul>
            )}
          </div>
        </div>
        {/* Price Range */}
        <div className="price-range">
      <div className="filter-header">
        <h3>💰 Price Range</h3>
        <button>▼</button>
      </div>
      
      <div className="range-container">
        <input
          type="range"
          min="0"
          max="100000"
          value={minPrice}
          onChange={handleMinChange}
          className="range-min"
        />
        <input
          type="range"
          min="0"
          max="100000"
          value={maxPrice}
          onChange={handleMaxChange}
          className="range-max"
        />
      </div>
      
      <div className="price-inputs">
        <input
          type="text"
          value={`Rs${minPrice}`}
          readOnly
          className="price-box"
        />
        <span>-</span>
        <input
          type="text"
          value={`Rs${maxPrice}`}
          readOnly
          className="price-box"
        />
      </div>
      </div>

        {/* State Filter */}
        <div className="filter-section">
          <h3>🏙️State</h3>
          <select value={selectedState} onChange={handleStateChange}>
            <option value="">Select State</option>
            {Object.keys(stateCityAreaData).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* City Filter */}
        {selectedState && (
          <div className="filter-section">
            <h3>🏗️City</h3>
            <select value={selectedCity} onChange={handleCityChange}>
              <option value="">Select City</option>
              {Object.keys(stateCityAreaData[selectedState]).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Local Area Filter */}
        {selectedCity && (
          <div className="filter-section">
            <h3>📍Local Area</h3>
            <select value={selectedArea} onChange={handleAreaChange}>
              <option value="">Select Area</option>
              {Object.keys(stateCityAreaData[selectedState][selectedCity]).map(
                (area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                )
              )}
            </select>
            {/* Embed Google Map below the dropdown */}
            {selectedArea && (
              <div className="map-section">
                <iframe
                  width="300"
                  height="250"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowHalfScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0142794556875!2d144.96305731550005!3d-37.81627937975125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne!5e0!3m2!1sen!2sau!4v1600264820144!5m2!1sen!2sau=${selectedArea},${selectedCity},${selectedState}`}
                ></iframe>
              </div>
            )}
          </div>
        )}

        {/* seller-2  */}
        <div className="seller-list">
          <h2>Suggested Seller</h2>
          {sellers.map((seller, index) => (
            <div key={index} className="seller">
              <div className="seller-info">
                <img
                  src={seller.img}
                  alt={seller.name}
                  className="seller-img"
                />
                <div className="seller-details">
                  <h3>
                    {seller.name}
                    {seller.verified && <span className="verified">✔️</span>}
                  </h3>
                  <p>Lorem Ipsum, LOREM</p>
                </div>
              </div>
              <div className="seller-actions">
                <FaComment className="action-icon" />
                <FaPhone className="action-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Property Listing */}
      <div className="property-list">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.imageUrl} alt={property.title} />
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p style={{ color: "red" }}>
              Property Size: {property.propertySize}
            </p>
            <p style={{ color: "black" }}>Price: {property.price}</p>
            <button>View More</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
export default Commercial;
