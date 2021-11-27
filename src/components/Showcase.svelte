<script lang="ts">
  import { projects } from "../projects";
  import Project from "./Project.svelte";

  let current = 0;
  let showDetails = false;

  const prev = () => {
    current = current - 1
  }
  const next = () => {
    current = current + 1
  }

  const toggleDetails = () => {
    showDetails = !showDetails;
  }

  const modalOffClick = (e) => {
    if (e.target.getAttribute("name") === "content") return;
    toggleDetails()
  }

  $: {
    if (current <= -1) current = 0;
    if (current >= projects.length) current = projects.length - 1
  }
</script>


<div class="h-full border py-2 px-1 rounded">
  <div class="px-3">
    <h2 class="text-xl">Showcase</h2>
    <p>This is where I showcase my projects!</p>
  </div>
  
  <div class="space-y-4 mt-3 h-full">
      <Project {...projects[current]} />
      <div class="w-full px-4 flex text-black">
        <div class="w-1/3 flex justify-start">
          {#if current !== 0}
            <button on:click={prev} class="justify-self-start p-3 border cursor-pointer select-none rounded">prev</button>
          {/if}
        </div>
        <div class="w-1/3 flex justify-center items-center">
          <button on:click={toggleDetails}>Details</button>
        </div>
        <div class="w-1/3 flex justify-end">
          {#if current !== projects.length -1}
            <button on:click={next} class="justify-self-end p-3 border cursor-pointer select-none rounded">next</button>
          {/if}
        </div>
      </div>
  </div>
</div>

{#if showDetails}
  <div on:click={modalOffClick} class="absolute top-0 h-full w-full flex justify-center items-center">
    <div name="content" class="border bg-gray-100 rounded-lg w-4/5 h-1/2">
      Modal!!
    </div>
  </div>
{/if}