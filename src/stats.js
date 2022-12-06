// let prueba= [
//   {
//       href: 'https://nodejs.org/api/path.html',
//       text: 'Path',
//       file: 'C:\\Users\\venta\\BOG005-md-links\\README.md',
//       status: 200,
//       mensaje: 'ok'
//     },
//     {
//       href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',    text: 'Linea de comando CLI',
//       file: 'C:\\Users\\venta\\BOG005-md-links\\README.md',
//       status: 200,
//       mensaje: 'ok'
//     },
//     {
//       href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
//       text: 'recurso',
//       file: 'C:\\Users\\venta\\BOG005-md-links\\README.md',
//       status: 200,
//       mensaje: 'ok'
//     },
//     {
//       href: 'htts://www.youtube.com/watch?v=Lub5qOmY4JQ',
//       text: 'recurso',
//       file: 'C:\\Users\\venta\\BOG005-md-links\\README.md',
//       status: 404,
//       mensaje: "Fail"
//     },
//     {
//       href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',    text: 'Linea de comando CLI',
//       file: 'C:\\Users\\venta\\BOG005-md-links\\README.md',
//       status: 200,
//       mensaje: 'ok'
//     },
// ]

const optionsStats = (okLinks) => {
    return {
      Total: okLinks.length,
      unique: new Set(okLinks.map((arrayobjects) => arrayobjects.href)).size,
    };

};

const validateStats = (okLinks) => {
    const brokenLinks = okLinks.filter((link) => link.status == 404).length;
    return {
      Total: okLinks.length,
      unique: new Set(okLinks.map((arrayObjetos) => arrayObjetos.href)).size,
      Broken: brokenLinks,
    };
};
// console.log(optionsStats(prueba));

module.exports = {
    optionsStats,
    validateStats,
}