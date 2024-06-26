import { s as subscribe } from "../../chunks/utils.js";
import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { s as subTitle, c as currentSession } from "../../chunks/stores.js";
import { w as writable } from "../../chunks/index.js";
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
const clerk = writable(null);
const ClerkLoaded = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $clerk, $$unsubscribe_clerk;
  $$unsubscribe_clerk = subscribe(clerk, (value) => $clerk = value);
  $$unsubscribe_clerk();
  return `${$clerk ? `${slots.default ? slots.default({ clerk: $clerk }) : ``}` : ``}`;
});
const SignedIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(ClerkLoaded, "ClerkLoaded").$$render($$result, {}, {}, {
    default: ({ clerk: clerk2 }) => {
      return `${clerk2 && clerk2.user ? `${slots.default ? slots.default({ user: clerk2.user }) : ``}` : ``}`;
    }
  })}`;
});
const UserButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_clerk;
  $$unsubscribe_clerk = subscribe(clerk, (value) => value);
  $$unsubscribe_clerk();
  return `<div></div>`;
});
const ClerkMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="navbar is-full-width"><div class="container"><div class="navbar-brand" data-svelte-h="svelte-105kqap"><a class="navbar-item" href="/dashboard"><span class="icon"><i class="fas fa-monument"></i></span><span class="icon mr-1"><i class="fas fa-monument"></i></span><span><strong>Locale History</strong></span></a></div> <div id="navbarMenu" class="navbar-menu"><div class="navbar-end"><a class="navbar-item" href="/about">${validate_component(UserButton, "UserButton").$$render($$result, {}, {}, {})}</a> <a class="navbar-item" href="/logout" data-svelte-h="svelte-17s20eq">Logout</a></div> <div></div></div></div></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentSession, $$unsubscribe_currentSession;
  $$unsubscribe_currentSession = subscribe(currentSession, (value) => $currentSession = value);
  $$unsubscribe_currentSession();
  return `<div class="container">${$currentSession?.token ? `${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})} ${validate_component(Heading, "Heading").$$render($$result, {}, {}, {})}` : ``} ${validate_component(SignedIn, "SignedIn").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(ClerkMenu, "ClerkMenu").$$render($$result, {}, {}, {})}`;
    }
  })} ${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
