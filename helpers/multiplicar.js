const fyleSystem = require('fs')
const colors = require('colors')
const archivoTabla = async (base,listar =true,limite) => {
  let salida = "";
  for (let i = 0; i <= limite; i++) {
    let resultado = base * i;
    salida += `${base} x ${i} = ${resultado} \n`;
  }
  if(listar){
  console.log(salida.rainbow);
  }
  fyleSystem.writeFileSync(`./salida/Tabla-${base}.txt`, salida);
  return "creado"
};
module.exports = {
  crearArchivo: archivoTabla
}