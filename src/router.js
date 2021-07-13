import Vue from 'vue'
import Router from 'vue-router'
import Registration from "./pages/auth/Registration.vue";
import NewsList from "./pages/news/NewsList.vue";
import NewsDetails from "./pages/news/NewsDetails.vue";


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'list',
      component: NewsList
    },
    {
      path: '/news/:id',
      name: 'details',
      component: NewsDetails,
      props: true
    },    
    {
      path: '/register',
      name: 'registration',
      component: Registration
    },
   
  ]
})