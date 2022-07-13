import { lazyLoad } from 'renderer/utils/loadable';

export const UserPage = lazyLoad(
  () => import('./index'),
  (module) => module.User
);
