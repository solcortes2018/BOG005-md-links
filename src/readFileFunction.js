const fs = require('fs')
const marked = require('marked')

// const argumentoPrueba = [
//     'C:\\Users\\venta\\BOG005-md-links\\src\\README.md'
// ]


const readingFile = (arrayMDLinks) => {

    return new Promise((resolve, reject) => {
        let x = arrayMDLinks.map((fileMd) => {
            let links = [];
            return new Promise((resolve, reject) => {
                fs.readFile(fileMd, 'utf-8', (error, data) => {
                    if (error)
                        reject(error)
                    const renderer = new marked.Renderer()

                    renderer.link = (href, param, text) => {
                        const obj = {
                            'href': href,
                            'text': text,
                            'file': fileMd,
                        }
                        if (obj.href.includes('http')) {
                            links.push(obj)
                        }

                    }
                    marked.marked(data, { renderer });

                    resolve(links);

                });

            })



        });
        Promise.all(x).then(res => resolve(res.flat()))
    });
}

// readingFile(argumentoPrueba).then((res) => {
//     console.log(res , 40);
// })







module.exports = {
    readingFile
};