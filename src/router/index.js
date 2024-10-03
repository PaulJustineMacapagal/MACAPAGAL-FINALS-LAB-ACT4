// Import Vue Router functions for Vue 3
import { createRouter, createWebHistory } from 'vue-router';
// Import your components
import UserProfile from '../components/UserProfile.vue';
import ResumeEducation from '../components/ResumeEducation.vue';
import ResumeSkills from '../components/ResumeSkills.vue';

// Define your routes
const routes = [
  { path: '/', name: 'Profile', component: UserProfile },
  { path: '/education', name: 'Education', component: ResumeEducation },
  { path: '/skills', name: 'Skills', component: ResumeSkills },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Export the router
export default router;
