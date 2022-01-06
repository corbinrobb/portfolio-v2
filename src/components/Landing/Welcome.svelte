<script lang="ts">
  import { onMount } from "svelte";

  import { fly, fade } from "svelte/transition";
  import DoubleDown from "../../icons/DoubleDown.svelte";

  let display = true;

  onMount(() => {
    setTimeout(() => {
      display = false;
    }, 3000);
  });
</script>

<div class="py-32 overflow-hidden">
  <div class="h-96 w-full">
    {#if display}
      <div
        class="w-full flex items-center justify-center space-x-1 md:space-x-3 h-full"
      >
        <div
          in:fly={{ y: 200, duration: 1000 }}
          out:fade={{ duration: 500 }}
          class="text-6xl"
        >
          W
        </div>
        <div
          in:fly={{ y: -200, duration: 1000 }}
          out:fade={{ duration: 500, delay: 100 }}
          class="text-6xl"
        >
          E
        </div>
        <div
          in:fly={{ y: 200, duration: 1000, delay: 100 }}
          out:fade={{ duration: 500, delay: 200 }}
          class="text-6xl"
        >
          L
        </div>
        <div
          in:fly={{ y: -200, duration: 1000, delay: 100 }}
          out:fade={{ duration: 500, delay: 300 }}
          class="text-6xl"
        >
          C
        </div>
        <div
          in:fly={{ y: 200, duration: 1000, delay: 200 }}
          out:fade={{ duration: 500, delay: 300 }}
          class="text-6xl"
        >
          O
        </div>
        <div
          in:fly={{ y: -200, duration: 1000, delay: 200 }}
          out:fade={{ duration: 500, delay: 200 }}
          class="text-6xl"
        >
          M
        </div>
        <div
          in:fly={{ y: 200, duration: 1000, delay: 300 }}
          out:fade={{ duration: 500, delay: 100 }}
          class="text-6xl"
        >
          E
        </div>
        <div
          in:fly={{ y: -200, duration: 1000, delay: 300 }}
          out:fade={{ duration: 500 }}
          class="text-6xl"
        >
          !
        </div>
      </div>
    {:else}
      <div transition:fade={{ delay: 1200 }} class="w-full h-full">
        <div
          class="w-full min-h-1/2 py-10 flex flex-col justify-around items-center space-y-10"
        >
          <span class="text-3xl">CORBIN ROBB</span>
          <span class=" text-xl">Full Stack Developer</span>
          <span class=" text-xl">Denver CO</span>
        </div>
        <div class="flex h-1/2 justify-center items-end">
          <DoubleDown />
        </div>
      </div>
    {/if}
  </div>
</div>
