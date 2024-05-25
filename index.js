//RESUELVE LOS EJERCICIOS AQUI
/*1.- Dado el array **numbers** cuyo valor sea [4, 5, 6, 7, 8, 9, 10], 
crea una función **elevados** que devuelva un array con el cuadrado de 
cada uno de los elementos.*/

const numbers = [4, 5, 6, 7, 8, 9, 10]

function elevados(array){
    return array.map(num => num * num)
}

const cuadrados = elevados(numbers)
console.log(cuadrados)

/*2.- Dado el array **foodList** con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], 
generar un segundo array que consiga generar de salida el resultado esperado.
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'*/

    const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

    const result2 = foodList.map(food => {
        if (food === 'Entrecot') {
            return "Aunque no como carne, el Entrecot es sabroso";
        } else {
            switch (food) {
                case 'Pizza':
                    return "Como soy de Italia, amo comer Pizza";
                case 'Ramen':
                    return "Como soy de Japón, amo comer Ramen";
                case 'Paella':
                    return "Como soy de Valencia, amo comer Paella";
                default:
                    return ""; // Manejar cualquier otro caso si es necesario
            }
        }
    });
    
    console.log(result2);

/*3: Dado el  array **staff**, crear un segundo array que forme frases como en el ejemplo 
accediendo a las propiedades del objeto proporcionado:     
Resultado esperado
      [
        'Pepe es The Boss y le gusta leer y ver pelis',
        'Ana es becaria y le gusta nadar y bailar',
        'Luis es programador y le gusta dormir y comprar',
        'Ana es becaria y le gusta nadar y bailar',
        'Carlos es secretario y le gusta futbol y queso'
      ]
    */

const staff = [
    {
        name: 'Pepe',
        role: 'The Boss',
        hobbies: ['leer', 'ver pelis']
    },
    {
        name: 'Ana',
        role: 'becaria',
        hobbies: ['nadar', 'bailar']
    },
    {
        name: 'Luis',
        role: 'programador',
        hobbies: ['dormir', 'comprar']
    },
    {
        name: 'Carlos',
        role: 'secretario',
        hobbies: ['futbol', 'queso']
    }
];
    
const result3 = staff.map(elemento => {
    
})
