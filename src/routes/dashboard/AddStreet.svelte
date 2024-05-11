<script lang="ts">
  import { localeHistoryService } from "$lib/services/localehistory-service";
  import type { Street } from "$lib/types/placemark-types";
  import { currentSession } from "$lib/stores";
  import Message from "$lib/ui/Message.svelte";
 import { get } from "svelte/store";

  let street: Street = {name: ""};
 let streets: Street[] = [];
 let message = "";


 async function createStreet() {
    try {
        console.log(`attempting to create street: ${street}`);
        let newStreet = await localeHistoryService.createStreet(street, get(currentSession));
        if (newStreet) {
            message = "Street created";
        } else {
            message = "Street not created";
        }
    } catch (error) {
        console.error(error);
        message = "An error occurred while creating the street";
    }
}
</script>

{#if message}
  <Message {message} />
{/if}

<form on:submit|preventDefault={createStreet}>
<div class="field">
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label class="label">Name</label>
  <div class="control has-icons-left">
    <input bind:value={street.name} class="input" type="text" placeholder="name" name="name" />
    <span class="icon is-small is-left">
      <i class="fa fa-envelope"></i>
    </span>
  </div>
</div>
  <div class="field">
    <div class="control">
      <button class="button is-success is-fullwidth">Add</button>
    </div>
  </div>
</form>
