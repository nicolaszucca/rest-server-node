const Role = require('../models/role')
const Usuario = require('../models/user')


const isValidRole = async (rol = '') => {
    const rolExist = await Role.findOne({ rol });
    if (!rolExist) {
        throw new Error(`El rol ${rol} no está registrado en la BD`)
    }
}

const emailExist = async (correo) => {
    const userEmailExist = await Usuario.findOne({ correo });
    if (userEmailExist) {
        throw new Error(`El correo ${correo} ya existe`);
    }
}

const existUserById = async (id) => {
    const userExist = await Usuario.findById(id);
    if (!userExist) {
        throw new Error(`El id: ${id} no existe`);
    }
}


module.exports = {
    isValidRole,
    emailExist,
    existUserById
}
