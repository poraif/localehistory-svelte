

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.xh2Trny6.js","_app/immutable/chunks/scheduler.gj9Ui2P9.js","_app/immutable/chunks/index.iyKYYZg5.js"];
export const stylesheets = [];
export const fonts = [];
