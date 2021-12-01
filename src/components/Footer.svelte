<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import SvelteIcon from "../icons/SvelteIcon.svelte";
  import TailwindIcon from "../icons/TailwindIcon.svelte";

  let init = false;

  onMount(() => setTimeout(() => (init = true), 500));
</script>

{#if init}
  <footer
    transition:fade={{ duration: 500 }}
    class="flex z-40 items-center w-screen py-6 md:py-2 bg-gray-800 text-white justify-around mt-8"
  >
    <div class="flex flex-col justify-center items-center">
      <SvelteIcon classes="h-10 w-10 md:h-16 md:w-16" />
      Framework
    </div>
    <div class="flex flex-col items-center justify-center md:text-lg">
      <p>Designed and developed by</p>
      <p>Corbin Robb</p>
      <p>- 2021 -</p>
    </div>
    <div class="flex flex-col justify-center items-center">
      <TailwindIcon classes="h-10 w-10 md:h-16 md:w-16" />
      Styles
    </div>
  </footer>
{/if}
