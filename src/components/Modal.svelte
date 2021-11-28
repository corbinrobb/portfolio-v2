<script lang="ts">
  import { fade, scale } from "svelte/transition";
  export let display: boolean;
  export let toggleDisplay: () => void;

  const offClick = (e) => {
    if (e.target.closest("#content")) return;
    toggleDisplay();
  };
</script>

{#if display}
  <div
    on:click={offClick}
    in:scale={{ duration: 300 }}
    out:fade
    class="absolute left-0 top-0 h-full w-screen flex justify-center items-center select-none cursor-pointer backdrop-filter backdrop-blur-sm"
  >
    <div
      id="content"
      class="bg-gray-100 dark:bg-gray-500 rounded-lg w-4/5 lg:w-2/3 h-1/2 select-text flex justify-center items-center cursor-default shadow-lg"
    >
      <slot />
    </div>
  </div>
{/if}
