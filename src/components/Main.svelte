<script lang="ts">
  import { menuExpandedStore } from "../stores";
  import Router from "./Router.svelte";

  const closeMenu = () => {
    menuExpandedStore.set(false);
  };
</script>

<main on:click={closeMenu} class="px-2 space-y-4 lg:w-2/3 lg:mx-auto">
  <Router />
</main>
