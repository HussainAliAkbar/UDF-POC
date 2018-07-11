import compose from 'koa-compose';

// Import all routes
import user from './user';
import profile from './profile';

export default () => compose([
  user(),
  profile(),
]);
