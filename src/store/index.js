import Vue from 'vue';
import Vuex from 'vuex';

Vue.use (Vuex);

export default new Vuex.Store ({
	state: {
		drawer: false,
		section: 'home'
	},
	mutations: {
		openDrawer (state) {
			state.drawer = true;
		},
		closeDrawer (state) {
			state.drawer = false;
		},
		setDrawer (state, setting) {
			state.drawer = setting;
		},
		setSection (state, section) {
			state.section = section;
		}
	},
	actions: {},
	getters: {
		drawer (state) {
			return state.drawer;
		},
		storeSection (state) {
			return state.section;
		}
	},
	modules: {},
});
