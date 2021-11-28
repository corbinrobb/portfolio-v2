<script lang="ts">
  import { fly } from "svelte/transition";

  export let title: string;
  export let forward: boolean;
  let inX: number;
  let outX: number;
  const distance = 400;

  $: {
    if (forward) {
      inX = distance;
      outX = -distance;
    } else {
      inX = -distance;
      outX = distance;
    }
  }
</script>

{#key forward}
  <div
    in:fly={{ x: inX, duration: 500, delay: 500 }}
    out:fly={{ x: outX, duration: 500 }}
    class="w-full min-w-full relative px-1 py-72 text-lg rounded shadow bg-project bg-center bg-cover flex flex-col items-center"
  >
    <div
      class="absolute left-2 top-12 text-4xl text-gray-200 backdrop-filter backdrop-blur-sm bg-gray-600 bg-opacity-20 rounded-md shadow-lg py-3 px-6"
    >
      <h3>{title}</h3>
    </div>
  </div>
{/key}
