import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { U as UserCredentials, S as SignX } from "../../../chunks/SignX.js";
const UserDetails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { firstName = "" } = $$props;
  let { lastName = "" } = $$props;
  if ($$props.firstName === void 0 && $$bindings.firstName && firstName !== void 0)
    $$bindings.firstName(firstName);
  if ($$props.lastName === void 0 && $$bindings.lastName && lastName !== void 0)
    $$bindings.lastName(lastName);
  return ` <label class="label" data-svelte-h="svelte-1xxpr66">Name</label> <div class="field is-horizontal"><div class="field-body"><div class="field"><div class="control has-icons-left"><input class="input" type="text" placeholder="First Name" name="firstName"${add_attribute("value", firstName, 0)}> <span class="icon is-small is-left" data-svelte-h="svelte-npw81h"><i class="fa fa-id-card"></i></span></div></div> <div class="field"><div class="control has-icons-left"><input class="input" type="text" placeholder="Last Name" name="lastName"${add_attribute("value", lastName, 0)}> <span class="icon is-small is-left" data-svelte-h="svelte-npw81h"><i class="fa fa-id-card"></i></span></div></div></div></div>`;
});
const SignupForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let firstName = "";
  let lastName = "";
  let email = "";
  let password = "";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${``} <form>${validate_component(UserDetails, "UserDetails").$$render(
      $$result,
      { firstName, lastName },
      {
        firstName: ($$value) => {
          firstName = $$value;
          $$settled = false;
        },
        lastName: ($$value) => {
          lastName = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(UserCredentials, "UserCredentials").$$render(
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
    )} <button class="button is-success is-fullwidth" data-svelte-h="svelte-1ly26b4">Create Account</button> <br></form>`;
  } while (!$$settled);
  return $$rendered;
});
const SignUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SignX, "SignX").$$render($$result, Object.assign({}, { x: "up" }, $$props), {}, {})}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="hero is-fullheight"><div class="hero-body"><div class="container"><div class="columns is-centered"><div class="column is-4"><h3 class="title has-text-black has-text-centered" data-svelte-h="svelte-1wcb9y1">Sign up to Locale History</h3> <div class="box">${validate_component(SignupForm, "SignupForm").$$render($$result, {}, {}, {})} <p class="has-text-centered" data-svelte-h="svelte-c2gunn">Already have an account? <a href="/login" data-cy="login-redirect">Login Here</a></p></div></div> <div class="column is-4">${validate_component(SignUp, "SignUp").$$render($$result, { redirectUrl: "/dashboard" }, {}, {})}</div></div></div></div></section>`;
});
export {
  Page as default
};
