import Router from 'koa-router';
import Errors from 'boom';
import compose from 'koa-compose';

import * as Ctrl from '../controller/fieldLookup';

const router = new Router({
  prefix: '/fieldLookup',
});

router.get('/', Ctrl.get);

const routes = router.routes();
const allowedMethods = router.allowedMethods({
  throw: true,
  notImplemented: () => new Errors.notImplemented(),
  methodNotAllowed: () => new Errors.methodNotAllowed(),
});

export default () => compose([
  routes,
  allowedMethods,
]);
