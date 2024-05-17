<script lang="ts">
    import LoginForm from "./LoginForm.svelte";
    import SignIn from 'clerk-sveltekit/client/SignIn.svelte'
  </script>
  
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-4">
            <h3 class="title has-text-black has-text-centered">Login to Locale History</h3>
            <div class="box">
              <LoginForm />
            </div>
          </div>
          <div class="column is-4">
            <SignIn redirectUrl="/dashboard" />
          </div>
        </div>
      </div>
    </div>
  </section>
  