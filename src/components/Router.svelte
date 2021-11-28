<script lang="ts">
  import { pageStore } from "../stores";
  import About from "./About.svelte";
  import Landing from "./Landing.svelte";
  import Showcase from "./Showcase.svelte";
  import Contact from "./Contact.svelte";

  let current: string;

  pageStore.subscribe((page) => (current = page));
</script>

{#if current === "home"}
  <Landing />
{:else if current === "about"}
  <About />
{:else if current === "projects"}
  <Showcase />
{:else if current === "contact"}
  <Contact />
{/if}
