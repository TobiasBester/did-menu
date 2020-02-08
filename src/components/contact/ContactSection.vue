<template>
	<div>
		<v-row>
			<v-col>
				<span class="display-2 red--text">Place Order</span>
			</v-col>
		</v-row>
	</div>
</template>

<script>
	export default {
		name: 'ContactSection',
	};
</script>

<style lang="scss" scoped>
	@import 'src/scss/variables';

	.bg {
		background-color: $primary;
	}
</style>
