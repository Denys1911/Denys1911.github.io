import React from "react";
import ItemDetails, {Record} from "../item-details";
import {withSwapiService} from "../hoc-helpers";

const PlanetDetails = props => (
    <ItemDetails {...props}>
        <Record name="population" label="Population"/>
        <Record name="rotationPeriod" label="Rotation period"/>
        <Record name="diameter" label="Diameter"/>
    </ItemDetails>
);

const mapMethodsToProps = swapiService => {
    return {
        getItemData: swapiService.getPlanet,
        getItemImageUrl: swapiService.getPlanetImageUrl
    }
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);