import React, { Component } from 'react'

class FirstComponent extends Component {
    render() {
        console.log('I am first comp')
        return (
            <div>
                Clock: {this.props.newDate}
            </div>
        )
    }
}

export default FirstComponent;