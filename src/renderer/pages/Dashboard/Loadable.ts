/**
 *
 * Asynchronously loads the component for NewSlice
 *
 */

import { lazyLoad } from 'renderer/utils/loadable';

export const DashboardPage = lazyLoad(
  () => import('./index'),
  (module) => module.Dashboard
);
