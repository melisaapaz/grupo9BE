const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('wewashdb', 'root', 'password', {
host: 'localhost',
dialect: 'mysql'
 });

 sequelize.authenticate()
     .then(() => console.log('Database connected...'))
     .catch(err => console.log('Error: ' + err));

 module.exports = sequelize;


// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('368243_wewash  ', 'jorgelinabaez', 'cacdeploy', {
//   host: 'jorgelinabaez.alwaysdata.net',
//   dialect: 'mysql',
//   port: 3001, // Este es el puerto predeterminado para MySQL
// });

// sequelize.authenticate()
//   .then(() => {
//     console.log('La conexión se ha establecido exitosamente.');
//   })
//   .catch(err => {
//     console.error('No se puede conectar a la base de datos:', err);
//   });

//   module.exports = sequelize;

  