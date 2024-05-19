import * as universal from '../entries/pages/maps/_page.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/maps/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/maps/+page.ts";
export const imports = ["_app/immutable/nodes/8.DKY1O1B8.js","_app/immutable/chunks/scheduler.CkCCXbtb.js","_app/immutable/chunks/index.B1RyCL3d.js","_app/immutable/chunks/stores.Cag1-P-H.js","_app/immutable/chunks/index.DK4BdQOS.js","_app/immutable/chunks/localehistory-service.DDTQvjri.js","_app/immutable/chunks/Card.CrALJZr6.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/leaflet-src.BCgUuAGh.js"];
export const stylesheets = [];
export const fonts = [];
