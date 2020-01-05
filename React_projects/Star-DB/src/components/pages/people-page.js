import React from "react";

import {withRouter} from "react-router-dom";
import {PeopleList, PersonDetails} from "../star-wars-components";
import ItemsPage from "../items-page";

const PeoplePage = props => {
    return <ItemsPage {...props} ItemsList={PeopleList} ItemDetails={PersonDetails}/>
};

export default withRouter(PeoplePage);
