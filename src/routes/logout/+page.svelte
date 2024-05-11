<script lang="ts">
  import { goto } from "$app/navigation";
  import { currentSession } from "$lib/stores";

  currentSession.set({ email: "", name: "", _id: "", token: "" });
  goto("/");
</script>
