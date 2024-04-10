// mock data
const userItems = [
    {
        user_id: 1001,
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@metropolia.fi',
        role: 'user',
        password: 'password',
    },
    {
        user_id: 1002,
        name: 'Jane Doe',
        username: 'janedoe',
        email: 'janedoe@metropolia.fi',
        role: 'maker',
        password: 'password',
    },
    {
        user_id: 1003,
        name: 'John Smith',
        username: 'johnsmith',
        email: 'jsmith@metropolia.fi',
        role: 'admin',
        password: 'password',
    },
];

const listAllUsers = () => {
    return userItems;
};

const findUserById = (id) => {
    return userItems.find((item) => item.user_id == id);
};

const addUser = (user) => {
    const {name, username, email, role, password} = user;
    const newId = userItems[0].user_id + 1;
    userItems.unshift({user_id: newId, name, username, email, role, password});
    return {user_id: newId};
};

export {listAllUsers, findUserById, addUser};