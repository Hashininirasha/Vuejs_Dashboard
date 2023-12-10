import MasterLayout from './../pages/layout/master.vue';
import Dashboard from './../pages/dashboard.vue';

export default [
  {
    name: "Master",
    path: "/",
    component: () => import('./../pages/layout/master.vue'),
    redirect: '/dashboard',
    children: [
      {
        name: 'dashboard',
        path: '/dashboard',
        component: () => import('./../pages/dashboard.vue'),
      }
    ]
  },
];
