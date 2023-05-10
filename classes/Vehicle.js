class Vehicle{
    constructor(color="black", windowTint="none"){
        this.color=color
        this.windowTint=windowTint
    }

}

class Boat extends Vehicle{
    constructor(waterType,color,windowTint){
        super(color, windowTint)
            this.waterType=waterType
            this.craft="boat"
    }
    render(){
    return `<h1 class="boat">The Vehcile is a boat and it is a ${this.waterType} boat and it is ${this.color} with a ${this.windowTint} window tint</h1>`
    }
}

class Car extends Vehicle{
    constructor(wheels=2,color="purple",windowTint){
        super(color,windowTint)
        this.wheels=wheels
    }
    render(){
        return `<h1 class="car">The Vehcile is a car and it has ${this.wheels} wheels and it is ${this.color}</h1>`
    }
}

module.exports={ Car, Boat}