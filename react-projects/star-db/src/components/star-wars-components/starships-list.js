import React from "react";
import {withData, withSwapiService, withChildFunction, compose} from "../hoc-helpers";
import ItemsList from "../items-list";

const renderStarshipsListItemLabel = ({name, passengers}) => (
    <div>
        {name} <span className="text-info">({passengers} passengers)</span>
    </div>
);

const mapStarshipsMethodsToProps = swapiService => {
    return {
        getItemsData: swapiService.getAllStarships
    }
};

const StarshipsList = compose(
    withSwapiService(mapStarshipsMethodsToProps),
    withData,
    withChildFunction(renderStarshipsListItemLabel)
)(ItemsList);

export default StarshipsList;