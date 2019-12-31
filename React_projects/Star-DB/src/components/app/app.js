import React, {Component} from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import PeoplePage from "../people-page";
import ErrorIndicator from "../error-indicator";

import './app.css';

export default class App extends Component{
    state = {
        showRandomPlanet: true,
        hasError: false
    };

    onToggleRandomPlanet = () => {
        this.setState(state => {
            return {showRandomPlanet: !state.showRandomPlanet};
        })
    };

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        const {hasError, showRandomPlanet} = this.state;

        if (hasError) {
            return <ErrorIndicator/>;
        }

        const randomPlanet = showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <div className="app">
                <Header/>
                {randomPlanet}
                <div className="d-flex btn-row">
                    <button className="btn btn-warning btn-lg toggle-planet-btn"
                            onClick={this.onToggleRandomPlanet}>
                        Toggle Random Planet
                    </button>
                    <ErrorButton/>
                </div>
                <PeoplePage/>
            </div>
        )
    }
}