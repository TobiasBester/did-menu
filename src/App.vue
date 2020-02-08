<template>
	<v-app>
		<did-app-bar></did-app-bar>
		<v-content>
			<main-page></main-page>
		</v-content>
		<nav-drawer></nav-drawer>
	</v-app>
</template>

<script>
	import MainPage from './views/MainPage';
	import DidAppBar from './components/base/DidAppBar';
	import NavDrawer from './components/base/NavDrawer';
	// import Home from './views/Home';

	export default {
		name: 'App',
		components: {
			NavDrawer,
			DidAppBar,
			MainPage,
		},
		data () {
			return {};
		},
	};
</script>
