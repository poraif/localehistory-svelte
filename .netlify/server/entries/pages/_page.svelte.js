import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const SplashScreen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="hero is-fullheight is-default is-bold" data-svelte-h="svelte-16owrin"><div class="hero-head"></div> <div class="hero-body"><div class="container has-text-centered"><div class="columns is-vcentered"><div class="column is-5"><figure class="image"><img class="object-fit" src="/boland.png" alt="boland"></figure></div> <div class="column is-6 is-offset-1"><h1 class="title is-2 mb-5"><span class="icon mr-5"><i class="fas fa-monument"></i></span> <p>Locale History</p></h1> <h2 class="subtitle is-4 mt-2">An interactive people&#39;s history map</h2> <p class="has-text-centered"><a class="button is-medium is-success" href="/signup"><span class="icon"><i class="fas fa-plus"></i></span><span>Sign Up</span></a> <a class="button is-medium is-link" href="/login"><span class="icon"><i class="fas fa-right-to-bracket"></i></span><span>Log in</span></a></p></div></div></div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SplashScreen, "SplashScreen").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
