<script lang="ts">
  import { browser } from "$app/environment";
  import { currentSession } from "$lib/stores";
  import Heading from "$lib/ui/Heading.svelte";
  import Menu from "$lib/ui/Menu.svelte";
  import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte'
  import ClerkMenu from "$lib/ui/ClerkMenu.svelte";


  if (browser) {
    const savedSession = localStorage.localehistory;
    console.log(`savedSession: ${savedSession}`);
    if (savedSession) {
      const session = JSON.parse(savedSession);
      currentSession.set(session);
    }
  }
</script>

<div class="container">
  {#if $currentSession?.token}
    <Menu />
    <Heading />
  {/if}
  <SignedIn>
    <ClerkMenu />
  </SignedIn>
  <slot />
</div>