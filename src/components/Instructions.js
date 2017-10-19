import React from "react";

export default class Instructions extends React.Component {

    onChangeValue (e) {
        e.preventDefault();
        this.setState( {
            [e.target.name]: e.target.value
        })
    }

    render() {
        let text = this.props.text;
        return (
            <div>
                <div className="form-group">
                    <div className="row justify-content-md-center">
                        <div className="col-6  align-self-center">
                            <label htmlFor="instructions">{text.instructions}</label>
                            <input
                                type="text"
                                name="instructions"
                                className="form-control"
                                value={this.props.instructions}
                                onChange={this.props.onChangeValue}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



