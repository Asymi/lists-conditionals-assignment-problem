import React, { Component } from 'react';

class ValidationComponent extends Component {
    render(){
        let message;

        if (this.props.textLength >= 5 && this.props.textLength !== undefined){
            message = "Text Long Enough";
        } else if (this.props.textLength < 5 && this.props.textLength !== undefined) {
            message = "Text Too Short";
        } else {
            message = null;
        }
        return (
            <div>
                {message}
            </div>
        )
    }
}

export default ValidationComponent