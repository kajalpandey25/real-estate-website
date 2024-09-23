import React from "react";

const AddFacilities = ({ prevStep, nextStep, cityDetails, setCityDetails }) => {
  const handleFacilityChange = (e) => {
    const { name, value } = e.target;
    setCityDetails({
      ...cityDetails,
      facilities: { ...cityDetails.facilities, [name]: parseInt(value, 10) },
    });
  };

  return (
    <div>
      <h2>Add City Facilities</h2>
      <input
        type="number"
        name="hospitals"
        placeholder="Hospitals"
        value={cityDetails.facilities.hospitals}
        onChange={handleFacilityChange}
      />
      <input
        type="number"
        name="schools"
        placeholder="Schools"
        value={cityDetails.facilities.schools}
        onChange={handleFacilityChange}
      />
      <input
        type="number"
        name="parks"
        placeholder="Parks"
        value={cityDetails.facilities.parks}
        onChange={handleFacilityChange}
      />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default AddFacilities;
