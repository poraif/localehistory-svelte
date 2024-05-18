import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { s as subTitle } from "../../../chunks/stores.js";
import { C as Card } from "../../../chunks/Card.js";
/* empty css                      */
import L from "leaflet";
const LeafletMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "home-map-id" } = $$props;
  let { height = 80 } = $$props;
  let { location = { lat: 53.2734, lng: -7.7783203 } } = $$props;
  let { zoom = 8 } = $$props;
  let { minZoom = 7 } = $$props;
  let { activeLayer = "Terrain" } = $$props;
  let imap;
  let categoryLayers = {};
  function addMarker(lat, lng, popupText, category) {
    const marker = L.marker([lat, lng]).addTo(imap);
    const popup = L.popup({ autoClose: false, closeOnClick: false });
    popup.setContent(popupText);
    marker.bindPopup(popup);
    if (category in categoryLayers) {
      categoryLayers[category].addLayer(marker);
    } else {
      console.error(`Unknown category: ${category}`);
    }
  }
  function addPlacemarkMarker(lat, lng, popupText) {
    const marker = L.marker([lat, lng]).addTo(imap);
    const popup = L.popup({ autoClose: false, closeOnClick: false });
    popup.setContent(popupText);
    marker.bindPopup(popup);
  }
  function moveTo(lat, lng) {
    imap.flyTo({ lat, lng });
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
  if ($$props.addMarker === void 0 && $$bindings.addMarker && addMarker !== void 0)
    $$bindings.addMarker(addMarker);
  if ($$props.addPlacemarkMarker === void 0 && $$bindings.addPlacemarkMarker && addPlacemarkMarker !== void 0)
    $$bindings.addPlacemarkMarker(addPlacemarkMarker);
  if ($$props.moveTo === void 0 && $$bindings.moveTo && moveTo !== void 0)
    $$bindings.moveTo(moveTo);
  return `<div${add_attribute("id", id, 0)} class="box" style="${"height: " + escape(height, true) + "vh"}"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  subTitle.set("Placemarks map");
  let map;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Card, "Card").$$render($$result, { title: "Placemarks map" }, {}, {
      default: () => {
        return `${validate_component(LeafletMap, "LeafletMap").$$render(
          $$result,
          { height: 60, this: map },
          {
            this: ($$value) => {
              map = $$value;
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
