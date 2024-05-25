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
    return elemento.name + ' es ' + elemento.role + ' y le gusta ' + elemento.hobbies[0] + ' y ' + elemento.hobbies[1]
})
console.log(result3)


/* 4: Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares*/

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result4 = numbers2.filter(num => num % 2 !== 0)

/* 5: Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo
['Que rico Tempeh me voy a comer!',
'Que rica Tofu burguer me voy a comer!']*/

const foodList2 =[
{
  name: 'Tempeh',
  isVeggie: true
},
{
  name: 'Cheesbacon burguer',
  isVeggie: false
},
{
  name: 'Tofu burguer',
  isVeggie: true
},
{
  name: 'Entrecot',
  isVeggie: false
}];

let result5 = foodList2.filter(food => food.isVeggie === true).map(food => {
    if (food.name === 'Tempeh'){
    return 'Que rico ' + food.name + ' me voy a comer!'
    } else {
         return 'Que rica ' + food.name + ' me voy a comer!'
    }
})
console.log(result5)

/* 6: Dado el array **inventory**, devolver un array con los nombres de los elementos que valgan más de 300 euros.  
[
    'TV Samsung,',
    'Viaje a Cancún'
  ]*/

const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a Cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];

let result6 = inventory.filter(item => item.price > 300).map(item => {
    return item.name
})

console.log(result6)

/* 7: Dado el siguiente array **numeros** [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array*/

const numeros3 = [39, 2, 4, 25, 62]

let result7 = numeros3.reduce((acc,numero) => acc * numero)
console.log(result7)

/*8: Concatena todos los elementos del array con reduce para que devuelva una sola frase
Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'*/

const sentenceElements = [
  'Me',
  'llamo',
  'Antonio',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];

let result8 = sentenceElements.reduce((acc, palabra) => acc + ' ' + palabra)
console.log(result8)

/* 9: Obtener el monto total de los elementos que pertenecen a category "code" en el siguiente array.
Resultado --> 60 */
const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];

let result9 = books.filter(book => book.category === 'code').reduce((acc, book) => acc + book.price, 0)
console.log(result9)