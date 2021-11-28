<script lang="ts">
  import { fade } from "svelte/transition";
</script>

<div transition:fade={{ delay: 500 }} class="relative min-h-screen pt-20">
  <slot />
</div>
