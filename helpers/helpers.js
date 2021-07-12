const axios = require('axios');
const hbs = require('hbs');

let dolarHoy;
axios.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then((response) => {
        dolar = response.data[0].casa.venta;
        dolar = dolar.replace(/,/g, '.');
        dolar = parseFloat();
    })
    .then()
    .catch((error) =>{
        console.log(error);
    });

    hbs.registerHelper('dolarApeso', (objeto) => {
        let calculoSinDecimales = (dolarHoy * objeto).toFixed(0);
    });