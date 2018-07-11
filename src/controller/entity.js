import * as entityService from '../service/entity';

export const getEntities = async (ctx) => {
  ctx.body = { users: await entityService.getAll(), time: Date.now() };
};

export const getEntityCustomFields = async (ctx) => {
  ctx.body = { users: await entityService.getEntityCustomFields(ctx.params.id), time: Date.now() };
};

export const postEntityCustomFields = async (ctx) => {
  const payload = {
    id: ctx.request.body.id,
    name: ctx.request.body.name,
    age: ctx.request.body.age,
    customfieldanswers: ctx.request.body.customfieldanswers,
  };
  ctx.body = { users: await entityService.postUser(payload), time: Date.now() };
};

export const put = async (ctx) => {
  const payload = { ...ctx.request.body };
  await entityService.putUser(payload);
  ctx.body = { success: true, time: Date.now() };
};
