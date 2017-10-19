import React from "react";
import Input from './Input';

import {getInstructions} from '../helpers/instructions';
import {calculatePosition} from '../helpers/calculation';
import {translateDirection} from '../translations/text';

export default class Robot extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            direction: null,
            position: {
                x: 0,
                y: 0
            },
            crash: false
        }
        this.calculateCoordinates = this.calculateCoordinates.bind(this)
    }

    /*
    * Receives all the information we need to calculating the end position of the robot
    */
    calculateCoordinates(data) {

        const text = this.props.text.direction;

        //Cleans out characters that don't match left, right and walk.
        // Translate the instructions to english.
        let cleanedCommands = getInstructions(data.commands, text.instruction);

        // Start the robot and calculate the end position.
        let robot = calculatePosition(data.start, data.room, cleanedCommands);

        if (robot.crash) {
            this.setState({
                crash: true
            })
        } else {
            // Translate the direction back to the current language.
            robot.direction = translateDirection(robot.direction, text.cardinal);
            this.setCoordinates(robot)
        }

    }

    setCoordinates(coordinates) {
        this.setState({
            direction: coordinates.direction,
            position: {
                x: coordinates.x,
                y: coordinates.y
            },
            crash:false
        })
    }

    render() {
            let h3crashText,
                divEndPosition;
            //If direction is the default direction (null) and the robot did not crash, show end position.
            if(this.state.direction !== null && !this.state.crash) {

                divEndPosition = <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h2 className="xy-position">X: {this.state.position.x} Y: {this.state.position.y}<br/></h2>
                                        <h2 className="direction">{this.props.text.robotDirectionText} {this.state.direction}</h2>
                                    </div>
                                </div>

            //If the robot crashed.
            } else if (this.state.crash) {
                h3crashText = <h3 className="crash">{this.props.text.crashInfoText}</h3>
            }

            return (
                <div>
                    <div className="row">
                        <Input text={this.props.text} calculateCoordinates={this.calculateCoordinates}/>
                    </div>
                    {divEndPosition}
                    {h3crashText}
                </div>
            );
        }
}