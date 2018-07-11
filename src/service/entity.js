import * as entityRepo from '../repository/entity';

export const getAll = async () => {
  return entityRepo.getAllEntities();
};


export const getEntityCustomFields = async (entityId) => {
  // return entityRepo.getEntityCustomFields(entityId);
  return Promise.resolve('foo');
};

export const postUser = async (payload) => {
  return entityRepo.saveUser(payload);
};


export const putUser = async (payload) => {
  return entityRepo.updateUser(payload);
};

