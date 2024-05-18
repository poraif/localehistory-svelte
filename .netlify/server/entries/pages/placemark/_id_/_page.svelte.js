import { c as create_ssr_component, d as createEventDispatcher, a as add_attribute, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { s as subTitle } from "../../../../chunks/stores.js";
import { C as Card } from "../../../../chunks/Card.js";
/* empty css                         */
import L from "leaflet";
const UploadWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placemarkId } = $$props;
  createEventDispatcher();
  if ($$props.placemarkId === void 0 && $$bindings.placemarkId && placemarkId !== void 0)
    $$bindings.placemarkId(placemarkId);
  return `<button class="button is-success" data-svelte-h="svelte-1ecrpxe">Upload image</button>`;
});
const PlacemarkMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "home-map-id" } = $$props;
  let { height = 80 } = $$props;
  let { location = { lat: 53.2734, lng: -7.7783203 } } = $$props;
  let { zoom = 8 } = $$props;
  let { minZoom = 7 } = $$props;
  let { activeLayer = "Terrain" } = $$props;
  let imap;
  function addPlacemarkMarker(lat, lng, popupText) {
    const marker = L.marker([lat, lng]).addTo(imap);
    const popup = L.popup({ autoClose: false, closeOnClick: false });
    popup.setContent(popupText);
    marker.bindPopup(popup);
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.location === void 0 && $$bindings.location && location !== void 0)
    $$bindings.location(location);
  if ($$props.zoom === void 0 && $$bindings.zoom && zoom !== void 0)
    $$bindings.zoom(zoom);
  if ($$props.minZoom === void 0 && $$bindings.minZoom && minZoom !== void 0)
    $$bindings.minZoom(minZoom);
  if ($$props.activeLayer === void 0 && $$bindings.activeLayer && activeLayer !== void 0)
    $$bindings.activeLayer(activeLayer);
  if ($$props.addPlacemarkMarker === void 0 && $$bindings.addPlacemarkMarker && addPlacemarkMarker !== void 0)
    $$bindings.addPlacemarkMarker(addPlacemarkMarker);
  return `<div${add_attribute("id", id, 0)} class="box" style="${"height: " + escape(height, true) + "vh"}"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let placemarkMap;
  subTitle.set(`${data.placemark.title}`);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<section class="section"><div><table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"><tbody><tr><td data-svelte-h="svelte-wv50d4">Description</td> <td>${escape(data.placemark.description)}</td></tr> <tr><td data-svelte-h="svelte-1cx12ta">Category</td> <td>${escape(data.placemark.category)}</td></tr> <tr><td data-svelte-h="svelte-ma4oiv">Year</td> <td>${escape(data.placemark.year)}</td></tr> <tr><td data-svelte-h="svelte-1pwgnam">Latitude</td> <td>${escape(data.placemark.lat)}</td></tr> <tr><td data-svelte-h="svelte-1nmgv85">Longitude</td> <td>${escape(data.placemark.lng)}</td></tr></tbody></table></div></section> ${``} <form><div class="field"><div class="control">${data.placemark._id ? `${validate_component(UploadWidget, "UploadWidget").$$render($$result, { placemarkId: data.placemark._id }, {}, {})}` : ``}</div></div> <div class="field"><div class="control">${``}</div></div></form> ${validate_component(Card, "Card").$$render($$result, { title: "Placemark map" }, {}, {
      default: () => {
        return `${validate_component(PlacemarkMap, "PlacemarkMap").$$render(
          $$result,
          {
            id: data.placemark.title,
            height: 60,
            this: placemarkMap
          },
          {
            this: ($$value) => {
              placemarkMap = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
