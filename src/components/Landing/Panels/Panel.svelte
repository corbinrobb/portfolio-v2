<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let display = false;
  onMount(() => {
    display = true;
  });
</script>

{#if display}
  <div transition:fade={{ delay: 500 }} class="w-full py-32 px-2">
    <slot />
  </div>
{/if}
