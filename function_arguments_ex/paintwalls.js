
const colorWall = function (color, location) {
    console.log('The ' + location + ' wall has been painted ' + color);
 };

const optionOne = ['green', 'orange', 'pink'];
const whichWall = ['north', 'south','west', 'east'];

colorWall(whichWall[0], optionOne[1]);

colorWall(optionOne[0], whichWall[1]);

//colorWall(); without an argument: output is undefined

// yes the order of the arguments matter, they get turned around when calling the function
// if they are switched around in both the arguments are in their correct spot again when calling the function