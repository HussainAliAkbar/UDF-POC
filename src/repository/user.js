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

export const getUserById = async (id) => {
  return knex.select().table('users').where({ id }).first();
};

export const saveUser = async (payload) => {
  return knex('users').insert(payload);
};

export const updateUser = async (payload) => {
  console.log(payload)
  return knex('users').where('id', payload.id).update(payload);
};

