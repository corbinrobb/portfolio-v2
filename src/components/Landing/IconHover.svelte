<script lang="ts">
  export let title: string;
</script>

<div class="relative">
  <slot />
  <div
    class="absolute h-full w-full top-0 left-0 flex justify-center items-center bg-black bg-opacity-0 text-gray-100 text-opacity-0 hover:bg-opacity-30 hover:text-opacity-100 select-none"
  >
    {title}
  </div>
</div>
