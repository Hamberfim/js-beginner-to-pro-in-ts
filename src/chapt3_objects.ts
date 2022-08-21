// objects in objects - migrate to class or interface in TS
const company = {
  comapanyName: "Healthy Candy",
  marketActivity: "Food Manufacturing",
  address: {
    streetNumber: "1212",
    street: "2nd Ave",
    city: "Boca Raton",
    state: "Florida",
    zipcode: "33427",
  },
  established: 2022,
};

// migration to interface TS
interface Company {
  comapanyName: string;
  marketActivity: string[];
  address: {
    streetNumber: string;
    street: string;
    city: string;
    state: string;
    zipcode: string;
  };
  established: number;
}

// create an instance
const healthyCandy: Company = {
  comapanyName: "Healthy Candy",
  marketActivity: ["Food Manufacturing"],
  address: {
    streetNumber: "1212",
    street: "2nd Ave",
    city: "Boca Raton",
    state: "FL",
    zipcode: "33427",
  },
  established: 2022,
};

// display
console.log(`${healthyCandy.comapanyName} (${healthyCandy.marketActivity}), Established ${healthyCandy.established}`);
console.log(
  `${healthyCandy.address.streetNumber} ${healthyCandy.address.street}, ${healthyCandy.address.city}, ${healthyCandy.address.state} ${healthyCandy.address.zipcode}`
);

// create an instance
const sportOutlet: Company = {
  comapanyName: "BIG A Athletics",
  marketActivity: ["Gym Equipment", "Sports Gear", "Sports Wear"],
  address: {
    streetNumber: "999",
    street: "Sea Side RD",
    city: "Boca Raton",
    state: "FL",
    zipcode: "33427",
  },
  established: 1985,
};

// concatenate marketActivity into a new string for output
// let newMarketString: string = (() => {
//   let concatMarketString: string = "";
//   for (let i = 0; i < sportOutlet.marketActivity.length; i++) {
//     if (i < sportOutlet.marketActivity.length - 1) {
//       concatMarketString += sportOutlet.marketActivity[i] + ", ";
//     } else {
//       concatMarketString += sportOutlet.marketActivity[i];
//     }
//   }
//   return concatMarketString;
// })();

// make newMarkeyString a function to call
function newMarketStr(arr: string[]): string {
  let concatMarketString: string = "";
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      concatMarketString += arr[i] + ", ";
    } else {
      concatMarketString += arr[i];
    }
  }
  return concatMarketString;
}

console.log(); // space in output

// console.log(
//   `${sportOutlet.comapanyName} (${sportOutlet.marketActivity[0]}, ${sportOutlet.marketActivity[1]}, ${sportOutlet.marketActivity[2]}), Established ${sportOutlet.established}`
// );
// console.log(`${sportOutlet.comapanyName} (${newMarketString}), Established ${sportOutlet.established}`);

console.log(
  `${sportOutlet.comapanyName} (${newMarketStr(sportOutlet.marketActivity)}), Established ${sportOutlet.established}`
);
console.log(
  `${sportOutlet.address.streetNumber} ${sportOutlet.address.street}, ${sportOutlet.address.city}, ${sportOutlet.address.state} ${sportOutlet.address.zipcode}`
);
