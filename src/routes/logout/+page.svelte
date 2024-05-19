<script lang="ts">
  import { goto } from "$app/navigation";
  import { currentSession } from "$lib/stores";


    currentSession.set({ email: "", _id: "", token: "" });
    localStorage.removeItem("localehistory");
    goto("/");

</script>
