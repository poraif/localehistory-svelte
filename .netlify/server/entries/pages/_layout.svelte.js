import { s as subscribe } from "../../chunks/utils.js";
import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { s as subTitle, c as currentSession } from "../../chunks/stores.js";
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $subTitle, $$unsubscribe_subTitle;
  $$unsubscribe_subTitle = subscribe(subTitle, (value) => $subTitle = value);
  $$unsubscribe_subTitle();
  return `<section class="hero is-link is-small mt-6 mb-6"><div class="hero-body"><div class="container"><h1 class="title has-text-centered">${escape($subTitle)}</h1></div></div></section>`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentSession, $$unsubscribe_currentSession;
  $$unsubscribe_currentSession = subscribe(currentSession, (value) => $currentSession = value);
  $$unsubscribe_currentSession();
  return `<nav class="navbar is-full-width"><div class="container"><div class="navbar-brand" data-svelte-h="svelte-105kqap"><a class="navbar-item" href="/dashboard"><span class="icon"><i class="fas fa-monument"></i></span><span class="icon mr-1"><i class="fas fa-monument"></i></span><span><strong>Locale History</strong></span></a></div> <div id="navbarMenu" class="navbar-menu"><div class="navbar-end"><a class="navbar-item" href="/about" data-svelte-h="svelte-p5ftus">About</a> <a class="navbar-item" href="/dashboard" data-svelte-h="svelte-12czm7o">Dashboard</a> <a class="navbar-item" href="/maps" data-svelte-h="svelte-12742nq">Maps</a> <a class="navbar-item" href="/charts" data-svelte-h="svelte-1cs79cy">Charts</a> <a class="navbar-item" href="/logout">Logout [${escape($currentSession.email)}]</a></div> <div></div></div></div></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentSession, $$unsubscribe_currentSession;
  $$unsubscribe_currentSession = subscribe(currentSession, (value) => $currentSession = value);
  $$unsubscribe_currentSession();
  return `<div class="container">${$currentSession?.token ? `${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})} ${validate_component(Heading, "Heading").$$render($$result, {}, {}, {})}` : ``}  ${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
