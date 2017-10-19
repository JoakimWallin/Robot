import React from "react";

export default class SquareInput extends React.Component {

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
                    <div className="form-group">
                        <p>{this.props.text.roomSize}</p>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-4  align-self-center">
                            <input type="number" name='roomX' value={this.props.x} onChange={this.props.onChangeValue} className="form-control sm"/> X
                            <input type="number" name='roomY' value={this.props.y} onChange={this.props.onChangeValue} className="form-control sm"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

