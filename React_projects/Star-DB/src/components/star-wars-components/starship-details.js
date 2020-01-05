import ItemDetails, {Record} from "../item-details";
import React from "react";
import {withSwapiService} from "../hoc-helpers";

const StarshipDetails = props => (
    <ItemDetails {...props}>
        <Record name="model" label="Model"/>
        <Record name="manufacturer" label="Manufacturer"/>
        <Record name="costInCredits" label="Cost"/>
        <Record name="passengers" label="Passengers"/>
        <Record name="cargoCapacity" label="Cargo capacity"/>
    </ItemDetails>
);

const mapMethodsToProps = swapiService => {
    return {
        getItemData: swapiService.getStarship,
        getItemImageUrl: swapiService.getStarshipImageUrl
    }
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);