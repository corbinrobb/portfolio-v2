<script lang="ts">
	import Main from "./components/Main.svelte";
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	let dark: boolean;
	import { darkModeStore } from "./stores";
	darkModeStore.subscribe(state => {
		dark = state;
	})
</script>

<div class:dark>
	<Header />
	<Main />
	<Footer />
</div>

<style global lang="postcss">
	@tailwind base;
  @tailwind components;
  @tailwind utilities;
	 div {
		-webkit-tap-highlight-color: transparent;
	 }
</style>
