import { lazyLoad } from 'renderer/utils/loadable';

export const ListPage = lazyLoad(
  () => import('./index'),
  (module) => module.List
);
