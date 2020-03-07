<template>
	<v-container class="my-0 py-0 mx-0 px-2">
		<v-row
				v-if="!noMeatType"
				dense
				justify="center"
		>
			<v-col cols="auto">
				<span class="font-weight-bold overline grey--text">{{ meat }}</span>
			</v-col>
		</v-row>
		<v-row justify="center">
			<v-col class="my-0 py-0">
				<span class="font-weight-regular body-1">R{{ price }}</span>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import { MeatType } from '../../data/meatTypes';

	export default {
		name: 'DishOption',
		props: {
			meat: {
				type: String,
				default: MeatType.NONE
			},
			price: {
				type: Number,
				default: 40
			},
			tags: {
				type: Array,
				default: () => []
			}
		},
		computed: {
			noMeatType () {
				return this.meat === MeatType.NONE
			}
		}
	};
</script>

<style scoped>
</style>
