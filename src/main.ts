import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
/* Vuetify start*/
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const vuetify = createVuetify({
    components,
    directives,
});
/* end*/

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)
app.use(router)
app.use(VueSweetalert2);

app.mount('#app')


