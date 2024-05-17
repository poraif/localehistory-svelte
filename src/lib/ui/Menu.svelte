<script lang="ts">
    import { currentSession } from "$lib/stores";
    import UserButton from 'clerk-sveltekit/client/UserButton.svelte'
  	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte'
  	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte'
  </script>
  
  <nav class="navbar is-full-width">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/dashboard">
          <span class="icon"> <i class="fas fa-map-marker-alt"></i></span><span class="icon mr-1"> 
            <i class="far fa-money-bill-alt"></i></span><span><strong>Locale History</strong>
            </span>
        </a>
      </div>
      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" href="/about"> About </a>
          <a class="navbar-item" href="/dashboard"> Dashboard </a>
          <a class="navbar-item" href="/maps"> Maps </a>
          <a class="navbar-item" href="/charts"> Charts </a>
          <a class="navbar-item" href="/profile"> Profile </a>
          <a class="navbar-item" href="/logout"> Logout [{$currentSession.email}]</a>
        </div>
        <div></div>
      </div>
    </div>
  </nav>
  