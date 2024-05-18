import { c as create_ssr_component, a as add_attribute, b as each, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { c as currentSession, s as subTitle, l as latestPlacemark } from "../../../chunks/stores.js";
import { s as subscribe } from "../../../chunks/utils.js";
const Coordinates = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lat = 0 } = $$props;
  let { lng = 0 } = $$props;
  if ($$props.lat === void 0 && $$bindings.lat && lat !== void 0)
    $$bindings.lat(lat);
  if ($$props.lng === void 0 && $$bindings.lng && lng !== void 0)
    $$bindings.lng(lng);
  return `<div class="box field is-left is-horizontal"><div class="field-label is-normal" data-svelte-h="svelte-31jdol"><label for="lng" class="label">Latitude</label></div> <div class="field-body"><div class="field"><p class="control is-expanded"><input id="lng" class="input" type="float"${add_attribute("value", lat, 0)}></p></div> <div class="field-label is-normal" data-svelte-h="svelte-19s9ina"><label for="lat" class="label">Longitude</label></div> <div class="field"><p class="control is-expanded"><input id="lng" class="input" type="float"${add_attribute("value", lng, 0)}></p></div></div></div>`;
});
const AddPlacemark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentSession;
  $$unsubscribe_currentSession = subscribe(currentSession, (value) => value);
  let title = "Placemark";
  let description = "Description";
  let year = 2003;
  let lat = 53.3498;
  let lng = -6.2603;
  let categories = ["Landmark", "Residence", "Event", "Other"];
  let selectedCategory = "Landmark";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${``} <form><div class="field"><label class="label" for="title" data-svelte-h="svelte-t6essl">Enter title:</label> <input class="input" id="title" name="title" type="string"${add_attribute("value", title, 0)}></div> <div class="field"><label class="label" for="year" data-svelte-h="svelte-9ab0qx">Enter year:</label> <input class="input" id="year" name="year" type="number"${add_attribute("value", year, 0)}></div> <div class="field"><label class="label" for="description" data-svelte-h="svelte-p5coud">Enter description:</label> <input class="input" id="description" name="description" type="string"${add_attribute("value", description, 0)}></div> <div class="field"><div class="control"><label class="label" for="category" data-svelte-h="svelte-7l653">Select category:</label> ${each(categories, (category) => {
      return `<input class="radio" type="radio"${add_attribute("value", category, 0)}${category === selectedCategory ? add_attribute("checked", true, 1) : ""}> ${escape(category)}`;
    })}</div></div> ${validate_component(Coordinates, "Coordinates").$$render(
      $$result,
      { lat, lng },
      {
        lat: ($$value) => {
          lat = $$value;
          $$settled = false;
        },
        lng: ($$value) => {
          lng = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="field" data-svelte-h="svelte-j2wbl9"><div class="control"><button class="button is-success is-fullwidth">Add</button></div></div></form>`;
  } while (!$$settled);
  $$unsubscribe_currentSession();
  return $$rendered;
});
const PlacemarkList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placemarks = [
    {
      title: "GPO",
      description: "The site of the 1916 Easter Rising. It is now a museum and post office. It's where the proclamation of independence was read out.",
      year: 2003,
      lat: 53.3498,
      lng: -6.2603,
      category: "Landmark",
      userid: ""
    }
  ] } = $$props;
  if ($$props.placemarks === void 0 && $$bindings.placemarks && placemarks !== void 0)
    $$bindings.placemarks(placemarks);
  return `<table class="table is-fullwidth"><thead data-svelte-h="svelte-1jhord1"><th>Title</th> <th>Category</th> <th>Open</th></thead> <tbody>${each(placemarks, (placemark) => {
    return `<tr><td>${escape(placemark.title)}</td> <td>${escape(placemark.category)}</td> <td><a href="${"/placemark/" + escape(placemark._id, true)}">Open</a></td> </tr>`;
  })}</tbody></table>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let placemarks = [];
  subTitle.set("Add a placemark");
  latestPlacemark.subscribe(async (placemark) => {
    if (placemark) {
      placemarks.push(placemark);
      placemarks = [...placemarks];
    }
  });
  return `${validate_component(PlacemarkList, "PlacemarkList").$$render($$result, { placemarks }, {}, {})} ${validate_component(AddPlacemark, "AddPlacemark").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
