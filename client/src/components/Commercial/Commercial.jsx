import React, { useState } from "react";
import "./Commercial.css"; // Assuming external CSS
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Commercial = () => {
  // Filter state management
  const [isActive, setIsActive] = useState({
    commercial: false,
    residential: false,
    agriculture: false,
  });
  // State for keeping track of active items
  const [activeItems, setActiveItems] = useState({
    commercial: { home: false, villas: false, apartment: false, plots: false },
    residential: { home: false, villas: false, apartment: false, plots: false },
    agriculture: { farm: false, orchard: false, ranch: false, land: false },
  });
  const toggleCategory = (category) => {
    setIsActive((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const toggleItem = (category, item) => {
    setActiveItems((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [item]: !prevState[category][item],
      },
    }));
  };

  // Map configuration state
  const [mapCenter, setMapCenter] = useState({ lat: 20.5937, lng: 78.9629 }); // Default India center
  const [zoom, setZoom] = useState(5);

  // State for price, state, city, and local area
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [price, setPrice] = useState(250000); // Initial price

  // Hardcoded data for states, cities, and local areas
  const stateCityAreaData = {
    "Maharashtra": {
      "Mumbai": {
        "Andheri": { lat: 19.1196, lng: 72.8468 },
        "Borivali": { lat: 19.2288, lng: 72.8562 },
        "Juhu": { lat: 19.0969, lng: 72.8261 }
      },
      "Pune": {
        "Shivaji Nagar": { lat: 18.5308, lng: 73.8478 },
        "Kothrud": { lat: 18.5074, lng: 73.8077 },
        "Hinjewadi": { lat: 18.5957, lng: 73.7187 }
      }
    },
    "Karnataka": {
      "Bangalore": {
        "Koramangala": { lat: 12.9352, lng: 77.6245 },
        "Whitefield": { lat: 12.9698, lng: 77.7499 },
        "Indiranagar": { lat: 12.9716, lng: 77.6412 }
      },
      "Mysore": {
        "Vijayanagar": { lat: 12.3165, lng: 76.6355 },
        "Hebbal": { lat: 12.3489, lng: 76.6331 },
        "Saraswathipuram": { lat: 12.3027, lng: 76.6394 }
      }
    },
    "Delhi": {
      "New Delhi": {
        "Connaught Place": { lat: 28.6315, lng: 77.2167 },
        "Hauz Khas": { lat: 28.5494, lng: 77.2001 },
        "Dwarka": { lat: 28.5916, lng: 77.0423 }
      }
    }
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
  // const handleAreaChange = (e) => {
  //   setSelectedArea(e.target.value);
  // };
 // Handle area change and update map position
 const handleAreaChange = (e) => {
  const area = e.target.value;
  setSelectedArea(area);
  const coordinates = stateCityAreaData[selectedState][selectedCity][area];
  if (coordinates) {
    setMapCenter(coordinates);
    setZoom(13); // Zoom in to the local area
  }
};
  const properties = [
    {
                id: 1,
                title: 'BLK 7-1005, Vascon Tulips Gold',
                description: 'It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.',
                propertySize: '900 Sq. Ft.',
                price: '2,75,000/-',
                imageUrl: 'https://media.istockphoto.com/id/1138504603/photo/high-rise-buildings-in-gurgaon-delhi-ncr-shot-at-dusk.webp?a=1&b=1&s=612x612&w=0&k=20&c=pBXO7HXnbaP3tICGEMWlffHy3lLtLJQkVOf04oUzvPA=', // Replace with actual image path
            },
            {
                id: 2,
                title: 'BLK 7-1005, Vascon Tulips Gold',
                description: 'It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.',
                propertySize: '900 Sq. Ft.',
                price: '2,75,000/-',
                imageUrl: 'https://media.istockphoto.com/id/946740780/photo/city-cityscape-street-apartment-city-street.jpg?s=612x612&w=0&k=20&c=BTZfSyWgDzTMNcKBkQq6wTDY9L9XASd8gpwl_JzrAKM=', // Replace with actual image path
            },
            {
                id: 3,
                title: 'BLK 7-1005, Vascon Tulips Gold',
                description: 'It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.',
                propertySize: '900 Sq. Ft.',
                price: '2,75,000/-',
                imageUrl: 'https://media.istockphoto.com/id/1429383056/photo/evening-time-phrom-phong-district-cityscape-at-bangkok-pedestrian-crowd-crossing-and-traffic.jpg?s=612x612&w=0&k=20&c=LRoWV5aDZkPU5XlDzDxTjZq3zxcst2bIXOlS3Ekj-4w=', // Replace with actual image path
            },
            {
                id: 4,
                title: 'BLK 7-1005, Vascon Tulips Gold',
                description: 'It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.',
                propertySize: '900 Sq. Ft.',
                price: '2,75,000/-',
                imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWwlMjBlc3RhdGUlMjAlMjBwcm9wZXJ0eSUyMGltYWdlfGVufDB8fDB8fHww', // Replace with actual image path
            },
            {
                id: 5,
                title: 'BLK 7-1005, Vascon Tulips Gold',
                description: 'It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.',
                propertySize: '900 Sq. Ft.',
                price: '2,75,000/-',
                imageUrl: 'https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D', // Replace with actual image path
            },
            {
                id: 6,
                title: 'BLK 7-1005, Vascon Tulips Gold',
                description: 'It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.',
                propertySize: '900 Sq. Ft.',
                price: '2,75,000/-',
                imageUrl: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZSUyMHByb3Blcnl8ZW58MHx8MHx8fDA%3D', // Replace with actual image path
            },
];

  return (
    <div className="property-list-container">
      <div className="filters-container">
        {/* Property Category */}
        <div className="filter-section">
          <h3>🏠Property Category</h3>
          <div className="filter-category">
            <h4 onClick={() => toggleCategory("commercial")}>
              <span className="toggle-icon">{isActive.commercial ? "▲" : "▼"}</span> 🏬 Commercial
            </h4>
            {isActive.commercial && (
              <ul>
                {["home", "villas", "apartment", "plots"].map((item) => (
                  <li
                    key={item}
                    className={activeItems.commercial[item] ? "active" : "inactive"}
                    onClick={() => toggleItem("commercial", item)}
                  >
                    <input
                      type="checkbox"
                      id={item}
                      checked={activeItems.commercial[item]}
                      readOnly
                    />
                    <label htmlFor={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</label>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Residential Filter */}
          <div className="filter-category">
            <h4 onClick={() => toggleCategory("residential")}>
              <span className="toggle-icon">{isActive.residential ? "▲" : "▼"}</span> 🏢 Residential
            </h4>
            {isActive.residential && (
              <ul>
                {["home", "villas", "apartment", "plots"].map((item) => (
                  <li
                    key={item}
                    className={activeItems.residential[item] ? "active" : "inactive"}
                    onClick={() => toggleItem("residential", item)}
                  >
                    <input
                      type="checkbox"
                      id={item}
                      checked={activeItems.residential[item]}
                      readOnly
                    />
                    <label htmlFor={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</label>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Agriculture Filter */}
          <div className="filter-category">
            <h4 onClick={() => toggleCategory("agriculture")}>
              <span className="toggle-icon">{isActive.agriculture ? "▲" : "▼"}</span> 🌱 Agriculture
            </h4>
            {isActive.agriculture && (
              <ul>
                {["farm", "orchard", "ranch", "land"].map((item) => (
                  <li
                    key={item}
                    className={activeItems.agriculture[item] ? "active" : "inactive"}
                    onClick={() => toggleItem("agriculture", item)}
                  >
                    <input
                      type="checkbox"
                      id={item}
                      checked={activeItems.agriculture[item]}
                      readOnly
                    />
                    <label htmlFor={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</label>
                  </li>
                ))}
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
        {selectedCity && (
          <div className="filter-section">
            <h3>📍Local Area</h3>
            <select value={selectedArea} onChange={handleAreaChange}>
              <option value="">Select Area</option>
              {stateCityAreaData[selectedState][selectedCity].map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
       {/* Google Map Section */}
       {selectedArea && (
        <div className="map-container">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"> {/* Replace with your API key */}
            <GoogleMap
              mapContainerStyle={{ height: "400px", width: "100%" }}
              center={mapCenter}
              zoom={zoom}
            >
              <Marker position={mapCenter} />
            </GoogleMap>
          </LoadScript>
        </div>
      )}

      {/* Property Listing */}
      <div className="property-list">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.imageUrl} alt={property.title} />
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p style={{ color: "red" }}>Property Size: {property.propertySize}</p>
            <p style={{ color: "black" }}>Price: {property.price}</p>
            <button>View More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Commercial;



