const API_FACTURA = {
    APIS: [
        'https://api.sheety.co/5b94a087de79feb1485f6c609df6f403/databaseFacturas/sheet1',  //multiaccff1
        'https://api.sheety.co/4e9e732af55cfa5673580c29335409f0/databaseFacturas/sheet1',  //retencionesguaribe
        'https://api.sheety.co/2169d7ca8b57539c48946e3ca92a3fb0/databaseFacturas/sheet1'   //multiaccff
    ],
    
    getRandomApi() {
        const randomIndex = Math.floor(Math.random() * this.APIS.length);
        return this.APIS[randomIndex];
    }
};