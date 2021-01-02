import React from "react";
import PropTypes from "prop-types";

import './items-list.css';

const ItemsList = ({onItemSelected, selectedItemId, children: renderItemLabel, data}) => {
    const itemsListHTML =  data.map(item => {
        const {id} = item;
        const label = renderItemLabel(item);
        let itemClassName = 'list-group-item list-group-item-action';

        if (id === selectedItemId) {
            itemClassName += ' active';
        }

        return (
            <li className={itemClassName}
                key={id}
                onClick={() => onItemSelected(id)}>
                {label}
            </li>
        )
    });

    return (
        <ul className="list-group">
            {itemsListHTML}
        </ul>
    );
};

ItemsList.defaultProps = {
    onItemSelected: () => {}
};

ItemsList.propTypes = {
    onItemSelected: PropTypes.func,
    selectedItemId: PropTypes.any,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
};

export default ItemsList;
