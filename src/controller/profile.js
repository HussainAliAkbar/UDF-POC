import { getFirstProfile, getProfiles } from '../service/profile';

export const get = (ctx) => {
  ctx.body = { profiles: getProfiles(), time: Date.now() };
};

export const post = (ctx) => {
  ctx.body = '[POST]: /profile';
};

export const put = (ctx) => {
  ctx.body = '[PUT]: /profile';
};
