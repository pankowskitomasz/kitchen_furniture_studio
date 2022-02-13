import Vue from 'vue';
import VueRouter from 'vue-router';
import About from "../views/About.vue";
import Comingsoon from "../views/Comingsoon.vue";
import Contact from "../views/Contact.vue";
import Error from "../views/Error.vue";
import Furniture from "../views/Furniture.vue";
import Home from "../views/Home.vue";
import Offer from "../views/Offer.vue";
import Privacy from "../views/Privacy.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/furniture',
        name: 'Furniture',
        component: Furniture
    },
    {
        path: '/offer',
        name: 'Offer',
        component: Offer
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/comingsoon',
        component: Comingsoon
    },
    {
        path: '/privacy',
        name: 'About',
        component: Privacy
    },
    {
       path: '*',
       component: Error 
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
