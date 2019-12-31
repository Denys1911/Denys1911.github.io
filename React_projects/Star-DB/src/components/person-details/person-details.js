import React, {Component} from "react";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import ErrorButton from "../error-button";

import './person-details.css';

export default class PersonDetails extends Component {
    swapiService = new SwapiService();

    state = {
        personData: null,
        loaded: false,
        error: false
    };

    componentDidMount() {
        this.updatePersonDetails();
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedPersonId !== prevProps.selectedPersonId) {
            this.updatePersonDetails();
        }
    }

    updatePersonDetails() {
        const personId = this.props.selectedPersonId;

        if (!personId) {
            return;
        }

        this.setState({loaded: false, error: false});

        this.swapiService.getPerson(personId)
            .then(personData => this.setState({personData, loaded: true}))
            .catch(() => this.setState({loaded: true, error: true}))
    };

    render() {
        const {personData, loaded, error} = this.state;
        const isPersonSelected = Boolean(this.props.selectedPersonId);
        const informationMessage = !isPersonSelected ? 'Select person from the list' : null;
        const spinner = (!loaded && isPersonSelected) ? <Spinner/> : null;
        const content = (loaded && !error) ? <PersonDetailsView personData={personData}/> : null;
        const errorMessage = error ? <ErrorIndicator/> : null;

        return (
            <div className="card person-details">
                {informationMessage}
                {spinner}
                {content}
                {errorMessage}
            </div>
        );
    }
}

const PersonDetailsView = ({personData}) => {
    const {id, name, gender, birthYear, eyeColor} = personData;

    return (
        <React.Fragment>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                 className="person-details-image" alt=""/>
            <div className="card-body person-details-card">
                <h2>{name}</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Gender: {gender}</li>
                    <li className="list-group-item">Birth Year: {birthYear}</li>
                    <li className="list-group-item">Eye Color: {eyeColor}</li>
                </ul>
                <ErrorButton/>
            </div>
        </React.Fragment>
    )
};
