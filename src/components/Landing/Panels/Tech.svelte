<script lang="ts">
  import JavascriptIcon from "../../../icons/JavascriptIcon.svelte";
  import PosgresIcon from "../../../icons/PosgresIcon.svelte";
  import PythonIcon from "../../../icons/PythonIcon.svelte";
  import NodeJsIcon from "../../../icons/NodeJsIcon.svelte";
  import ReactIcon from "../../../icons/ReactIcon.svelte";
  import TypescriptIcon from "../../../icons/TypescriptIcon.svelte";
  import TailwindIcon from "../../../icons/TailwindIcon.svelte";
  import FastapiIcon from "../../../icons/FastapiIcon.svelte";
  import SvelteIcon from "../../../icons/SvelteIcon.svelte";
  const iconSize = "h-16 w-16";
  const gridItemClass = "flex items-center w-full text-lg space-x-3";
</script>

<div class="w-full md:w-2/3 mx-auto p-2 py-20 flex flex-col space-y-10">
  <h3 class="text-2xl">What I Know</h3>
  <ul
    class="w-full mx-auto grid grid-cols-2 gap-4 justify-items-center items-center"
  >
    <li class={gridItemClass}>
      <ReactIcon classes={iconSize} />
      <h4>React</h4>
    </li>
    <li class={gridItemClass}>
      <JavascriptIcon classes={iconSize} />
      <h4>JavaScript</h4>
    </li>
    <li class={gridItemClass}>
      <TypescriptIcon classes={iconSize} />
      <h4>TypeScript</h4>
    </li>
    <li class={gridItemClass}>
      <PythonIcon classes={iconSize} />
      <h4>Python</h4>
    </li>
    <li class={gridItemClass}>
      <NodeJsIcon classes={iconSize} />
      <h4>Node.js</h4>
    </li>
    <li class={gridItemClass}>
      <PosgresIcon classes={iconSize} />
      <h4>PostgreSQL</h4>
    </li>
    <li class={gridItemClass}>
      <TailwindIcon classes={iconSize} />
      <h4>TailwindCSS</h4>
    </li>
    <li class={gridItemClass}>
      <FastapiIcon classes={iconSize} />
      <h4>FastAPI</h4>
    </li>
    <li class={gridItemClass}>
      <SvelteIcon classes={iconSize} />
      <h4>Svelte</h4>
    </li>
  </ul>
</div>
