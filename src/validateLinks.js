const {readingFile} = require ('./readFileFunction.js')
let arrayMDLinks = require ('./functionView.js')
const axios = require("axios");
const argsTerminal = process.argv;



function validateLink(arrayObjects) {
   let arrPromises = [];
   arrPromises = arrayObjects.map((object) => {
    return axios
        .get(object.href)
        .then((res) => {
          // console.log("Status =", res.status, 45);
            object.status = res.status;
            object.mensaje = "ok";
            return object;
        })
        .catch((err) => {
          object.status = 404;
          object.mensaje = "Fail";
          return object;
        });
    });

    return  Promise.all(arrPromises).then(res=>res); 
};
    
// validateLink(arrayObjects)
// readingFile(validatePath(argsTerminal[2]))
// .then(res=>(res));
  
module.exports = {
  validateLink,
}