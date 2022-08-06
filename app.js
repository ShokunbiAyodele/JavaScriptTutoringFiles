

async function callFakeStoreApi(){
    try {
        const getAll = await fetch('https://fakestoreapi.com/products/')
        const response = await getAll.json()
        // console.log(response);
        for(res in response){
            // console.log(response[res])
            //get the ul from the dom
            const Ul = document.querySelector('ul')
            //create li
            const li = document.createElement('li');
            // li.appendChild(document.createTextNode(response[res].description))
            // Ul.appendChild(li)
            let output = ''
            const span = document.createElement('span')
            const h1 =  document.createElement('hi')
            const p =  document.createElement('p')
            span.appendChild(document.createTextNode(response[res].category))
            p.appendChild(document.createTextNode(response[res].description))
            h1.appendChild(document.createTextNode(response[res].price))
            // Ul.appendChild(document.createTextNode(span))
          
             li.appendChild(document.createTextNode(response[res].description))
              Ul.appendChild(li)
              Ul.insertBefore(span,li)
              Ul.insertBefore(h1,span)
            
        }
    } catch (error) {
        console.log('we have this error :' + error)
    }
   
}

callFakeStoreApi();
