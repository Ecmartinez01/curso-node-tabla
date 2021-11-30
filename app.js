const {crearArchivo} = require("./helpers/multiplicar")
const argv = require("./config/yargs");
console.log(argv)  
console.log("base:yargs",argv.base)  
console.log("base:yargs",argv.l)  
console.log("base:yargs",argv.lm)  
crearArchivo(argv.base,argv.l,argv.limit).then((respuesta)=> console.log(respuesta.blue)).catch((err)=> console.log(err.red))