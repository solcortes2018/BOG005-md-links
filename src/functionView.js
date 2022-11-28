const fs = require('fs');
const myRoute = require('path');
const process = require('process');
const argsTerminal = process.argv;
const {readingFile} = require ('./readFileFunction.js')

const validatePath = (myPath) => {
    // console.log(myPath, 20);
    if (myPath == "" || myPath == undefined) {
        console.log("error, no es posible leer la ruta que ingresaste")
    }

    // Si la ruta es relativa se vuelve absoluta
    let route;
    route = myPath
    let arrayMD = []

    if (myPath) {
        // console.log(myPath, 22)

        if (myRoute.isAbsolute(myPath)) {
            // console.log(myPath, 'La ruta que ingresaste es absoluta');

        } else {
            route = myRoute.resolve(myPath);
            console.log('La ruta que ingresaste era relativa', route); //devuelve la ruta absoluta
        }
        // return route;
    };
    // //verifico si es un archivo md
    if (route) {
        if (myRoute.extname(route) == ".md") {
            // console.log("Ingresaste un archivo Markdown'.md'")
            arrayMD.push(route);
            // console.log(arrayMD, 25);
        }
        else
            console.log("Ingresaste una ruta de diferente formato");
    }
    return arrayMD
}

let arrayMDLinks = validatePath(argsTerminal[2])
// console.log(arrayMDLinks, 26);
readingFile(arrayMDLinks).then((data)=>{
// console.log(data, 46)
// //buscarMD(data)
})



module.exports = {
    arrayMDLinks,
    validatePath
};