<template>
	<v-container class="about">
		<v-row justify="center">
			<v-col>
				<v-container>
					<v-row>
						<v-col>
							<span class="display-2 white--text">
								{{ heading }}
							</span>
						</v-col>
					</v-row>
					<v-row
						align="end"
						v-if="$vuetify.breakpoint.mdAndUp"
					>
						<v-col class="mx-5 px-5 text-start">
							<span class="body-2 black--text">
								{{ essay }}
							</span>
						</v-col>
					</v-row>
				</v-container>
			</v-col>
			<v-col cols="auto" class="ma-0 pa-0">
				<v-img
						class="pa-0 ma-0"
						:src="aboutImage"
						:width="imageWidth"
						transition="fade-transition"
				>
					<template v-slot:placeholder>
						<v-row
							class="fill-height ma-0"
							align="center"
							justify="center"
						>
							<v-progress-circular indeterminate color="red"></v-progress-circular>
						</v-row>
					</template>
				</v-img>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import { imageLinks } from '../../data/image-links';
	import { copyMessages } from '../../data/copy-messages';

	export default {
		name: 'MenuAbout',
		data () {
			return {
				aboutImage: imageLinks.crispySesame,
				heading: copyMessages.menuSection.about.heading,
				essay: copyMessages.menuSection.about.text,
			};
		},
		computed: {
			imageWidth () {
				return this.$vuetify.breakpoint.smAndUp ? '700px' : '600px';
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import 'src/scss/variables';

	.about {
		background-repeat: repeat;
		background-color: $gold;
	}

</style>
