// objects in objects - migrate to class or interface in ts
let company = {
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

console.log(`${healthyCandy.comapanyName} (${healthyCandy.marketActivity}), Established ${healthyCandy.established}`);
console.log(
  `${healthyCandy.address.streetNumber} ${healthyCandy.address.street}, ${healthyCandy.address.city}, ${healthyCandy.address.state} ${healthyCandy.address.zipcode}`
);

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
let newMarketString = (() => {
  let concatMarketString = "";
  for (let i = 0; i < sportOutlet.marketActivity.length; i++) {
    if (i < sportOutlet.marketActivity.length - 1) {
      concatMarketString += sportOutlet.marketActivity[i] + ", ";
    } else {
      concatMarketString += sportOutlet.marketActivity[i];
    }
  }
  return concatMarketString;
})();

console.log(); // space in output

// console.log(
//   `${sportOutlet.comapanyName} (${sportOutlet.marketActivity[0]}, ${sportOutlet.marketActivity[1]}, ${sportOutlet.marketActivity[2]}), Established ${sportOutlet.established}`
// );
console.log(`${sportOutlet.comapanyName} (${newMarketString}), Established ${sportOutlet.established}`);
console.log(
  `${sportOutlet.address.streetNumber} ${sportOutlet.address.street}, ${sportOutlet.address.city}, ${sportOutlet.address.state} ${sportOutlet.address.zipcode}`
);
