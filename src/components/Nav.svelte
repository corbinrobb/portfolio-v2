<script lang="ts">
  import { onDestroy } from "svelte";
  import { quintOut } from "svelte/easing";

  import { fly, scale } from "svelte/transition";

  import CodeIcon from "../icons/CodeIcon.svelte";
  import MenuIcon from "../icons/MenuIcon.svelte";
  import MinusIcon from "../icons/MinusIcon.svelte";

  import { menuExpandedStore, pageStore } from "../stores";
  import DarkToggle from "./DarkToggle.svelte";
  import MenuDropdown from "./MenuDropdown.svelte";
  export let fixed: boolean = false;

  const menuItems = ["Home", "About", "Projects", "Contact"];

  let menuExpanded: boolean;
  let currentPage: string;
  let setFixed: string;

  onDestroy(() => menuExpandedStore.set(false));

  menuExpandedStore.subscribe((state) => (menuExpanded = state));
  pageStore.subscribe((page) => (currentPage = page));

  const toggleMenu = () => {
    menuExpandedStore.update((state) => !state);
  };

  const changePage = (event) => {
    pageStore.set(event.target.getAttribute("name"));
    menuExpandedStore.set(false);
  };

  $: setFixed = fixed ? "fixed" : "absolute";
</script>

<nav
  class="z-40 flex justify-between px-3 py-2 items-center top-0 left-0 w-screen min-h-v-8 bg-gray-800 text-white {setFixed}"
  transition:fly={{ y: -64, duration: 500 }}
>
  <span
    class="cursor-pointer flex items-center space-x-3 select-none active:text-indigo-400"
    on:click={() => {
      pageStore.set("home");
      menuExpandedStore.set(false);
    }}
  >
    <CodeIcon classes="h-8 w-8" />
    <h2 class="text-2xl">Corbin Robb</h2>
  </span>

  <div
    class="min-w-1/3 lg:min-w-1/2 flex justify-between lg:justify-end space-x-8 items-center"
  >
    <DarkToggle />

    <ul class="hidden lg:flex space-x-4">
      {#each menuItems as item}
        <li
          on:click={changePage}
          name={item.toLowerCase()}
          class="relative py-2 px-4  text-gray-100 active:text-indigo-300 text-xl cursor-pointer z-20 select-none "
        >
          {item}
          {#if item.toLowerCase() === currentPage}
            <span
              transition:scale={{ duration: 300, easing: quintOut }}
              class="absolute bottom-0 left-0 block w-full pt-1 bg-white rounded-lg"
            />
          {/if}
        </li>
      {/each}
    </ul>

    <button class="lg:hidden active:text-indigo-400" on:click={toggleMenu}>
      {#if menuExpanded}
        <MinusIcon classes="h-12 w-12 cursor-pointer" />
      {:else}
        <MenuIcon classes="h-12 w-12 cursor-pointer" />
      {/if}
    </button>
  </div>
</nav>

<MenuDropdown {menuExpanded} {setFixed} {menuItems} {changePage} />
