<script lang="ts">
  export let clickHandler: () => void;
  export let value: string;
  export let disabled: boolean = false;
  export let padding = "p-3";
</script>

<button
  on:click={clickHandler}
  class="justify-self-end {padding} cursor-pointer select-none rounded bg-gray-50 dark:bg-gray-500 disabled:opacity-50 active:text-indigo-400 active:bg-gray-100 dark:active:bg-gray-600 shadow"
  {disabled}
>
  {value}
</button>
