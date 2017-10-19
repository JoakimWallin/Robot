import {calculatePosition} from './calculation';

let startPositions = null,
    room = null,
    result = null,
    instructions = null;

it('returns expected end position', function(){

    startPositions = {
        x: '1',
        y: '1',
    };

    room = {
        x: '5',
        y: '5',
        radius:0
    };

    instructions = ['r','w','l','w'];

    let expectedEndPosition = {
        direction: 'n',
            x: 2,
            y: 2,
            crash: false
    }
    result = calculatePosition(startPositions, room, instructions);
    expect(result).toEqual(expectedEndPosition);
});

it('crash if end position is outside the room', function(){

    startPositions = {
        x: '1',
        y: '1',
    };

    room = {
        x: '1',
        y: '1',
        radius:0
    };

    instructions = ['w'];

    let expectedEndPosition = {
        direction: 'n',
        x: 1,
        y: 2,
        crash: true
    }
    result = calculatePosition(startPositions, room, instructions);
    expect(result).toEqual(expectedEndPosition);
});