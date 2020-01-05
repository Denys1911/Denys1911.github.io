import React from "react";

import {withRouter} from "react-router-dom";
import {PlanetsList, PlanetDetails} from "../star-wars-components";
import ItemsPage from "../items-page";

const PlanetsPage = props => {
    return <ItemsPage {...props} ItemsList={PlanetsList} ItemDetails={PlanetDetails}/>
};

export default withRouter(PlanetsPage);