(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/KeyboardShortcuts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KeyboardShortcuts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const LINKS = {
    github: 'https://github.com/harley-zhang',
    linkedin: 'https://www.linkedin.com/in/harley-zhang/',
    twitter: 'https://x.com/harleyhzhang'
};
function KeyboardShortcuts() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KeyboardShortcuts.useEffect": ()=>{
            const handleShortcutKeys = {
                "KeyboardShortcuts.useEffect.handleShortcutKeys": (e)=>{
                    if (e.repeat || e.ctrlKey || e.metaKey || e.altKey) return;
                    const key = e.key.toLowerCase();
                    if (key === 'g') {
                        window.open(LINKS.github, '_blank', 'noopener,noreferrer');
                    } else if (key === 'l') {
                        window.open(LINKS.linkedin, '_blank', 'noopener,noreferrer');
                    } else if (key === 'x') {
                        window.open(LINKS.twitter, '_blank', 'noopener,noreferrer');
                    }
                }
            }["KeyboardShortcuts.useEffect.handleShortcutKeys"];
            window.addEventListener('keydown', handleShortcutKeys);
            return ({
                "KeyboardShortcuts.useEffect": ()=>window.removeEventListener('keydown', handleShortcutKeys)
            })["KeyboardShortcuts.useEffect"];
        }
    }["KeyboardShortcuts.useEffect"], []);
    return null;
}
_s(KeyboardShortcuts, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = KeyboardShortcuts;
var _c;
__turbopack_context__.k.register(_c, "KeyboardShortcuts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_KeyboardShortcuts_tsx_819d15b4._.js.map