<script lang="ts">
  export let title: string;
  export let description: string;
</script>

<article class="border relative h-4/5 flex flex-col p-4 text-lg rounded">
  <h3>Project Title: {title}</h3>
  <p>Project Description: {description}</p>
</article>
