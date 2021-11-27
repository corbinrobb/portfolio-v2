<script lang="ts">
  export let clickHandler: () => void;
  export let value: string;
</script>

<button
  on:click={clickHandler}
  class="justify-self-end p-3 border cursor-pointer select-none rounded bg-gray-50 dark:bg-gray-500 dark:border-gray-800 dark:text-gray-50"
>
  {value}
</button>
