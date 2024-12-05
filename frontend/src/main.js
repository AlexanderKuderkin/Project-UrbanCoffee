import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios'; 
axios.defaults.baseURL = "http://localhost:1337";

const app = createApp(App);

app.use(router); // Router aktivieren

app.mount('#app'); // App mounten
