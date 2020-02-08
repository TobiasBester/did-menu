<template>
	<div>
		<full-page ref="fullpage" :options="fullPageOptions" id="fullpage">
			<landing class="section-border section"></landing>
			<menu-section class="section-border section"></menu-section>
			<gallery-section class="section-border section"></gallery-section>
			<about-section class="section-border section"></about-section>
			<contact-section class="section-border section"></contact-section>
		</full-page>
	</div>
</template>

<script>
	import { apiKey } from '../plugins/fullpageconfig';
	import { FullPage } from 'vue-fullpage.js/dist/vue-fullpage';
	import Landing from '../components/landing/Landing';
	import MenuSection from '../components/menu/MenuSection';
	import GallerySection from '../components/gallery/GallerySection';
	import AboutSection from '../components/about/AboutSection';
	import ContactSection from '../components/contact/ContactSection';
	import { mapGetters } from 'vuex';
	import { copyMessages } from '../data/copy-messages';

	export default {
		name: 'MainPage',
		components: {
			FullPage,
			Landing,
			MenuSection,
			GallerySection,
			AboutSection,
			ContactSection
		},
		data () {
			return {
				fullPageOptions: {
					licenseKey: apiKey,
					menu: '#menu',
					anchors: copyMessages.anchors,
					scrollingSpeed: 600,
					dragAndMove: 'fingersonly',
					afterLoad: this.afterFullPageLoad
				},
			};
		},
		methods: {
			moveTo (dest = 'menu') {
				this.$refs.fullpage.api.moveTo(dest);
			},
		},
		computed: {
			...mapGetters(['storeSection'])
		},
		watch: {
			storeSection (dest) {
				this.moveTo(dest);
			}
		},
	};
</script>

<style lang="scss" scoped>
	@import 'src/scss/variables.scss';

	.section {
		text-align:center;
		font-size: 3em;
	}

	.section-border {
		border-inline-start: 10px $primary solid;
		border-inline-end: 10px $primary solid;
	}

	#getActiveSection{
		top: 20px;
		left: 320px;
		position:fixed;
		z-index:999;
		font-size: 2.4em;
	}

</style>
