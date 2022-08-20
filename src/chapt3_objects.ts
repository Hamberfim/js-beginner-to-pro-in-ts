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
  marketActivity: string;
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
  marketActivity: "Food Manufacturing",
  address: {
    streetNumber: "1212",
    street: "2nd Ave",
    city: "Boca Raton",
    state: "FL",
    zipcode: "33427",
  },
  established: 2022,
};

console.log(`${healthyCandy.comapanyName} ${healthyCandy.marketActivity}, Established ${healthyCandy.established}`);
console.log(
  `${healthyCandy.address.streetNumber} ${healthyCandy.address.street}, ${healthyCandy.address.city}, ${healthyCandy.address.state} ${healthyCandy.address.zipcode}`
);
