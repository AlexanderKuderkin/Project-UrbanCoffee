import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios'; 
axios.defaults.baseURL = "http://localhost:5173";

const app = createApp(App);

app.use(router); // Router aktivieren

app.mount('#app'); // App mounten
