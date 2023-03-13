//3) importo getAllUsersService del servicio y creo la funcion getAllUsersController()
//que va a extraer la data (si es necesario) delrequest y va a recibir la data (usuarios) que la envia el service
// ese resultado se la da al front (res.json/res.render,etc)

const { getAllUsersService, getUserByIdService, postUserService, putUserService, deleteUserByIdService } = require('../SERVICE/user.js');

async function getAllUsersController(req, res) {
  const getAllUsers = await getAllUsersService();
  console.log(getAllUsers);
  res.json(getAllUsers);
}

async function getUserByIdController(req, res) {
  const userId = req.params;
  await getUserByIdService(userId);

  res.json(userId);
}

async function postUserController(req, res) {
  const dataUser = req.body;
  await postUserService(dataUser);

  res.json(dataUser);
}

async function putUserController(req, res) {
  const id = req.params;
  const dataUser = req.body;
  await putUserService(id, username, password, name, address, age, phone, url);

  res.json(id, dataUser);
}

async function deleteUserByIdController(req, res) {
  const id = req.params;
  console.log(id);
  await deleteUserByIdService(id);

  res.json(`user eliminado. ID: ${id}`);
}

module.exports = { getAllUsersController, getUserByIdController, postUserController, putUserController, deleteUserByIdController };
