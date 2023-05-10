const {Boat, Car}=require('./Vehicle')


describe("Car",()=>{
    test("Car is being built",()=>{
        const car=new Car(4, "red", "dark")
        const renderCar='<h1 class="car">The Vehcile is a car and it has 4 wheels and it is red</h1>'
        expect(renderCar).toEqual(car.render())
    })

    test("if no color is passed the car color is purple",()=>{
        const car= new Car()
        const renderCar='<h1 class="car">The Vehcile is a car and it has 2 wheels and it is purple</h1>'
        expect(renderCar).toEqual(car.render())

    })
})

describe("Boat",()=>{
     test("Boat is rendered",()=>{
        const boat= new Boat("salt","blue","dark")
        const renderBoat=`<h1 class="boat">The Vehcile is a boat and it is a salt boat and it is blue with a dark window tint</h1>`
        expect(renderBoat).toEqual(boat.render())

     })
})