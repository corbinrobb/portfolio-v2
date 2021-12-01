<script lang="ts">
  import { onMount } from "svelte";

  import { fly, fade } from "svelte/transition";

  let display = true;

  onMount(() => {
    setTimeout(() => {
      display = false;
    }, 3000);
  });
</script>

{#if display}
  <div
    class="py-60 w-full flex items-center justify-center space-x-1 md:space-x-3"
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
{/if}
