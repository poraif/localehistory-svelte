

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3._wi-2mcp.js","_app/immutable/chunks/scheduler.CZL82nZn.js","_app/immutable/chunks/index.Cn3n0uUw.js","_app/immutable/chunks/stores.drOGU3pb.js","_app/immutable/chunks/index.DyOhRe7x.js"];
export const stylesheets = [];
export const fonts = [];
