<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let init = false;

  onMount(() => setTimeout(() => (init = true), 500));
</script>

{#if init}
  <footer
    transition:fade={{ duration: 500 }}
    class="absolute bottom-0 left-0 flex flex-col z-40 items-center w-screen py-2 bg-gray-800 text-white justify-center"
  >
    <p>Created by Corbin Robb 2021</p>
    <p>Images by Unsplash</p>
  </footer>
{/if}
