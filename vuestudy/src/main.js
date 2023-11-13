import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'
import store from './store.js'



let app = createApp(App);
let emitter = mitt();
app.config.globalProperties.emitter = emitter;
app.use(store).mount('#app') 
