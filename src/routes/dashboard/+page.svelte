<script lang="ts">
  import { localeHistoryService } from "$lib/services/localehistory-service";
  import { latestPlacemark, subTitle, currentSession } from "$lib/stores";
  import AddPlacemark from "./AddPlacemark.svelte";
  import PlacemarkList from "./PlacemarkList.svelte";
  import type { Placemark } from "$lib/types/placemark-types";
  import { onMount } from "svelte";
  import { get } from "svelte/store";

  let placemarks: Placemark[] = [];
  subTitle.set("Add a placemark");

  onMount(async () => {
    placemarks = await localeHistoryService.getAllPlacemarks(get(currentSession));
  });

  latestPlacemark.subscribe(async (placemark) => {
    if (placemark) {
      placemarks.push(placemark);
      placemarks = [...placemarks];
    }
  });

</script>

<PlacemarkList {placemarks}/>
<AddPlacemark />