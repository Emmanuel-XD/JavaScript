//declaracion de variables para la tabla

var registrosList = [];

function addDateToSystem(pcod, pnomprod, pPrecio, pexas){

var newDate = {

    codigo: pcod,
    nombreprod: pnomprod,
    precio: pPrecio,
    existencia: pexas
    };
console.log( newDate );
registrosList.push( newDate );
localStorageRegistrosList(registrosList);

}
//JSON convierte el valor de los datos insertados para que se compatible
//onvierte un objeto o valor de JavaScript en una cadena de texto JSON y reemplaza valores 
function localStorageRegistrosList(plist){
    localStorage.setItem('localRegistrosList', JSON.stringify(plist));
}
// condiciones para que capte los datos cuando sean introducidos.
//devuelve el valor de la clave cuyo nombre se le pasa por parámetro.
function getRegistrosList(){
    var storedList = localStorage.getItem('localRegistrosList');
    
        if(storedList == null){

        registrosList = [];
    }
   else{

    //JSON.parse() analiza una cadena de texto como JSON, transformando opcionalmente  el valor producido por el análisis.
    registrosList =  JSON.parse(storedList); 

    }
    return registrosList;
    
}
function deleteElementrow(codedelete){
    let lista= "";
    lista = JSON.parse(localStorage.getItem('localRegistrosList'));
    let indexLista= lista.findIndex(element => element.codigo === codedelete);
    lista.splice(indexLista, 1);
    let listaJSON= JSON.stringify(lista);
    localStorage.setItem('localRegistrosList', listaJSON);
}
