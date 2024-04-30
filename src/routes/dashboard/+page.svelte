<script lang="ts">
  import { subTitle } from "$lib/stores";
  import AddStreet from "./AddStreet.svelte";
  import StreetList from "./StreetList.svelte";

  subTitle.set("Add a street");
</script>

<StreetList />
<AddStreet />
