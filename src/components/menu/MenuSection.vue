<template>
	<div>
		<v-container>
			<v-btn
				x-large
				class="display-2 red--text"
				text
				v-if="selectedMenuGroup"
				@click="resetMenuGroup"
			>
				Menu
			</v-btn>
			<v-slide-y-transition mode="out-in">
				<menu-about
					v-if="!selectedMenuGroup"
				></menu-about>
			</v-slide-y-transition>
			<menu-slide class="pt-3" style="width: 100%"></menu-slide>
			<v-scroll-y-reverse-transition mode="in-out">
				<menu-group
					:style="menuGroupStyle"
					class="overflow-y-auto menu-group"
					v-if="selectedMenuGroup !== null"
					v-bind="selectedMenuGroup"
				></menu-group>
			</v-scroll-y-reverse-transition>
			<v-sheet color="accent" height="100px"></v-sheet>
		</v-container>
	</div>
</template>

<script>
	import MenuSlide from './MenuSlide';
	import MenuAbout from './MenuAbout';
	import { mapGetters } from 'vuex';
	import MenuGroup from './MenuGroup';

	export default {
		name: 'MenuSection',
		components: { MenuAbout, MenuSlide, MenuGroup },
		computed: {
			...mapGetters(['selectedMenuGroup']),
			menuGroupStyle () {
				return `max-height: ${this.$vuetify.breakpoint.smAndUp
					? '550px'
					: '400px'}`
			}
		},
		methods: {
			resetMenuGroup () {
				this.$store.commit('setSelectedMenuGroup', null);
			}
		}
	}
</script>

<style scoped>
</style>
