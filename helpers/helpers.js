const axios = require('axios');
const hbs = require('hbs');
/* Calculo dolar */
let dolarHoy;
axios.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then((response) => {
        dolar = response.data[0].casa.venta;
        dolar = dolar.replace(/,/g, '.');
        dolar = parseFloat(dolar);
    })
    /* Agregar los impuestos y retornar valor final */
    .then( () => {
        const impuestoPais = 0.30;
        const impuestoAfip = 0.35;
        dolarHoy = (dolar * impuestoPais) + (dolar * impuestoAfip) + dolar;
        return dolarHoy;
    })
    .catch((error) => {
        console.log(error);
    });
    /* Creo el helpers */
    hbs.registerHelper('dolarApeso', (objeto) => {
        let calculoSinDecimales = (dolarHoy * objeto).toFixed(0);
        return new Intl.NumberFormat("es-AR").format(calculoSinDecimales);
    });
    hbs.registerHelper('list', (objeto) => {
        // Convierto en array la lista de características separadas previamente con "coma"
	let array = objeto.split(",");
	var html = "<ul>";

	// Recorro array para que, cada valor, tenga el HTML <li> 
	for (var i = 0; i < array.length; i++) {
		html = `${html} <li> ${array[i]} </li>`;
	}

  	return html + "</ul>";
    });