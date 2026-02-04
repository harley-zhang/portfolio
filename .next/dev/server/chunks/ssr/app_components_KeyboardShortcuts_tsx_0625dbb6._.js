module.exports = [
"[project]/app/components/KeyboardShortcuts.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KeyboardShortcuts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const LINKS = {
    github: 'https://github.com/harley-zhang',
    linkedin: 'https://www.linkedin.com/in/harley-zhang/',
    twitter: 'https://x.com/harleyhzhang'
};
function KeyboardShortcuts() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleShortcutKeys = (e)=>{
            if (e.repeat || e.ctrlKey || e.metaKey || e.altKey) return;
            const key = e.key.toLowerCase();
            if (key === 'g') {
                window.open(LINKS.github, '_blank', 'noopener,noreferrer');
            } else if (key === 'l') {
                window.open(LINKS.linkedin, '_blank', 'noopener,noreferrer');
            } else if (key === 'x') {
                window.open(LINKS.twitter, '_blank', 'noopener,noreferrer');
            }
        };
        window.addEventListener('keydown', handleShortcutKeys);
        return ()=>window.removeEventListener('keydown', handleShortcutKeys);
    }, []);
    return null;
}
}),
];

//# sourceMappingURL=app_components_KeyboardShortcuts_tsx_0625dbb6._.js.map