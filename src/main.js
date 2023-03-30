import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins'

import VueFullPage from 'vue-fullpage.js'

import container from './components/container/index.vue'
import icon from './components/icon/index.vue'
import image from './components/image/index.vue'

import 'vue-fullpage.js/dist/style.css'

createApp(App)
  .use(store)
  .use(VueFullPage)
  .use(router)
  .mixin(mixins)
  .component('v-container', container)
  .component('v-icon', icon)
  .component('v-image', image)
  .mount('#app')
