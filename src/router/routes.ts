/*
 * @Author: zhaoxuanzi
 * @Date: 2020-12-07 20:12:31
 * @LastEditors: zhaoxuanzi
 * @LastEditTime: 2021-02-23 11:37:49
 */
import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';

const routes: Array<RouteProps & { children?: Array<RouteProps> }> = [
    {
        path: '/',
        component: lazy(() => import('@/views/fingers/Fingers')),
        exact: true,
    },
    {
        path: '/monkey',
        component: lazy(() => import('@/views/monkey/Monkey')),
        exact: true,
    },
    {
        path: '/sentence',
        component: lazy(() => import('@/views/sentence/Sentence')),
        exact: true,
    },
    {
        path: '/training',
        component: lazy(() => import('@/views/training/Training')),
        exact: true,
    },
    {
        path: '/test',
        component: lazy(() => import('@/views/test/Test')),
        exact: true,
    },
    {
        path: '/about',
        component: lazy(() => import('@/views/about/About')),
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
