import { sveltekit } from '@sveltejs/kit/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit(), basicSsl()],
	server: {
		https: true,
	},
};

export default config;
