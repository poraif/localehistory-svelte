<script lang="ts">
    import { currentSession } from "$lib/stores";
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
          <a class="navbar-item" href="/about"> About </a>
          <a class="navbar-item" href="/dashboard"> Dashboard </a>
          <a class="navbar-item" href="/maps"> Maps </a>
          <a class="navbar-item" href="/charts"> Charts </a>
          <a class="navbar-item" href="/logout"> Logout [{$currentSession.email}]</a>
        </div>
        <div></div>
      </div>
    </div>
  </nav>
  