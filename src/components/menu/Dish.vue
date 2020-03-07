<template>
	<v-container class="my-0 py-0 mx-1 px-1">
		<v-row justify="center">
			<v-col cols="auto" class="my-0 py-0">
				<span class="font-weight-bold body-1">
					{{ name }}
				</span>
			</v-col>
			<v-col cols="auto" class="ma-0 pa-0">
				<dish-tags :tags="tags"></dish-tags>
			</v-col>
		</v-row>
		<v-row justify="center">
			<v-col class="my-0 py-0" cols="8">
				<span class="font-weight-light body-2">{{ description }}</span>
			</v-col>
		</v-row>
		<v-row justify="center">
			<v-col
				v-for="option in options"
				:key="option.meat"
				cols="auto"
				class="py-0 my-0"
			>
				<dish-option v-bind="option"></dish-option>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import DishOption from './DishOption';
	import DishTags from './DishTags';

	export default {
		name: 'Dish',
		components: {
			DishOption,
			DishTags
		},
		props: {
			name: {
				type: String,
				default: 'Dish'
			},
			description: {
				type: String,
				default: 'Desc'
			},
			options: {
				type: Array,
				default: () => []
			},
			tags: {
				type: Array,
				default: () => []
			}
		}
	};
</script>

<style scoped>

</style>
