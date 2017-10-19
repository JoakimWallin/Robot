import React from "react";

export default class Language extends React.Component {
    constructor(props) {
        super(props);

    this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        e.preventDefault();
        this.props.setLanguage(e.target.value);
    }

    render() {

        return (
            <div className="row">
                <div className="col-md-10">
                    <p className="text-right language">{this.props.text.language}</p>
                </div>
                <div className="col-md-2">
                    <select
                        className="form-control"
                        name="language"
                        value={this.props.language}
                        onChange={this.handleChange}
                    >
                        <option value="sv">Svenska</option>
                        <option value="en">Engelska</option>
                    </select>
                </div>
            </div>
        );
    }
}
