import React from "react";
import "./UploadCity.css";

const UploadCityImage = ({ prevStep, nextStep, cityDetails, setCityDetails }) => {
  const handleFileUpload = (e) => {
    setCityDetails({ ...cityDetails, image: e.target.files[0] });
  };

  return (
    <div>
      <h2>Upload City Image</h2>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default UploadCityImage;
