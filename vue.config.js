module.exports = {
	'transpileDependencies': [
		'vuetify',
	],
	// devServer: {
	// 	proxy: 'https://did.menu:8080'
	// },
	css: {
		loaderOptions: {
			scss: {
				prependData: `@import "./scss/variables.scss";`,
			},
		},
	},
};
