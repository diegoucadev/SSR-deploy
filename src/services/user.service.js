import { User, createUser, getUser } from '../models/user.model.js';

const addNewUser = (user) => {
    const newUser = new User(user.name, user.age, user.email);
    createUser(newUser);
};

const retrieveUser = () => {
    let user = getUser();
    return user;
}

export {
    addNewUser,
    retrieveUser
};