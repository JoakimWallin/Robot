import React from "react";

export default class StartPositionInput extends React.Component {

    onChangeValue (e) {
        e.preventDefault();
        this.setState( {
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <p>{this.props.text.startPosition}</p>
                </div>
                <div className="form-group">
                    <div className="row justify-content-md-center">
                        <div className="col-4  align-self-center">
                            <input type="number" name='startX' value={this.props.x} onChange={this.props.onChangeValue} className="form-control sm"/> X
                            <input type="number" name='startY' value={this.props.y} onChange={this.props.onChangeValue} className="form-control sm"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


