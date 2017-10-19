/*
    @arg {string} instructions
    @arg {object} instructionParams
    @returns {array} translatedInstructions
 */
export function getInstructions(instructions, instructionParams) {

    let result = instructions.split("");
    let translatedInstructions = [];

    //Loop through the array of user input instructions i.e L R W W L
    for(let i = 0; i < result.length; i++ ){

        // Current instruction
        let letter = result[i];

        // Map through the instruction parameters of the current language i.e (instruction parameters swedish: l:V ,r:H ,w:G)
        Object.keys(instructionParams).map(function(key) {
            let direction = instructionParams[key];
            // if the current instruction is a match to one of the instruction parameters,
            if (direction.includes(letter.toLowerCase())) {
                // push the key to the translatedInstructions array.
                translatedInstructions.push(key);
            }
        }, letter);

    }

    return translatedInstructions;
}

