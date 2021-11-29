<script lang="ts">
  import { tick } from "svelte";
  import { projects } from "../projects";
  import Button from "./Button.svelte";
  import Project from "./Project.svelte";
  import Page from "./Page.svelte";

  let current = 0;
  let showDetails = false;
  let forward = false;
  let project;

  const prev = async () => {
    forward = false;
    await tick();
    current--;
  };
  const next = async () => {
    forward = true;
    await tick();
    current++;
  };

  const toggleDetails = () => {
    showDetails = !showDetails;
  };

  $: {
    if (current <= -1) current = 0;
    if (current >= projects.length) current = projects.length - 1;
    project = projects[current];
  }
</script>

<Page>
  <div class="max-w-none flex space-x-3 overflow-hidden">
    {#key current}
      <Project {forward} {...project} {showDetails} {toggleDetails} />
    {/key}
  </div>
  <div class="w-full px-4 py-3 flex absolute bottom-0 left-0">
    <div class="w-1/3 flex justify-start">
      <Button disabled={current === 0} clickHandler={prev} value="prev" />
    </div>
    <div class="w-1/3 flex justify-center items-center">
      <Button
        clickHandler={toggleDetails}
        value={!showDetails ? "Details" : "Close"}
      />
    </div>
    <div class="w-1/3 flex justify-end">
      <Button
        disabled={current === projects.length - 1}
        clickHandler={next}
        value="next"
      />
    </div>
  </div>
</Page>
