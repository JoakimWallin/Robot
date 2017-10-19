import {getInstructions} from './instructions';

    let instruction = null,
        instructionParameters = null,
        result = null;

    beforeEach(function() {
        instructionParameters = {
            r: 'h',
            l: 'v',
            w: 'g',
        };
    });

it('cleans out characters not matching instructionParameters', function(){

   instruction = 'å';

    result = getInstructions(instruction, instructionParameters);
    expect(result).toBe(result);
})

it('returns array of translated instructions', function() {

    instruction = 'HGV';

    let translatedInstructions = ['r','w','l'];

    result = getInstructions(instruction, instructionParameters);
    expect(result).toEqual(translatedInstructions)
});
