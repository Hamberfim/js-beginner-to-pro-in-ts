type Friends = { id: number; fName: string; lName: string };
type People = {
  friends: Friends[];
};

// create an object named people that contains an empty array called friends
let people: People = {
  friends: [],
};

// create three var, each containing an object, that contain friends - first name, last name, and ID
const friend1 = {
  id: 1,
  fName: "Bill",
  lName: "Willis",
};

const friend2 = {
  id: 2,
  fName: "Mary",
  lName: "Callousic",
};

const friend3 = {
  id: 3,
  fName: "Sam",
  lName: "Brown",
};

// another set friends
const friend4 = {
  id: 4,
  fName: "Tommy",
  lName: "Twotone",
};

const friend5 = {
  id: 5,
  fName: "Cappy",
  lName: "O'Harris",
};

const friend6 = {
  id: 6,
  fName: "Geoff",
  lName: "Shabadoo",
};

// add the friends objects to the friends array within the people object
people.friends[0] = friend1;
people.friends[1] = friend2;
people.friends[2] = friend3;

for (const iterator of people.friends) {
  console.log(iterator);
}

console.log(); // space in output

people.friends.push(friend4);
people.friends.push(friend5);
people.friends.push(friend6);
for (const iterator of people.friends) {
  console.log(iterator);
}
