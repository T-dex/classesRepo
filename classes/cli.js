
const fs= require("fs/promises");
const inquirer= require('inquirer')
const { Car, Boat}= require('./Vehicle')

class CLI {
  run() {
    return inquirer
      .prompt([
          {
            name: "vehicleType",
            type: "list",
            message: "Select a Vehicle",
            choices: ["car", "boat",],
          },
        {
          name: "vehicleColor",
          type: "input",
          message: "Enter a vehichle color",
        },
        {
            name: "wheels",
            type: "input",
            message: "Number of wheels"
          },
      
      ])
      .then(({ vehicleType, vehicleColor, wheels }) => {
        let vehicle;
        switch (vehicleType) {
          case "boat":
            vehicle = new Boat(vehicleColor);
            break;

          case "car":
            vehicle = new Car(wheels,vehicleColor);
            break;

        }
      
       if(vehicleType=="boat"){
        return fs.writeFile("boat.html", vehicle.render());
       }
       if(vehicleType=="car"){
        return fs.writeFile("car.html", vehicle.render());
       }
     
     })
      .then(() => {
        console.log("Generated vehicle");
      })
      .catch((error) => {
        console.log(error);
        console.log("Oops! Something went wrong.");
      });
  
    }};

module.exports = CLI;
