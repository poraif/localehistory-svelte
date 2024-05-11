<script lang="ts">
  import { localeHistoryService } from "$lib/services/localehistory-service";
  import { subTitle } from "$lib/stores";
  import AddStreet from "./AddStreet.svelte";
  import StreetList from "./StreetList.svelte";
  import type { Street } from "$lib/types/placemark-types";
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { currentSession } from "$lib/stores";

  let streets: Street[] = [];
  subTitle.set("Add a street");

  onMount(async () => {
    streets = await localeHistoryService.getAllStreets(get(currentSession));
  });
</script>

<StreetList {streets}/>
<AddStreet />
