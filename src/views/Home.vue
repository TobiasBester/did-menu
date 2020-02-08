<template>
	<div>
		<button style="z-index: 999; top: 20px; left: 20px; position: fixed" @click="moveTo('page2')">GET ACTIVE </button>
		<full-page
				refs="fullpage"
				:options="fullPageOptions"
				id="fullpage"
		>
			<div class="section">One</div>
			<div class="section">
				<div class="slide" data-anchor="slide1">Two 1</div>
				<div class="slide" data-anchor="slide2">Two 2</div>
			</div>
			<div class="section">Three</div>
		</full-page>
	</div>
</template>

<script>
	import { apiKey } from '../plugins/fullpageconfig';
	import { FullPage } from 'vue-fullpage.js/dist/vue-fullpage';
	import { mapGetters } from 'vuex';

	export default {
		name: 'MainPage',
		components: {
			FullPage,
		},
		data () {
			return {
				fullPageOptions: {
					licenseKey: apiKey,
					menu: '#menu',
					// anchors: ['home', 'menu', 'gallery', 'about', 'contact'],
					scrollingSpeed: 600,
					dragAndMove: 'fingersonly',
					afterLoad: this.afterFullPageLoad
				},
			};
		},
		methods: {
			afterFullPageLoad () {
				this.$store.commit('setShowLandingTitle', true);
			},
			moveTo (dest) {
				this.$refs.fullpage.api.moveTo(dest);
			}
		},
		computed: {
			...mapGetters(['storeSection'])
		},
		watch: {
			storeSection (dest) {
				this.$refs.fullpage.api.moveTo(dest);
			}
		},
	};
</script>

<style lang="scss" scoped>
	@import 'src/scss/variables.scss';

	.section-border {
		border-inline-start: 10px $primary solid;
		border-inline-end: 10px $primary solid;
	}

	.section-border__last {
		border-block-end: 10px $primary solid;
		border-inline-start: 10px $primary solid;
		border-inline-end: 10px $primary solid;
	}

</style>
