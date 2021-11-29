<script lang="ts">
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  import MoonIcon from "../icons/MoonIcon.svelte";
  import SunIcon from "../icons/SunIcon.svelte";

  import { darkModeStore } from "../stores";

  let darkMode: boolean;

  darkModeStore.subscribe((state) => (darkMode = state));

  const darkToggle = tweened(darkMode ? 40 : 0, {
    duration: 500,
    easing: cubicOut,
  });

  const toggleDarkMode = async () => {
    await darkToggle.update((state) => (state === 40 ? 0 : 40));
    await darkModeStore.update((state) => !state);
  };
</script>

<div
  class="h-10 w-20 bg-gray-400 dark:bg-gray-600 rounded-3xl relative cursor-pointer"
  on:click={toggleDarkMode}
>
  <MoonIcon
    classes="h-6 w-6 absolute left-2 top-2 z-0 text-gray-100 dark:text-indigo-300 "
  />
  <SunIcon
    classes="h-6 w-6 absolute right-2 top-2 z-0 text-yellow-300 dark:text-gray-100 "
  />
  <button
    class="p-5 shadow text-gray-100 bg-gray-500 rounded-3xl z-30"
    style="transform: translateX({$darkToggle}px)"
  />
</div>
