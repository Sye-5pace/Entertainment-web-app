import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router';
import './style.css'
import App from './App.vue'


//Dynamic Imports
const Home = () => import('../src/components/Home.vue');


//creating routing instance
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home, props: true },
        { path: '/movie', name: 'Movie', component: () => import('../src/components/Movie.vue') },
        { path: '/tvseries', name: 'Tvseries', component: () => import('../src/components/Tvseries.vue') },
        { path: '/bookmarked', name: 'Bookmarked', component: () => import('../src/components/Bookmarked.vue')}
    ],
})

const app = createApp(App);

app.use(router)
app.mount('#app')
