<script lang="ts">
  import { onMount } from "svelte";

  import Footer from "../Footer.svelte";
  import InfoCard from "./InfoCard.svelte";
  import Page from "../Page.svelte";
  import SmallShowcase from "./SmallShowcase.svelte";
  import Welcome from "./Welcome.svelte";
  let isTransitioning = true;
  onMount(() => {
    setTimeout(() => {
      isTransitioning = false;
    }, 4000);
  });
</script>

<Page height="h-auto">
  <Welcome />
  {#if !isTransitioning}
    <InfoCard />
    <SmallShowcase />
  {/if}
</Page>
<Footer />
