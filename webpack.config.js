module.exports = {
	entry: './build/app.js',
	mode: 'production',
	performance: {
		hints: 'error',
		maxAssetSize: 2097152,
		maxEntrypointSize: 2097152,
	}
};
