function Vehicle(){
    this.vehicle = 'vehicleName'
    this.color =  'vehicleColor'
    this.size =   'vehicleSize'
    throw new Error("Abstract class cant be instantiated")
}
Vehicle.prototype.info =function(){
    return `name of vehicle is ${this.vehicle} and color ${this.color} and size is ${this.size}`
}


function Bike(vehicle,color,size){
    this.vehicle = vehicle
    this.color =  color
    this.size =   size
}

Bike.prototype = Object.create(Vehicle.prototype)

Bike.prototype.run = Object.create(this,Bike)

const bajaj = new Bike('BAJAJ','RED','BIG')


console.log(bajaj.info())









