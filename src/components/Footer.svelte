<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let init = false;

  onMount(() => setTimeout(() => (init = true), 500));
</script>

{#if init}
  <footer
    transition:fade={{ duration: 500 }}
    class="flex items-center w-screen py-6 md:py-2 bg-gray-800 text-white justify-center mt-8"
  >
    <div class="flex flex-col items-center justify-center md:text-lg">
      <p>Designed and developed by</p>
      <p>Corbin Robb</p>
      <p>- 2021 -</p>
    </div>
  </footer>
{/if}
