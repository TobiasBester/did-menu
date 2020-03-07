<template>
	<v-scroll-y-transition mode="in-out">
		<v-container v-if="showMenu" fluid>
			<div
					v-for="subgroup in displayedSubgroups"
					:key="subgroup.subgroup"
			>
				<v-row justify="center">
					<v-col class="my-1 py-1" cols="auto">
						<span class="font-weight-bold title">
							{{ subgroup.subgroup }}
						</span>
					</v-col>
				</v-row>
				<v-row
						justify="center"
						align="center"
				>
					<div
							v-for="dish in subgroup.dishes"
							:key="dish.name"
					>
						<v-col
								class="mx-0 px-0"
						>
							<dish v-bind="dish"></dish>
						</v-col>
					</div>
				</v-row>
				<v-divider></v-divider>
			</div>
		</v-container>
	</v-scroll-y-transition>
</template>

<script>
	import Dish from './Dish';
	import { menuDetails } from '../../data/menu-details';

	export default {
		name: 'MenuGroup',
		components: { Dish },
		props: {
			group: {
				type: String,
				default: () => menuDetails[0].group
			},
			subgroups: {
				type: Array,
				default: () => menuDetails[0].subgroups
			}
		},
		data () {
			return {
				displayedGroup: this.group,
				displayedSubgroups: this.subgroups,
				showMenu: true
			}
		},
		methods: {
			flash () {
				this.showMenu = false;
				setTimeout(() => {
					this.showMenu = true;
				}, 100);
			}
		},
		watch: {
			group (newVal) {
				this.displayedGroup = newVal;
				this.flash();
			},
			subgroups (newVal) {
				this.displayedSubgroups = newVal;
			},
		}
	};
</script>

<style scoped>

</style>
