const datosPersonales = {
    nombre: "Yeison",
    apellido: "Castillo",
    edad: 32,
    altura: 170,
    eresDesarrollador: true
}

const edad = datosPersonales.edad

const  lista = [ {
        ...datosPersonales
    }, {
        nombre: "Pedro",
        apellido: "Rodriguez",
        edad: 34,
        altura: 172,
        eresDesarrollador: false
    } , {
        nombre: "Patricia",
        apellido: "Vega",
        edad: 35,
        altura: 168,
        eresDesarrollador: true
    }
];

const listaOrdenada = lista.sort((a,b) => b.edad - a.edad);

console.log(listaOrdenada);
