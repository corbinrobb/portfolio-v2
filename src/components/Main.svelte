<script lang="ts">
  import { menuExpandedStore } from "../stores";
  import Router from "./Router.svelte";

  const closeMenu = () => {
    menuExpandedStore.set(false);
  };
</script>

<main on:click={closeMenu} class="flex flex-col w-full snap-start">
  <Router />
</main>
