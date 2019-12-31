import React, {Component} from "react";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import './random-planet.css';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planetData: null,
        loaded: false,
        error: false
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = planetData => {
        this.setState({
            planetData,
            loaded: true
        });
    };

    onError = () => {
        this.setState({
            loaded: true,
            error: true
        });
    };

    getRandomNumber(min, max) {
        const randomNumber = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(randomNumber);
    }

    updatePlanet = () => {
        const randomId = this.getRandomNumber(2, 19);

        this.swapiService.getPlanet(randomId)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    };

    render() {
        const {planetData, loaded, error} = this.state;
        const spinner = !loaded ? <Spinner/> : null;
        const content = (loaded && !error) ? <PlanetView planetData={planetData}/> : null;
        const errorMessage = error ? <ErrorIndicator/> : null;

        return (
            <div className="jumbotron d-flex random-planet">
                {spinner}
                {content}
                {errorMessage}
            </div>
        );
    }
}

const PlanetView = ({planetData}) => {
    const {id, name, population, rotationPeriod, diameter} = planetData;

    return (
        <React.Fragment>
            <img className="random-planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                 alt="planet"/>
            <div className="random-planet-info">
                <h2>{name}</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Population: {population}</li>
                    <li className="list-group-item">Rotation Period: {rotationPeriod}</li>
                    <li className="list-group-item">Diameter: {diameter}</li>
                </ul>
            </div>
        </React.Fragment>
    )
};
