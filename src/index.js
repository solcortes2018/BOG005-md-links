// const { validate } = require("uuid");
const { readingFile } = require('./readFileFunction.js')
const { validatePath } = require('./functionView.js');
const { validateLink } = require('./validateLinks.js');



const mdLinks = (path, options = { validate: false }) => {
	return new Promise((resolve, reject) => {
		const pathValidate = validatePath(path);
		// console.log(pathValidate, 30);
		if (options.validate != true) {
			readingFile(pathValidate)
				.then(response => resolve(response))
		}
		else {
			readingFile(pathValidate)
				.then(response => validateLink(response)
				.then(res => resolve(res)))
		}
	})


}

mdLinks(process.argv[2], {validate:true}).then((res) => {
	// console.log(res, 50);
})


module.exports = {
	mdLinks,
}