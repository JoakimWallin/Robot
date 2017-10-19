import React from "react";
import SquareInput from "./SquareInput";
import CircleInput from "./CircleInput";
import StartPositionInput from "./StartPositionInput";
import Instructions from "./Instructions";

export default class Input extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            RoomType: 'square',
            roomX: '',
            roomY: '',
            startX: '',
            startY: '',
            radius: '',
            instructions: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleChangeRoomType = this.handleChangeRoomType.bind(this);
    }

    handleChangeRoomType(e) {
        this.setState({
            roomType: e.target.value
        })
    }

    handleChangeValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        let data = {
            commands: this.state.instructions,
            start: {
                x: this.state.startX,
                y: this.state.startY,
            },
            room: {
                x: this.state.roomX,
                y: this.state.roomY,
                radius: this.state.radius,
            },
        }

        //Reset state.
        this.setState({
            RoomType: 'square',
            roomX: '',
            roomY: '',
            startX: '',
            startY: '',
            radius: '',
            instructions: ''
        });

        this.props.calculateCoordinates(data)
    }


    render() {
    const text = this.props.text.input;
    const isSquareInput = this.state.roomType === 'square' || this.state.roomType === undefined;

        return (
            <div className="col-md-12 justify-content-md-center">
                    <div className="row justify-content-md-center">
                        <div className="col-2  align-self-center">
                            <select
                                className="form-control"
                                name="roomType"
                                value={this.state.roomType}
                                onChange={this.handleChangeRoomType}
                            >
                                <option value="square">{text.square}</option>
                                <option value="circle">{text.circle}</option>
                            </select>
                        </div>
                    </div><br/>

                <form onSubmit={this.handleSubmit} className="">
                    {/*display SquareInput or CircleInput component, default input is SquareInput*/}
                    {isSquareInput ? (
                        <SquareInput x={this.state.roomX} y={this.state.roomY} text={text} onChangeValue={this.handleChangeValue}/>
                    ) : (
                        <CircleInput radius={this.state.radius} text={text} onChangeValue={this.handleChangeValue}/>
                    )}

                    <StartPositionInput x={this.state.startX} y={this.state.startY} text={text} onChangeValue={this.handleChangeValue}/>
                    <Instructions instructions={this.state.instructions} text={text} onChangeValue={this.handleChangeValue}/>
                    <button type="submit" className="btn btn-success">GO!</button>
                </form>
            </div>
        );
    }
}