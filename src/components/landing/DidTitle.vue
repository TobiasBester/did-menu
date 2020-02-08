<template>
	<v-card color="accent" class="title-card">
		<v-container>
			<v-row justify="center" align="start">
				<v-col cols="auto">
					<span class="display-3 red--text">
						{{ title }}
					</span>
				</v-col>
			</v-row>
			<v-row justify="center" class="my-0 py-0">
				<v-col cols="auto">
					<span class="black--text">
						{{ subtext }}
					</span>
				</v-col>
			</v-row>
		</v-container>
	</v-card>
</template>

<script>
	import { copyMessages } from '../../data/copy-messages';

	export default {
		name: 'DidTitle',
		setup () {
			const title = copyMessages.title.debbiesInspiredDining;
			const subtext = copyMessages.title.titleSubtext;
			return { title, subtext };
		},
	};
</script>

<style lang="scss" scoped>
	.black-shadow {
		text-shadow: 1px 1px black;
	}

	.title-card {
		opacity: 0.8;
		border: 2px red solid;
	}
</style>
