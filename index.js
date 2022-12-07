const apiURL = 'https://images-api.nasa.gov/search?q=apollo%2011'; 


const consultar = async () =>{
    try{
        
        const response = await fetch(`${apiURL}`);
        const objects = await response.json();
        const tam = 10;
        let i = 0;
        let tabla = '';

        do{
            tabla = tabla + `<tr> <td class="title">${objects.collection.items[i].data[0].title}</td> <td class="description">${objects.collection.items[i].data[0].description}</td> <td class="image"><img src="${objects.collection.items[i].links[0].href}"</td>  </tr> `;
            i++;
        }while(i<10);

        document.getElementById('table').innerHTML += tabla;
        
    }catch(error){
        console.log(error);
    }
    
}


consultar()


