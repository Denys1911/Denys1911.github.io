import React, {Component} from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import StarshipDetails from "../star-wars-components/starship-details";
import {PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage} from "../pages";
import ErrorButton from "../error-button";

import ErrorBoundary from "../error-boundary";
import {SwapiService, DummySwapiService} from "../../services";
import {SwapiServiceProvider} from "../swapi-service-context";
import {HashRouter, Route, Switch} from "react-router-dom";

import './app.css';

export default class App extends Component{
    state = {
        showRandomPlanet: true,
        swapiService: new SwapiService(),
        isLoggedIn: false
    };

    onToggleRandomPlanet = () => {
        this.setState(state => {
            return {showRandomPlanet: !state.showRandomPlanet};
        })
    };

    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

            return {swapiService: new Service()};
        });
    };

    onLogin = () => {
        this.setState({isLoggedIn: true});
    };

    render() {
        const {showRandomPlanet, swapiService, isLoggedIn} = this.state;
        const randomPlanet = showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={swapiService}>
                    <HashRouter basename="/">
                        <div className="app">
                            <Header onServiceChange={this.onServiceChange}/>
                            {randomPlanet}
                            <div className="d-flex btn-row">
                                <button className="btn btn-warning btn-lg toggle-planet-btn"
                                        onClick={this.onToggleRandomPlanet}>
                                    Toggle Random Planet
                                </button>
                                <ErrorButton/>
                            </div>
                            <Switch>
                                <Route path="/" render={() => <h2 className="text-center">Welcome to Star DB!</h2>} exact/>
                                <Route path="/people/:id?" component={PeoplePage}/>
                                <Route path="/planets/:id?" component={PlanetsPage}/>
                                <Route path="/starships" component={StarshipsPage} exact/>
                                <Route path="/starships/:id"
                                       render={({match}) => (
                                           <StarshipDetails selectedItemId={match.params.id}/>
                                       )}/>
                                <Route path="/login">
                                    <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin}/>
                                </Route>
                                <Route path="/secret">
                                    <SecretPage isLoggedIn={isLoggedIn}/>
                                </Route>
                                <Route render={() => <h2 className="text-center">Page not found</h2>}/>
                            </Switch>
                        </div>
                    </HashRouter>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}
