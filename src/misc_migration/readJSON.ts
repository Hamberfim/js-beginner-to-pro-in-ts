// set tsconfig to "moduleResolution": "node", "resolveJsonModule": true, "esModuleInterop": true
import staff from "./readjson.json";

// console.log(staff.Users[0].name.toUpperCase());
// console.log(staff.Users[0].email.toUpperCase());

for (let i = 0; i < staff.Users.length; i++) {
  console.log(staff.Users[i].name);
  console.log(staff.Users[i].email);
  console.log(`${staff.Users[i].phone.slice(0, 3)}-${staff.Users[i].phone.slice(3, 6)}-${staff.Users[i].phone.slice(6, 10)}\n`);
}
