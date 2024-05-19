

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.7AkWWrFv.js","_app/immutable/chunks/scheduler.CZL82nZn.js","_app/immutable/chunks/index.Cn3n0uUw.js","_app/immutable/chunks/entry.Dj6pSPUF.js","_app/immutable/chunks/index.DyOhRe7x.js"];
export const stylesheets = [];
export const fonts = [];
