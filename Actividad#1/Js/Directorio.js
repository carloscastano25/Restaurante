const mostRest = 
[
   {
    nombre: 'Restaurante Punto rico',
    direccion: 'Cr 32 # 82 - 36',
    descripcion: 'Lo mejor del sur'
   },

   {
    nombre: 'Restaurante Alamar',
    direccion: 'Cl 26 # 68 - 07',
    descripcion: 'La mejor comida de mar'
   },

   {
    nombre: 'Restaurante La Delicia',
    direccion: 'Cr 27 # 64 - 98',
    descripcion: 'Deleita tu paladar'
   },

   {
    nombre: 'Restaurante La Peruana',
    direccion: 'Cl 12 # 21 - 61',
    descripcion: 'Deleita tu paladar'
   }
];

let data = mostRest.map(function(most){
    return '<li>'+most.nombre+' '+most.direccion+' '+most.descripcion+ '</li>'
});

document.getElementById("container").innerHTML = data; 
