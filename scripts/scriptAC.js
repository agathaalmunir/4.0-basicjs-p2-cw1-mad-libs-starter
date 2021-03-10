/*
This is your silly sentence:

On my way to :properNoun: the other day, I saw a huge :magicalBeast:!
Luckily I knew it was friendly because it :bodilyFunctionEndingIn-ED: at me.

The words you will be asking the user for are above: 
1. a proper noun
2. a magical beast
3. a bodily function ending in -ed

*/

// part1
// link this script file in the HTML file (with the defer attribute)



// part 2
// ask the user for each word and store them in variables:
let properNoun = prompt(`give me a proper noun`)
let magicalBeast = prompt(`give me a magical beast`)
let bodilyFunctionEndingInEd = prompt(`give me a a bodily function ending in -ed`)



// part 3
// store the silly sentence in a variable using a template literal, and insert the variables from above:
let sentence = `On my way to ${properNoun} the other day, I saw a huge ${magicalBeast}!
Luckily I knew it was friendly because it ${bodilyFunctionEndingInEd} at me.`



// part 4
// look at the HTML file, find the element that we are going to be storing the sentence in
// store the silly sentence in its innerHTML:

document.getElementById('madLib').innerHTML = sentence;
