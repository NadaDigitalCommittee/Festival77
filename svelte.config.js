import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

// let basedir = '';
// if (process.env.DEPLOY_ENV === 'RELEASE') {
//   basedir = '/2023';
// }

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    paths: {
      base: '',
    },
  },
};

export default config;
