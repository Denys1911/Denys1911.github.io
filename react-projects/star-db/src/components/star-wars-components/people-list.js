import {withData, withSwapiService, withChildFunction, compose} from "../hoc-helpers";
import ItemsList from "../items-list";

const renderPeopleListItemLabel = ({name}) => name;

const mapPeopleMethodsToProps = swapiService => {
    return {
        getItemsData: swapiService.getAllPeople
    }
};

const PeopleList = compose(
    withSwapiService(mapPeopleMethodsToProps),
    withData,
    withChildFunction(renderPeopleListItemLabel)
)(ItemsList);

export default PeopleList;