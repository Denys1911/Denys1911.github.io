import React from "react";

const withChildFunction = func => Item => {
    return props => {
        return (
            <Item {...props}>
                {func}
            </Item>
        )
    };
};

export default withChildFunction;
