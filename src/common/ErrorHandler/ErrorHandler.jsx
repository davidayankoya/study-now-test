import React, { Component } from "react";
import Notify from "utils/notify";
import Loader from "common/Spinner/Loader";


class ErrorHandler extends Component {
    state = {
        hasError: false,
    };

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        Notify.error('An error occured, we will resolve this as soon as possible')
    }

    render() {
        const { hasError } = this.state;
        return hasError ? <Loader/> : this.props.children;
    }
}

export default ErrorHandler;
