

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Br6D-J6n.js","_app/immutable/chunks/scheduler.CkCCXbtb.js","_app/immutable/chunks/index.B1RyCL3d.js"];
export const stylesheets = [];
export const fonts = [];
