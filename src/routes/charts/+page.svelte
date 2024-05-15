<script lang="ts">
  // @ts-ignore
  import Chart from "svelte-frappe-charts";
  import { onMount } from "svelte";
  import { localeHistoryService } from "$lib/services/localehistory-service";
  import { currentSession, subTitle } from "$lib/stores";
  import { get } from "svelte/store";
  import type { DataSet } from "$lib/types/placemark-types";
  import { generateByCategory, placemarksByCentury, placemarksByLocation } from "$lib/services/chart-utils";
  import Card from "$lib/ui/Card.svelte";
  // import { Bar } from 'svelte-chartjs';

  let totalEachCategory: DataSet;
  let totalEachLocation: DataSet;
  let totalEachCentury: DataSet;


  subTitle.set("Placemark data");

  onMount(async () => {
    const placemarkList = await localeHistoryService.getAllPlacemarks(get(currentSession));
    console.log(placemarkList);
    totalEachCategory = generateByCategory(placemarkList);
    totalEachLocation = placemarksByLocation(placemarkList);
    totalEachCentury = placemarksByCentury(placemarkList);
  });
</script>

<div class="columns">
  <div class="column">
    <Card title="Placemarks by category">
      <Chart data={totalEachCategory} type="donut" maxSlices=5 />
    </Card>
  </div>
  <div class="column has-text-centered">
    <Card title="Century of placemarks">
      <Chart data={totalEachCentury} type="bar" />
    </Card>
  </div>
</div>
<div class="columns">
  <div class="column has-text-centered">
    <Card title="Primary locations of placemarks">
      <Chart data={totalEachLocation} type="bar" />    
    </Card>
  </div>
</div>