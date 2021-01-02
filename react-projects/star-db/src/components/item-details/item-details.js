import React, {Component} from "react";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import ErrorButton from "../error-button";

import './item-details.css';
import ErrorBoundary from "../error-boundary";

const Record = ({itemData, name, label}) => {
    return (
        <li className="list-group-item">
            <span className="text-info">{label}: </span>
            {itemData[name]}
        </li>
    );
};

export {Record};

export default class ItemDetails extends Component {
    state = {
        itemData: null,
        imageUrl: null,
        loaded: false,
        error: false
    };

    componentDidMount() {
        this.updateItemDetails();
    }

    componentDidUpdate(prevProps) {
        const {selectedItemId, getItemData, getItemImageUrl} = this.props;

        if (selectedItemId !== prevProps.selectedItemId ||
            getItemData !== prevProps.getItemData ||
            getItemImageUrl !== prevProps.getItemImageUrl) {
            this.updateItemDetails();
        }
    }

    updateItemDetails() {
        const {selectedItemId, getItemData, getItemImageUrl} = this.props;

        if (!selectedItemId) {
            return;
        }

        this.setState({loaded: false, error: false});

        getItemData(selectedItemId)
            .then(itemData => this.setState({
                itemData,
                loaded: true,
                imageUrl: getItemImageUrl(selectedItemId)
            }))
            .catch(() => this.setState({loaded: true, error: true}))
    };

    renderItemCard = (itemData, imageUrl) => {
        return (
            <ErrorBoundary>
                <img src={imageUrl}
                     className="item-details-image" alt=""/>
                <div className="card-body item-details-card">
                    <h2>{itemData.name}</h2>
                    <ul className="list-group list-group-flush">
                        {React.Children.map(this.props.children, child => {
                            return React.cloneElement(child, {itemData})
                        })}
                    </ul>
                    <ErrorButton/>
                </div>
            </ErrorBoundary>
        )
    };

    render() {
        const {itemData, loaded, error, imageUrl} = this.state;
        const isItemSelected = Boolean(this.props.selectedItemId);
        const informationMessage = !isItemSelected ? 'Select item from the list' : null;
        const spinner = (!loaded && isItemSelected) ? <Spinner/> : null;
        const content = (loaded && !error && isItemSelected) ? this.renderItemCard(itemData, imageUrl) : null;
        const errorMessage = error ? <ErrorIndicator/> : null;

        return (
            <div className="card item-details">
                {informationMessage}
                {spinner}
                {content}
                {errorMessage}
            </div>
        );
    }
}
