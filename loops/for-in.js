/*
Esse laço, assim como os demais em uma linguagem de programação, é bastante utilizado com arrays 
(vetor ou matriz contendo dados não ordenados. Veremos sobre eles no próximo módulo). 
Normalmente, precisamos percorrer o conteúdo de um array e manipular ou apenas exibir o seu valor.
 */
var cars = ['Volkswagen', 'Ferrari', 'Ford',
    'Chevrolet', 'Toyota', 'Nissan'];

for (var car in cars) {
    console.log('Car name contained in the array: ' + cars[car]);
}