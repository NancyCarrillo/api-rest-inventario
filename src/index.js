const express = require('express');
const app = express();

app.set('port',3000);

app.use(express.json());

// routers
 app.use('/api/productos',require('./router/productos'));







app.listen(app.get('port'), ()=>{
    console.log('Servidor corriendo en el puerto ', app.get('port'));
});