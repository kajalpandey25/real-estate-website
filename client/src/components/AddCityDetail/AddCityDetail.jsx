import React from "react";

const AddCityDetails = ({ nextStep, cityDetails, setCityDetails }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCityDetails({ ...cityDetails, [name]: value });
  };

  return (
    <div>
      <h2>Add City Details</h2>
      <input
        type="text"
        name="name"
        placeholder="City Name"
        value={cityDetails.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        value={cityDetails.country}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="City Description"
        value={cityDetails.description}
        onChange={handleChange}
      />
      <input
        type="number"
        name="population"
        placeholder="Population"
        value={cityDetails.population}
        onChange={handleChange}
      />
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default AddCityDetails;
