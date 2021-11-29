<script lang="ts">
  import { onMount } from "svelte";

  import { fly } from "svelte/transition";

  let display = true;
  let loading = true;

  onMount(() =>
    setTimeout(() => {
      display = false;
      loading = false;
    }, 3000)
  );
</script>

{#if display}
  <div
    on:mouseenter={loading
      ? null
      : () => setTimeout(() => (display = false), 500)}
    class="min-h-screen w-full pb-24 flex flex-col justify-between items-center"
  >
    <div
      in:fly={{ x: 200, duration: 1000 }}
      out:fly={{ x: -200, duration: 500, delay: 100 }}
      class="text-6xl"
    >
      W
    </div>
    <div
      in:fly={{ x: -200, duration: 1000 }}
      out:fly={{ x: 200, duration: 500, delay: 100 }}
      class="text-6xl"
    >
      E
    </div>
    <div
      in:fly={{ x: 200, duration: 1000, delay: 100 }}
      out:fly={{ x: -200, duration: 500, delay: 100 }}
      class="text-6xl"
    >
      L
    </div>
    <div
      in:fly={{ x: -200, duration: 1000, delay: 100 }}
      out:fly={{ x: 200, duration: 500, delay: 100 }}
      class="text-6xl"
    >
      C
    </div>
    <div
      in:fly={{ x: 200, duration: 1000, delay: 200 }}
      out:fly={{ x: -200, duration: 500, delay: 100 }}
      class="text-6xl"
    >
      O
    </div>
    <div
      in:fly={{ x: -200, duration: 1000, delay: 200 }}
      out:fly={{ x: 200, duration: 500, delay: 100 }}
      class="text-6xl"
    >
      M
    </div>
    <div
      in:fly={{ x: 200, duration: 1000, delay: 300 }}
      out:fly={{ x: -200, duration: 500, delay: 100 }}
      class="text-6xl"
    >
      E
    </div>
    <div
      in:fly={{ x: -200, duration: 1000, delay: 300 }}
      out:fly={{ x: 200, duration: 500, delay: 100 }}
      class="text-6xl"
    >
      !
    </div>
  </div>
{/if}
