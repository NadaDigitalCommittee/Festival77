// eslint-disable-next-line import/no-unresolved
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  build: {
    sourcemap: true,
  },
  plugins: [sveltekit()],
};

export default config;
