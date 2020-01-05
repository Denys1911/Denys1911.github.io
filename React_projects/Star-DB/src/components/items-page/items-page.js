import React from "react";
import PropTypes from "prop-types";

import './items-page.css';

const ItemsPage = ({match, history, ItemsList, ItemDetails}) => {
    const {id} = match.params;

    return (
        <div className="d-md-flex justify-content-around planets-page">
            <ItemsList onItemSelected={id => history.push(id)}
                       selectedItemId={id}/>
            <ItemDetails selectedItemId={id}/>
        </div>
    );
};

ItemsPage.propTypes = {
    ItemsList: PropTypes.func,
    ItemDetails: PropTypes.func
};

export default ItemsPage;