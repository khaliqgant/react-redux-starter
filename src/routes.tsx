import Landing from '@root/containers/landing';
import PageNotFound from '@root/containers/pageNotFound';
import { Route } from '@root/interfaces/route';

const routes: Array<Route> = [{ path: '/', component: Landing, exact: true }, { component: PageNotFound, exact: true }];

export default routes;
