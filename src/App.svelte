<script lang="ts">
  import Main from "./components/Main.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  let dark: boolean;
  import { darkModeStore } from "./stores";
  darkModeStore.subscribe((state) => {
    dark = state;
  });
</script>

<div class:dark>
  <div class="dark:bg-gray-700 dark:text-gray-50">
    <Header />
    <Main />
    <Footer />
  </div>
</div>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  div {
    -webkit-tap-highlight-color: transparent;
  }
</style>
