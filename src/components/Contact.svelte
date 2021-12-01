<script lang="ts">
  import DocumentIcon from "../icons/DocumentIcon.svelte";
  import GithubIcon from "../icons/GithubIcon.svelte";
  import GmailIcon from "../icons/GmailIcon.svelte";
  import LinkedInIcon from "../icons/LinkedInIcon.svelte";
  import LinkIcon from "./LinkIcon.svelte";
  import Page from "./Page.svelte";
</script>

<Page>
  <div class=" py-72 flex justify-around items-center">
    <LinkIcon href="https://github.com/corbinrobb">
      <GithubIcon classes="h-8 w-8 cursor-pointer" />
    </LinkIcon>
    <LinkIcon href="https://www.linkedin.com/in/corbinrobb/">
      <LinkedInIcon classes="h-8 w-8 cursor-pointer" />
    </LinkIcon>
    <LinkIcon href="mailto:corbinrobb@gmail.com">
      <GmailIcon classes="h-8 w-8 cursor-pointer" />
    </LinkIcon>
    <LinkIcon href="/images/resume.pdf">
      <DocumentIcon classes="h-8 w-8 cursor-pointer" />
    </LinkIcon>
  </div>
</Page>
