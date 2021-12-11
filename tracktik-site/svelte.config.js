import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import precompileIntl from 'svelte-intl-precompile/sveltekit-plugin.js';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$lib: path.resolve('./src/lib'),
					$stores: path.resolve('./src/lib/stores'),
				},
			},
		},
	},
	vite: {
		plugins: [
			precompileIntl('locales')
			// precompileIntl('locales', '$myprefix') // also you can change import path prefix for json files ($locales by default)
		]
	}
};

export default config;
