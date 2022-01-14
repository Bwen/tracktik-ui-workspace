//import adapter from '@sveltejs/adapter-auto';
//import adapter from '@sveltejs/adapter-node';
import vercel from '@sveltejs/adapter-vercel';
import autoPreprocess from 'svelte-preprocess';
import path from 'path';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: autoPreprocess(),

	kit: {
		adapter: vercel(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			server: { fs: { allow: ['locales', 'tt-rest'] } },
			resolve: {
				alias: {
					$lib: path.resolve('./src/lib'),
					$components: path.resolve('./src/lib/components'),
					$stores: path.resolve('./src/lib/stores'),
					$locales: path.resolve('./locales'),
					$form: path.resolve('./src/lib/js/form'),
					'@rest': path.resolve('./tt-rest'),
					'@types': path.resolve('./src/lib/@types'),
				},
			},
		},
	},
};

export default config;
