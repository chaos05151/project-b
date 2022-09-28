import {createApp} from 'vue'
import { createPinia } from 'pinia'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
import './assets/css/icon.css'

const pinia=createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
installElementPlus(app)
app.use(pinia)
    .use(router)
    .mount('#app')