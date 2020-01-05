import React from "react";
import {withData, withSwapiService, withChildFunction, compose} from "../hoc-helpers";
import ItemsList from "../items-list";

const renderPlanetsListItemLabel = ({name, population}) => (
    <div>
        {name} <span className="text-info">(population: {population})</span>
    </div>
);

const mapPlanetsMethodsToProps = swapiService => {
    return {
        getItemsData: swapiService.getAllPlanets
    }
};

const PlanetsList = compose(
    withSwapiService(mapPlanetsMethodsToProps),
    withData,
    withChildFunction(renderPlanetsListItemLabel)
)(ItemsList);

export default PlanetsList;