function getApi(){
    return new Promise((resolve,reject) =>{
        fetch('https://anapioficeandfire.com/api/characters/583').
        then(res => res.json()).
        then(response =>
            resolve(response)).
        catch(error => reject(error))
    })
}

getApi().then(result => {
    console.log(result)
    for(aliases in result.aliases){
        const Ul= document.querySelector('ul');
        // const Li = document.querySelector('li')
        Ul.innerHTML += `<li>${result.aliases[aliases]}</li>`

        // Li.textContent +=  result.aliases[aliases]

    }
}).catch(error => console.log(error))   