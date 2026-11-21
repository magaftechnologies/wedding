import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as MessageCircle, c as Footprints, d as ChevronRight, f as ChevronLeft, g as ArrowDown, h as ArrowRight, i as Pause, l as Flower2, m as ArrowUpRight, n as Sun, o as MapPin, p as Check, r as Play, s as Heart, t as X, u as Flame } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as objectType, r as stringType, t as enumType } from "../_libs/zod.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DnfSUqmT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			ceremony: "ceremony-button",
			wedding: "wedding-button",
			weddingGhost: "wedding-ghost-button",
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var wedding = {
	bride: "Sandhya Rani",
	groom: "Akshay Yadav",
	brideFormal: "Chi. La. Sow. Sandhya Rani",
	groomFormal: "Chi. Akshay Yadav",
	groomParents: "Smt. & Sri Golla Vijayalaxmi – Raghuveer Yadav",
	brideParents: "Smt. & Sri Palem Laxmi – Gopal Yadav",
	brideResidence: "R/o. Jaklair",
	divineBlessings: [
		"Late Golla Eeramma",
		"Late Laxmappa Yadav",
		"Late A. Balamani",
		"Late A. Laxmanna"
	],
	blessings: ["Smt. P. Parvathi Devi", "Late Krishnamurthy Yadav"],
	date: "2026-12-04T09:00:00+05:30",
	displayDate: "Friday, 4 December 2026",
	time: "9:00 AM",
	lagnam: "Dhanur Lagnam",
	sabhaLagnam: "12:20 PM",
	venue: "Sri Garden Function Hall A/C",
	address: "Sri Satyanarayana Swamy Temple Road, Narayanapet",
	directions: "https://www.google.com/maps/search/?api=1&query=Sri+Garden+Function+Hall+A%2FC+Sri+Satyanarayana+Swamy+Temple+Road+Narayanapet"
};
var rsvpSchema = objectType({
	name: stringType().trim().min(1, "Please enter your name.").max(100, "Please use fewer than 100 characters."),
	attendance: enumType([
		"yes",
		"maybe",
		"no"
	])
});
function countdownAt(now, target = Date.parse(wedding.date)) {
	const seconds = Math.max(0, Math.floor((target - now) / 1e3));
	return {
		days: Math.floor(seconds / 86400),
		hours: Math.floor(seconds % 86400 / 3600),
		minutes: Math.floor(seconds % 3600 / 60),
		seconds: seconds % 60
	};
}
var events = [
	{
		name: "Pellikoduku",
		telugu: "పెళ్లికొడుకు",
		date: "30",
		month: "NOVEMBER",
		time: "11:00 AM",
		description: "The Groom’s Prelude",
		symbol: "sun",
		image: 4,
		startsAt: "2026-11-30T11:00:00+05:30"
	},
	{
		name: "Pellikoduku 2.0",
		telugu: "పెళ్లికొడుకు 2.0",
		date: "01",
		month: "DECEMBER",
		time: "11:00 AM",
		description: "The Groom’s Grand Celebration",
		symbol: "heart",
		image: 0,
		startsAt: "2026-12-01T11:00:00+05:30"
	},
	{
		name: "Haldi",
		telugu: "పసుపు వేడుక",
		date: "02",
		month: "DECEMBER",
		time: "10:00 AM",
		description: "Golden Glow",
		symbol: "sun",
		image: 1,
		startsAt: "2026-12-02T10:00:00+05:30"
	},
	{
		name: "Mehendi",
		telugu: "మెహందీ",
		date: "02",
		month: "DECEMBER",
		time: "7:00 PM",
		description: "Mehendi Under the Stars",
		symbol: "flower",
		image: 3,
		startsAt: "2026-12-02T19:00:00+05:30"
	},
	{
		name: "Pelli Pandiri",
		telugu: "పెళ్లి పందిరి",
		date: "03",
		month: "DECEMBER",
		time: "9:00 AM",
		description: "The Sacred Beginning",
		symbol: "flame",
		image: 2,
		startsAt: "2026-12-03T09:00:00+05:30"
	},
	{
		name: "Baharaat / Baraat",
		telugu: "బారాత్",
		date: "03",
		month: "DECEMBER",
		time: "8:00 PM",
		description: "The Royal Baraat",
		symbol: "heart",
		image: 5,
		startsAt: "2026-12-03T20:00:00+05:30"
	}
];
function MemoryCarousel({ photos, captions, onOpen }) {
	const [viewportRef, api] = useEmblaCarousel({
		align: "center",
		containScroll: false,
		duration: 35,
		dragFree: false,
		watchDrag: true
	});
	const [active, setActive] = (0, import_react.useState)(0);
	const select = (0, import_react.useCallback)(() => {
		if (api) setActive(api.selectedScrollSnap());
	}, [api]);
	(0, import_react.useEffect)(() => {
		if (!api) return;
		select();
		api.on("select", select).on("reInit", select);
		return () => {
			api.off("select", select).off("reInit", select);
		};
	}, [api, select]);
	function go(index) {
		api?.scrollTo(index, window.matchMedia("(prefers-reduced-motion: reduce)").matches);
	}
	function keyDown(event) {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			go(Math.max(0, active - 1));
		}
		if (event.key === "ArrowRight") {
			event.preventDefault();
			go(Math.min(photos.length - 1, active + 1));
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "memory-carousel",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "memory-viewport",
				ref: viewportRef,
				role: "region",
				"aria-roledescription": "carousel",
				"aria-label": "Wedding memories",
				tabIndex: 0,
				onKeyDown: keyDown,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "memory-track",
					children: photos.map((photo, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "memory-slide",
						"data-active": index === active,
						"data-memory-slide": index,
						"aria-label": `Memory ${index + 1} of ${photos.length}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "weddingGhost",
							className: "memory-image-button",
							"aria-label": `Open photo: ${captions[index] ?? "Wedding memory"}`,
							onClick: () => onOpen(index),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: photo.url,
								alt: captions[index] ?? "Akshay and Sandhya",
								loading: "lazy",
								draggable: false
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "memory-caption",
							children: captions[index]
						})]
					}, photo.url))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "memory-controls",
				"aria-label": "Memory carousel controls",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "weddingGhost",
						className: "memory-arrow",
						"aria-label": "Previous memory",
						title: "Previous memory",
						disabled: active === 0,
						onClick: () => go(active - 1),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "memory-pagination",
						children: photos.map((photo, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "weddingGhost",
							className: "memory-dot",
							"aria-label": `Go to memory ${index + 1}`,
							"aria-current": active === index ? "true" : void 0,
							onClick: () => go(index),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
						}, photo.url))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "weddingGhost",
						className: "memory-arrow",
						"aria-label": "Next memory",
						title: "Next memory",
						disabled: active === photos.length - 1,
						onClick: () => go(active + 1),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "memory-counter",
				"aria-live": "polite",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: captions[active] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					String(active + 1).padStart(2, "0"),
					" / ",
					String(photos.length).padStart(2, "0")
				] })]
			})
		]
	});
}
var client_romantic_webp_asset_default = {
	asset_id: "545e4566-b040-4ce0-94d3-b8d2484605d7",
	content_type: "image/webp",
	created_at: "2026-11-21T14:50:13Z",
	original_filename: "akshay-sandhya-romantic.webp",
	project_id: "0a6abf23-d86f-4a1d-bbd4-1b223d3d5966",
	r2_key: "a/v1/0a6abf23-d86f-4a1d-bbd4-1b223d3d5966/545e4566-b040-4ce0-94d3-b8d2484605d7/akshay-sandhya-romantic.webp",
	size: 189136,
	url: "https://id-preview--0a6abf23-d86f-4a1d-bbd4-1b223d3d5966.lovable.app/__l5e/assets-v1/545e4566-b040-4ce0-94d3-b8d2484605d7/akshay-sandhya-romantic.webp",
	version: 1
};
var client_silhouette_webp_asset_default = {
	asset_id: "b903c7e5-2944-4646-8f12-db526cc2fc66",
	content_type: "image/webp",
	created_at: "2026-11-21T14:50:20Z",
	original_filename: "akshay-sandhya-silhouette.webp",
	project_id: "0a6abf23-d86f-4a1d-bbd4-1b223d3d5966",
	r2_key: "a/v1/0a6abf23-d86f-4a1d-bbd4-1b223d3d5966/b903c7e5-2944-4646-8f12-db526cc2fc66/akshay-sandhya-silhouette.webp",
	size: 60298,
	url: "https://id-preview--0a6abf23-d86f-4a1d-bbd4-1b223d3d5966.lovable.app/__l5e/assets-v1/b903c7e5-2944-4646-8f12-db526cc2fc66/akshay-sandhya-silhouette.webp",
	version: 1
};
var client_formal_webp_asset_default = {
	asset_id: "2b54cdf0-5272-4f5e-96c5-28621a70e1df",
	content_type: "image/webp",
	created_at: "2026-11-21T14:50:25Z",
	original_filename: "akshay-sandhya-formal.webp",
	project_id: "0a6abf23-d86f-4a1d-bbd4-1b223d3d5966",
	r2_key: "a/v1/0a6abf23-d86f-4a1d-bbd4-1b223d3d5966/2b54cdf0-5272-4f5e-96c5-28621a70e1df/akshay-sandhya-formal.webp",
	size: 278134,
	url: "https://id-preview--0a6abf23-d86f-4a1d-bbd4-1b223d3d5966.lovable.app/__l5e/assets-v1/2b54cdf0-5272-4f5e-96c5-28621a70e1df/akshay-sandhya-formal.webp",
	version: 1
};
var client_rings_webp_asset_default = {
	asset_id: "205743c6-f1a9-4bb9-8207-dbe74f4a1b97",
	content_type: "image/webp",
	created_at: "2026-11-21T14:50:30Z",
	original_filename: "akshay-sandhya-rings.webp",
	project_id: "0a6abf23-d86f-4a1d-bbd4-1b223d3d5966",
	r2_key: "a/v1/0a6abf23-d86f-4a1d-bbd4-1b223d3d5966/205743c6-f1a9-4bb9-8207-dbe74f4a1b97/akshay-sandhya-rings.webp",
	size: 132770,
	url: "https://id-preview--0a6abf23-d86f-4a1d-bbd4-1b223d3d5966.lovable.app/__l5e/assets-v1/205743c6-f1a9-4bb9-8207-dbe74f4a1b97/akshay-sandhya-rings.webp",
	version: 1
};
var client_landscape_webp_asset_default = {
	asset_id: "17b9df12-ba3d-4b3c-a1a6-ad2347328465",
	content_type: "image/webp",
	created_at: "2026-11-21T14:50:36Z",
	original_filename: "akshay-sandhya-landscape.webp",
	project_id: "0a6abf23-d86f-4a1d-bbd4-1b223d3d5966",
	r2_key: "a/v1/0a6abf23-d86f-4a1d-bbd4-1b223d3d5966/17b9df12-ba3d-4b3c-a1a6-ad2347328465/akshay-sandhya-landscape.webp",
	size: 242086,
	url: "https://id-preview--0a6abf23-d86f-4a1d-bbd4-1b223d3d5966.lovable.app/__l5e/assets-v1/17b9df12-ba3d-4b3c-a1a6-ad2347328465/akshay-sandhya-landscape.webp",
	version: 1
};
var client_intimate_webp_asset_default = {
	asset_id: "b34de233-e201-4336-ad4d-71732f58aeca",
	content_type: "image/webp",
	created_at: "2026-11-21T14:50:41Z",
	original_filename: "akshay-sandhya-intimate.webp",
	project_id: "0a6abf23-d86f-4a1d-bbd4-1b223d3d5966",
	r2_key: "a/v1/0a6abf23-d86f-4a1d-bbd4-1b223d3d5966/b34de233-e201-4336-ad4d-71732f58aeca/akshay-sandhya-intimate.webp",
	size: 237194,
	url: "https://id-preview--0a6abf23-d86f-4a1d-bbd4-1b223d3d5966.lovable.app/__l5e/assets-v1/b34de233-e201-4336-ad4d-71732f58aeca/akshay-sandhya-intimate.webp",
	version: 1
};
var clientPhotos = {
	romantic: client_romantic_webp_asset_default,
	silhouette: client_silhouette_webp_asset_default,
	formal: client_formal_webp_asset_default,
	rings: client_rings_webp_asset_default,
	landscape: client_landscape_webp_asset_default,
	intimate: client_intimate_webp_asset_default,
	venue: {
		asset_id: "03cc4ce4-9afe-42b6-9745-efaebaae4fdf",
		content_type: "image/webp",
		created_at: "2026-11-21T14:50:47Z",
		original_filename: "akshay-sandhya-venue.webp",
		project_id: "0a6abf23-d86f-4a1d-bbd4-1b223d3d5966",
		r2_key: "a/v1/0a6abf23-d86f-4a1d-bbd4-1b223d3d5966/03cc4ce4-9afe-42b6-9745-efaebaae4fdf/akshay-sandhya-venue.webp",
		size: 360494,
		url: "https://id-preview--0a6abf23-d86f-4a1d-bbd4-1b223d3d5966.lovable.app/__l5e/assets-v1/03cc4ce4-9afe-42b6-9745-efaebaae4fdf/akshay-sandhya-venue.webp",
		version: 1
	}
};
var memoryPhotos = [
	client_formal_webp_asset_default,
	client_romantic_webp_asset_default,
	client_rings_webp_asset_default,
	client_silhouette_webp_asset_default,
	client_landscape_webp_asset_default,
	client_intimate_webp_asset_default
];
var memoryCaptions = [
	"Akshay & Sandhya · Wrapped in tradition",
	"Two hearts, one beautiful beginning",
	"A promise held close",
	"Together, in every light",
	"A celebration of togetherness",
	"Our forever begins here"
];
var music_mp3_asset_default = {
	asset_id: "1173eaaf-fa1f-46eb-8aa4-70aa6bc8eefa",
	content_type: "audio/mpeg",
	created_at: "2026-11-21T13:16:44Z",
	original_filename: "kal.mp3",
	project_id: "0a6abf23-d86f-4a1d-bbd4-1b223d3d5966",
	r2_key: "public/audio/kal.mp3",
	size: 6274027,
	url: "/audio/kal.mp3",
	version: 1
};
var couple_memory_mp4_asset_default = {
	asset_id: "6a3a6815-b03e-4f93-9761-c97461ff2e67",
	content_type: "video/mp4",
	created_at: "2026-11-21T13:16:50Z",
	original_filename: "couple-memory.mp4",
	project_id: "0a6abf23-d86f-4a1d-bbd4-1b223d3d5966",
	r2_key: "a/v1/0a6abf23-d86f-4a1d-bbd4-1b223d3d5966/6a3a6815-b03e-4f93-9761-c97461ff2e67/couple-memory.mp4",
	size: 1450115,
	url: "https://id-preview--0a6abf23-d86f-4a1d-bbd4-1b223d3d5966.lovable.app/__l5e/assets-v1/6a3a6815-b03e-4f93-9761-c97461ff2e67/couple-memory.mp4",
	version: 1
};
var curtain_jpg_asset_default = {
	asset_id: "711f42e7-fc88-420f-aacc-02d56843ce7e",
	content_type: "image/jpeg",
	created_at: "2026-11-21T13:14:40Z",
	original_filename: "green-silk-curtain.jpg",
	project_id: "0a6abf23-d86f-4a1d-bbd4-1b223d3d5966",
	r2_key: "a/v1/0a6abf23-d86f-4a1d-bbd4-1b223d3d5966/711f42e7-fc88-420f-aacc-02d56843ce7e/green-silk-curtain.jpg",
	size: 116078,
	url: "https://id-preview--0a6abf23-d86f-4a1d-bbd4-1b223d3d5966.lovable.app/__l5e/assets-v1/711f42e7-fc88-420f-aacc-02d56843ce7e/green-silk-curtain.jpg",
	version: 1
};
var entrance_mp4_asset_default = {
	asset_id: "171fcfda-beb0-4033-99a4-c93525f20d7e",
	content_type: "video/mp4",
	created_at: "2026-11-21T13:14:35Z",
	original_filename: "ceremonial-entrance.mp4",
	project_id: "0a6abf23-d86f-4a1d-bbd4-1b223d3d5966",
	r2_key: "a/v1/0a6abf23-d86f-4a1d-bbd4-1b223d3d5966/171fcfda-beb0-4033-99a4-c93525f20d7e/ceremonial-entrance.mp4",
	size: 2383615,
	url: "https://id-preview--0a6abf23-d86f-4a1d-bbd4-1b223d3d5966.lovable.app/__l5e/assets-v1/171fcfda-beb0-4033-99a4-c93525f20d7e/ceremonial-entrance.mp4",
	version: 1
};
function Ornament() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "ornament",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower2, {})
	});
}
function DappuIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: "dappu-icon",
		viewBox: "0 0 32 32",
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "16",
				cy: "16",
				rx: "10",
				ry: "11",
				stroke: "currentColor",
				strokeWidth: "1.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "16",
				cy: "16",
				rx: "7",
				ry: "8",
				stroke: "currentColor",
				strokeWidth: ".7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M7 11l18 10M7 21l18-10M10 5l12 22M10 27L22 5M2 3l7 9M27 2l-3 10",
				stroke: "currentColor",
				strokeWidth: "1.3"
			})
		]
	});
}
function Entrance({ onOpen, onComplete }) {
	const videoRef = (0, import_react.useRef)(null);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [finished, setFinished] = (0, import_react.useState)(false);
	const [failed, setFailed] = (0, import_react.useState)(false);
	function finish() {
		setFinished(true);
		onComplete();
	}
	async function open() {
		onOpen();
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			finish();
			return;
		}
		setPlaying(true);
		try {
			await videoRef.current?.play();
		} catch {
			setFailed(true);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `entrance ${playing ? "is-playing" : ""} ${finished ? "is-finished" : ""}`,
		"aria-label": "Wedding invitation entrance",
		"aria-hidden": finished,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "entrance-image",
				src: curtain_jpg_asset_default.url,
				alt: "Green silk curtains framed by jasmine garlands, banana leaves and brass lamps"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				className: "entrance-video",
				ref: videoRef,
				src: entrance_mp4_asset_default.url,
				poster: curtain_jpg_asset_default.url,
				playsInline: true,
				muted: true,
				preload: "auto",
				onEnded: finish,
				onError: () => setFailed(true)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "entrance-top",
				children: "॥ శ్రీరస్తు · శుభమస్తు · అవిఘ్నమస్తు ॥"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "entrance-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "monogram",
						children: [
							"A",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: " and "
							}),
							"♡S"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "With love, we invite you to celebrate"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
						"Akshay ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "♡" }),
						" Sandhya"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "invitation-date",
						children: "4 December 2026 · Narayanapet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ceremony",
						onClick: open,
						children: ["Open Invitation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "small-note",
						children: "Two hearts. One beautiful beginning."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "entrance-footer",
				children: "A CELEBRATION OF LOVE, FAMILY & TRADITION"
			}),
			playing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "opening-fallback",
				variant: "ceremony",
				onClick: finish,
				children: failed ? "Enter invitation" : "Skip entrance"
			})
		]
	});
}
var photos = memoryPhotos;
var captions = memoryCaptions;
var labels = {
	en: {
		story: "Our Story",
		journey: "The Wedding Chronicles",
		memories: "Our Memories",
		venue: "The Venue",
		rsvp: "RSVP",
		together: "Together with our families",
		hero: "We’re getting married",
		line: "And we would love to have you by our side.",
		view: "Explore our celebration",
		blessing: "An invitation from our hearts",
		message: "With the blessings of our parents and the love of our families, we joyfully invite you to celebrate our wedding. Join us as we begin a lifetime of love, laughter, and togetherness.",
		families: "With love, the families of Akshay & Sandhya",
		storySub: "Some things are simply meant to be.",
		journeySub: "30 November – 4 December 2026",
		countdown: "Until our forever begins",
		countdownSub: "Every moment brings us closer to you.",
		venueSub: "A beautiful place to begin our forever.",
		directions: "View on Google Maps",
		memoriesSub: "Little moments, held close to our hearts.",
		film: "Love, in motion",
		filmSub: "A little glimpse of our beautiful togetherness.",
		join: "Will you join us?",
		joinSub: "Our celebration would be incomplete without you.",
		name: "Your name",
		placeholder: "Enter your full name",
		yes: "Yes, I’ll be there",
		maybe: "Maybe, I’ll let you know",
		no: "Sorry, I can’t attend",
		send: "Send our RSVP",
		thanks: "Thank you for being part of our special day.",
		end: "We look forward to celebrating with you.",
		demoNote: "Demo RSVP only — responses are not saved or sent.",
		demoComplete: "Thank you! This demo RSVP was not saved or sent.",
		days: "Days",
		hours: "Hours",
		minutes: "Minutes",
		seconds: "Seconds"
	},
	te: {
		story: "మా ప్రేమ కథ",
		journey: "వివాహ ప్రయాణం",
		memories: "మా జ్ఞాపకాలు",
		venue: "వివాహ వేదిక",
		rsvp: "మీ ఆహ్వానం",
		together: "మా కుటుంబాల ఆశీస్సులతో",
		hero: "మా వివాహ వేడుక",
		line: "మా ఆనందంలో మీరు భాగస్వాములు కావాలని కోరుకుంటున్నాము.",
		view: "మా వేడుకలను చూడండి",
		blessing: "మా హృదయపూర్వక ఆహ్వానం",
		message: "మా తల్లిదండ్రుల ఆశీస్సులతో, కుటుంబ సభ్యుల ప్రేమతో మా వివాహ మహోత్సవానికి మిమ్మల్ని సాదరంగా ఆహ్వానిస్తున్నాము. ప్రేమ, ఆనందం మరియు అనుబంధంతో మా కొత్త జీవితాన్ని ప్రారంభించే ఈ శుభ సందర్భంలో మీ సమక్షం మాకు ఎంతో విలువైనది.",
		families: "ప్రేమతో, అక్షయ్ మరియు సంధ్య కుటుంబ సభ్యులు",
		storySub: "కొన్ని బంధాలు కలకాలం నిలిచిపోతాయి.",
		journeySub: "30 November – 4 December 2026",
		countdown: "మా కొత్త జీవితం ప్రారంభమయ్యే వరకు",
		countdownSub: "ప్రతి క్షణం మిమ్మల్ని మాకు చేరువ చేస్తుంది.",
		venueSub: "అందమైన ప్రారంభానికి అద్భుతమైన వేదిక.",
		directions: "మార్గం చూడండి",
		memoriesSub: "మా హృదయాల్లో నిలిచిపోయిన మధుర క్షణాలు.",
		film: "మా ప్రేమ దృశ్యాలు",
		filmSub: "మా ఆనందకరమైన అనుబంధం.",
		join: "మీరు మాతో చేరుతారా?",
		joinSub: "మీ సమక్షం మా వేడుకకు ఎంతో ప్రత్యేకం.",
		name: "మీ పేరు",
		placeholder: "మీ పూర్తి పేరు రాయండి",
		yes: "అవును, నేను వస్తాను",
		maybe: "వచ్చేందుకు ప్రయత్నిస్తాను",
		no: "క్షమించండి, రాలేను",
		send: "నా స్పందన పంపండి",
		thanks: "మా ప్రత్యేక రోజులో భాగమైనందుకు ధన్యవాదాలు.",
		end: "మీతో కలిసి వేడుక జరుపుకోవాలని ఎదురుచూస్తున్నాము.",
		demoNote: "ఇది డెమో RSVP మాత్రమే — మీ స్పందన సేవ్ చేయబడదు లేదా పంపబడదు.",
		demoComplete: "ధన్యవాదాలు! ఈ డెమో RSVP సేవ్ చేయబడలేదు లేదా పంపబడలేదు.",
		days: "రోజులు",
		hours: "గంటలు",
		minutes: "నిమిషాలు",
		seconds: "సెకన్లు"
	}
};
function Heading({ eyebrow, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "section-heading",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "eyebrow",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, {}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: subtitle })
		]
	});
}
function Section({ children, id, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: `section ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "section-inner",
			children
		})
	});
}
function EventIcon({ kind }) {
	if (kind === "sun") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {});
	if (kind === "flower") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower2, {});
	if (kind === "flame") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {});
}
function Countdown({ language }) {
	const [count, setCount] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const update = () => setCount(countdownAt(Date.now()));
		update();
		const timer = setInterval(update, 1e3);
		return () => clearInterval(timer);
	}, []);
	const t = labels[language];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "countdown",
		children: [
			"days",
			"hours",
			"minutes",
			"seconds"
		].map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "countdown-unit",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: count ? String(count[key]).padStart(2, "0") : "—" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t[key] })]
		}, key))
	});
}
function Journey({ language }) {
	const track = (0, import_react.useRef)(null);
	const path = (0, import_react.useRef)(null);
	const drawn = (0, import_react.useRef)(null);
	const feet = (0, import_react.useRef)([]);
	const nodes = (0, import_react.useRef)([]);
	const [shape, setShape] = (0, import_react.useState)({
		width: 0,
		height: 0,
		d: ""
	});
	(0, import_react.useEffect)(() => {
		const el = track.current;
		if (!el) return;
		const measure = () => {
			const box = el.getBoundingClientRect();
			const points = nodes.current.flatMap((node) => {
				if (!node) return [];
				const nodeBox = node.getBoundingClientRect();
				return [{
					x: nodeBox.left - box.left + nodeBox.width / 2,
					y: nodeBox.top - box.top + nodeBox.height / 2
				}];
			});
			if (!points.length) return;
			const all = [
				{
					x: points[0].x,
					y: Math.max(0, points[0].y - 90)
				},
				...points,
				{
					x: points[points.length - 1].x,
					y: box.height
				}
			];
			let d = `M${all[0].x} ${all[0].y}`;
			for (let i = 1; i < all.length; i++) {
				const a = all[i - 1];
				const b = all[i];
				if (!a || !b) continue;
				const mid = (b.y - a.y) * .5;
				d += ` C${a.x} ${a.y + mid} ${b.x} ${b.y - mid} ${b.x} ${b.y}`;
			}
			setShape({
				width: box.width,
				height: box.height,
				d
			});
		};
		measure();
		const observer = new ResizeObserver(measure);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		const el = track.current;
		const line = path.current;
		if (!el || !line || !shape.d) return;
		const total = line.getTotalLength();
		if (drawn.current) drawn.current.style.strokeDasharray = `${total}`;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		let shown = -1;
		let frame = 0;
		const target = () => {
			const r = el.getBoundingClientRect();
			return Math.min(1, Math.max(0, (window.innerHeight * .6 - r.top) / r.height));
		};
		const tick = () => {
			const goal = target();
			shown = shown < 0 || reduced ? goal : shown + (goal - shown) * .12;
			if (drawn.current) drawn.current.style.strokeDashoffset = `${total * (1 - shown)}`;
			feet.current.forEach((foot, index) => {
				if (!foot) return;
				const at = Math.max(0, shown * total - index * 26);
				const p = line.getPointAtLength(at);
				const q = line.getPointAtLength(Math.min(total, at + 2));
				const angle = Math.atan2(q.y - p.y, q.x - p.x) * 180 / Math.PI + 90;
				const side = index % 2 ? 6 : -6;
				const rad = angle * Math.PI / 180;
				foot.style.transform = `translate(${p.x + Math.cos(rad) * side}px, ${p.y + Math.sin(rad) * side}px) translate(-50%, -50%) rotate(${angle}deg)`;
				foot.style.opacity = shown > .002 ? `${1 - index * .2}` : "0";
			});
			if (Math.abs(goal - shown) > 5e-4) frame = requestAnimationFrame(tick);
			else frame = 0;
		};
		const update = () => {
			if (!frame) frame = requestAnimationFrame(tick);
		};
		update();
		window.addEventListener("scroll", update, { passive: true });
		window.addEventListener("resize", update);
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("scroll", update);
			window.removeEventListener("resize", update);
		};
	}, [shape]);
	(0, import_react.useEffect)(() => {
		const items = track.current?.querySelectorAll(".journey-event");
		if (!items) return;
		const io = new IntersectionObserver((entries) => entries.forEach((e) => {
			if (e.isIntersecting) e.target.classList.add("is-visible");
		}), { threshold: .25 });
		items.forEach((item) => io.observe(item));
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "journey",
		ref: track,
		children: [
			shape.d && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: "journey-track",
				width: shape.width,
				height: shape.height,
				viewBox: `0 0 ${shape.width} ${shape.height}`,
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						className: "journey-path-halo",
						d: shape.d
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						className: "journey-path-faint",
						ref: path,
						d: shape.d
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						className: "journey-path",
						ref: drawn,
						d: shape.d
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "journey-footprints",
				"aria-hidden": "true",
				children: [
					0,
					1,
					2,
					3
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "journey-footstep",
					ref: (n) => {
						feet.current[i] = n;
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footprints, { size: 18 })
				}, i))
			}),
			events.map((event, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: `journey-event ${index % 2 ? "is-right" : "is-left"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "event-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "event-photo-wrap",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "event-photo",
							src: photos[event.image]?.url,
							alt: captions[event.image],
							loading: "lazy"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "event-info",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "event-number",
								children: String(index + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow",
								children: [
									event.date,
									" ",
									event.month,
									" 2026"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: language === "te" ? event.telugu : event.name }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "event-time",
								children: event.time
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "event-description",
								children: event.description
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "event-node",
					ref: (n) => {
						nodes.current[index] = n;
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventIcon, { kind: event.symbol })
				})]
			}, event.name))
		]
	});
}
function RSVP({ language }) {
	const t = labels[language];
	const [name, setName] = (0, import_react.useState)("");
	const [attendance, setAttendance] = (0, import_react.useState)("yes");
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	function submit(event) {
		event.preventDefault();
		setError("");
		const parsed = rsvpSchema.safeParse({
			name,
			attendance
		});
		if (!parsed.success) {
			setError(parsed.error.issues[0]?.message ?? "Please check your response.");
			return;
		}
		setSubmitted(true);
	}
	if (submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rsvp-status",
		role: "status",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				className: "mx-auto mb-4 text-gold",
				size: 28
			}),
			t.demoComplete,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ceremony",
					onClick: () => {
						setSubmitted(false);
						setName("");
					},
					children: "Add another guest"
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "rsvp-form",
		onSubmit: submit,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rsvp-demo-note",
				children: t.demoNote
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "field-label",
				htmlFor: "guest-name",
				children: t.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "rsvp-input",
				id: "guest-name",
				autoComplete: "name",
				placeholder: t.placeholder,
				maxLength: 100,
				value: name,
				onChange: (event) => setName(event.target.value),
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
				className: "attendance-options",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "sr-only",
					children: "Attendance"
				}), [
					["yes", t.yes],
					["maybe", t.maybe],
					["no", t.no]
				].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "attendance-option",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "radio",
						name: "attendance",
						value,
						checked: attendance === value,
						onChange: () => setAttendance(value)
					}), label]
				}, value))]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rsvp-error",
				role: "alert",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "ceremony",
				type: "submit",
				className: "rsvp-submit",
				children: [t.send, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
			})
		]
	});
}
function Invitation() {
	const [opened, setOpened] = (0, import_react.useState)(false);
	const [opening, setOpening] = (0, import_react.useState)(false);
	const [language, setLanguage] = (0, import_react.useState)("en");
	const [musicPlaying, setMusicPlaying] = (0, import_react.useState)(false);
	const [autoScroll, setAutoScroll] = (0, import_react.useState)(false);
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	const audio = (0, import_react.useRef)(null);
	const pauseUntil = (0, import_react.useRef)(0);
	const swipeStart = (0, import_react.useRef)(0);
	const restoreMusic = (0, import_react.useRef)(false);
	const t = labels[language];
	(0, import_react.useEffect)(() => {
		const old = document.body.style.overflow;
		if (!opened || lightbox !== null) document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = old;
		};
	}, [opened, lightbox]);
	(0, import_react.useEffect)(() => {
		if (!opened || !autoScroll || lightbox !== null || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		pauseUntil.current = performance.now() + 9e3;
		let frame = 0, last = 0, position = window.scrollY;
		function animate(now) {
			const delta = last ? Math.min(now - last, 50) : 0;
			last = now;
			if (now > pauseUntil.current && !document.hidden && window.scrollY + window.innerHeight < document.documentElement.scrollHeight - 1) {
				position += delta * .012;
				window.scrollTo({
					top: position,
					behavior: "instant"
				});
			} else position = window.scrollY;
			frame = requestAnimationFrame(animate);
		}
		const pause = () => {
			pauseUntil.current = performance.now() + 12e3;
			position = window.scrollY;
		};
		window.addEventListener("wheel", pause, { passive: true });
		window.addEventListener("touchstart", pause, { passive: true });
		window.addEventListener("pointerdown", pause);
		window.addEventListener("keydown", pause);
		frame = requestAnimationFrame(animate);
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("wheel", pause);
			window.removeEventListener("touchstart", pause);
			window.removeEventListener("pointerdown", pause);
			window.removeEventListener("keydown", pause);
		};
	}, [
		opened,
		autoScroll,
		lightbox
	]);
	(0, import_react.useEffect)(() => {
		if (lightbox === null) return;
		const handler = (e) => {
			if (e.key === "Escape") closeLightbox();
			if (typeof lightbox === "number") {
				if (e.key === "ArrowRight") setLightbox((lightbox + 1) % photos.length);
				if (e.key === "ArrowLeft") setLightbox((lightbox + photos.length - 1) % photos.length);
			}
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [lightbox]);
	async function toggleMusic() {
		if (!audio.current) return;
		if (musicPlaying) {
			audio.current.pause();
			setMusicPlaying(false);
		} else try {
			await audio.current.play();
			setMusicPlaying(true);
		} catch {
			setMusicPlaying(false);
		}
	}
	function openVideo() {
		restoreMusic.current = musicPlaying;
		audio.current?.pause();
		setMusicPlaying(false);
		setLightbox("video");
	}
	function closeLightbox() {
		setLightbox(null);
		if (restoreMusic.current) {
			audio.current?.play().then(() => setMusicPlaying(true)).catch(() => setMusicPlaying(false));
			restoreMusic.current = false;
		}
	}
	function goTo(id) {
		document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
			ref: audio,
			src: music_mp3_asset_default.url,
			loop: true,
			preload: "none"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Entrance, {
			onOpen: () => {
				setOpening(true);
				toggleMusic();
			},
			onComplete: () => {
				setOpened(true);
				window.scrollTo(0, 0);
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: opening ? "invitation-opening" : "",
			inert: !opened,
			"aria-hidden": !opened,
			lang: language === "te" ? "te" : "en",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "site-header",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#couple",
							className: "monogram",
							"aria-label": "Akshay and Sandhya",
							children: "A♡S"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "site-nav",
							"aria-label": "Invitation sections",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#story",
									children: t.story
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#journey",
									children: t.journey
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#memories",
									children: t.memories
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#rsvp",
									children: t.rsvp
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "language-switch",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "weddingGhost",
									"aria-pressed": language === "te",
									onClick: () => setLanguage("te"),
									children: "తెలుగు"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "/"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "weddingGhost",
									"aria-pressed": language === "en",
									onClick: () => setLanguage("en"),
									children: "English"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "hero",
					id: "couple",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "hero-backdrop",
						src: clientPhotos.romantic.url,
						alt: "Akshay and Sandhya sharing a close, joyful embrace",
						fetchPriority: "high"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow",
								children: t.together
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
								"AKSHAY ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "♡" }),
								" SANDHYA"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hero-invitation",
								children: t.line
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-date",
								children: [
									"4 DECEMBER 2026 ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
									" ",
									wedding.time
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hero-venue",
								children: "Narayanapet"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ceremony",
								onClick: () => goTo("journey"),
								children: [t.view, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					className: "blessing-section",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "blessing",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sanskrit",
									children: [
										"Om Shri Ganeshaya Namaha",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Shubhamasthu Avighnamasthu"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "eyebrow",
									children: language === "te" ? "శుభలేఖ" : "Wedding Invitation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t.blessing }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "message",
									children: t.message
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "family-layout",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "family-person groom-family",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "eyebrow",
											children: language === "te" ? "వరుడు" : "The Groom"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: wedding.groomFormal }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "te" ? "ఏకైక కుమారుడు" : "Only son of" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: wedding.groomParents })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "family-person bride-family",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "eyebrow",
											children: language === "te" ? "వధువు" : "The Bride"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: wedding.brideFormal }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "te" ? "ఏకైక కుమార్తె" : "Only daughter of" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: wedding.brideParents }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "family-residence",
											children: wedding.brideResidence
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "family-blessings",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "blessing-group divine-blessings",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: language === "te" ? "దివ్య ఆశీస్సులతో" : "With divine blessings of"
								}), wedding.divineBlessings.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: name }, name))]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "blessing-group family-blessing",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: language === "te" ? "ఆశీస్సులతో" : "With blessings of"
								}), wedding.blessings.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: name }, name))]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					id: "story",
					className: "story-section",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						eyebrow: "Love · Tradition · Togetherness",
						title: t.story
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "client-story",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "emotional-photo",
							src: clientPhotos.silhouette.url,
							alt: "Akshay and Sandhya together in a black and white silhouette",
							loading: "lazy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "story-words",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: language === "te" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									"రెండు హృదయాలు.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"ఒక అందమైన ఆరంభం."
								] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									"Two hearts.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"One beautiful beginning."
								] }) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: language === "te" ? "ప్రేమ, సంప్రదాయం, అనుబంధాల వేడుక." : "A celebration of love, tradition and togetherness." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									className: "ring-moment",
									src: clientPhotos.rings.url,
									alt: "Akshay and Sandhya holding their rings together",
									loading: "lazy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "ring-caption",
									children: language === "te" ? "కలకాలం కలిసే అడుగులు" : "A promise, held close."
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					id: "journey",
					className: "journey-section",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						eyebrow: "Let the celebrations begin",
						title: t.journey,
						subtitle: t.journeySub
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Journey, { language })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					id: "wedding",
					className: "main-wedding-section",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
							eyebrow: language === "te" ? "శుభ ముహూర్తం" : "The Wedding · Sumuhurtham",
							title: "AKSHAY ♡ SANDHYA"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "formal-wedding-photo",
							src: clientPhotos.formal.url,
							alt: "Akshay Yadav and Sandhya Rani wearing wedding garlands",
							loading: "lazy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "main-wedding-details",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: wedding.displayDate }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: wedding.time }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: wedding.lagnam }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									language === "te" ? "సభా లగ్నం" : "Sabha Lagnam",
									" · ",
									wedding.sabhaLagnam
								] })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					id: "memories",
					className: "gallery-section",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						eyebrow: "The moments we treasure",
						title: t.memories,
						subtitle: t.memoriesSub
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemoryCarousel, {
						photos,
						captions,
						onOpen: (index) => setLightbox(index)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "countdown-section",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "eyebrow",
							children: ["4 December 2026 · ", wedding.time]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t.countdown }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, { language }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "countdown-caption",
							children: t.countdownSub
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					id: "venue",
					className: "venue-section",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
							eyebrow: "Narayanapet",
							title: t.venue,
							subtitle: t.venueSub
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "venue-layout",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "venue-picture",
								src: clientPhotos.venue.url,
								alt: "Client-provided exterior photograph of Sri Garden Function Hall",
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "venue-info",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: wedding.venue }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: wedding.address }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "venue-day",
										children: [
											wedding.displayDate,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Sumuhurtham · ",
											wedding.time,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											wedding.lagnam,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Sabha Lagnam · ",
											wedding.sabhaLagnam
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "wedding",
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: wedding.directions,
											target: "_blank",
											rel: "noopener noreferrer",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {}),
												t.directions,
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})
											]
										})
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							className: "venue-map",
							title: "Map search for Sri Garden Function Hall, Narayanapet",
							src: `https://maps.google.com/maps?q=${encodeURIComponent(`${wedding.venue} ${wedding.address}`)}&z=15&output=embed`,
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					className: "video-section",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
							eyebrow: "A celebration in motion",
							title: t.film,
							subtitle: t.filmSub
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "memory-film",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: clientPhotos.landscape.url,
								alt: "Akshay and Sandhya in traditional wedding attire",
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "film-play",
								variant: "weddingGhost",
								"aria-label": "Play couple video",
								onClick: openVideo,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "film-caption",
							children: "A love to remember"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					id: "rsvp",
					className: "rsvp-section",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						eyebrow: "Your presence is our present",
						title: t.join,
						subtitle: t.joinSub
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RSVP, { language })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					className: "thankyou-section",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "thankyou-portrait",
							src: clientPhotos.intimate.url,
							alt: "Akshay and Sandhya",
							loading: "lazy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t.thanks }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.end }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "footer-signature",
							children: "With love, Akshay & Sandhya"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "site-footer",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Want an invitation like this? Contact us." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "MAGAF Technologies" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+919948560279",
							children: "+91 9948560279"
						})
					]
				})
			]
		}),
		opened && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "floating-tools left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: `floating-button ${musicPlaying ? "music-playing" : ""}`,
				variant: "weddingGhost",
				title: musicPlaying ? "Pause wedding music" : "Play wedding music",
				"aria-label": musicPlaying ? "Pause wedding music" : "Play wedding music",
				"aria-pressed": musicPlaying,
				onClick: () => void toggleMusic(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DappuIcon, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "floating-button",
				variant: "weddingGhost",
				title: autoScroll ? "Pause invitation stroll" : "Resume invitation stroll",
				"aria-label": autoScroll ? "Pause invitation stroll" : "Resume invitation stroll",
				"aria-pressed": autoScroll,
				onClick: () => setAutoScroll(!autoScroll),
				children: autoScroll ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "floating-tools right",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "floating-button",
				variant: "weddingGhost",
				title: "Share invitation on WhatsApp",
				"aria-label": "Share invitation on WhatsApp",
				onClick: () => window.open(`https://wa.me/?text=${encodeURIComponent(`Join us for Akshay & Sandhya’s wedding on 4 December 2026 at Sri Garden Function Hall A/C, Narayanapet! ${window.location.origin}`)}`, "_blank", "noopener,noreferrer"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {})
			})
		})] }),
		lightbox !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lightbox",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": lightbox === "video" ? "Couple video" : "Wedding photo gallery",
			onClick: closeLightbox,
			onTouchStart: (e) => {
				swipeStart.current = e.touches[0]?.clientX ?? 0;
			},
			onTouchEnd: (e) => {
				const end = e.changedTouches[0]?.clientX ?? swipeStart.current;
				if (typeof lightbox === "number" && Math.abs(end - swipeStart.current) > 45) setLightbox((lightbox + (end < swipeStart.current ? 1 : photos.length - 1)) % photos.length);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "floating-button lightbox-close",
				variant: "weddingGhost",
				"aria-label": "Close gallery",
				autoFocus: true,
				onClick: closeLightbox,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
			}), lightbox === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				className: "lightbox-video",
				src: couple_memory_mp4_asset_default.url,
				controls: true,
				autoPlay: true,
				playsInline: true,
				onClick: (e) => e.stopPropagation()
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "floating-button lightbox-prev",
					variant: "weddingGhost",
					"aria-label": "Previous photo",
					onClick: (e) => {
						e.stopPropagation();
						setLightbox((lightbox + photos.length - 1) % photos.length);
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					className: "lightbox-image",
					src: photos[lightbox]?.url,
					alt: captions[lightbox],
					onClick: (e) => e.stopPropagation()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "floating-button lightbox-next",
					variant: "weddingGhost",
					"aria-label": "Next photo",
					onClick: (e) => {
						e.stopPropagation();
						setLightbox((lightbox + 1) % photos.length);
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "lightbox-caption",
					children: [
						captions[lightbox],
						" · ",
						lightbox + 1,
						" / ",
						photos.length
					]
				})
			] })]
		})
	] });
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Invitation, {});
}
//#endregion
export { Index as component };
