(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/CustomCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const TEXT_LIKE_SELECTORS = 'p, h1, h2, h3, h4, h5, h6, li, small, blockquote, cite, code, pre, span, a, label, dd, dt, figcaption';
let isTouchDevice = null;
function CustomCursor() {
    _s();
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const positionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const [isText, setIsText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CustomCursor.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (isTouchDevice === null) {
                isTouchDevice = 'ontouchstart' in window || (navigator.maxTouchPoints ?? 0) > 0;
            }
            return !isTouchDevice;
        }
    }["CustomCursor.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            if (isTouchDevice) return;
            const handleMouseMove = {
                "CustomCursor.useEffect.handleMouseMove": (event)=>{
                    positionRef.current = {
                        x: event.clientX,
                        y: event.clientY
                    };
                    if (!rafRef.current) {
                        rafRef.current = requestAnimationFrame({
                            "CustomCursor.useEffect.handleMouseMove": ()=>{
                                const el = cursorRef.current;
                                if (el) {
                                    el.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px) translate(-50%, -50%)`;
                                }
                                rafRef.current = null;
                            }
                        }["CustomCursor.useEffect.handleMouseMove"]);
                    }
                    const target = event.target;
                    const overFocusBox = Boolean(target?.closest?.('.focus-corners'));
                    const overText = Boolean(target?.closest?.(TEXT_LIKE_SELECTORS));
                    setIsVisible(!overFocusBox);
                    setIsText(!overFocusBox && overText);
                }
            }["CustomCursor.useEffect.handleMouseMove"];
            const handleMouseLeaveDocument = {
                "CustomCursor.useEffect.handleMouseLeaveDocument": (event)=>{
                    if (!event.relatedTarget || event.relatedTarget.nodeName === 'HTML') {
                        setIsVisible(false);
                    }
                }
            }["CustomCursor.useEffect.handleMouseLeaveDocument"];
            const handleMouseEnterDocument = {
                "CustomCursor.useEffect.handleMouseEnterDocument": ()=>{
                    setIsVisible(true);
                }
            }["CustomCursor.useEffect.handleMouseEnterDocument"];
            const handleWindowBlur = {
                "CustomCursor.useEffect.handleWindowBlur": ()=>setIsVisible(false)
            }["CustomCursor.useEffect.handleWindowBlur"];
            const handleWindowFocus = {
                "CustomCursor.useEffect.handleWindowFocus": ()=>setIsVisible(true)
            }["CustomCursor.useEffect.handleWindowFocus"];
            window.addEventListener('mousemove', handleMouseMove, {
                passive: true
            });
            document.documentElement.addEventListener('mouseenter', handleMouseEnterDocument);
            document.documentElement.addEventListener('mouseleave', handleMouseLeaveDocument);
            window.addEventListener('blur', handleWindowBlur);
            window.addEventListener('focus', handleWindowFocus);
            return ({
                "CustomCursor.useEffect": ()=>{
                    window.removeEventListener('mousemove', handleMouseMove);
                    document.documentElement.removeEventListener('mouseenter', handleMouseEnterDocument);
                    document.documentElement.removeEventListener('mouseleave', handleMouseLeaveDocument);
                    window.removeEventListener('blur', handleWindowBlur);
                    window.removeEventListener('focus', handleWindowFocus);
                    if (rafRef.current) cancelAnimationFrame(rafRef.current);
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cursorRef,
        className: `custom-cursor ${isText ? 'is-text' : ''} ${isVisible ? 'is-visible' : 'is-hidden'}`
    }, void 0, false, {
        fileName: "[project]/app/components/CustomCursor.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(CustomCursor, "dLu5O82/9UDtOeUXVIQ3KkTUCVg=");
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Analytics.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Analytics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
'use client';
;
;
const VercelAnalytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/@vercel/analytics/dist/react/index.mjs [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.Analytics), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/@vercel/analytics/dist/react/index.mjs [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = VercelAnalytics;
function Analytics() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VercelAnalytics, {}, void 0, false, {
        fileName: "[project]/app/components/Analytics.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_c1 = Analytics;
var _c, _c1;
__turbopack_context__.k.register(_c, "VercelAnalytics");
__turbopack_context__.k.register(_c1, "Analytics");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_7b2e24ea._.js.map