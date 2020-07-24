import React from "react";
import ItemDetails from "../item-details";
import { withData, withService } from "../../hocs";
import { Record } from "../app/app";
import { SwapiServiceConsumer } from "../../context";

const personDetails = ({ selectedItem, swapiService }) => (
  <SwapiServiceConsumer>
    {({ getPerson, getPersonImage }) => {
      return (
        <ItemDetails
          selectedItem={selectedItem}
          getData={getPerson}
          getImageUrl={getPersonImage}
        >
          <Record field="gender" label="Gender"></Record>
          <Record field="eyeColor" label="Eye color"></Record>
          <Record field="birthYear" label="Birth year"></Record>
        </ItemDetails>
      );
    }}
  </SwapiServiceConsumer>
);

const PersonDetails = withService(personDetails);

const planetDetails = ({ selectedItem, swapiService }) => (
  <SwapiServiceConsumer>
    {({ getPlanet, getPlanetImage }) => {
      return (
        <ItemDetails
          selectedItem={selectedItem}
          getData={getPlanet}
          getImageUrl={getPlanetImage}
        >
          <Record field="name" label="Name"></Record>
          <Record field="population" label="Population"></Record>
          <Record field="rotation_period" label="Rotation period"></Record>
          <Record field="diameter" label="Diameter"></Record>
        </ItemDetails>
      );
    }}
  </SwapiServiceConsumer>
);

const PlanetDetails = withService(planetDetails);

const starshipDetails = ({ selectedItem, swapiService }) => (
  <SwapiServiceConsumer>
    {({ getStarship, getStarshipImage }) => {
      return (
        <ItemDetails
          selectedItem={selectedItem}
          getData={getStarship}
          getImageUrl={getStarshipImage}
        >
          <Record field="model" label="Model"></Record>
          <Record field="manufacturer" label="Manufacturer"></Record>
          <Record field="length" label="Length"></Record>
          <Record field="crew" label="Crew"></Record>
        </ItemDetails>
      );
    }}
  </SwapiServiceConsumer>
);

const StarshipDetails = withService(starshipDetails);

export { PersonDetails, PlanetDetails, StarshipDetails };
