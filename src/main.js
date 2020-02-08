import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'fullpage.js/vendors/scrolloverflow';
import VueFullPage from 'vue-fullpage.js/dist/vue-fullpage';
import vuetify from './plugins/vuetify';
import VueCompositionApi from '@vue/composition-api';

Vue.use(VueCompositionApi);
Vue.use(VueFullPage);

Vue.config.productionTip = false;

new Vue ({
	router,
	store,
	vuetify,
	render: h => h (App),
}).$mount ('#app');
