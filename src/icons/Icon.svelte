<script lang="ts">
  import { icons } from "./icons";
  export let name: string;
  export let classes: string = "h-6 w-6";
  const {svg, path} = icons[name];
</script>

<i>
  <svg {...svg} class={classes}>
    <path {...path}/>
  </svg>
</i>