<script lang="ts">
  import { fade, scale } from "svelte/transition";
  import Button from "./Button.svelte";
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
    transition:fade
    class="fixed left-0 top-0 h-full w-screen flex justify-center items-center select-none cursor-pointer backdrop-filter backdrop-blur-sm z-40"
  >
    <div
      in:scale={{ duration: 300 }}
      out:fade
      id="content"
      class="bg-gray-100 relative dark:bg-gray-500 rounded-lg p-6 w-4/5 lg:w-1/2 h-1/2 select-text flex flex-col justify-between items-center cursor-default shadow-lg"
    >
      <slot />
      <Button
        padding="px-2 py-1 absolute top-1 right-1"
        value="X"
        clickHandler={toggleDisplay}
      />
    </div>
  </div>
{/if}
