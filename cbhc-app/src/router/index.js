    import { createRouter, createWebHistory } from 'vue-router'
    import contact from "../views/contact.vue"; //Contacts
    import home from "../views/Home.vue"; //home
    import login from "../views/login.vue"; //login
    import overview from "../views/overview.vue"; //overview
    import pricing from "../views/pricing.vue"; //pricing
    import register from "../views/register.vue"; //register
    //import reviews from "../views/reviews.vue"; //reviews


    //Different routing components
    //Contact page
    const routes = [{
            path: '/contact',
            name: 'contact',
            component: contact
        },

        //Home Page
        {
            path: '/',
            name: 'home',
            component: home
        },

        //Login Page
        {
            path: '/login',
            name: 'login',
            component: login
        },

        //Overview Page
        {
            path: '/overview',
            name: 'overview',
            component: overview
        },

        //pricing Page
        {
            path: '/pricing',
            name: 'pricing',
            component: pricing
        },

        //Overview Page
        {
            path: '/register',
            name: 'register',
            component: register
        },

        //Reviews Page
        {
            path: '/reviews',
            name: 'reviews',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/reviews.vue')
        }
    ]

    const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
    })

    export default router