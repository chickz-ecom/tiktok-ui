import { HeaderOnly, DefaultLayout } from '~/components/Layout';
import { Fragment } from 'react';
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';

// public route do not login
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: Fragment },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
