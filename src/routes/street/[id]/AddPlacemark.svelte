<script lang="ts">
    import Coordinates from "$lib/ui/Coordinates.svelte";

    const categories = ["Landmark", "Residence", "Event", "Other"];
    let title = "Add a placemark";
    let year = 1800;
    let category = "Landmark";
    let description = "This is a description of the placemark";
    let lat = 52.160858;
    let lng = -7.15242;
  
    async function addPlacemark() {
      console.log(`Just added placemark: ${title}`);
      console.log(`lat: ${lat}, lng: ${lng}`);
    }
  </script>
  
  <form on:submit|preventDefault={addPlacemark}>
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
        {#each categories as categorySelection}
          <input bind:group={category} class="radio" type="radio" value={categorySelection} /> {categorySelection}
        {/each}
      </div>
    </div>
    <Coordinates bind:lat bind:lng />
    <div class="field">
      <div class="control">
        <button class="button is-success is-fullwidth">Add</button>
      </div>
    </div>
  </form>