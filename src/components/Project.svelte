<script lang="ts">
  import { fly } from "svelte/transition";
  import ImageCarousel from "./ImageCarousel.svelte";
  import Modal from "./Modal.svelte";

  export let title: string;
  export let description: string;
  export let images: string[];
  export let forward: boolean;
  export let showDetails: boolean;
  export let toggleDetails: () => void;

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
    class="w-full min-w-full flex h-full relative rounded shadow"
  >
    <ImageCarousel {images} />
    <div
      class="absolute left-2 top-12 text-2xl text-gray-200 backdrop-filter backdrop-blur-sm bg-gray-600 bg-opacity-20 rounded-md shadow-lg py-3 px-6"
    >
      <h3>{title}</h3>
    </div>
  </div>
{/key}

<Modal display={showDetails} toggleDisplay={toggleDetails}>
  <div class="p-6 w-full h-4/5">
    <div class="h-6"><h4>{title}</h4></div>
    <div><p>{description}</p></div>
  </div>
</Modal>
