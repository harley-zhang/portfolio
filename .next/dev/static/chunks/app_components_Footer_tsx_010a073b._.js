(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const LINKS = {
    github: 'https://github.com/harley-zhang',
    linkedin: 'https://www.linkedin.com/in/harley-zhang/',
    twitter: 'https://x.com/harleyhzhang'
};
function Footer() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Footer.useEffect": ()=>{
            const handleShortcutKeys = {
                "Footer.useEffect.handleShortcutKeys": (e)=>{
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
            }["Footer.useEffect.handleShortcutKeys"];
            window.addEventListener('keydown', handleShortcutKeys);
            return ({
                "Footer.useEffect": ()=>window.removeEventListener('keydown', handleShortcutKeys)
            })["Footer.useEffect"];
        }
    }["Footer.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "fixed bottom-4 left-4 right-4 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-[2px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: LINKS.github,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "font-['SohneMono'] text-xs font-light text-inherit no-underline bg-black/10 dark:bg-white/10 backdrop-blur-md py-[5px] px-2 rounded-[2px] mr-0 inline-block transition-all duration-200 uppercase cursor-pointer focus-corners",
                    style: {
                        letterSpacing: '0',
                        '--hit-top': '1rem',
                        '--hit-left': '1rem',
                        '--hit-bottom': '1rem'
                    },
                    children: "[G] GITHUB"
                }, void 0, false, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: LINKS.linkedin,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "font-['SohneMono'] text-xs font-light text-inherit no-underline bg-black/10 dark:bg-white/10 backdrop-blur-md py-[5px] px-2 rounded-[2px] mr-0 inline-block transition-all duration-200 uppercase cursor-pointer focus-corners",
                    style: {
                        letterSpacing: '0',
                        '--hit-top': '1rem',
                        '--hit-bottom': '1rem'
                    },
                    children: "[L] LINKEDIN"
                }, void 0, false, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: LINKS.twitter,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "font-['SohneMono'] text-xs font-light text-inherit no-underline bg-black/10 dark:bg-white/10 backdrop-blur-md py-[5px] px-2 rounded-[2px] mr-0 inline-block transition-all duration-200 uppercase cursor-pointer focus-corners",
                    style: {
                        letterSpacing: '0',
                        '--hit-top': '1rem',
                        '--hit-right': '1rem',
                        '--hit-bottom': '1rem'
                    },
                    children: "[X] TWITTER"
                }, void 0, false, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Footer.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(Footer, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_Footer_tsx_010a073b._.js.map