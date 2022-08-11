// ITERATION 1

// Suspects Array

const suspectsArray = [
    { firstName: "Jonathan", lastName: "Castro", occupation: "Engineer", age:27, description: "Desc", image: "picture", color:"blue" },
    { firstName: "Adriana", lastName: "Castro", occupation: "Engineer", age:31, description: "Desc", image: "picture", color:"orange" },
    { firstName: "Leslye", lastName: "Castro", occupation: "Engineer", age:33, description: "Desc", image: "picture", color:"blue" },
    { firstName: "Kasuo", lastName: "Nakata", occupation: "Engineer", age:36, description: "Desc", image: "picture", color:"yellow" },
    { firstName: "Isabel", lastName: "Castro", occupation: "Engineer", age:02, description: "Desc", image: "picture", color:"pink" },
    { firstName: "David", lastName: "Herrera", occupation: "Engineer", age:30, description: "Desc", image: "picture", color:"gray" },
];

// Rooms Array

const roomsArray = [
    { name: "LivingRoom" },
    { name: "Kitchen" },
    { name: "Park" },
    { name: "Roof" },
    { name: "Bathroom" },
    { name: "Metro Station" },
    { name: "Ironhack" },
    { name: "Museum" },
    { name: "Stadium" },
    { name: "Church" },
    { name: "Beach" },
    { name: "Building" },
    { name: "Plane" },
    { name: "Airport" },
    { name: "Mountain" },
];

// Weapons Array

const weaponsArray = [
    {name: "Gun", weight: 10},
    {name: "Grenade", weight: 5},
    {name: "MachineGun", weight: 50},
    {name: "Crossbow", weight: 30},
    {name: "Cannon", weight: 80},
    {name: "Knife", weight: 10},
    {name: "Arrow", weight: 18},
    {name: "Tank", weight: 150},
    {name: "Missil", weight: 200},
];


// ITERATION 2

function selectRandom(array) {
    if(!array.length) return undefined
    let random_number = Math.floor(Math.random() * array.length);
    return array[random_number]
}


function pickMystery() {
    const random_mistery = {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    }
    return random_mistery
}


// ITERATION 3

function revealMystery(mistery = pickMystery()) {
    // return 'Victor Plum killed Mr. Boddy using the poison in the Billiard Room!'
    return `${mistery.suspect.firstName} ${mistery.suspect.lastName} killed Mr. Boddy using the ${mistery.weapon.name} in the ${mistery.room.name}!`
}

console.log(revealMystery())
