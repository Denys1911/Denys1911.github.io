import React, {Component} from "react";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import {withSwapiService} from '../hoc-helpers';
import PropTypes from "prop-types";

import './random-planet.css';

class RandomPlanet extends Component {
    static defaultProps = {
        intervalValue: 8000
    };

    static propTypes = {
        intervalValue: PropTypes.number
    };

    state = {
        planetData: null,
        imageUrl: null,
        loaded: false,
        error: false
    };

    componentDidMount() {
        this.setRandomPlanetShowing();
    }

    componentDidUpdate(prevProps) {
        if (this.props.getPlanet !== prevProps.getPlanet) {
            clearInterval(this.interval);
            this.setRandomPlanetShowing();
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planetData, planetId) => {
        this.setState({
            planetData,
            loaded: true,
            imageUrl: this.props.getPlanetImageUrl(planetId)
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

    updatePlanetData = () => {
        const randomId = this.getRandomNumber(2, 19);

        this.setState({loaded: false, error: false});

        this.props.getPlanet(randomId)
            .then(planetData => this.onPlanetLoaded(planetData, randomId))
            .catch(this.onError)
    };

    setRandomPlanetShowing = () => {
        this.updatePlanetData();
        this.interval = setInterval(this.updatePlanetData, this.props.intervalValue);
    };

    render() {
        const {planetData, imageUrl, loaded, error} = this.state;
        const spinner = !loaded ? <Spinner/> : null;
        const content = (loaded && !error) ? <PlanetView planetData={planetData} imageUrl={imageUrl}/> : null;
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

const PlanetView = ({planetData, imageUrl}) => {
    const {name, population, rotationPeriod, diameter} = planetData;

    return (
        <React.Fragment>
            <img className="random-planet-image"
                 src={imageUrl}
                 alt="planet"/>
            <div className="random-planet-info">
                <h2>{name}</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="text-info">Population: </span> {population}
                    </li>
                    <li className="list-group-item">
                        <span className="text-info">Rotation Period: </span> {rotationPeriod}
                    </li>
                    <li className="list-group-item">
                        <span className="text-info">Diameter: </span> {diameter}
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
};

const mapMethodsToProps = swapiService => {
    return {
        getPlanet: swapiService.getPlanet,
        getPlanetImageUrl: swapiService.getPlanetImageUrl
    };
};

export default withSwapiService(mapMethodsToProps)(RandomPlanet);
