import * as fieldLookupService from '../service/fieldLookup';

export const get = async (ctx) => {
  ctx.body = { users: await fieldLookupService.getAll(), time: Date.now() };
};
