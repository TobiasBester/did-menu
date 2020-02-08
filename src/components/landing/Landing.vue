<template>
	<div class="bg">
		<div class="body-2 align-center top-strip">
			{{ quickContactInfo }}
		</div>
		<v-row
				justify="center"
				align="center"
				class="did-title"
		>
			<v-col cols="auto">
				<transition name="fade">
					<did-title v-show="showTitle"></did-title>
				</transition>
			</v-col>
		</v-row>
	</div>
</template>

<script>
	import DidTitle from './DidTitle';
	import { copyMessages } from '../../data/copy-messages';

	export default {
		name: 'Landing',
		components: { DidTitle },
		data () {
			return {
				showTitle: false,
				quickContactInfo: copyMessages.contact.stripInfo
			}
		},
		mounted () {
			this.showTitle = true;
		}
	};
</script>

<style lang="scss" scoped>
	@import 'src/scss/variables.scss';

	.top-strip {
		width: 100%;
		height: 2em;
		background-color: black;
		color: $gold;
	}

	.bg {
		background-image: $landing-img;
		background-size: cover;
		background-position: center;
	}

	.did-title {
		height: 75vh;
	}

	.fade-enter-active, .fade-leave-active {
		transition: opacity 1s ease-out;
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
</style>
