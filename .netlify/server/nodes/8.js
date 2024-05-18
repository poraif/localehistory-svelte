import * as universal from '../entries/pages/maps/_page.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/maps/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/maps/+page.ts";
export const imports = ["_app/immutable/nodes/8.C5LWqs1R.js","_app/immutable/chunks/scheduler.gj9Ui2P9.js","_app/immutable/chunks/index.iyKYYZg5.js","_app/immutable/chunks/stores.rcSSR8AI.js","_app/immutable/chunks/index.a9pq-kgI.js","_app/immutable/chunks/localehistory-service.DDTQvjri.js","_app/immutable/chunks/Card.DWzQjf2x.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/leaflet-src.BCgUuAGh.js"];
export const stylesheets = [];
export const fonts = [];
