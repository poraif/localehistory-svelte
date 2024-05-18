import { c as create_ssr_component, a as add_attribute } from "./ssr.js";
import "./client.js";
const UserCredentials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { email = "" } = $$props;
  let { password = "" } = $$props;
  if ($$props.email === void 0 && $$bindings.email && email !== void 0)
    $$bindings.email(email);
  if ($$props.password === void 0 && $$bindings.password && password !== void 0)
    $$bindings.password(password);
  return `<div class="field"> <label class="label" data-svelte-h="svelte-adsx43">Email</label> <div class="control has-icons-left"><input class="input" type="text" placeholder="Email" name="email"${add_attribute("value", email, 0)}> <span class="icon is-small is-left" data-svelte-h="svelte-e59uzr"><i class="fa fa-envelope"></i></span></div></div> <div class="field"> <label class="label" data-svelte-h="svelte-z2bh7c">Password</label> <div class="control has-icons-left"><input class="input" type="password" placeholder="Password" name="password"${add_attribute("value", password, 0)}> <span class="icon is-small is-left" data-svelte-h="svelte-1g76bv8"><i class="fa fa-key"></i></span></div></div>`;
});
const SignX = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let afterSignXUrl;
  let { x = "in" } = $$props;
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  afterSignXUrl = x === "in" ? "afterSignInUrl" : "afterSignUpUrl";
  $$props.redirectUrl || $$props[afterSignXUrl] || "/";
  return `${``}`;
});
export {
  SignX as S,
  UserCredentials as U
};
