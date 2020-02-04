import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from '../app.vue'


//Bootstrap 4 components
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: App}
  ]
});

document.addEventListener("DOMContentLoaded", () => {
  Vue.use(VueRouter)
  Vue.use(BootstrapVue)
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