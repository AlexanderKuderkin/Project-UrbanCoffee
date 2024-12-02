import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// PrimeVue und benötigte Komponenten importieren
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'; // Beispiel-Theme
import 'primevue/resources/primevue.min.css'; // PrimeVue-CSS
import 'primeicons/primeicons.css'; // PrimeIcons für Icons

// Globale Registrierung von PrimeVue-Komponenten
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const app = createApp(App);

app.use(router); // Router aktivieren
app.use(PrimeVue); // PrimeVue aktivieren

// Komponenten global registrieren
app.component('Button', Button);
app.component('DataTable', DataTable);
app.component('Column', Column);

app.mount('#app'); // App mounten
