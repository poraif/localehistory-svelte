<script lang="ts">
  import { localeHistoryService } from "$lib/services/localehistory-service";
  import { latestStreet, subTitle, currentSession } from "$lib/stores";
  import AddStreet from "./AddStreet.svelte";
  import StreetList from "./StreetList.svelte";
  import type { Street } from "$lib/types/placemark-types";
  import { onMount } from "svelte";
  import { get } from "svelte/store";

  let streets: Street[] = [];
  subTitle.set("Add a street");

  onMount(async () => {
    streets = await localeHistoryService.getAllStreets(get(currentSession));
  });

  latestStreet.subscribe(async (street) => {
    if (street) {
      streets.push(street);
      streets = [...streets];
    }
  });
</script>

<StreetList {streets}/>
<AddStreet />
