import compose from 'koa-compose';

// Import all routes
import user from './user';
import entity from './entity';
import fieldLookup from './fieldLookup';

export default () => compose([
  user(),
  entity(),
  fieldLookup(),
]);
