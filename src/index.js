import { createRouter, createWebHistory } from 'vue-router';
const routes = [
	{
		path: '/',
		name: 'Pim Panharith',
		component: () => import('@/views/Index'),
		meta: {
			page: "Pim Panharith",
		}
	},
	{
		path: '/projects/:id',
		name: 'ProjectDetail',
		component: () => import('@/views/ProjectDetail'),
		meta: {
			page: "Project",
		}
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
