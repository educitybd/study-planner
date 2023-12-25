const AuthRoutes = {
    path: '/auth',
    component: () => import('@/layouts/blank/BlankLayout.vue'),
    meta: {
        requiresAuth: false
    },
    children: [
        {
            name: 'Login',
            path: '/auth/login',
            component: () => import('@/components/auth/Login.vue')
        },
        {
            name: 'Register',
            path: '/auth/register',
            component: () => import('@/components/auth/Register.vue')
        },
    ]
};

export default AuthRoutes;
