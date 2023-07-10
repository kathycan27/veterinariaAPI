//Importar funcion de la database
import connection from './database.js';
//Importación  de la variable app por medio de módulos
import app from './server.js'

//Conexión BASE DE DATOS
connection()

//Ejecutar el servidor en el puerto 3000
app.listen(app.get('port'),()=>{
    console.log(`Server ok on http://localhost:${app.get('port')}`);
})

