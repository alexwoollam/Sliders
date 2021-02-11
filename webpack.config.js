const Encore = require( '@symfony/webpack-encore' );

Encore
	.setOutputPath( 'App/dist/' )
	.setPublicPath( '/' )
	.setManifestKeyPrefix( '/' )
	.addEntry( 'asset-Sliders', './App/src/js/sliders.ts' )
	.enableReactPreset()
	.enableTypeScriptLoader()
	.enableSassLoader()
	.enableEslintLoader()
	.enableForkedTypeScriptTypesChecking()
	.enableSourceMaps( !Encore.isProduction() )
	.cleanupOutputBeforeBuild( ['*.js', '*.css'] )
	.disableSingleRuntimeChunk();

module.exports = Encore.getWebpackConfig();