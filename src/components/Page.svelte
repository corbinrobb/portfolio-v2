<script lang="ts">
  import { onMount } from "svelte";

  import { fade } from "svelte/transition";
  let init: boolean = false;

  onMount(() => {
    setTimeout(() => (init = true), 500);
  });
</script>

{#if init}
  <div
    transition:fade={{ duration: 500, delay: 100 }}
    class="relative min-h-screen pt-20"
  >
    <slot />
  </div>
{/if}
