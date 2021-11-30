const argv = require("yargs")
                .option('b',{
                        alias:'base',
                        type:'number',
                        demandOption: true,
                        describe:"toma la base como la tabla que quiera imprimir"
                    }
                    )
                    .option	('l',{
                        alias:'listar',
                        type:"boolean",
                        demandOption:true,
                        default:false,
                        describe:"lista la tabla"
                    })
                    .option	('lm',{
                        alias:'limit',
                        type:"number",
                        describe:"limite de la tabla"
                    })
                    .check((argv,options)=>{
                        if(isNaN(argv.b)){
                            throw "la base tiene que se un numero"
                        }
                        return true
                    })
                    .argv
module.exports = argv
