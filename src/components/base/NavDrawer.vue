<template>
	<v-navigation-drawer
			v-model="drawer"
			app
			right
			width="100%"
			class="pattern-bg"
			@transitionend="toggleShowInfo()"
	>
		<v-container class="my-0 py-0">
			<v-row justify="space-between" align="center">
				<v-col class="text-center red--text my-0 py-0">
					<did-chinese-logo
						@click.native="goToLanding"
						:black-shadow="false"
					></did-chinese-logo>
				</v-col>
				<v-col cols="auto">
					<v-btn
							icon
							color="gold"
							fab
							dark
							@click="closeDrawer"
					>
						<v-icon x-large dark>{{ closeIcon }}</v-icon>
					</v-btn>
				</v-col>
			</v-row>
			<v-row justify="space-around">
				<v-col class="my-0 py-0">
					<nav-menu></nav-menu>
				</v-col>
				<v-divider dark vertical></v-divider>
				<v-col>
					<v-slide-x-reverse-transition mode="out-in">
						<nav-info v-show="showInfo"></nav-info>
					</v-slide-x-reverse-transition>
				</v-col>
			</v-row>
		</v-container>
	</v-navigation-drawer>
</template>

<script>
	import { copyMessages } from '../../data/copy-messages';
	import { icons } from '../../data/icons';
	import DidChineseLogo from '../design/DidChineseLogo';
	import NavMenu from './NavMenu';
	import NavInfo from './NavInfo';

	export default {
		name: 'NavDrawer',
		components: { NavInfo, NavMenu, DidChineseLogo },
		data () {
			return {
				chinese: copyMessages.chinese.inspiredDiningChinese,
				closeIcon: icons.close,
				showInfo: false
			}
		},
		computed: {
			drawer: {
				get () {
					return this.$store.getters.drawer;
				},
				set (newDrawer) {
					this.$store.commit('setDrawer', newDrawer);
				}
			}
		},
		methods: {
			closeDrawer () {
				this.drawer = false;
			},
			goToLanding () {
				this.closeDrawer();
				this.$store.commit('setSection', copyMessages.webSections.landing.section);
			},
			toggleShowInfo () {
				this.showInfo = !this.showInfo;
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import 'src/scss/variables.scss';

	.pattern-bg {
		background-image: url('../../assets/pattern.png');
		background-repeat: repeat;
	}
</style>
