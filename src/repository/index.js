import knex from './knex';

export const getAllUsers = async () => {
  return knex.select().table('users')
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log('in err:', err);
    });
};

