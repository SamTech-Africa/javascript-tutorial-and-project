let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  default:
    day = "Saturday";
    break;
}

document.body.innerHTML = `
  Today is ${day}
`;

function greet(name, message) {
  val = message.concat(" ", name);
  return val;
}

let message = "welcome";
let fName = "Samuel";

console.log(greet(fName, message));
console.log(greet(fName, message));
console.log(greet(fName, message));
console.log(greet(fName, message));
