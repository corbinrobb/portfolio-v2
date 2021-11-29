<script lang="ts">
  export let href: string;
</script>

<a
  {href}
  target="blank"
  class="p-3 border border-opacity-0 shadow transform hover:scale-110 active:scale-100 hover:shadow-md hover:border-opacity-100 dark:border-gray-600  cursor-pointer rounded-full select-none"
>
  <slot />
</a>
