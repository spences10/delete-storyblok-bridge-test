import { PUBLIC_STORYBLOK_STAGE } from '$env/static/public';
import { useStoryblokApi } from '@storyblok/svelte';

export const load = async () => {
	const storyblokApi = useStoryblokApi();
	const {
		data: { story },
	} = await storyblokApi.get('cdn/stories/home', {
		version: PUBLIC_STORYBLOK_STAGE,
	});
	return {
		story,
	};
};
