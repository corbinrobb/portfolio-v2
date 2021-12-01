<script lang="ts">
  import { onMount } from "svelte";

  import { fade } from "svelte/transition";
  import Tech from "./Tech.svelte";
  import TitleCard from "./TitleCard.svelte";

  let display = false;

  onMount(() => (display = true));
</script>

{#if display}
  <div transition:fade={{ delay: 500 }} class="p-4 pt-16">
    <TitleCard />
    <Tech />
  </div>
{/if}
