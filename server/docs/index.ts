import { basic } from './basic';
import { components } from './components';
import { server } from './server';
import { tags } from './tags';

import { projects } from './projects';
import { productOwners } from './product-owners';
import { health } from './health';

const routes = {
  paths: {
    ...health,
    ...projects,
    ...productOwners,
  }
}

export const swaggerDocs = {
  ...basic,
  ...components,
  ...server,
  ...tags,
  ...routes,
};