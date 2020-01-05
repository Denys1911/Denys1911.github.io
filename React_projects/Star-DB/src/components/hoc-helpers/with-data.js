import React, {Component} from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withData = View => {
    return class extends Component {
        state = {
            itemsList: null,
            loaded: false,
            error: false
        };

        componentDidMount() {
            this.updateItemsList();
        }

        componentDidUpdate(prevProps) {
            if (this.props.getItemsData !== prevProps.getItemsData) {
                this.updateItemsList();
            }
        }

        updateItemsList = () => {
            this.setState({loaded: false, error: false});

            this.props.getItemsData()
                .then(itemsList => this.setState({itemsList, loaded: true}))
                .catch(() => this.setState({loaded: true, error: true}));
        };

        render() {
            const {itemsList, loaded, error} = this.state;
            const spinner = !loaded ? <Spinner/> : null;
            const content = (loaded && !error) ? <View {...this.props} data={itemsList}/> : null;
            const errorMessage = error ? <ErrorIndicator/> : null;

            return (
                <div className="list-group items-list">
                    {spinner}
                    {content}
                    {errorMessage}
                </div>
            );
        }
    }
};

export default withData;