import { createApp } from "vue";
// import { createPinia } from "Pinia";
import { createRouter, createWebHistory } from 'vue-router';
import './style.css'
import App from './App.vue'


//Dynamic Imports
const Home = () => import('../src/components/Home.vue');
// const Movie = () => import('../src/components/Movie.vue');
// const Tvseries = () => import('../src/components/Tvseries.vue');
// const Bookmarked = () => import('../src/components/Bookmarked.vue');



//creating routing instance
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', 
          name: 'Home',
          component: Home,
          props: true
        },
        { path: '/movie', name: 'Movie', component: () => import('../src/components/Movie.vue') },
        { path: '/tvseries', name: 'Tvseries', component: () => import('../src/components/Tvseries.vue') },
        { path: '/bookmarked', name: 'Bookmarked', component: () => import('../src/components/Bookmarked.vue')}
    ],
})

//creating vue app,connecting router and pinia store
const app = createApp(App);
// const pinia = createPinia()

app.use(router)
// app.use(pinia);
app.mount('#app')
