<script lang="ts">
  import Main from "./components/Main.svelte";
  import Header from "./components/Header.svelte";
  import { darkModeStore } from "./stores";

  let dark: boolean;
  let y = 0;
  let lastY = 0;
  let fixed = false;
  let timeout;

  darkModeStore.subscribe((state) => {
    dark = state;
  });

  const updateY = (y: number) => {
    if (y === 0) {
      lastY = 0;
      return;
    }
    if (Math.abs(y - lastY) < 64) return;
    if (y >= lastY && fixed !== false) fixed = false;
    if (y < lastY && fixed !== true) fixed = true;
    lastY = y;
  };

  $: {
    if (timeout && Math.abs(y - lastY) < 120 && y !== 0) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => updateY(y), 50);
  }
</script>

<svelte:window bind:scrollY={y} />

<div class:dark>
  <div class="dark:bg-gray-700 dark:text-gray-50">
    <Header {fixed} />
    <Main />
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
