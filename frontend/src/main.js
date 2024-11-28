import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Router importieren

import './styles/main.css'; // Globale CSS-Datei (falls vorhanden)

const app = createApp(App);

app.use(router); // Router in die App einbinden

app.mount('#app'); // App auf `#app` mounten
