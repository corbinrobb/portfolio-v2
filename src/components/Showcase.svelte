<script lang="ts">
  import { projects } from "../projects";
  import Button from "./Button.svelte";
  import Project from "./Project.svelte";
  import Page from "./Page.svelte";

  let current = 0;
  let showDetails = false;

  const prev = () => {
    current = current - 1;
  };
  const next = () => {
    current = current + 1;
  };

  const toggleDetails = () => {
    showDetails = !showDetails;
  };

  const modalOffClick = (e) => {
    if (e.target.getAttribute("name") === "content") return;
    toggleDetails();
  };

  $: {
    if (current <= -1) current = 0;
    if (current >= projects.length) current = projects.length - 1;
  }
</script>

<Page>
  <div class="px-3">
    <h2 class="text-xl">Showcase</h2>
    <p>This is where I showcase my projects!</p>
  </div>

  <div class="space-y-4 mt-3 h-full">
    <Project {...projects[current]} />
    <div class="w-full px-4 py-3 flex absolute bottom-0 left-0">
      <div class="w-1/3 flex justify-start">
        {#if current !== 0}
          <Button clickHandler={prev} value="prev" />
        {/if}
      </div>
      <div class="w-1/3 flex justify-center items-center">
        <Button clickHandler={toggleDetails} value="Details" />
      </div>
      <div class="w-1/3 flex justify-end">
        {#if current !== projects.length - 1}
          <Button clickHandler={next} value="next" />
        {/if}
      </div>
    </div>
  </div>
</Page>

{#if showDetails}
  <div
    on:click={modalOffClick}
    class="absolute top-0 h-full w-full flex justify-center items-center select-none"
  >
    <div
      name="content"
      class="border bg-gray-100 dark:bg-gray-500 rounded-lg w-4/5 h-1/2 select-text flex justify-center items-center"
    >
      Modal!!
    </div>
  </div>
{/if}
