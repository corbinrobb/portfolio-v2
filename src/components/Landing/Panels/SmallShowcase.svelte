<script lang="ts">
  import { projectStore } from "../../../stores";
  import Panel from "./Panel.svelte";
  import SmallProject from "./SmallProject.svelte";

  let projects;

  projectStore.subscribe((state) => (projects = state));
</script>

<Panel>
  <div
    class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-1 mx-auto justify-center px-3"
  >
    {#each projects as project}
      <SmallProject {project} />
    {/each}
  </div>
</Panel>
