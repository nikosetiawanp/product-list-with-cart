import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.I6tdwZN3.js","_app/immutable/chunks/DMukmq1k.js","_app/immutable/chunks/CTrXZdPZ.js"];
export const stylesheets = ["_app/immutable/assets/0.CKPihHuG.css"];
export const fonts = [];
