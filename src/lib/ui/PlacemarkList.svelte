<script lang="ts">
    export let placemarks = [
    {
      title: "Béal na Bláth",
      description: "The site of Michael Collins' death",
      year: 1922,
      latitude: 51.7796,
      longitude: -8.7323,
      category: "Event"
    },
    {
      title: "James Joyce house",
      description: "The house where James Joyce lived",
      year: 1882,
      latitude: 53.3647,
      longitude: -6.0653,
      category: "Residence"
    },
    {
      title: "GPO",
      description: "The site of the 1916 Easter Rising. It is now a museum and post office. It's where the proclamation of independence was read out.",
      year: 2003,
      latitude: 53.3498,
      longitude: -6.2603,
      category: "Landmark"
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
            link to open placemark
          </td>
          <td>
            link to edit placemark
          </td>
          <td>
            link to delete placemark
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  