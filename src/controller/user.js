import * as userService from '../service/user';

export const get = async (ctx) => {
  ctx.body = { users: await userService.getUsers(), time: Date.now() };
};

export const post = async (ctx) => {
  const payload = {
    id: ctx.request.body.id,
    name: ctx.request.body.name,
    age: ctx.request.body.age,
    customfieldanswers: ctx.request.body.customfieldanswers,
  };
  ctx.body = { users: await userService.postUser(payload), time: Date.now() };
};

export const put = async (ctx) => {
  const payload = { ...ctx.request.body };
  await userService.putUser(payload);
  ctx.body = { success: true, time: Date.now() };
};

export const getUserById = async (ctx) => {
  ctx.body = { users: await userService.getUserById(ctx.params.id), time: Date.now() };
};
