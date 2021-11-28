<script lang="ts">
  import Nav from "./Nav.svelte";
  export let fixed: boolean;
</script>

<header>
  {#key fixed}
    <Nav {fixed} />
  {/key}
</header>
