import {listAllUsers, findUserById, addUser} from '../models/user-model.js';

const getUser = (req, res) => {
    res.json(listAllUsers());
};

const getUserById = (req, res) => {
    const user = findUserById(req.params.id);
    res.json(user);
};

const postUser = (req, res) => {
    const newUser = addUser(req.body);
    res.json(newUser);
};

const putUser = (req, res) => {
    res.json({message: 'User item updated.'});
};

const deleteUser = (req, res) => {
    res.json({message: 'User item deleted.'});
};

export {getUser, getUserById, postUser, putUser, deleteUser};