import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Link, Links, Meta, Outlet, Scripts, ServerRouter, UNSAFE_withComponentProps, useLocation, useNavigate, useSearchParams } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { AlertCircle, ArrowLeft, ArrowRight, Award, BarChart3, BookOpen, Bot, Briefcase, Building2, Calendar, Camera, Check, CheckCircle2, CheckSquare, ChevronDown, ChevronUp, Code2, Coins, Compass, Crown, FileText, Film, Gift, Globe, Globe2, GraduationCap, Handshake, Heart, Image, LayoutGrid, Lightbulb, Link2, Mail, MapPin, Megaphone, Menu, MessageCircle, MessageSquare, Monitor, MonitorSmartphone, Palette, PenTool, Phone, PhoneCall, Play, Rocket, Search, Send, ShieldCheck, Smartphone, Sparkles, Square, Star, Target, TrendingUp, User, UserCheck, UserPlus, Users, Users2, Volume2, VolumeX, Wallet, X, Zap } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
// \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
// node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), 6e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
// src/components/layout/Navbar.tsx
var Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const location = useLocation();
	const handleMobileClick = () => {
		setMobileMenuOpen(false);
		setDropdownOpen(false);
	};
	return /* @__PURE__ */ jsx("header", {
		className: "navbar",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container nav-container",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "logo-container",
					"aria-label": "sBLOOM Home",
					onClick: handleMobileClick,
					children: /* @__PURE__ */ jsx("img", {
						src: "/sbloom-logo-gold-v2.png?v=3",
						alt: "sBLOOM Logo",
						className: "navbar-logo-img"
					})
				}),
				/* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", {
					className: `nav-links ${mobileMenuOpen ? "mobile-open" : ""}`,
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/",
							className: `nav-link ${location.pathname === "/" ? "active" : ""}`,
							"aria-current": location.pathname === "/" ? "page" : void 0,
							onClick: handleMobileClick,
							children: "Home"
						}) }),
						/* @__PURE__ */ jsxs("li", {
							className: "nav-dropdown-wrapper",
							onMouseEnter: () => !mobileMenuOpen && setDropdownOpen(true),
							onMouseLeave: () => !mobileMenuOpen && setDropdownOpen(false),
							children: [/* @__PURE__ */ jsxs("button", {
								className: `nav-link nav-dropdown-btn ${location.pathname.includes("/industries") ? "active" : ""}`,
								onClick: () => mobileMenuOpen && setDropdownOpen(!dropdownOpen),
								children: ["Industries ", /* @__PURE__ */ jsx(ChevronDown, {
									size: 16,
									className: `dropdown-chevron ${dropdownOpen ? "rotated" : ""}`
								})]
							}), /* @__PURE__ */ jsx(AnimatePresence, { children: dropdownOpen && /* @__PURE__ */ jsx(motion.div, {
								initial: {
									opacity: 0,
									y: 10
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: 5
								},
								transition: { duration: .2 },
								className: "nav-dropdown",
								style: mobileMenuOpen ? {
									transform: "none",
									left: 0
								} : {
									transform: "translateX(-50%)",
									left: "50%"
								},
								children: [
									{
										name: "Education",
										href: "/industries/education"
									},
									{
										name: "Healthcare",
										href: "/industries/healthcare"
									},
									{
										name: "Professional Services",
										href: "/industries/professional-services"
									}
								].map((ind) => /* @__PURE__ */ jsx(Link, {
									to: ind.href,
									className: `dropdown-item ${location.pathname === ind.href ? "active" : ""}`,
									"aria-current": location.pathname === ind.href ? "page" : void 0,
									onClick: handleMobileClick,
									children: /* @__PURE__ */ jsx("span", {
										className: "dropdown-item-title",
										children: ind.name
									})
								}, ind.name))
							}) })]
						}),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/solutions",
							className: `nav-link ${location.pathname.includes("/solutions") ? "active" : ""}`,
							"aria-current": location.pathname === "/solutions" ? "page" : void 0,
							onClick: handleMobileClick,
							children: "Solutions"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/how-it-works",
							className: `nav-link ${location.pathname === "/how-it-works" ? "active" : ""}`,
							"aria-current": location.pathname === "/how-it-works" ? "page" : void 0,
							onClick: handleMobileClick,
							children: "How It Works"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/about",
							className: `nav-link ${location.pathname === "/about" ? "active" : ""}`,
							"aria-current": location.pathname === "/about" ? "page" : void 0,
							onClick: handleMobileClick,
							children: "About"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/proof-of-work",
							className: `nav-link ${location.pathname === "/proof-of-work" ? "active" : ""}`,
							"aria-current": location.pathname === "/proof-of-work" ? "page" : void 0,
							onClick: handleMobileClick,
							children: "Proof of Work"
						}) }),
						/* @__PURE__ */ jsx("li", {
							className: "nav-workspace-item",
							style: {
								marginLeft: "10px",
								borderLeft: "1px solid rgba(229, 169, 60, 0.25)",
								paddingLeft: "16px"
							},
							children: /* @__PURE__ */ jsx("a", {
								href: "https://sbloom.ottobon.in/provider",
								className: "nav-link",
								target: "_blank",
								rel: "noopener noreferrer",
								style: {
									fontSize: "0.78rem",
									textTransform: "uppercase",
									letterSpacing: "0.8px",
									color: "#D9A52E"
								},
								onClick: handleMobileClick,
								children: "Affiliate Marketing"
							})
						}),
						/* @__PURE__ */ jsx("li", {
							className: "nav-cta-item",
							children: /* @__PURE__ */ jsx(Link, {
								to: "/contact",
								className: "btn btn-primary btn-nav",
								onClick: handleMobileClick,
								children: "Talk to sBLOOM"
							})
						})
					]
				}) }),
				/* @__PURE__ */ jsx("button", {
					className: "mobile-toggle",
					onClick: () => setMobileMenuOpen(!mobileMenuOpen),
					"aria-label": "Toggle navigation menu",
					children: mobileMenuOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
				})
			]
		})
	});
};
// src/components/layout/Footer.tsx
var Footer = () => {
	if (useLocation().pathname === "/contact") return null;
	return /* @__PURE__ */ jsx(motion.footer, {
		className: "footer-premium",
		initial: {
			opacity: 0,
			y: 20
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .1
		},
		transition: {
			duration: .6,
			ease: "easeOut"
		},
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "footer-main",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "footer-brand",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/",
							"aria-label": "sBLOOM Home",
							className: "footer-logo-link",
							children: /* @__PURE__ */ jsx("img", {
								src: "/sbloom-logo-gold-v2.png?v=3",
								alt: "sBLOOM Logo",
								className: "footer-logo"
							})
						}),
						/* @__PURE__ */ jsx("p", {
							className: "footer-desc",
							children: "S-Bloom is a specialized digital growth partner for expertise-led organizations in healthcare, education, and professional services."
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/contact",
							className: "footer-cta-link",
							children: ["Talk to sBLOOM ", /* @__PURE__ */ jsx("span", {
								className: "arrow",
								children: "→"
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "footer-links-grid",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "footer-nav-col",
							children: [
								/* @__PURE__ */ jsx("h4", {
									className: "footer-nav-title",
									children: "INDUSTRIES"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/industries/education",
									className: "footer-nav-link",
									children: "Education"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/industries/healthcare",
									className: "footer-nav-link",
									children: "Healthcare"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/industries/professional-services",
									className: "footer-nav-link",
									children: "Consulting & Professional Services"
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "footer-nav-col",
							children: [
								/* @__PURE__ */ jsx("h4", {
									className: "footer-nav-title",
									children: "SOLUTIONS"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/solutions/build",
									className: "footer-nav-link",
									children: "Build"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/solutions/create",
									className: "footer-nav-link",
									children: "Create"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/solutions/promote",
									className: "footer-nav-link",
									children: "Promote"
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "footer-nav-col",
							children: [
								/* @__PURE__ */ jsx("h4", {
									className: "footer-nav-title",
									children: "COMPANY"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/about",
									className: "footer-nav-link",
									children: "About"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/how-it-works",
									className: "footer-nav-link",
									children: "How It Works"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/contact",
									className: "footer-nav-link",
									children: "Contact"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/creative-workspace",
									className: "footer-nav-link",
									children: "Creative Workspace"
								})
							]
						})
					]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "footer-bottom-bar",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "footer-bottom-left",
						children: /* @__PURE__ */ jsxs("p", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" S-Bloom. All rights reserved."
						] })
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "footer-bottom-center",
						children: [
							/* @__PURE__ */ jsx(Link, {
								to: "/industries/healthcare",
								children: "Healthcare"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "dot",
								children: "•"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/industries/education",
								children: "Education"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "dot",
								children: "•"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/industries/professional-services",
								children: "Consulting"
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "footer-bottom-right",
						children: /* @__PURE__ */ jsxs("div", {
							className: "contact-tiles-wrapper",
							children: [
								/* @__PURE__ */ jsx(ContactTile, {
									letter: "C",
									label: "Instagram",
									icon: /* @__PURE__ */ jsx(Camera, { size: 16 }),
									href: "https://instagram.com",
									external: true
								}),
								/* @__PURE__ */ jsx(ContactTile, {
									letter: "O",
									label: "WhatsApp",
									icon: /* @__PURE__ */ jsx(MessageCircle, { size: 16 }),
									href: "https://wa.me/",
									external: true
								}),
								/* @__PURE__ */ jsx(ContactTile, {
									letter: "N",
									label: "LinkedIn",
									icon: /* @__PURE__ */ jsx(Briefcase, { size: 16 }),
									href: "https://linkedin.com",
									external: true
								}),
								/* @__PURE__ */ jsx(ContactTile, {
									letter: "T",
									label: "Email",
									icon: /* @__PURE__ */ jsx(Mail, { size: 16 }),
									href: "mailto:hello@s-bloom.com",
									external: true
								}),
								/* @__PURE__ */ jsx(ContactTile, {
									letter: "A",
									label: "Phone",
									icon: /* @__PURE__ */ jsx(Phone, { size: 16 }),
									href: "tel:+1234567890",
									external: true
								}),
								/* @__PURE__ */ jsx(ContactTile, {
									letter: "C",
									label: "Website",
									icon: /* @__PURE__ */ jsx(Globe, { size: 16 }),
									href: "/",
									external: false
								}),
								/* @__PURE__ */ jsx(ContactTile, {
									letter: "T",
									label: "Contact",
									icon: /* @__PURE__ */ jsx(ArrowRight, { size: 16 }),
									href: "/contact",
									external: false
								})
							]
						})
					})
				]
			})]
		})
	});
};
var ContactTile = ({ letter, label, icon, href, external }) => {
	const isInternal = !external;
	const content = /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: "tile-letter",
		children: letter
	}), /* @__PURE__ */ jsxs("div", {
		className: "tile-reveal",
		children: [/* @__PURE__ */ jsx("span", {
			className: "tile-icon",
			children: icon
		}), /* @__PURE__ */ jsx("span", {
			className: "tile-label",
			children: label
		})]
	})] });
	if (isInternal) return /* @__PURE__ */ jsx(Link, {
		to: href,
		className: "contact-tile",
		children: content
	});
	return /* @__PURE__ */ jsx("a", {
		href,
		target: "_blank",
		rel: "noopener noreferrer",
		className: "contact-tile",
		children: content
	});
};
// src/components/common/BloomTransition.tsx
var BloomTransitionContext = createContext({
	navigateWithBloom: () => {},
	isTransitioning: false
});
var TOTAL_TRANSITION_MS = 1e3;
var NAV_SWITCH_MS = 550;
var WATCHDOG_MAX_MS = 1800;
var PETAL_CONFIGS = [
	{
		id: 0,
		restRot: 0,
		bloomRot: 0,
		stagger: 0
	},
	{
		id: 1,
		restRot: 72,
		bloomRot: 42,
		stagger: 12
	},
	{
		id: 2,
		restRot: 144,
		bloomRot: 84,
		stagger: 22
	},
	{
		id: 3,
		restRot: -144,
		bloomRot: -84,
		stagger: 22
	},
	{
		id: 4,
		restRot: -72,
		bloomRot: -42,
		stagger: 12
	}
];
var GLITTER_PARTICLES = [
	{
		id: 1,
		x: 50,
		y: 10,
		tx: 0,
		ty: -5,
		size: 2.2,
		delay: 10,
		isStar: true
	},
	{
		id: 2,
		x: 43,
		y: 17,
		tx: -3,
		ty: -4,
		size: 1.8,
		delay: 20,
		isStar: false
	},
	{
		id: 3,
		x: 57,
		y: 17,
		tx: 3,
		ty: -4,
		size: 1.8,
		delay: 25,
		isStar: false
	},
	{
		id: 4,
		x: 74,
		y: 30,
		tx: 5,
		ty: -3,
		size: 2.4,
		delay: 30,
		isStar: true
	},
	{
		id: 5,
		x: 87,
		y: 48,
		tx: 6,
		ty: 2,
		size: 2,
		delay: 40,
		isStar: false
	},
	{
		id: 6,
		x: 68,
		y: 56,
		tx: 3,
		ty: 3,
		size: 1.6,
		delay: 50,
		isStar: false
	},
	{
		id: 7,
		x: 26,
		y: 30,
		tx: -5,
		ty: -3,
		size: 2.4,
		delay: 30,
		isStar: true
	},
	{
		id: 8,
		x: 13,
		y: 48,
		tx: -6,
		ty: 2,
		size: 2,
		delay: 40,
		isStar: false
	},
	{
		id: 9,
		x: 32,
		y: 56,
		tx: -3,
		ty: 3,
		size: 1.6,
		delay: 50,
		isStar: false
	},
	{
		id: 10,
		x: 81,
		y: 62,
		tx: 4,
		ty: 4,
		size: 1.7,
		delay: 45,
		isStar: false
	},
	{
		id: 11,
		x: 19,
		y: 62,
		tx: -4,
		ty: 4,
		size: 1.7,
		delay: 45,
		isStar: false
	},
	{
		id: 12,
		x: 50,
		y: 32,
		tx: 0,
		ty: -2,
		size: 1.6,
		delay: 35,
		isStar: true
	}
];
var BloomTransition = () => {
	const navigate = useNavigate();
	const [transitionState, setTransitionState] = useState("idle");
	const isTransitioningRef = useRef(false);
	const pendingDestRef = useRef(null);
	const timerNavRef = useRef(null);
	const timerFinishRef = useRef(null);
	const timerWatchdogRef = useRef(null);
	const isInitialMountRef = useRef(true);
	const clearAllTimers = useCallback(() => {
		if (timerNavRef.current) {
			clearTimeout(timerNavRef.current);
			timerNavRef.current = null;
		}
		if (timerFinishRef.current) {
			clearTimeout(timerFinishRef.current);
			timerFinishRef.current = null;
		}
		if (timerWatchdogRef.current) {
			clearTimeout(timerWatchdogRef.current);
			timerWatchdogRef.current = null;
		}
	}, []);
	const triggerBloomNavigation = useCallback((targetUrl) => {
		if (typeof window === "undefined") return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			navigate(targetUrl);
			window.scrollTo(0, 0);
			return;
		}
		if (isTransitioningRef.current) {
			if (pendingDestRef.current === targetUrl) return;
			pendingDestRef.current = targetUrl;
			return;
		}
		isTransitioningRef.current = true;
		pendingDestRef.current = targetUrl;
		setTransitionState("active");
		timerWatchdogRef.current = setTimeout(() => {
			setTransitionState("idle");
			isTransitioningRef.current = false;
			pendingDestRef.current = null;
			clearAllTimers();
		}, WATCHDOG_MAX_MS);
		timerNavRef.current = setTimeout(() => {
			const dest = pendingDestRef.current;
			if (dest) {
				navigate(dest);
				window.scrollTo(0, 0);
			}
		}, NAV_SWITCH_MS);
		timerFinishRef.current = setTimeout(() => {
			setTransitionState("idle");
			isTransitioningRef.current = false;
			pendingDestRef.current = null;
			clearAllTimers();
		}, TOTAL_TRANSITION_MS);
	}, [navigate, clearAllTimers]);
	useEffect(() => {
		if (typeof window === "undefined") return;
		const handlePopState = () => {
			if (!isTransitioningRef.current) {
				if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
				isTransitioningRef.current = true;
				setTransitionState("active");
				timerFinishRef.current = setTimeout(() => {
					setTransitionState("idle");
					isTransitioningRef.current = false;
					clearAllTimers();
				}, TOTAL_TRANSITION_MS);
			}
		};
		window.addEventListener("popstate", handlePopState);
		return () => {
			window.removeEventListener("popstate", handlePopState);
		};
	}, [clearAllTimers]);
	useEffect(() => {
		if (typeof window === "undefined") return;
		if (isInitialMountRef.current) isInitialMountRef.current = false;
		const handleGlobalClick = (event) => {
			if (event.button !== 0) return;
			if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
			const target = event.target;
			const anchor = target === null || target === void 0 ? void 0 : target.closest("a");
			if (!anchor) return;
			if (anchor.hasAttribute("data-no-bloom")) return;
			if (anchor.hasAttribute("download")) return;
			if (anchor.target && anchor.target !== "_self") return;
			const rawHref = anchor.getAttribute("href");
			if (!rawHref) return;
			if (rawHref.startsWith("mailto:") || rawHref.startsWith("tel:") || rawHref.startsWith("javascript:")) return;
			let targetUrl;
			try {
				targetUrl = new URL(anchor.href, window.location.href);
			} catch (_unused) {
				return;
			}
			if (targetUrl.origin !== window.location.origin) return;
			const isSamePathname = targetUrl.pathname === window.location.pathname;
			const isSameSearch = targetUrl.search === window.location.search;
			if (rawHref.startsWith("#") || isSamePathname && isSameSearch && targetUrl.hash) return;
			if (isSamePathname && isSameSearch && !targetUrl.hash) {
				event.preventDefault();
				window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
				return;
			}
			event.preventDefault();
			const destination = targetUrl.pathname + targetUrl.search + targetUrl.hash;
			triggerBloomNavigation(destination);
		};
		document.addEventListener("click", handleGlobalClick, { capture: true });
		return () => {
			document.removeEventListener("click", handleGlobalClick, { capture: true });
			clearAllTimers();
		};
	}, [triggerBloomNavigation, clearAllTimers]);
	const isActive = transitionState === "active";
	return /* @__PURE__ */ jsx(BloomTransitionContext.Provider, {
		value: {
			navigateWithBloom: triggerBloomNavigation,
			isTransitioning: isActive
		},
		children: /* @__PURE__ */ jsxs("div", {
			className: `sbloom-transition-overlay ${isActive ? "is-active" : "is-idle"}`,
			"aria-hidden": "true",
			role: "presentation",
			children: [/* @__PURE__ */ jsx("div", { className: "sbloom-ambient-glow" }), /* @__PURE__ */ jsx("div", {
				className: "sbloom-flower-stage",
				children: /* @__PURE__ */ jsxs("svg", {
					viewBox: "0 0 100 100",
					className: "sbloom-flower-svg",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [
						/* @__PURE__ */ jsx("g", {
							className: "sbloom-petals-group",
							children: PETAL_CONFIGS.map((petal) => /* @__PURE__ */ jsx("g", {
								className: "sbloom-petal",
								style: {
									"--rest-rot": `${petal.restRot}deg`,
									"--bloom-rot": `${petal.bloomRot}deg`,
									"--petal-stagger": `${petal.stagger}ms`
								},
								children: /* @__PURE__ */ jsx("path", {
									d: "M 50,47.5 C 41.5,42 41,26 50,16.5 C 59,26 58.5,42 50,47.5 Z",
									stroke: "#C9952E",
									strokeWidth: "1.3",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									fill: "none"
								})
							}, `story-petal-${petal.id}`))
						}),
						/* @__PURE__ */ jsx("g", {
							className: "sbloom-glitter-group",
							children: GLITTER_PARTICLES.map((p) => {
								const style = {
									"--tx": `${p.tx}px`,
									"--ty": `${p.ty}px`,
									"--p-delay": `${p.delay}ms`
								};
								if (p.isStar) return /* @__PURE__ */ jsx("path", {
									className: "sbloom-glitter-particle",
									style,
									d: `M ${p.x},${p.y - 3} Q ${p.x},${p.y} ${p.x + 3},${p.y} Q ${p.x},${p.y} ${p.x},${p.y + 3} Q ${p.x},${p.y} ${p.x - 3},${p.y} Z`,
									fill: "#5A3825",
									stroke: "#5A3825",
									strokeWidth: "0.4"
								}, `glitter-star-${p.id}`);
								return /* @__PURE__ */ jsx("circle", {
									className: "sbloom-glitter-particle",
									style,
									cx: p.x,
									cy: p.y,
									r: p.size / 2,
									fill: "#5A3825",
									stroke: "#5A3825",
									strokeWidth: "0.5"
								}, `glitter-dot-${p.id}`);
							})
						}),
						/* @__PURE__ */ jsxs("g", {
							className: "sbloom-pistil-group",
							children: [/* @__PURE__ */ jsx("circle", {
								cx: "50",
								cy: "50",
								r: "2.8",
								fill: "none",
								stroke: "#C9952E",
								strokeWidth: "1.3"
							}), /* @__PURE__ */ jsx("circle", {
								cx: "50",
								cy: "50",
								r: "1.1",
								fill: "#35251F"
							})]
						})
					]
				})
			})]
		})
	});
};
// src/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	Layout: () => Layout,
	default: () => root_default
});
function ScrollToTop() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
}
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			/* @__PURE__ */ jsx(ScrollToTop, {}),
			/* @__PURE__ */ jsx(BloomTransition, {}),
			/* @__PURE__ */ jsxs("div", {
				className: "app-layout",
				children: [
					/* @__PURE__ */ jsx(Navbar, {}),
					/* @__PURE__ */ jsx("main", {
						style: { flex: 1 },
						children
					}),
					/* @__PURE__ */ jsx(Footer, {})
				]
			}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsx(Outlet, {});
});
// \0@oxc-project+runtime@0.156.0/helpers/esm/typeof.js
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
		return typeof o;
	} : function(o) {
		return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	}, _typeof(o);
}
// \0@oxc-project+runtime@0.156.0/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
	if ("object" != _typeof(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != _typeof(i)) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
// \0@oxc-project+runtime@0.156.0/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
	var i = toPrimitive(t, "string");
	return "symbol" == _typeof(i) ? i : i + "";
}
// \0@oxc-project+runtime@0.156.0/helpers/esm/defineProperty.js
function _defineProperty(e, r, t) {
	return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
// \0@oxc-project+runtime@0.156.0/helpers/esm/objectSpread2.js
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread2(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
// src/components/ScrollReveal.tsx
var ScrollReveal = ({ children, delay = 0, className = "", threshold = .1, style: userStyle = {} }) => {
	const [isVisible, setIsVisible] = useState(false);
	const domRef = useRef(null);
	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setIsVisible(true);
			return;
		}
		if (domRef.current) {
			if (domRef.current.getBoundingClientRect().top <= window.innerHeight) {
				setIsVisible(true);
				return;
			}
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					if (domRef.current) observer.unobserve(domRef.current);
				}
			});
		}, {
			threshold,
			rootMargin: "0px 0px 20px 0px"
		});
		const currentRef = domRef.current;
		if (currentRef) observer.observe(currentRef);
		return () => {
			if (currentRef) observer.unobserve(currentRef);
		};
	}, [threshold]);
	const style = _objectSpread2({ transitionDelay: `${delay}ms` }, userStyle);
	return /* @__PURE__ */ jsx("div", {
		ref: domRef,
		className: `reveal-wrapper ${isVisible ? "reveal-visible" : "reveal-hidden"} ${className}`,
		style,
		children
	});
};
// src/components/home/HeroFloatingIcons.tsx
var HeroFloatingIcons = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "hero-floating-icons-container",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ jsx("div", { className: "hero-icons-ambient-glow" }),
			/* @__PURE__ */ jsx("div", { className: "subtle-gold-bead bead-pos-1" }),
			/* @__PURE__ */ jsx("div", { className: "subtle-gold-bead bead-pos-2" }),
			/* @__PURE__ */ jsx("div", { className: "subtle-gold-bead bead-pos-3" }),
			/* @__PURE__ */ jsx("div", { className: "subtle-gold-bead bead-pos-4" }),
			/* @__PURE__ */ jsx("div", { className: "subtle-gold-bead bead-pos-5" }),
			/* @__PURE__ */ jsx("div", { className: "dof-blur-symbol dof-star" }),
			/* @__PURE__ */ jsx("div", { className: "dof-blur-symbol dof-google" }),
			/* @__PURE__ */ jsx("div", { className: "dof-blur-symbol dof-diamond" }),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-pen anim-float-focal",
				style: {
					top: "35%",
					left: "38%",
					zIndex: 20
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "92",
					height: "92",
					viewBox: "0 0 92 92",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "penNibGrad",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "100%",
								children: [
									/* @__PURE__ */ jsx("stop", {
										offset: "0%",
										stopColor: "#4A372E"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "50%",
										stopColor: "#2E201A"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "100%",
										stopColor: "#1E1410"
									})
								]
							}),
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "goldNibTip",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "100%",
								children: [
									/* @__PURE__ */ jsx("stop", {
										offset: "0%",
										stopColor: "#FFF2B2"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "40%",
										stopColor: "#E7BD62"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "85%",
										stopColor: "#C9952E"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "100%",
										stopColor: "#8F6216"
									})
								]
							}),
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "saturnRing",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "0%",
								children: [
									/* @__PURE__ */ jsx("stop", {
										offset: "0%",
										stopColor: "#C9952E",
										stopOpacity: "0.2"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "35%",
										stopColor: "#E7BD62",
										stopOpacity: "0.95"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "70%",
										stopColor: "#FFF2B2",
										stopOpacity: "1"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "100%",
										stopColor: "#C9952E",
										stopOpacity: "0.2"
									})
								]
							})
						] }),
						/* @__PURE__ */ jsx("ellipse", {
							cx: "46",
							cy: "48",
							rx: "42",
							ry: "14",
							stroke: "url(#saturnRing)",
							strokeWidth: "2",
							fill: "none",
							opacity: "0.6",
							strokeDasharray: "65 140"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 46 12 L 64 36 L 56 68 L 36 68 L 28 36 Z",
							fill: "url(#penNibGrad)"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 46 16 L 46 44",
							stroke: "#C9952E",
							strokeWidth: "1.8",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "46",
							cy: "44",
							r: "3",
							fill: "#E7BD62"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 46 12 L 54 26 L 38 26 Z",
							fill: "url(#goldNibTip)"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 33 66 L 59 66 L 57 74 L 35 74 Z",
							fill: "url(#goldNibTip)"
						}),
						/* @__PURE__ */ jsx("ellipse", {
							cx: "46",
							cy: "48",
							rx: "42",
							ry: "14",
							stroke: "url(#saturnRing)",
							strokeWidth: "2.4",
							fill: "none",
							strokeDasharray: "130 90",
							strokeDashoffset: "-70"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "20",
							cy: "54",
							r: "3.5",
							fill: "#E7BD62"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-web anim-float-2",
				style: {
					top: "8%",
					left: "54%",
					zIndex: 14
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "86",
					height: "74",
					viewBox: "0 0 86 74",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [/* @__PURE__ */ jsxs("linearGradient", {
							id: "browserBody",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#FBF8F2"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "60%",
									stopColor: "#EDE1D1"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#D9C7B2"
								})
							]
						}), /* @__PURE__ */ jsxs("linearGradient", {
							id: "browserHeader",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "0%",
							children: [/* @__PURE__ */ jsx("stop", {
								offset: "0%",
								stopColor: "#4A372E"
							}), /* @__PURE__ */ jsx("stop", {
								offset: "100%",
								stopColor: "#2E201A"
							})]
						})] }),
						/* @__PURE__ */ jsx("rect", {
							x: "4",
							y: "4",
							width: "78",
							height: "64",
							rx: "10",
							fill: "url(#browserBody)",
							stroke: "rgba(120, 90, 70, 0.25)",
							strokeWidth: "1.2"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 4 14 Q 4 4 14 4 L 72 4 Q 82 4 82 14 L 82 20 L 4 20 Z",
							fill: "url(#browserHeader)"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "14",
							cy: "12",
							r: "2.4",
							fill: "#C9952E"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "22",
							cy: "12",
							r: "2.4",
							fill: "#E7BD62"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "30",
							cy: "12",
							r: "2.4",
							fill: "#785A46"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "12",
							y: "28",
							width: "30",
							height: "22",
							rx: "4",
							fill: "#785A46",
							opacity: "0.85"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "17,45 23,37 29,45",
							fill: "#FBF8F2",
							opacity: "0.9"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "26,45 32,39 38,45",
							fill: "#E7BD62",
							opacity: "0.9"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "34",
							cy: "34",
							r: "2.5",
							fill: "#E7BD62"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "48",
							y: "29",
							width: "26",
							height: "3.5",
							rx: "1.5",
							fill: "#4A372E",
							opacity: "0.75"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "48",
							y: "37",
							width: "22",
							height: "3",
							rx: "1.5",
							fill: "#785A46",
							opacity: "0.6"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "48",
							y: "44",
							width: "18",
							height: "3",
							rx: "1.5",
							fill: "#785A46",
							opacity: "0.45"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "12",
							y: "55",
							width: "62",
							height: "6",
							rx: "3",
							fill: "#C9952E",
							opacity: "0.85"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-seo anim-float-1",
				style: {
					top: "10%",
					left: "16%",
					zIndex: 12
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "76",
					height: "76",
					viewBox: "0 0 76 76",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "lensRim",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "100%",
								children: [
									/* @__PURE__ */ jsx("stop", {
										offset: "0%",
										stopColor: "#FFF2B2"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "50%",
										stopColor: "#C9952E"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "100%",
										stopColor: "#63440F"
									})
								]
							}),
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "lensGlass",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "100%",
								children: [
									/* @__PURE__ */ jsx("stop", {
										offset: "0%",
										stopColor: "#2E201A"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "70%",
										stopColor: "#1E1410"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "100%",
										stopColor: "#120A07"
									})
								]
							}),
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "handleGrad",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "100%",
								children: [/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#785A46"
								}), /* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#35251F"
								})]
							})
						] }),
						/* @__PURE__ */ jsx("rect", {
							x: "46",
							y: "46",
							width: "12",
							height: "24",
							rx: "4",
							transform: "rotate(-45 46 46)",
							fill: "url(#handleGrad)",
							stroke: "#C9952E",
							strokeWidth: "1"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "32",
							cy: "32",
							r: "22",
							fill: "url(#lensRim)"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "32",
							cy: "32",
							r: "17",
							fill: "url(#lensGlass)"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 23 38 L 30 31 L 34 35 L 41 26",
							stroke: "#E7BD62",
							strokeWidth: "2.4",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 36 26 L 41 26 L 41 31",
							fill: "none",
							stroke: "#E7BD62",
							strokeWidth: "2.4",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-analytics anim-float-3",
				style: {
					top: "22%",
					left: "32%",
					zIndex: 13
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "74",
					height: "74",
					viewBox: "0 0 74 74",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "bar1",
								x1: "0%",
								y1: "0%",
								x2: "0%",
								y2: "100%",
								children: [/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#785A46"
								}), /* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#35251F"
								})]
							}),
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "bar2",
								x1: "0%",
								y1: "0%",
								x2: "0%",
								y2: "100%",
								children: [/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#4A372E"
								}), /* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#211C1A"
								})]
							}),
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "bar3",
								x1: "0%",
								y1: "0%",
								x2: "0%",
								y2: "100%",
								children: [/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#2E201A"
								}), /* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#140D09"
								})]
							}),
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "goldCap",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "0%",
								children: [
									/* @__PURE__ */ jsx("stop", {
										offset: "0%",
										stopColor: "#FFF2B2"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "50%",
										stopColor: "#E7BD62"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "100%",
										stopColor: "#C9952E"
									})
								]
							})
						] }),
						/* @__PURE__ */ jsx("rect", {
							x: "14",
							y: "40",
							width: "12",
							height: "22",
							rx: "3",
							fill: "url(#bar1)"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "14",
							y: "38",
							width: "12",
							height: "4",
							rx: "2",
							fill: "url(#goldCap)"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "31",
							y: "26",
							width: "12",
							height: "36",
							rx: "3",
							fill: "url(#bar2)"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "31",
							y: "24",
							width: "12",
							height: "4",
							rx: "2",
							fill: "url(#goldCap)"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "48",
							y: "14",
							width: "12",
							height: "48",
							rx: "3",
							fill: "url(#bar3)"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "48",
							y: "12",
							width: "12",
							height: "4",
							rx: "2",
							fill: "url(#goldCap)"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 10 46 C 22 42, 36 28, 58 10",
							stroke: "#E7BD62",
							strokeWidth: "2",
							strokeDasharray: "3 3",
							fill: "none",
							opacity: "0.85"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "58",
							cy: "10",
							r: "3",
							fill: "#FFF2B2"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-pin anim-float-5",
				style: {
					top: "25%",
					left: "74%",
					zIndex: 12
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "78",
					height: "82",
					viewBox: "0 0 78 82",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [/* @__PURE__ */ jsxs("linearGradient", {
							id: "pinBody",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#FBF8F2"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "60%",
									stopColor: "#EDE1D1"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#785A46"
								})
							]
						}), /* @__PURE__ */ jsxs("radialGradient", {
							id: "pinGoldCenter",
							cx: "40%",
							cy: "40%",
							r: "60%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#FFF2B2"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "60%",
									stopColor: "#E7BD62"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#8F6216"
								})
							]
						})] }),
						/* @__PURE__ */ jsx("ellipse", {
							cx: "39",
							cy: "74",
							rx: "20",
							ry: "6",
							fill: "#35251F",
							opacity: "0.2"
						}),
						/* @__PURE__ */ jsx("ellipse", {
							cx: "39",
							cy: "74",
							rx: "26",
							ry: "7",
							stroke: "#C9952E",
							strokeWidth: "1",
							strokeDasharray: "4 4",
							fill: "none",
							opacity: "0.45"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 39 8 C 24 8, 14 18, 14 33 C 14 48, 35 68, 39 72 C 43 68, 64 48, 64 33 C 64 18, 54 8, 39 8 Z",
							fill: "url(#pinBody)",
							stroke: "rgba(120, 90, 70, 0.3)",
							strokeWidth: "1.2"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "39",
							cy: "32",
							r: "11",
							fill: "url(#pinGoldCenter)"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 39 25 L 41 29 L 45 30 L 42 33 L 43 37 L 39 35 L 35 37 L 36 33 L 33 30 L 37 29 Z",
							fill: "#FFFFFF",
							opacity: "0.9"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-video anim-float-4",
				style: {
					top: "33%",
					left: "7%",
					zIndex: 11
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "74",
					height: "74",
					viewBox: "0 0 74 74",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [/* @__PURE__ */ jsxs("linearGradient", {
							id: "clapperBody",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#35251F"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#211C1A"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#120A07"
								})
							]
						}), /* @__PURE__ */ jsxs("linearGradient", {
							id: "playTriGrad",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#FFF2B2"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "60%",
									stopColor: "#E7BD62"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#C9952E"
								})
							]
						})] }),
						/* @__PURE__ */ jsx("rect", {
							x: "8",
							y: "10",
							width: "58",
							height: "15",
							rx: "3.5",
							fill: "url(#clapperBody)",
							stroke: "#C9952E",
							strokeWidth: "1"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "18,10 24,10 18,25 12,25",
							fill: "#E7BD62",
							opacity: "0.85"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "32,10 38,10 32,25 26,25",
							fill: "#E7BD62",
							opacity: "0.85"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "46,10 52,10 46,25 40,25",
							fill: "#E7BD62",
							opacity: "0.85"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "8",
							y: "23",
							width: "58",
							height: "42",
							rx: "4",
							fill: "url(#clapperBody)"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "30,34 30,54 48,44",
							fill: "url(#playTriGrad)"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-chat anim-float-4",
				style: {
					top: "56%",
					left: "17%",
					zIndex: 12
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "76",
					height: "74",
					viewBox: "0 0 76 74",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
							id: "bubbleBody",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#FBF8F2"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#EDE1D1"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#785A46"
								})
							]
						}) }),
						/* @__PURE__ */ jsx("path", {
							d: "M 12 10 Q 12 4 22 4 L 54 4 Q 64 4 64 14 L 64 42 Q 64 52 54 52 L 28 52 L 14 66 L 16 52 Q 12 50 12 42 Z",
							fill: "url(#bubbleBody)",
							stroke: "rgba(120, 90, 70, 0.3)",
							strokeWidth: "1.2"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "27",
							cy: "28",
							r: "4",
							fill: "#35251F"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "38",
							cy: "28",
							r: "4",
							fill: "#785A46"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "49",
							cy: "28",
							r: "4",
							fill: "#C9952E"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-campaign anim-float-2",
				style: {
					top: "51%",
					left: "68%",
					zIndex: 13
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "78",
					height: "78",
					viewBox: "0 0 78 78",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [/* @__PURE__ */ jsxs("linearGradient", {
							id: "planeBody",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#4A372E"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#2E201A"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#1E1410"
								})
							]
						}), /* @__PURE__ */ jsxs("linearGradient", {
							id: "planeFold",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#FFF2B2"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#E7BD62"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#8F6216"
								})
							]
						})] }),
						/* @__PURE__ */ jsx("polygon", {
							points: "68,14 16,40 38,50",
							fill: "url(#planeBody)"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "68,14 38,50 44,66",
							fill: "#35251F"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "68,14 44,66 52,48",
							fill: "url(#planeFold)"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "68,14 38,50 68,14",
							stroke: "#C9952E",
							strokeWidth: "1"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 12 56 C 20 54, 30 52, 38 50",
							stroke: "#E7BD62",
							strokeWidth: "1.5",
							strokeDasharray: "3 3",
							opacity: "0.75"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-team anim-float-1",
				style: {
					top: "66%",
					left: "46%",
					zIndex: 13
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "82",
					height: "76",
					viewBox: "0 0 82 76",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [/* @__PURE__ */ jsxs("linearGradient", {
							id: "teamCenter",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [/* @__PURE__ */ jsx("stop", {
								offset: "0%",
								stopColor: "#4A372E"
							}), /* @__PURE__ */ jsx("stop", {
								offset: "100%",
								stopColor: "#211C1A"
							})]
						}), /* @__PURE__ */ jsxs("linearGradient", {
							id: "teamSide",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [/* @__PURE__ */ jsx("stop", {
								offset: "0%",
								stopColor: "#785A46"
							}), /* @__PURE__ */ jsx("stop", {
								offset: "100%",
								stopColor: "#35251F"
							})]
						})] }),
						/* @__PURE__ */ jsx("circle", {
							cx: "23",
							cy: "24",
							r: "7",
							fill: "url(#teamSide)"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 12 48 C 12 38, 17 34, 23 34 C 29 34, 34 38, 34 48 Z",
							fill: "url(#teamSide)"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "59",
							cy: "24",
							r: "7",
							fill: "url(#teamSide)"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 48 48 C 48 38, 53 34, 59 34 C 65 34, 70 38, 70 48 Z",
							fill: "url(#teamSide)"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "41",
							cy: "18",
							r: "9",
							fill: "url(#teamCenter)",
							stroke: "#C9952E",
							strokeWidth: "1.2"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 27 50 C 27 38, 33 32, 41 32 C 49 32, 55 38, 55 50 Z",
							fill: "url(#teamCenter)",
							stroke: "#C9952E",
							strokeWidth: "1"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 23 24 L 41 18 L 59 24",
							stroke: "#E7BD62",
							strokeWidth: "1.2",
							opacity: "0.65",
							strokeDasharray: "2 2"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-growth anim-float-5",
				style: {
					top: "71%",
					left: "78%",
					zIndex: 12
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "74",
					height: "74",
					viewBox: "0 0 74 74",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
							id: "growthGrad",
							x1: "0%",
							y1: "100%",
							x2: "100%",
							y2: "0%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#35251F"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#785A46"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "85%",
									stopColor: "#C9952E"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#FFF2B2"
								})
							]
						}) }),
						/* @__PURE__ */ jsx("rect", {
							x: "12",
							y: "52",
							width: "10",
							height: "14",
							rx: "2",
							fill: "#35251F"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "26",
							y: "42",
							width: "10",
							height: "24",
							rx: "2",
							fill: "#4A372E"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "40",
							y: "32",
							width: "10",
							height: "34",
							rx: "2",
							fill: "#785A46"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "54",
							y: "22",
							width: "10",
							height: "44",
							rx: "2",
							fill: "#C9952E"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M 12 46 L 28 34 L 40 40 L 62 16",
							stroke: "url(#growthGrad)",
							strokeWidth: "3",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "56,14 65,14 65,23",
							fill: "#FFF2B2"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "floating-symbol-node node-reels anim-float-3",
				style: {
					top: "42%",
					left: "91%",
					zIndex: 10
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "68",
					height: "68",
					viewBox: "0 0 68 68",
					fill: "none",
					className: "free-floating-svg",
					children: [
						/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
							id: "reelsBody",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#4A372E"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#2E201A"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#1E1410"
								})
							]
						}) }),
						/* @__PURE__ */ jsx("rect", {
							x: "8",
							y: "8",
							width: "52",
							height: "52",
							rx: "14",
							fill: "url(#reelsBody)",
							stroke: "#C9952E",
							strokeWidth: "1.2"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "34",
							cy: "34",
							r: "14",
							stroke: "#E7BD62",
							strokeWidth: "2.2"
						}),
						/* @__PURE__ */ jsx("polygon", {
							points: "31,27 31,41 42,34",
							fill: "#FFF2B2"
						})
					]
				})
			})
		]
	});
};
// src/components/home/HeroSubtleCurves.tsx
var HeroSubtleCurves = () => {
	const curve1 = "M -40,190 C 240,150 480,320 740,290 C 1000,260 1220,150 1480,180";
	const curve2 = "M -30,470 C 260,430 540,500 790,420 C 1030,340 1260,490 1480,430";
	const curve3 = "M 480,120 C 680,85 920,130 1120,190 C 1300,240 1400,190 1480,160";
	return /* @__PURE__ */ jsx("div", {
		className: "hero-subtle-curves-layer",
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsxs("svg", {
			className: "hero-subtle-curves-svg",
			viewBox: "0 0 1440 600",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			preserveAspectRatio: "none",
			children: [
				/* @__PURE__ */ jsxs("defs", { children: [
					/* @__PURE__ */ jsxs("linearGradient", {
						id: "subtleGoldLine",
						x1: "0%",
						y1: "0%",
						x2: "100%",
						y2: "0%",
						children: [
							/* @__PURE__ */ jsx("stop", {
								offset: "0%",
								stopColor: "#C9952E",
								stopOpacity: "0.08"
							}),
							/* @__PURE__ */ jsx("stop", {
								offset: "25%",
								stopColor: "#C9952E",
								stopOpacity: "0.38"
							}),
							/* @__PURE__ */ jsx("stop", {
								offset: "55%",
								stopColor: "#E7BD62",
								stopOpacity: "0.55"
							}),
							/* @__PURE__ */ jsx("stop", {
								offset: "80%",
								stopColor: "#C9952E",
								stopOpacity: "0.4"
							}),
							/* @__PURE__ */ jsx("stop", {
								offset: "100%",
								stopColor: "#C9952E",
								stopOpacity: "0.08"
							})
						]
					}),
					/* @__PURE__ */ jsxs("linearGradient", {
						id: "delicateStream",
						x1: "0%",
						y1: "0%",
						x2: "100%",
						y2: "0%",
						children: [
							/* @__PURE__ */ jsx("stop", {
								offset: "0%",
								stopColor: "#C9952E",
								stopOpacity: "0"
							}),
							/* @__PURE__ */ jsx("stop", {
								offset: "60%",
								stopColor: "#E7BD62",
								stopOpacity: "0.45"
							}),
							/* @__PURE__ */ jsx("stop", {
								offset: "100%",
								stopColor: "#FFFFFF",
								stopOpacity: "0.75"
							})
						]
					}),
					/* @__PURE__ */ jsxs("filter", {
						id: "tinySparkleGlow",
						x: "-30%",
						y: "-30%",
						width: "160%",
						height: "160%",
						children: [/* @__PURE__ */ jsx("feGaussianBlur", {
							in: "SourceGraphic",
							stdDeviation: "1.5",
							result: "blur"
						}), /* @__PURE__ */ jsxs("feMerge", { children: [/* @__PURE__ */ jsx("feMergeNode", { in: "blur" }), /* @__PURE__ */ jsx("feMergeNode", { in: "SourceGraphic" })] })]
					})
				] }),
				/* @__PURE__ */ jsx("path", {
					d: curve1,
					stroke: "url(#subtleGoldLine)",
					strokeWidth: "1"
				}),
				/* @__PURE__ */ jsx("path", {
					d: curve2,
					stroke: "url(#subtleGoldLine)",
					strokeWidth: "1"
				}),
				/* @__PURE__ */ jsx("path", {
					d: curve3,
					stroke: "url(#subtleGoldLine)",
					strokeWidth: "0.85"
				}),
				/* @__PURE__ */ jsx("path", {
					d: curve1,
					stroke: "url(#delicateStream)",
					strokeWidth: "1.3",
					className: "subtle-curve-pulse pulse-1"
				}),
				/* @__PURE__ */ jsx("path", {
					d: curve2,
					stroke: "url(#delicateStream)",
					strokeWidth: "1.2",
					className: "subtle-curve-pulse pulse-2"
				}),
				/* @__PURE__ */ jsx("path", {
					d: curve3,
					stroke: "url(#delicateStream)",
					strokeWidth: "1.1",
					className: "subtle-curve-pulse pulse-3"
				}),
				/* @__PURE__ */ jsxs("g", {
					filter: "url(#tinySparkleGlow)",
					children: [/* @__PURE__ */ jsx("path", {
						d: "M 0,-4.5 L 1.2,-1 L 4.5,0 L 1.2,1 L 0,4.5 L -1.2,1 L -4.5,0 L -1.2,-1 Z",
						fill: "#FFFBE8",
						children: /* @__PURE__ */ jsx("animateMotion", {
							path: curve1,
							dur: "11s",
							repeatCount: "indefinite"
						})
					}), /* @__PURE__ */ jsx("circle", {
						r: "1.5",
						fill: "#E7BD62",
						children: /* @__PURE__ */ jsx("animateMotion", {
							path: curve1,
							dur: "11s",
							repeatCount: "indefinite"
						})
					})]
				}),
				/* @__PURE__ */ jsx("g", {
					filter: "url(#tinySparkleGlow)",
					children: /* @__PURE__ */ jsx("path", {
						d: "M 0,-3 L 0.8,-0.8 L 3,0 L 0.8,0.8 L 0,3 L -0.8,0.8 L -3,0 L -0.8,-0.8 Z",
						fill: "#FFEBB0",
						children: /* @__PURE__ */ jsx("animateMotion", {
							path: curve1,
							dur: "11s",
							begin: "5.5s",
							repeatCount: "indefinite"
						})
					})
				}),
				/* @__PURE__ */ jsxs("g", {
					filter: "url(#tinySparkleGlow)",
					children: [/* @__PURE__ */ jsx("path", {
						d: "M 0,-5 L 1.3,-1.2 L 5,0 L 1.3,1.2 L 0,5 L -1.3,1.2 L -5,0 L -1.3,-1.2 Z",
						fill: "#FFFBE8",
						children: /* @__PURE__ */ jsx("animateMotion", {
							path: curve2,
							dur: "14s",
							repeatCount: "indefinite"
						})
					}), /* @__PURE__ */ jsx("circle", {
						r: "1.8",
						fill: "#E7BD62",
						children: /* @__PURE__ */ jsx("animateMotion", {
							path: curve2,
							dur: "14s",
							repeatCount: "indefinite"
						})
					})]
				}),
				/* @__PURE__ */ jsx("g", {
					filter: "url(#tinySparkleGlow)",
					children: /* @__PURE__ */ jsx("circle", {
						r: "1.6",
						fill: "#FFFBE8",
						children: /* @__PURE__ */ jsx("animateMotion", {
							path: curve2,
							dur: "14s",
							begin: "7s",
							repeatCount: "indefinite"
						})
					})
				}),
				/* @__PURE__ */ jsx("g", {
					filter: "url(#tinySparkleGlow)",
					children: /* @__PURE__ */ jsx("path", {
						d: "M 0,-3.8 L 1,-1 L 3.8,0 L 1,1 L 0,3.8 L -1,1 L -3.8,0 L -1,-1 Z",
						fill: "#FFFBE8",
						children: /* @__PURE__ */ jsx("animateMotion", {
							path: curve3,
							dur: "12s",
							repeatCount: "indefinite"
						})
					})
				})
			]
		})
	});
};
// src/data/contentData.ts
var MODULAR_SERVICES = [
	{
		id: "fsm",
		num: "01",
		name: "Field Sales Marketing (FSM)",
		shortLabel: "Field Sales (FSM)",
		category: "In-Person · Internal Team Support",
		environment: "In-Person",
		source: "Internal",
		tagline: "We help your internal sales team close more deals on the ground.",
		forWho: "Businesses that already have sales staff or field representatives, but aren’t getting enough closed deals.",
		howWeHelp: [
			{
				title: "Field Pitching & Objection Handling",
				description: "We train your internal team with battle-tested pitch decks, clear presentation scripts, and confidence in handling tough client questions."
			},
			{
				title: "Daily Outreach & Target Planning",
				description: "We build structured daily outreach schedules, target account lists, and clear field execution playbooks for your reps."
			},
			{
				title: "Performance Commission Incentives",
				description: "We set up transparent commission and incentive models so your staff is self-motivated to go out and close more business."
			}
		],
		revenueImpact: "Your existing sales staff stops waiting for inquiries and actively brings in paying clients every single week.",
		deliverables: [
			"Sales Team Field Training & Pitch Coaching",
			"Daily Outreach Playbooks & Territory Targets",
			"Objection Handling & Closing Scripts",
			"Commission & Performance Incentive Structure"
		]
	},
	{
		id: "advisors",
		num: "02",
		name: "Affiliate Marketing",
		shortLabel: "Affiliate Marketing",
		category: "Referral & Commission System",
		environment: "In-Person & Digital",
		source: "External",
		tagline: "Trusted community partners and affiliates who send you customers for a commission.",
		forWho: "Businesses that want high-trust word-of-mouth referrals without hiring a massive full-time sales army.",
		howWeHelp: [
			{
				title: "Recruiting Local Connectors & Affiliates",
				description: "We connect you with trusted professionals (doctors, teachers, community leaders, executives) who interact with your target audience daily."
			},
			{
				title: "Zero Technical Burden for Affiliates",
				description: "Affiliates do not need to memorize technical product details—they simply make warm introductions based on their existing trust."
			},
			{
				title: "Automated Commission & Portal Tracking",
				description: "We track who brought each lead and handle transparent commission payouts via sbloom.ottobon.in/provider for every paying client introduced."
			}
		],
		revenueImpact: "You get warm, high-intent clients who are already pre-sold because someone they respect personally recommended you.",
		deliverables: [
			"Affiliate Partner Recruitment & Onboarding",
			"Warm Introduction & Referral Workflows",
			"Provider Portal & Attribution (sbloom.ottobon.in/provider)",
			"Commission Payout & Incentive Management"
		]
	},
	{
		id: "digital",
		num: "03",
		name: "Core Digital Presence (Website, Google & Social)",
		shortLabel: "Website & Google",
		category: "Digital · Internal Conversion Assets",
		environment: "Digital",
		source: "Internal",
		tagline: "Turn people searching for your services into paying customers.",
		forWho: "Businesses losing customers because their online presence looks outdated or doesn’t show up when people search for them.",
		howWeHelp: [
			{
				title: "High-Conversion Website",
				description: "Not a slow, bloated brochure. A clean, rapid website engineered for one goal: getting visitors to call, WhatsApp, or book a consultation immediately."
			},
			{
				title: "Google Business Profile (Map Pack Top 3)",
				description: "We optimize and manage your Google profile to rank in the Top 3 on Google Maps when locals search for your services."
			},
			{
				title: "Active Social Media Authority",
				description: "Credible, consistent profiles that showcase patient/student proof, address doubts, and validate your reputation before they call."
			}
		],
		revenueImpact: "Whenever someone searches for what you do, they find you first, trust your reputation, and contact your business right away.",
		deliverables: [
			"Conversion-Optimized High-Speed Website",
			"Google Business Profile (GBP) Local SEO & Reviews",
			"Social Media Profiles & Trust Nurturing",
			"Direct WhatsApp & Call Lead Funnels"
		]
	},
	{
		id: "influencers",
		num: "04",
		name: "Influencer Partnerships",
		shortLabel: "Influencer Reach",
		category: "Digital · External Creator Amplification",
		environment: "Digital",
		source: "External",
		tagline: "Trusted voices telling their followers to choose your business.",
		forWho: "Businesses that want immediate local recognition and a rapid influx of warm inquiries.",
		howWeHelp: [
			{
				title: "Matching Respected Voices",
				description: "No generic internet entertainers. We partner you with respected local and domain creators whom your audience genuinely trusts."
			},
			{
				title: "Authentic Educational Stories",
				description: "We script real, educational recommendations and behind-the-scenes walkthroughs—not cheesy scripted advertisements."
			},
			{
				title: "Direct Inbound Lead Routing",
				description: "Every post or video guides interested viewers directly into your consultation link, registration form, or WhatsApp desk."
			}
		],
		revenueImpact: "Thousands of pre-warmed followers hear about your business from someone they already trust, creating an immediate surge in inquiries.",
		deliverables: [
			"Creator Vetting & Partnership Negotiation",
			"Educational Video Scripting & Storytelling",
			"Campaign Tracking & Link Attribution",
			"Direct Consultation Booking Funnels"
		]
	}
];
// src/components/home/ModularServicesExplorer.tsx
var ModularServicesExplorer = () => {
	const [activeTab, setActiveTab] = useState("fsm");
	const activeService = MODULAR_SERVICES.find((s) => s.id === activeTab) || MODULAR_SERVICES[0];
	const getServiceIcon = (id) => {
		switch (id) {
			case "fsm": return /* @__PURE__ */ jsx(Users2, {
				size: 20,
				strokeWidth: 2
			});
			case "advisors": return /* @__PURE__ */ jsx(Handshake, {
				size: 20,
				strokeWidth: 2
			});
			case "digital": return /* @__PURE__ */ jsx(Globe2, {
				size: 20,
				strokeWidth: 2
			});
			case "influencers": return /* @__PURE__ */ jsx(Megaphone, {
				size: 20,
				strokeWidth: 2
			});
			default: return /* @__PURE__ */ jsx(Compass, {
				size: 20,
				strokeWidth: 2
			});
		}
	};
	return /* @__PURE__ */ jsx("section", {
		className: "mse-section",
		id: "services-explorer",
		"aria-label": "Our 4 Revenue Services",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [
				/* @__PURE__ */ jsx(ScrollReveal, {
					delay: 0,
					children: /* @__PURE__ */ jsxs("div", {
						className: "mse-header",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "mse-eyebrow-wrap",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "mse-eyebrow-line",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "mse-eyebrow",
										children: "✦ 4 WAYS WE BRING YOU REVENUE"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "mse-eyebrow-line",
										"aria-hidden": "true"
									})
								]
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "mse-main-title",
								children: "Choose the exact service your business needs."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mse-subtitle",
								children: "Every business has a different bottleneck. Pick any individual service below, or combine them to build your complete in-person and digital revenue engine."
							})
						]
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mse-tabs-container",
					children: /* @__PURE__ */ jsx("div", {
						className: "mse-tabs-track",
						role: "tablist",
						"aria-label": "Select Revenue Service",
						children: MODULAR_SERVICES.map((service) => {
							const isActive = activeTab === service.id;
							return /* @__PURE__ */ jsxs("button", {
								role: "tab",
								"aria-selected": isActive,
								className: `mse-tab-btn ${isActive ? "active" : ""}`,
								onClick: () => setActiveTab(service.id),
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "mse-tab-num",
										children: service.num
									}),
									/* @__PURE__ */ jsx("span", {
										className: "mse-tab-icon",
										children: getServiceIcon(service.id)
									}),
									/* @__PURE__ */ jsx("span", {
										className: "mse-tab-label",
										children: service.shortLabel
									}),
									isActive && /* @__PURE__ */ jsx(motion.div, {
										layoutId: "activeTabIndicator",
										className: "mse-tab-active-indicator",
										transition: {
											type: "spring",
											stiffness: 350,
											damping: 30
										}
									})
								]
							}, service.id);
						})
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mse-card-wrapper",
					children: /* @__PURE__ */ jsx(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ jsx(motion.div, {
							initial: {
								opacity: 0,
								y: 14
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -14
							},
							transition: { duration: .3 },
							className: "mse-service-card",
							children: /* @__PURE__ */ jsxs("div", {
								className: "mse-card-grid",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "mse-card-col-left",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "mse-card-meta",
											children: [/* @__PURE__ */ jsxs("span", {
												className: "mse-meta-pill",
												children: [
													activeService.environment,
													" · ",
													activeService.source
												]
											}), /* @__PURE__ */ jsx("span", {
												className: "mse-meta-category",
												children: activeService.category
											})]
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "mse-card-title",
											children: activeService.name
										}),
										/* @__PURE__ */ jsx("p", {
											className: "mse-card-tagline",
											children: activeService.tagline
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mse-forwho-box",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "mse-forwho-label",
												children: [/* @__PURE__ */ jsx(Target, {
													size: 16,
													className: "mse-forwho-icon"
												}), /* @__PURE__ */ jsx("span", { children: "WHO THIS IS FOR:" })]
											}), /* @__PURE__ */ jsx("p", {
												className: "mse-forwho-text",
												children: activeService.forWho
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mse-revenue-box",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "mse-revenue-badge",
												children: [/* @__PURE__ */ jsx(TrendingUp, { size: 16 }), /* @__PURE__ */ jsx("span", { children: "REVENUE IMPACT" })]
											}), /* @__PURE__ */ jsx("p", {
												className: "mse-revenue-text",
												children: activeService.revenueImpact
											})]
										}),
										/* @__PURE__ */ jsx("div", {
											className: "mse-card-actions",
											children: activeService.id === "advisors" ? /* @__PURE__ */ jsxs("a", {
												href: "https://sbloom.ottobon.in/provider",
												target: "_blank",
												rel: "noopener noreferrer",
												className: "btn-final-primary mse-action-btn",
												children: [/* @__PURE__ */ jsx("span", { children: "Go to Affiliate Provider Portal" }), /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
											}) : /* @__PURE__ */ jsxs(Link, {
												to: `/contact?service=${activeService.id}`,
												className: "btn-final-primary mse-action-btn",
												children: [/* @__PURE__ */ jsxs("span", { children: ["Inquire for ", activeService.shortLabel] }), /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
											})
										})
									]
								}), /* @__PURE__ */ jsxs("div", {
									className: "mse-card-col-right",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "mse-help-header",
											children: [/* @__PURE__ */ jsx("span", {
												className: "mse-help-eyebrow",
												children: "THE SBLOOM ADVANTAGE"
											}), /* @__PURE__ */ jsx("h4", {
												className: "mse-help-heading",
												children: "Exactly How We Help You:"
											})]
										}),
										/* @__PURE__ */ jsx("div", {
											className: "mse-help-steps",
											children: activeService.howWeHelp.map((step, idx) => /* @__PURE__ */ jsxs("div", {
												className: "mse-help-step-item",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "mse-step-badge",
													children: ["0", idx + 1]
												}), /* @__PURE__ */ jsxs("div", {
													className: "mse-step-content",
													children: [/* @__PURE__ */ jsx("h5", {
														className: "mse-step-title",
														children: step.title
													}), /* @__PURE__ */ jsx("p", {
														className: "mse-step-desc",
														children: step.description
													})]
												})]
											}, idx))
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mse-deliverables-box",
											children: [/* @__PURE__ */ jsx("span", {
												className: "mse-deliverables-label",
												children: "WHAT'S INCLUDED:"
											}), /* @__PURE__ */ jsx("div", {
												className: "mse-deliverables-grid",
												children: activeService.deliverables.map((item, idx) => /* @__PURE__ */ jsxs("div", {
													className: "mse-deliv-item",
													children: [/* @__PURE__ */ jsx(CheckCircle2, {
														size: 16,
														className: "mse-deliv-icon"
													}), /* @__PURE__ */ jsx("span", { children: item })]
												}, idx))
											})]
										})
									]
								})]
							})
						}, activeService.id)
					})
				}),
				/* @__PURE__ */ jsx(ScrollReveal, {
					delay: 100,
					children: /* @__PURE__ */ jsxs("div", {
						className: "mse-freedom-banner",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "mse-freedom-content",
							children: [/* @__PURE__ */ jsx("div", {
								className: "mse-freedom-icon-wrap",
								children: /* @__PURE__ */ jsx(Sparkles, {
									size: 24,
									className: "mse-freedom-icon"
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "mse-freedom-text",
								children: [/* @__PURE__ */ jsx("h4", {
									className: "mse-freedom-title",
									children: "Choose 1 Service, or Combine All 4."
								}), /* @__PURE__ */ jsx("p", {
									className: "mse-freedom-desc",
									children: "You don’t have to buy a rigid bundle. Start with what hurts most right now, or let us build a unified in-person and digital acquisition machine tailored to your exact budget and targets."
								})]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "mse-freedom-cta",
							children: /* @__PURE__ */ jsxs(Link, {
								to: "/contact",
								className: "btn-freedom-primary",
								children: [/* @__PURE__ */ jsx("span", { children: "Talk to sBLOOM About Revenue" }), /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
							})
						})]
					})
				})
			]
		})
	});
};
// src/components/home/FsmVsAdvisorComparison.tsx
var FsmVsAdvisorComparison = () => {
	return /* @__PURE__ */ jsx("section", {
		className: "fsm-adv-section",
		"aria-label": "In-Person Lead Generation Comparison",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsx(ScrollReveal, {
				delay: 0,
				children: /* @__PURE__ */ jsxs("div", {
					className: "fsm-adv-header",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "fsm-adv-eyebrow-wrap",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "fsm-adv-eyebrow-line",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "fsm-adv-eyebrow",
									children: "✦ ON-THE-GROUND REVENUE CHANNELS"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "fsm-adv-eyebrow-line",
									"aria-hidden": "true"
								})
							]
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "fsm-adv-title",
							children: "In-Person Leads: Inside Your Team & Outside in the Community"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "fsm-adv-subtitle",
							children: "We activate both sides of real-world business growth. Understand how our internal Field Sales support and external Affiliate Marketing network work together to bring you revenue."
						})
					]
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "fsm-adv-grid",
				children: [/* @__PURE__ */ jsx(ScrollReveal, {
					delay: 100,
					children: /* @__PURE__ */ jsxs("div", {
						className: "fsm-adv-card card-fsm",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "fsm-card-badge-wrap",
								children: [/* @__PURE__ */ jsx("span", {
									className: "fsm-badge-pill badge-internal",
									children: "INTERNAL TEAM SUPPORT"
								}), /* @__PURE__ */ jsx("span", {
									className: "fsm-badge-number",
									children: "01"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "fsm-card-header",
								children: [/* @__PURE__ */ jsx("div", {
									className: "fsm-icon-wrap icon-fsm",
									children: /* @__PURE__ */ jsx(Users2, {
										size: 26,
										strokeWidth: 2
									})
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
									className: "fsm-card-name",
									children: "Field Sales Marketing (FSM)"
								}), /* @__PURE__ */ jsx("p", {
									className: "fsm-card-sub",
									children: "Your Internal Staff, Enabled to Close"
								})] })]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "fsm-card-description",
								children: "We embed with your existing sales and front-desk team. We equip them with pitch decks, objection scripts, and target outreach routines so they actively generate leads from the field."
							}),
							/* @__PURE__ */ jsx("hr", { className: "fsm-card-divider" }),
							/* @__PURE__ */ jsxs("div", {
								className: "fsm-points-list",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "fsm-point-item",
										children: [/* @__PURE__ */ jsx("div", {
											className: "point-icon-box",
											children: /* @__PURE__ */ jsx(BookOpen, { size: 17 })
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
											className: "point-title",
											children: "Product Knowledge: Deep & Technical"
										}), /* @__PURE__ */ jsx("p", {
											className: "point-desc",
											children: "Your staff is trained extensively on your exact procedures, courses, USPs, and compliance guidelines."
										})] })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "fsm-point-item",
										children: [/* @__PURE__ */ jsx("div", {
											className: "point-icon-box",
											children: /* @__PURE__ */ jsx(Award, { size: 17 })
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
											className: "point-title",
											children: "How They Generate Leads: Active Pitching"
										}), /* @__PURE__ */ jsx("p", {
											className: "point-desc",
											children: "Direct institutional visits, clinic liaisoning, local seminar activations, and face-to-face consultation conversion."
										})] })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "fsm-point-item",
										children: [/* @__PURE__ */ jsx("div", {
											className: "point-icon-box",
											children: /* @__PURE__ */ jsx(Coins, { size: 17 })
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
											className: "point-title",
											children: "Commission Model: Performance Incentives"
										}), /* @__PURE__ */ jsx("p", {
											className: "point-desc",
											children: "Staff receives structured incentives and commissions for hitting on-ground lead and enrollment targets."
										})] })]
									})
								]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "fsm-card-footer",
								children: /* @__PURE__ */ jsxs(Link, {
									to: "/contact?service=fsm",
									className: "btn-fsm-link",
									children: [/* @__PURE__ */ jsx("span", { children: "Inquire for FSM Training" }), /* @__PURE__ */ jsx(ArrowRight, { size: 15 })]
								})
							})
						]
					})
				}), /* @__PURE__ */ jsx(ScrollReveal, {
					delay: 200,
					children: /* @__PURE__ */ jsxs("div", {
						className: "fsm-adv-card card-advisor",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "fsm-card-badge-wrap",
								children: [/* @__PURE__ */ jsx("span", {
									className: "fsm-badge-pill badge-external",
									children: "EXTERNAL REFERRAL NETWORK"
								}), /* @__PURE__ */ jsx("span", {
									className: "fsm-badge-number",
									children: "02"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "fsm-card-header",
								children: [/* @__PURE__ */ jsx("div", {
									className: "fsm-icon-wrap icon-advisor",
									children: /* @__PURE__ */ jsx(Handshake, {
										size: 26,
										strokeWidth: 2
									})
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
									className: "fsm-card-name",
									children: "Affiliate Marketing"
								}), /* @__PURE__ */ jsx("p", {
									className: "fsm-card-sub",
									children: "Trusted People & Partners Sending You Clients"
								})] })]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "fsm-card-description",
								children: "A curated affiliate network of respected doctors, educators, executives, and community leaders who refer warm clients from their personal and professional networks for a commission."
							}),
							/* @__PURE__ */ jsx("hr", { className: "fsm-card-divider" }),
							/* @__PURE__ */ jsxs("div", {
								className: "fsm-points-list",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "fsm-point-item",
										children: [/* @__PURE__ */ jsx("div", {
											className: "point-icon-box",
											children: /* @__PURE__ */ jsx(Sparkles, { size: 17 })
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
											className: "point-title",
											children: "Product Knowledge: Trust & Relationship First"
										}), /* @__PURE__ */ jsx("p", {
											className: "point-desc",
											children: "Affiliates don’t need technical product mastery—they leverage their personal credibility to make warm introductions."
										})] })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "fsm-point-item",
										children: [/* @__PURE__ */ jsx("div", {
											className: "point-icon-box",
											children: /* @__PURE__ */ jsx(Award, { size: 17 })
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
											className: "point-title",
											children: "How They Generate Leads: Warm Referrals"
										}), /* @__PURE__ */ jsx("p", {
											className: "point-desc",
											children: "Recommending your business to peers, family, and colleagues who are already actively seeking your exact expertise."
										})] })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "fsm-point-item",
										children: [/* @__PURE__ */ jsx("div", {
											className: "point-icon-box",
											children: /* @__PURE__ */ jsx(Coins, { size: 17 })
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
											className: "point-title",
											children: "Commission Model: Direct Per-Lead Payout"
										}), /* @__PURE__ */ jsx("p", {
											className: "point-desc",
											children: "Affiliates earn a clear, rewarding commission for every verified paying customer they introduce via our Provider Portal."
										})] })]
									})
								]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "fsm-card-footer",
								children: /* @__PURE__ */ jsxs("a", {
									href: "https://sbloom.ottobon.in/provider",
									className: "btn-fsm-link",
									target: "_blank",
									rel: "noopener noreferrer",
									children: [/* @__PURE__ */ jsx("span", { children: "Join Affiliate Program & Earn Commission" }), /* @__PURE__ */ jsx(ArrowRight, { size: 15 })]
								})
							})
						]
					})
				})]
			})]
		})
	});
};
// src/components/home/DualPathCards.tsx
var DualPathCards = () => {
	return /* @__PURE__ */ jsxs("section", {
		className: "dual-path-section",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "dual-path-ambient-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "dual-path-curves-layer",
				"aria-hidden": "true",
				children: /* @__PURE__ */ jsxs("svg", {
					className: "dual-path-curves-svg",
					viewBox: "0 0 1440 900",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					preserveAspectRatio: "none",
					children: [
						/* @__PURE__ */ jsxs("defs", { children: [/* @__PURE__ */ jsxs("linearGradient", {
							id: "dpWave1",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#E2D0B6",
									stopOpacity: "0.45"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#EDE0CA",
									stopOpacity: "0.25"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#E2D0B6",
									stopOpacity: "0.38"
								})
							]
						}), /* @__PURE__ */ jsxs("linearGradient", {
							id: "dpWave2",
							x1: "0%",
							y1: "100%",
							x2: "100%",
							y2: "0%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#DFCDAE",
									stopOpacity: "0.35"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "60%",
									stopColor: "#EAD8BD",
									stopOpacity: "0.2"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#E2D0B6",
									stopOpacity: "0.3"
								})
							]
						})] }),
						/* @__PURE__ */ jsx("path", {
							d: "M-40,160 C320,80 800,280 1480,140",
							stroke: "url(#dpWave1)",
							strokeWidth: "1.2",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M-40,240 C380,160 840,360 1480,220",
							stroke: "url(#dpWave2)",
							strokeWidth: "0.9",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M-40,740 C440,640 920,810 1480,690",
							stroke: "url(#dpWave1)",
							strokeWidth: "1.1",
							strokeLinecap: "round"
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "dual-path-sparkles-layer",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "dual-path-sparkle-star dp-sparkle-top-left-main",
						children: "✦"
					}),
					/* @__PURE__ */ jsx("span", { className: "dual-path-sparkle-dot dp-sparkle-top-left-dot" }),
					/* @__PURE__ */ jsx("span", {
						className: "dual-path-sparkle-star dp-sparkle-right-main",
						children: "✦"
					}),
					/* @__PURE__ */ jsx("span", { className: "dual-path-sparkle-dot dp-sparkle-right-dot" })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "dual-path-container",
				children: [/* @__PURE__ */ jsx(ScrollReveal, {
					delay: 0,
					children: /* @__PURE__ */ jsxs("div", {
						className: "dual-path-header",
						children: [/* @__PURE__ */ jsxs("h2", {
							className: "dual-path-title",
							children: [
								"How can ",
								/* @__PURE__ */ jsx("span", {
									className: "title-highlight-gold",
									children: "sBLOOM"
								}),
								" help you today?"
							]
						}), /* @__PURE__ */ jsx("p", {
							className: "dual-path-subtitle",
							children: "Whether you need more paying clients for your business or want to earn commissions through referrals."
						})]
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "dual-path-grid",
					children: [/* @__PURE__ */ jsx(ScrollReveal, {
						delay: 100,
						className: "dual-path-reveal-wrap",
						style: {
							height: "100%",
							display: "flex",
							flexDirection: "column"
						},
						children: /* @__PURE__ */ jsxs("div", {
							className: "dual-path-card dual-path-card-business",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "dual-path-card-body",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "dual-path-card-header",
										children: [/* @__PURE__ */ jsx("div", {
											className: "dual-path-icon-box dual-path-icon-business",
											children: /* @__PURE__ */ jsx(Building2, {
												size: 20,
												strokeWidth: 2
											})
										}), /* @__PURE__ */ jsxs("div", {
											className: "dual-path-header-text",
											children: [/* @__PURE__ */ jsx("h3", {
												className: "dual-path-card-title",
												children: "I Need More Revenue"
											}), /* @__PURE__ */ jsx("p", {
												className: "dual-path-card-tagline",
												children: "For clinics, schools & professional firms"
											})]
										})]
									}),
									/* @__PURE__ */ jsx("h4", {
										className: "dual-path-card-headline",
										children: "Fill your pipeline with paying customers."
									}),
									/* @__PURE__ */ jsx("hr", { className: "dual-path-card-divider" }),
									/* @__PURE__ */ jsxs("ul", {
										className: "dual-path-feature-list",
										children: [
											/* @__PURE__ */ jsxs("li", {
												className: "dual-path-feature-item",
												children: [/* @__PURE__ */ jsx(CheckCircle2, {
													size: 19,
													strokeWidth: 1.8,
													className: "dual-path-check-icon-business"
												}), /* @__PURE__ */ jsx("span", {
													className: "dual-path-feature-text",
													children: "Internal Field Sales (FSM) team training"
												})]
											}),
											/* @__PURE__ */ jsxs("li", {
												className: "dual-path-feature-item",
												children: [/* @__PURE__ */ jsx(CheckCircle2, {
													size: 19,
													strokeWidth: 1.8,
													className: "dual-path-check-icon-business"
												}), /* @__PURE__ */ jsx("span", {
													className: "dual-path-feature-text",
													children: "Warm referrals from our Affiliate network"
												})]
											}),
											/* @__PURE__ */ jsxs("li", {
												className: "dual-path-feature-item",
												children: [/* @__PURE__ */ jsx(CheckCircle2, {
													size: 19,
													strokeWidth: 1.8,
													className: "dual-path-check-icon-business"
												}), /* @__PURE__ */ jsx("span", {
													className: "dual-path-feature-text",
													children: "High-converting website & Google Maps Top 3"
												})]
											})
										]
									})
								]
							}), /* @__PURE__ */ jsx(Link, {
								to: "/contact",
								className: "dual-path-card-btn",
								children: /* @__PURE__ */ jsx("span", { children: "Grow My Revenue →" })
							})]
						})
					}), /* @__PURE__ */ jsx(ScrollReveal, {
						delay: 200,
						className: "dual-path-reveal-wrap",
						style: {
							height: "100%",
							display: "flex",
							flexDirection: "column"
						},
						children: /* @__PURE__ */ jsxs("div", {
							className: "dual-path-card dual-path-card-creative",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "dual-path-card-body",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "dual-path-card-header",
										children: [/* @__PURE__ */ jsx("div", {
											className: "dual-path-icon-box dual-path-icon-creative",
											children: /* @__PURE__ */ jsx(Handshake, {
												size: 20,
												strokeWidth: 2
											})
										}), /* @__PURE__ */ jsxs("div", {
											className: "dual-path-header-text",
											children: [/* @__PURE__ */ jsx("h3", {
												className: "dual-path-card-title",
												children: "Affiliate Marketing"
											}), /* @__PURE__ */ jsx("p", {
												className: "dual-path-card-tagline",
												children: "For doctors, educators & community connectors"
											})]
										})]
									}),
									/* @__PURE__ */ jsx("h4", {
										className: "dual-path-card-headline",
										children: "Earn commissions for your introductions."
									}),
									/* @__PURE__ */ jsx("hr", { className: "dual-path-card-divider" }),
									/* @__PURE__ */ jsxs("ul", {
										className: "dual-path-feature-list",
										children: [
											/* @__PURE__ */ jsxs("li", {
												className: "dual-path-feature-item",
												children: [/* @__PURE__ */ jsx(CheckCircle2, {
													size: 19,
													strokeWidth: 1.8,
													className: "dual-path-check-icon-creative"
												}), /* @__PURE__ */ jsx("span", {
													className: "dual-path-feature-text",
													children: "Generous commissions for verified client leads"
												})]
											}),
											/* @__PURE__ */ jsxs("li", {
												className: "dual-path-feature-item",
												children: [/* @__PURE__ */ jsx(CheckCircle2, {
													size: 19,
													strokeWidth: 1.8,
													className: "dual-path-check-icon-creative"
												}), /* @__PURE__ */ jsx("span", {
													className: "dual-path-feature-text",
													children: "No technical pitching required—just warm intros"
												})]
											}),
											/* @__PURE__ */ jsxs("li", {
												className: "dual-path-feature-item",
												children: [/* @__PURE__ */ jsx(CheckCircle2, {
													size: 19,
													strokeWidth: 1.8,
													className: "dual-path-check-icon-creative"
												}), /* @__PURE__ */ jsx("span", {
													className: "dual-path-feature-text",
													children: "Dedicated Provider Portal & automated tracking"
												})]
											})
										]
									})
								]
							}), /* @__PURE__ */ jsx("a", {
								href: "https://sbloom.ottobon.in/provider",
								className: "dual-path-card-btn",
								target: "_blank",
								rel: "noopener noreferrer",
								children: /* @__PURE__ */ jsx("span", { children: "Join Affiliate Program →" })
							})]
						})
					})]
				})]
			})
		]
	});
};
// src/components/home/HomePricingSection.tsx
var SocialMediaIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "23",
	height: "23",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "#BA7C3D",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ jsx("rect", {
			x: "2",
			y: "2",
			width: "20",
			height: "20",
			rx: "5",
			ry: "5"
		}),
		/* @__PURE__ */ jsx("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
		/* @__PURE__ */ jsx("circle", {
			cx: "17.5",
			cy: "6.5",
			r: "1.5",
			fill: "#BA7C3D"
		})
	]
});
var GbpIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	children: [/* @__PURE__ */ jsx("path", {
		d: "M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z",
		stroke: "#BA7C3D",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /* @__PURE__ */ jsx("path", {
		d: "M12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5Z",
		fill: "#BA7C3D"
	})]
});
var HomePricingSection = () => {
	return /* @__PURE__ */ jsx("section", {
		className: "home-pricing-section",
		id: "pricing",
		children: /* @__PURE__ */ jsxs("div", {
			className: "home-pricing-container",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "home-pricing-hero-row",
					children: /* @__PURE__ */ jsx("div", {
						className: "home-pricing-hero-text",
						children: /* @__PURE__ */ jsxs(ScrollReveal, {
							delay: 0,
							children: [/* @__PURE__ */ jsxs("div", {
								className: "home-pricing-eyebrow-container",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "home-pricing-eyebrow-line",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "home-pricing-eyebrow",
										children: "BUDGET-FRIENDLY & AI-POWERED"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "home-pricing-eyebrow-line",
										"aria-hidden": "true"
									})
								]
							}), /* @__PURE__ */ jsxs("h2", {
								className: "home-pricing-title",
								children: ["Simple Plans. ", /* @__PURE__ */ jsx("span", {
									className: "home-pricing-title-serif",
									children: "Real Business Growth."
								})]
							})]
						})
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "home-pricing-cards-grid",
					children: [
						{
							id: "gbp",
							name: "Google Business Profile (GBP)",
							badge: "+ AUTOMATION",
							icon: /* @__PURE__ */ jsx(GbpIcon, {}),
							isDualPrice: false,
							startsLabel: "STARTS AT",
							price: "₹2,000",
							period: "/month",
							features: ["Profile setup & complete local verification", "Local SEO ranking to reach Top 3 on Google Maps"],
							footnote: null,
							proofLink: "/proof-of-work?service=gbp",
							actionLabel: "View Proof of Work"
						},
						{
							id: "website-seo",
							name: "Website + SEO",
							badge: "+ AI-POWERED",
							icon: /* @__PURE__ */ jsx(Monitor, {
								size: 22,
								strokeWidth: 2.2
							}),
							isDualPrice: false,
							startsLabel: "STARTS AT",
							price: "₹5,000",
							period: "/month",
							features: ["AI-enabled high-speed website design & architecture", "End-to-end technical & local SEO keyword optimization"],
							footnote: null,
							proofLink: "/proof-of-work?service=website",
							actionLabel: "View Proof of Work"
						},
						{
							id: "social-media",
							name: "Social Media Management",
							badge: "META BUSINESS SUITE",
							icon: /* @__PURE__ */ jsx(SocialMediaIcon, {}),
							isDualPrice: false,
							startsLabel: "STARTS AT",
							price: "₹10,000",
							period: "/month",
							features: ["8 High-Impact Reels + 20 Branded Posts monthly", "Content strategy, scriptwriting, hooks & caption optimization"],
							footnote: "* Note: If you require 20+ reels, it will come under Motion. Motion post pricing may vary.",
							proofLink: "/proof-of-work?service=social",
							actionLabel: "View Proof of Work"
						},
						{
							id: "ads",
							name: "Meta & Google Ads",
							badge: "HIGH-INTENT LEADS",
							icon: /* @__PURE__ */ jsx(Megaphone, {
								size: 22,
								strokeWidth: 2.2
							}),
							isDualPrice: true,
							startsLabel: "STARTS AT",
							tier1Price: "₹2,000",
							tier1Note: "If you have a Meta/Google Business account",
							tier2Price: "₹3,000",
							tier2Note: "If you don't have a Meta/Google Business account",
							features: ["Hyper-targeted Meta (Insta/FB) & Google Search campaigns", "Transparent weekly analytics & ROAS tracking dashboard"],
							footnote: "* Note: Ad funding must be provided by the client. We do not provide ad funding. Our charge covers only the running and management of your ads.",
							proofLink: "/proof-of-work?service=ads",
							actionLabel: "View Proof of Work"
						}
					].map((plan, idx) => /* @__PURE__ */ jsx(ScrollReveal, {
						delay: 100 + idx * 80,
						className: "home-pricing-card-reveal",
						children: /* @__PURE__ */ jsxs("div", {
							className: "home-pricing-card",
							children: [
								plan.badge && /* @__PURE__ */ jsx("div", {
									className: "home-pricing-card-top-badge",
									children: plan.badge
								}),
								/* @__PURE__ */ jsxs(Link, {
									to: plan.proofLink,
									className: "home-pricing-card-header",
									children: [/* @__PURE__ */ jsx("div", {
										className: "home-pricing-icon-box",
										children: plan.icon
									}), /* @__PURE__ */ jsx("h3", {
										className: "home-pricing-card-title",
										children: plan.name
									})]
								}),
								plan.isDualPrice ? /* @__PURE__ */ jsxs("div", {
									className: "home-pricing-dual-container",
									children: [/* @__PURE__ */ jsx("div", {
										className: "home-pricing-starts-label",
										children: plan.startsLabel
									}), /* @__PURE__ */ jsxs("div", {
										className: "home-pricing-dual-wrap",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "home-pricing-dual-pill",
											children: [/* @__PURE__ */ jsx("div", {
												className: "home-pricing-dual-amount",
												children: plan.tier1Price
											}), /* @__PURE__ */ jsx("div", {
												className: "home-pricing-dual-note",
												children: plan.tier1Note
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "home-pricing-dual-pill",
											children: [/* @__PURE__ */ jsx("div", {
												className: "home-pricing-dual-amount",
												children: plan.tier2Price
											}), /* @__PURE__ */ jsx("div", {
												className: "home-pricing-dual-note",
												children: plan.tier2Note
											})]
										})]
									})]
								}) : /* @__PURE__ */ jsxs("div", {
									className: "home-pricing-price-wrap",
									children: [/* @__PURE__ */ jsx("div", {
										className: "home-pricing-starts-label",
										children: plan.startsLabel
									}), /* @__PURE__ */ jsxs("div", {
										className: "home-pricing-amount-row",
										children: [/* @__PURE__ */ jsx("span", {
											className: "home-pricing-amount",
											children: plan.price
										}), /* @__PURE__ */ jsx("span", {
											className: "home-pricing-period",
											children: plan.period
										})]
									})]
								}),
								/* @__PURE__ */ jsx("ul", {
									className: "home-pricing-features-list",
									children: plan.features.map((feat, fIdx) => /* @__PURE__ */ jsxs("li", {
										className: "home-pricing-feature-item",
										children: [/* @__PURE__ */ jsx(Check, {
											className: "home-pricing-check-icon",
											size: 15,
											strokeWidth: 2.8
										}), /* @__PURE__ */ jsx("span", { children: feat })]
									}, fIdx))
								}),
								plan.footnote && /* @__PURE__ */ jsx("div", {
									className: "home-pricing-card-footnote",
									children: plan.footnote
								}),
								/* @__PURE__ */ jsx("div", {
									className: "home-pricing-card-footer",
									children: /* @__PURE__ */ jsxs(Link, {
										to: plan.proofLink,
										className: "home-pricing-action-btn",
										"aria-label": `Open proof of work for ${plan.name}`,
										children: [/* @__PURE__ */ jsx("span", { children: plan.actionLabel }), /* @__PURE__ */ jsx(ArrowRight, {
											size: 15,
											strokeWidth: 2.4
										})]
									})
								})
							]
						})
					}, plan.id))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "home-pricing-transparency-note",
					children: /* @__PURE__ */ jsx("span", { children: "* Pricing may vary from client to client based on requirements." })
				}),
				/* @__PURE__ */ jsx(ScrollReveal, {
					delay: 350,
					children: /* @__PURE__ */ jsx("div", {
						className: "home-pricing-promo-banner",
						children: /* @__PURE__ */ jsxs("div", {
							className: "home-pricing-promo-left",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "home-pricing-gift-box",
									children: /* @__PURE__ */ jsx(Gift, {
										size: 26,
										strokeWidth: 2.1
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "home-pricing-promo-divider",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "home-pricing-promo-text",
									children: [
										"Google Business Profile (GBP) is",
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "home-pricing-promo-free",
											children: "FREE"
										}),
										" when Social Media Management is chosen."
									]
								})
							]
						})
					})
				})
			]
		})
	});
};
// src/data/clientLogos.ts
/**
* Master List of Client Logos
* You can add new client logos here anytime by simply adding a new item to this array!
*/
var CLIENT_LOGOS = [
	{
		id: "star-clinic",
		name: "Star Clinic",
		image: "/images/clients/star-clinic.jpg",
		sector: "Healthcare",
		tagline: "Family Medical Centre"
	},
	{
		id: "medcy-ivf",
		name: "Medcy IVF",
		image: "/images/clients/medcy-ivf.jpg",
		sector: "Fertility & IVF",
		tagline: "Miracles Made Here"
	},
	{
		id: "vizag-ivf",
		name: "Vizag IVF Centre",
		image: "/images/clients/vizag-ivf.jpg",
		sector: "Fertility Specialist",
		tagline: "Conceiving Joy"
	},
	{
		id: "medcy-hospitals",
		name: "Medcy Hospitals",
		image: "/images/clients/medcy-hospitals.jpg",
		sector: "Multi-Speciality",
		tagline: "Health, Hope & Harmony"
	},
	{
		id: "sri-venkateswara",
		name: "Sri Venkateswara Hospital",
		image: "/images/clients/sri-venkateswara.png",
		sector: "Hospital & Healthcare",
		tagline: "Premier Patient Care"
	},
	{
		id: "vizag-sainik",
		name: "Vizag Sainik Academy",
		image: "/images/clients/vizag-sainik.jpg",
		sector: "Defence Education",
		tagline: "Academy of Excellence"
	},
	{
		id: "sri-basara-school",
		name: "Sri Basara Leads International School",
		image: "/images/clients/sri-basara-school.jpg",
		sector: "International School",
		tagline: "Leading Global Education"
	},
	{
		id: "bansal-college",
		name: "Bansal Junior College",
		image: "/images/clients/bansal-college.png",
		sector: "Higher Education",
		tagline: "Ideal for Scholars"
	},
	{
		id: "sri-basara-defence",
		name: "Sri Basara Defence Academy",
		image: "/images/clients/sri-basara-defence.png",
		sector: "Defence Academy",
		tagline: "Learn • Lead • Succeed"
	}
];
// src/components/home/ClientLogoMarquee.tsx
var ClientLogoMarquee = ({ logos = CLIENT_LOGOS }) => {
	const row1Logos = [...logos];
	const row2Logos = [...logos.slice(3), ...logos.slice(0, 3)];
	const row3Logos = [...logos.slice(6), ...logos.slice(0, 6)];
	const renderLogoCard = (logo, keySuffix) => /* @__PURE__ */ jsx("div", {
		className: "logo-item",
		title: logo.name,
		children: /* @__PURE__ */ jsx("img", {
			src: logo.image,
			alt: logo.name,
			className: "client-marquee-img",
			loading: "lazy"
		})
	}, `${logo.id}-${keySuffix}`);
	return /* @__PURE__ */ jsx("section", {
		className: "client-logo-marquee-section",
		"aria-label": "Client Showcase",
		children: /* @__PURE__ */ jsxs("div", {
			className: "client-logo-container",
			children: [
				/* @__PURE__ */ jsx(ScrollReveal, {
					delay: 0,
					children: /* @__PURE__ */ jsxs("div", {
						className: "client-logo-header",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "client-logo-eyebrow-wrap",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "client-logo-eyebrow-line",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "client-logo-eyebrow",
									children: "✦ TRUSTED BY INDUSTRY LEADERS"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "client-logo-eyebrow-line",
									"aria-hidden": "true"
								})
							]
						}), /* @__PURE__ */ jsxs("h2", {
							className: "client-logo-title",
							children: [
								"Powering Growth for Top Healthcare, Education &",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "client-logo-gold",
									children: "Enterprise Brands."
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "logo-marquee-wrapper",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "logo-marquee-fade-left",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "logo-marquee-fade-right",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "logo-marquee-row dir-ltr",
							"aria-label": "Trusted Clients Row 1",
							children: /* @__PURE__ */ jsxs("div", {
								className: "logo-marquee-track speed-normal",
								children: [/* @__PURE__ */ jsx("div", {
									className: "logo-marquee-group",
									children: row1Logos.map((logo, idx) => renderLogoCard(logo, `r1-a-${idx}`))
								}), /* @__PURE__ */ jsx("div", {
									className: "logo-marquee-group",
									"aria-hidden": "true",
									children: row1Logos.map((logo, idx) => renderLogoCard(logo, `r1-b-${idx}`))
								})]
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "logo-marquee-row dir-rtl",
							"aria-label": "Trusted Clients Row 2",
							children: /* @__PURE__ */ jsxs("div", {
								className: "logo-marquee-track speed-fast",
								children: [/* @__PURE__ */ jsx("div", {
									className: "logo-marquee-group",
									children: row2Logos.map((logo, idx) => renderLogoCard(logo, `r2-a-${idx}`))
								}), /* @__PURE__ */ jsx("div", {
									className: "logo-marquee-group",
									"aria-hidden": "true",
									children: row2Logos.map((logo, idx) => renderLogoCard(logo, `r2-b-${idx}`))
								})]
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "logo-marquee-row dir-ltr",
							"aria-label": "Trusted Clients Row 3",
							children: /* @__PURE__ */ jsxs("div", {
								className: "logo-marquee-track speed-slow",
								children: [/* @__PURE__ */ jsx("div", {
									className: "logo-marquee-group",
									children: row3Logos.map((logo, idx) => renderLogoCard(logo, `r3-a-${idx}`))
								}), /* @__PURE__ */ jsx("div", {
									className: "logo-marquee-group",
									"aria-hidden": "true",
									children: row3Logos.map((logo, idx) => renderLogoCard(logo, `r3-b-${idx}`))
								})]
							})
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "client-logo-bottom-note",
					children: [/* @__PURE__ */ jsx("span", { className: "client-logo-note-dot" }), /* @__PURE__ */ jsx("span", { children: "Proven ROI across verified regional, national & enterprise campaigns" })]
				})
			]
		})
	});
};
// src/components/home/WhyBetter.tsx
var WhyBetter = () => {
	return /* @__PURE__ */ jsx("section", {
		className: "why-better-section",
		id: "why-sbloom",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container why-better-container",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "why-better-header",
					children: /* @__PURE__ */ jsxs(ScrollReveal, {
						delay: 0,
						children: [/* @__PURE__ */ jsxs("div", {
							className: "why-better-eyebrow",
							children: [/* @__PURE__ */ jsx("span", {
								className: "why-badge-glow",
								children: "✦ THE S-BLOOM ADVANTAGE"
							}), /* @__PURE__ */ jsx("span", {
								className: "why-eyebrow-sub",
								children: "WHY OUR WORK IS BEST"
							})]
						}), /* @__PURE__ */ jsxs("h2", {
							className: "why-better-title",
							children: [
								"Why We Beat Every Other ",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "why-title-serif",
									children: "Digital Marketing Agency."
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "why-better-grid",
					children: [
						{
							id: "ai-native",
							icon: /* @__PURE__ */ jsx(Bot, { size: 26 }),
							tag: "TECH INNOVATION",
							title: "AI-Native Efficiency, Zero Agency Bloat",
							bullets: [
								"Websites that load in under 1 second",
								"AI-driven keyword analysis for local dominance",
								"Automated lead qualification funnels"
							],
							badge: "Up to 70% Less Cost"
						},
						{
							id: "targeted-industries",
							icon: /* @__PURE__ */ jsx(Target, { size: 26 }),
							tag: "LASER FOCUS",
							title: "Built Exclusively for 3 High-Trust Sectors",
							bullets: [
								"Healthcare: More local clinic & hospital patients",
								"Education: Predictable admission inquiries every season",
								"Professional Services: High-value corporate clients"
							],
							badge: "Domain Expertise"
						},
						{
							id: "budget-friendly",
							icon: /* @__PURE__ */ jsx(Wallet, { size: 26 }),
							tag: "RADICAL AFFORDABILITY",
							title: "Genuinely Budget-Friendly & Transparent",
							bullets: [
								"Full GBP optimization from ₹2,000/month",
								"AI Website + SEO from ₹5,000/month",
								"8 Reels + 20 Posts via Meta Suite from ₹10,000/mo"
							],
							badge: "Starts at ₹2,000/mo"
						}
					].map((pillar, index) => /* @__PURE__ */ jsx(ScrollReveal, {
						delay: 120 + index * 90,
						className: "why-better-card-reveal",
						children: /* @__PURE__ */ jsxs("div", {
							className: "why-better-card",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "why-card-top",
									children: [/* @__PURE__ */ jsx("div", {
										className: "why-card-icon-wrap",
										children: pillar.icon
									}), /* @__PURE__ */ jsx("span", {
										className: "why-card-badge",
										children: pillar.badge
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "why-card-tag",
									children: pillar.tag
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "why-card-title",
									children: pillar.title
								}),
								/* @__PURE__ */ jsx("div", {
									className: "why-card-bullets",
									children: pillar.bullets.map((bullet, bIdx) => /* @__PURE__ */ jsxs("div", {
										className: "why-bullet-item",
										children: [/* @__PURE__ */ jsx(CheckCircle2, {
											size: 15,
											className: "why-bullet-icon"
										}), /* @__PURE__ */ jsx("span", { children: bullet })]
									}, bIdx))
								})
							]
						})
					}, pillar.id))
				}),
				/* @__PURE__ */ jsx(ScrollReveal, {
					delay: 280,
					children: /* @__PURE__ */ jsxs("div", {
						className: "why-better-proof-banner",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "why-proof-banner-left",
							children: [/* @__PURE__ */ jsx("div", {
								className: "why-proof-icon-box",
								children: /* @__PURE__ */ jsx(ShieldCheck, { size: 26 })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
								className: "why-proof-banner-title",
								children: "Don't take our word for it. Inspect our real client dashboards."
							}), /* @__PURE__ */ jsx("p", {
								className: "why-proof-banner-desc",
								children: "Browse before-and-after performance metrics for Google Business Profile, websites, and Meta Business Suite campaigns."
							})] })]
						}), /* @__PURE__ */ jsx("div", {
							className: "why-proof-banner-right",
							children: /* @__PURE__ */ jsxs(Link, {
								to: "/proof-of-work",
								className: "why-proof-cta-btn",
								children: [/* @__PURE__ */ jsx("span", { children: "Explore Proof of Work" }), /* @__PURE__ */ jsx(ArrowRight, { size: 17 })]
							})
						})]
					})
				})
			]
		})
	});
};
// src/components/home/BottomCornerScrollShowcase.tsx
var STAGES$1 = [
	{
		id: 0,
		key: "camera",
		label: "Camera",
		icon: Camera
	},
	{
		id: 1,
		key: "reel",
		label: "Reel",
		icon: Film
	},
	{
		id: 2,
		key: "post",
		label: "Post",
		icon: FileText
	},
	{
		id: 3,
		key: "ad",
		label: "Ad",
		icon: Megaphone
	},
	{
		id: 4,
		key: "website",
		label: "Website",
		icon: Globe
	},
	{
		id: 5,
		key: "video",
		label: "Video",
		icon: Play
	}
];
var BottomCornerScrollShowcase = () => {
	const [activeStage, setActiveStage] = useState(0);
	const [scrollProgress, setScrollProgress] = useState(0);
	const [isMuted, setIsMuted] = useState(true);
	const [manualOverride, setManualOverride] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const videoRef = useRef(null);
	const widgetRef = useRef(null);
	const overrideTimerRef = useRef(null);
	const circleRadius = 44;
	const circumference = 2 * Math.PI * circleRadius;
	const strokeDashoffset = circumference - scrollProgress * circumference;
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (widgetRef.current && !widgetRef.current.contains(event.target)) setIsMenuOpen(false);
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	useEffect(() => {
		const handleScroll = () => {
			const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
			if (scrollHeight <= 0) return;
			const progress = Math.min(1, Math.max(0, window.scrollY / scrollHeight));
			setScrollProgress(progress);
			if (!manualOverride) {
				if (progress < .18) setActiveStage(0);
				else if (progress < .36) setActiveStage(1);
				else if (progress < .54) setActiveStage(2);
				else if (progress < .72) setActiveStage(3);
				else if (progress < .88) setActiveStage(4);
				else setActiveStage(5);
			}
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, [manualOverride]);
	useEffect(() => {
		if (activeStage === 5 && videoRef.current) videoRef.current.play().catch(() => {});
		else if (videoRef.current) videoRef.current.pause();
	}, [activeStage]);
	const handleSelectStage = (stageId) => {
		setActiveStage(stageId);
		setManualOverride(true);
		setIsMenuOpen(false);
		if (overrideTimerRef.current) clearTimeout(overrideTimerRef.current);
		overrideTimerRef.current = setTimeout(() => {
			setManualOverride(false);
		}, 12e3);
	};
	const handleCircleClick = () => {
		setIsMenuOpen((prev) => !prev);
	};
	const toggleSound = (e) => {
		e.stopPropagation();
		if (videoRef.current) {
			videoRef.current.muted = !videoRef.current.muted;
			setIsMuted(videoRef.current.muted);
		}
	};
	const currentStageInfo = STAGES$1[activeStage];
	const IconComponent = currentStageInfo.icon;
	return /* @__PURE__ */ jsxs("div", {
		className: "corner-circle-widget-wrapper",
		ref: widgetRef,
		"aria-label": "S-Bloom Small Circular Pipeline",
		children: [
			/* @__PURE__ */ jsx(AnimatePresence, { children: isMenuOpen && /* @__PURE__ */ jsxs(motion.div, {
				className: "corner-circle-options-menu",
				initial: {
					opacity: 0,
					y: 10,
					scale: .95
				},
				animate: {
					opacity: 1,
					y: 0,
					scale: 1
				},
				exit: {
					opacity: 0,
					y: 10,
					scale: .95
				},
				transition: { duration: .2 },
				children: [/* @__PURE__ */ jsxs("div", {
					className: "corner-circle-options-header",
					children: [/* @__PURE__ */ jsx("span", { children: "EXPLORE PIPELINE" }), /* @__PURE__ */ jsx("button", {
						className: "corner-circle-options-close",
						onClick: (e) => {
							e.stopPropagation();
							setIsMenuOpen(false);
						},
						"aria-label": "Close options",
						children: /* @__PURE__ */ jsx(X, { size: 13 })
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "corner-circle-options-list",
					children: STAGES$1.map((stage) => {
						const StageIcon = stage.icon;
						const isSelected = activeStage === stage.id;
						return /* @__PURE__ */ jsxs("button", {
							className: `corner-circle-option-btn ${isSelected ? "active" : ""}`,
							onClick: (e) => {
								e.stopPropagation();
								handleSelectStage(stage.id);
							},
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "corner-option-icon",
									children: /* @__PURE__ */ jsx(StageIcon, { size: 14 })
								}),
								/* @__PURE__ */ jsx("span", {
									className: "corner-option-name",
									children: stage.label
								}),
								isSelected && /* @__PURE__ */ jsx("span", {
									className: "corner-option-indicator",
									children: "●"
								})
							]
						}, stage.key);
					})
				})]
			}) }),
			/* @__PURE__ */ jsxs("div", {
				className: "corner-circle-label-pill",
				onClick: () => setIsMenuOpen((prev) => !prev),
				title: "Click to view all pipeline options",
				children: [
					activeStage === 0 && /* @__PURE__ */ jsx("span", { className: "circle-rec-dot" }),
					/* @__PURE__ */ jsx(IconComponent, {
						size: 13,
						color: "#D9A52E"
					}),
					/* @__PURE__ */ jsx("span", { children: currentStageInfo.label }),
					isMenuOpen ? /* @__PURE__ */ jsx(ChevronDown, {
						size: 12,
						color: "#785A46",
						style: { marginLeft: 2 }
					}) : /* @__PURE__ */ jsx(ChevronUp, {
						size: 12,
						color: "#785A46",
						style: { marginLeft: 2 }
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "corner-circle-orb",
				onClick: handleCircleClick,
				title: `Click to view options (Currently: ${currentStageInfo.label})`,
				children: [
					/* @__PURE__ */ jsxs("svg", {
						className: "corner-circle-svg-ring",
						viewBox: "0 0 96 96",
						children: [
							/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
								id: "goldRingGradient",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "100%",
								children: [
									/* @__PURE__ */ jsx("stop", {
										offset: "0%",
										stopColor: "#FFE0A3"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "50%",
										stopColor: "#D9A52E"
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "100%",
										stopColor: "#8F6216"
									})
								]
							}) }),
							/* @__PURE__ */ jsx("circle", {
								className: "circle-ring-bg",
								cx: "48",
								cy: "48",
								r: circleRadius
							}),
							/* @__PURE__ */ jsx("circle", {
								className: "circle-ring-progress",
								cx: "48",
								cy: "48",
								r: circleRadius,
								style: {
									strokeDasharray: circumference,
									strokeDashoffset
								}
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "corner-circle-lens-frame",
						children: [/* @__PURE__ */ jsx("div", { className: "corner-circle-lens-glare" }), /* @__PURE__ */ jsxs(AnimatePresence, {
							mode: "wait",
							children: [
								activeStage === 0 && /* @__PURE__ */ jsxs(motion.div, {
									className: "circle-content-canvas circle-view-camera",
									initial: {
										opacity: 0,
										scale: .9
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									exit: {
										opacity: 0,
										scale: 1.1
									},
									transition: { duration: .25 },
									children: [/* @__PURE__ */ jsx("img", {
										src: "/camera-studio-bloom.jpg",
										alt: "Cinema Camera",
										className: "circle-camera-img"
									}), /* @__PURE__ */ jsx("div", {
										className: "circle-camera-hud-badge",
										children: /* @__PURE__ */ jsx("span", { children: "● REC" })
									})]
								}, "circle-stage-camera"),
								activeStage === 1 && /* @__PURE__ */ jsxs(motion.div, {
									className: "circle-content-canvas circle-view-reel",
									initial: {
										opacity: 0,
										scale: .9
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									exit: {
										opacity: 0,
										scale: 1.1
									},
									transition: { duration: .25 },
									children: [/* @__PURE__ */ jsx("img", {
										src: "/about-studio-stage.jpg",
										alt: "Social Reel Stage",
										className: "circle-reel-img"
									}), /* @__PURE__ */ jsxs("div", {
										className: "circle-reel-center-icon",
										children: [/* @__PURE__ */ jsx("div", {
											className: "circle-reel-glyph",
											children: /* @__PURE__ */ jsx(Film, { size: 15 })
										}), /* @__PURE__ */ jsx("span", {
											className: "circle-reel-sub",
											children: "REEL"
										})]
									})]
								}, "circle-stage-reel"),
								activeStage === 2 && /* @__PURE__ */ jsxs(motion.div, {
									className: "circle-content-canvas circle-view-post",
									initial: {
										opacity: 0,
										scale: .9
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									exit: {
										opacity: 0,
										scale: 1.1
									},
									transition: { duration: .25 },
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "circle-post-avatar",
											children: "🌸"
										}),
										/* @__PURE__ */ jsx("div", {
											className: "circle-post-text",
											children: "POST"
										}),
										/* @__PURE__ */ jsx("div", {
											className: "circle-post-likes",
											children: "👍 1.8K"
										})
									]
								}, "circle-stage-post"),
								activeStage === 3 && /* @__PURE__ */ jsxs(motion.div, {
									className: "circle-content-canvas circle-view-ad",
									initial: {
										opacity: 0,
										scale: .9
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									exit: {
										opacity: 0,
										scale: 1.1
									},
									transition: { duration: .25 },
									children: [/* @__PURE__ */ jsx("div", {
										className: "circle-ad-icon-box",
										children: /* @__PURE__ */ jsx(Megaphone, { size: 16 })
									}), /* @__PURE__ */ jsx("div", {
										className: "circle-ad-tag",
										children: "AD"
									})]
								}, "circle-stage-ad"),
								activeStage === 4 && /* @__PURE__ */ jsxs(motion.div, {
									className: "circle-content-canvas circle-view-web",
									initial: {
										opacity: 0,
										scale: .9
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									exit: {
										opacity: 0,
										scale: 1.1
									},
									transition: { duration: .25 },
									children: [/* @__PURE__ */ jsx("div", {
										className: "circle-web-icon-box",
										children: /* @__PURE__ */ jsx(Globe, { size: 16 })
									}), /* @__PURE__ */ jsx("div", {
										className: "circle-web-url",
										children: "sbloom.co"
									})]
								}, "circle-stage-web"),
								activeStage === 5 && /* @__PURE__ */ jsxs(motion.div, {
									className: "circle-content-canvas circle-view-video",
									initial: {
										opacity: 0,
										scale: .9
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									exit: {
										opacity: 0,
										scale: 1.1
									},
									transition: { duration: .25 },
									children: [/* @__PURE__ */ jsx("video", {
										ref: videoRef,
										src: "/hero-studio-video.mp4",
										playsInline: true,
										loop: true,
										muted: isMuted,
										className: "circle-playing-video"
									}), /* @__PURE__ */ jsx("div", {
										className: "circle-video-badge-overlay",
										children: /* @__PURE__ */ jsx("span", { children: "● VIDEO" })
									})]
								}, "circle-stage-video")
							]
						})]
					}),
					activeStage === 5 && /* @__PURE__ */ jsx("button", {
						className: "circle-sound-toggle-btn",
						onClick: toggleSound,
						title: isMuted ? "Unmute S-Bloom video" : "Mute video",
						"aria-label": "Toggle audio",
						children: isMuted ? /* @__PURE__ */ jsx(VolumeX, { size: 13 }) : /* @__PURE__ */ jsx(Volume2, { size: 13 })
					})
				]
			})
		]
	});
};
// src/pages/HomePage.tsx
var HomePage = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "home-page",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "hero-final-section",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "hero-bottom-silk-wrapper",
						"aria-hidden": "true",
						children: /* @__PURE__ */ jsxs("svg", {
							viewBox: "0 0 1440 180",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
							preserveAspectRatio: "none",
							className: "hero-bottom-silk-svg",
							children: [
								/* @__PURE__ */ jsxs("defs", { children: [
									/* @__PURE__ */ jsxs("linearGradient", {
										id: "silkFlow1",
										x1: "0%",
										y1: "0%",
										x2: "100%",
										y2: "100%",
										children: [
											/* @__PURE__ */ jsx("stop", {
												offset: "0%",
												stopColor: "#F5ECE0",
												stopOpacity: "0.45"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "35%",
												stopColor: "#EADBCC",
												stopOpacity: "0.75"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "70%",
												stopColor: "#F8F3EC",
												stopOpacity: "0.55"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "100%",
												stopColor: "#E6D5C3",
												stopOpacity: "0.8"
											})
										]
									}),
									/* @__PURE__ */ jsxs("linearGradient", {
										id: "silkFlow2",
										x1: "100%",
										y1: "0%",
										x2: "0%",
										y2: "100%",
										children: [
											/* @__PURE__ */ jsx("stop", {
												offset: "0%",
												stopColor: "#EDE2D3",
												stopOpacity: "0.4"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "50%",
												stopColor: "#FBF8F2",
												stopOpacity: "0.85"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "100%",
												stopColor: "#DFCDB8",
												stopOpacity: "0.7"
											})
										]
									}),
									/* @__PURE__ */ jsxs("linearGradient", {
										id: "silkSheen",
										x1: "0%",
										y1: "0%",
										x2: "100%",
										y2: "0%",
										children: [
											/* @__PURE__ */ jsx("stop", {
												offset: "0%",
												stopColor: "#FFFFFF",
												stopOpacity: "0"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "45%",
												stopColor: "#FFFFFF",
												stopOpacity: "0.6"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "55%",
												stopColor: "#FFFFFF",
												stopOpacity: "0.6"
											}),
											/* @__PURE__ */ jsx("stop", {
												offset: "100%",
												stopColor: "#FFFFFF",
												stopOpacity: "0"
											})
										]
									})
								] }),
								/* @__PURE__ */ jsx("path", {
									d: "M 0,60 Q 360,140 720,70 T 1440,90 L 1440,180 L 0,180 Z",
									fill: "url(#silkFlow1)"
								}),
								/* @__PURE__ */ jsx("path", {
									d: "M 0,95 Q 380,40 760,110 T 1440,65 L 1440,180 L 0,180 Z",
									fill: "url(#silkFlow2)"
								}),
								/* @__PURE__ */ jsx("path", {
									d: "M 0,95 Q 380,40 760,110 T 1440,65",
									stroke: "url(#silkSheen)",
									strokeWidth: "2",
									fill: "none"
								})
							]
						})
					}),
					/* @__PURE__ */ jsx(HeroSubtleCurves, {}),
					/* @__PURE__ */ jsxs("div", {
						className: "hero-final-container",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "hero-final-content",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "hero-final-eyebrow",
									children: [/* @__PURE__ */ jsx("span", {
										className: "eyebrow-text",
										children: "✦ LEAD GENERATION AGENCY"
									}), /* @__PURE__ */ jsx("span", { className: "eyebrow-line" })]
								}),
								/* @__PURE__ */ jsxs("h1", {
									className: "hero-final-title",
									children: [
										"We help you get",
										/* @__PURE__ */ jsx("br", {}),
										/* @__PURE__ */ jsx("span", {
											className: "hero-mocha-gold",
											children: "more revenue."
										})
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "hero-final-desc",
									children: "Not with vanity likes or meaningless views. We bring real, paying customers to your business—in person and online."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "hero-final-buttons",
									children: [/* @__PURE__ */ jsxs(Link, {
										to: "/contact",
										className: "btn-final-primary",
										children: [/* @__PURE__ */ jsx("span", { children: "Talk to sBLOOM" }), /* @__PURE__ */ jsx("svg", {
											className: "btn-arrow-icon",
											width: "18",
											height: "18",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2.4",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
										})]
									}), /* @__PURE__ */ jsx("a", {
										href: "#services-explorer",
										className: "btn-final-secondary",
										children: "Explore 4 Services"
									})]
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "hero-final-showcase",
							children: /* @__PURE__ */ jsx(HeroFloatingIcons, {})
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "home-lower-silk-wrapper",
				children: [
					/* @__PURE__ */ jsx(ModularServicesExplorer, {}),
					/* @__PURE__ */ jsx(FsmVsAdvisorComparison, {}),
					/* @__PURE__ */ jsx(DualPathCards, {}),
					/* @__PURE__ */ jsx(WhyBetter, {}),
					/* @__PURE__ */ jsx(HomePricingSection, {}),
					/* @__PURE__ */ jsx(ClientLogoMarquee, {}),
					/* @__PURE__ */ jsx("section", {
						className: "home-final-cta-section",
						children: /* @__PURE__ */ jsx("div", {
							className: "container",
							children: /* @__PURE__ */ jsxs(ScrollReveal, {
								delay: 0,
								children: [/* @__PURE__ */ jsx("h2", {
									className: "home-final-cta-title",
									children: "Your business deserves more revenue. Let’s build your pipeline."
								}), /* @__PURE__ */ jsx("div", {
									className: "home-final-cta-btn-wrap",
									children: /* @__PURE__ */ jsxs(Link, {
										to: "/contact",
										className: "home-final-cta-btn",
										children: [/* @__PURE__ */ jsx("span", { children: "Talk to sBLOOM About Revenue" }), /* @__PURE__ */ jsx("span", {
											className: "cta-arrow",
											children: "→"
										})]
									})
								})]
							})
						})
					})
				]
			}),
			/* @__PURE__ */ jsx(BottomCornerScrollShowcase, {})
		]
	});
};
// src/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll({
	default: () => home_default,
	meta: () => meta$12
});
var meta$12 = () => {
	return [
		{ title: "sBLOOM | We Help You Get More Revenue" },
		{
			name: "description",
			content: "sBLOOM delivers qualified paying customers in person and online through Field Sales Marketing (FSM), Affiliate Marketing, conversion websites, and influencers."
		},
		{
			property: "og:title",
			content: "sBLOOM | We Help You Get More Revenue"
		},
		{
			property: "og:description",
			content: "sBLOOM delivers qualified paying customers in person and online through Field Sales Marketing (FSM), Affiliate Marketing, conversion websites, and influencers."
		}
	];
};
var home_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(HomePage, {});
});
// src/pages/industries/EducationPage.tsx
var EDUCATION_SERVICES = [
	{
		id: "web-dev",
		title: "Website Development",
		icon: Monitor
	},
	{
		id: "gbp",
		title: "Google Business Profile",
		icon: MapPin
	},
	{
		id: "seo",
		title: "SEO",
		icon: TrendingUp
	},
	{
		id: "smm",
		title: "Social Media Management",
		icon: Users
	},
	{
		id: "ads",
		title: "Digital Advertising",
		icon: Megaphone
	}
];
var EducationPage = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "industry-page edu-page-container",
		children: [/* @__PURE__ */ jsx("div", {
			className: "industry-bg-curve",
			"aria-hidden": "true",
			children: /* @__PURE__ */ jsxs("svg", {
				viewBox: "0 0 1440 640",
				fill: "none",
				preserveAspectRatio: "none",
				children: [/* @__PURE__ */ jsx("path", {
					d: "M-40,80 C260,180 420,-30 840,40 C1180,100 1340,30 1520,70 L1520,0 L-40,0 Z",
					fill: "#F6EFE5",
					opacity: "0.6"
				}), /* @__PURE__ */ jsx("path", {
					d: "M-20,240 C340,320 620,110 1020,180 C1280,225 1420,130 1500,160",
					stroke: "#EFE3D3",
					strokeWidth: "38",
					strokeLinecap: "round",
					fill: "none",
					opacity: "0.5"
				})]
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "industry-container",
			children: [/* @__PURE__ */ jsx("section", {
				className: "industry-hero-banner-section",
				children: /* @__PURE__ */ jsx(ScrollReveal, {
					delay: 0,
					children: /* @__PURE__ */ jsxs("div", {
						className: "edu-hero-hd-card",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "edu-hero-hd-left",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "edu-hero-hd-eyebrow",
									children: [/* @__PURE__ */ jsx("span", {
										className: "edu-hero-hd-eyebrow-text",
										children: "S-BLOOM — EDUCATION"
									}), /* @__PURE__ */ jsx("span", { className: "edu-hero-hd-eyebrow-line" })]
								}),
								/* @__PURE__ */ jsxs("h1", {
									className: "edu-hero-hd-title",
									children: [
										"Help More Students ",
										/* @__PURE__ */ jsx("br", {}),
										/* @__PURE__ */ jsx("span", {
											className: "edu-hero-hd-title-gold",
											children: "Discover Your Institution"
										}),
										" ",
										/* @__PURE__ */ jsx("br", {}),
										"with AI-Powered Growth."
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "edu-hero-hd-desc",
									children: "We help schools, colleges, coaching centres, and training institutes use AI-driven insights and digital marketing to increase visibility, attract the right students, and grow admissions."
								}),
								/* @__PURE__ */ jsx("div", {
									className: "edu-hero-hd-actions",
									children: /* @__PURE__ */ jsxs(Link, {
										to: "/contact",
										className: "edu-hero-hd-cta-btn",
										children: [/* @__PURE__ */ jsx("span", { children: "Talk to S-BLOOM" }), /* @__PURE__ */ jsx(ArrowRight, {
											size: 17,
											strokeWidth: 2.4
										})]
									})
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "edu-hero-hd-right",
							children: /* @__PURE__ */ jsx("img", {
								src: "/edu-hero-visual-hd.jpg",
								alt: "Education AI Growth Analytics, student inquiries and admissions insights",
								className: "edu-hero-hd-img",
								width: 1200,
								height: 896,
								loading: "eager",
								decoding: "async"
							})
						})]
					})
				})
			}), /* @__PURE__ */ jsx("section", {
				className: "industry-services-section",
				children: /* @__PURE__ */ jsx("div", {
					className: "industry-services-grid",
					children: EDUCATION_SERVICES.map((service, idx) => {
						const IconComp = service.icon;
						return /* @__PURE__ */ jsx(ScrollReveal, {
							delay: 100 + idx * 70,
							children: /* @__PURE__ */ jsxs("div", {
								className: "industry-service-card",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "service-card-top",
									children: [/* @__PURE__ */ jsx("div", {
										className: "service-card-badge",
										children: /* @__PURE__ */ jsx(IconComp, {
											size: 24,
											strokeWidth: 1.9
										})
									}), /* @__PURE__ */ jsx("h3", {
										className: "service-card-title",
										children: service.title
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: "service-card-bottom",
									children: /* @__PURE__ */ jsx(Link, {
										to: "/contact",
										className: "service-card-btn",
										"aria-label": `Get started with ${service.title}`,
										children: /* @__PURE__ */ jsx(ArrowRight, {
											size: 16,
											strokeWidth: 2.4
										})
									})
								})]
							})
						}, service.id);
					})
				})
			})]
		})]
	});
};
// src/routes/education.tsx
var education_exports = /* @__PURE__ */ __exportAll({
	default: () => education_default,
	meta: () => meta$11
});
var meta$11 = () => {
	return [
		{ title: "Education Industry Digital Growth | sBLOOM" },
		{
			name: "description",
			content: "Digital growth solutions for schools, colleges, and education brands."
		},
		{
			property: "og:title",
			content: "Education Industry Digital Growth | sBLOOM"
		},
		{
			property: "og:description",
			content: "Digital growth solutions for schools, colleges, and education brands."
		}
	];
};
var education_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(EducationPage, {});
});
// src/pages/industries/HealthcarePage.tsx
var HEALTHCARE_SERVICES = [
	{
		id: "web-dev",
		title: "Website Development",
		icon: Monitor
	},
	{
		id: "gbp",
		title: "Google Business Profile",
		icon: MapPin
	},
	{
		id: "seo",
		title: "SEO",
		icon: TrendingUp
	},
	{
		id: "smm",
		title: "Social Media Management",
		icon: Users
	},
	{
		id: "ads",
		title: "Digital Advertising",
		icon: Megaphone
	}
];
var HealthcarePage = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "industry-page health-page-container",
		children: [/* @__PURE__ */ jsx("div", {
			className: "industry-bg-curve",
			"aria-hidden": "true",
			children: /* @__PURE__ */ jsxs("svg", {
				viewBox: "0 0 1440 640",
				fill: "none",
				preserveAspectRatio: "none",
				children: [/* @__PURE__ */ jsx("path", {
					d: "M-40,80 C260,180 420,-30 840,40 C1180,100 1340,30 1520,70 L1520,0 L-40,0 Z",
					fill: "#F6EFE5",
					opacity: "0.6"
				}), /* @__PURE__ */ jsx("path", {
					d: "M-20,240 C340,320 620,110 1020,180 C1280,225 1420,130 1500,160",
					stroke: "#EFE3D3",
					strokeWidth: "38",
					strokeLinecap: "round",
					fill: "none",
					opacity: "0.5"
				})]
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "industry-container",
			children: [/* @__PURE__ */ jsx("section", {
				className: "industry-hero-banner-section",
				children: /* @__PURE__ */ jsxs(ScrollReveal, {
					delay: 0,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "industry-hero-banner-wrap",
						children: [/* @__PURE__ */ jsx("img", {
							src: "/healthcare-hero-ai.png",
							alt: "Help More Patients Discover Your Practice with AI-Powered Growth",
							className: "industry-hero-banner-img"
						}), /* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: "industry-hero-banner-cta-overlay",
							"aria-label": "Talk to S-BLOOM"
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "industry-hero-banner-mobile-cta",
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/contact",
							className: "industry-hero-cta-btn",
							children: [/* @__PURE__ */ jsx("span", { children: "Talk to S-BLOOM" }), /* @__PURE__ */ jsx(ArrowRight, {
								size: 17,
								strokeWidth: 2.4
							})]
						})
					})]
				})
			}), /* @__PURE__ */ jsx("section", {
				className: "industry-services-section",
				children: /* @__PURE__ */ jsx("div", {
					className: "industry-services-grid",
					children: HEALTHCARE_SERVICES.map((service, idx) => {
						const IconComp = service.icon;
						return /* @__PURE__ */ jsx(ScrollReveal, {
							delay: 100 + idx * 70,
							children: /* @__PURE__ */ jsxs("div", {
								className: "industry-service-card",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "service-card-top",
									children: [/* @__PURE__ */ jsx("div", {
										className: "service-card-badge",
										children: /* @__PURE__ */ jsx(IconComp, {
											size: 24,
											strokeWidth: 1.9
										})
									}), /* @__PURE__ */ jsx("h3", {
										className: "service-card-title",
										children: service.title
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: "service-card-bottom",
									children: /* @__PURE__ */ jsx(Link, {
										to: "/contact",
										className: "service-card-btn",
										"aria-label": `Get started with ${service.title}`,
										children: /* @__PURE__ */ jsx(ArrowRight, {
											size: 16,
											strokeWidth: 2.4
										})
									})
								})]
							})
						}, service.id);
					})
				})
			})]
		})]
	});
};
// src/routes/healthcare.tsx
var healthcare_exports = /* @__PURE__ */ __exportAll({
	default: () => healthcare_default,
	meta: () => meta$10
});
var meta$10 = () => {
	return [
		{ title: "Healthcare Digital Growth | sBLOOM" },
		{
			name: "description",
			content: "Build trust and visibility for hospitals, clinics, and healthcare brands."
		},
		{
			property: "og:title",
			content: "Healthcare Digital Growth | sBLOOM"
		},
		{
			property: "og:description",
			content: "Build trust and visibility for hospitals, clinics, and healthcare brands."
		}
	];
};
var healthcare_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(HealthcarePage, {});
});
// src/pages/industries/ProfessionalServicesPage.tsx
var SECTOR_PILLARS = [
	{
		id: "it-companies",
		title: "IT & Tech Firms",
		tagline: "High-speed websites, technical SEO, and targeted B2B ad funnels.",
		icon: Code2,
		badge: "✦ B2B Growth Engine",
		fullTitle: "Drive High-Value B2B Inquiries for IT & Tech Firms",
		description: "We provide IT companies, SaaS startups, and software consultancies with our complete digital growth suite—technical B2B SEO, rapid-loading website architecture, and hyper-targeted Meta & Google ad funnels to predictably generate high-paying corporate client leads and revenue.",
		capabilities: [
			"High-Performance B2B Website & Product Landing Pages",
			"Technical & Local SEO to Rank for High-Intent Tech Keywords",
			"Hyper-Targeted Meta & Google Search Campaigns for B2B Leads",
			"LinkedIn & Meta Social Media Management to Establish Authority"
		],
		metricTag: "Client Inbound",
		metricBig: "2.8x",
		metricSub: "Increase in qualified corporate & startup inbound inquiries",
		trustBadge: "Verified B2B Lead Funnels",
		ctaText: "Scale Your IT Firm",
		ctaLink: "/contact"
	},
	{
		id: "individuals",
		title: "Individual Aspirants",
		tagline: "Showcase real expertise with custom portfolio websites and social authority.",
		icon: GraduationCap,
		badge: "✦ Personal Branding & Growth",
		fullTitle: "Build a Real-World Portfolio & Grow Your Digital Presence",
		description: "For individual professionals, developers, consultants, and career aspirants, we deliver custom digital solutions—building interactive portfolio websites, personal brand SEO, and social media presence that turns your skills into undeniable real-world proof to win clients and land top roles.",
		capabilities: [
			"Custom Interactive Portfolio Website Showcasing Real Projects",
			"Personal SEO to Rank on Google for Your Name & Domain Expertise",
			"Social Media & LinkedIn Branding to Attract Recruiters & Clients",
			"Structured Project Case Studies & Proof of Competence Displays"
		],
		metricTag: "Career Proof",
		metricBig: "100% Real-World",
		metricSub: "Verifiable project proof that commands market attention",
		trustBadge: "Industry-Ready Digital Portfolio",
		ctaText: "Build Your Portfolio",
		ctaLink: "/contact"
	},
	{
		id: "empires",
		title: "Political & Empires",
		tagline: "Multi-channel social media, verified Google presence, and geo-targeted ads.",
		icon: Crown,
		badge: "✦ Digital Dominance",
		fullTitle: "Build Digital Authority & Public Trust for Leaders and Empires",
		description: "For prominent leaders, political figures, and multi-venture entrepreneurs, we engineer commanding digital authority. From managing multi-channel social media with high-impact video reels to Google Business Profiles and geo-targeted advertising, we expand reach, protect reputation, and scale empire revenue.",
		capabilities: [
			"High-Impact Social Media Management with Viral Video & Reels",
			"Google Business Profile & Knowledge Panel Authority across Locations",
			"Geo-Fenced Meta & Google Ad Campaigns for Focused Regional Impact",
			"Cross-Venture Brand Positioning & Strategic Public Reputation Management"
		],
		metricTag: "Targeted Reach",
		metricBig: "10M+",
		metricSub: "Regional & targeted digital impressions delivered",
		trustBadge: "Discreet & High-Impact Campaigns",
		ctaText: "Grow Your Empire",
		ctaLink: "/contact"
	},
	{
		id: "hospitality",
		title: "Hotels & Dining",
		tagline: "Google Maps Top 3 ranking, viral social media, and direct booking funnels.",
		icon: Building2,
		badge: "✦ Footfall & Reservations",
		fullTitle: "Pack Rooms & Tables with Local SEO, Reels & Targeted Ads",
		description: "We help boutique hotels, resorts, and premier dining spots maximize footfall, direct bookings, and table reservations. With Google Business Profile dominance on Google Maps, mouth-watering Instagram reels, and zero-commission reservation funnels, we turn searches into paying customers.",
		capabilities: [
			"Google Business Profile (GBP) Local SEO to Rank Top 3 on Google Maps",
			"Mouth-Watering Instagram Reels & Video Content Showcasing Ambiance",
			"Direct Zero-Commission Booking & Reservation Website Architecture",
			"Hyper-Local Meta & Google Ads Targeting Travelers and Diners"
		],
		metricTag: "Direct Revenue",
		metricBig: "+45%",
		metricSub: "Increase in local customer footfall and direct reservations",
		trustBadge: "Top 3 Google Maps Ranking Focus",
		ctaText: "Boost Hospitality Bookings",
		ctaLink: "/contact"
	}
];
var ConsultingProfessionalServicesPage = () => {
	const [activeSectorId, setActiveSectorId] = useState("it-companies");
	const currentSector = SECTOR_PILLARS.find((s) => s.id === activeSectorId) || SECTOR_PILLARS[0];
	return /* @__PURE__ */ jsxs("div", {
		className: "ps-page-container",
		children: [/* @__PURE__ */ jsx("div", {
			className: "industry-bg-curve",
			"aria-hidden": "true",
			children: /* @__PURE__ */ jsxs("svg", {
				viewBox: "0 0 1440 640",
				fill: "none",
				preserveAspectRatio: "none",
				children: [/* @__PURE__ */ jsx("path", {
					d: "M-40,80 C260,180 420,-30 840,40 C1180,100 1340,30 1520,70 L1520,0 L-40,0 Z",
					fill: "#F6EFE5",
					opacity: "0.65"
				}), /* @__PURE__ */ jsx("path", {
					d: "M-20,240 C340,320 620,110 1020,180 C1280,225 1420,130 1500,160",
					stroke: "#EFE3D3",
					strokeWidth: "38",
					strokeLinecap: "round",
					fill: "none",
					opacity: "0.5"
				})]
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "industry-container",
			children: [
				/* @__PURE__ */ jsx("section", {
					className: "ps-hero-section",
					children: /* @__PURE__ */ jsx(ScrollReveal, {
						delay: 0,
						children: /* @__PURE__ */ jsxs("div", {
							className: "ps-hero-header",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "ps-eyebrow-wrap",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "ps-eyebrow-line",
											"aria-hidden": "true"
										}),
										/* @__PURE__ */ jsx("span", {
											className: "ps-eyebrow",
											children: "SBLOOM — PROFESSIONAL SERVICES"
										}),
										/* @__PURE__ */ jsx("span", {
											className: "ps-eyebrow-line",
											"aria-hidden": "true"
										})
									]
								}),
								/* @__PURE__ */ jsxs("h1", {
									className: "ps-hero-title",
									children: [
										"Digital Growth & Revenue for ",
										/* @__PURE__ */ jsx("br", {}),
										/* @__PURE__ */ jsx("span", {
											className: "ps-gold-text",
											children: "Modern Professional Services."
										})
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "ps-hero-desc",
									children: "For everyone across these sectors, we provide S-BLOOM's core growth engine—high-performance websites, technical SEO, Google Business Profile (GBP), Meta ads, and social media management—to generate qualified leads, footfall, and measurable revenue."
								})
							]
						})
					})
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "ps-cards-selector-section",
					children: [/* @__PURE__ */ jsx(ScrollReveal, {
						delay: 60,
						children: /* @__PURE__ */ jsx("div", {
							className: "ps-cards-selector-grid",
							children: SECTOR_PILLARS.map((sector) => {
								const IconComponent = sector.icon;
								const isActive = sector.id === activeSectorId;
								return /* @__PURE__ */ jsxs("div", {
									className: `ps-selector-card ${isActive ? "active" : ""}`,
									onClick: () => setActiveSectorId(sector.id),
									role: "button",
									tabIndex: 0,
									"aria-label": `Explore services for ${sector.title}`,
									onKeyDown: (e) => {
										if (e.key === "Enter" || e.key === " ") setActiveSectorId(sector.id);
									},
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
										className: "ps-card-top-row",
										children: [/* @__PURE__ */ jsx("div", {
											className: "ps-card-icon-box",
											children: /* @__PURE__ */ jsx(IconComponent, { size: 18 })
										}), /* @__PURE__ */ jsx("h3", {
											className: "ps-card-title",
											children: sector.title
										})]
									}), /* @__PURE__ */ jsx("p", {
										className: "ps-card-desc",
										children: sector.tagline
									})] }), /* @__PURE__ */ jsx("div", {
										className: "ps-card-action-row",
										children: /* @__PURE__ */ jsxs("span", {
											className: "ps-card-explore-btn",
											children: [/* @__PURE__ */ jsx("span", { children: "Explore Services" }), /* @__PURE__ */ jsx(ArrowRight, {
												size: 13,
												strokeWidth: 2.4
											})]
										})
									})]
								}, sector.id);
							})
						})
					}), /* @__PURE__ */ jsx(ScrollReveal, {
						delay: 120,
						children: /* @__PURE__ */ jsxs("div", {
							className: "ps-showcase-card",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "ps-showcase-left",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "ps-showcase-badge",
										children: [/* @__PURE__ */ jsx(Sparkles, { size: 12 }), /* @__PURE__ */ jsx("span", { children: currentSector.badge })]
									}),
									/* @__PURE__ */ jsx("h2", {
										className: "ps-showcase-heading",
										children: currentSector.fullTitle
									}),
									/* @__PURE__ */ jsx("p", {
										className: "ps-showcase-desc",
										children: currentSector.description
									}),
									/* @__PURE__ */ jsx("div", {
										className: "ps-showcase-capabilities",
										children: currentSector.capabilities.map((cap, cIdx) => /* @__PURE__ */ jsxs("div", {
											className: "ps-capability-item",
											children: [/* @__PURE__ */ jsx(CheckCircle2, {
												size: 15,
												className: "ps-cap-icon"
											}), /* @__PURE__ */ jsx("span", { children: cap })]
										}, cIdx))
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "ps-showcase-right",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "ps-metric-tag",
										children: currentSector.metricTag
									}),
									/* @__PURE__ */ jsx("span", {
										className: "ps-metric-big",
										children: currentSector.metricBig
									}),
									/* @__PURE__ */ jsx("span", {
										className: "ps-metric-sub",
										children: currentSector.metricSub
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "ps-trust-badge",
										children: [/* @__PURE__ */ jsx(ShieldCheck, {
											size: 14,
											color: "#BA7C3D"
										}), /* @__PURE__ */ jsx("span", { children: currentSector.trustBadge })]
									}),
									/* @__PURE__ */ jsxs(Link, {
										to: currentSector.ctaLink,
										className: "ps-action-btn",
										children: [/* @__PURE__ */ jsx("span", { children: currentSector.ctaText }), /* @__PURE__ */ jsx(ArrowRight, {
											size: 15,
											strokeWidth: 2.4
										})]
									})
								]
							})]
						})
					})]
				}),
				/* @__PURE__ */ jsx("section", {
					className: "ps-consulting-section",
					children: /* @__PURE__ */ jsxs(ScrollReveal, {
						delay: 150,
						children: [/* @__PURE__ */ jsx("div", {
							className: "ps-consulting-header",
							children: /* @__PURE__ */ jsxs("h2", {
								className: "ps-consulting-title",
								children: ["Other ", /* @__PURE__ */ jsx("span", {
									className: "ps-gold-text",
									children: "Services."
								})]
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "ps-consulting-single-card",
							children: [/* @__PURE__ */ jsx("div", {
								className: "ps-consulting-single-left",
								children: /* @__PURE__ */ jsxs("div", {
									className: "ps-consulting-card-top",
									children: [/* @__PURE__ */ jsx("div", {
										className: "ps-consulting-icon-box",
										children: /* @__PURE__ */ jsx(Compass, { size: 22 })
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
										className: "ps-consulting-single-title",
										children: "Marketing Consultation"
									}), /* @__PURE__ */ jsx("span", {
										className: "ps-consulting-single-tag",
										children: "✦ Senior Growth Advisory"
									})] })]
								})
							}), /* @__PURE__ */ jsx("div", {
								className: "ps-consulting-single-right",
								children: /* @__PURE__ */ jsxs(Link, {
									to: "/contact",
									className: "ps-consulting-single-btn",
									children: [/* @__PURE__ */ jsx("span", { children: "Book Marketing Consultation" }), /* @__PURE__ */ jsx(ArrowRight, {
										size: 15,
										strokeWidth: 2.4
									})]
								})
							})]
						})]
					})
				}),
				/* @__PURE__ */ jsx(ScrollReveal, {
					delay: 180,
					children: /* @__PURE__ */ jsxs("div", {
						className: "ps-banner-cta",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
							className: "ps-banner-title",
							children: "Ready to accelerate growth for your business, empire, or career?"
						}), /* @__PURE__ */ jsx("p", {
							className: "ps-banner-desc",
							children: "Talk directly with S-BLOOM to launch your high-impact digital growth services or book a strategic marketing consultation."
						})] }), /* @__PURE__ */ jsxs(Link, {
							to: "/contact",
							className: "ps-banner-btn",
							children: [/* @__PURE__ */ jsx("span", { children: "Talk to S-BLOOM" }), /* @__PURE__ */ jsx(ArrowRight, {
								size: 15,
								strokeWidth: 2.4
							})]
						})]
					})
				})
			]
		})]
	});
};
// src/routes/professional-services.tsx
var professional_services_exports = /* @__PURE__ */ __exportAll({
	default: () => professional_services_default,
	meta: () => meta$9
});
var meta$9 = () => {
	return [
		{ title: "Consulting & IT Digital Growth | sBLOOM" },
		{
			name: "description",
			content: "Digital presence for consulting and professional services."
		},
		{
			property: "og:title",
			content: "Consulting & IT Digital Growth | sBLOOM"
		},
		{
			property: "og:description",
			content: "Digital presence for consulting and professional services."
		}
	];
};
var professional_services_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(ConsultingProfessionalServicesPage, {});
});
// src/pages/solutions/SolutionsOverviewPage.tsx
var ALIAS_MAP = {
	fsm: 0,
	field: 0,
	"field-sales": 0,
	advisors: 1,
	advisor: 1,
	affiliate: 1,
	affiliates: 1,
	"affiliate-marketing": 1,
	digital: 2,
	build: 2,
	website: 2,
	gbp: 2,
	influencers: 3,
	influencer: 3,
	create: 3,
	promote: 3,
	grow: 0
};
var STAGES = [
	{
		id: "fsm",
		num: "01",
		label: "FIELD SALES (FSM)",
		shortLabel: "Field Sales",
		category: "In-Person · Internal Team Support",
		tagline: "Internal Feet-on-the-Street",
		titlePrimary: "Train and equip your team to",
		titleAccent: "close more on-ground deals.",
		lead: "We embed with your internal sales and field staff, giving them pitch coaching, objection-handling scripts, and structured outreach routines to bring in paying clients.",
		ctaText: "Inquire for Field Sales Support",
		ctaLink: "/contact?service=fsm",
		services: [
			{
				title: "Sales Team Field Coaching",
				desc: "Battle-tested pitch decks, live objection drills, and on-ground presentation coaching.",
				icon: Users
			},
			{
				title: "Outreach & Territory Playbooks",
				desc: "Daily target mapping, structured visit schedules, and geographic follow-up routines.",
				icon: Target
			},
			{
				title: "Objection-Handling Scripts",
				desc: "Proven answers to tough buyer doubts, pricing questions, and trust hurdles.",
				icon: ShieldCheck
			},
			{
				title: "Commission Incentive Structures",
				desc: "Clear performance tier rewards designed to motivate your staff to close aggressively.",
				icon: BarChart3
			}
		]
	},
	{
		id: "advisors",
		num: "02",
		label: "AFFILIATE MARKETING",
		shortLabel: "Affiliate Marketing",
		category: "Referral & Commission System",
		tagline: "External Warm Connectors & Affiliates",
		titlePrimary: "Trusted community leaders sending you",
		titleAccent: "warm paying clients.",
		lead: "A curated network of respected doctors, educators, executives, and community connectors who introduce warm referrals from their network for a commission.",
		ctaText: "Go to Affiliate Provider Portal",
		ctaLink: "https://sbloom.ottobon.in/provider",
		services: [
			{
				title: "Local Affiliate Recruitment",
				desc: "Identify and onboard respected local authorities, doctors, professors, and professionals.",
				icon: UserCheck
			},
			{
				title: "Zero Technical Selling Burden",
				desc: "Affiliates introduce warm leads based on personal trust; your team handles the closing.",
				icon: Heart
			},
			{
				title: "Automated Lead Attribution",
				desc: "Transparent tracking via sbloom.ottobon.in/provider with real-time payout visibility.",
				icon: Search
			},
			{
				title: "Commission Payout Management",
				desc: "Seamless, structured revenue-share disbursements that keep your affiliate partners loyal.",
				icon: Award
			}
		]
	},
	{
		id: "digital",
		num: "03",
		label: "WEBSITE & GOOGLE",
		shortLabel: "Website & Google",
		category: "Digital · Internal Conversion Assets",
		tagline: "Inbound Local Dominance",
		titlePrimary: "Turn people searching for you into",
		titleAccent: "paying customers.",
		lead: "A conversion-engineered website, Top 3 ranking on Google Maps (GBP), and active social media proof designed to capture every local search inquiry.",
		ctaText: "Inquire for Website & Google Dominance",
		ctaLink: "/contact?service=digital",
		services: [
			{
				title: "High-Conversion Website",
				desc: "Fast, mobile-first design built specifically to drive phone calls and consultation bookings.",
				icon: Globe
			},
			{
				title: "Google Business Profile (Map Pack Top 3)",
				desc: "Rank #1–3 on Google Maps when high-intent local buyers search for your services.",
				icon: MapPin
			},
			{
				title: "Active Social Media Authority",
				desc: "Consistent proof, patient/student case studies, and answers to common buying doubts.",
				icon: ShieldCheck
			},
			{
				title: "Direct WhatsApp & Call Funnels",
				desc: "Frictionless routing from search result directly to your intake desk or sales line.",
				icon: PhoneCall
			}
		]
	},
	{
		id: "influencers",
		num: "04",
		label: "INFLUENCER REACH",
		shortLabel: "Influencer Reach",
		category: "Digital · External Creator Amplification",
		tagline: "Targeted Niche Creators",
		titlePrimary: "Trusted domain voices telling their audience to",
		titleAccent: "choose your business.",
		lead: "Targeted domain and local creators sharing authentic recommendations and walkthroughs that direct pre-warmed followers straight to your consultation desk.",
		ctaText: "Inquire for Influencer Partnerships",
		ctaLink: "/contact?service=influencers",
		services: [
			{
				title: "Matching Respected Voices",
				desc: "Curated niche domain creators whose audience matches your exact target customer profile.",
				icon: Megaphone
			},
			{
				title: "Authentic Educational Storytelling",
				desc: "Real walkthroughs and experience reviews instead of scripted, unconvincing ad reads.",
				icon: Film
			},
			{
				title: "Campaign Tracking & Attribution",
				desc: "Dedicated landing links, promo codes, and real-time inquiry attribution tracking.",
				icon: Target
			},
			{
				title: "Direct Consultation Booking Funnels",
				desc: "Channel followers straight from video view to your booking or inquiry desk.",
				icon: Send
			}
		]
	}
];
var SolutionsOverviewPage = ({ initialSection }) => {
	const location = useLocation();
	const [activeIdx, setActiveIdx] = useState(0);
	const [direction, setDirection] = useState(1);
	const activeStage = STAGES[activeIdx];
	const [isPromoteMuted, setIsPromoteMuted] = useState(true);
	const [isPromotePlaying, setIsPromotePlaying] = useState(true);
	const promoteVideoRef = useRef(null);
	const togglePromoteMute = (e) => {
		e.stopPropagation();
		if (promoteVideoRef.current) {
			promoteVideoRef.current.muted = !promoteVideoRef.current.muted;
			setIsPromoteMuted(promoteVideoRef.current.muted);
		}
	};
	const togglePromotePlay = (e) => {
		e.stopPropagation();
		if (promoteVideoRef.current) {
			if (promoteVideoRef.current.paused) {
				promoteVideoRef.current.play().catch(() => {});
				setIsPromotePlaying(true);
			} else {
				promoteVideoRef.current.pause();
				setIsPromotePlaying(false);
			}
		}
	};
	const goToStage = (newIdx) => {
		if (newIdx < 0 || newIdx >= STAGES.length) return;
		setDirection(newIdx > activeIdx ? 1 : -1);
		setActiveIdx(newIdx);
		const stageId = STAGES[newIdx].id;
		if (window.location.hash !== `#${stageId}`) window.history.replaceState(null, "", `#${stageId}`);
	};
	useEffect(() => {
		const raw = (initialSection || location.hash.replace("#", "")).toLowerCase();
		if (ALIAS_MAP[raw] !== void 0) goToStage(ALIAS_MAP[raw]);
		else {
			const foundIdx = STAGES.findIndex((s) => s.id === raw);
			if (foundIdx !== -1) goToStage(foundIdx);
		}
	}, [initialSection, location.hash]);
	return /* @__PURE__ */ jsxs("div", {
		className: "sol-page",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "sol-bg-mesh",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsx("section", {
				className: "sol-hero-intro",
				children: /* @__PURE__ */ jsx("div", {
					className: "sol-container",
					children: /* @__PURE__ */ jsxs(ScrollReveal, {
						delay: 0,
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "sol-eyebrow-wrap",
								children: [
									/* @__PURE__ */ jsx("span", { className: "sol-eyebrow-line" }),
									/* @__PURE__ */ jsx("span", {
										className: "sol-eyebrow",
										children: "LEAD GENERATION AGENCY"
									}),
									/* @__PURE__ */ jsx("span", { className: "sol-eyebrow-line" })
								]
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "sol-hero-title",
								children: [
									"Four distinct services built to",
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "sol-title-accent",
										children: "generate more revenue."
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "sol-hero-desc",
								children: "Not vanity likes or meaningless views. We bring real, paying customers to your business—in person and online. Choose any single service or combine all four."
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "sol-presentation-wrap",
				children: /* @__PURE__ */ jsx("div", {
					className: "sol-viewport",
					children: /* @__PURE__ */ jsxs("div", {
						className: "sol-container",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "sol-pill-nav-wrap",
								children: /* @__PURE__ */ jsx("div", {
									className: "sol-pill-nav",
									role: "tablist",
									"aria-label": "Revenue Services",
									children: STAGES.map((stg, idx) => {
										const isActive = activeIdx === idx;
										return /* @__PURE__ */ jsxs("button", {
											type: "button",
											role: "tab",
											"aria-selected": isActive,
											className: `sol-pill-tab-btn ${isActive ? "active" : ""}`,
											onClick: () => goToStage(idx),
											children: [isActive && /* @__PURE__ */ jsx("div", {
												className: "sol-pill-sprout",
												"aria-hidden": "true",
												children: /* @__PURE__ */ jsxs("svg", {
													viewBox: "0 0 34 26",
													fill: "none",
													className: "sol-sprout-svg",
													children: [
														/* @__PURE__ */ jsx("path", {
															d: "M10 22 C9 13 3 10 1 13 C-1 16 2 20 8 19 C10 19 10 21 10 22 Z",
															fill: "#4D9B77"
														}),
														/* @__PURE__ */ jsx("path", {
															d: "M13 22 C13 10 18 3 26 4 C29 5 28 11 22 13 C17 15 14 18 13 22 Z",
															fill: "#66BC94"
														}),
														/* @__PURE__ */ jsx("path", {
															d: "M11 22 C10 13 8 2 15 1 C19 1 19 6 16 12 C14 17 12 20 11 22 Z",
															fill: "#3B8160"
														})
													]
												})
											}), /* @__PURE__ */ jsx("span", { children: stg.shortLabel })]
										}, stg.id);
									})
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "sol-page-card-wrapper",
								children: /* @__PURE__ */ jsx(AnimatePresence, {
									mode: "wait",
									custom: direction,
									children: /* @__PURE__ */ jsxs(motion.div, {
										custom: direction,
										variants: {
											enter: (dir) => ({
												y: dir > 0 ? 18 : -18,
												opacity: 0,
												scale: .99
											}),
											center: {
												y: 0,
												opacity: 1,
												scale: 1,
												transition: {
													duration: .32,
													ease: [
														.16,
														1,
														.3,
														1
													]
												}
											},
											exit: (dir) => ({
												y: dir > 0 ? -18 : 18,
												opacity: 0,
												scale: .99,
												transition: {
													duration: .22,
													ease: [
														.16,
														1,
														.3,
														1
													]
												}
											})
										},
										initial: "enter",
										animate: "center",
										exit: "exit",
										className: `sol-page-card sol-card-${activeStage.id}`,
										children: [/* @__PURE__ */ jsx("div", {
											className: "sol-card-top-bar",
											"aria-hidden": "true"
										}), /* @__PURE__ */ jsxs("div", {
											className: "sol-card-grid",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "sol-card-content",
												children: [
													/* @__PURE__ */ jsxs("div", {
														className: "sol-card-badge-row",
														children: [
															/* @__PURE__ */ jsx("div", {
																className: "sol-card-step-num",
																children: activeStage.num
															}),
															/* @__PURE__ */ jsx("span", {
																className: "sol-card-tag",
																children: activeStage.label
															}),
															/* @__PURE__ */ jsx("span", { className: "sol-badge-dash" }),
															/* @__PURE__ */ jsx("span", {
																className: "sol-category-text",
																children: activeStage.category
															})
														]
													}),
													/* @__PURE__ */ jsxs("h2", {
														className: "sol-card-headline",
														children: [
															activeStage.titlePrimary,
															" ",
															/* @__PURE__ */ jsx("span", {
																className: "sol-card-headline-accent",
																children: activeStage.titleAccent
															})
														]
													}),
													/* @__PURE__ */ jsx("p", {
														className: "sol-card-lead",
														children: activeStage.lead
													}),
													/* @__PURE__ */ jsx("div", {
														className: "sol-service-list",
														children: activeStage.services.map((svc, i) => {
															const IconComp = svc.icon;
															return /* @__PURE__ */ jsxs("div", {
																className: "sol-service-item",
																children: [/* @__PURE__ */ jsx("div", {
																	className: "sol-service-icon-box",
																	children: /* @__PURE__ */ jsx(IconComp, {
																		size: 16,
																		strokeWidth: 2.1
																	})
																}), /* @__PURE__ */ jsxs("div", {
																	className: "sol-service-text-wrap",
																	children: [/* @__PURE__ */ jsx("h3", {
																		className: "sol-service-title",
																		children: svc.title
																	}), /* @__PURE__ */ jsx("p", {
																		className: "sol-service-desc",
																		children: svc.desc
																	})]
																})]
															}, i);
														})
													}),
													activeStage.ctaLink.startsWith("http") ? /* @__PURE__ */ jsxs("a", {
														href: activeStage.ctaLink,
														className: "sol-card-cta-btn",
														target: "_blank",
														rel: "noopener noreferrer",
														children: [/* @__PURE__ */ jsx("span", { children: activeStage.ctaText }), /* @__PURE__ */ jsx(ArrowRight, {
															size: 16,
															strokeWidth: 2.4
														})]
													}) : /* @__PURE__ */ jsxs(Link, {
														to: activeStage.ctaLink,
														className: "sol-card-cta-btn",
														children: [/* @__PURE__ */ jsx("span", { children: activeStage.ctaText }), /* @__PURE__ */ jsx(ArrowRight, {
															size: 16,
															strokeWidth: 2.4
														})]
													})
												]
											}), /* @__PURE__ */ jsxs("div", {
												className: "sol-card-visual-wrap",
												children: [
													activeStage.id === "fsm" && /* @__PURE__ */ jsxs("div", {
														className: "sol-mock-fsm",
														children: [/* @__PURE__ */ jsxs("div", {
															className: "sol-fsm-card",
															children: [
																/* @__PURE__ */ jsxs("div", {
																	className: "sol-fsm-header",
																	children: [/* @__PURE__ */ jsxs("div", {
																		className: "sol-fsm-header-left",
																		children: [/* @__PURE__ */ jsx("div", {
																			className: "sol-fsm-icon-badge",
																			children: /* @__PURE__ */ jsx(Users, { size: 16 })
																		}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
																			className: "sol-fsm-title",
																			children: "Field Sales Pipeline"
																		}), /* @__PURE__ */ jsx("div", {
																			className: "sol-fsm-subtitle",
																			children: "In-Person Ground Execution"
																		})] })]
																	}), /* @__PURE__ */ jsx("span", {
																		className: "sol-fsm-status-tag",
																		children: "Daily Routine Active"
																	})]
																}),
																/* @__PURE__ */ jsxs("div", {
																	className: "sol-fsm-kpi-row",
																	children: [
																		/* @__PURE__ */ jsxs("div", {
																			className: "sol-fsm-kpi",
																			children: [/* @__PURE__ */ jsx("span", {
																				className: "sol-kpi-val",
																				children: "48"
																			}), /* @__PURE__ */ jsx("span", {
																				className: "sol-kpi-lbl",
																				children: "Target Accounts"
																			})]
																		}),
																		/* @__PURE__ */ jsxs("div", {
																			className: "sol-fsm-kpi",
																			children: [/* @__PURE__ */ jsx("span", {
																				className: "sol-kpi-val",
																				children: "24"
																			}), /* @__PURE__ */ jsx("span", {
																				className: "sol-kpi-lbl",
																				children: "On-Site Pitches"
																			})]
																		}),
																		/* @__PURE__ */ jsxs("div", {
																			className: "sol-fsm-kpi highlight",
																			children: [
																				/* @__PURE__ */ jsx("span", {
																					className: "sol-kpi-val",
																					children: "11"
																				}),
																				/* @__PURE__ */ jsx("span", {
																					className: "sol-kpi-lbl",
																					children: "Deals Closed"
																				}),
																				/* @__PURE__ */ jsx("span", {
																					className: "sol-kpi-trend",
																					children: "↑ 38%"
																				})
																			]
																		})
																	]
																}),
																/* @__PURE__ */ jsxs("div", {
																	className: "sol-fsm-playbook-box",
																	children: [
																		/* @__PURE__ */ jsxs("div", {
																			className: "sol-fsm-playbook-head",
																			children: [/* @__PURE__ */ jsx(ShieldCheck, {
																				size: 14,
																				className: "sol-fsm-gold-icon"
																			}), /* @__PURE__ */ jsx("span", { children: "Equipped Sales Playbook" })]
																		}),
																		/* @__PURE__ */ jsxs("div", {
																			className: "sol-fsm-playbook-item",
																			children: [/* @__PURE__ */ jsx("span", { className: "sol-dot-bullet" }), /* @__PURE__ */ jsx("span", { children: "Objection: \"Why switch from existing setup?\" → Handled with ROI card" })]
																		}),
																		/* @__PURE__ */ jsxs("div", {
																			className: "sol-fsm-playbook-item",
																			children: [/* @__PURE__ */ jsx("span", { className: "sol-dot-bullet" }), /* @__PURE__ */ jsx("span", { children: "Territory map: 6 high-density visits per rep/day with instant logging" })]
																		})
																	]
																})
															]
														}), /* @__PURE__ */ jsxs(motion.div, {
															className: "sol-float-rep-badge",
															animate: { y: [
																0,
																-4,
																0
															] },
															transition: {
																duration: 4.2,
																repeat: Infinity,
																ease: "easeInOut"
															},
															children: [/* @__PURE__ */ jsx("div", {
																className: "sol-rep-avatar-icon",
																children: /* @__PURE__ */ jsx(Target, { size: 15 })
															}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
																className: "sol-rep-name",
																children: "Internal Team Coaching"
															}), /* @__PURE__ */ jsx("div", {
																className: "sol-rep-sub",
																children: "Scripts · Objections · Performance Tiers"
															})] })]
														})]
													}),
													activeStage.id === "advisors" && /* @__PURE__ */ jsxs("div", {
														className: "sol-mock-advisors",
														children: [/* @__PURE__ */ jsxs("div", {
															className: "sol-adv-card",
															children: [
																/* @__PURE__ */ jsxs("div", {
																	className: "sol-adv-header",
																	children: [/* @__PURE__ */ jsxs("div", {
																		className: "sol-adv-header-left",
																		children: [/* @__PURE__ */ jsx("div", {
																			className: "sol-adv-icon-badge",
																			children: /* @__PURE__ */ jsx(UserCheck, { size: 16 })
																		}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
																			className: "sol-adv-title",
																			children: "Warm Referral Attribution"
																		}), /* @__PURE__ */ jsx("div", {
																			className: "sol-adv-subtitle",
																			children: "Community Connectors Desk"
																		})] })]
																	}), /* @__PURE__ */ jsx("span", {
																		className: "sol-adv-status-tag",
																		children: "100% Warm Referrals"
																	})]
																}),
																/* @__PURE__ */ jsxs("div", {
																	className: "sol-adv-referrals-list",
																	children: [
																		/* @__PURE__ */ jsxs("div", {
																			className: "sol-adv-row",
																			children: [
																				/* @__PURE__ */ jsx("div", {
																					className: "sol-adv-avatar",
																					children: "DR"
																				}),
																				/* @__PURE__ */ jsxs("div", {
																					className: "sol-adv-info",
																					children: [/* @__PURE__ */ jsxs("div", {
																						className: "sol-adv-name",
																						children: ["Dr. R. Sharma ", /* @__PURE__ */ jsx("span", {
																							className: "sol-adv-role",
																							children: "(Senior Physician)"
																						})]
																					}), /* @__PURE__ */ jsx("div", {
																						className: "sol-adv-meta",
																						children: "4 Warm Patient Referrals"
																					})]
																				}),
																				/* @__PURE__ */ jsx("div", {
																					className: "sol-adv-status success",
																					children: "Attributed"
																				})
																			]
																		}),
																		/* @__PURE__ */ jsxs("div", {
																			className: "sol-adv-row",
																			children: [
																				/* @__PURE__ */ jsx("div", {
																					className: "sol-adv-avatar edu",
																					children: "ED"
																				}),
																				/* @__PURE__ */ jsxs("div", {
																					className: "sol-adv-info",
																					children: [/* @__PURE__ */ jsxs("div", {
																						className: "sol-adv-name",
																						children: ["Prof. Priya K. ", /* @__PURE__ */ jsx("span", {
																							className: "sol-adv-role",
																							children: "(Dean / Academic)"
																						})]
																					}), /* @__PURE__ */ jsx("div", {
																						className: "sol-adv-meta",
																						children: "8 Qualified Enrollments"
																					})]
																				}),
																				/* @__PURE__ */ jsx("div", {
																					className: "sol-adv-status success",
																					children: "Attributed"
																				})
																			]
																		}),
																		/* @__PURE__ */ jsxs("div", {
																			className: "sol-adv-row",
																			children: [
																				/* @__PURE__ */ jsx("div", {
																					className: "sol-adv-avatar biz",
																					children: "EX"
																				}),
																				/* @__PURE__ */ jsxs("div", {
																					className: "sol-adv-info",
																					children: [/* @__PURE__ */ jsxs("div", {
																						className: "sol-adv-name",
																						children: ["A. Sengupta ", /* @__PURE__ */ jsx("span", {
																							className: "sol-adv-role",
																							children: "(Industry Executive)"
																						})]
																					}), /* @__PURE__ */ jsx("div", {
																						className: "sol-adv-meta",
																						children: "2 Enterprise Introductions"
																					})]
																				}),
																				/* @__PURE__ */ jsx("div", {
																					className: "sol-adv-status pending",
																					children: "In Progress"
																				})
																			]
																		})
																	]
																}),
																/* @__PURE__ */ jsxs("div", {
																	className: "sol-adv-footer-bar",
																	children: [/* @__PURE__ */ jsxs("div", {
																		className: "sol-adv-metric",
																		children: [/* @__PURE__ */ jsx("span", {
																			className: "sol-adv-m-lbl",
																			children: "Commission Model:"
																		}), /* @__PURE__ */ jsx("span", {
																			className: "sol-adv-m-val",
																			children: "Strictly on Closed Revenue"
																		})]
																	}), /* @__PURE__ */ jsx("span", {
																		className: "sol-adv-zero-cold",
																		children: "Zero Cold Calling"
																	})]
																})
															]
														}), /* @__PURE__ */ jsxs(motion.div, {
															className: "sol-float-trust-badge",
															animate: { y: [
																0,
																4,
																0
															] },
															transition: {
																duration: 4.6,
																repeat: Infinity,
																ease: "easeInOut",
																delay: .5
															},
															children: [/* @__PURE__ */ jsx("div", {
																className: "sol-trust-star",
																children: "★"
															}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
																className: "sol-trust-title",
																children: "High-Trust Introductions"
															}), /* @__PURE__ */ jsx("div", {
																className: "sol-trust-desc",
																children: "Connectors recommend · You close"
															})] })]
														})]
													}),
													activeStage.id === "digital" && /* @__PURE__ */ jsxs("div", {
														className: "sol-mock-build",
														children: [
															/* @__PURE__ */ jsxs("div", {
																className: "sol-browser-card",
																children: [/* @__PURE__ */ jsxs("div", {
																	className: "sol-browser-bar",
																	children: [/* @__PURE__ */ jsxs("div", {
																		className: "sol-dot-group",
																		children: [
																			/* @__PURE__ */ jsx("span", { className: "sol-dot dot-red" }),
																			/* @__PURE__ */ jsx("span", { className: "sol-dot dot-yellow" }),
																			/* @__PURE__ */ jsx("span", { className: "sol-dot dot-green" })
																		]
																	}), /* @__PURE__ */ jsxs("div", {
																		className: "sol-browser-nav",
																		children: [
																			/* @__PURE__ */ jsx("span", {
																				className: "nav-item active",
																				children: "Home"
																			}),
																			/* @__PURE__ */ jsx("span", {
																				className: "nav-item",
																				children: "Services"
																			}),
																			/* @__PURE__ */ jsx("span", {
																				className: "nav-item",
																				children: "Proof"
																			}),
																			/* @__PURE__ */ jsx("span", {
																				className: "nav-item",
																				children: "Book Direct"
																			})
																		]
																	})]
																}), /* @__PURE__ */ jsxs("div", {
																	className: "sol-browser-body",
																	children: [/* @__PURE__ */ jsxs("div", {
																		className: "sol-browser-left",
																		children: [
																			/* @__PURE__ */ jsx("h4", {
																				className: "sol-browser-heading",
																				children: "Conversion-Ready Web"
																			}),
																			/* @__PURE__ */ jsx("div", { className: "sol-wire-line w-85" }),
																			/* @__PURE__ */ jsx("div", { className: "sol-wire-line w-65" }),
																			/* @__PURE__ */ jsx("div", { className: "sol-wire-line w-45" }),
																			/* @__PURE__ */ jsx("div", { className: "sol-browser-btn-pill" })
																		]
																	}), /* @__PURE__ */ jsx("div", { className: "sol-browser-preview-box" })]
																})]
															}),
															/* @__PURE__ */ jsxs(motion.div, {
																className: "sol-float-gbp",
																animate: { y: [
																	0,
																	-4,
																	0
																] },
																transition: {
																	duration: 4.5,
																	repeat: Infinity,
																	ease: "easeInOut"
																},
																children: [
																	/* @__PURE__ */ jsxs("div", {
																		className: "sol-gbp-header",
																		children: [/* @__PURE__ */ jsx("div", {
																			className: "sol-google-icon-wrap",
																			children: /* @__PURE__ */ jsxs("svg", {
																				viewBox: "0 0 24 24",
																				width: "18",
																				height: "18",
																				children: [
																					/* @__PURE__ */ jsx("path", {
																						fill: "#4285F4",
																						d: "M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
																					}),
																					/* @__PURE__ */ jsx("path", {
																						fill: "#34A853",
																						d: "M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.4 7.33 24 12 24z"
																					}),
																					/* @__PURE__ */ jsx("path", {
																						fill: "#FBBC05",
																						d: "M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.24C.45 8.16 0 9.94 0 12s.45 3.84 1.24 5.42l4.04-3.15z"
																					}),
																					/* @__PURE__ */ jsx("path", {
																						fill: "#EA4335",
																						d: "M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.6 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
																					})
																				]
																			})
																		}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
																			className: "sol-gbp-title",
																			children: "Google Maps Top 3"
																		}), /* @__PURE__ */ jsxs("div", {
																			className: "sol-gbp-rating",
																			children: [
																				/* @__PURE__ */ jsx("span", {
																					className: "sol-gbp-num",
																					children: "4.9"
																				}),
																				/* @__PURE__ */ jsx("span", {
																					className: "sol-gbp-stars",
																					children: "★★★★★"
																				}),
																				/* @__PURE__ */ jsx("span", {
																					className: "sol-gbp-reviews",
																					children: "(140+ reviews)"
																				})
																			]
																		})] })]
																	}),
																	/* @__PURE__ */ jsxs("div", {
																		className: "sol-gbp-row",
																		children: [/* @__PURE__ */ jsx(MapPin, {
																			size: 13,
																			className: "sol-gbp-icon"
																		}), /* @__PURE__ */ jsx("div", { className: "sol-wire-line w-75" })]
																	}),
																	/* @__PURE__ */ jsxs("div", {
																		className: "sol-gbp-row",
																		children: [/* @__PURE__ */ jsx(Globe, {
																			size: 13,
																			className: "sol-gbp-icon"
																		}), /* @__PURE__ */ jsx("div", { className: "sol-wire-line w-55" })]
																	})
																]
															}),
															/* @__PURE__ */ jsxs(motion.div, {
																className: "sol-float-vis",
																animate: { y: [
																	0,
																	4,
																	0
																] },
																transition: {
																	duration: 4.8,
																	repeat: Infinity,
																	ease: "easeInOut",
																	delay: .6
																},
																children: [/* @__PURE__ */ jsx("div", {
																	className: "sol-vis-icon-wrap",
																	children: /* @__PURE__ */ jsx(BarChart3, {
																		size: 18,
																		strokeWidth: 2.4
																	})
																}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
																	className: "sol-vis-label",
																	children: "Local Search Inquiries"
																}), /* @__PURE__ */ jsx("span", {
																	className: "sol-vis-arrow",
																	children: "↗ +145%"
																})] })]
															})
														]
													}),
													activeStage.id === "influencers" && /* @__PURE__ */ jsx("div", {
														className: "sol-mock-promote sol-video-only-view",
														children: /* @__PURE__ */ jsxs("div", {
															className: "sol-promote-video-box",
															onClick: togglePromotePlay,
															title: isPromotePlaying ? "Click to pause" : "Click to play",
															style: { cursor: "pointer" },
															children: [
																/* @__PURE__ */ jsx("video", {
																	ref: promoteVideoRef,
																	src: "/IMG_3694.mp4",
																	autoPlay: true,
																	muted: isPromoteMuted,
																	loop: true,
																	playsInline: true,
																	className: "sol-promote-video-element"
																}),
																/* @__PURE__ */ jsxs("div", {
																	className: "sol-video-top-overlay",
																	children: [/* @__PURE__ */ jsxs("div", {
																		className: "sol-video-live-badge",
																		children: [/* @__PURE__ */ jsx("span", { className: "sol-video-rec-dot" }), /* @__PURE__ */ jsx("span", { children: "CREATOR AMPLIFICATION" })]
																	}), /* @__PURE__ */ jsx("div", {
																		className: "sol-video-controls-group",
																		children: /* @__PURE__ */ jsx("button", {
																			type: "button",
																			onClick: togglePromoteMute,
																			className: "sol-video-mini-btn",
																			"aria-label": isPromoteMuted ? "Unmute audio" : "Mute audio",
																			title: isPromoteMuted ? "Unmute" : "Mute",
																			children: isPromoteMuted ? /* @__PURE__ */ jsx(VolumeX, { size: 13 }) : /* @__PURE__ */ jsx(Volume2, { size: 13 })
																		})
																	})]
																}),
																/* @__PURE__ */ jsxs("div", {
																	className: "sol-video-metrics-bar",
																	children: [
																		/* @__PURE__ */ jsxs("div", {
																			className: "sol-video-stat",
																			children: [/* @__PURE__ */ jsx("span", {
																				className: "sol-v-label",
																				children: "Target Audience"
																			}), /* @__PURE__ */ jsx("span", {
																				className: "sol-v-val",
																				children: "100% Niche Match"
																			})]
																		}),
																		/* @__PURE__ */ jsx("div", { className: "sol-v-divider" }),
																		/* @__PURE__ */ jsxs("div", {
																			className: "sol-video-stat",
																			children: [/* @__PURE__ */ jsx("span", {
																				className: "sol-v-label",
																				children: "Inquiry Funnel"
																			}), /* @__PURE__ */ jsx("span", {
																				className: "sol-v-val",
																				children: "Direct Consultation"
																			})]
																		})
																	]
																})
															]
														})
													})
												]
											})]
										})]
									}, activeStage.id)
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "sol-page-controls-bar",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "sol-page-indicator",
									children: [/* @__PURE__ */ jsxs("span", { children: [
										"Service ",
										/* @__PURE__ */ jsx("strong", { children: activeIdx + 1 }),
										" of ",
										/* @__PURE__ */ jsx("strong", { children: "4" }),
										":"
									] }), /* @__PURE__ */ jsx("span", {
										className: "sol-indicator-label",
										children: activeStage.shortLabel
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "sol-page-arrows",
									children: [/* @__PURE__ */ jsxs("button", {
										type: "button",
										className: "sol-page-arrow-btn",
										onClick: () => goToStage(activeIdx - 1),
										disabled: activeIdx === 0,
										"aria-label": "Previous Service",
										children: [/* @__PURE__ */ jsx(ArrowLeft, { size: 15 }), /* @__PURE__ */ jsx("span", { children: "Previous" })]
									}), /* @__PURE__ */ jsxs("button", {
										type: "button",
										className: "sol-page-arrow-btn",
										onClick: () => goToStage(activeIdx + 1),
										disabled: activeIdx === STAGES.length - 1,
										"aria-label": "Next Service",
										children: [/* @__PURE__ */ jsx("span", { children: "Next" }), /* @__PURE__ */ jsx(ArrowRight, { size: 15 })]
									})]
								})]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "sol-modular-freedom-sec",
				children: /* @__PURE__ */ jsx("div", {
					className: "sol-container",
					children: /* @__PURE__ */ jsx(ScrollReveal, {
						delay: 0,
						children: /* @__PURE__ */ jsxs("div", {
							className: "sol-modular-card",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "sol-modular-header",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "sol-eyebrow-wrap",
											children: [
												/* @__PURE__ */ jsx("span", { className: "sol-eyebrow-line" }),
												/* @__PURE__ */ jsx("span", {
													className: "sol-eyebrow",
													children: "MODULAR FREEDOM"
												}),
												/* @__PURE__ */ jsx("span", { className: "sol-eyebrow-line" })
											]
										}),
										/* @__PURE__ */ jsxs("h2", {
											className: "sol-modular-title",
											children: ["Choose Any Single Service. ", /* @__PURE__ */ jsx("span", {
												className: "sol-title-accent",
												children: "Or Combine All 4."
											})]
										}),
										/* @__PURE__ */ jsx("p", {
											className: "sol-modular-desc",
											children: "You are never locked into an expensive, bloated marketing package. Take the exact channel your business needs today, and expand only when revenue justifies it."
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "sol-modular-grid",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "sol-mod-box",
											children: [
												/* @__PURE__ */ jsx("div", {
													className: "sol-mod-box-num",
													children: "01"
												}),
												/* @__PURE__ */ jsx("h3", {
													className: "sol-mod-box-title",
													children: "Field Sales (FSM)"
												}),
												/* @__PURE__ */ jsx("span", {
													className: "sol-mod-pill in-person",
													children: "In-Person · Internal"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "sol-mod-box-p",
													children: "For businesses needing feet on the ground to pitch, overcome doubts, and sign customers directly."
												}),
												/* @__PURE__ */ jsx(Link, {
													to: "/contact?service=fsm",
													className: "sol-mod-link",
													children: "Inquire for FSM →"
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "sol-mod-box",
											children: [
												/* @__PURE__ */ jsx("div", {
													className: "sol-mod-box-num",
													children: "02"
												}),
												/* @__PURE__ */ jsx("h3", {
													className: "sol-mod-box-title",
													children: "Affiliate Marketing"
												}),
												/* @__PURE__ */ jsx("span", {
													className: "sol-mod-pill in-person",
													children: "Referral & Commission"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "sol-mod-box-p",
													children: "For organizations where credibility, prestige, and doctor/educator referrals drive high-ticket choices."
												}),
												/* @__PURE__ */ jsx("a", {
													href: "https://sbloom.ottobon.in/provider",
													className: "sol-mod-link",
													target: "_blank",
													rel: "noopener noreferrer",
													children: "Affiliate Provider Portal →"
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "sol-mod-box",
											children: [
												/* @__PURE__ */ jsx("div", {
													className: "sol-mod-box-num",
													children: "03"
												}),
												/* @__PURE__ */ jsx("h3", {
													className: "sol-mod-box-title",
													children: "Website & Google"
												}),
												/* @__PURE__ */ jsx("span", {
													className: "sol-mod-pill digital",
													children: "Digital · Internal"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "sol-mod-box-p",
													children: "For capturing active, high-intent local searchers looking for your services on Google Maps right now."
												}),
												/* @__PURE__ */ jsx(Link, {
													to: "/contact?service=digital",
													className: "sol-mod-link",
													children: "Inquire Website & GBP →"
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "sol-mod-box",
											children: [
												/* @__PURE__ */ jsx("div", {
													className: "sol-mod-box-num",
													children: "04"
												}),
												/* @__PURE__ */ jsx("h3", {
													className: "sol-mod-box-title",
													children: "Influencer Reach"
												}),
												/* @__PURE__ */ jsx("span", {
													className: "sol-mod-pill digital",
													children: "Digital · External"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "sol-mod-box-p",
													children: "For fast audience trust through credible domain creators who recommend your business to their followers."
												}),
												/* @__PURE__ */ jsx(Link, {
													to: "/contact?service=influencers",
													className: "sol-mod-link",
													children: "Inquire Influencers →"
												})
											]
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "sol-modular-cta-bar",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "sol-mod-cta-text",
										children: [/* @__PURE__ */ jsx("div", {
											className: "sol-mod-cta-headline",
											children: "Ready to solve your revenue bottlenecks?"
										}), /* @__PURE__ */ jsx("div", {
											className: "sol-mod-cta-sub",
											children: "Let's find the exact combination that brings paying clients to your door."
										})]
									}), /* @__PURE__ */ jsxs(Link, {
										to: "/contact",
										className: "sol-mod-cta-btn",
										children: [/* @__PURE__ */ jsx("span", { children: "Talk to sBLOOM" }), /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
									})]
								})
							]
						})
					})
				})
			})
		]
	});
};
// src/routes/solutions.tsx
var solutions_exports = /* @__PURE__ */ __exportAll({
	default: () => solutions_default,
	meta: () => meta$8
});
var meta$8 = () => {
	return [
		{ title: "Revenue & Lead Generation Services | sBLOOM" },
		{
			name: "description",
			content: "We help you get more revenue. Field sales marketing, affiliate marketing, high-conversion website & Google Maps Top 3, and authentic influencer partnerships."
		},
		{
			property: "og:title",
			content: "Revenue & Lead Generation Services | sBLOOM"
		},
		{
			property: "og:description",
			content: "We help you get more revenue. Field sales marketing, affiliate marketing, high-conversion website & Google Maps Top 3, and authentic influencer partnerships."
		}
	];
};
var solutions_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(SolutionsOverviewPage, {});
});
// src/routes/build.tsx
var build_exports = /* @__PURE__ */ __exportAll({
	default: () => build_default,
	meta: () => meta$7
});
var meta$7 = () => {
	return [
		{ title: "Website & Google Maps Top 3 | sBLOOM Revenue Services" },
		{
			name: "description",
			content: "Capture high-intent local searchers with a conversion-engineered website and Google Business Profile Top 3 ranking."
		},
		{
			property: "og:title",
			content: "Website & Google Maps Top 3 | sBLOOM Revenue Services"
		},
		{
			property: "og:description",
			content: "Capture high-intent local searchers with a conversion-engineered website and Google Business Profile Top 3 ranking."
		}
	];
};
var build_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(SolutionsOverviewPage, { initialSection: "digital" });
});
// src/routes/create.tsx
var create_exports = /* @__PURE__ */ __exportAll({
	default: () => create_default,
	meta: () => meta$6
});
var meta$6 = () => {
	return [
		{ title: "Affiliate Marketing & Warm Referrals | sBLOOM Revenue Services" },
		{
			name: "description",
			content: "Curated community connectors, respected doctors, and executives sending warm paying referrals."
		},
		{
			property: "og:title",
			content: "Affiliate Marketing & Warm Referrals | sBLOOM Revenue Services"
		},
		{
			property: "og:description",
			content: "Curated community connectors, respected doctors, and executives sending warm paying referrals."
		}
	];
};
var create_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(SolutionsOverviewPage, { initialSection: "advisors" });
});
// src/routes/promote.tsx
var promote_exports = /* @__PURE__ */ __exportAll({
	default: () => promote_default,
	meta: () => meta$5
});
var meta$5 = () => {
	return [
		{ title: "Influencer Reach & Creator Partnerships | sBLOOM Revenue Services" },
		{
			name: "description",
			content: "Trusted domain voices sharing authentic recommendations that channel followers straight to your consultation desk."
		},
		{
			property: "og:title",
			content: "Influencer Reach & Creator Partnerships | sBLOOM Revenue Services"
		},
		{
			property: "og:description",
			content: "Trusted domain voices sharing authentic recommendations that channel followers straight to your consultation desk."
		}
	];
};
var promote_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(SolutionsOverviewPage, { initialSection: "influencers" });
});
// src/pages/AboutPage.tsx
var AboutPage = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "about-page",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "about-bg-glow about-glow-top",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "about-bg-glow about-glow-bottom",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "about-bg-waves",
				"aria-hidden": "true",
				children: /* @__PURE__ */ jsxs("svg", {
					viewBox: "0 0 1440 900",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [/* @__PURE__ */ jsx("path", {
						d: "M-100 240C200 180 380 340 520 480C680 640 920 720 1200 680C1340 660 1480 580 1580 500",
						stroke: "#EDE1D1",
						strokeWidth: "32",
						opacity: "0.4"
					}), /* @__PURE__ */ jsx("path", {
						d: "M-50 160C250 120 450 260 600 420C750 580 980 660 1280 600",
						stroke: "#F5ECE0",
						strokeWidth: "24",
						opacity: "0.6"
					})]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "container about-container",
				children: [/* @__PURE__ */ jsxs("section", {
					className: "about-hero-grid",
					children: [/* @__PURE__ */ jsx("div", {
						className: "about-hero-text",
						children: /* @__PURE__ */ jsxs(ScrollReveal, {
							delay: 0,
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "about-eyebrow",
									children: "ABOUT S-BLOOM"
								}),
								/* @__PURE__ */ jsx("h1", {
									className: "about-hero-title",
									children: "We help good businesses get noticed and chosen."
								}),
								/* @__PURE__ */ jsx("p", {
									className: "about-hero-desc",
									children: "S-Bloom helps organizations in healthcare, education, and professional services explain what they do, reach the right people, and build trust online."
								})
							]
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "about-hero-visual-wrap",
						children: /* @__PURE__ */ jsx(ScrollReveal, {
							delay: 150,
							children: /* @__PURE__ */ jsxs("div", {
								className: "about-visual-scene",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "about-arches-cluster",
									children: [
										/* @__PURE__ */ jsxs(Link, {
											to: "/industries/healthcare",
											className: "about-arch-card about-arch-healthcare",
											children: [/* @__PURE__ */ jsx("div", {
												className: "about-arch-img-wrap",
												children: /* @__PURE__ */ jsx("img", {
													src: "/about-healthcare-doctor.jpg",
													alt: "S-Bloom Healthcare Partner",
													className: "about-arch-img"
												})
											}), /* @__PURE__ */ jsxs("div", {
												className: "about-arch-badge",
												children: [/* @__PURE__ */ jsx("div", {
													className: "about-badge-icon-box",
													children: /* @__PURE__ */ jsx(Heart, {
														size: 14,
														strokeWidth: 2.4
													})
												}), /* @__PURE__ */ jsx("span", {
													className: "about-badge-text",
													children: "Healthcare"
												})]
											})]
										}),
										/* @__PURE__ */ jsxs(Link, {
											to: "/industries/education",
											className: "about-arch-card about-arch-education",
											children: [/* @__PURE__ */ jsx("div", {
												className: "about-arch-img-wrap",
												children: /* @__PURE__ */ jsx("img", {
													src: "/about-education-teacher.jpg",
													alt: "S-Bloom Education Partner",
													className: "about-arch-img"
												})
											}), /* @__PURE__ */ jsxs("div", {
												className: "about-arch-badge",
												children: [/* @__PURE__ */ jsx("div", {
													className: "about-badge-icon-box",
													children: /* @__PURE__ */ jsx(GraduationCap, {
														size: 15,
														strokeWidth: 2.2
													})
												}), /* @__PURE__ */ jsx("span", {
													className: "about-badge-text",
													children: "Education"
												})]
											})]
										}),
										/* @__PURE__ */ jsxs(Link, {
											to: "/industries/professional-services",
											className: "about-arch-card about-arch-pro",
											children: [/* @__PURE__ */ jsx("div", {
												className: "about-arch-img-wrap",
												children: /* @__PURE__ */ jsx("img", {
													src: "/about-professional-exec.jpg",
													alt: "S-Bloom Professional Services Partner",
													className: "about-arch-img"
												})
											}), /* @__PURE__ */ jsxs("div", {
												className: "about-arch-badge",
												children: [/* @__PURE__ */ jsx("div", {
													className: "about-badge-icon-box",
													children: /* @__PURE__ */ jsx(Briefcase, {
														size: 14,
														strokeWidth: 2.4
													})
												}), /* @__PURE__ */ jsx("span", {
													className: "about-badge-text",
													children: "Professional Services"
												})]
											})]
										})
									]
								}), /* @__PURE__ */ jsx("div", {
									className: "about-desk-foreground",
									children: /* @__PURE__ */ jsxs("div", {
										className: "about-laptop-mockup",
										children: [/* @__PURE__ */ jsx("div", {
											className: "about-laptop-lid",
											children: /* @__PURE__ */ jsx("div", {
												className: "about-laptop-screen",
												children: /* @__PURE__ */ jsxs("div", {
													className: "about-chart-display",
													children: [/* @__PURE__ */ jsx(TrendingUp, {
														size: 20,
														className: "about-chart-icon",
														strokeWidth: 2.4
													}), /* @__PURE__ */ jsxs("div", {
														className: "about-chart-bars",
														children: [
															/* @__PURE__ */ jsx("span", {
																className: "about-bar",
																style: { height: "35%" }
															}),
															/* @__PURE__ */ jsx("span", {
																className: "about-bar",
																style: { height: "55%" }
															}),
															/* @__PURE__ */ jsx("span", {
																className: "about-bar",
																style: { height: "75%" }
															}),
															/* @__PURE__ */ jsx("span", {
																className: "about-bar is-active",
																style: { height: "100%" }
															})
														]
													})]
												})
											})
										}), /* @__PURE__ */ jsx("div", { className: "about-laptop-base" })]
									})
								})]
							})
						})
					})]
				}), /* @__PURE__ */ jsx("section", {
					className: "about-pillars-section",
					children: /* @__PURE__ */ jsxs("div", {
						className: "about-pillars-grid",
						children: [/* @__PURE__ */ jsx(ScrollReveal, {
							delay: 200,
							className: "h-full",
							children: /* @__PURE__ */ jsxs("div", {
								className: "about-pillar-card",
								children: [/* @__PURE__ */ jsx("div", {
									className: "about-pillar-icon-box",
									children: /* @__PURE__ */ jsx(Target, {
										size: 26,
										strokeWidth: 1.8,
										className: "about-pillar-icon"
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: "about-pillar-content",
									children: [
										/* @__PURE__ */ jsx("h2", {
											className: "about-pillar-title",
											children: "Our Approach"
										}),
										/* @__PURE__ */ jsx("div", { className: "about-pillar-underline" }),
										/* @__PURE__ */ jsx("p", {
											className: "about-pillar-text",
											children: "We first understand your business and audience. Then we create a clear digital strategy that helps people find you, understand your value, and trust your services."
										})
									]
								})]
							})
						}), /* @__PURE__ */ jsx(ScrollReveal, {
							delay: 300,
							className: "h-full",
							children: /* @__PURE__ */ jsxs("div", {
								className: "about-pillar-card",
								children: [/* @__PURE__ */ jsx("div", {
									className: "about-pillar-icon-box",
									children: /* @__PURE__ */ jsx(Users, {
										size: 26,
										strokeWidth: 1.8,
										className: "about-pillar-icon"
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: "about-pillar-content",
									children: [
										/* @__PURE__ */ jsx("h2", {
											className: "about-pillar-title",
											children: "How We Work"
										}),
										/* @__PURE__ */ jsx("div", { className: "about-pillar-underline" }),
										/* @__PURE__ */ jsx("p", {
											className: "about-pillar-text",
											children: "Our core team plans the strategy and works with skilled creative partners to deliver the right content, design, website, and digital marketing support."
										})
									]
								})]
							})
						})]
					})
				})]
			})
		]
	});
};
// src/routes/about.tsx
var about_exports = /* @__PURE__ */ __exportAll({
	default: () => about_default,
	meta: () => meta$4
});
var meta$4 = () => {
	return [
		{ title: "About sBLOOM | Our Story" },
		{
			name: "description",
			content: "Learn about sBLOOM, our methodology, and our team."
		},
		{
			property: "og:title",
			content: "About sBLOOM | Our Story"
		},
		{
			property: "og:description",
			content: "Learn about sBLOOM, our methodology, and our team."
		}
	];
};
var about_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(AboutPage, {});
});
// src/pages/HowItWorksPage.tsx
var STEPS = [
	{
		id: "understand",
		badge: "01 / 05",
		title: "Understand your business",
		desc: "We learn about your services, audience, goals, and current online presence to understand where you stand today.",
		image: "/hiw/step1.jpg",
		alt: "Laptop displaying business analytics on a warm professional desk",
		icon: Search,
		tintBg: "#F7EFE5",
		iconColor: "#935F2D"
	},
	{
		id: "opportunities",
		badge: "02 / 05",
		title: "Find opportunities",
		desc: "We identify what is working, find gaps, and discover opportunities to help more people find and choose your business.",
		image: "/hiw/step2.jpg",
		alt: "Spiral notebook with planning notes, ideas and lightbulb sketch",
		icon: BarChart3,
		tintBg: "#F3EAE0",
		iconColor: "#785A46"
	},
	{
		id: "plan",
		badge: "03 / 05",
		title: "Create the right plan",
		desc: "We combine business insights and AI-assisted research to plan the right messaging, content, and marketing activities for your goals.",
		image: "/hiw/step3.jpg",
		alt: "Laptop, planning notes, and a clear strategy workspace",
		icon: Lightbulb,
		tintBg: "#FBF2E0",
		iconColor: "#B07B28"
	},
	{
		id: "action",
		badge: "04 / 05",
		title: "Put the plan into action",
		desc: "We improve your online presence, create useful content, and run relevant campaigns across the right platforms.",
		image: "/hiw/step4.jpg",
		alt: "Professional studio camera setup for marketing content creation",
		icon: Rocket,
		tintBg: "#FCEFE7",
		iconColor: "#A1592A"
	},
	{
		id: "growth",
		badge: "05 / 05",
		title: "Track and grow",
		desc: "We review performance, understand what is working, and improve our approach to support long-term business growth.",
		image: "/hiw/step5.jpg",
		alt: "Tablet displaying business growth analytics dashboard",
		icon: TrendingUp,
		tintBg: "#EFF2E7",
		iconColor: "#5C7449"
	}
];
var HowItWorksPage = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
	const prefersReducedMotion = useReducedMotion();
	const prevOffsetsRef = useRef({
		0: 0,
		1: 1,
		2: 2,
		3: -2,
		4: -1
	});
	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	const total = STEPS.length;
	const handleNext = useCallback(() => {
		setActiveIndex((prev) => (prev + 1) % total);
	}, [total]);
	const handlePrev = useCallback(() => {
		setActiveIndex((prev) => (prev - 1 + total) % total);
	}, [total]);
	const handleGoTo = useCallback((index) => {
		setActiveIndex(index);
	}, []);
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "ArrowLeft") handlePrev();
			else if (e.key === "ArrowRight") handleNext();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [handleNext, handlePrev]);
	const touchStartXRef = useRef(null);
	const touchEndXRef = useRef(null);
	const handleTouchStart = (e) => {
		touchStartXRef.current = e.targetTouches[0].clientX;
		touchEndXRef.current = null;
	};
	const handleTouchMove = (e) => {
		touchEndXRef.current = e.targetTouches[0].clientX;
	};
	const handleTouchEnd = () => {
		if (touchStartXRef.current === null || touchEndXRef.current === null) return;
		const distance = touchStartXRef.current - touchEndXRef.current;
		if (distance > 45) handleNext();
		else if (distance < -45) handlePrev();
		touchStartXRef.current = null;
		touchEndXRef.current = null;
	};
	const getOffset = (index) => {
		let diff = index - activeIndex;
		if (diff > total / 2) diff -= total;
		if (diff < -total / 2) diff += total;
		return diff;
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "hiw-carousel-page",
		children: [/* @__PURE__ */ jsx("div", {
			className: "hiw-vector-curves",
			"aria-hidden": "true",
			children: /* @__PURE__ */ jsxs("svg", {
				viewBox: "0 0 1440 900",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				children: [/* @__PURE__ */ jsx("path", {
					d: "M-60 180 C240 80, 520 280, 780 440 C1040 600, 1260 580, 1500 480",
					stroke: "#EADBCC",
					strokeWidth: "20",
					opacity: "0.32"
				}), /* @__PURE__ */ jsx("path", {
					d: "M-20 100 C320 60, 580 220, 840 380 C1100 540, 1320 500, 1540 420",
					stroke: "#F0E3D3",
					strokeWidth: "14",
					opacity: "0.45"
				})]
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "hiw-carousel-container",
			children: [
				/* @__PURE__ */ jsxs("header", {
					className: "hiw-header-centered",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "hiw-eyebrow-container",
						children: [
							/* @__PURE__ */ jsx("span", { className: "hiw-eyebrow-rule" }),
							/* @__PURE__ */ jsx("span", {
								className: "hiw-eyebrow-text",
								children: "HOW IT WORKS"
							}),
							/* @__PURE__ */ jsx("span", { className: "hiw-eyebrow-rule" })
						]
					}), /* @__PURE__ */ jsxs("h1", {
						className: "hiw-headline-main",
						children: [
							"AI-powered process.",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								className: "hiw-headline-highlight",
								children: "Real growth for your business."
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "hiw-carousel-section",
					"aria-label": "How It Works Steps Carousel",
					onTouchStart: handleTouchStart,
					onTouchMove: handleTouchMove,
					onTouchEnd: handleTouchEnd,
					children: [
						/* @__PURE__ */ jsx("button", {
							type: "button",
							className: "hiw-nav-arrow hiw-nav-prev",
							onClick: handlePrev,
							"aria-label": "Previous step",
							children: /* @__PURE__ */ jsx(ArrowLeft, {
								size: 18,
								strokeWidth: 2.4
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "hiw-cards-track",
							children: STEPS.map((step, idx) => {
								var _prevOffsetsRef$curre;
								const offset = getOffset(idx);
								const prevOffset = (_prevOffsetsRef$curre = prevOffsetsRef.current[idx]) !== null && _prevOffsetsRef$curre !== void 0 ? _prevOffsetsRef$curre : offset;
								const isWrapping = Math.abs(prevOffset - offset) > 2;
								prevOffsetsRef.current[idx] = offset;
								const isActive = offset === 0;
								const IconComponent = step.icon;
								const isMobile = windowWidth < 680;
								const isTablet = windowWidth >= 680 && windowWidth < 1080;
								let targetX = 0;
								let targetScale = 1;
								let targetOpacity = 1;
								let targetBlur = "blur(0px)";
								let targetZIndex = 10;
								let isVisible = true;
								if (isMobile) {
									if (offset === 0) {
										targetX = 0;
										targetScale = 1;
										targetOpacity = 1;
										targetBlur = "blur(0px)";
										targetZIndex = 10;
									} else if (offset === 1) {
										targetX = 320;
										targetScale = .85;
										targetOpacity = 0;
										targetBlur = "blur(0px)";
										targetZIndex = 5;
										isVisible = false;
									} else if (offset === -1) {
										targetX = -320;
										targetScale = .85;
										targetOpacity = 0;
										targetBlur = "blur(0px)";
										targetZIndex = 5;
										isVisible = false;
									} else {
										targetX = offset > 0 ? 450 : -450;
										targetScale = .75;
										targetOpacity = 0;
										targetBlur = "blur(0px)";
										targetZIndex = 1;
										isVisible = false;
									}
								} else if (isTablet) {
									if (offset === 0) {
										targetX = 0;
										targetScale = 1;
										targetOpacity = 1;
										targetBlur = "blur(0px)";
										targetZIndex = 10;
									} else if (offset === 1) {
										targetX = 245;
										targetScale = .86;
										targetOpacity = .65;
										targetBlur = "blur(0px)";
										targetZIndex = 6;
									} else if (offset === -1) {
										targetX = -245;
										targetScale = .86;
										targetOpacity = .65;
										targetBlur = "blur(0px)";
										targetZIndex = 6;
									} else {
										targetX = offset > 0 ? 420 : -420;
										targetScale = .72;
										targetOpacity = 0;
										targetBlur = "blur(0px)";
										targetZIndex = 2;
										isVisible = false;
									}
								} else if (offset === 0) {
									targetX = 0;
									targetScale = 1;
									targetOpacity = 1;
									targetBlur = "blur(0px)";
									targetZIndex = 10;
								} else if (offset === 1) {
									targetX = 285;
									targetScale = .86;
									targetOpacity = .68;
									targetBlur = "blur(0px)";
									targetZIndex = 6;
								} else if (offset === -1) {
									targetX = -285;
									targetScale = .86;
									targetOpacity = .68;
									targetBlur = "blur(0px)";
									targetZIndex = 6;
								} else if (offset === 2) {
									targetX = 520;
									targetScale = .72;
									targetOpacity = .28;
									targetBlur = "blur(0px)";
									targetZIndex = 3;
								} else if (offset === -2) {
									targetX = -520;
									targetScale = .72;
									targetOpacity = .28;
									targetBlur = "blur(0px)";
									targetZIndex = 3;
								}
								const transitionConfig = prefersReducedMotion ? { duration: .1 } : isWrapping ? { duration: 0 } : {
									type: "spring",
									stiffness: 240,
									damping: 27,
									mass: .85
								};
								return /* @__PURE__ */ jsxs(motion.article, {
									className: `hiw-card-item ${isActive ? "is-active" : "is-preview"}`,
									initial: false,
									animate: {
										x: targetX,
										scale: targetScale,
										opacity: targetOpacity,
										filter: targetBlur,
										zIndex: targetZIndex
									},
									transition: transitionConfig,
									style: {
										visibility: isVisible ? "visible" : "hidden",
										pointerEvents: isVisible ? "auto" : "none",
										cursor: isActive ? "default" : "pointer"
									},
									onClick: () => {
										if (!isActive) handleGoTo(idx);
									},
									tabIndex: isActive ? 0 : -1,
									"aria-current": isActive ? "true" : void 0,
									children: [/* @__PURE__ */ jsxs("div", {
										className: "hiw-card-media",
										children: [/* @__PURE__ */ jsx("img", {
											src: step.image,
											alt: step.alt,
											className: "hiw-card-img",
											loading: "eager"
										}), /* @__PURE__ */ jsx("div", {
											className: "hiw-step-pill",
											"aria-label": `Step ${step.badge}`,
											children: /* @__PURE__ */ jsx("span", { children: step.badge })
										})]
									}), /* @__PURE__ */ jsxs("div", {
										className: "hiw-card-content",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "hiw-card-title-row",
											children: [/* @__PURE__ */ jsx("div", {
												className: "hiw-card-icon-bubble",
												style: {
													backgroundColor: step.tintBg,
													color: step.iconColor
												},
												children: /* @__PURE__ */ jsx(IconComponent, {
													size: 17,
													strokeWidth: 2.2
												})
											}), /* @__PURE__ */ jsx("h3", {
												className: "hiw-card-title",
												children: step.title
											})]
										}), /* @__PURE__ */ jsx("p", {
											className: `hiw-card-desc ${isActive ? "is-desc-active" : "is-desc-faint"}`,
											children: step.desc
										})]
									})]
								}, step.id);
							})
						}),
						/* @__PURE__ */ jsx("button", {
							type: "button",
							className: "hiw-nav-arrow hiw-nav-next",
							onClick: handleNext,
							"aria-label": "Next step",
							children: /* @__PURE__ */ jsx(ArrowRight, {
								size: 18,
								strokeWidth: 2.4
							})
						})
					]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hiw-dots-nav",
					"aria-label": "Step selection",
					children: STEPS.map((s, dotIndex) => {
						const isDotActive = dotIndex === activeIndex;
						return /* @__PURE__ */ jsx("button", {
							type: "button",
							className: `hiw-dot-btn ${isDotActive ? "is-active" : ""}`,
							onClick: () => handleGoTo(dotIndex),
							"aria-label": `Go to step ${dotIndex + 1}: ${s.title}`,
							"aria-current": isDotActive ? "step" : void 0
						}, s.id);
					})
				})
			]
		})]
	});
};
// src/routes/how-it-works.tsx
var how_it_works_exports = /* @__PURE__ */ __exportAll({
	default: () => how_it_works_default,
	meta: () => meta$3
});
var meta$3 = () => {
	return [
		{ title: "How It Works | sBLOOM Methodology" },
		{
			name: "description",
			content: "Our diagnose-first approach to digital growth."
		},
		{
			property: "og:title",
			content: "How It Works | sBLOOM Methodology"
		},
		{
			property: "og:description",
			content: "Our diagnose-first approach to digital growth."
		}
	];
};
var how_it_works_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(HowItWorksPage, {});
});
// src/components/CreativeOrbit.tsx
var CreativeOrbit = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "co-wrapper",
		children: [
			/* @__PURE__ */ jsx("div", { className: "co-radial-glow" }),
			/* @__PURE__ */ jsxs("div", {
				className: "co-outer-ring",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "co-node co-node-design",
						children: /* @__PURE__ */ jsxs("div", {
							className: "co-node-content",
							children: [/* @__PURE__ */ jsx("div", {
								className: "co-icon-box",
								children: /* @__PURE__ */ jsx(PenTool, { size: 20 })
							}), /* @__PURE__ */ jsx("span", {
								className: "co-label",
								children: "DESIGN"
							})]
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "co-node co-node-video",
						children: /* @__PURE__ */ jsxs("div", {
							className: "co-node-content",
							children: [/* @__PURE__ */ jsx("div", {
								className: "co-icon-box",
								children: /* @__PURE__ */ jsx(Film, { size: 20 })
							}), /* @__PURE__ */ jsx("span", {
								className: "co-label",
								children: "VIDEO"
							})]
						})
					}),
					/* @__PURE__ */ jsx("div", { className: "co-bead co-bead-top-right" }),
					/* @__PURE__ */ jsx("div", { className: "co-bead co-bead-bottom" })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "co-inner-ring",
				children: [/* @__PURE__ */ jsx("div", {
					className: "co-node co-node-content-pos",
					children: /* @__PURE__ */ jsxs("div", {
						className: "co-node-content",
						children: [/* @__PURE__ */ jsx("div", {
							className: "co-icon-box",
							children: /* @__PURE__ */ jsx(FileText, { size: 20 })
						}), /* @__PURE__ */ jsx("span", {
							className: "co-label",
							children: "CONTENT"
						})]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "co-node co-node-digital-pos",
					children: /* @__PURE__ */ jsxs("div", {
						className: "co-node-content",
						children: [/* @__PURE__ */ jsx("div", {
							className: "co-icon-box",
							children: /* @__PURE__ */ jsx(MonitorSmartphone, { size: 20 })
						}), /* @__PURE__ */ jsx("span", {
							className: "co-label",
							children: "DIGITAL"
						})]
					})
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "co-center-element",
				children: /* @__PURE__ */ jsx("span", {
					className: "co-center-text",
					children: "sBLOOM"
				})
			})
		]
	});
};
// \0@oxc-project+runtime@0.156.0/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(n, t, e, r, o, a, c) {
	try {
		var i = n[a](c), u = i.value;
	} catch (n) {
		e(n);
		return;
	}
	i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
	return function() {
		var t = this, e = arguments;
		return new Promise(function(r, o) {
			var a = n.apply(t, e);
			function _next(n) {
				asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
			}
			function _throw(n) {
				asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
			}
			_next(void 0);
		});
	};
}
// src/config/forms.ts
var FORM_ENDPOINTS = {
	CREATIVE_WORKSPACE: "https://script.google.com/macros/s/AKfycbw5_mDENuthcse6rvt1jyXbyIC8xxejJLk0WDPIemxzqRktW-wo4jdhXejR5riHCW61/exec",
	CONTACT_LEADS: "https://script.google.com/macros/s/AKfycbyG_jBidpk5Qw25vlqU0P3Cz_64KwXRRECCQ5T-zVWLkiHfmM_M4RCUptaPNUv4AB7rKw/exec"
};
/**
* Submits form data payload to Google Apps Script Web App.
* Uses 'no-cors' mode with text/plain content type to ensure cross-origin 
* requests bypass preflight (OPTIONS) blockers and reliably reach Google Sheets.
*/
function submitToGoogleSheet(_x, _x2) {
	return _submitToGoogleSheet.apply(this, arguments);
}
function _submitToGoogleSheet() {
	_submitToGoogleSheet = _asyncToGenerator(function* (url, payload) {
		yield fetch(url, {
			method: "POST",
			mode: "no-cors",
			headers: { "Content-Type": "text/plain;charset=utf-8" },
			body: JSON.stringify(payload)
		});
	});
	return _submitToGoogleSheet.apply(this, arguments);
}
// src/pages/CreativeWorkspacePage.tsx
var VideoEditorIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "22",
	height: "22",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2.2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ jsx("rect", {
			x: "2",
			y: "4",
			width: "15",
			height: "12",
			rx: "2"
		}),
		/* @__PURE__ */ jsx("polygon", {
			points: "8,7 13,10 8,13",
			fill: "currentColor",
			stroke: "none"
		}),
		/* @__PURE__ */ jsx("path", { d: "M17 9l5-3v12l-5-3v-6z" })
	]
});
var ContentWriterIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "22",
	height: "22",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2.2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
		/* @__PURE__ */ jsx("polyline", { points: "14 2 14 8 20 8" }),
		/* @__PURE__ */ jsx("line", {
			x1: "9",
			y1: "13",
			x2: "15",
			y2: "13"
		}),
		/* @__PURE__ */ jsx("line", {
			x1: "9",
			y1: "17",
			x2: "13",
			y2: "17"
		})
	]
});
var WebDevIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "22",
	height: "22",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2.2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [/* @__PURE__ */ jsx("polyline", { points: "16 18 22 12 16 6" }), /* @__PURE__ */ jsx("polyline", { points: "8 6 2 12 8 18" })]
});
var SeoIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "22",
	height: "22",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2.2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ jsx("line", {
			x1: "18",
			y1: "20",
			x2: "18",
			y2: "10"
		}),
		/* @__PURE__ */ jsx("line", {
			x1: "12",
			y1: "20",
			x2: "12",
			y2: "4"
		}),
		/* @__PURE__ */ jsx("line", {
			x1: "6",
			y1: "20",
			x2: "6",
			y2: "14"
		}),
		/* @__PURE__ */ jsx("path", { d: "M4 11l5-5 5 5 6-6" })
	]
});
var CREATIVE_ROLES = [
	{
		id: "video-editors",
		title: "Video Editors",
		icon: VideoEditorIcon,
		description: "Edit reels, promotional videos, and short videos for brands. Turn ideas into creative videos with smooth cuts and clear storytelling."
	},
	{
		id: "content-writers",
		title: "Content Writers",
		icon: ContentWriterIcon,
		description: "Write engaging video scripts, social media captions, articles, and brand stories that are easy to understand and help your business reach more people."
	},
	{
		id: "web-developers",
		title: "Web Developers",
		icon: WebDevIcon,
		description: "Build and improve websites, landing pages and web applications that are modern, fast, and user-friendly."
	},
	{
		id: "seo-specialists",
		title: "SEO Specialists",
		icon: SeoIcon,
		description: "Work on search strategy, on-page optimization and local SEO to help businesses get better visibility online."
	},
	{
		id: "social-media-managers",
		title: "Social Media Managers",
		icon: () => /* @__PURE__ */ jsx(Megaphone, {
			size: 22,
			strokeWidth: 2.2
		}),
		description: "Plan and create content for social media platforms, manage posting schedules, and improve engagement."
	},
	{
		id: "graphic-designers",
		title: "Graphic Designers",
		icon: () => /* @__PURE__ */ jsx(Palette, {
			size: 22,
			strokeWidth: 2.2
		}),
		description: "Create visual content, social media designs, banners, and other brand assets that communicate clearly and look professional."
	}
];
var CreativeWorkspacePage = () => {
	const [formHighlight, setFormHighlight] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		role: "",
		portfolioUrl: ""
	});
	const formRef = useRef(null);
	useEffect(() => {
		if (window.location.hash === "#creative-apply" || window.location.pathname.includes("/apply")) setTimeout(() => {
			var _formRef$current;
			(_formRef$current = formRef.current) === null || _formRef$current === void 0 || _formRef$current.scrollIntoView({ behavior: "smooth" });
			setFormHighlight(true);
			setTimeout(() => setFormHighlight(false), 1800);
		}, 250);
	}, []);
	const scrollToApply = (prefillRole) => {
		var _formRef$current2;
		if (prefillRole) setFormData((prev) => _objectSpread2(_objectSpread2({}, prev), {}, { role: prefillRole }));
		setFormHighlight(true);
		(_formRef$current2 = formRef.current) === null || _formRef$current2 === void 0 || _formRef$current2.scrollIntoView({ behavior: "smooth" });
		setTimeout(() => {
			setFormHighlight(false);
		}, 1800);
	};
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => _objectSpread2(_objectSpread2({}, prev), {}, { [name]: value }));
	};
	const handleSubmit = function() {
		var _ref = _asyncToGenerator(function* (e) {
			e.preventDefault();
			setIsSubmitting(true);
			setErrorMessage(null);
			try {
				yield submitToGoogleSheet(FORM_ENDPOINTS.CREATIVE_WORKSPACE, {
					fullName: formData.fullName,
					email: formData.email,
					phone: formData.phone,
					role: formData.role,
					portfolioUrl: formData.portfolioUrl
				});
				setSubmitted(true);
			} catch (err) {
				console.error("Failed to submit creative application:", err);
				setErrorMessage("Unable to submit your application right now. Please check your internet connection or try again.");
			} finally {
				setIsSubmitting(false);
			}
		});
		return function handleSubmit(_x) {
			return _ref.apply(this, arguments);
		};
	}();
	const handleResetForm = () => {
		setSubmitted(false);
		setErrorMessage(null);
		setFormData({
			fullName: "",
			email: "",
			phone: "",
			role: "",
			portfolioUrl: ""
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "cw-page",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "cw-hero",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container cw-hero-grid",
					children: [/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(ScrollReveal, {
						delay: 0,
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "cw-eyebrow-wrap",
								children: [/* @__PURE__ */ jsx("span", {
									className: "cw-eyebrow",
									children: "CREATIVE WORKSPACE"
								}), /* @__PURE__ */ jsx("span", { className: "cw-eyebrow-line" })]
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "cw-hero-title",
								children: [
									"Your skills.",
									/* @__PURE__ */ jsx("br", {}),
									"Our network.",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										className: "cw-gold-italic",
										children: "Better work, together."
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "cw-hero-desc",
								children: "An AI-supported creative partner platform connecting skilled professionals with businesses that need their expertise. Find collaboration opportunities across web design, SEO, content, social media, video, digital marketing, and more."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "cw-hero-actions",
								children: /* @__PURE__ */ jsxs("button", {
									onClick: () => scrollToApply(),
									className: "cw-btn-hero",
									children: [/* @__PURE__ */ jsx("span", { children: "Join the Creative Network" }), /* @__PURE__ */ jsx(ArrowRight, {
										size: 18,
										strokeWidth: 2.4,
										className: "cw-btn-arrow"
									})]
								})
							})
						]
					}) }), /* @__PURE__ */ jsx("div", {
						className: "cw-visual",
						style: { zIndex: 10 },
						children: /* @__PURE__ */ jsx(ScrollReveal, {
							delay: 200,
							className: "w-full h-full",
							style: {
								position: "relative",
								width: "100%",
								height: "100%"
							},
							children: /* @__PURE__ */ jsx(CreativeOrbit, {})
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "roles",
				className: "cw-roles-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsx("div", {
						className: "cw-section-header",
						children: /* @__PURE__ */ jsxs(ScrollReveal, {
							delay: 100,
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "cw-section-eyebrow",
									children: [
										/* @__PURE__ */ jsx("span", { className: "cw-section-rule" }),
										/* @__PURE__ */ jsx("span", {
											className: "cw-section-label",
											children: "CREATIVE WORKSPACE"
										}),
										/* @__PURE__ */ jsx("span", { className: "cw-section-rule" })
									]
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "cw-section-title",
									children: "Your Expertise Has a Place Here"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "cw-section-subtitle",
									children: "Explore opportunities to collaborate with S-Bloom on impactful client projects."
								})
							]
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "cw-roles-grid-6",
						children: CREATIVE_ROLES.map((role, idx) => {
							const IconComponent = role.icon;
							return /* @__PURE__ */ jsx(ScrollReveal, {
								delay: 100 + idx * 60,
								className: "h-full",
								children: /* @__PURE__ */ jsxs("div", {
									className: "cw-role-card",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "cw-role-icon-box",
											children: /* @__PURE__ */ jsx(IconComponent, {})
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "cw-role-title",
											children: role.title
										}),
										/* @__PURE__ */ jsx("p", {
											className: "cw-role-desc",
											children: role.description
										}),
										/* @__PURE__ */ jsxs("button", {
											type: "button",
											className: "cw-role-apply-btn",
											onClick: () => scrollToApply(role.title),
											children: [/* @__PURE__ */ jsx("span", { children: "Apply Now" }), /* @__PURE__ */ jsx(ArrowRight, {
												size: 15,
												strokeWidth: 2.4
											})]
										})
									]
								})
							}, role.id);
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "how-it-works",
				className: "cw-how-it-works-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsx("div", {
						className: "cw-section-header",
						children: /* @__PURE__ */ jsxs(ScrollReveal, {
							delay: 100,
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "cw-section-eyebrow",
									children: [
										/* @__PURE__ */ jsx("span", { className: "cw-section-rule" }),
										/* @__PURE__ */ jsx("span", {
											className: "cw-section-label",
											children: "HOW IT WORKS"
										}),
										/* @__PURE__ */ jsx("span", { className: "cw-section-rule" })
									]
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "cw-section-title",
									children: "A simple way to collaborate."
								}),
								/* @__PURE__ */ jsx("p", {
									className: "cw-section-subtitle",
									children: "Join our creative network and work on projects that match your skills and interests."
								})
							]
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "cw-hiw-flow-wrap",
						children: [/* @__PURE__ */ jsx("div", {
							className: "cw-hiw-connecting-line",
							"aria-hidden": "true"
						}), /* @__PURE__ */ jsxs("div", {
							className: "cw-hiw-steps-grid",
							children: [
								/* @__PURE__ */ jsx(ScrollReveal, {
									delay: 150,
									className: "h-full",
									children: /* @__PURE__ */ jsxs("div", {
										className: "cw-hiw-step-item",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "cw-hiw-icon-bubble",
												children: /* @__PURE__ */ jsx(UserPlus, {
													size: 30,
													strokeWidth: 2
												})
											}),
											/* @__PURE__ */ jsx("span", {
												className: "cw-hiw-step-num",
												children: "01"
											}),
											/* @__PURE__ */ jsx("h3", {
												className: "cw-hiw-step-title",
												children: "Apply to join"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "cw-hiw-step-desc",
												children: "Tell us about your skills, experience and the type of work you want to do."
											})
										]
									})
								}),
								/* @__PURE__ */ jsx(ScrollReveal, {
									delay: 250,
									className: "h-full",
									children: /* @__PURE__ */ jsxs("div", {
										className: "cw-hiw-step-item",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "cw-hiw-icon-bubble",
												children: /* @__PURE__ */ jsx(Briefcase, {
													size: 28,
													strokeWidth: 2
												})
											}),
											/* @__PURE__ */ jsx("span", {
												className: "cw-hiw-step-num",
												children: "02"
											}),
											/* @__PURE__ */ jsx("h3", {
												className: "cw-hiw-step-title",
												children: "Get matched"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "cw-hiw-step-desc",
												children: "We connect you with relevant project opportunities from businesses in our network."
											})
										]
									})
								}),
								/* @__PURE__ */ jsx(ScrollReveal, {
									delay: 350,
									className: "h-full",
									children: /* @__PURE__ */ jsxs("div", {
										className: "cw-hiw-step-item",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "cw-hiw-icon-bubble",
												children: /* @__PURE__ */ jsx(Users, {
													size: 30,
													strokeWidth: 2
												})
											}),
											/* @__PURE__ */ jsx("span", {
												className: "cw-hiw-step-num",
												children: "03"
											}),
											/* @__PURE__ */ jsx("h3", {
												className: "cw-hiw-step-title",
												children: "Work together"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "cw-hiw-step-desc",
												children: "Collaborate, create and contribute your expertise to meaningful projects."
											})
										]
									})
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "creative-apply",
				ref: formRef,
				className: "cw-apply-section",
				children: /* @__PURE__ */ jsx("div", {
					className: "cw-apply-container",
					children: /* @__PURE__ */ jsx(ScrollReveal, {
						delay: 100,
						children: /* @__PURE__ */ jsxs("div", {
							className: `cw-apply-card ${formHighlight ? "highlight-focus" : ""}`,
							children: [/* @__PURE__ */ jsxs("div", {
								className: "cw-apply-header",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "cw-apply-eyebrow",
										children: [
											/* @__PURE__ */ jsx("span", { className: "cw-section-rule" }),
											/* @__PURE__ */ jsx("span", {
												className: "cw-apply-eyebrow-text",
												children: "QUICK APPLICATION"
											}),
											/* @__PURE__ */ jsx("span", { className: "cw-section-rule" })
										]
									}),
									/* @__PURE__ */ jsx("h2", {
										className: "cw-apply-title",
										children: "Join the S-Bloom Creative Network"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "cw-apply-subtitle",
										children: "Submit your portfolio and contact details below. We'll reach out with matching projects."
									})
								]
							}), submitted ? /* @__PURE__ */ jsxs("div", {
								className: "cw-apply-success",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "cw-success-icon-wrap",
										children: /* @__PURE__ */ jsx(CheckCircle2, {
											size: 32,
											strokeWidth: 2.2
										})
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "cw-success-title",
										children: "Creative Application Received!"
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "cw-success-msg",
										children: [
											"Thank you, ",
											/* @__PURE__ */ jsx("strong", { children: formData.fullName || "Creator" }),
											". We have received your portfolio details for the ",
											/* @__PURE__ */ jsx("strong", { children: formData.role || "Creative Network" }),
											" role. Our team will review your work and contact you with matching projects."
										]
									}),
									/* @__PURE__ */ jsx("button", {
										type: "button",
										className: "cw-reset-btn",
										onClick: handleResetForm,
										children: "Submit Another Application"
									})
								]
							}) : /* @__PURE__ */ jsxs("form", {
								className: "cw-apply-form",
								onSubmit: handleSubmit,
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "cw-apply-form-grid",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "cw-form-group",
												children: [/* @__PURE__ */ jsxs("label", {
													htmlFor: "cw-fullName",
													className: "cw-form-label",
													children: ["Full Name ", /* @__PURE__ */ jsx("span", {
														className: "cw-req-star",
														children: "*"
													})]
												}), /* @__PURE__ */ jsxs("div", {
													className: "cw-input-wrap",
													children: [/* @__PURE__ */ jsx(User, {
														size: 15,
														strokeWidth: 1.8,
														className: "cw-input-icon"
													}), /* @__PURE__ */ jsx("input", {
														type: "text",
														id: "cw-fullName",
														name: "fullName",
														required: true,
														placeholder: "Your full name",
														className: "cw-input",
														value: formData.fullName,
														onChange: handleInputChange
													})]
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "cw-form-group",
												children: [/* @__PURE__ */ jsxs("label", {
													htmlFor: "cw-email",
													className: "cw-form-label",
													children: ["Email Address ", /* @__PURE__ */ jsx("span", {
														className: "cw-req-star",
														children: "*"
													})]
												}), /* @__PURE__ */ jsxs("div", {
													className: "cw-input-wrap",
													children: [/* @__PURE__ */ jsx(Mail, {
														size: 15,
														strokeWidth: 1.8,
														className: "cw-input-icon"
													}), /* @__PURE__ */ jsx("input", {
														type: "email",
														id: "cw-email",
														name: "email",
														required: true,
														placeholder: "you@domain.com",
														className: "cw-input",
														value: formData.email,
														onChange: handleInputChange
													})]
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "cw-form-group",
												children: [/* @__PURE__ */ jsxs("label", {
													htmlFor: "cw-phone",
													className: "cw-form-label",
													children: ["Phone / WhatsApp ", /* @__PURE__ */ jsx("span", {
														className: "cw-req-star",
														children: "*"
													})]
												}), /* @__PURE__ */ jsxs("div", {
													className: "cw-input-wrap",
													children: [/* @__PURE__ */ jsx(Phone, {
														size: 15,
														strokeWidth: 1.8,
														className: "cw-input-icon"
													}), /* @__PURE__ */ jsx("input", {
														type: "tel",
														id: "cw-phone",
														name: "phone",
														required: true,
														placeholder: "+91 98765 43210",
														className: "cw-input",
														value: formData.phone,
														onChange: handleInputChange
													})]
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "cw-form-group",
												children: [/* @__PURE__ */ jsxs("label", {
													htmlFor: "cw-role",
													className: "cw-form-label",
													children: ["Creative Role ", /* @__PURE__ */ jsx("span", {
														className: "cw-req-star",
														children: "*"
													})]
												}), /* @__PURE__ */ jsxs("div", {
													className: "cw-input-wrap",
													children: [/* @__PURE__ */ jsx(Briefcase, {
														size: 15,
														strokeWidth: 1.8,
														className: "cw-input-icon"
													}), /* @__PURE__ */ jsxs("select", {
														id: "cw-role",
														name: "role",
														required: true,
														className: "cw-select",
														value: formData.role,
														onChange: handleInputChange,
														children: [
															/* @__PURE__ */ jsx("option", {
																value: "",
																children: "Select your discipline..."
															}),
															/* @__PURE__ */ jsx("option", {
																value: "Video Editors",
																children: "Video Editors"
															}),
															/* @__PURE__ */ jsx("option", {
																value: "Content Writers",
																children: "Content Writers"
															}),
															/* @__PURE__ */ jsx("option", {
																value: "Web Developers",
																children: "Web Developers"
															}),
															/* @__PURE__ */ jsx("option", {
																value: "SEO Specialists",
																children: "SEO Specialists"
															}),
															/* @__PURE__ */ jsx("option", {
																value: "Social Media Managers",
																children: "Social Media Managers"
															}),
															/* @__PURE__ */ jsx("option", {
																value: "Graphic Designers",
																children: "Graphic Designers"
															}),
															/* @__PURE__ */ jsx("option", {
																value: "Other Creative Role",
																children: "Other Creative Role"
															})
														]
													})]
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "cw-form-group cw-apply-full-width",
												children: [/* @__PURE__ */ jsxs("label", {
													htmlFor: "cw-portfolioUrl",
													className: "cw-form-label",
													children: ["Portfolio / Reel Link ", /* @__PURE__ */ jsx("span", {
														className: "cw-req-star",
														children: "*"
													})]
												}), /* @__PURE__ */ jsxs("div", {
													className: "cw-input-wrap",
													children: [/* @__PURE__ */ jsx(Link2, {
														size: 15,
														strokeWidth: 1.8,
														className: "cw-input-icon"
													}), /* @__PURE__ */ jsx("input", {
														type: "url",
														id: "cw-portfolioUrl",
														name: "portfolioUrl",
														required: true,
														placeholder: "Behance, Google Drive, YouTube, Vimeo, Instagram, or portfolio URL",
														className: "cw-input",
														value: formData.portfolioUrl,
														onChange: handleInputChange
													})]
												})]
											})
										]
									}),
									errorMessage && /* @__PURE__ */ jsxs("div", {
										className: "cw-apply-error-banner",
										role: "alert",
										children: [/* @__PURE__ */ jsx(AlertCircle, { size: 16 }), /* @__PURE__ */ jsx("span", { children: errorMessage })]
									}),
									/* @__PURE__ */ jsxs("button", {
										type: "submit",
										className: "cw-apply-submit-btn",
										disabled: isSubmitting,
										children: [/* @__PURE__ */ jsx("span", { children: isSubmitting ? "Submitting Application..." : "Submit Application" }), /* @__PURE__ */ jsx(ArrowRight, {
											size: 16,
											strokeWidth: 2.4
										})]
									})
								]
							})]
						})
					})
				})
			})
		]
	});
};
// src/routes/creative-workspace.tsx
var creative_workspace_exports = /* @__PURE__ */ __exportAll({
	default: () => creative_workspace_default,
	meta: () => meta$2
});
var meta$2 = () => {
	return [
		{ title: "Creative Workspace | sBLOOM" },
		{
			name: "description",
			content: "Inside our creative process and workspace."
		},
		{
			property: "og:title",
			content: "Creative Workspace | sBLOOM"
		},
		{
			property: "og:description",
			content: "Inside our creative process and workspace."
		}
	];
};
var creative_workspace_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(CreativeWorkspacePage, {});
});
// src/routes/apply.tsx
var apply_exports = /* @__PURE__ */ __exportAll({ default: () => apply_default });
var apply_default = UNSAFE_withComponentProps(function Route() {
	useEffect(() => {
		window.location.replace("https://sbloom.ottobon.in/provider");
	}, []);
	return /* @__PURE__ */ jsx("div", {
		style: {
			minHeight: "60vh",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			padding: "40px"
		},
		children: /* @__PURE__ */ jsxs("p", {
			style: { color: "#785A46" },
			children: [
				"Redirecting to Affiliate Provider Portal...",
				" ",
				/* @__PURE__ */ jsx("a", {
					href: "https://sbloom.ottobon.in/provider",
					style: {
						color: "#C9952E",
						fontWeight: 700
					},
					children: "Click here if not redirected."
				})
			]
		})
	});
});
// src/pages/ContactPage.tsx
var ContactPage = () => {
	const [searchParams] = useSearchParams();
	const preselectedService = searchParams.get("service");
	const [formData, setFormData] = useState({
		fullName: "",
		organization: "",
		email: "",
		phone: "",
		industry: "",
		improve: "",
		services: []
	});
	useEffect(() => {
		if (preselectedService) {
			const mapping = {
				fsm: "Field Sales Marketing (FSM)",
				advisors: "Affiliate Marketing",
				affiliate: "Affiliate Marketing",
				digital: "Core Digital Presence (Website, GBP & Social)",
				influencers: "Influencer Partnerships"
			};
			if (mapping[preselectedService]) setFormData((prev) => _objectSpread2(_objectSpread2({}, prev), {}, { services: [mapping[preselectedService]] }));
		}
	}, [preselectedService]);
	const [submitted, setSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);
	const toggleService = (serviceName) => {
		setFormData((prev) => {
			const exists = prev.services.includes(serviceName);
			return _objectSpread2(_objectSpread2({}, prev), {}, { services: exists ? prev.services.filter((s) => s !== serviceName) : [...prev.services, serviceName] });
		});
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => _objectSpread2(_objectSpread2({}, prev), {}, { [name]: value }));
	};
	const handleSubmit = function() {
		var _ref = _asyncToGenerator(function* (e) {
			e.preventDefault();
			setIsSubmitting(true);
			setErrorMessage(null);
			try {
				yield submitToGoogleSheet(FORM_ENDPOINTS.CONTACT_LEADS, {
					fullName: formData.fullName,
					organization: formData.organization,
					email: formData.email,
					phone: formData.phone,
					industry: formData.industry,
					servicesNeeded: formData.services.length > 0 ? formData.services.join(", ") : "Not specified",
					improve: formData.improve
				});
				setSubmitted(true);
			} catch (err) {
				console.error("Failed to submit contact inquiry:", err);
				setErrorMessage("Unable to submit your details right now. Please check your internet connection or try again.");
			} finally {
				setIsSubmitting(false);
			}
		});
		return function handleSubmit(_x) {
			return _ref.apply(this, arguments);
		};
	}();
	const handleReset = () => {
		setSubmitted(false);
		setErrorMessage(null);
		setFormData({
			fullName: "",
			organization: "",
			email: "",
			phone: "",
			industry: "",
			improve: "",
			services: []
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "contact-page-wrapper",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "contact-horizon-bg",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ jsx("div", { className: "contact-ambient-radial" }), /* @__PURE__ */ jsxs("svg", {
				className: "contact-trails-svg",
				viewBox: "0 0 1600 900",
				preserveAspectRatio: "xMidYMid slice",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				children: [
					/* @__PURE__ */ jsxs("defs", { children: [
						/* @__PURE__ */ jsxs("linearGradient", {
							id: "silkDuneGrad1",
							x1: "0%",
							y1: "0%",
							x2: "0%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#F6EADB",
									stopOpacity: "0.55"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#EDD8C0",
									stopOpacity: "0.32"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#FBF6EE",
									stopOpacity: "0.06"
								})
							]
						}),
						/* @__PURE__ */ jsxs("linearGradient", {
							id: "silkDuneGrad2",
							x1: "0%",
							y1: "0%",
							x2: "0%",
							y2: "100%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#F2DCBF",
									stopOpacity: "0.48"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "60%",
									stopColor: "#E8CCAA",
									stopOpacity: "0.22"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#FBF6EE",
									stopOpacity: "0.03"
								})
							]
						}),
						/* @__PURE__ */ jsxs("radialGradient", {
							id: "diffusedChampagneGlow",
							cx: "50%",
							cy: "50%",
							r: "50%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#FDEBC9",
									stopOpacity: "0.42"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "40%",
									stopColor: "#F5D79E",
									stopOpacity: "0.22"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "75%",
									stopColor: "#D6A13A",
									stopOpacity: "0.08"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#D6A13A",
									stopOpacity: "0"
								})
							]
						}),
						/* @__PURE__ */ jsxs("linearGradient", {
							id: "delicateWhiteGrad1",
							x1: "0%",
							y1: "20%",
							x2: "100%",
							y2: "30%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#FFFFFF",
									stopOpacity: "0.10"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "25%",
									stopColor: "#FFFFFF",
									stopOpacity: "0.60"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#FFFDF7",
									stopOpacity: "0.82"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "75%",
									stopColor: "#FFFFFF",
									stopOpacity: "0.65"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#FFFFFF",
									stopOpacity: "0.15"
								})
							]
						}),
						/* @__PURE__ */ jsxs("linearGradient", {
							id: "delicateWhiteGrad2",
							x1: "0%",
							y1: "40%",
							x2: "100%",
							y2: "50%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#FFFFFF",
									stopOpacity: "0.08"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "25%",
									stopColor: "#FFFFFF",
									stopOpacity: "0.45"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#FFFDF5",
									stopOpacity: "0.75"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "75%",
									stopColor: "#FFFFFF",
									stopOpacity: "0.50"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#FFFFFF",
									stopOpacity: "0.10"
								})
							]
						}),
						/* @__PURE__ */ jsxs("linearGradient", {
							id: "delicateWhiteGrad3",
							x1: "0%",
							y1: "70%",
							x2: "100%",
							y2: "70%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#FFFFFF",
									stopOpacity: "0.08"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "30%",
									stopColor: "#FFFFFF",
									stopOpacity: "0.45"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#FFFDF0",
									stopOpacity: "0.70"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "70%",
									stopColor: "#FFFFFF",
									stopOpacity: "0.45"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#FFFFFF",
									stopOpacity: "0.08"
								})
							]
						}),
						/* @__PURE__ */ jsxs("linearGradient", {
							id: "subtleGoldGrad1",
							x1: "0%",
							y1: "30%",
							x2: "100%",
							y2: "40%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#D6A13A",
									stopOpacity: "0.08"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "30%",
									stopColor: "#D6A13A",
									stopOpacity: "0.42"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#E5B255",
									stopOpacity: "0.60"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "70%",
									stopColor: "#D6A13A",
									stopOpacity: "0.42"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#B77A3E",
									stopOpacity: "0.10"
								})
							]
						}),
						/* @__PURE__ */ jsxs("linearGradient", {
							id: "subtleGoldGrad2",
							x1: "100%",
							y1: "15%",
							x2: "0%",
							y2: "60%",
							children: [
								/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "#D6A13A",
									stopOpacity: "0.08"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "30%",
									stopColor: "#D6A13A",
									stopOpacity: "0.38"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "50%",
									stopColor: "#E8B85C",
									stopOpacity: "0.55"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "75%",
									stopColor: "#B77A3E",
									stopOpacity: "0.32"
								}),
								/* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "#D6A13A",
									stopOpacity: "0.08"
								})
							]
						}),
						/* @__PURE__ */ jsx("filter", {
							id: "ambientGlowFilter",
							x: "-40%",
							y: "-40%",
							width: "180%",
							height: "180%",
							children: /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: "22" })
						}),
						/* @__PURE__ */ jsxs("filter", {
							id: "fineLineSoftFilter",
							x: "-10%",
							y: "-10%",
							width: "120%",
							height: "120%",
							children: [/* @__PURE__ */ jsx("feGaussianBlur", {
								stdDeviation: "0.6",
								result: "blur"
							}), /* @__PURE__ */ jsxs("feMerge", { children: [/* @__PURE__ */ jsx("feMergeNode", { in: "blur" }), /* @__PURE__ */ jsx("feMergeNode", { in: "SourceGraphic" })] })]
						})
					] }),
					/* @__PURE__ */ jsxs("g", {
						className: "contact-anim-ribbons",
						children: [/* @__PURE__ */ jsx("path", {
							d: "M -50 670 C 260 740, 520 630, 780 675 C 1080 715, 1360 645, 1650 685 L 1650 950 L -50 950 Z",
							fill: "url(#silkDuneGrad1)"
						}), /* @__PURE__ */ jsx("path", {
							d: "M -50 760 C 300 840, 550 770, 780 675 C 1050 580, 1340 760, 1650 780 L 1650 950 L -50 950 Z",
							fill: "url(#silkDuneGrad2)"
						})]
					}),
					/* @__PURE__ */ jsx("g", {
						className: "contact-anim-ambient-glow",
						children: /* @__PURE__ */ jsx("ellipse", {
							cx: "780",
							cy: "680",
							rx: "180",
							ry: "70",
							fill: "url(#diffusedChampagneGlow)",
							filter: "url(#ambientGlowFilter)"
						})
					}),
					/* @__PURE__ */ jsxs("g", {
						className: "contact-anim-fine-lines",
						children: [
							/* @__PURE__ */ jsx("path", {
								d: "M -30 240 C 260 360, 520 540, 780 675 C 1040 610, 1340 440, 1630 260",
								stroke: "url(#delicateWhiteGrad1)",
								strokeWidth: "1.2",
								strokeLinecap: "round",
								filter: "url(#fineLineSoftFilter)"
							}),
							/* @__PURE__ */ jsx("path", {
								d: "M -30 215 C 250 335, 510 525, 775 668 C 1045 605, 1345 425, 1630 235",
								stroke: "url(#delicateWhiteGrad2)",
								strokeWidth: "0.85",
								strokeLinecap: "round",
								opacity: "0.80"
							}),
							/* @__PURE__ */ jsx("path", {
								d: "M -30 390 C 270 520, 530 625, 780 675 C 1060 640, 1360 560, 1630 460",
								stroke: "url(#subtleGoldGrad1)",
								strokeWidth: "1.1",
								strokeLinecap: "round"
							}),
							/* @__PURE__ */ jsx("path", {
								d: "M -30 420 C 280 540, 540 635, 784 678 C 1065 650, 1365 575, 1630 485",
								stroke: "url(#delicateWhiteGrad2)",
								strokeWidth: "0.80",
								strokeLinecap: "round",
								opacity: "0.70"
							}),
							/* @__PURE__ */ jsx("path", {
								d: "M -30 720 C 240 790, 520 735, 780 675 C 1060 715, 1350 770, 1630 725",
								stroke: "url(#delicateWhiteGrad3)",
								strokeWidth: "1.1",
								strokeLinecap: "round"
							}),
							/* @__PURE__ */ jsx("path", {
								d: "M -30 745 C 245 810, 525 750, 782 682 C 1065 722, 1355 780, 1630 740",
								stroke: "url(#delicateWhiteGrad2)",
								strokeWidth: "0.75",
								strokeLinecap: "round",
								opacity: "0.65"
							}),
							/* @__PURE__ */ jsx("path", {
								d: "M 1630 170 C 1360 310, 1080 530, 780 675 C 580 690, 300 660, -30 600",
								stroke: "url(#subtleGoldGrad2)",
								strokeWidth: "1.1",
								strokeLinecap: "round"
							}),
							/* @__PURE__ */ jsx("path", {
								d: "M 1630 195 C 1370 330, 1090 545, 784 678 C 585 693, 305 665, -30 610",
								stroke: "url(#delicateWhiteGrad2)",
								strokeWidth: "0.75",
								strokeLinecap: "round",
								opacity: "0.60"
							}),
							/* @__PURE__ */ jsx("path", {
								d: "M -30 660 C 270 735, 530 645, 780 675 C 1070 635, 1350 685, 1630 670",
								stroke: "url(#delicateWhiteGrad1)",
								strokeWidth: "0.90",
								strokeLinecap: "round",
								opacity: "0.75"
							})
						]
					})
				]
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "contact-master-container",
			children: /* @__PURE__ */ jsxs("div", {
				className: "contact-split-grid",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "contact-left-col",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "contact-eyebrow",
							children: [/* @__PURE__ */ jsx("span", {
								className: "contact-eyebrow-text",
								children: "GET IN TOUCH"
							}), /* @__PURE__ */ jsx("span", { className: "contact-eyebrow-line" })]
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "contact-hero-title",
							children: [
								"Let’s discuss ",
								/* @__PURE__ */ jsx("br", {}),
								"your revenue ",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "title-gold-text",
									children: "growth."
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "contact-hero-desc",
							children: "Tell us about your organization and the services you need. We'll show you exactly how we bring in qualified paying customers."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "contact-process-list",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "contact-process-line",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "contact-process-item",
									children: [/* @__PURE__ */ jsx("div", {
										className: "contact-process-badge",
										children: /* @__PURE__ */ jsx(MessageSquare, {
											size: 18,
											strokeWidth: 1.8
										})
									}), /* @__PURE__ */ jsxs("div", {
										className: "contact-process-content",
										children: [/* @__PURE__ */ jsx("h3", {
											className: "contact-process-title",
											children: "Understand"
										}), /* @__PURE__ */ jsx("p", {
											className: "contact-process-text",
											children: "We listen to your goals and challenges."
										})]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "contact-process-item",
									children: [/* @__PURE__ */ jsx("div", {
										className: "contact-process-badge",
										children: /* @__PURE__ */ jsx(Lightbulb, {
											size: 18,
											strokeWidth: 1.8
										})
									}), /* @__PURE__ */ jsxs("div", {
										className: "contact-process-content",
										children: [/* @__PURE__ */ jsx("h3", {
											className: "contact-process-title",
											children: "Strategize"
										}), /* @__PURE__ */ jsx("p", {
											className: "contact-process-text",
											children: "We identify the right opportunities."
										})]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "contact-process-item",
									children: [/* @__PURE__ */ jsx("div", {
										className: "contact-process-badge",
										children: /* @__PURE__ */ jsx(BarChart3, {
											size: 18,
											strokeWidth: 1.8
										})
									}), /* @__PURE__ */ jsxs("div", {
										className: "contact-process-content",
										children: [/* @__PURE__ */ jsx("h3", {
											className: "contact-process-title",
											children: "Grow Together"
										}), /* @__PURE__ */ jsx("p", {
											className: "contact-process-text",
											children: "We build a clear plan for measurable results."
										})]
									})]
								})
							]
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "contact-right-col",
					children: /* @__PURE__ */ jsxs("div", {
						className: "contact-card",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "contact-card-badge",
								children: [/* @__PURE__ */ jsx("span", {
									className: "contact-card-badge-text",
									children: "CONTACT sBLOOM"
								}), /* @__PURE__ */ jsx("span", { className: "contact-card-badge-line" })]
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "contact-card-title",
								children: "Share a few details"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "contact-card-subtitle",
								children: "We'll get back to you with the right next steps."
							}),
							submitted ? /* @__PURE__ */ jsxs("div", {
								className: "contact-success-card",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "contact-success-icon-wrap",
										children: /* @__PURE__ */ jsx(CheckCircle2, {
											size: 32,
											strokeWidth: 2
										})
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "contact-success-title",
										children: "Message Received!"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "contact-success-msg",
										children: "Thank you for reaching out. We have received your details and our team will get back to you with tailored strategic recommendations within 24 hours."
									}),
									/* @__PURE__ */ jsx("button", {
										type: "button",
										className: "contact-reset-btn",
										onClick: handleReset,
										children: "Send Another Response"
									})
								]
							}) : /* @__PURE__ */ jsxs("form", {
								className: "contact-form",
								onSubmit: handleSubmit,
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "contact-field-group",
										children: [/* @__PURE__ */ jsxs("label", {
											htmlFor: "fullName",
											className: "contact-field-label",
											children: ["Full Name ", /* @__PURE__ */ jsx("span", {
												className: "contact-req-star",
												children: "*"
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "contact-input-wrap",
											children: [/* @__PURE__ */ jsx(User, {
												size: 15,
												strokeWidth: 1.8,
												className: "contact-input-icon"
											}), /* @__PURE__ */ jsx("input", {
												type: "text",
												id: "fullName",
												name: "fullName",
												required: true,
												placeholder: "Enter your full name",
												className: "contact-input",
												value: formData.fullName,
												onChange: handleChange
											})]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "contact-field-group",
										children: [/* @__PURE__ */ jsxs("label", {
											htmlFor: "organization",
											className: "contact-field-label",
											children: ["Organization Name ", /* @__PURE__ */ jsx("span", {
												className: "contact-req-star",
												children: "*"
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "contact-input-wrap",
											children: [/* @__PURE__ */ jsx(Building2, {
												size: 15,
												strokeWidth: 1.8,
												className: "contact-input-icon"
											}), /* @__PURE__ */ jsx("input", {
												type: "text",
												id: "organization",
												name: "organization",
												required: true,
												placeholder: "Enter your organization name",
												className: "contact-input",
												value: formData.organization,
												onChange: handleChange
											})]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "contact-field-group",
										children: [/* @__PURE__ */ jsxs("label", {
											htmlFor: "email",
											className: "contact-field-label",
											children: ["Email Address ", /* @__PURE__ */ jsx("span", {
												className: "contact-req-star",
												children: "*"
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "contact-input-wrap",
											children: [/* @__PURE__ */ jsx(Mail, {
												size: 15,
												strokeWidth: 1.8,
												className: "contact-input-icon"
											}), /* @__PURE__ */ jsx("input", {
												type: "email",
												id: "email",
												name: "email",
												required: true,
												placeholder: "you@company.com",
												className: "contact-input",
												value: formData.email,
												onChange: handleChange
											})]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "contact-field-group",
										children: [/* @__PURE__ */ jsxs("label", {
											htmlFor: "phone",
											className: "contact-field-label",
											children: ["Phone Number ", /* @__PURE__ */ jsx("span", {
												className: "contact-req-star",
												children: "*"
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "contact-input-wrap",
											children: [/* @__PURE__ */ jsx(Phone, {
												size: 15,
												strokeWidth: 1.8,
												className: "contact-input-icon"
											}), /* @__PURE__ */ jsx("input", {
												type: "tel",
												id: "phone",
												name: "phone",
												required: true,
												placeholder: "+91 98765 43210",
												className: "contact-input",
												value: formData.phone,
												onChange: handleChange
											})]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "contact-field-group",
										children: [/* @__PURE__ */ jsxs("label", {
											htmlFor: "industry",
											className: "contact-field-label",
											children: ["Industry ", /* @__PURE__ */ jsx("span", {
												className: "contact-req-star",
												children: "*"
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "contact-input-wrap",
											children: [/* @__PURE__ */ jsx(LayoutGrid, {
												size: 15,
												strokeWidth: 1.8,
												className: "contact-input-icon"
											}), /* @__PURE__ */ jsxs("select", {
												id: "industry",
												name: "industry",
												required: true,
												className: "contact-select",
												value: formData.industry,
												onChange: handleChange,
												children: [
													/* @__PURE__ */ jsx("option", {
														value: "",
														children: "Select an industry..."
													}),
													/* @__PURE__ */ jsx("option", {
														value: "Education",
														children: "Education"
													}),
													/* @__PURE__ */ jsx("option", {
														value: "Healthcare",
														children: "Healthcare"
													}),
													/* @__PURE__ */ jsx("option", {
														value: "Consulting & Professional Services",
														children: "Consulting & Professional Services"
													}),
													/* @__PURE__ */ jsx("option", {
														value: "Technology & Software",
														children: "Technology & Software"
													}),
													/* @__PURE__ */ jsx("option", {
														value: "E-Commerce & Retail",
														children: "E-Commerce & Retail"
													}),
													/* @__PURE__ */ jsx("option", {
														value: "Financial Services",
														children: "Financial Services"
													}),
													/* @__PURE__ */ jsx("option", {
														value: "Other",
														children: "Other"
													})
												]
											})]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "contact-field-group",
										children: [
											/* @__PURE__ */ jsxs("label", {
												className: "contact-field-label",
												children: ["Services You Need ", /* @__PURE__ */ jsx("span", {
													className: "contact-opt-tag",
													children: "(Pick one or multiple)"
												})]
											}),
											/* @__PURE__ */ jsx("div", {
												style: {
													display: "grid",
													gridTemplateColumns: "1fr",
													gap: "8px",
													marginTop: "6px"
												},
												children: [
													"Field Sales Marketing (FSM)",
													"Affiliate Marketing",
													"Core Digital Presence (Website, GBP & Social)",
													"Influencer Partnerships",
													"Complete Revenue Engine (All 4)"
												].map((srv) => {
													const isChecked = formData.services.includes(srv);
													return /* @__PURE__ */ jsxs("div", {
														onClick: () => toggleService(srv),
														style: {
															display: "flex",
															alignItems: "center",
															gap: "10px",
															padding: "10px 14px",
															borderRadius: "8px",
															background: isChecked ? "rgba(217, 165, 46, 0.12)" : "rgba(36, 33, 42, 0.03)",
															border: isChecked ? "1px solid rgba(217, 165, 46, 0.45)" : "1px solid rgba(36, 33, 42, 0.08)",
															cursor: "pointer",
															transition: "all 0.2s ease"
														},
														children: [isChecked ? /* @__PURE__ */ jsx(CheckSquare, {
															size: 17,
															color: "#BA7C3D"
														}) : /* @__PURE__ */ jsx(Square, {
															size: 17,
															color: "#8C8894"
														}), /* @__PURE__ */ jsx("span", {
															style: {
																fontSize: "0.88rem",
																fontWeight: isChecked ? 600 : 500,
																color: "#24212A"
															},
															children: srv
														})]
													}, srv);
												})
											}),
											/* @__PURE__ */ jsxs("p", {
												style: {
													margin: "10px 0 0 0",
													fontSize: "0.8rem",
													color: "#785A46",
													lineHeight: 1.4
												},
												children: [
													"Want to join as an affiliate partner and earn referral commissions? Register directly at",
													" ",
													/* @__PURE__ */ jsx("a", {
														href: "https://sbloom.ottobon.in/provider",
														target: "_blank",
														rel: "noopener noreferrer",
														style: {
															color: "#BA7C3D",
															fontWeight: 700,
															textDecoration: "underline"
														},
														children: "sbloom.ottobon.in/provider"
													}),
													"."
												]
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "contact-field-group",
										children: [/* @__PURE__ */ jsxs("label", {
											htmlFor: "improve",
											className: "contact-field-label",
											children: ["What would you like to improve? ", /* @__PURE__ */ jsx("span", {
												className: "contact-opt-tag",
												children: "(Optional)"
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "contact-input-wrap contact-textarea-wrap",
											children: [/* @__PURE__ */ jsx(FileText, {
												size: 15,
												strokeWidth: 1.8,
												className: "contact-input-icon contact-textarea-icon"
											}), /* @__PURE__ */ jsx("textarea", {
												id: "improve",
												name: "improve",
												rows: 2,
												placeholder: "Tell us about your goals, challenges, or what you'd like to improve...",
												className: "contact-textarea",
												value: formData.improve,
												onChange: handleChange
											})]
										})]
									}),
									errorMessage && /* @__PURE__ */ jsxs("div", {
										className: "contact-error-banner",
										role: "alert",
										children: [/* @__PURE__ */ jsx(AlertCircle, { size: 15 }), /* @__PURE__ */ jsx("span", { children: errorMessage })]
									}),
									/* @__PURE__ */ jsxs("button", {
										type: "submit",
										className: "contact-submit-btn",
										disabled: isSubmitting,
										children: [/* @__PURE__ */ jsx("span", { children: isSubmitting ? "Planning Next Step..." : "Plan My Next Step" }), /* @__PURE__ */ jsx(ArrowRight, {
											size: 16,
											strokeWidth: 2.4,
											className: "btn-arrow-icon"
										})]
									})
								]
							})
						]
					})
				})]
			})
		})]
	});
};
// src/routes/contact.tsx
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => contact_default,
	meta: () => meta$1
});
var meta$1 = () => {
	return [
		{ title: "Contact sBLOOM | Let's Talk" },
		{
			name: "description",
			content: "Get in touch to discuss your digital growth goals."
		},
		{
			property: "og:title",
			content: "Contact sBLOOM | Let's Talk"
		},
		{
			property: "og:description",
			content: "Get in touch to discuss your digital growth goals."
		}
	];
};
var contact_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(ContactPage, {});
});
// src/pages/ProofOfWorkPage.tsx
var POW_CASES = {
	gbp: {
		id: "gbp",
		tabLabel: "Google Business Profile",
		eyebrow: "PROOF OF WORK",
		titlePrimary: "Turning Local Searches into",
		titleAccent: "Real Opportunities.",
		desc: "We optimize Google Business Profiles to improve visibility, build trust and bring in more customer enquiries.",
		ctaText: "See More Results",
		ctaLink: "/contact?interest=gbp",
		visualImg: "/pow-visual-gbp.png",
		fullBannerImg: "/pow-full-gbp.png",
		highlights: [
			{
				label: "Higher visibility",
				sublabel: "in local searches",
				icon: TrendingUp
			},
			{
				label: "More enquiries",
				sublabel: "from the right audience",
				icon: Users
			},
			{
				label: "A stronger and more reliable",
				sublabel: "online presence",
				icon: Star
			}
		],
		bottomFeatures: [
			{
				title: "Better photos",
				desc: "Updated and high-quality images",
				icon: Camera
			},
			{
				title: "Complete information",
				desc: "Accurate and up-to-date details",
				icon: FileText
			},
			{
				title: "Positive reviews",
				desc: "More genuine customer reviews",
				icon: Star
			},
			{
				title: "Improved local visibility",
				desc: "Higher ranking in local searches",
				icon: MapPin
			}
		]
	},
	website: {
		id: "website",
		tabLabel: "Website Development",
		eyebrow: "PROOF OF WORK",
		titlePrimary: "From an Outdated Website to a",
		titleAccent: "High-Performing Presence.",
		desc: "We redesign and optimize websites to improve search visibility and bring in more enquiries.",
		ctaText: "See More Results",
		ctaLink: "/contact?interest=website",
		visualImg: "/pow-visual-website.png",
		fullBannerImg: "/pow-full-website.png",
		highlights: [
			{
				label: "Modern Design",
				icon: Monitor
			},
			{
				label: "SEO Optimized",
				icon: Search
			},
			{
				label: "Mobile Friendly",
				icon: Smartphone
			}
		],
		bottomFeatures: [
			{
				title: "Sub-1s Speed",
				desc: "Ultra-fast loading speeds on mobile and desktop",
				icon: Zap
			},
			{
				title: "Search Visibility",
				desc: "Ranked for high-intent keywords on Google Page 1",
				icon: Search
			},
			{
				title: "Responsive UI",
				desc: "Flawless experience across iPhones, iPads, and Android",
				icon: Smartphone
			},
			{
				title: "Higher Conversions",
				desc: "Optimized inquiry forms and clear call-to-actions",
				icon: CheckCircle2
			}
		]
	},
	social: {
		id: "social",
		tabLabel: "Social Media",
		eyebrow: "PROOF OF WORK",
		titlePrimary: "From Inconsistent Posts to a",
		titleAccent: "Strong Social Presence.",
		desc: "We create and manage high-quality content that builds brand identity and increases engagement.",
		ctaText: "See More Results",
		ctaLink: "/contact?interest=social",
		visualImg: "/pow-visual-social.png",
		fullBannerImg: "/pow-full-social.png",
		highlights: [
			{
				label: "Engaging Content",
				icon: Image
			},
			{
				label: "Consistent Posting",
				icon: Users
			},
			{
				label: "Better Engagement",
				icon: TrendingUp
			}
		],
		bottomFeatures: [
			{
				title: "High-Quality Visuals",
				desc: "Professional graphics, photos, and branded layouts",
				icon: Image
			},
			{
				title: "Short-Form Video",
				desc: "Engaging Reels and video storytelling",
				icon: Film
			},
			{
				title: "Consistent Scheduling",
				desc: "Weekly content calendars planned in advance",
				icon: Calendar
			},
			{
				title: "Community Growth",
				desc: "Active follower engagement and brand reach",
				icon: Heart
			}
		]
	},
	ads: {
		id: "ads",
		tabLabel: "Digital Advertising",
		eyebrow: "PROOF OF WORK",
		titlePrimary: "From Limited Reach to More",
		titleAccent: "Qualified Enquiries with Ads.",
		desc: "We plan and manage targeted ad campaigns to reach the right audience and generate more enquiries.",
		ctaText: "See More Results",
		ctaLink: "/contact?interest=ads",
		visualImg: "/pow-visual-ads.png",
		fullBannerImg: "/pow-full-ads.png",
		highlights: [
			{
				label: "Targeted Campaigns",
				icon: Target
			},
			{
				label: "Better Efficiency",
				icon: BarChart3
			},
			{
				label: "More Enquiries",
				icon: PhoneCall
			}
		],
		bottomFeatures: [
			{
				title: "Precision Targeting",
				desc: "Ads shown only to high-intent local audiences",
				icon: Target
			},
			{
				title: "Cost Optimization",
				desc: "Reduced cost per lead with optimized ad copy",
				icon: TrendingUp
			},
			{
				title: "Dual-Platform Scale",
				desc: "Synchronized Google Search Ads & Meta Ads",
				icon: Zap
			},
			{
				title: "Verified Leads",
				desc: "Direct patient, parent, and client inquiries delivered daily",
				icon: PhoneCall
			}
		]
	}
};
var ProofOfWorkPage = () => {
	const [searchParams] = useSearchParams();
	const serviceParam = searchParams.get("service");
	const initialCategory = serviceParam && [
		"gbp",
		"website",
		"social",
		"ads"
	].includes(serviceParam) ? serviceParam : "gbp";
	const [activeTab, setActiveTab] = useState(initialCategory);
	useEffect(() => {
		const service = searchParams.get("service");
		if (service && [
			"gbp",
			"website",
			"social",
			"ads"
		].includes(service)) {
			setActiveTab(service);
			setTimeout(() => {
				const target = document.querySelector(".proof-pill-nav-wrap");
				if (target) target.scrollIntoView({
					behavior: "smooth",
					block: "start"
				});
			}, 100);
		}
	}, [searchParams]);
	const currentCase = POW_CASES[activeTab];
	return /* @__PURE__ */ jsxs("div", {
		className: "proof-page",
		children: [/* @__PURE__ */ jsx("div", {
			className: "proof-bg-curve",
			"aria-hidden": "true",
			children: /* @__PURE__ */ jsxs("svg", {
				viewBox: "0 0 1440 640",
				fill: "none",
				preserveAspectRatio: "none",
				children: [/* @__PURE__ */ jsx("path", {
					d: "M-40,80 C260,180 420,-30 840,40 C1180,100 1340,30 1520,70 L1520,0 L-40,0 Z",
					fill: "#F6EFE5",
					opacity: "0.6"
				}), /* @__PURE__ */ jsx("path", {
					d: "M-20,240 C340,320 620,110 1020,180 C1280,225 1420,130 1500,160",
					stroke: "#EFE3D3",
					strokeWidth: "38",
					strokeLinecap: "round",
					fill: "none",
					opacity: "0.5"
				})]
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "proof-main-container",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "proof-pill-nav-wrap",
					children: /* @__PURE__ */ jsx("div", {
						className: "proof-pill-nav",
						role: "tablist",
						"aria-label": "Proof of Work Categories",
						children: Object.keys(POW_CASES).map((catKey) => {
							const item = POW_CASES[catKey];
							const isActive = activeTab === catKey;
							return /* @__PURE__ */ jsxs("button", {
								type: "button",
								role: "tab",
								"aria-selected": isActive,
								className: `proof-pill-tab-btn ${isActive ? "active" : ""}`,
								onClick: () => setActiveTab(catKey),
								children: [isActive && /* @__PURE__ */ jsx("div", {
									className: "proof-pill-sprout",
									"aria-hidden": "true",
									children: /* @__PURE__ */ jsxs("svg", {
										viewBox: "0 0 34 26",
										fill: "none",
										className: "proof-sprout-svg",
										children: [
											/* @__PURE__ */ jsx("path", {
												d: "M10 22 C9 13 3 10 1 13 C-1 16 2 20 8 19 C10 19 10 21 10 22 Z",
												fill: "#4D9B77"
											}),
											/* @__PURE__ */ jsx("path", {
												d: "M13 22 C13 10 18 3 26 4 C29 5 28 11 22 13 C17 15 14 18 13 22 Z",
												fill: "#66BC94"
											}),
											/* @__PURE__ */ jsx("path", {
												d: "M11 22 C10 13 8 2 15 1 C19 1 19 6 16 12 C14 17 12 20 11 22 Z",
												fill: "#3B8160"
											})
										]
									})
								}), /* @__PURE__ */ jsx("span", { children: item.tabLabel })]
							}, catKey);
						})
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "pow-card-wrapper",
					children: /* @__PURE__ */ jsx(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -12
							},
							transition: {
								duration: .28,
								ease: "easeInOut"
							},
							className: "pow-showcase-card",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "pow-showcase-main-grid",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "pow-info-col",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "pow-eyebrow-row",
											children: [/* @__PURE__ */ jsx("span", {
												className: "pow-eyebrow",
												children: currentCase.eyebrow
											}), /* @__PURE__ */ jsx("span", { className: "pow-eyebrow-line" })]
										}),
										/* @__PURE__ */ jsxs("h1", {
											className: "pow-main-title",
											children: [
												currentCase.titlePrimary,
												" ",
												/* @__PURE__ */ jsx("span", {
													className: "pow-title-accent",
													children: currentCase.titleAccent
												})
											]
										}),
										/* @__PURE__ */ jsx("p", {
											className: "pow-main-desc",
											children: currentCase.desc
										}),
										/* @__PURE__ */ jsx("div", {
											className: "pow-highlights-list",
											children: currentCase.highlights.map((h, i) => {
												const IconComp = h.icon;
												return /* @__PURE__ */ jsxs("div", {
													className: "pow-highlight-row",
													children: [/* @__PURE__ */ jsx("div", {
														className: "pow-badge-icon-box",
														children: /* @__PURE__ */ jsx(IconComp, {
															size: 18,
															strokeWidth: 2
														})
													}), /* @__PURE__ */ jsxs("div", {
														className: "pow-highlight-text",
														children: [/* @__PURE__ */ jsx("span", {
															className: "pow-h-title",
															children: h.label
														}), h.sublabel && /* @__PURE__ */ jsx("span", {
															className: "pow-h-sub",
															children: h.sublabel
														})]
													})]
												}, i);
											})
										})
									]
								}), /* @__PURE__ */ jsx("div", {
									className: "pow-visual-col",
									children: /* @__PURE__ */ jsx("div", {
										className: "pow-visual-card-wrap",
										children: /* @__PURE__ */ jsx("img", {
											src: currentCase.visualImg,
											alt: `${currentCase.tabLabel} Before and After Comparison`,
											className: "pow-visual-img"
										})
									})
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "pow-bottom-features-bar",
								children: currentCase.bottomFeatures.map((feat, idx) => {
									const FeatIcon = feat.icon;
									return /* @__PURE__ */ jsxs("div", {
										className: "pow-feature-card",
										children: [/* @__PURE__ */ jsx("div", {
											className: "pow-feat-icon-box",
											children: /* @__PURE__ */ jsx(FeatIcon, {
												size: 20,
												strokeWidth: 1.9
											})
										}), /* @__PURE__ */ jsxs("div", {
											className: "pow-feat-text",
											children: [/* @__PURE__ */ jsx("h4", {
												className: "pow-feat-title",
												children: feat.title
											}), /* @__PURE__ */ jsx("p", {
												className: "pow-feat-desc",
												children: feat.desc
											})]
										})]
									}, idx);
								})
							})]
						}, currentCase.id)
					})
				}),
				/* @__PURE__ */ jsx("section", {
					className: "proof-why-different-section",
					children: /* @__PURE__ */ jsx(ScrollReveal, {
						delay: 50,
						children: /* @__PURE__ */ jsxs("div", {
							className: "proof-why-box",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "proof-why-left",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "proof-why-eyebrow",
										children: "VERIFIED GROWTH PROCESS"
									}),
									/* @__PURE__ */ jsxs("h2", {
										className: "proof-why-title",
										children: [
											"Budget-Friendly Optimization. ",
											/* @__PURE__ */ jsx("br", {}),
											"Transparent Local Results."
										]
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "proof-why-desc",
										children: [
											"At ",
											/* @__PURE__ */ jsx("strong", { children: "sBLOOM" }),
											", we eliminate traditional agency overhead and use proprietary AI workflows to deliver measurable local rankings, genuine client reviews, and direct enquiries."
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "proof-why-checklist",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "proof-check-item",
												children: [/* @__PURE__ */ jsx(CheckCircle2, {
													size: 18,
													className: "text-gold"
												}), /* @__PURE__ */ jsx("span", { children: "Purpose-built for Healthcare, Education & Professional Services" })]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "proof-check-item",
												children: [/* @__PURE__ */ jsx(CheckCircle2, {
													size: 18,
													className: "text-gold"
												}), /* @__PURE__ */ jsx("span", { children: "Transparent weekly updates with zero hidden markups" })]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "proof-check-item",
												children: [/* @__PURE__ */ jsx(CheckCircle2, {
													size: 18,
													className: "text-gold"
												}), /* @__PURE__ */ jsx("span", { children: "Plans starting as low as ₹2,000/month" })]
											})
										]
									})
								]
							}), /* @__PURE__ */ jsx("div", {
								className: "proof-why-right",
								children: /* @__PURE__ */ jsxs("div", {
									className: "proof-why-cta-card",
									children: [
										/* @__PURE__ */ jsx("h3", {
											className: "proof-cta-card-title",
											children: "Ready for real, measurable results?"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "proof-cta-card-desc",
											children: "Tell us about your organization and get a tailored local growth audit within 24 hours."
										}),
										/* @__PURE__ */ jsxs(Link, {
											to: "/contact",
											className: "btn-proof-primary",
											children: [/* @__PURE__ */ jsx("span", { children: "Talk to sBLOOM" }), /* @__PURE__ */ jsx(ArrowRight, { size: 18 })]
										})
									]
								})
							})]
						})
					})
				})
			]
		})]
	});
};
// src/routes/proof-of-work.tsx
var proof_of_work_exports = /* @__PURE__ */ __exportAll({
	default: () => proof_of_work_default,
	meta: () => meta
});
var meta = () => {
	return [
		{ title: "Proof of Work | sBLOOM - Real Client Results" },
		{
			name: "description",
			content: "Explore verified before-and-after dashboards for Healthcare, Education, and Professional Services powered by sBLOOM AI-native digital marketing."
		},
		{
			property: "og:title",
			content: "Proof of Work | sBLOOM - Real Client Results"
		},
		{
			property: "og:description",
			content: "Explore verified before-and-after dashboards for Healthcare, Education, and Professional Services."
		}
	];
};
var proof_of_work_default = UNSAFE_withComponentProps(function Route() {
	return /* @__PURE__ */ jsx(ProofOfWorkPage, {});
});
// \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-UqVPdRyz.js",
		"imports": ["/assets/jsx-runtime-BZFlhNN9.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/root-DgBG7ixK.js",
			"imports": [
				"/assets/jsx-runtime-BZFlhNN9.js",
				"/assets/createLucideIcon-P2EIkAA3.js",
				"/assets/x-D9b8l9Jv.js",
				"/assets/proxy-uf-nINbG.js",
				"/assets/AnimatePresence-DjRHQz1_.js",
				"/assets/camera-BgMS1sGX.js",
				"/assets/briefcase-1G1S6wsE.js",
				"/assets/phone-DAHHXIul.js",
				"/assets/arrow-right-Cl5AYK_d.js",
				"/assets/globe-txhNG0Bi.js"
			],
			"css": ["/assets/root-BljkDv6d.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-BVhYRz-W.js",
			"imports": [
				"/assets/jsx-runtime-BZFlhNN9.js",
				"/assets/ScrollReveal-Dr9ZMo9Z.js",
				"/assets/proxy-uf-nINbG.js",
				"/assets/AnimatePresence-DjRHQz1_.js",
				"/assets/createLucideIcon-P2EIkAA3.js",
				"/assets/megaphone-CU2GvR3-.js",
				"/assets/arrow-right-Cl5AYK_d.js",
				"/assets/circle-check-CYhHGz0j.js",
				"/assets/trending-up-64ekS1ep.js",
				"/assets/sparkles-6_G4ry2S.js",
				"/assets/target-KmnvxZFv.js",
				"/assets/volume-x-Bb8zO00q.js",
				"/assets/building-complex-DzDecIgU.js",
				"/assets/monitor-pUfR_kSf.js",
				"/assets/shield-check-6pjTqh8l.js",
				"/assets/camera-BgMS1sGX.js",
				"/assets/film-DpaZWU5H.js",
				"/assets/file-text-Bj5uJ28h.js",
				"/assets/globe-txhNG0Bi.js",
				"/assets/x-D9b8l9Jv.js"
			],
			"css": ["/assets/home-7rmIQFlG.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/education": {
			"id": "routes/education",
			"parentId": "root",
			"path": "industries/education",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/education-DT2xtMJY.js",
			"imports": [
				"/assets/jsx-runtime-BZFlhNN9.js",
				"/assets/ScrollReveal-Dr9ZMo9Z.js",
				"/assets/monitor-pUfR_kSf.js",
				"/assets/map-pin-CUeHt76c.js",
				"/assets/trending-up-64ekS1ep.js",
				"/assets/users-B26spZE3.js",
				"/assets/megaphone-CU2GvR3-.js",
				"/assets/arrow-right-Cl5AYK_d.js",
				"/assets/createLucideIcon-P2EIkAA3.js"
			],
			"css": ["/assets/IndustryPage-DaNxJRA9.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/healthcare": {
			"id": "routes/healthcare",
			"parentId": "root",
			"path": "industries/healthcare",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/healthcare-CBn0QPz7.js",
			"imports": [
				"/assets/jsx-runtime-BZFlhNN9.js",
				"/assets/ScrollReveal-Dr9ZMo9Z.js",
				"/assets/monitor-pUfR_kSf.js",
				"/assets/map-pin-CUeHt76c.js",
				"/assets/trending-up-64ekS1ep.js",
				"/assets/users-B26spZE3.js",
				"/assets/megaphone-CU2GvR3-.js",
				"/assets/arrow-right-Cl5AYK_d.js",
				"/assets/createLucideIcon-P2EIkAA3.js"
			],
			"css": ["/assets/IndustryPage-DaNxJRA9.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/professional-services": {
			"id": "routes/professional-services",
			"parentId": "root",
			"path": "industries/professional-services",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/professional-services-Dd7LdSuR.js",
			"imports": [
				"/assets/jsx-runtime-BZFlhNN9.js",
				"/assets/ScrollReveal-Dr9ZMo9Z.js",
				"/assets/createLucideIcon-P2EIkAA3.js",
				"/assets/graduation-cap-Bjp-jd46.js",
				"/assets/building-complex-DzDecIgU.js",
				"/assets/arrow-right-Cl5AYK_d.js",
				"/assets/circle-check-CYhHGz0j.js",
				"/assets/shield-check-6pjTqh8l.js",
				"/assets/sparkles-6_G4ry2S.js"
			],
			"css": ["/assets/professional-services-Dp8oGgwr.css", "/assets/IndustryPage-DaNxJRA9.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/solutions": {
			"id": "routes/solutions",
			"parentId": "root",
			"path": "solutions",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/solutions-e19FwaZN.js",
			"imports": [
				"/assets/jsx-runtime-BZFlhNN9.js",
				"/assets/SolutionsOverviewPage-CJ9MhVRU.js",
				"/assets/proxy-uf-nINbG.js",
				"/assets/AnimatePresence-DjRHQz1_.js",
				"/assets/globe-txhNG0Bi.js",
				"/assets/map-pin-CUeHt76c.js",
				"/assets/search-u_YLnStI.js",
				"/assets/shield-check-6pjTqh8l.js",
				"/assets/film-DpaZWU5H.js",
				"/assets/megaphone-CU2GvR3-.js",
				"/assets/target-KmnvxZFv.js",
				"/assets/chart-column-B1_kgjRj.js",
				"/assets/users-B26spZE3.js",
				"/assets/arrow-right-Cl5AYK_d.js",
				"/assets/arrow-left-BMECI4P1.js",
				"/assets/heart-e7iAjvly.js",
				"/assets/phone-call-1Q7KoSlY.js",
				"/assets/volume-x-Bb8zO00q.js",
				"/assets/createLucideIcon-P2EIkAA3.js",
				"/assets/ScrollReveal-Dr9ZMo9Z.js"
			],
			"css": ["/assets/SolutionsOverviewPage-D2bMYNVo.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/build": {
			"id": "routes/build",
			"parentId": "root",
			"path": "solutions/build",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/build-yYwEmGOy.js",
			"imports": [
				"/assets/jsx-runtime-BZFlhNN9.js",
				"/assets/SolutionsOverviewPage-CJ9MhVRU.js",
				"/assets/proxy-uf-nINbG.js",
				"/assets/AnimatePresence-DjRHQz1_.js",
				"/assets/globe-txhNG0Bi.js",
				"/assets/map-pin-CUeHt76c.js",
				"/assets/search-u_YLnStI.js",
				"/assets/shield-check-6pjTqh8l.js",
				"/assets/film-DpaZWU5H.js",
				"/assets/megaphone-CU2GvR3-.js",
				"/assets/target-KmnvxZFv.js",
				"/assets/chart-column-B1_kgjRj.js",
				"/assets/users-B26spZE3.js",
				"/assets/arrow-right-Cl5AYK_d.js",
				"/assets/arrow-left-BMECI4P1.js",
				"/assets/heart-e7iAjvly.js",
				"/assets/phone-call-1Q7KoSlY.js",
				"/assets/volume-x-Bb8zO00q.js",
				"/assets/createLucideIcon-P2EIkAA3.js",
				"/assets/ScrollReveal-Dr9ZMo9Z.js"
			],
			"css": ["/assets/SolutionsOverviewPage-D2bMYNVo.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/create": {
			"id": "routes/create",
			"parentId": "root",
			"path": "solutions/create",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/create-BWwQ_3jD.js",
			"imports": [
				"/assets/jsx-runtime-BZFlhNN9.js",
				"/assets/SolutionsOverviewPage-CJ9MhVRU.js",
				"/assets/proxy-uf-nINbG.js",
				"/assets/AnimatePresence-DjRHQz1_.js",
				"/assets/globe-txhNG0Bi.js",
				"/assets/map-pin-CUeHt76c.js",
				"/assets/search-u_YLnStI.js",
				"/assets/shield-check-6pjTqh8l.js",
				"/assets/film-DpaZWU5H.js",
				"/assets/megaphone-CU2GvR3-.js",
				"/assets/target-KmnvxZFv.js",
				"/assets/chart-column-B1_kgjRj.js",
				"/assets/users-B26spZE3.js",
				"/assets/arrow-right-Cl5AYK_d.js",
				"/assets/arrow-left-BMECI4P1.js",
				"/assets/heart-e7iAjvly.js",
				"/assets/phone-call-1Q7KoSlY.js",
				"/assets/volume-x-Bb8zO00q.js",
				"/assets/createLucideIcon-P2EIkAA3.js",
				"/assets/ScrollReveal-Dr9ZMo9Z.js"
			],
			"css": ["/assets/SolutionsOverviewPage-D2bMYNVo.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/promote": {
			"id": "routes/promote",
			"parentId": "root",
			"path": "solutions/promote",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/promote-Utd2PNDn.js",
			"imports": [
				"/assets/jsx-runtime-BZFlhNN9.js",
				"/assets/SolutionsOverviewPage-CJ9MhVRU.js",
				"/assets/proxy-uf-nINbG.js",
				"/assets/AnimatePresence-DjRHQz1_.js",
				"/assets/globe-txhNG0Bi.js",
				"/assets/map-pin-CUeHt76c.js",
				"/assets/search-u_YLnStI.js",
				"/assets/shield-check-6pjTqh8l.js",
				"/assets/film-DpaZWU5H.js",
				"/assets/megaphone-CU2GvR3-.js",
				"/assets/target-KmnvxZFv.js",
				"/assets/chart-column-B1_kgjRj.js",
				"/assets/users-B26spZE3.js",
				"/assets/arrow-right-Cl5AYK_d.js",
				"/assets/arrow-left-BMECI4P1.js",
				"/assets/heart-e7iAjvly.js",
				"/assets/phone-call-1Q7KoSlY.js",
				"/assets/volume-x-Bb8zO00q.js",
				"/assets/createLucideIcon-P2EIkAA3.js",
				"/assets/ScrollReveal-Dr9ZMo9Z.js"
			],
			"css": ["/assets/SolutionsOverviewPage-D2bMYNVo.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/about": {
			"id": "routes/about",
			"parentId": "root",
			"path": "about",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/about-D-J7yp_9.js",
			"imports": [
				"/assets/jsx-runtime-BZFlhNN9.js",
				"/assets/ScrollReveal-Dr9ZMo9Z.js",
				"/assets/target-KmnvxZFv.js",
				"/assets/users-B26spZE3.js",
				"/assets/heart-e7iAjvly.js",
				"/assets/graduation-cap-Bjp-jd46.js",
				"/assets/briefcase-1G1S6wsE.js",
				"/assets/trending-up-64ekS1ep.js",
				"/assets/createLucideIcon-P2EIkAA3.js"
			],
			"css": ["/assets/about-5IYE-Zsv.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/how-it-works": {
			"id": "routes/how-it-works",
			"parentId": "root",
			"path": "how-it-works",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/how-it-works-BZK-Ipq0.js",
			"imports": [
				"/assets/jsx-runtime-BZFlhNN9.js",
				"/assets/proxy-uf-nINbG.js",
				"/assets/arrow-left-BMECI4P1.js",
				"/assets/arrow-right-Cl5AYK_d.js",
				"/assets/search-u_YLnStI.js",
				"/assets/chart-column-B1_kgjRj.js",
				"/assets/lightbulb-DTB_Me-r.js",
				"/assets/createLucideIcon-P2EIkAA3.js",
				"/assets/trending-up-64ekS1ep.js"
			],
			"css": ["/assets/how-it-works-BuG3iXEo.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/creative-workspace": {
			"id": "routes/creative-workspace",
			"parentId": "root",
			"path": "creative-workspace",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/creative-workspace-Bv37Og-n.js",
			"imports": [
				"/assets/jsx-runtime-BZFlhNN9.js",
				"/assets/ScrollReveal-Dr9ZMo9Z.js",
				"/assets/arrow-right-Cl5AYK_d.js",
				"/assets/circle-check-CYhHGz0j.js",
				"/assets/forms-CKcwkARW.js",
				"/assets/phone-DAHHXIul.js",
				"/assets/createLucideIcon-P2EIkAA3.js",
				"/assets/briefcase-1G1S6wsE.js",
				"/assets/megaphone-CU2GvR3-.js",
				"/assets/users-B26spZE3.js",
				"/assets/film-DpaZWU5H.js",
				"/assets/file-text-Bj5uJ28h.js"
			],
			"css": ["/assets/creative-workspace-DgzZnt3a.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/apply": {
			"id": "routes/apply",
			"parentId": "root",
			"path": "apply",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/apply-qKKLFVkP.js",
			"imports": ["/assets/jsx-runtime-BZFlhNN9.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/contact": {
			"id": "routes/contact",
			"parentId": "root",
			"path": "contact",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/contact-BzW2fCNj.js",
			"imports": [
				"/assets/jsx-runtime-BZFlhNN9.js",
				"/assets/forms-CKcwkARW.js",
				"/assets/building-complex-DzDecIgU.js",
				"/assets/phone-DAHHXIul.js",
				"/assets/createLucideIcon-P2EIkAA3.js",
				"/assets/arrow-right-Cl5AYK_d.js",
				"/assets/lightbulb-DTB_Me-r.js",
				"/assets/chart-column-B1_kgjRj.js",
				"/assets/file-text-Bj5uJ28h.js",
				"/assets/circle-check-CYhHGz0j.js"
			],
			"css": ["/assets/contact-t5E5GrSm.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/proof-of-work": {
			"id": "routes/proof-of-work",
			"parentId": "root",
			"path": "proof-of-work",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/proof-of-work-Ck6yDGE5.js",
			"imports": [
				"/assets/jsx-runtime-BZFlhNN9.js",
				"/assets/arrow-right-Cl5AYK_d.js",
				"/assets/trending-up-64ekS1ep.js",
				"/assets/users-B26spZE3.js",
				"/assets/createLucideIcon-P2EIkAA3.js",
				"/assets/camera-BgMS1sGX.js",
				"/assets/file-text-Bj5uJ28h.js",
				"/assets/map-pin-CUeHt76c.js",
				"/assets/monitor-pUfR_kSf.js",
				"/assets/search-u_YLnStI.js",
				"/assets/circle-check-CYhHGz0j.js",
				"/assets/film-DpaZWU5H.js",
				"/assets/heart-e7iAjvly.js",
				"/assets/target-KmnvxZFv.js",
				"/assets/chart-column-B1_kgjRj.js",
				"/assets/phone-call-1Q7KoSlY.js",
				"/assets/proxy-uf-nINbG.js",
				"/assets/AnimatePresence-DjRHQz1_.js",
				"/assets/ScrollReveal-Dr9ZMo9Z.js"
			],
			"css": ["/assets/proof-of-work-CCyIXzzI.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-2fde2e70.js",
	"version": "2fde2e70",
	"sri": void 0
};
// \0virtual:react-router/server-build
var assetsBuildDirectory = "build\\client";
var basename = "/";
var future = {
	"unstable_optimizeDeps": false,
	"v8_passThroughRequests": false,
	"v8_trailingSlashAwareDataRequests": false,
	"unstable_previewServerPrerendering": false,
	"v8_middleware": false,
	"v8_splitRouteModules": false,
	"v8_viteEnvironmentApi": false
};
var ssr = true;
var isSpaMode = false;
var prerender = [
	"/",
	"/solutions",
	"/solutions/build",
	"/solutions/create",
	"/solutions/promote",
	"/industries/education",
	"/industries/healthcare",
	"/industries/professional-services",
	"/about",
	"/contact",
	"/creative-workspace",
	"/how-it-works"
];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	},
	"routes/education": {
		id: "routes/education",
		parentId: "root",
		path: "industries/education",
		index: void 0,
		caseSensitive: void 0,
		module: education_exports
	},
	"routes/healthcare": {
		id: "routes/healthcare",
		parentId: "root",
		path: "industries/healthcare",
		index: void 0,
		caseSensitive: void 0,
		module: healthcare_exports
	},
	"routes/professional-services": {
		id: "routes/professional-services",
		parentId: "root",
		path: "industries/professional-services",
		index: void 0,
		caseSensitive: void 0,
		module: professional_services_exports
	},
	"routes/solutions": {
		id: "routes/solutions",
		parentId: "root",
		path: "solutions",
		index: void 0,
		caseSensitive: void 0,
		module: solutions_exports
	},
	"routes/build": {
		id: "routes/build",
		parentId: "root",
		path: "solutions/build",
		index: void 0,
		caseSensitive: void 0,
		module: build_exports
	},
	"routes/create": {
		id: "routes/create",
		parentId: "root",
		path: "solutions/create",
		index: void 0,
		caseSensitive: void 0,
		module: create_exports
	},
	"routes/promote": {
		id: "routes/promote",
		parentId: "root",
		path: "solutions/promote",
		index: void 0,
		caseSensitive: void 0,
		module: promote_exports
	},
	"routes/about": {
		id: "routes/about",
		parentId: "root",
		path: "about",
		index: void 0,
		caseSensitive: void 0,
		module: about_exports
	},
	"routes/how-it-works": {
		id: "routes/how-it-works",
		parentId: "root",
		path: "how-it-works",
		index: void 0,
		caseSensitive: void 0,
		module: how_it_works_exports
	},
	"routes/creative-workspace": {
		id: "routes/creative-workspace",
		parentId: "root",
		path: "creative-workspace",
		index: void 0,
		caseSensitive: void 0,
		module: creative_workspace_exports
	},
	"routes/apply": {
		id: "routes/apply",
		parentId: "root",
		path: "apply",
		index: void 0,
		caseSensitive: void 0,
		module: apply_exports
	},
	"routes/contact": {
		id: "routes/contact",
		parentId: "root",
		path: "contact",
		index: void 0,
		caseSensitive: void 0,
		module: contact_exports
	},
	"routes/proof-of-work": {
		id: "routes/proof-of-work",
		parentId: "root",
		path: "proof-of-work",
		index: void 0,
		caseSensitive: void 0,
		module: proof_of_work_exports
	}
};
var allowedActionOrigins = false;
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
