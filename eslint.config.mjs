import globals from "globals";
import pluginJs from "@eslint/js";


export default [
	{
		languageOptions: { globals: globals.jest }
	},
	pluginJs.configs.recommended,
	{
		ignores: ['dist/', 'coverage/', 'webpack.config.js', 'node_modules/']
	},
	{
		languageOptions: { globals: globals.browser }
	}
];