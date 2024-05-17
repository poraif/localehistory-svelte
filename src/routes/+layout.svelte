<script lang="ts">
  import { browser } from "$app/environment";
  import { currentSession } from "$lib/stores";
  import Heading from "$lib/ui/Heading.svelte";
  import Menu from "$lib/ui/Menu.svelte";
  import UserButton from 'clerk-sveltekit/client/UserButton.svelte'
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte'
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte'

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
  <SignedIn>
    <UserButton afterSignOutUrl="/" />
  </SignedIn>
    <Menu />
    <Heading />
  {/if}
  <SignedOut>
    <a href="/login">Sign in</a> <span>|</span> <a href="/signup">Sign up</a>
    <!-- You could also use <SignInButton mode="modal" /> and <SignUpButton mode="modal" /> here -->
  </SignedOut>
  <slot />
</div>