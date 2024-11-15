//import adapter from '@sveltejs/adapter-vercel';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
export default {
	compilerOptions: {
		runes: true
	},
	kit: {
		//adapter: adapter({ runtime: 'edge' })
 adapter: adapter({ fallback: 'index.html'}),
	}
};
