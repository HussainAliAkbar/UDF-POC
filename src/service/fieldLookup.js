import * as fieldLookupRepo from '../repository/fieldLookup';

export const getAll = async () => {
  return fieldLookupRepo.getAllFields();
};
