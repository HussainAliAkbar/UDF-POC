import { getUsers } from '../service/user';

export const get = async (ctx) => {
  ctx.body = { users: await getUsers(), time: Date.now() };
};

export const post = (ctx) => {
  ctx.body = '[POST]: /user';
};

export const put = (ctx) => {
  ctx.body = '[PUT]: /user';
};
