<script lang="ts">
	import {
		storyblokEditable,
		useStoryblokBridge,
	} from '@storyblok/svelte';
	import { onMount } from 'svelte';
	import '../app.css';

	export let data: any;
	let { story } = data;
	onMount(() => {
		useStoryblokBridge(story.id, newStory => (story = newStory));
	});
</script>

<main class='prose prose-xl'>
	<slot />
</main>
