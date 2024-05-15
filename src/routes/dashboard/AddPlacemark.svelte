<script lang="ts">
  import { localeHistoryService } from "$lib/services/localehistory-service";
  import type { Placemark } from "$lib/types/placemark-types";
  import { currentSession, latestPlacemark } from "$lib/stores";
  import Message from "$lib/ui/Message.svelte";
 import { get } from "svelte/store";
 import Coordinates from "$lib/ui/Coordinates.svelte";

  let title = "Placemark";
  let description = "Description";
  let year = 2003;
  let latitude = 53.3498;
  let longitude = -6.2603;
  let categories = ["Landmark", "Residence", "Event", "Other"];
  let selectedCategory = "Landmark";
  let userid = "";

 let placemarks: Placemark[] = [];
 let message = "";

 async function createPlacemark() {
        console.log($currentSession)
        const placemark: Placemark = {
          title: title,
          description: description,
          year: year,
          latitude: latitude,
          longitude: longitude,
          category: selectedCategory,
          userid: $currentSession._id
        };
        const success = await localeHistoryService.createPlacemark(placemark, get(currentSession));
        if (!success) {
          message = "placemark not added - error!";
          return;
        }
        latestPlacemark.set(placemark);
      };
</script>

{#if message}
  <Message {message} />
{/if}

<form on:submit|preventDefault={createPlacemark}>
  <div class="field">
    <label class="label" for="title">Enter title:</label>
    <input bind:value={title} class="input" id="title" name="title" type="string" />
  </div>
  <div class="field">
    <label class="label" for="year">Enter year:</label>
    <input bind:value={year} class="input" id="year" name="year" type="number" />
  </div>
  <div class="field">
    <label class="label" for="description">Enter description:</label>
    <input bind:value={description} class="input" id="description" name="description" type="string" />
  </div>
  <div class="field">
    <div class="control">
      <label class="label" for="category">Select category:</label>
      {#each categories as category}
        <input bind:group={selectedCategory} class="radio" type="radio" value={category} /> {category}
      {/each}
    </div>
  </div>
  <Coordinates bind:latitude bind:longitude />
  <div class="field">
    <div class="control">
      <button class="button is-success is-fullwidth">Add</button>
    </div>
  </div>
</form>
