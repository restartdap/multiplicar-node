
const { argv } = require("./config/yargs");
const colors = require("colors");
const {listarTabla, crearArchivo} = require("./multiplicar/multiplicar");

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch(comando) {
    case "listar":

        console.log("==================".red);
        console.log("|".red + " Comando Listar ".rainbow + "|".red);
        console.log("==================".red);

        listarTabla(base, limite);
    break;
    case "crear":
        
        console.log("=================".blue);
        console.log("|".blue + " Comando Crear ".rainbow + "|".blue);
        console.log("=================".blue);

        
        crearArchivo(base, limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.yellow))
            .catch(err => console.error(`${err}`.red));
    break;
    default: 
        console.log("Comando no reconocido");
    break;
}

/*
//Obtener argumentos de entrada en consola manualmente
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split("=")[1]; 
*/