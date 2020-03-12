import React, { Component } from 'react'

class SecondComponent extends Component {


    shouldComponentUpdate(nextProps, nextState) {
        return Boolean(nextProps.favColor !== this.props.favColor);
    }

    render() {
        return (
            <div>
                {this.props.favColor}
            </div>
        )
    }
}

export default SecondComponent;