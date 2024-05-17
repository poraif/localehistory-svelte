<script lang="ts">
    import SignupForm from "./SignupForm.svelte";
    import SignUp from 'clerk-sveltekit/client/SignUp.svelte'
  </script>

  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-4">
            <h3 class="title has-text-black has-text-centered">Sign up to Locale History</h3>
            <div class="box">
              <SignupForm/>
              <p class="has-text-centered">Already have an account? <a href="/login" data-cy="login-redirect">Login Here</a></p>
            </div>
          </div>
          <div class="column is-4">
            <SignUp redirectUrl="/dashboard" />
          </div>
        </div>
      </div>
    </div>
  </section>