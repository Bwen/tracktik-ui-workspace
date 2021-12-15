//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		//adapter: adapter(),
		adapter: adapter({ out: '.svelte-kit/build' }),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			server: { fs: { allow: ['locales'] } },
			resolve: {
				alias: {
					$lib: path.resolve('./src/lib'),
					$components: path.resolve('./src/lib/components'),
					$stores: path.resolve('./src/lib/stores'),
					$locales: path.resolve('./locales'),
					$form: path.resolve('./src/lib/js/form'),
					"@rest": path.resolve('./tt-rest'),
					"@types": path.resolve('./src/lib/@types'),
				},
			},
		},
	},
};

export default config;
