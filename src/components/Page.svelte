<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  export let height: string = "h-screen";
  let init: boolean = false;

  onMount(() => {
    setTimeout(() => (init = true), 500);
  });
</script>

{#if init}
  <div
    transition:fade={{ duration: 500, delay: 100 }}
    class="relative min-h-screen {height} pt-20 sm:pt-24 lg:w-2/3 lg:mx-auto"
  >
    <slot />
  </div>
{/if}
