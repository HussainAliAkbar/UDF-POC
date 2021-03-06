import Router from 'koa-router';
import Errors from 'boom';
import compose from 'koa-compose';

import * as Ctrl from '../controller/entity';

const router = new Router({
  prefix: '/entity',
});

router.get('/', Ctrl.getEntities);
router.get('/:id/fields', Ctrl.getEntityCustomFields);
router.post('/:id/fields', Ctrl.postEntityCustomFields);
// router.put('/:id/fields', Ctrl.postEntityCustomFields);

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
