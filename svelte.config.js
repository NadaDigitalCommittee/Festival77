import adapter from '@sveltejs/adapter-static';
// eslint-disable-next-line import/no-unresolved
import { vitePreprocess } from '@sveltejs/kit/vite';

let basedir = '';
if (process.env.DEPLOY_ENV === 'RELEASE') {
  basedir = '/2022';
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    alias: {
      src: 'src',
    },
    paths: {
      base: basedir,
    },
  },
};

export default config;
