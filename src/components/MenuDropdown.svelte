<script lang="ts">
  import { fly } from "svelte/transition";
  export let menuExpanded: boolean;
  export let setFixed: string;
  export let menuItems: string[];
  export let changePage: (event: Event) => void;
</script>

{#if menuExpanded}
  <ul
    transition:fly={{ y: -200, duration: 500, opacity: 0.8 }}
    class="lg:hidden w-screen top-0 flex flex-col px-2 py-1 bg-gray-600 bg-opacity-20 mt-16 dark:bg-opacity-40 shadow-md z-20 rounded space-y-1 backdrop-filter backdrop-blur-sm {setFixed}"
  >
    {#each menuItems as item}
      <li
        on:click={changePage}
        name={item.toLowerCase()}
        class="w-full text-center py-2 bg-gray-100 text-gray-700  dark:bg-gray-700 dark:text-gray-50 rounded text-lg cursor-pointer z-20 select-none active:bg-gray-200 dark:active:bg-gray-400 active:text-indigo-400 dark:active:text-indigo-200 shadow-sm"
      >
        {item}
      </li>
    {/each}
  </ul>
{/if}
