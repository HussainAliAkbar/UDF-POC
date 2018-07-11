import knex from './knex';

export const getAllFields = async () => {
  return knex.select().table('fieldlookups');
};
