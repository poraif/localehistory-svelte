<script lang="ts">
  import { goto } from "$app/navigation";
  import { currentSession } from "$lib/stores";

  function logout() {
    currentSession.set({ email: "", _id: "", token: "" });
    localStorage.removeItem("localehistory");
    goto("/");
  }
</script>

<button on:click={logout}>Logout</button>