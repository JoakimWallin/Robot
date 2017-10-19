export function getTranslation(locale) {

    switch (locale) {
        case 'sv':
            return getSwedish();

        default:
            return getEnglish();

    }

    function getSwedish() {
        return {
            welcome: 'Välkommen',
            language: 'Språk',
            crashInfoText: 'Du har krockat med en vägg! Vänligen försök igen =)',
            robotDirectionText: 'Vänd mot:',
            direction: {
                instruction: {
                    r: 'h',
                    l: 'v',
                    w: 'g',
                },
                cardinal: {
                    n: 'N',
                    s: 'S',
                    e: 'Ö',
                    w: 'V',
                }
            },
            input: {
                square: 'Fyrkant',
                circle: 'Cirkel',
                radiusSize: 'Ange cirkelns radie',
                roomSize: 'Välj hur stort rummet ska vara (X, Y)',
                startPosition: 'Välj startpostion (X, Y)',
                commands: 'Navigation',
                instructions: 'Ge roboten instruktioner m.h.a: H (höger), V (vänster), G (gå). Andra bokstäver och tecken kommer att ignoreras!'
            },
        }
    }

    function getEnglish() {
        return {
            welcome: 'Welcome',
            language: 'Language',
            crashInfoText: 'You crashed, please try again!',
            robotDirectionText: 'Robot is facing:',
            direction: {
                instruction: {
                    r: 'r',
                    l: 'l',
                    w: 'w',
                },
                cardinal: {
                    n: 'N',
                    s: 'S',
                    e: 'E',
                    w: 'W',
                }
            },
            input: {
                square: 'Square',
                circle: 'Circle',
                radiusSize: 'Choose the radius',
                roomSize: 'Choose the size of the room (X, Y)',
                startPosition: 'Choose the start position (X, Y)',
                commands: 'Navigation',
                instructions: 'Give the robot instructions with commands: R (right), L (left), W (walk). Other characters will be cleaned out!'
            },
        }
    }

}


export function translateDirection(direction, text) {
    return text[direction];
}