<script lang="ts">
    export let lat = 0.0;
    export let lng = 0.0;
  </script>
  
  <div class="box field is-left is-horizontal">
    <div class="field-label is-normal">
      <label for="lng" class="label">Latitude</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control is-expanded">
          <input id="lng" class="input" type="float" bind:value={lat} />
        </p>
      </div>
      <div class="field-label is-normal">
        <label for="lat" class="label">Longitude</label>
      </div>
      <div class="field">
        <p class="control is-expanded">
          <input id="lng" class="input" type="float" bind:value={lng} />
        </p>
      </div>
    </div>
  </div>