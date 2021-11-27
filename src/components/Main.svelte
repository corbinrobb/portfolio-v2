<script lang="ts">
  import { menuExpandedStore, pageStore } from "../stores";
  import About from "./About.svelte";
  import Landing from "./Landing.svelte";
  import Showcase from "./Showcase.svelte";
  import Skills from "./Skills.svelte";
  import Contact from "./Contact.svelte";

  let current: string;

  pageStore.subscribe((page) => (current = page));

  const closeMenu = () => {
    menuExpandedStore.set(false);
  };
</script>

<main
  on:click={closeMenu}
  class="relative h-screen pt-20 pb-2 px-2  space-y-4 lg:w-2/3 lg:mx-auto"
>
  {#if current === "home"}
    <Landing />
  {:else if current === "about"}
    <About />
  {:else if current === "projects"}
    <Showcase />
  {:else if current === "skills"}
    <Skills />
  {:else if current === "contact"}
    <Contact />
  {/if}
</main>
