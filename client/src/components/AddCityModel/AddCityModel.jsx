import { Container, Modal, Stepper } from "@mantine/core";
import React, { useState } from "react";
import AddCityDetails from "../AddCityDetails/AddCityDetails";
import UploadCityImage from "../UploadCityImage/UploadCityImage";
import AddFacilities from "../AddFacilities/AddFacilities";
import { useAuth0 } from "@auth0/auth0-react";

const AddCitiesModal = ({ opened, setOpened }) => {
  const [active, setActive] = useState(0);
  const { user } = useAuth0();

  const [cityDetails, setCityDetails] = useState({
    name: "",
    country: "",
    description: "",
    image: null,
    population: 0,
    area: "",
    touristAttractions: "",
    facilities: {
      hospitals: 0,
      schools: 0,
      parks: 0,
    },
    userEmail: user?.email,
  });

  const nextStep = () => {
    setActive((current) => (current < 4 ? current + 1 : current));
  };

  const prevStep = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
  };

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      closeOnClickOutside
      size={"90rem"}
    >
      <Container h={"40rem"} w={"100%"}>
        <Stepper
          active={active}
          onStepClick={setActive}
          breakpoint="sm"
          allowNextStepsSelect={false}
        >
          <Stepper.Step label="City Details" description="Name & Info">
            <AddCityDetails
              nextStep={nextStep}
              cityDetails={cityDetails}
              setCityDetails={setCityDetails}
            />
          </Stepper.Step>
          <Stepper.Step label="Images" description="Upload Images">
            <UploadCityImage
              prevStep={prevStep}
              nextStep={nextStep}
              cityDetails={cityDetails}
              setCityDetails={setCityDetails}
            />
          </Stepper.Step>
          <Stepper.Step label="Facilities" description="City Facilities">
            <AddFacilities
              prevStep={prevStep}
              nextStep={nextStep}
              cityDetails={cityDetails}
              setCityDetails={setCityDetails}
            />
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to review or edit your city details.
          </Stepper.Completed>
        </Stepper>
      </Container>
    </Modal>
  );
};

export default AddCitiesModal;
