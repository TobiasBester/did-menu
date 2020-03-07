<template>
	<v-sheet
		color="accent"
	>
		<v-container class="px-0">
			<v-sheet cols="12">
				<v-btn-toggle
					tile
					borderless
					group
					v-model="chosenMenuGroup"
				>
					<v-btn
						v-for="menuGroup in menuDetails"
						:key="menuGroup.group"
						ripple
					>
						{{ menuGroup.group }}
					</v-btn>
				</v-btn-toggle>
			</v-sheet>
		</v-container>
	</v-sheet>
</template>

<script>
	// import MenuGroup from './MenuGroup';
	import { menuDetails } from '../../data/menu-details';
	import { mapGetters } from 'vuex';

	export default {
		name: 'MenuSlide',
		components: {
			// MenuGroup
		},
		data () {
			return {
				menuDetails,
			}
		},
		computed: {
			...mapGetters(['selectedMenuGroup']),
			chosenMenuGroup: {
				get () {
					return this.selectedMenuGroup;
				},
				set (option) {
					this.$store.commit('setSelectedMenuGroup', menuDetails[option]);
				}
			}
		}
	};
</script>

<style scoped>

</style>
