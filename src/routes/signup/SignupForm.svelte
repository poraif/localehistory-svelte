<script lang="ts">
  import { goto } from "$app/navigation";
  import UserCredentials from "$lib/ui/UserCredentials.svelte";
  import UserDetails from "$lib/ui/UserDetails.svelte";
  import Message from "$lib/ui/Message.svelte";
  import { localeHistoryService } from "$lib/services/localehistory-service";

  let firstName = "";
  let lastName = "";
  let email = "";
  let password = "";
  let message = "";

  async function signup() {
    const user = {
      firstName,
      lastName,
      email,
      password
    };
    try {
      const success = await localeHistoryService.signup(user);
      if (success) {
        goto("/login");
      } else {
        message = "Error Trying to sign up";
      }
    } catch (error) {
      message = "An unexpected error occurred";
      console.error(error);
    }
  }
</script>

{#if message}
  <Message {message} />
{/if}
<form on:submit|preventDefault={signup}>
  <UserDetails bind:firstName bind:lastName />
  <UserCredentials bind:email bind:password />
  <button class="button is-success is-fullwidth">Create Account</button>
  <br />
</form>