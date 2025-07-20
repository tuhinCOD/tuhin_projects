import { createApp } from 'vue';
import { createPinia } from 'pinia';

import './assets/custom/scss/style.scss';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App.vue';
import router from './router';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
