import * as userRepo from '../repository';


const users = [
  'ava',
  'boyd',
  'raylan',
  'winona',
];

export const getUsers = async () => {
  try {
    const allUsers = await userRepo.getAllUsers();
    console.log(allUsers);
    return allUsers;
  } catch (e) {
    console.log(e);
  }
};

export const getFirstUser = () => users[0];


export const getUserById = async (userId) => {
  return userRepo.getUserById(userId);
};

export const postUser = async (payload) => {
  return userRepo.saveUser(payload);
};


export const putUser = async (payload) => {
  return userRepo.updateUser(payload);
}
