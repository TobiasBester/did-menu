<template>
	<v-list dark nav>
		<v-list-item
				v-for="menuItem in menuContents"
				:key="menuItem.text"
				:to="menuItem.to"
				@click="moveTo(menuItem.to)"
				color="gold"
		>
			<v-list-item-title :class="tileClass">
				{{ menuItem.text }}
			</v-list-item-title>
		</v-list-item>
	</v-list>
</template>

<script>
	import { copyMessages } from '../../data/copy-messages';

	export default {
		name: 'NavMenu',
		components: {
		},
		data () {
			return {
				menuContents: copyMessages.menuItems
			}
		},
		computed: {
			tileClass () {
				return this.$vuetify.breakpoint.smAndUp
					? 'display-2 pa-5 ma-5'
					: 'display-1 pa-1 ma-1';
			}
		},
		methods: {
			moveTo (section) {
				this.$store.commit('closeDrawer');
				this.$store.commit('setSection', section);
			}
		}
	};
</script>

<style scoped>

</style>
