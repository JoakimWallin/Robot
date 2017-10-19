/*
    @arg {object} start
    @arg {object} room
    @arg {array} instructions
    @returns {object}
 */
export function calculatePosition(start, room, instructions) {

   let robot = {
            compass: ['n','e','s','w'],
            direction: 'n',
            room: {
                x: Number(room.x),
                y: Number(room.y),
                radius: Number(room.radius),
            },
            position: {
                x: Number(start.x),
                y: Number(start.y),
            },
            crash: false,
            getCoordinates: function() {
                return {
                    direction: this.direction,
                    x: this.position.x,
                    y: this.position.y,
                    crash: this.crash
                }
            }
   }

    //Loop though the instructions.
    for(let i = 0; i < instructions.length; i++ ) {

        let instruction = instructions[i];

        let currentDirection = robot.direction;

        if (instruction.match(/l/i)) {
            turn(currentDirection, -1);
        } else if (instruction.match(/r/i)) {
            turn(currentDirection, 1);
        } else if (instruction.match(/w/i)) {

            //If we did't run in to a wall, continue.
            if(walk(currentDirection)) {
               continue;
            }

            //We ran in to a wall.
            //Break and return to Robot Component.
            robot.crash = true;
            break;
        }
    }

    function turn(currentDirection, direction) {
        let compass = robot.compass;
        // Get index of direction, (compass: 0:'N', 1:'E', 2:'S', 3:'W')
        let indexIfDirection = compass.indexOf(currentDirection);

        let newDirection = indexIfDirection + direction;

        if(newDirection < 0) {
            robot.direction = compass[3]; //Compass index cant be less than 0, set direction 0:N
        } else if (newDirection > 3) {
            robot.direction = compass[0]; //Compass index greater than 3, set direction 3:W
        } else {
            robot.direction = compass[newDirection];
        }
    }

    // First increase or decrees x y depending on direction.
    // Then check to se if the robot is still inside the room.
    function walk(currentDirection) {

        switch (currentDirection) {
            case 'n':
                robot.position.y++;
               return isInsideTheRoom(robot.position, 'y');
            case 'e':
                robot.position.x++;
                return isInsideTheRoom(robot.position, 'x');
            case 's':
                robot.position.y--;
                return isInsideTheRoom(robot.position, 'y');
            case 'w':
                robot.position.x--;
                return isInsideTheRoom(robot.position, 'x');
        }
    }

    //Decide if current position is in the room.
    function isInsideTheRoom(position, direction) {

        let boundary = robot.room;

       if(boundary.radius) {
           //If position X^ + position y^ is less than radius^ the robot is still inside the circle.
           return Math.pow((position.x), 2) + Math.pow((position.y), 2) < Math.pow(boundary.radius, 2);
       } else {

           return position[direction] <= boundary[direction] && position[direction] > 0;

       }
    }

    return robot.getCoordinates();
}
