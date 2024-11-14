function print() {
    console.log(
        "someVariable(" + someVariable + ") is a " + typeof someVariable
    );
    // Nota: 'typeof' é explicado posteriormente. 
}

// Declare someVariable e inicialize com o número '5':
var someVariable = 5;
print(someVariable);

// Declare someVariable e inicialize com a string 'Hello World':
var someVariable = "Hello World";
print(someVariable);

// Declare someVariable e inicialize com o valor 'true':
var someVariable = true;
print(someVariable);

// Declare someVariable e inicialize com o valor 'null':
var someVariable = null;
print(someVariable);

// Declare someVariable e inicialize com o valor 'undefined':
var someVariable;
print(someVariable);

// Declare someVariable e inicialize com o valor '[]':
var someVariable = [];
print(someVariable);

// Declare someVariable e inicialize com o valor '{}':
var someVariable = {};
print(someVariable);

// Declare someVariable e inicialize com o valor 'function(){}':
var someVariable = function() {};
print(someVariable);
