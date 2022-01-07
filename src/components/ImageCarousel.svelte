<script lang="ts">
  import { fade } from 'svelte/transition';
  import LeftIcon from '../icons/LeftIcon.svelte';
  import RightIcon from '../icons/RightIcon.svelte';

  export let images: { src: string; alt: string }[];

  let index = 0;
  let carousel: HTMLDivElement;
  let leftOffset: number;
  let lastLeftOffset = 0;
  let carouselWidth: number;

  const prev = () => {
    if (index - 1 > -1) {
      carousel?.scrollTo({
        left: lastLeftOffset - carouselWidth,
        behavior: 'smooth',
      });
    }
  };

  const next = () => {
    if (index + 1 < images.length) {
      carousel?.scrollTo({
        left: lastLeftOffset + carouselWidth,
        behavior: 'smooth',
      });
    }
  };

  const changeToIndex = (i) => {
    carousel?.scrollTo({
      left: i * carouselWidth,
      behavior: 'smooth',
    });
  };

  const getOffset = () => {
    leftOffset = carousel.scrollLeft;
  };

  $: if (carouselWidth) {
    lastLeftOffset = index * carouselWidth;
  }

  $: {
    if (Math.abs(leftOffset - lastLeftOffset) >= carouselWidth * 0.6) {
      if (leftOffset < lastLeftOffset) {
        index--;
        lastLeftOffset -= carouselWidth;
      } else {
        index++;
        lastLeftOffset += carouselWidth;
      }
    }
  }
</script>

<div class="relative lg:w-2/3 lg:min-w-0">
  <div
    on:scroll={getOffset}
    bind:clientWidth={carouselWidth}
    bind:this={carousel}
    transition:fade={{ duration: 250 }}
    class="relative flex h-full max-h-full min-w-full text-lg overflow-scroll overscroll-contain snap-x snap-mandatory space-x-2 px-1"
  >
    {#each images as image}
      <img
        class="object-cover h-full min-w-full snap-center snap-always scroll-mx-10"
        src={image.src}
        alt={image.alt}
      />
    {/each}
  </div>
  <div on:click={prev} class="p-8 cursor-pointer absolute left-10 bottom-0">
    <LeftIcon classes="h-8 w-8 rounded-lg text-gray-100 shadow" />
  </div>

  <div on:click={next} class="p-8 cursor-pointer absolute right-10 bottom-0">
    <RightIcon classes="h-8 w-8 rounded-lg text-gray-100 shadow" />
  </div>
  <div
    class="absolute bottom-0 [left:40%] h-20 w-1/5 flex justify-center items-center"
  >
    <div
      class="flex space-x-4 py-1 px-3 rounded-xl backdrop-filter backdrop-blur-sm bg-gray-700 bg-opacity-10 shadow"
    >
      {#key index}
        {#each images as image, i}
          <div
            on:click={() => changeToIndex(i)}
            class="border border-gray-500 border-opacity-75 cursor-pointer shadow-sm rounded-full p-2 transform hover:scale-110 active:scale-100 {i ===
            index
              ? 'bg-gray-300'
              : 'bg-gray-200 opacity-30'}"
          />
        {/each}
      {/key}
    </div>
  </div>
</div>
