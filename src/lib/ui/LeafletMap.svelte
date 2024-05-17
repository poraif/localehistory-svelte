<script lang="ts">
    import "leaflet/dist/leaflet.css";
    import { onMount } from "svelte";
    import type { Control, Map as LeafletMap } from "leaflet";
    import L from "leaflet";
  
    export let id = "home-map-id";
    export let height = 80;
    export let location = { lat: 53.2734, lng: -7.7783203 };
    export let zoom = 8;
    export let minZoom = 7;
    export let activeLayer = "Terrain";
  
    let imap: LeafletMap;
    let control: Control.Layers;
    let baseLayers: any;
	let categoryLayers: { [key: string]: L.LayerGroup } = {};

    onMount(async () => {
		
    const leaflet = await import("leaflet");

	  baseLayers = {
    Terrain: L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 17,
      attribution:
        'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    }),
    Satellite: L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
      attribution: "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
    }),
    NatGeoWorldMap: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
      maxZoom: 16
    })
    };

	// Initialize category layers
	categoryLayers = {
      Event: L.layerGroup(),
      Residence: L.layerGroup(),
      Landmark: L.layerGroup(),
      Other: L.layerGroup()
    };


      let defaultLayer = baseLayers[activeLayer];
      imap = leaflet.map(id, {
        center: [location.lat, location.lng],
        zoom: zoom,
        minZoom: minZoom,
        layers: [defaultLayer, ...Object.values(categoryLayers)]
      });
      control = leaflet.control.layers(baseLayers, categoryLayers).addTo(imap);
    });

    export function addMarker(lat: number, lng: number, popupText: string, category: string) {
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

  export function moveTo(lat: number, lng: number) {
    imap.flyTo({ lat: lat, lng: lng });
  }

  </script>
  
  <div {id} class="box" style="height: {height}vh" />
  