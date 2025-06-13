import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development'; 

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			// pages: 'build',
			// assets: 'build',
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			precompress: false
		}),
		paths: {
			base: dev ? '' : '/product-list-with-cart'
		}
	}
};

export default config;
