import { c as create_ssr_component } from "../../../chunks/ssr.js";
import { s as subTitle } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  subTitle.set("About Locale History");
  return `<section class="hero is-fullheight is-default is-bold" data-svelte-h="svelte-vmnt1d"><div class="hero-head"></div> <div class="hero-body"><div class="container has-text-centered"><div class="columns is-vcentered"><div class="column is-5"><figure class="image"><img class="object-fit" src="/larkin.png" alt="larkin"></figure></div> <div class="column is-6 is-offset-1"><h1 class="title is-2 mb-5"><span class="icon mr-5"><i class="fas fa-monument"></i></span> <p>About</p></h1> <h2 class="subtitle is-4 mt-2">Locale History - An interactive people&#39;s history map</h2> <p class="has-text-centered">Locale History is a project that aims to create an interactive people&#39;s history map. 
              Add your own placemarks with your insider knowledge, and get statistics on what you share the most, as well as a clickable map with your placemarks on it.</p></div></div></div></div></section>`;
});
export {
  Page as default
};
