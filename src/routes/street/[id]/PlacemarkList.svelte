<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  export let placemarks = [
    {
      title: "Béal na Bláth",
      description: "The site of Michael Collins' death",
      year: 1922,
      latitude: 51.7796,
      longitude: -8.7323,
      category: "Event"
    }
  ];

  </script>
  
  <table class="table is-fullwidth">
    <thead>
      <th>Title</th>
      <th>Category</th>
      <th>View</th>
      <th>Edit</th>
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
          </td><td>
            <a href="/street/{data.street.name}/placemark/{placemark.title}">View</a>
          </td>
          <td>
            link to delete placemark
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  