import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import Menu from './views/Menu';
import Admin from './views/Admin';
import About from './views/about/About';
import Login from './views/Login';
import Register from './views/Register';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
