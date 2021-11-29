<script lang="ts">
  import DocumentIcon from "../icons/DocumentIcon.svelte";
  import GithubIcon from "../icons/GithubIcon.svelte";
  import GmailIcon from "../icons/GmailIcon.svelte";
  import LinkedInIcon from "../icons/LinkedInIcon.svelte";
  import LinkIcon from "./LinkIcon.svelte";
  import Page from "./Page.svelte";
</script>

<Page>
  <div class="h-full py-20 lg:shadow-md flex justify-around items-center">
    <LinkIcon>
      <GithubIcon />
    </LinkIcon>
    <LinkIcon>
      <LinkedInIcon />
    </LinkIcon>
    <LinkIcon>
      <GmailIcon />
    </LinkIcon>
    <LinkIcon>
      <DocumentIcon />
    </LinkIcon>
  </div>
</Page>
