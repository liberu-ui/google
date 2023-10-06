import routeImporter from '@liberu-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./google', false, /.*\.js$/));
const Router = () => import('@liberu-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'google/',
    component: Router,
    meta: {
        breadcrumb: 'google',
    },
    children: routes,
};
