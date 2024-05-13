<script lang="ts">
    import { localeHistoryService } from "$lib/services/localehistory-service";
    import { latestPlacemark, subTitle } from "$lib/stores";
    import type { Placemark } from "$lib/types/placemark-types";
    import { onMount } from "svelte";
    import type { PageData } from "./$types";
	  export let data: PageData;
    import AddPlacemark from "./AddPlacemark.svelte";
    import PlacemarkList from "./PlacemarkList.svelte";
  
    let placemarks: Placemark[] = [];
    subTitle.set("Add a placemark");

  subTitle.set("Add a placemark");

  onMount(async () => {
    if (data.street && data.street._id) {
        placemarks = await localeHistoryService.getStreetPlacemarks(data.street._id);
    }
});

  latestPlacemark.subscribe(async (placemark) => {
    if (placemark) {
      placemarks.push(placemark);
      placemarks = [...placemarks];
    }
    
  });
</script>

<PlacemarkList {placemarks} {data} />
<AddPlacemark />