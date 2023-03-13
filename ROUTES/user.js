//4) requiero express y creo un router routerUsuario y tambien lo exportamos
//importo las funciones creadas en el controlador, en este caso getUsuariosController()
//y conecto la ruta con esa funcion

const express = require('express');
const routerUser = express.Router();
const { getAllUsersController, getUserByIdController, postUserController, putUserController, deleteUserByIdController } = require('../CONTROLLER/user.js');

routerUser.get('/users', getAllUsersController);
routerUser.get('/users/:id', getUserByIdController);
routerUser.post('/users', postUserController);
routerUser.put('/users/:id', putUserController);
routerUser.delete('/users/:id', deleteUserByIdController);

module.exports = routerUser;
