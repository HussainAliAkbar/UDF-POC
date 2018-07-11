import knex from './knex';

export const getAllEntities = async () => {
  return knex.select().table('entities');
};


// TODO: THIS IS A BUG! FIX THIS!
// export const getEntityCustomFields = async (entityId) => {
//   return knex.select().table('entityfields').as('ef')
//     .join('entities as e', 'ef.entityId', 'e.id')
//     .join('fieldlookups as f', 'ef.fieldlookupId', 'f.id')
//     .whereRaw('e.id = ?', [entityId]);
// };




export const saveEntity = async (payload) => {
  return knex('entities').insert(payload);
};

export const updateEntity  = async (payload) => {
  return knex('entities').where('id', payload.id).update(payload);
};

