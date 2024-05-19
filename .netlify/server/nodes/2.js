

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.S50_2TGq.js","_app/immutable/chunks/scheduler.CZL82nZn.js","_app/immutable/chunks/index.Cn3n0uUw.js"];
export const stylesheets = [];
export const fonts = [];
