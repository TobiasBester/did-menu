<template>
	<v-app-bar
			app
			absolute
			color="red"
			flat
	>
		<v-spacer></v-spacer>
		<did-chinese-logo
				shimmer
		></did-chinese-logo>
		<v-spacer></v-spacer>
		<v-btn
				icon
				@click="openDrawer"
				fab
		>
			<v-icon x-large>{{ menuIcon }}</v-icon>
		</v-btn>
	</v-app-bar>
</template>

<script>
	import DidChineseLogo from '../design/DidChineseLogo';
	import { icons } from '../../data/icons';

	export default {
		name: 'DidAppBar',
		components: { DidChineseLogo },
		data () {
			return {
				menuIcon: icons.menu,
			};
		},
		methods: {
			openDrawer () {
				this.$store.commit ('openDrawer');
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import 'src/scss/variables.scss';

	.my-color {
		color: $primary;
	}
</style>
