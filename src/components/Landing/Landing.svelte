<script lang="ts">
  import Footer from "../Footer.svelte";
  import InfoCard from "./Panels/InfoCard.svelte";
  import Page from "../Page.svelte";
  import SmallShowcase from "./Panels/SmallShowcase.svelte";
  import Welcome from "./Welcome.svelte";
  import OutOfBox from "./Panels/OutOfBox.svelte";
  import Detail from "./Panels/Detail.svelte";
  import Creative from "./Panels/Creative.svelte";
  import Teamwork from "./Panels/Teamwork.svelte";
</script>

<Page height="h-auto">
  <Welcome />
  <div class="snap-center"><OutOfBox /></div>
  <div class="snap-center"><Detail /></div>
  <div class="snap-center"><Creative /></div>
  <div class="snap-center"><Teamwork /></div>
  <div class="snap-start"><InfoCard /></div>
  <div><SmallShowcase /></div>
</Page>
<Footer />
