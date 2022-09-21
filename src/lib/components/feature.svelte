<script lang="ts">
  import { storyblokEditable } from '@storyblok/svelte'

  export let blok: any
</script>

<div use:storyblokEditable={blok} class="py-2">
  <div class="text-lg">{blok.name}</div>
</div>