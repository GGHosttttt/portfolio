// src/stores/skills.js
import { defineStore } from 'pinia';
import projectOneImage from '@/assets/images/panharith.png';
import projectTwoImage from '@/assets/images/panharith.png';
import projectThreeImage from '@/assets/images/panharith.png';

import vcs1 from '@/assets/images/projects/vcs/homebanner.png'
import vcs2 from '@/assets/images/projects/vcs/admin.png'
import vcs3 from '@/assets/images/projects/vcs/doctor.png'
import vcs4 from '@/assets/images/projects/vcs/home.png'
import vcs5 from '@/assets/images/projects/vcs/vcs5.png'
import vcs6 from '@/assets/images/projects/vcs/vcs6.png'
import vcs7 from '@/assets/images/projects/vcs/vcs7.png'
import vcs8 from '@/assets/images/projects/vcs/vcs8.png'
import vcs9 from '@/assets/images/projects/vcs/vcs9.png'

import lbk1 from '@/assets/images/projects/loukbontor/lbk1.png'
import lbk2 from '@/assets/images/projects/loukbontor/lbk2.png'
import lbk3 from '@/assets/images/projects/loukbontor/lbk3.png'
import lbk4 from '@/assets/images/projects/loukbontor/lbk4.png'

import sos1 from '@/assets/images/projects/sosfiber/sosfiber1.png'
import sos2 from '@/assets/images/projects/sosfiber/sosfiber2.png'
import sos3 from '@/assets/images/projects/sosfiber/sosfiber3.png'
import sos4 from '@/assets/images/projects/sosfiber/sosfiber4.png'


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
			{
				"id": 1,
				"title": "Vechch Sal (វេជ្ជសាល)",
				"category": "Healthcare Booking Platform",
				"yt_url": "https://youtu.be/x-3A0LSiTYE",
				"website_url": "https://usr.vcs.publicvm.com/",
				'images': [
					vcs1,
					vcs2,
					vcs3,
					vcs4,
					vcs5,
					vcs6,
					vcs7,
					vcs8,
					vcs9,
				],
				"description": "Vechch Sal is a healthcare platform developed by a team of seven during a Laravel Subject, Laravel Web Development course. It provides users with access to health-related resources, including articles and disease information. The platform features an Appointment System, enabling users to book consultations and health check-ups with doctors seamlessly. Vechch Sal aims to promote health awareness and streamline appointment scheduling for enhanced user convenience.",
				"tools": [
					{ "name": "Frontend", "technology": "Vue.js (Composition API)", "icon": "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/vuejs/vuejs-original.svg" },
					{ "name": "Backend", "technology": "Laravel 12 Framework", "icon": "https://laravel.com/img/logomark.min.svg" }
				],
				"features": [
					"User authenticaton",
					"Health information hub with articles and disease details",
					"Filter and search",
					"Find doctor with the right specalize and information",
					"User-friendly appointment booking system",
					"Store inovice and medical record",
					"Bookmark health information and save doctor for meet later ",
					"Multi-portal access for users, admins, and doctors",
					"Manage appointment schedule for doctor",
					"Manage appointment schedule for doctor",
				],
			},
			{
				"id": 2,
				"title": "Loukbontor (លក់បន្ត)",
				"category": "E-commerce",
				"yt_url": "https://youtu.be/q8gxHi8K0zk",
				"website_url": "https://loukbontor.netlify.app/",
				'images': [
					lbk1,
					lbk2,
					lbk3,
					lbk4,
				],
				"description": "Loukbontor is an e-commerce website that specalize on selling second-hand product. Varies of products are still good in use, so why not sell to LoukBontor! This plateform is also the market places for user who have too much unuse product, last but not least user can donate with us too. This project developed in our Javascript Subject in Laravel Web Development Course.",
				"tools": [
					{ "name": "User interface", "technology": "HTML, CSS + Bootstrap", "icon": "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/bootstrap/bootstrap-original.svg" },
					{ "name": "Integration", "technology": "Javascript fetch APIs", "icon": "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/javascript/javascript-original.svg" }
				],
				"features": [
					"User authenticaton",
					"Search and filter products",
					"Add to cart",
					"Profile management",
					"Donate and Sell product"
				],
			},
			{

				"id": 3,
				"title": "SOSFiber",
				"category": "Service Provider",
				"yt_url": "https://youtu.be/UqxunswHuPc",
				"website_url": "https://group6-sosfiber.netlify.app/",
				'images': [
					sos1,
					sos2,
					sos3,
					sos4,
				],
				"description": "Vechch Sal is a healthcare platform developed by a team of seven during a Laravel Web Development course. It provides users with access to health-related resources, including articles and disease information. The platform features an Appointment System, enabling users to book consultations and health check-ups with doctors seamlessly. Vechch Sal aims to promote health awareness and streamline appointment scheduling for enhanced user convenience.",
				"tools": [
					{ "name": "User interface", "technology": "HTML, CSS + Bootstrap", "icon": "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/vuejs/vuejs-original.svg" },
					{ "name": "Integration", "technology": "Javascript fetch APIs", "icon": "https://laravel.com/img/logomark.min.svg" }
				],
				"features": [
					"Health information hub with articles and disease details",
					"User-friendly appointment booking system",
					"Multi-portal access for users, admins, and doctors"
				],
			},
		],
		project: null,
		selectedCategory: 'ALL', // Default filter
	}),
	getters: {
		getProjectById: (state) => (id) => {
			const project = state.projects.find(p => p.id == id);
			return project;
		},
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
		async fetchProjects() {
			this.isLoading = true;
			this.error = null;
			try {
				const projects = await mockFetchProjects();
				this.projects = projects;
			} catch (err) {
				this.error = 'Failed to fetch projects';
				console.error(err);
			} finally {
				this.isLoading = false;
			}
		},
		async fetchProject(id) {
			this.isLoadingProject = true;
			this.projectError = null;
			this.currentProject = null;
			try {
				const project = await mockFetchProject(id);
				this.currentProject = project;
			} catch (err) {
				this.projectError = err.message || 'Failed to fetch project';
				console.error(err);
			} finally {
				this.isLoadingProject = false;
			}
		},

	}
});