// layouts
import { HeaderOnly } from '~/Components/Layout';

// pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import SearchPage from '~/pages/SearchPage';

import routesConfig from '~/config/routes'

// publicRoutes
const publicRoutes = [
    { path: routesConfig.home,component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: SearchPage, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
