// src/stores/skills.js
import { defineStore } from 'pinia';
import projectOneImage from '@/assets/images/panharith.png';
import projectTwoImage from '@/assets/images/panharith.png';
import projectThreeImage from '@/assets/images/panharith.png';


export const usePortfoliosStore = defineStore('portfolio', {
	state: () => ({
		skills: [
			{
				id: 1,
				title: 'Web Development',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				icon: 'fa-light fa-laptop-code', // Font Awesome icon class
			},
			{
				id: 2,
				title: 'Responsive Design',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				icon: 'fas fa-mobile-alt', // Font Awesome icon class
			},
			{
				id: 3,
				title: 'Creative Design',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				icon: 'fas fa-paint-brush', // Font Awesome icon class
			},
		],
		projects: [
			{ id: 1, title: 'Project One', category: 'Web Development', image: projectOneImage },
			{ id: 2, title: 'Project Two', category: 'Creative Design', image: projectTwoImage },
			{ id: 3, title: 'Project Three', category: 'Graphic Design', image: projectThreeImage },
		],
		selectedCategory: 'ALL', // Default filter
	}),
	getters: {
		getSkills: (state) => state.skills,
		getProjects: (state) => {
			if (state.selectedCategory === 'ALL') {
				return state.projects;
			}
			return state.projects.filter((project) => project.category === state.selectedCategory);
		},
		getCategories: (state) => {
			const categories = ['ALL', ...new Set(state.projects.map((project) => project.category))];
			return categories;
		},
	},
	actions: {
		setCategory(category) {
			this.selectedCategory = category;
		},
	}
});