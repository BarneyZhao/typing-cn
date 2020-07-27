import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import Home from '@/views/home/Home';

const routes: Array<RouteProps & { children?: Array<RouteProps> }> = [
    {
        path: '/',
        component: Home,
        // component: lazy(() => import('@/views/home/Home')),
        exact: true,
    },
    {
        path: '/test',
        component: lazy(() => import('@/views/test/Test')),
        exact: true,
    },
    // {
    //     path: '/dashboard',
    //     component: lazy(() => import('@/views/dashboard/Dashboard')),
    //     // exact: true,
    //     children: [
    //         {
    //             path: '/graph/:id',
    //             component: lazy(() => import('@/views/dashboard/graph/DashboardGraph')),
    //             exact: true,
    //         },
    //         {
    //             path: '/list',
    //             component: lazy(() => import('@/views/dashboard/list/DashboardList')),
    //             exact: true,
    //         },
    //     ],
    // },
];

export default routes;
