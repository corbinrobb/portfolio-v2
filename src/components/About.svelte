<script lang="ts">
  import DocumentIcon from "../icons/DocumentIcon.svelte";
  import GithubIcon from "../icons/GithubIcon.svelte";
  import GmailIcon from "../icons/GmailIcon.svelte";
  import LinkedInIcon from "../icons/LinkedInIcon.svelte";
  import LinkIcon from "./LinkIcon.svelte";
  import Page from "./Page.svelte";
</script>

<Page>
  <div
    class="p-3 flex flex-col lg:flex-row items-center space-y-4 justify-between lg:justify-start"
  >
    <div class="flex justify-center w-1/2 lg:w-1/2">
      <img
        class="border-2 dark:border-gray-600 shadow max-h-64 rounded-full object-contain"
        src="/images/Portrait.jpeg"
        alt="Corbin Robb Portrait"
      />
    </div>
    <div class="flex w-full lg:w-2/5 justify-around items-center">
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
  </div>

  <div
    class="shadow-md border dark:border-gray-600 rounded px-2 py-4 lg:px-5 lg:py-8 space-y-3 max-w-screen-md mx-auto"
  >
    <h2 class="text-2xl p-2">About Me:</h2>
    <p class="px-2">
      &emsp;Resourceful Full Stack Developer that wields passion and ingenuity
      to build sleek, responsive web applications and solve complex problems.
    </p>
    <p class="px-2">
      &emsp;Well-versed in JavaScript, React, Node.js and SQL. Familiar with
      TypeScript, TailwindCSS, Python, FastAPI, and Svelte.
    </p>
    <p class="px-2">
      &emsp;Can often be found walking through nature, reading manga, playing
      guitar, learning something new, building solo projects, or contributing to
      open source.
    </p>
  </div>
</Page>
