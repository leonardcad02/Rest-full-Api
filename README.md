# RestFullApi
 Create a Rest-ful API with CR actions (create and retrieve/read of CRUD) using  NodeJS
# Pasos Para arrancar la API-REST
 primer paso: Clonar el repositorio   
 
 segundo paso: Integrar la base de datos al proyecto o ejecutar el script que se encuentra en la carpeta db/db.sql, si por algun motivo no tiene las mismas credenciales entonces se recurre al archivo config.js para configurar las variables de conecion de base de datos (Hostname, user, password, database)
 
 tercer paso: arrancar la Api-rest con el comando node server.js o también esta en prueba de desarrollo con nodemon npm run dev
 
 cuarto paso: El puerto por configuración en 3000 y la ruta es http://localhost:3000/user allí es donde se encuentra alojada la aplicación y una vez realizada esta acción se puede hacer pruebas con POSTMAN para verificar su funcionamiento
 
 quinto paso: - El servidor debe estar levantado para que consuma el servicio de la aplicación en Angular 