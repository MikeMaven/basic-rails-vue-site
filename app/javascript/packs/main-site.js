import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Wrapper from '../components/Wrapper.vue'
import Index from '../components/main-site/Index.vue'


//Bootstrap 4 components
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Wrapper, children: [
      {path: '/', component: Index, name: 'Welcome', meta: {title: 'Welcome'}},
      {path: '',  component: Index,  meta: {title: 'Welcome'}}
    ]}
  ]
});

document.addEventListener("DOMContentLoaded", () => {
  Vue.use(VueRouter)
  Vue.use(BootstrapVue)
  Vue.use(IconsPlugin)
  Vue.use(Vuex)

  const el = document.getElementById("root")

  // Vuex
  const store = new Vuex.Store({})

  const app = new Vue({
    el: el,
    template: "<div><router-view /></div>",
    components: {},
    router,
    store,
    mounted() {

    },
  })
})