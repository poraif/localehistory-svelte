<script lang="ts">
  import { currentSession, subTitle } from "$lib/stores";
  import { localeHistoryService } from "$lib/services/localehistory-service";
  import Card from "$lib/ui/Card.svelte";
  import LeafletMap from "$lib/ui/LeafletMap.svelte";
  import { onMount } from "svelte";
  import type { Placemark } from "$lib/types/placemark-types";
  import { get } from "svelte/store";

  subTitle.set("Reports Geo Data");
  let map: LeafletMap;

  onMount(async () => {
    const placemarks = await localeHistoryService.getAllPlacemarks(get(currentSession));
    placemarks.forEach((placemark: Placemark) => {
      if (typeof placemark.title === "string") {
        const popup = `${placemark.title}: ${placemark.category}`;
        if (map) {
          map.addMarker(placemark.lat, placemark.lng, popup, placemark.category);
        } else {
          console.error('map is not initialized yet');
        }
      }
    });
    const lastPlacemark = placemarks[placemarks.length - 1];
    if (lastPlacemark) {
      if (map) {
        map.moveTo(lastPlacemark.lat, lastPlacemark.lng);
      } else {
        console.error('map is not initialized yet');
      }
    }
  });
</script>

<Card title="Placemarks map">
  <LeafletMap height={60} bind:this={map} />
</Card>