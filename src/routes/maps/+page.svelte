<script lang="ts">
  import { currentSession, subTitle, latestPlacemark } from "$lib/stores";
  import { localeHistoryService } from "$lib/services/localehistory-service";
  import Card from "$lib/ui/Card.svelte";
  import LeafletMap from "$lib/ui/LeafletMap.svelte";
  import { onMount } from "svelte";
  import type { Placemark } from "$lib/types/placemark-types";
  import { get } from "svelte/store";

  
  subTitle.set("Map of placemarks");
  let map: LeafletMap;
  let placemarks: Placemark[] = [];

  onMount(async () => {
    const placemarks = await localeHistoryService.getAllPlacemarks(get(currentSession));
    placemarks.forEach((placemark: Placemark) => {
      if (typeof placemark.title === "string") {
        const popup = `${placemark.title} | ${placemark.category}`;
        map.addMarker(placemark.lat, placemark.lng, popup);
      }
    });
    const lastPlacemark = placemarks[placemarks.length - 1];
    if (lastPlacemark) map.moveTo(lastPlacemark.lat, lastPlacemark.lng);
  });

  latestPlacemark.subscribe(async (placemark) => {
    if (placemark) {
      placemarks.push(placemark);
      placemarks = [...placemarks];
    }
    if (typeof placemark.title === "string") {
      const popup = `${placemark.title} | ${placemark.category}`;
      map.addMarker(placemark.lat, placemark.lng, popup);
      map.moveTo(placemark.lat, placemark.lng);
    }
  });
  </script>
  
  <Card title="Placemark map">
    <LeafletMap height={60} bind:this={map} />
  </Card>
  