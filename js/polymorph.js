class Animal{

    constructor(name,breed){
        this.name = name
        this.breed = breed
    }

    speak(){
        console.log('we have various animal that speaks')
    }
    run(){
        console.log('all animal can run a long distance')
    }
}

class Dog extends Animal{

    constructor(name,breed){
        super(name,breed)
    }
   
}

class Cat extends Animal{

    constructor(name,breed){
    super(name,breed)
}  

}

const dog = new Dog('Romeo','purpie')

const cat = new Cat('Jack','mew')

// dog.speak()
// cat.speak()

const polymorph = [dog,cat]

polymorph.forEach(obj=> {
    obj.speak()
    console.log(' ')
    // obj.run()
})
