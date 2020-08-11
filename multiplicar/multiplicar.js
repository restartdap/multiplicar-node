const fs = require("fs");
const colors = require("colors");

let listarTabla = (base, limite = 10) => {
	if(!Number(base)) {
		console.log(`El valor introducido "${base}" no es un numero`.red);
		return;
	}

	console.log("################".green);
	console.log("################".green);
	console.log("##    ####    ##".green);
	console.log("##    ####    ##".green);
	console.log("######    ######".green);
	console.log("####        ####".green);
	console.log("####        ####".green);
	console.log("####  ####  ####".green);

	for(let i = 1; i <= limite; i++) {
		console.log(`${base} x ${i} = ${i * base}`.yellow);
	}
}

let crearArchivo = (base, limite = 10) => {

	console.log("################".green);
	console.log("################".green);
	console.log("##    ####    ##".green);
	console.log("##    ####    ##".green);
	console.log("######    ######".green);
	console.log("####        ####".green);
	console.log("####        ####".green);
	console.log("####  ####  ####".green);

	return new Promise((resolve, reject) => {

		if(!Number(base)) {
			reject(`El valor introducido "${base}" no es un numero`);
			return;
		}

		let data = "";

		for(let i = 1; i <= limite; i++) {
			data += `${base} x ${i} = ${i * base}\n`;
		}

		fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
			if(err) 
				reject(err);
			else 
				resolve(`tablas/tabla-${base}.txt`);
		});           
	}); 
};

module.exports = {
	crearArchivo,
	listarTabla
};