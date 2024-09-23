import React, { useState } from "react";
import "./Commercial.css"; // Assuming external CSS

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
  const [price, setPrice] = useState(300000); // Initial price

  // Hardcoded data for states, cities, and local areas
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
    },
    Delhi: {
      "New Delhi": {
        "Connaught Place": { lat: 28.6315, lng: 77.2167 },
        "Hauz Khas": { lat: 28.5494, lng: 77.2001 },
        Dwarka: { lat: 28.5916, lng: 77.0423 },
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
        "https://media.istockphoto.com/id/1138504603/photo/high-rise-buildings-in-gurgaon-delhi-ncr-shot-at-dusk.webp?a=1&b=1&s=612x612&w=0&k=20&c=pBXO7HXnbaP3tICGEMWlffHy3lLtLJQkVOf04oUzvPA=", // Replace with actual image path
    },
    {
      id: 2,
      title: "BLK 7-1005, Vascon Tulips Gold",
      description:
        "It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.",
      propertySize: "900 Sq. Ft.",
      price: "2,75,000/-",
      imageUrl:
        "https://media.istockphoto.com/id/946740780/photo/city-cityscape-street-apartment-city-street.jpg?s=612x612&w=0&k=20&c=BTZfSyWgDzTMNcKBkQq6wTDY9L9XASd8gpwl_JzrAKM=", // Replace with actual image path
    },
    {
      id: 3,
      title: "BLK 7-1005, Vascon Tulips Gold",
      description:
        "It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.",
      propertySize: "900 Sq. Ft.",
      price: "2,75,000/-",
      imageUrl:
        "https://media.istockphoto.com/id/1429383056/photo/evening-time-phrom-phong-district-cityscape-at-bangkok-pedestrian-crowd-crossing-and-traffic.jpg?s=612x612&w=0&k=20&c=LRoWV5aDZkPU5XlDzDxTjZq3zxcst2bIXOlS3Ekj-4w=", // Replace with actual image path
    },
    {
      id: 4,
      title: "BLK 7-1005, Vascon Tulips Gold",
      description:
        "It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.",
      propertySize: "900 Sq. Ft.",
      price: "2,75,000/-",
      imageUrl:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWwlMjBlc3RhdGUlMjAlMjBwcm9wZXJ0eSUyMGltYWdlfGVufDB8fDB8fHww", // Replace with actual image path
    },
    {
      id: 5,
      title: "BLK 7-1005, Vascon Tulips Gold",
      description:
        "It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.",
      propertySize: "900 Sq. Ft.",
      price: "2,75,000/-",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D", // Replace with actual image path
    },
    {
      id: 6,
      title: "BLK 7-1005, Vascon Tulips Gold",
      description:
        "It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.",
      propertySize: "900 Sq. Ft.",
      price: "2,75,000/-",
      imageUrl:
        "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZSUyMHByb3Blcnl8ZW58MHx8MHx8fDA%3D", // Replace with actual image path
    },
  ];
  const sellers = [
    { name: 'Philip', status: 'Online', image:'philips.jpg'},
    { name: 'Lily', status: 'Online', image:'lily.jpg'},
    { name: 'Brandlie', status: 'Online', image:'1.jpg'},
    { name: 'Darrell', status: 'Offline', image:'2.jpg'},
    { name: 'Calvin', status: 'Online', image:'3.jpg'},
    { name: 'Bassie', status: 'Offline', image:'4.jpg'},
    { name: 'Tanya', status: 'Online', image:'5.jpg'},
    { name: 'Guy', status: 'Offline', image:'1.jpg'},
  ];


  // Handle Previous Page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="property-list-container">
      <div className="filters-container">
        {/* Property Category */}
        <div className="filter-section">
          <h3>🏠Property Category</h3>
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
        <div className="filter-section">
          <h3>💵Price Range</h3>
          <input
            type="range"
            min="0"
            max="50000"
            step="1000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="price-range">Price up to ₹{price}</label>
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
          </div>
        )}
        {/* seller */}
        <div className="seller-list">
        <h3>Seller</h3>
        {sellers.map((seller, index) => (
          <SellerCard key={index} seller={seller} />
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
  );
};

export default Commercial;
