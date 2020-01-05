import React from "react";
import ItemDetails, {Record} from "../item-details";
import {withSwapiService} from "../hoc-helpers";

const PersonDetails = props => (
    <ItemDetails {...props}>
        <Record name="gender" label="Gender"/>
        <Record name="birthYear" label="Birth Year"/>
        <Record name="eyeColor" label="Eye Color"/>
    </ItemDetails>
);

const mapMethodsToProps = swapiService => {
    return {
        getItemData: swapiService.getPerson,
        getItemImageUrl: swapiService.getPersonImageUrl
    }
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);