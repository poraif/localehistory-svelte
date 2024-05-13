<script lang="ts">
  export let streets = [
  {
    name: "O'Connell Street",
  }
];

</script>

<table class="table is-fullwidth">
  <thead>
    <th>Name</th> 
    <th>Placemarks</th>
    <th>Open</th>
  </thead>
  <tbody>
    {#each streets as street}
      <tr>
        <td>
          {street.name}
        </td>
        <td>
          insert count placemarks
        </td>
        <td>
          <a href="/street/{street._id}">Open</a>
        </td>
      </tr>
    {/each}
  </tbody>
</table>