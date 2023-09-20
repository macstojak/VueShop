import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueGallery from 'vue-gallery';
import { faUser, faCartShopping, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
library.add(faUser, faCartShopping, faSpinner);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(Antd);
app.component('VGallery', VueGallery);
app.use(router);

app.mount('#app');
