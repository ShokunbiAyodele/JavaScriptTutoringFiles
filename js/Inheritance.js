class Animal{
    constructor(eye,leg,color){
        this.eye = eye
        this.leg = leg
        this.color = color 
    }
    speak(){
        console.log('All animal speaks')
    }
    run(){
        console.log('All animal run')
    }
}

class Dog extends Animal{

    constructor(eye,leg,color,name,breed){
        super(eye,leg,color)
        this.name = name
        this.breed = breed
    }
    sing(){
        console.log('dog sings')
    }

}

class Cat extends Animal{
    constructor(eye,leg,color,name,mouth){
        super(eye,leg,color)
        this.name = name
        this.mouth = mouth
    }

    sleep(){
        console.log('cat sleeps')
    }
}

const animal = new Animal('two eyes','2','a any-color')

const purpie = new Dog('two eyes','2','brown','jack','purpie')

const cat = new Cat('cat two eyes','2 legs','white','jackson','cats has one mouth')

// purpie.sing()
// purpie.speak()

cat.sleep()

// purpie.run()

// cat.speak()
// cat.run()


