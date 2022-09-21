<script lang="ts">
	import {
		StoryblokComponent,
		storyblokEditable,
	} from '@storyblok/svelte';

	export let blok: any;
	let { columns } = blok;
</script>

<div use:storyblokEditable={blok} class="flex py-8 mb-6">
	{#each columns as blok}
		<div class="flex-auto px-6">
			<StoryblokComponent {blok} />
		</div>
	{/each}
</div>
