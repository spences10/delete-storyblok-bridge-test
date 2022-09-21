<script lang="ts">
	import { StoryblokComponent } from '@storyblok/svelte';

	export let data: any;
	let { story } = data;
</script>

<div>
	{#if story}
		<StoryblokComponent blok={story.content} />
	{/if}
</div>
