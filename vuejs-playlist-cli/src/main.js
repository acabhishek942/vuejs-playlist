import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VurRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource)
Vue.use(VurRouter)

const router = new VurRouter({
  routes: Routes
})

// custom directive

Vue.directive('theme', {
  bind(el, binding, vnode){
      if(binding.value == 'wide'){
        el.style.maxWidth = '1200px';
      }
      else if (binding.value == 'narrow'){
        el.style.maxWidth = '500px';
      }
      if(binding.arg == 'column'){
        el.style.background = '#ddd';
        el.style.padding = '20px';
      }
  }
})

// Filters

Vue.filter('snippet', function(value){
  return value.slice(0, 100) + '...'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
