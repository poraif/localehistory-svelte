<script lang="ts">
  import type { Placemark } from "$lib/types/placemark-types";

  export let placemarks: Placemark[] = [
  {
    title: "GPO",
    description: "The site of the 1916 Easter Rising. It is now a museum and post office. It's where the proclamation of independence was read out.",
    year: 2003,
    lat: 53.3498,
    lng: -6.2603,
    category: "Landmark",
    userid: ""
  }
];

</script>

<table class="table is-fullwidth">
  <thead>
    <th>Title</th> 
    <th>Category</th>
    <th>Open</th>
    <th>Delete</th>
  </thead>
  <tbody>
    {#each placemarks as placemark}
      <tr>
        <td>
          {placemark.title}
        </td>
        <td>
         {placemark.category}
        </td>
        <td>
          <a href="/dashboard">Open</a>
        </td>
        <td>
          <a href="/dashboard">Delete</a>
        </td>
      </tr>
    {/each}
  </tbody>
</table>