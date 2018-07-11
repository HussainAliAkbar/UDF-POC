import { getAllUsers } from '../repository';


const users = [
  'ava',
  'boyd',
  'raylan',
  'winona',
];

export const getUsers = async () => {
  try {
    const allUsers = await getAllUsers();
    console.log(allUsers);
    return allUsers;
  } catch (e) {
    console.log(e);
  }
};

export const getFirstUser = () => users[0];
