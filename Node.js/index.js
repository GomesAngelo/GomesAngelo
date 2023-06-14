const meuModulo = require("./meu_modulo"); //declarei a variável http
const meuModuloSub = require("./sub"); 
const meuModuloDiv = require("./div"); 
const meuModuloSquare = require("./square"); 

const soma = meuModulo.soma
const sub = meuModuloSub.sub
const div = meuModuloDiv.div
const square = meuModuloSquare.square

soma(3, 2)

sub(3, 2)

square(2)

div(4, 2)