import { PUBLIC_STORYBLOK_ACCESS_TOKEN } from '$env/static/public';
import Feature from '$lib/components/feature.svelte';
import Grid from '$lib/components/grid.svelte';
import Page from '$lib/components/page.svelte';
import Teaser from '$lib/components/teaser.svelte';
import { apiPlugin, storyblokInit } from '@storyblok/svelte';

storyblokInit({
	accessToken: PUBLIC_STORYBLOK_ACCESS_TOKEN,
	apiOptions: {
		//storyblok-js-client config object
		cache: { type: 'memory' },
	},
	use: [apiPlugin],
	components: {
		feature: Feature,
		grid: Grid,
		page: Page,
		teaser: Teaser,
	},
});
