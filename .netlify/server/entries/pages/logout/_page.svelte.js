import { c as create_ssr_component } from "../../../chunks/ssr.js";
import { g as goto } from "../../../chunks/client.js";
import { c as currentSession } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  currentSession.set({ email: "", _id: "", token: "" });
  localStorage.removeItem("localehistory");
  goto();
  return ``;
});
export {
  Page as default
};
