import React, {Component} from "react";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import './items-list.css';

export default class ItemsList extends Component{
    swapiService = new SwapiService();

    state = {
        peopleList: null,
        loaded: false,
        error: false
    };

    componentDidMount() {
        this.swapiService.getAllPeople()
            .then(peopleList => this.setState({peopleList, loaded: true}))
            .catch(() => this.setState({loaded: true, error: true}));
    }

    render() {
        const {peopleList, loaded, error} = this.state;
        const {onPersonSelected, selectedPersonId} = this.props;
        const spinner = !loaded ? <Spinner/> : null;
        const content = (loaded && !error) ? <ListView peopleList={peopleList} onPersonSelected={onPersonSelected}
                                                       selectedPersonId={selectedPersonId}/> : null;
        const errorMessage = error ? <ErrorIndicator/> : null;

        return (
            <div className="list-group items-list">
                {spinner}
                {content}
                {errorMessage}
            </div>
        );
    }
}

const ListView = ({peopleList, onPersonSelected, selectedPersonId}) => {
    const peopleListHTML =  peopleList.map(({id, name}) => {
        let personClassName = 'list-group-item list-group-item-action';

        if (id === selectedPersonId) {
            personClassName += ' active';
        }

        return (
            <li className={personClassName}
                key={id}
                onClick={() => onPersonSelected(id)}>
                {name}
            </li>
        )
    });

    return (
        <ul className="list-group">
            {peopleListHTML}
        </ul>
    )
};