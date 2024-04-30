<script lang="ts">
    import { subTitle } from "$lib/stores";
    import AddPlacemark from "./AddPlacemark.svelte";
    import PlacemarkList from "$lib/ui//PlacemarkList.svelte";
  
    subTitle.set("Add a placemark");
  </script>
  
  <PlacemarkList/>
  <AddPlacemark />