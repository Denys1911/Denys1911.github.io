import React, {Component} from "react";

import ItemsList from "../items-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";

import './people-page.css';

export default class PeoplePage extends Component {
    state = {
        selectedPersonId: null,
        hasError: false
    };

    onPersonSelected = id => {
        this.setState({selectedPersonId: id});
    };

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        return (
            <div className="d-md-flex justify-content-around">
                <ItemsList onPersonSelected={this.onPersonSelected}
                           selectedPersonId={this.state.selectedPersonId}/>
                <PersonDetails selectedPersonId={this.state.selectedPersonId}/>
            </div>
        );
    }
}