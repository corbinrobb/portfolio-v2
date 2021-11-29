<script lang="ts">
  import { fade } from "svelte/transition";
  import LeftIcon from "../icons/LeftIcon.svelte";
  import RightIcon from "../icons/RightIcon.svelte";

  export let images: string[];

  let index = 0;
  let currentImage = images[index];

  const prev = () => {
    index--;
  };

  const next = () => {
    index++;
  };

  $: {
    if (index <= -1) index = images.length - 1;
    if (index >= images.length) index = 0;
    currentImage = images[index];
  }
</script>

{#key currentImage}
  <div
    transition:fade={{ duration: 250 }}
    class="relative h-full max-h-full w-full min-w-full text-lg px-1 py-72 bg-{currentImage} bg-center bg-cover"
  />
{/key}
<div
  on:click={prev}
  class="absolute left-0 top-0 w-1/5 h-full flex justify-center items-end"
>
  <div class="p-8 cursor-pointer">
    <LeftIcon classes="h-8 w-8 rounded-lg text-gray-100 shadow" />
  </div>
</div>
<div
  on:click={next}
  class="absolute right-0 top-0 w-1/5 h-full flex justify-center items-end"
>
  <div class="p-8 cursor-pointer">
    <RightIcon classes="h-8 w-8 rounded-lg text-gray-100 shadow" />
  </div>
</div>
<div
  class="absolute bottom-0 left-1/3 h-20 w-1/3 flex justify-center items-center"
>
  <div
    class="flex space-x-4 py-1 px-3 rounded-xl backdrop-filter backdrop-blur-sm bg-gray-700 bg-opacity-10 shadow"
  >
    {#each images as image, i}
      <div
        on:click={() => (index = i)}
        class="border border-gray-500 border-opacity-75 cursor-pointer shadow-sm rounded-full p-2 transform hover:scale-110 active:scale-100 {image ===
        currentImage
          ? 'bg-gray-300'
          : 'bg-gray-200 opacity-30'}"
      />
    {/each}
  </div>
</div>
