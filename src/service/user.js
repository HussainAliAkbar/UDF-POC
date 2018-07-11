import * as userRepo from '../repository/user';


const users = [
  'ava',
  'boyd',
  'raylan',
  'winona',
];

export const getUsers = async () => {
    return userRepo.getAllUsers();
};

export const getFirstUser = () => users[0];


export const getUserById = async (userId) => {
  return userRepo.getUserById(userId);
};

export const postUser = async (payload) => {
  return userRepo.saveUser(payload);
};


export const putUser = async (payload) => {
  payload.customfieldanswers = JSON.stringify(payload.customfieldanswers);
  return userRepo.updateUser(payload);
};
