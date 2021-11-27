<script lang="ts">
  import { fly } from "svelte/transition";
  import CodeIcon from "../icons/CodeIcon.svelte";
  import MenuIcon from "../icons/MenuIcon.svelte";
  import MinusIcon from "../icons/MinusIcon.svelte";
  import MoonIcon from "../icons/MoonIcon.svelte";
  import SunIcon from "../icons/SunIcon.svelte";
  import { menuExpandedStore, darkModeStore, pageStore } from "../stores";

  const menuItems = ["About", "Projects", "Skills", "Contact"];

  let darkMode: boolean;
  let menuExpanded: boolean;
  let currentPage: string;

  darkModeStore.subscribe((state) => (darkMode = state));
  menuExpandedStore.subscribe((state) => (menuExpanded = state));
  pageStore.subscribe((page) => (currentPage = page));

  const toggleDarkMode = () => {
    darkModeStore.update((state) => !state);
  };

  const toggleMenu = () => {
    menuExpandedStore.update((state) => !state);
  };

  const changePage = (event) => {
    pageStore.set(event.target.getAttribute("name"));
    menuExpandedStore.set(false);
  };
</script>

<nav
  class="absolute z-40 flex justify-between px-3 items-center top-0 left-0 w-screen h-16 bg-gray-800 text-white"
>
  <span
    class="cursor-pointer flex items-center space-x-3 select-none"
    on:click={() => pageStore.set("home")}
  >
    <CodeIcon classes="h-8 w-8" />
    <h2 class="text-2xl">Corbin Robb</h2>
  </span>

  <div class="w-1/3 flex justify-between lg:justify-end space-x-8 items-center">
    <button
      on:click={toggleDarkMode}
      class="p-2 text-gray-100 bg-indigo-500 dark:text-yellow-300 dark:bg-gray-500 bg-opacity-50 cursor-pointer rounded-3xl"
    >
      {#if darkMode}
        <SunIcon />
      {:else}
        <MoonIcon />
      {/if}
    </button>

    <ul
      transition:fly={{ y: -200, duration: 500, opacity: 0.8 }}
      class="hidden lg:flex space-x-4"
    >
      {#each menuItems as item}
        <li
          on:click={changePage}
          name={item.toLowerCase()}
          class={`py-2 px-4  text-gray-100 text-xl cursor-pointer z-20 border-b-2 ${
            currentPage !== item.toLowerCase() ? "border-opacity-0" : ""
          }`}
        >
          {item}
        </li>
      {/each}
    </ul>

    <button class="lg:hidden" on:click={toggleMenu}>
      {#if menuExpanded}
        <MinusIcon classes="h-12 w-12 cursor-pointer active:text-gray-600" />
      {:else}
        <MenuIcon classes="h-12 w-12 cursor-pointer active:text-gray-600" />
      {/if}
    </button>
  </div>
</nav>

{#if menuExpanded}
  <ul
    transition:fly={{ y: -200, duration: 500, opacity: 0.8 }}
    class="lg:hidden absolute w-screen top-0 flex flex-col px-2 py-1 mt-16 bg-gray-600 bg-opacity-50 dark:bg-opacity-100 shadow-md z-20 rounded space-y-1"
  >
    {#each menuItems as item}
      <li
        on:click={changePage}
        name={item.toLowerCase()}
        class="w-full text-center py-2 bg-gray-100 text-gray-700  dark:bg-gray-700 dark:text-gray-50 rounded text-lg cursor-pointer z-20 select-none"
      >
        {item}
      </li>
    {/each}
  </ul>
{/if}
