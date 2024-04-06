/* eslint-disable */
const exclusionList = require('metro-config/src/defaults/exclusionList');
const { getMetroTools, getMetroAndroidAssetsResolutionFix } = require('react-native-monorepo-tools');

const metroTools = getMetroTools();
const androidAssetsResolutionFix = getMetroAndroidAssetsResolutionFix();

const config = {
	transformer: {
		publicPath: androidAssetsResolutionFix.publicPath,
		getTransformOptions: async () => ({
			transform: {
				experimentalImportSupport: false,
				inlineRequires: false,
			},
		}),
	},
	server: {
		enhanceMiddleware: (middleware) => {
			return androidAssetsResolutionFix.applyMiddleware(middleware);
		},
	},
	watchFolders: metroTools.watchFolders,
	resolver: {
		blockList: exclusionList(metroTools.blockList),
		extraNodeModules: metroTools.extraNodeModules,
	},
};

module.exports = config;
