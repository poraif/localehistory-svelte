<script lang="ts">
    import UserButton from 'clerk-sveltekit/client/UserButton.svelte'

	  import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte'
  </script>
  
  <nav class="navbar is-full-width">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/dashboard">
          <span class="icon"> <i class="fas fa-monument"></i></span><span class="icon mr-1"> 
            <i class="fas fa-monument"></i></span><span><strong>Locale History</strong>
            </span>
        </a>
      </div>
      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" href="/about"><UserButton/></a>    
          <a class="navbar-item" href="/logout"><SignedOut/></a>
        </div>
        <div></div>
      </div>
    </div>
  </nav>
  