import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { U as UserCredentials, S as SignX } from "../../../chunks/SignX.js";
const LoginForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${``} <form>${validate_component(UserCredentials, "UserCredentials").$$render(
      $$result,
      { email, password },
      {
        email: ($$value) => {
          email = $$value;
          $$settled = false;
        },
        password: ($$value) => {
          password = $$value;
          $$settled = false;
        }
      },
      {}
    )} <button class="button is-success is-fullwidth" data-svelte-h="svelte-1klwqp6">Log In</button></form>`;
  } while (!$$settled);
  return $$rendered;
});
const SignIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SignX, "SignX").$$render($$result, Object.assign({}, { x: "in" }, $$props), {}, {})}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="hero is-fullheight"><div class="hero-body"><div class="container"><div class="columns is-centered"><div class="column is-4"><h3 class="title has-text-black has-text-centered" data-svelte-h="svelte-ekeg2a">Login to Locale History</h3> <div class="box">${validate_component(LoginForm, "LoginForm").$$render($$result, {}, {}, {})}</div></div> <div class="column is-4">${validate_component(SignIn, "SignIn").$$render($$result, { redirectUrl: "/dashboard" }, {}, {})}</div></div></div></div></section>`;
});
export {
  Page as default
};
