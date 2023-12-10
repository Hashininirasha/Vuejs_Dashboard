// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';



import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faKey, faInfo, faQuestionCircle, faUser, faMagnifyingGlassDollar, faChevronRight, faBoxOpen, faCookie, faHandHoldingDollar    } from '@fortawesome/free-solid-svg-icons';

library.add(faKey, faInfo, faQuestionCircle, faUser, faMagnifyingGlassDollar, faChevronRight, faBoxOpen, faCookie, faHandHoldingDollar   );

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

// Use Vuetify and Font Awesome here
app.use(router);
app.use(vuetify);

// Register the Font Awesome component
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
