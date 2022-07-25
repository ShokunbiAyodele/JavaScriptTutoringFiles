class CustomerInfo{
    constructor(first_name,last_name,middle_name){
        this.first_name = first_name
        this.last_name = last_name
        this.middle_name= middle_name
    }
}
document.addEventListener('submit',function(event){
    event.preventDefault()
 const frist_Name = document.querySelector('#first_name').value
const last_Name = document.querySelector('#last_name').value
const middle_Name = document.querySelector('#middle_name').value

const individual = new CustomerInfo(frist_Name,last_Name,middle_Name)

console.log(individual.first_name)

fetch('/saveindividualInfo',{
    method : 'post',
    headers : {'Content-type' : 'application/json'},
    body: JSON.stringify(individual)
})

})



// class Person{

//     constructor(firstName,lastName,MiddleName){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.MiddleName = MiddleName
//     }

// }

// const Indicvidual = new Person('Abdulfatah','Shokunbi','Ayodele')

// console.log(Indicvidual)




//encapsulation with constructor function

  // class Person {
  //   #name = "Asma'a";

  //   #perTransactiondeduction = 0
    

  //   getTransaction(){
  //     return this.#perTransactiondeduction
  //   }
  
  //   getName() {
  //     return this.#name;
  //   }

  //   setName(newname){
  //     this.#name = newname
  //   }
  // }


  // let person = new Person();

// person.name; // undefined
// console.log(person.getName()); // Nathan
// person.#name = 'AdunOla'
// console.log(person.#name)  
// console.log(person.getName())

// person.setName('Adunola')
// console.log(person.getName())

// console.log(person.getName())


// class Animal{
//   constructor(name){
//     this.name = name
//   }

//   getName(){
//     return this._name
//   }

// }


// const dog = new Animal('dog')

// console.log(dog.getName())



function createPerson(){
  let name = 'Ayodele'
  return {
    getName : function(){
      return name
    },

    setName : function(newname){
      name = newname
    }
  }
}

const Abdulfatah = new createPerson()

// console.log(Abdulfatah.getName())

// Abdulfatah.setName('Abdulfatah')

// console.log(Abdulfatah.getName())
// console.log(Abdulfatah)
// Abdulfatah.setName('Abiodun')
// console.log(Abdulfatah.getName())


// function Persons(){
//   this.name = "Ayodele"
//   if(this.constructor === Persons){
//     throw new Error('Abstract class Person does not have a constructor')
//   }
// };

// Persons.prototype.info = function(){
//   return this.name
// }


// function Teacher(name){
//   this.name = name
// }

// Teacher.prototype = Object.create(Persons.prototype)

// const teacher = new Teacher('Abdulfatah')

// console.log(teacher.info())


  for(let i = 1; i <= 300; i++){
    if(i < 101){
      if(i % 2 !== 0){
        if(i === 1){
          console.log('odd number')
        }
        console.log(i)
        console.log(' ')
  
      }
    }
    else if(i > 100 && i <= 201){
      if(i % 2 === 0){
        if(i === 102){
          console.log('even number')
        }
        console.log(i)
        console.log(' ')
  
      }
  
    }
}

for (counter = 201; counter <=300; counter = counter + 1)  
{
    testPrime = 0;
    for (testNum = 1; testNum <=300; testNum = testNum + 1)
    {
        var testRes = counter % testNum;
        if (testRes === 0)
        {
        testPrime = testPrime + 1;
        }
    }
    if (testPrime === 2)
    {
        console.log(counter);
    }
}
