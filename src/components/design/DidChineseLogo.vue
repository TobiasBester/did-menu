<template>
	<span
			:class="textClass"
			@click="openDrawer">
		{{ chineseDid }}
	</span>
</template>

<script>
	import { copyMessages } from '../../data/copy-messages';

	export default {
		name: 'DidChineseLogo',
		props: {
			blackShadow: {
				type: Boolean,
				default: true,
			},
			shimmer: {
				type: Boolean,
				default: false,
			},
		},
		data () {
			return {
				chineseDid: copyMessages.chinese.inspiredDiningChinese,
			};
		},
		computed: {
			textClass () {
				return `pointer font-weight-bold white--text
					${this.blackShadow ? 'black-shadow' : 'red-shadow'}
					${this.shimmer ? 'shimmer' : ''}
					${this.$vuetify.breakpoint.smAndUp
					? 'display-3'
					: 'display-2'
				}`;
			},
		},
		methods: {
			openDrawer () {
				this.$store.commit ('openDrawer');
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import 'src/scss/variables.scss';

	.red-shadow {
		text-shadow: 2px 2px red;
	}

	.white-shadow {
		text-shadow: 2px 2px white;
	}

	.black-shadow {
		text-shadow: 2px 2px black;
	}

	.pointer {
		cursor: pointer;
	}

	.shimmer {
		animation: shine 2s linear infinite;
		-webkit-mask-image: linear-gradient(
						-30deg,
						rgba(0, 0, 0, 1) 40%,
						rgba(200, 200, 0, 0.8) 50%,
						rgba(0, 0, 0, 1) 60%);
		-webkit-mask-size: 400%;
	}
</style>
