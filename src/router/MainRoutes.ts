const MainRoutes = {
    path: '/main',
    meta: {
        requiresAuth: true
    },
    redirect: '/auth/login',
    component: () => import('@/layouts/full/FullLayout.vue'),
    children: [
        {
            name: 'Dashboard',
            path: '/',
            component: () => import('@/components/dashboard/DashboardHome.vue')
        },
        {
            name: 'Tasks',
            path: '/ui/tasks',
            component: () => import('@/components/task/TaskHome.vue')
        }
    ]
};

export default MainRoutes;
