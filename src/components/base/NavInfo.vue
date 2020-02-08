<template>
	<v-container>
		<v-row>
			<v-list>
				<v-list-item
						v-for="infoItem in infoList"
						:key="infoItem.label"
						color="gold"
						dark
				>
					<v-list-item-icon
						:x-large="nonMobile"
					>
						<v-icon>{{ infoItem.icon }}</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title
							:class="infoItemClass"
						>
							{{ infoItem.value }}
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-row>
		<v-row justify="space-around">
			<v-col
				v-for="item in socialMedia"
				:key="item.label"
				class="text-center"
			>
				<v-btn
						fab
						:href="item.href"
						target="_blank"
						color="gold"
						small
						class="black--text sweep-in"
						:x-large="nonMobile"
				>
					<v-icon :x-large="nonMobile">{{ item.icon }}</v-icon>
				</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import { copyMessages } from '../../data/copy-messages';
	// import { TimelineLite, Back } from 'gsap';

	export default {
		name: 'NavInfo',
		data () {
			return {
				infoList: copyMessages.info,
				socialMedia: copyMessages.socialMedia
			};
		},
		computed: {
			nonMobile () {
				return this.$vuetify.breakpoint.smAndUp;
			},
			infoItemClass () {
				return this.nonMobile
					? 'display-1'
					: 'heading';
			}
		},
	};
</script>

<style scoped>

</style>
