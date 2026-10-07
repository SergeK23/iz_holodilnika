"use strict";
const __mkIcon = (nodes, name) => { const C = ({ size = 24, strokeWidth = 2, className, ...rest }) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", className: ["lucide", className].filter(Boolean).join(" "), "aria-hidden": true, ...rest }, nodes.map(([t, a], i) => React.createElement(t, { key: i, ...a }))); C.displayName = name; return C; };
const AlarmClock = __mkIcon([["circle", { "cx": "12", "cy": "13", "r": "8" }], ["path", { "d": "M12 9v4l2 2" }], ["path", { "d": "M5 3 2 6" }], ["path", { "d": "m22 6-3-3" }], ["path", { "d": "M6.38 18.7 4 21" }], ["path", { "d": "M17.64 18.67 20 21" }]], "AlarmClock");
const ArrowRightLeft = __mkIcon([["path", { "d": "m16 3 4 4-4 4" }], ["path", { "d": "M20 7H4" }], ["path", { "d": "m8 21-4-4 4-4" }], ["path", { "d": "M4 17h16" }]], "ArrowRightLeft");
const ArrowUp = __mkIcon([["path", { "d": "m5 12 7-7 7 7" }], ["path", { "d": "M12 19V5" }]], "ArrowUp");
const Ban = __mkIcon([["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "m4.9 4.9 14.2 14.2" }]], "Ban");
const Beef = __mkIcon([["circle", { "cx": "12.5", "cy": "8.5", "r": "2.5" }], ["path", { "d": "M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z" }], ["path", { "d": "m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" }]], "Beef");
const Book = __mkIcon([["path", { "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }]], "Book");
const BookOpenText = __mkIcon([["path", { "d": "M12 7v14" }], ["path", { "d": "M16 12h2" }], ["path", { "d": "M16 8h2" }], ["path", { "d": "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" }], ["path", { "d": "M6 12h2" }], ["path", { "d": "M6 8h2" }]], "BookOpenText");
const BookmarkCheck = __mkIcon([["path", { "d": "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" }], ["path", { "d": "m9 10 2 2 4-4" }]], "BookmarkCheck");
const BookmarkPlus = __mkIcon([["path", { "d": "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }], ["line", { "x1": "12", "x2": "12", "y1": "7", "y2": "13" }], ["line", { "x1": "15", "x2": "9", "y1": "10", "y2": "10" }]], "BookmarkPlus");
const CakeSlice = __mkIcon([["circle", { "cx": "9", "cy": "7", "r": "2" }], ["path", { "d": "M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6" }], ["path", { "d": "M16 13H3" }], ["path", { "d": "M16 17H3" }]], "CakeSlice");
const CalendarDays = __mkIcon([["path", { "d": "M8 2v4" }], ["path", { "d": "M16 2v4" }], ["rect", { "width": "18", "height": "18", "x": "3", "y": "4", "rx": "2" }], ["path", { "d": "M3 10h18" }], ["path", { "d": "M8 14h.01" }], ["path", { "d": "M12 14h.01" }], ["path", { "d": "M16 14h.01" }], ["path", { "d": "M8 18h.01" }], ["path", { "d": "M12 18h.01" }], ["path", { "d": "M16 18h.01" }]], "CalendarDays");
const Camera = __mkIcon([["path", { "d": "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" }], ["circle", { "cx": "12", "cy": "13", "r": "3" }]], "Camera");
const Carrot = __mkIcon([["path", { "d": "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46" }], ["path", { "d": "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z" }], ["path", { "d": "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z" }]], "Carrot");
const Check = __mkIcon([["path", { "d": "M20 6 9 17l-5-5" }]], "Check");
const ChefHat = __mkIcon([["path", { "d": "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" }], ["path", { "d": "M6 17h12" }]], "ChefHat");
const ChevronDown = __mkIcon([["path", { "d": "m6 9 6 6 6-6" }]], "ChevronDown");
const ChevronLeft = __mkIcon([["path", { "d": "m15 18-6-6 6-6" }]], "ChevronLeft");
const ChevronRight = __mkIcon([["path", { "d": "m9 18 6-6-6-6" }]], "ChevronRight");
const CircleAlert = __mkIcon([["circle", { "cx": "12", "cy": "12", "r": "10" }], ["line", { "x1": "12", "x2": "12", "y1": "8", "y2": "12" }], ["line", { "x1": "12", "x2": "12.01", "y1": "16", "y2": "16" }]], "CircleAlert");
const CircleCheck = __mkIcon([["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "m9 12 2 2 4-4" }]], "CircleCheck");
const CircleMinus = __mkIcon([["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M8 12h8" }]], "CircleMinus");
const CookingPot = __mkIcon([["path", { "d": "M2 12h20" }], ["path", { "d": "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" }], ["path", { "d": "m4 8 16-4" }], ["path", { "d": "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" }]], "CookingPot");
const Copy = __mkIcon([["rect", { "width": "14", "height": "14", "x": "8", "y": "8", "rx": "2", "ry": "2" }], ["path", { "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]], "Copy");
const Croissant = __mkIcon([["path", { "d": "m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z" }], ["path", { "d": "m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83" }], ["path", { "d": "M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4" }], ["path", { "d": "m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2" }], ["path", { "d": "M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5" }]], "Croissant");
const Download = __mkIcon([["path", { "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }], ["polyline", { "points": "7 10 12 15 17 10" }], ["line", { "x1": "12", "x2": "12", "y1": "15", "y2": "3" }]], "Download");
const Drumstick = __mkIcon([["path", { "d": "M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23" }], ["path", { "d": "m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59" }]], "Drumstick");
const ExternalLink = __mkIcon([["path", { "d": "M15 3h6v6" }], ["path", { "d": "M10 14 21 3" }], ["path", { "d": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }]], "ExternalLink");
const Eye = __mkIcon([["path", { "d": "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" }], ["circle", { "cx": "12", "cy": "12", "r": "3" }]], "Eye");
const EyeOff = __mkIcon([["path", { "d": "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" }], ["path", { "d": "M14.084 14.158a3 3 0 0 1-4.242-4.242" }], ["path", { "d": "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" }], ["path", { "d": "m2 2 20 20" }]], "EyeOff");
const Fish = __mkIcon([["path", { "d": "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" }], ["path", { "d": "M18 12v.5" }], ["path", { "d": "M16 17.93a9.77 9.77 0 0 1 0-11.86" }], ["path", { "d": "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" }], ["path", { "d": "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" }], ["path", { "d": "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" }]], "Fish");
const Flame = __mkIcon([["path", { "d": "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" }]], "Flame");
const HardDrive = __mkIcon([["line", { "x1": "22", "x2": "2", "y1": "12", "y2": "12" }], ["path", { "d": "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" }], ["line", { "x1": "6", "x2": "6.01", "y1": "16", "y2": "16" }], ["line", { "x1": "10", "x2": "10.01", "y1": "16", "y2": "16" }]], "HardDrive");
const Hourglass = __mkIcon([["path", { "d": "M5 22h14" }], ["path", { "d": "M5 2h14" }], ["path", { "d": "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" }], ["path", { "d": "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" }]], "Hourglass");
const KeyRound = __mkIcon([["path", { "d": "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" }], ["circle", { "cx": "16.5", "cy": "7.5", "r": ".5", "fill": "currentColor" }]], "KeyRound");
const Leaf = __mkIcon([["path", { "d": "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" }], ["path", { "d": "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" }]], "Leaf");
const Lightbulb = __mkIcon([["path", { "d": "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" }], ["path", { "d": "M9 18h6" }], ["path", { "d": "M10 22h4" }]], "Lightbulb");
const Minus = __mkIcon([["path", { "d": "M5 12h14" }]], "Minus");
const Pause = __mkIcon([["rect", { "x": "14", "y": "4", "width": "4", "height": "16", "rx": "1" }], ["rect", { "x": "6", "y": "4", "width": "4", "height": "16", "rx": "1" }]], "Pause");
const Play = __mkIcon([["polygon", { "points": "6 3 20 12 6 21 6 3" }]], "Play");
const Plus = __mkIcon([["path", { "d": "M5 12h14" }], ["path", { "d": "M12 5v14" }]], "Plus");
const RefreshCw = __mkIcon([["path", { "d": "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }], ["path", { "d": "M21 3v5h-5" }], ["path", { "d": "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }], ["path", { "d": "M8 16H3v5" }]], "RefreshCw");
const Refrigerator = __mkIcon([["path", { "d": "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z" }], ["path", { "d": "M5 10h14" }], ["path", { "d": "M15 7v6" }]], "Refrigerator");
const RotateCcw = __mkIcon([["path", { "d": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }], ["path", { "d": "M3 3v5h5" }]], "RotateCcw");
const Salad = __mkIcon([["path", { "d": "M7 21h10" }], ["path", { "d": "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }], ["path", { "d": "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" }], ["path", { "d": "m13 12 4-4" }], ["path", { "d": "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" }]], "Salad");
const Scale = __mkIcon([["path", { "d": "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }], ["path", { "d": "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }], ["path", { "d": "M7 21h10" }], ["path", { "d": "M12 3v18" }], ["path", { "d": "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" }]], "Scale");
const ScanLine = __mkIcon([["path", { "d": "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { "d": "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { "d": "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { "d": "M7 21H5a2 2 0 0 1-2-2v-2" }], ["path", { "d": "M7 12h10" }]], "ScanLine");
const Search = __mkIcon([["circle", { "cx": "11", "cy": "11", "r": "8" }], ["path", { "d": "m21 21-4.3-4.3" }]], "Search");
const Send = __mkIcon([["path", { "d": "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" }], ["path", { "d": "m21.854 2.147-10.94 10.939" }]], "Send");
const Settings = __mkIcon([["path", { "d": "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" }], ["circle", { "cx": "12", "cy": "12", "r": "3" }]], "Settings");
const Share2 = __mkIcon([["circle", { "cx": "18", "cy": "5", "r": "3" }], ["circle", { "cx": "6", "cy": "12", "r": "3" }], ["circle", { "cx": "18", "cy": "19", "r": "3" }], ["line", { "x1": "8.59", "x2": "15.42", "y1": "13.51", "y2": "17.49" }], ["line", { "x1": "15.41", "x2": "8.59", "y1": "6.51", "y2": "10.49" }]], "Share2");
const ShieldCheck = __mkIcon([["path", { "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { "d": "m9 12 2 2 4-4" }]], "ShieldCheck");
const ShoppingBasket = __mkIcon([["path", { "d": "m15 11-1 9" }], ["path", { "d": "m19 11-4-7" }], ["path", { "d": "M2 11h20" }], ["path", { "d": "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" }], ["path", { "d": "M4.5 15.5h15" }], ["path", { "d": "m5 11 4-7" }], ["path", { "d": "m9 11 1 9" }]], "ShoppingBasket");
const SlidersHorizontal = __mkIcon([["line", { "x1": "21", "x2": "14", "y1": "4", "y2": "4" }], ["line", { "x1": "10", "x2": "3", "y1": "4", "y2": "4" }], ["line", { "x1": "21", "x2": "12", "y1": "12", "y2": "12" }], ["line", { "x1": "8", "x2": "3", "y1": "12", "y2": "12" }], ["line", { "x1": "21", "x2": "16", "y1": "20", "y2": "20" }], ["line", { "x1": "12", "x2": "3", "y1": "20", "y2": "20" }], ["line", { "x1": "14", "x2": "14", "y1": "2", "y2": "6" }], ["line", { "x1": "8", "x2": "8", "y1": "10", "y2": "14" }], ["line", { "x1": "16", "x2": "16", "y1": "18", "y2": "22" }]], "SlidersHorizontal");
const Smartphone = __mkIcon([["rect", { "width": "14", "height": "20", "x": "5", "y": "2", "rx": "2", "ry": "2" }], ["path", { "d": "M12 18h.01" }]], "Smartphone");
const Soup = __mkIcon([["path", { "d": "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }], ["path", { "d": "M7 21h10" }], ["path", { "d": "M19.5 12 22 6" }], ["path", { "d": "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62" }], ["path", { "d": "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62" }], ["path", { "d": "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62" }]], "Soup");
const Sparkles = __mkIcon([["path", { "d": "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" }], ["path", { "d": "M20 3v4" }], ["path", { "d": "M22 5h-4" }], ["path", { "d": "M4 17v2" }], ["path", { "d": "M5 18H3" }]], "Sparkles");
const Star = __mkIcon([["path", { "d": "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" }]], "Star");
const Timer = __mkIcon([["line", { "x1": "10", "x2": "14", "y1": "2", "y2": "2" }], ["line", { "x1": "12", "x2": "15", "y1": "14", "y2": "11" }], ["circle", { "cx": "12", "cy": "14", "r": "8" }]], "Timer");
const Trash2 = __mkIcon([["path", { "d": "M3 6h18" }], ["path", { "d": "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }], ["path", { "d": "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }], ["line", { "x1": "10", "x2": "10", "y1": "11", "y2": "17" }], ["line", { "x1": "14", "x2": "14", "y1": "11", "y2": "17" }]], "Trash2");
const Type = __mkIcon([["polyline", { "points": "4 7 4 4 20 4 20 7" }], ["line", { "x1": "9", "x2": "15", "y1": "20", "y2": "20" }], ["line", { "x1": "12", "x2": "12", "y1": "4", "y2": "20" }]], "Type");
const Upload = __mkIcon([["path", { "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }], ["polyline", { "points": "17 8 12 3 7 8" }], ["line", { "x1": "12", "x2": "12", "y1": "3", "y2": "15" }]], "Upload");
const Users = __mkIcon([["path", { "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }], ["circle", { "cx": "9", "cy": "7", "r": "4" }], ["path", { "d": "M22 21v-2a4 4 0 0 0-3-3.87" }], ["path", { "d": "M16 3.13a4 4 0 0 1 0 7.75" }]], "Users");
const Utensils = __mkIcon([["path", { "d": "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" }], ["path", { "d": "M7 2v20" }], ["path", { "d": "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" }]], "Utensils");
const Wallet = __mkIcon([["path", { "d": "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" }], ["path", { "d": "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" }]], "Wallet");
const WandSparkles = __mkIcon([["path", { "d": "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" }], ["path", { "d": "m14 7 3 3" }], ["path", { "d": "M5 6v4" }], ["path", { "d": "M19 14v4" }], ["path", { "d": "M10 2v2" }], ["path", { "d": "M7 8H3" }], ["path", { "d": "M21 16h-4" }], ["path", { "d": "M11 3H9" }]], "WandSparkles");
const Wheat = __mkIcon([["path", { "d": "M2 22 16 8" }], ["path", { "d": "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }], ["path", { "d": "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }], ["path", { "d": "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }], ["path", { "d": "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" }], ["path", { "d": "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" }], ["path", { "d": "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" }], ["path", { "d": "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" }]], "Wheat");
const WifiOff = __mkIcon([["path", { "d": "M12 20h.01" }], ["path", { "d": "M8.5 16.429a5 5 0 0 1 7 0" }], ["path", { "d": "M5 12.859a10 10 0 0 1 5.17-2.69" }], ["path", { "d": "M19 12.859a10 10 0 0 0-2.007-1.523" }], ["path", { "d": "M2 8.82a15 15 0 0 1 4.177-2.643" }], ["path", { "d": "M22 8.82a15 15 0 0 0-11.288-3.764" }], ["path", { "d": "m2 2 20 20" }]], "WifiOff");
const X = __mkIcon([["path", { "d": "M18 6 6 18" }], ["path", { "d": "m6 6 12 12" }]], "X");
const { useState, useEffect, useMemo, useRef } = React;
const norm = (s) => String(s || '').toLowerCase().replace(/ё/g, 'е').trim();
const cap = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
const low = (s) => (s ? s.charAt(0).toLowerCase() + s.slice(1) : s);
const uid = (p = '') => p + Date.now().toString(36).slice(-4) + Math.random().toString(36).slice(2, 6);
const plural = (n, one, few, many) => {
    const a = Math.abs(n) % 100, b = a % 10;
    if (a > 10 && a < 20)
        return many;
    if (b > 1 && b < 5)
        return few;
    if (b === 1)
        return one;
    return many;
};
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const CATS = ['Холодильник', 'Овощи и фрукты', 'Крупы и макароны', 'Специи и соусы', 'Морозилка', 'Разное'];
const CAT_SHORT = { 'Холодильник': 'Холодильник', 'Овощи и фрукты': 'Овощи', 'Крупы и макароны': 'Крупы', 'Специи и соусы': 'Специи', 'Морозилка': 'Морозилка', 'Разное': 'Разное' };
const DEFAULT_STAPLES = ['Соль', 'Сахар', 'Перец чёрный', 'Масло растительное', 'Масло оливковое'];
const LEVELS = {
    easy: { n: 1, label: 'Просто', hint: 'Минимум шагов и посуды' },
    medium: { n: 2, label: 'Средне', hint: 'Пара техник, немного внимания' },
    hard: { n: 3, label: 'Сложно', hint: 'Для выходных: техника и терпение' },
};
const RECIPE_CATEGORIES = ['Завтрак', 'Суп', 'Салат', 'Паста', 'Рис', 'Мясо', 'Птица', 'Рыба', 'Овощи', 'Выпечка', 'Десерт', 'Азия', 'Духовка', 'Другое'];
const TYPE_CHIPS = ['Суп', 'Паста', 'В духовке', 'Азиатское', 'Завтрак', 'До 30 минут', 'Без мяса', 'Перекус'];
function guessCat(name) {
    const n = norm(name);
    if (/заморож|морожен|пельмен|вареник/.test(n))
        return 'Морозилка';
    if (/молок|кефир|сметан|сливк|сыр|творог|йогурт|ряженк|яйц|курин|куриц|мяс|говяд|свин|индейк|фарш|рыб|лосос|семг|кревет|мид|колбас|сосиск|ветчин|бекон|масло слив|сливочн/.test(n))
        return 'Холодильник';
    if (/соус|паприк|куркум|соев|кетчуп|майонез|горчиц|уксус|специ|тимьян|орегано|лавров|томатн|шафран|приправ|зира|корица|ванил|мед\b|мёд/.test(n))
        return 'Специи и соусы';
    if (/рис|греч|макарон|спагет|паст[аы]|мук|овсян|круп|хлеб|булгур|кускус|лапш|пшен|перлов|чечевиц|нут|фасоль сух/.test(n))
        return 'Крупы и макароны';
    if (/картоф|картош|лук|чеснок|морков|капуст|свекл|помидор|томат|огур|перец|кабач|баклаж|яблок|банан|лимон|апельсин|зелен|петруш|укроп|кинз|фасол|гриб|шампин|имбир|салат|шпинат|брокколи|авокадо|ягод|груш/.test(n))
        return 'Овощи и фрукты';
    return 'Разное';
}
function parseItems(text) {
    return String(text || '')
        .split(/[,;\n]+|\s+и\s+/)
        .map((s) => s.trim())
        .filter(Boolean)
        .map((s) => {
        const re = /(\d+(?:[.,]\d+)?)\s*(кг|гр|г|мл|л|шт|уп\S*|банк\S*|пачк\S*|бут\S*)\.?/i;
        const m = s.match(re);
        let qty = '';
        let name = s;
        if (m) {
            qty = `${m[1]} ${m[2].toLowerCase().replace(/^гр$/, 'г')}`;
            name = `${s.slice(0, m.index)} ${s.slice(m.index + m[0].length)}`;
        }
        name = name.replace(/\s+/g, ' ').trim().replace(/^(купил[аи]?|взял[аи]?|ещё|еще|и|есть)\s+/i, '').trim();
        return name ? { name: cap(name), qty, cat: guessCat(name) } : null;
    })
        .filter(Boolean);
}
function scaleAmt(a, f) {
    if (!a || !isFinite(f) || Math.abs(f - 1) < 0.01)
        return a;
    const m = String(a).match(/^(\d+(?:[.,]\d+)?|½|¼|¾)(\s*)(.*)$/);
    if (!m)
        return a;
    let v = m[1] === '½' ? 0.5 : m[1] === '¼' ? 0.25 : m[1] === '¾' ? 0.75 : parseFloat(m[1].replace(',', '.'));
    v *= f;
    const unit = m[3];
    let out;
    if (/^(г|мл)/.test(unit))
        out = v >= 50 ? Math.round(v / 10) * 10 : Math.max(1, Math.round(v));
    else if (/^(зубч|шт|яйц)/.test(unit))
        out = Math.max(1, Math.round(v));
    else
        out = Math.max(0.5, Math.round(v * 2) / 2);
    const fmt = out === 0.5 ? '½' : Number.isInteger(out) ? String(out) : `${Math.floor(out)}½`;
    return fmt + m[2] + unit;
}
const DAY = 86400000;
const addDaysISO = (n) => {
    const d = new Date();
    const x = new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
    return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}-${String(x.getDate()).padStart(2, '0')}`;
};
function daysLeft(iso) {
    if (!iso)
        return null;
    const [y, m, d] = iso.split('-').map(Number);
    const t = new Date();
    const a = Date.UTC(y, m - 1, d);
    const b = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
    return Math.round((a - b) / DAY);
}
function expLabel(iso) {
    const d = daysLeft(iso);
    if (d == null)
        return '';
    if (d < 0)
        return `просрочено ${-d} ${plural(-d, 'день', 'дня', 'дней')}`;
    if (d === 0)
        return 'истекает сегодня';
    if (d === 1)
        return 'истекает завтра';
    return `ещё ${d} ${plural(d, 'день', 'дня', 'дней')}`;
}
const STOP = new Set(['для', 'или', 'без', 'свежий', 'свежая', 'свежие', 'крупный', 'мелкий', 'репчатый', 'белокочанная', 'сушеный', 'молотый', 'молотая', 'обычный']);
function stems(name) {
    return norm(name).replace(/\(.*?\)/g, ' ').split(/[^a-zа-я0-9]+/).filter((w) => w.length > 2 && !STOP.has(w)).map((w) => w.slice(0, Math.min(5, Math.max(3, w.length - 2))));
}
function matchesPantry(name, pantry, staples) {
    const st = stems(name);
    if (!st.length)
        return null;
    const pool = [...pantry.map((p) => ({ id: p.id, n: norm(p.name) })), ...staples.map((s) => ({ id: null, n: norm(s), staple: true }))];
    const hit = pool.find((p) => st.some((s) => p.n.includes(s)));
    return hit || null;
}
function localCheck(recipe, pantry, staples) {
    const ings = (recipe && recipe.ingredients) || [];
    let missKey = 0, missMain = 0;
    const items = ings.map((i) => {
        if (i.status === 'skip')
            return { ...i, s: 'skip' };
        const hit = (i.pantry_id && pantry.some((p) => p.id === i.pantry_id)) || matchesPantry(i.name, pantry, staples);
        if (hit)
            return { ...i, s: 'have' };
        if (i.role === 'optional')
            return { ...i, s: 'skip' };
        if (i.role === 'key') {
            missKey++;
            return { ...i, s: 'crit' };
        }
        missMain++;
        return { ...i, s: 'buy' };
    });
    return { items, verdict: missKey ? 'bad' : missMain ? 'warn' : 'ok', missKey, missMain };
}
const LS_DATA = 'izh.data.v1';
const LS_KEYS = 'izh.keys.v1';
const LS_MODELS = 'izh.models.cache.v1';
const DEFAULT_PROFILE = { portions: 3, dislikes: [], equip: { oven: true, multi: false, air: false, micro: true }, weekday: 45, staples: DEFAULT_STAPLES };
const DEFAULT_DATA = () => ({
    v: 1,
    pantry: [],
    shop: [],
    book: [],
    profile: { ...DEFAULT_PROFILE, equip: { ...DEFAULT_PROFILE.equip }, staples: [...DEFAULT_STAPLES] },
    models: { text: null, photo: null },
    cook: { wish: '', strict: false, extras: '', showExtras: false, level: 'any', view: null },
    plan: null,
    spent: { total: 0, month: '', monthTotal: 0, requests: 0 },
    onboarded: false,
});
const lsGet = (k) => {
    try {
        const v = localStorage.getItem(k);
        return v ? JSON.parse(v) : null;
    }
    catch (e) {
        return null;
    }
};
const lsSet = (k, v) => {
    try {
        localStorage.setItem(k, JSON.stringify(v));
        return true;
    }
    catch (e) {
        return false;
    }
};
function loadData() {
    const d = lsGet(LS_DATA);
    const base = DEFAULT_DATA();
    if (!d || typeof d !== 'object')
        return base;
    return {
        ...base, ...d,
        profile: { ...base.profile, ...(d.profile || {}), equip: { ...base.profile.equip, ...((d.profile || {}).equip || {}) } },
        cook: { ...base.cook, ...(d.cook || {}) },
        models: { ...base.models, ...(d.models || {}) },
        spent: { ...base.spent, ...(d.spent || {}) },
        pantry: Array.isArray(d.pantry) ? d.pantry : [],
        shop: Array.isArray(d.shop) ? d.shop : [],
        book: Array.isArray(d.book) ? d.book : [],
    };
}
const saveData = (d) => lsSet(LS_DATA, d);
function loadKeys() {
    const k = lsGet(LS_KEYS);
    if (!k || !Array.isArray(k.list))
        return { list: [], active: null };
    return { list: k.list.filter((x) => x && x.key), active: k.active };
}
const saveKeys = (k) => lsSet(LS_KEYS, k);
const maskKey = (k) => (k && k.length > 12 ? `${k.slice(0, 8)}…${k.slice(-4)}` : '••••');
function makeBackup(data) {
    const { cook, ...rest } = data;
    return { app: 'iz-holodilnika', kind: 'backup', exportedAt: new Date().toISOString(), data: rest };
}
function readBackup(obj) {
    if (!obj || obj.app !== 'iz-holodilnika' || !obj.data)
        throw new Error('Это не файл копии «Из холодильника».');
    const d = obj.data;
    if (!Array.isArray(d.pantry) || !Array.isArray(d.book))
        throw new Error('Файл копии повреждён.');
    return d;
}
async function requestPersistence() {
    try {
        if (navigator.storage && navigator.storage.persist)
            return await navigator.storage.persist();
    }
    catch (e) { }
    return false;
}
const OR_BASE = 'https://openrouter.ai/api/v1';
const APP_TITLE = 'Iz Holodilnika';
class AIError extends Error {
    constructor(code, message, extra) { super(message); this.code = code; this.extra = extra; }
}
const ERR_TEXT = {
    no_key: 'Добавьте ключ OpenRouter в настройках, чтобы нейросеть заработала.',
    bad_key: 'Ключ не подходит: он удалён, отозван или скопирован не полностью. Проверьте его в настройках.',
    no_credits: 'На ключе закончились деньги или исчерпан лимит. Пополните баланс или поднимите лимит ключа на OpenRouter.',
    rate: 'Слишком много запросов подряд. Подождите минуту и попробуйте снова.',
    offline: 'Нет интернета. Кладовка и рецепты работают, а нейросети нужна сеть.',
    network: 'Не удалось связаться с OpenRouter. Проверьте интернет и попробуйте ещё раз.',
    model: 'Выбранная модель сейчас недоступна. Выберите другую в настройках.',
    no_vision: 'Эта модель не понимает фото. Выберите в настройках модель для фото с поддержкой изображений.',
    parse: 'Нейросеть ответила в неожиданном формате. Попробуйте ещё раз или выберите другую модель.',
    timeout: 'Нейросеть отвечает слишком долго. Попробуйте ещё раз.',
    moderation: 'Запрос отклонён фильтром модели. Переформулируйте его.',
    server: 'OpenRouter временно не отвечает. Попробуйте через пару минут.',
    cancelled: 'Запрос отменён.',
};
function mapHttpError(status, body) {
    const msg = body && body.error && (body.error.message || body.error.code);
    if (status === 401)
        return new AIError('bad_key', ERR_TEXT.bad_key, msg);
    if (status === 402)
        return new AIError('no_credits', ERR_TEXT.no_credits, msg);
    if (status === 403)
        return new AIError('moderation', ERR_TEXT.moderation, msg);
    if (status === 404)
        return new AIError('model', ERR_TEXT.model, msg);
    if (status === 408)
        return new AIError('timeout', ERR_TEXT.timeout, msg);
    if (status === 429)
        return new AIError('rate', ERR_TEXT.rate, msg);
    if (status === 400 && msg && /image|vision|modalit/i.test(msg))
        return new AIError('no_vision', ERR_TEXT.no_vision, msg);
    if (status === 400)
        return new AIError('model', `Модель отклонила запрос: ${msg || 'неизвестная ошибка'}. Попробуйте другую модель.`, msg);
    return new AIError('server', ERR_TEXT.server, msg);
}
async function orFetch(path, { key, method = 'GET', body, signal, timeout = 90000 } = {}) {
    if (typeof navigator !== 'undefined' && navigator.onLine === false)
        throw new AIError('offline', ERR_TEXT.offline);
    const ctrl = new AbortController();
    let timedOut = false;
    const t = setTimeout(() => { timedOut = true; ctrl.abort(); }, timeout);
    const onAbort = () => ctrl.abort();
    if (signal) {
        if (signal.aborted)
            ctrl.abort();
        else
            signal.addEventListener('abort', onAbort, { once: true });
    }
    const headers = { 'Content-Type': 'application/json', 'X-Title': APP_TITLE };
    try {
        headers['HTTP-Referer'] = location.origin;
    }
    catch (e) { }
    if (key)
        headers.Authorization = `Bearer ${key}`;
    let res;
    try {
        res = await fetch(OR_BASE + path, { method, headers, body: body ? JSON.stringify(body) : undefined, signal: ctrl.signal });
    }
    catch (e) {
        if (timedOut)
            throw new AIError('timeout', ERR_TEXT.timeout);
        if (signal && signal.aborted)
            throw new AIError('cancelled', ERR_TEXT.cancelled);
        if (typeof navigator !== 'undefined' && navigator.onLine === false)
            throw new AIError('offline', ERR_TEXT.offline);
        throw new AIError('network', ERR_TEXT.network, String(e && e.message));
    }
    finally {
        clearTimeout(t);
        if (signal)
            signal.removeEventListener('abort', onAbort);
    }
    let data = null;
    try {
        data = await res.json();
    }
    catch (e) { }
    if (!res.ok)
        throw mapHttpError(res.status, data);
    if (data && data.error)
        throw mapHttpError(data.error.code || 500, data);
    return data;
}
async function checkKey(key) {
    const r = await orFetch('/key', { key, timeout: 20000 });
    const d = (r && r.data) || {};
    return {
        label: d.label || '',
        limit: d.limit == null ? null : Number(d.limit),
        remaining: d.limit_remaining == null ? null : Number(d.limit_remaining),
        usage: Number(d.usage || 0),
        usageMonthly: d.usage_monthly == null ? null : Number(d.usage_monthly),
        freeTier: !!d.is_free_tier,
        checkedAt: Date.now(),
    };
}
const hasImage = (m) => !!(m && m.architecture && Array.isArray(m.architecture.input_modalities) && m.architecture.input_modalities.includes('image'));
const priceIn = (m) => Number((m && m.pricing && m.pricing.prompt) || 0);
const priceOut = (m) => Number((m && m.pricing && m.pricing.completion) || 0);
const perM = (p) => p * 1e6;
const fmtUsd = (v) => (v == null || !isFinite(v) ? '—' : v === 0 ? '$0' : v < 0.01 ? `$${v.toFixed(4)}` : v < 1 ? `$${v.toFixed(3)}` : `$${v.toFixed(2)}`);
async function loadModels(force) {
    const cached = lsGet(LS_MODELS);
    if (!force && cached && Date.now() - cached.at < 12 * 3600 * 1000 && Array.isArray(cached.list) && cached.list.length)
        return cached.list;
    const r = await orFetch('/models', { timeout: 30000 });
    const list = ((r && r.data) || [])
        .filter((m) => m && m.id && !m.id.endsWith(':batch'))
        .map((m) => ({
        id: m.id, name: m.name || m.id, context: m.context_length || 0,
        architecture: { input_modalities: (m.architecture && m.architecture.input_modalities) || ['text'] },
        pricing: { prompt: (m.pricing && m.pricing.prompt) || '0', completion: (m.pricing && m.pricing.completion) || '0' },
        supported_parameters: m.supported_parameters || [],
    }));
    lsSet(LS_MODELS, { at: Date.now(), list });
    return list;
}
function recommendModels(list) {
    const usable = list.filter((m) => !m.id.startsWith('~') && !m.id.includes(':') && priceIn(m) > 0 && !/openrouter\/auto/.test(m.id));
    const vis = usable.filter(hasImage);
    const pool = vis.length ? vis : usable;
    const byCost = [...pool].sort((a, b) => priceIn(a) + priceOut(a) - (priceIn(b) + priceOut(b)));
    const pick = (res) => { for (const re of res) {
        const m = byCost.find((x) => re.test(x.id) && !/lite|nano|tiny/.test(x.id));
        if (m)
            return m;
    } return null; };
    const economy = pick([/google\/gemini.*flash/, /flash/, /mini/, /haiku/]) || byCost[Math.floor(byCost.length * 0.2)] || byCost[0] || null;
    const smart = pick([/anthropic\/claude-sonnet/, /google\/gemini.*pro/, /openai\/gpt-\d/]) || byCost[Math.floor(byCost.length * 0.7)] || economy;
    return { economy, smart };
}
function extractJSON(text) {
    if (text && typeof text === 'object')
        return text;
    let s = String(text || '').trim();
    s = s.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/i, '').trim();
    try {
        return JSON.parse(s);
    }
    catch (e) { }
    const a = s.indexOf('{'), b = s.lastIndexOf('}');
    if (a >= 0 && b > a) {
        const cut = s.slice(a, b + 1);
        try {
            return JSON.parse(cut);
        }
        catch (e) {
            try {
                return JSON.parse(cut.replace(/,\s*([}\]])/g, '$1'));
            }
            catch (e2) { }
        }
    }
    throw new AIError('parse', ERR_TEXT.parse);
}
function messageText(msg) {
    if (!msg)
        return '';
    if (typeof msg.content === 'string')
        return msg.content;
    if (Array.isArray(msg.content))
        return msg.content.map((p) => (typeof p === 'string' ? p : p.text || '')).join('');
    return '';
}
async function chatJSON({ key, model, modelInfo, system, user, images, signal, maxTokens = 5000 }) {
    if (!key)
        throw new AIError('no_key', ERR_TEXT.no_key);
    if (!model)
        throw new AIError('model', 'Выберите модель в настройках.');
    const content = images && images.length
        ? [{ type: 'text', text: user }, ...images.map((url) => ({ type: 'image_url', image_url: { url } }))]
        : user;
    const messages = [{ role: 'system', content: system }, { role: 'user', content }];
    const body = { model, messages, temperature: 0.4, max_tokens: maxTokens, usage: { include: true } };
    if (modelInfo && (modelInfo.supported_parameters || []).includes('response_format'))
        body.response_format = { type: 'json_object' };
    let cost = 0;
    const once = async (msgs) => {
        const r = await orFetch('/chat/completions', { key, method: 'POST', body: { ...body, messages: msgs }, signal });
        const ch = r && r.choices && r.choices[0];
        if (ch && ch.error)
            throw mapHttpError(ch.error.code || 500, { error: ch.error });
        const u = (r && r.usage) || {};
        if (typeof u.cost === 'number')
            cost += u.cost;
        else if (modelInfo)
            cost += (u.prompt_tokens || 0) * priceIn(modelInfo) + (u.completion_tokens || 0) * priceOut(modelInfo);
        return { text: messageText(ch && ch.message), finish: ch && ch.finish_reason };
    };
    const first = await once(messages);
    try {
        return { json: extractJSON(first.text), cost };
    }
    catch (e) {
        if (e.code !== 'parse')
            throw e;
        const retry = await once([...messages, { role: 'assistant', content: first.text || '(пусто)' }, { role: 'user', content: 'Это не корректный JSON. Верни ТОЛЬКО JSON-объект по схеме, без текста вокруг.' }]);
        return { json: extractJSON(retry.text), cost };
    }
}
const SYSTEM = `Ты кулинарный помощник семьи в приложении «Из холодильника». Помогаешь готовить из того, что есть дома.
Отвечай ТОЛЬКО JSON-объектом без markdown и пояснений. Все тексты на русском, коротко, по-человечески, без эмодзи.
Количества в метрических единицах: г, кг, мл, л, шт, зубчик, ст. л., ч. л., щепотка.
Никогда не используй продукты из списка «не едят». Учитывай доступную технику.`;
function contextBlock({ pantry, profile, extras }) {
    const eq = profile.equip || {};
    const eqNames = { oven: 'духовка', multi: 'мультиварка', air: 'аэрогриль', micro: 'микроволновка' };
    const has = Object.keys(eqNames).filter((k) => eq[k]).map((k) => eqNames[k]);
    const no = Object.keys(eqNames).filter((k) => !eq[k]).map((k) => eqNames[k]);
    const lines = pantry.map((p) => {
        const d = daysLeft(p.exp);
        const exp = d == null ? '' : d < 0 ? ' | срок вышел' : ` | срок: ${d === 0 ? 'сегодня' : `${d} дн.`}`;
        return `${p.id} | ${p.name}${p.qty ? ` | ${p.qty}` : ''}${exp}`;
    });
    return [
        'ПРОФИЛЬ СЕМЬИ',
        `- порций обычно: ${profile.portions}`,
        `- не едят / аллергии: ${profile.dislikes.length ? profile.dislikes.join(', ') : 'нет'}`,
        `- техника: ${has.join(', ') || 'только плита'}${no.length ? `; нет: ${no.join(', ')}` : ''}`,
        `- в будни на готовку: до ${profile.weekday} мин`,
        '',
        `ЕСТЬ ВСЕГДА (считай доступным, pantry_id = "staple"): ${(profile.staples || []).join(', ') || 'соль'}`,
        '',
        'КЛАДОВКА (id | продукт | количество | срок):',
        lines.length ? lines.join('\n') : '(пусто)',
        extras && extras.length ? `\nДОПОЛНИТЕЛЬНО ЕСТЬ ТОЛЬКО ДЛЯ ЭТОГО ЗАПРОСА (pantry_id = "extra"): ${extras.join(', ')}` : '',
    ].join('\n');
}
const RECIPE_SCHEMA = `{
  "name": "название блюда",
  "origin": "кухня или «Домашняя»",
  "category": "одно из: ${RECIPE_CATEGORIES.join(', ')}",
  "diet": null | "Вегетарианское" | "Веган" | "Морепродукты",
  "time_min": число, общее время,
  "level": "easy" | "medium" | "hard",
  "servings": число порций,
  "kbju": { "kcal": число, "p": граммы белка, "f": граммы жира, "c": граммы углеводов } — на ОДНУ порцию, примерно,
  "verdict": "ok" | "warn" | "bad",
  "verdict_title": "короткий вердикт, например «Получится, с заменами»",
  "verdict_text": "1–2 предложения: что заменили и что докупить",
  "honest_note": null | "если замен так много, что выходит другое блюдо, скажи честно, чем оно станет",
  "level_note": null | "если сложность скорректирована под пожелание: что упрощено или усложнено",
  "ingredients": [
    { "name": "продукт", "amount": "300 г", "role": "key" | "main" | "optional",
      "status": "have" | "sub" | "skip" | "buy" | "crit",
      "note": null | "для sub: чем заменяем и как это повлияет; для skip/buy: коротко почему",
      "pantry_id": null | "id из кладовки (для have/sub) | staple | extra" }
  ],
  "steps": [ { "title": "2–3 слова", "text": "что делать, конкретно и с учётом замен", "minutes": null | число минут ожидания или готовки } ],
  "alternatives": ["2–4 названия других блюд, которые хорошо выйдут из этих продуктов"]
}`;
const STATUS_RULES = `Статусы ингредиентов:
- have: продукт есть в кладовке, в «есть всегда» или в дополнительных (укажи pantry_id);
- sub: нужного нет, заменяем тем, что есть (в name пиши ОРИГИНАЛЬНЫЙ продукт, в note — замену и как она влияет; pantry_id — продукт-замена);
- skip: необязательный (role optional), можно обойтись без него;
- buy: нужно докупить, без этого будет заметно хуже;
- crit: без этого блюдо не получится (role key) и замены нет.
verdict: ok — всё есть (skip допустим); warn — есть sub или buy; bad — есть crit.
Количества рассчитай на нужное число порций. В шагах используй именно продукты и замены из списка ингредиентов.`;
function levelLine(level) {
    if (!level || level === 'any')
        return 'Сложность: любая.';
    const L = LEVELS[level];
    return `Желаемая сложность: «${L.label}» (${level}). Если блюдо по природе сложнее — упрости технику до этого уровня и опиши упрощение в level_note. Если проще — предложи 1–2 приёма шефа и опиши их в level_note. В поле level укажи итоговую сложность.`;
}
const modeLine = (strict) => (strict
    ? 'Режим «Как в оригинале»: не заменяй ключевые и основные ингредиенты — ставь им buy/crit. Замены допустимы только для мелочей (специи, зелень).'
    : 'Режим «Как получится»: выжми максимум из того, что есть. Предлагай честные замены (sub) с пояснением. Докупку (buy) — только когда без продукта будет заметно хуже.');
function promptRecipe(ctx, { wish, strict, level, portions }) {
    return `${contextBlock(ctx)}

ЗАДАЧА: пользователь хочет приготовить «${wish}». Рецепт на ${portions} ${plural(portions, 'порцию', 'порции', 'порций')}.
Если это не конкретное блюдо, а тип или пожелание (например «суп» или «что-нибудь быстрое»), выбери лучшее подходящее блюдо из того, что есть.
${modeLine(strict)}
${levelLine(level)}
${STATUS_RULES}

Верни JSON по схеме:
${RECIPE_SCHEMA}`;
}
function promptSuggest(ctx, { type, wish, strict, level, expiringFirst }) {
    const what = type ? `в категории «${type}»` : wish ? `по пожеланию «${wish}»` : 'на обед или ужин';
    return `${contextBlock(ctx)}

ЗАДАЧА: предложи 5 разных блюд ${what}, которые можно приготовить сейчас.
${expiringFirst ? 'ГЛАВНОЕ: блюда должны использовать продукты с коротким сроком.' : 'Приоритет: блюда, которые используют продукты с коротким сроком, и блюда без покупок.'}
Не больше одного блюда, для которого не хватает главного.
${modeLine(strict)}
${levelLine(level)}

Верни JSON:
{
  "suggestions": [
    { "name": "название", "origin": "кухня", "category": "одно из: ${RECIPE_CATEGORIES.join(', ')}",
      "diet": null | "Вегетарианское" | "Веган" | "Морепродукты",
      "time_min": число, "level": "easy" | "medium" | "hard", "kcal": ккал на порцию,
      "verdict": "ok" | "warn" | "bad",
      "summary": "коротко: что заменим, что докупить или «всё есть»",
      "uses_ids": ["id продуктов из кладовки, которые блюдо использует"] }
  ]
}`;
}
function promptAdapt(ctx, { recipe, instruction, portions, note }) {
    const clean = { ...recipe };
    delete clean.id;
    delete clean.savedAt;
    delete clean.rating;
    delete clean.note;
    return `${contextBlock(ctx)}

ИСХОДНЫЙ РЕЦЕПТ (JSON):
${JSON.stringify(clean)}
${note ? `\nЗАМЕТКА ПОЛЬЗОВАТЕЛЯ К РЕЦЕПТУ (учти её): ${note}` : ''}

ЗАДАЧА: ${instruction}
Сохрани суть блюда. Заново сверь ингредиенты с текущей кладовкой и обнови статусы, замены и вердикт. Рецепт на ${portions} ${plural(portions, 'порцию', 'порции', 'порций')}.
${STATUS_RULES}

Верни JSON по той же схеме:
${RECIPE_SCHEMA}`;
}
function promptPhoto() {
    return `На фото холодильник, полка с продуктами или чек из магазина. Определи продукты.
Для чека: приведи названия к понятному виду (не «МОЛ.ПАСТ.3,2% 930МЛ», а «Молоко 3,2%»), количество возьми из чека, непродуктовые позиции (пакеты, бытовая химия) пропусти.
Для фото холодильника: перечисли только то, что уверенно видно; количество оцени примерно или оставь пустым.
shelf_days — сколько дней продукт обычно хранится с сегодняшнего дня (для скоропортящихся: молочка, мясо, рыба, зелень, ягоды); для долгохранящихся — null.
category — одно из: ${CATS.join(', ')}.

Верни JSON:
{ "kind": "fridge" | "receipt" | "other",
  "items": [ { "name": "Молоко 3,2%", "qty": "930 мл", "category": "Холодильник", "shelf_days": 5 } ] }`;
}
function promptMenu(ctx) {
    return `${contextBlock(ctx)}

ЗАДАЧА: составь меню из 5 ужинов на будни (Пн–Пт) из того, что есть, с минимумом покупок.
Блюда разные по типу. Скоропортящееся — в начале недели. Укладывайся во время на готовку в будни.
Список покупок — только то, чего не хватает, объединённое по всем дням.

Верни JSON:
{ "days": [ { "day": "Пн", "name": "название", "time_min": число, "level": "easy" | "medium" | "hard", "kcal": число, "category": "одно из: ${RECIPE_CATEGORIES.join(', ')}" } ],
  "shopping": [ { "name": "продукт", "amount": "количество", "for": "название блюда" } ] }`;
}
const oneOf = (v, list, d) => (list.includes(v) ? v : d);
const num = (v, d = null) => { const n = Number(v); return isFinite(n) && n >= 0 ? Math.round(n) : d; };
const str = (v, d = '') => (v == null ? d : String(v).trim());
function normRecipe(r, pantry) {
    if (!r || typeof r !== 'object')
        throw new AIError('parse', ERR_TEXT.parse);
    if (r.recipe && typeof r.recipe === 'object')
        r = r.recipe;
    const ids = new Set(pantry.map((p) => p.id));
    const ingredients = (Array.isArray(r.ingredients) ? r.ingredients : []).map((i, k) => {
        const status = oneOf(i.status, ['have', 'sub', 'skip', 'buy', 'crit'], 'buy');
        const pid = str(i.pantry_id || '');
        return {
            id: `i${k}`,
            name: cap(str(i.name, 'Продукт')),
            amount: str(i.amount),
            role: oneOf(i.role, ['key', 'main', 'optional'], status === 'crit' ? 'key' : status === 'skip' ? 'optional' : 'main'),
            status,
            note: i.note ? str(i.note) : null,
            pantry_id: ids.has(pid) ? pid : pid === 'staple' || pid === 'extra' ? pid : null,
        };
    });
    if (!ingredients.length)
        throw new AIError('parse', ERR_TEXT.parse);
    const steps = (Array.isArray(r.steps) ? r.steps : []).map((s) => (typeof s === 'string'
        ? { title: '', text: s, minutes: null }
        : { title: str(s.title), text: str(s.text || s.description), minutes: num(s.minutes) || null })).filter((s) => s.text);
    const crit = ingredients.some((i) => i.status === 'crit');
    const warn = ingredients.some((i) => i.status === 'sub' || i.status === 'buy');
    const k = r.kbju || {};
    return {
        name: cap(str(r.name, 'Блюдо')),
        origin: str(r.origin, 'Домашняя'),
        category: oneOf(cap(str(r.category)), RECIPE_CATEGORIES, 'Другое'),
        diet: oneOf(r.diet, ['Вегетарианское', 'Веган', 'Морепродукты'], null),
        time_min: num(r.time_min, 30),
        level: oneOf(r.level, ['easy', 'medium', 'hard'], 'medium'),
        servings: clamp(num(r.servings, 2) || 2, 1, 20),
        kbju: { kcal: num(k.kcal, 0), p: num(k.p, 0), f: num(k.f, 0), c: num(k.c, 0) },
        verdict: crit ? 'bad' : warn ? 'warn' : 'ok',
        verdict_title: str(r.verdict_title),
        verdict_text: str(r.verdict_text),
        honest_note: r.honest_note ? str(r.honest_note) : null,
        level_note: r.level_note ? str(r.level_note) : null,
        ingredients,
        steps: steps.length ? steps : [{ title: 'Готовим', text: 'Нейросеть не прислала шаги. Попробуйте запросить рецепт ещё раз.', minutes: null }],
        alternatives: (Array.isArray(r.alternatives) ? r.alternatives : []).map((x) => str(x)).filter(Boolean).slice(0, 4),
    };
}
function normSuggestions(r, pantry) {
    const ids = new Set(pantry.map((p) => p.id));
    const list = (r && Array.isArray(r.suggestions) ? r.suggestions : Array.isArray(r) ? r : []).map((s) => ({
        name: cap(str(s.name, 'Блюдо')),
        origin: str(s.origin, ''),
        category: oneOf(cap(str(s.category)), RECIPE_CATEGORIES, 'Другое'),
        diet: oneOf(s.diet, ['Вегетарианское', 'Веган', 'Морепродукты'], null),
        time_min: num(s.time_min, 30),
        level: oneOf(s.level, ['easy', 'medium', 'hard'], 'medium'),
        kcal: num(s.kcal, 0),
        verdict: oneOf(s.verdict, ['ok', 'warn', 'bad'], 'warn'),
        summary: str(s.summary),
        uses_ids: (Array.isArray(s.uses_ids) ? s.uses_ids : []).filter((x) => ids.has(x)),
    })).filter((s) => s.name);
    if (!list.length)
        throw new AIError('parse', ERR_TEXT.parse);
    return list;
}
function normPhoto(r) {
    const items = (r && Array.isArray(r.items) ? r.items : []).map((i) => {
        const name = cap(str(i.name));
        const sd = num(i.shelf_days);
        return name ? { name, qty: str(i.qty), cat: CATS.includes(i.category) ? i.category : guessCat(name), exp: sd != null && sd > 0 && sd < 120 ? addDaysISO(sd) : null } : null;
    }).filter(Boolean);
    return { kind: oneOf(r && r.kind, ['fridge', 'receipt', 'other'], 'other'), items };
}
function normMenu(r) {
    const days = (r && Array.isArray(r.days) ? r.days : []).slice(0, 7).map((d, k) => ({
        day: str(d.day, ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'][k]),
        name: cap(str(d.name, 'Блюдо')),
        time_min: num(d.time_min, 30),
        level: oneOf(d.level, ['easy', 'medium', 'hard'], 'easy'),
        kcal: num(d.kcal, 0),
        category: oneOf(cap(str(d.category)), RECIPE_CATEGORIES, 'Другое'),
    }));
    if (!days.length)
        throw new AIError('parse', ERR_TEXT.parse);
    const shopping = (r && Array.isArray(r.shopping) ? r.shopping : []).map((s) => ({ name: cap(str(s.name)), amount: str(s.amount), for: str(s.for) })).filter((s) => s.name);
    return { days, shopping };
}
function shrinkImage(file, max = 1280, quality = 0.82) {
    return new Promise((resolve, reject) => {
        const fr = new FileReader();
        fr.onerror = () => reject(new Error('Не удалось прочитать фото.'));
        fr.onload = () => {
            const img = new Image();
            img.onerror = () => reject(new Error('Этот формат фото не поддерживается. Попробуйте JPEG или PNG.'));
            img.onload = () => {
                const s = Math.min(1, max / Math.max(img.width, img.height));
                const c = document.createElement('canvas');
                c.width = Math.round(img.width * s);
                c.height = Math.round(img.height * s);
                c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
                resolve(c.toDataURL('image/jpeg', quality));
            };
            img.src = fr.result;
        };
        fr.readAsDataURL(file);
    });
}
function makeAI(getCfg) {
    const cfg = () => {
        const c = getCfg();
        if (!c.key)
            throw new AIError('no_key', ERR_TEXT.no_key);
        return c;
    };
    return {
        async recipe(ctx, opts, signal) {
            const c = cfg();
            const r = await chatJSON({ key: c.key, model: c.text, modelInfo: c.textInfo, system: SYSTEM, user: promptRecipe(ctx, opts), signal });
            return { data: normRecipe(r.json, ctx.pantry), cost: r.cost };
        },
        async suggest(ctx, opts, signal) {
            const c = cfg();
            const r = await chatJSON({ key: c.key, model: c.text, modelInfo: c.textInfo, system: SYSTEM, user: promptSuggest(ctx, opts), signal, maxTokens: 2500 });
            return { data: normSuggestions(r.json, ctx.pantry), cost: r.cost };
        },
        async adapt(ctx, opts, signal) {
            const c = cfg();
            const r = await chatJSON({ key: c.key, model: c.text, modelInfo: c.textInfo, system: SYSTEM, user: promptAdapt(ctx, opts), signal });
            return { data: normRecipe(r.json, ctx.pantry), cost: r.cost };
        },
        async photo(dataUrl, signal) {
            const c = cfg();
            if (c.photoInfo && !hasImage(c.photoInfo))
                throw new AIError('no_vision', ERR_TEXT.no_vision);
            const r = await chatJSON({ key: c.key, model: c.photo || c.text, modelInfo: c.photoInfo, system: SYSTEM, user: promptPhoto(), images: [dataUrl], signal, maxTokens: 2500 });
            return { data: normPhoto(r.json), cost: r.cost };
        },
        async menu(ctx, signal) {
            const c = cfg();
            const r = await chatJSON({ key: c.key, model: c.text, modelInfo: c.textInfo, system: SYSTEM, user: promptMenu(ctx), signal, maxTokens: 2500 });
            return { data: normMenu(r.json), cost: r.cost };
        },
    };
}
async function shareText({ title, text, url }) {
    try {
        if (navigator.share) {
            await navigator.share({ title, text, url });
            return 'shared';
        }
    }
    catch (e) {
        if (e && e.name === 'AbortError')
            return 'cancelled';
    }
    const full = [text, url].filter(Boolean).join('\n');
    try {
        await navigator.clipboard.writeText(full);
        return 'copied';
    }
    catch (e) {
        return 'failed';
    }
}
async function saveFile(name, text) {
    const blob = new Blob([text], { type: 'application/json' });
    try {
        const file = new File([blob], name, { type: 'application/json' });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({ files: [file], title: name });
            return 'shared';
        }
    }
    catch (e) {
        if (e && e.name === 'AbortError')
            return 'cancelled';
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
    return 'downloaded';
}
const cx = (...a) => a.filter(Boolean).join(' ');
const T = {
    page: 'bg-[#FBF9F5]',
    fg: 'text-[#1E3A3A]',
    mute: 'text-[#5E6B68]',
    faint: 'text-[#8E968F]',
    hair: 'border-[#E8E4DC]',
    divide: 'divide-[#EEEAE2]',
    card: 'rounded-3xl border border-[#E8E4DC]/80 bg-white/95 shadow-[0_4px_20px_rgba(45,71,57,0.05)]',
    inset: 'bg-[#F2EFE9]/70',
    aText: 'text-[#2D4739]',
    aSoft: 'bg-[#E7EEE6]',
    aSolid: 'bg-[#2D4739] text-[#FBF9F5]',
    sea: 'text-[#1F5050]',
    seaSoft: 'bg-[#E3EDEC]',
    seaSolid: 'bg-[#1E3A3A] text-[#FBF9F5]',
    label: 'text-[11px] font-medium uppercase tracking-[0.12em] text-[#8E968F]',
    focus: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4739]/40',
    input: 'bg-transparent outline-none placeholder:text-[#9AA19B]',
};
const SW = 1.75;
function Button({ variant = 'primary', size = 'md', className, children, ...rest }) {
    const v = {
        primary: cx(T.aSolid, 'hover:bg-[#243B2F] shadow-[0_8px_24px_-12px_rgba(45,71,57,0.55)]'),
        contrast: 'bg-[#1E3A3A] text-[#FBF9F5] hover:bg-[#16302F]',
        ghost: cx('border', T.hair, T.fg, 'bg-white hover:bg-[#F7F4EE]'),
        soft: cx(T.aSoft, T.aText, 'hover:bg-[#DCE7DB]'),
    }[variant];
    const s = { sm: 'h-9 px-3 text-[13px]', md: 'h-11 px-4 text-[14px]', lg: 'h-12 px-5 text-[15px]' }[size];
    return (React.createElement("button", { type: "button", className: cx('inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40', T.focus, v, s, className), ...rest }, children));
}
function IconButton({ label, className, children, ...rest }) {
    return (React.createElement("button", { type: "button", "aria-label": label, title: label, className: cx('grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-200 active:scale-95', T.hair, T.fg, 'bg-white/90 hover:bg-white', T.focus, className), ...rest }, children));
}
function Switch({ checked, onChange, label, id }) {
    return (React.createElement("button", { id: id, type: "button", role: "switch", "aria-checked": checked, "aria-label": label, onClick: () => onChange(!checked), className: cx('relative h-[30px] w-[50px] shrink-0 rounded-full transition-all duration-200', checked ? 'bg-[#2D4739]' : 'bg-[#E8E4DC]', T.focus) },
        React.createElement("span", { className: cx('absolute left-[3px] top-[3px] h-6 w-6 rounded-full bg-white shadow-[0_2px_6px_rgba(30,58,58,0.22)] transition-transform duration-200 ease-out', checked && 'translate-x-5') })));
}
function Chip({ active, className, children, ...rest }) {
    return (React.createElement("button", { type: "button", "aria-pressed": !!active, className: cx('h-9 shrink-0 rounded-full px-3.5 text-[13px] font-medium transition-all duration-200 active:scale-95', T.focus, active ? 'bg-[#1E3A3A] text-[#FBF9F5]' : cx(T.inset, T.mute, 'hover:text-[#1E3A3A]'), className), ...rest }, children));
}
function Segmented({ value, onChange, options, label }) {
    const idx = Math.max(0, options.findIndex((o) => o.value === value));
    return (React.createElement("div", { role: "radiogroup", "aria-label": label, className: cx('relative grid rounded-xl p-1', T.inset), style: { gridTemplateColumns: `repeat(${options.length}, 1fr)` } },
        React.createElement("span", { className: "absolute bottom-1 left-1 top-1 rounded-lg bg-white shadow-[0_1px_4px_rgba(45,71,57,0.14)] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]", style: { width: `calc((100% - 8px) / ${options.length})`, transform: `translateX(${idx * 100}%)` } }),
        options.map((o) => (React.createElement("button", { key: o.value, type: "button", role: "radio", "aria-checked": value === o.value, onClick: () => onChange(o.value), className: cx('relative z-10 h-9 rounded-lg text-[13px] font-medium transition-all duration-200', T.focus, value === o.value ? T.fg : T.mute) }, o.label)))));
}
function Stepper({ value, onChange, min = 1, max = 12 }) {
    return (React.createElement("div", { className: cx('flex items-center gap-1 rounded-full p-1', T.inset) },
        React.createElement("button", { type: "button", "aria-label": "\u041C\u0435\u043D\u044C\u0448\u0435", onClick: () => onChange(Math.max(min, value - 1)), className: cx('grid h-8 w-8 place-items-center rounded-full transition-all duration-200 hover:bg-white active:scale-90', T.focus) },
            React.createElement(Minus, { size: 16, strokeWidth: SW })),
        React.createElement("span", { className: "w-6 text-center text-[15px] font-semibold tnum" }, value),
        React.createElement("button", { type: "button", "aria-label": "\u0411\u043E\u043B\u044C\u0448\u0435", onClick: () => onChange(Math.min(max, value + 1)), className: cx('grid h-8 w-8 place-items-center rounded-full transition-all duration-200 hover:bg-white active:scale-90', T.focus) },
            React.createElement(Plus, { size: 16, strokeWidth: SW }))));
}
function Stars({ value, onChange, size = 16 }) {
    return (React.createElement("div", { className: "flex items-center gap-0.5", role: onChange ? 'radiogroup' : 'img', "aria-label": `Оценка ${value} из 5` }, [1, 2, 3, 4, 5].map((n) => {
        const on = n <= value;
        const icon = React.createElement(Star, { size: size, strokeWidth: SW, fill: on ? 'currentColor' : 'none', className: on ? T.aText : 'text-[#DDD7CC]' });
        return onChange
            ? React.createElement("button", { key: n, type: "button", role: "radio", "aria-checked": n === value, "aria-label": `${n} из 5`, onClick: () => onChange(n), className: cx('rounded-md p-0.5 transition-all duration-200 hover:scale-110 active:scale-90', T.focus) }, icon)
            : React.createElement("span", { key: n }, icon);
    })));
}
function Disclosure({ title, count, Icon, accent, defaultOpen, children }) {
    const [open, setOpen] = useState(!!defaultOpen);
    return (React.createElement("div", null,
        React.createElement("button", { type: "button", "aria-expanded": open, onClick: () => setOpen((o) => !o), className: cx('group flex w-full items-center gap-3 py-3.5 text-left transition-all duration-200', T.focus) },
            React.createElement("span", { className: cx('grid h-8 w-8 shrink-0 place-items-center rounded-xl transition-all duration-200', accent === 'sea' ? cx(T.seaSoft, T.sea) : accent ? cx(T.aSoft, T.aText) : cx(T.inset, T.mute)) },
                React.createElement(Icon, { size: 16, strokeWidth: SW })),
            React.createElement("span", { className: cx('flex-1 text-[15px] font-medium', T.fg) }, title),
            React.createElement("span", { className: cx('text-[13px] tnum', T.faint) }, count),
            React.createElement(ChevronDown, { size: 18, strokeWidth: SW, className: cx(T.faint, 'transition-transform duration-300', open && 'rotate-180') })),
        React.createElement("div", { className: cx('grid transition-all duration-300 ease-out', open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'), "aria-hidden": !open },
            React.createElement("div", { className: "overflow-hidden" }, children))));
}
function Sheet({ open, onClose, title, children }) {
    useEffect(() => {
        if (!open)
            return;
        const h = (e) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', h);
        return () => window.removeEventListener('keydown', h);
    }, [open, onClose]);
    if (!open)
        return null;
    return (React.createElement("div", { className: "fixed inset-0 z-40", role: "dialog", "aria-modal": "true", "aria-label": title },
        React.createElement("div", { className: "anim-fade absolute inset-0 bg-[#1E3A3A]/30 backdrop-blur-[2px]", onClick: onClose }),
        React.createElement("div", { className: cx('anim-sheet no-scrollbar absolute inset-x-0 bottom-0 mx-auto max-h-[92%] w-full max-w-md overflow-y-auto overscroll-contain rounded-t-[32px] border-t bg-white px-5 pb-[calc(32px+env(safe-area-inset-bottom,0px))] pt-3 shadow-[0_-20px_60px_-20px_rgba(30,58,58,0.25)]', T.hair) },
            React.createElement("div", { className: "mx-auto mb-4 h-1 w-9 rounded-full bg-[#DAD4C8]" }),
            React.createElement("div", { className: "mb-5 flex items-start justify-between gap-3" },
                React.createElement("h2", { className: cx('text-[22px] font-semibold leading-tight tracking-tight', T.fg) }, title),
                React.createElement(IconButton, { label: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C", onClick: onClose, className: "h-9 w-9" },
                    React.createElement(X, { size: 16, strokeWidth: SW }))),
            children)));
}
const ST = {
    have: { label: 'Есть', Icon: Check, box: cx(T.aSoft, T.aText) },
    sub: { label: 'Замена', Icon: ArrowRightLeft, box: cx(T.seaSoft, T.sea) },
    skip: { label: 'Без', Icon: CircleMinus, box: cx(T.inset, T.faint) },
    buy: { label: 'Докупить', Icon: ShoppingBasket, box: T.seaSolid },
    crit: { label: 'Главное', Icon: Ban, box: T.seaSolid },
};
const METER_ORDER = ['have', 'sub', 'skip', 'buy', 'crit'];
function Meter({ a, className }) {
    const items = [...(a.items || [])].sort((x, y) => METER_ORDER.indexOf(x.s) - METER_ORDER.indexOf(y.s));
    return (React.createElement("div", { className: cx('flex gap-[3px]', className), "aria-hidden": "true" }, items.map((it, i) => (React.createElement("span", { key: i, style: { animationDelay: `${i * 25}ms` }, className: cx('meter-seg h-1.5 flex-1 rounded-full', it.s === 'have' ? 'bg-[#4F7A5E]'
            : it.s === 'sub' ? 'bg-[#2F6464]'
                : it.s === 'skip' ? 'bg-[#E8E4DC]'
                    : 'ring-1 ring-inset ring-[#CFC8BA]') })))));
}
function VerdictTag({ a }) {
    if (a.verdict === 'ok')
        return React.createElement("span", { className: cx('inline-flex h-7 shrink-0 items-center gap-1.5 rounded-full px-2.5 text-[12px] font-semibold', T.aSoft, T.aText) },
            React.createElement(CircleCheck, { size: 14, strokeWidth: SW }),
            "\u0412\u0441\u0451 \u0435\u0441\u0442\u044C");
    if (a.verdict === 'bad')
        return React.createElement("span", { className: cx('inline-flex h-7 shrink-0 items-center gap-1.5 rounded-full px-2.5 text-[12px] font-semibold', T.seaSolid) },
            React.createElement(Ban, { size: 14, strokeWidth: SW }),
            "\u041D\u0435\u0442 \u0433\u043B\u0430\u0432\u043D\u043E\u0433\u043E");
    const nb = a.buy ? a.buy.length : 0, ns = a.sub ? a.sub.length : 0;
    const label = nb ? `Докупить ${nb}` : ns ? `${ns} ${plural(ns, 'замена', 'замены', 'замен')}` : 'С заменами';
    return React.createElement("span", { className: cx('inline-flex h-7 shrink-0 items-center gap-1.5 rounded-full px-2.5 text-[12px] font-semibold', T.seaSoft, T.sea) },
        React.createElement(ArrowRightLeft, { size: 14, strokeWidth: SW }),
        label);
}
function Pill({ Icon, tone = 'neutral', className, children, title }) {
    const t = { neutral: cx('bg-white border', T.hair, T.mute), sage: cx(T.aSoft, T.aText), sea: cx(T.seaSoft, T.sea) }[tone];
    return (React.createElement("span", { title: title, className: cx('inline-flex h-7 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 text-[12px] font-medium tnum', t, className) },
        Icon && React.createElement(Icon, { size: 13, strokeWidth: SW }),
        children));
}
function LevelBars({ n, className }) {
    return (React.createElement("span", { className: cx('inline-flex items-end gap-[2px]', className), "aria-hidden": "true" }, [1, 2, 3].map((k) => React.createElement("span", { key: k, className: cx('w-[3px] rounded-full', k <= n ? 'bg-current' : 'bg-current opacity-25'), style: { height: 4 + k * 2.5 } }))));
}
function LevelPill({ level }) {
    const L = LEVELS[level];
    return (React.createElement("span", { title: `Сложность: ${L.label}`, className: cx('inline-flex h-7 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 text-[12px] font-medium', T.seaSoft, T.sea) },
        React.createElement(LevelBars, { n: L.n }),
        L.label));
}
const CAT_ICON = { 'Завтрак': Croissant, 'Суп': Soup, 'Салат': Salad, 'Паста': Wheat, 'Рис': Wheat, 'Мясо': Beef, 'Птица': Drumstick, 'Рыба': Fish, 'Овощи': Carrot, 'Выпечка': Croissant, 'Десерт': CakeSlice, 'Азия': Utensils, 'Духовка': Flame, 'Другое': Utensils };
function CategoryBadge({ category }) {
    const Icon = CAT_ICON[category] || Utensils;
    return React.createElement(Pill, { Icon: Icon, tone: "sage" }, category || 'Блюдо');
}
function DishPills({ r, portions, kcal }) {
    const k = kcal != null ? kcal : r.kbju ? r.kbju.kcal : 0;
    return (React.createElement("div", { className: "flex flex-wrap gap-1.5" },
        React.createElement(CategoryBadge, { category: r.category }),
        r.diet && React.createElement(Pill, { Icon: r.diet === 'Морепродукты' ? Fish : Leaf, tone: r.diet === 'Морепродукты' ? 'sea' : 'sage' }, r.diet === 'Вегетарианское' ? 'Вегетар.' : r.diet),
        React.createElement(Pill, { Icon: Timer, title: "\u0412\u0440\u0435\u043C\u044F \u043F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F" },
            r.time_min,
            " \u043C\u0438\u043D"),
        portions && React.createElement(Pill, { Icon: Users, title: "\u041F\u043E\u0440\u0446\u0438\u0439" }, portions),
        k > 0 && React.createElement(Pill, { Icon: Flame, title: "\u041A\u043A\u0430\u043B \u043D\u0430 \u043F\u043E\u0440\u0446\u0438\u044E" },
            k,
            " \u043A\u043A\u0430\u043B"),
        React.createElement(LevelPill, { level: r.level })));
}
function Macros({ kbju }) {
    const { kcal, p, f, c } = kbju || {};
    const total = (p || 0) * 4 + (f || 0) * 9 + (c || 0) * 4;
    if (!kcal && !total)
        return null;
    const parts = [['Белки', p || 0, 4, 'bg-[#2D4739]'], ['Жиры', f || 0, 9, 'bg-[#2F6464]'], ['Углеводы', c || 0, 4, 'bg-[#C9C2B5]']];
    return (React.createElement("div", null,
        React.createElement("div", { className: "flex items-baseline justify-between" },
            React.createElement("span", { className: cx('inline-flex items-center gap-1.5', T.label) },
                React.createElement(Scale, { size: 13, strokeWidth: SW }),
                "\u041A\u0411\u0416\u0423 \u043D\u0430 \u043F\u043E\u0440\u0446\u0438\u044E, \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E"),
            React.createElement("span", { className: cx('text-[13px] font-semibold tnum', T.fg) },
                kcal,
                " ",
                React.createElement("span", { className: cx('font-normal', T.faint) }, "\u043A\u043A\u0430\u043B"))),
        total > 0 && (React.createElement("div", { className: "mt-2.5 flex h-1.5 gap-[3px] overflow-hidden rounded-full", "aria-hidden": "true" }, parts.map(([l, g, m, bg]) => React.createElement("span", { key: l, className: cx('meter-seg h-full rounded-full', bg), style: { width: `${((g * m) / total) * 100}%` } })))),
        React.createElement("dl", { className: "mt-3 grid grid-cols-3 gap-2" }, parts.map(([l, g, m, bg]) => (React.createElement("div", { key: l, className: cx('rounded-2xl px-3 py-2.5', T.inset) },
            React.createElement("dt", { className: cx('flex items-center gap-1.5 text-[11px]', T.mute) },
                React.createElement("span", { className: cx('h-1.5 w-1.5 rounded-full', bg) }),
                l),
            React.createElement("dd", { className: cx('mt-0.5 text-[16px] font-semibold tnum', T.fg) },
                g,
                React.createElement("span", { className: cx('ml-0.5 text-[12px] font-normal', T.faint) }, "\u0433"))))))));
}
function IngredientRow({ it, factor }) {
    const st = ST[it.s || it.status];
    return (React.createElement("li", { className: "flex gap-3 py-3" },
        React.createElement("span", { className: cx('mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl', st.box) },
            React.createElement(st.Icon, { size: 15, strokeWidth: SW })),
        React.createElement("div", { className: "min-w-0 flex-1" },
            React.createElement("div", { className: "flex items-baseline justify-between gap-3" },
                React.createElement("span", { className: cx('min-w-0 text-[15px] font-medium', (it.s || it.status) === 'skip' ? cx(T.faint, 'line-through decoration-1') : T.fg) }, it.name),
                React.createElement("span", { className: cx('shrink-0 text-[13px] tnum', T.faint) }, scaleAmt(it.amount, factor))),
            it.note && (React.createElement("p", { className: cx('mt-0.5 text-[13px] leading-snug', T.mute) },
                (it.s || it.status) === 'sub' && React.createElement("span", { className: cx('font-semibold', T.sea) }, "\u2192 "),
                it.note)))));
}
function Island({ island, onUndo }) {
    const open = !!island;
    return (React.createElement("div", { className: "pointer-events-none fixed inset-x-0 top-[calc(env(safe-area-inset-top,0px)+8px)] z-[60] flex justify-center px-3", "aria-live": "polite" },
        React.createElement("div", { className: cx('pointer-events-auto flex items-center overflow-hidden rounded-full bg-[#1E3A3A] text-[#FBF9F5] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]', open ? 'h-12 w-full max-w-[380px] px-2 opacity-100 shadow-[0_12px_40px_rgba(30,58,58,0.35)]' : 'pointer-events-none h-[34px] w-[120px] opacity-0') }, island && (React.createElement("div", { key: island.k, className: "anim-island flex w-full items-center gap-2.5" },
            React.createElement("span", { className: cx('grid h-8 w-8 shrink-0 place-items-center rounded-full', island.loading ? 'bg-[#9FC3A8]/15 text-[#BFD8C4]' : 'bg-white/10 text-[#FBF9F5]') }, island.loading ? React.createElement("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-[#BFD8C4]/25 border-t-[#BFD8C4]" }) : React.createElement(island.Icon, { size: 16, strokeWidth: SW })),
            React.createElement("span", { className: "min-w-0 flex-1 truncate text-[13px] font-medium" }, island.text),
            island.undo && (React.createElement("button", { type: "button", onClick: onUndo, className: "mr-0.5 h-8 shrink-0 rounded-full bg-white/10 px-3 text-[12px] font-semibold text-[#BFD8C4] transition-all duration-200 hover:bg-white/15" }, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C")))))));
}
function LargeTitle({ eyebrow, title, right }) {
    return (React.createElement("div", { className: "flex items-end justify-between gap-3 pb-6 pt-3" },
        React.createElement("div", { className: "min-w-0" },
            React.createElement("div", { className: T.label }, eyebrow),
            React.createElement("h1", { className: cx('mt-1.5 text-[34px] font-semibold leading-none tracking-tight', T.fg) }, title)),
        React.createElement("div", { className: "flex shrink-0 gap-2" }, right)));
}
function analyzeRecipe(r, items) {
    const list = (items || r.ingredients || []).map((i) => ({ ...i, s: i.s || i.status }));
    const by = (s) => list.filter((i) => i.s === s);
    const a = { items: list, have: by('have'), sub: by('sub'), skip: by('skip'), buy: by('buy'), crit: by('crit') };
    a.verdict = a.crit.length ? 'bad' : a.buy.length || a.sub.length ? 'warn' : 'ok';
    return a;
}
const lowNames = (arr) => arr.map((i) => low(i.name)).join(', ');
function verdictCopy(r, a, strict) {
    if (r.verdict_title && !a.local)
        return { title: r.verdict_title, sub: r.verdict_text };
    if (a.verdict === 'bad')
        return { title: 'Не хватает главного', sub: `Без этого не получится: ${lowNames(a.crit)}.${a.buy.length ? ` Ещё докупить: ${lowNames(a.buy)}.` : ''}` };
    if (a.verdict === 'ok')
        return { title: 'Можно готовить', sub: a.skip.length ? `Всё главное есть. Обойдёмся без: ${lowNames(a.skip)}.` : 'Всё нужное есть дома.' };
    if (a.buy.length)
        return { title: strict ? 'Для оригинала нужно докупить' : `Получится, если докупить ${a.buy.length}`, sub: `${cap(lowNames(a.buy))}.` };
    return { title: 'Получится, с заменами', sub: a.sub.map((i) => low(i.name)).join(', ') };
}
function ThinkingCard({ stages, onCancel }) {
    const [i, setI] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setI((x) => Math.min(x + 1, stages.length - 1)), 1600);
        return () => clearInterval(t);
    }, []);
    return (React.createElement("div", { className: cx('anim-rise p-5', T.card), "aria-live": "polite" },
        React.createElement("ul", { className: "space-y-3" }, stages.map((s, k) => (React.createElement("li", { key: k, className: cx('flex items-center gap-3 text-[14px] transition-all duration-300', k <= i ? T.fg : T.faint) },
            React.createElement("span", { className: cx('grid h-6 w-6 shrink-0 place-items-center rounded-full transition-all duration-300', k < i ? T.aSolid : T.inset) }, k < i ? React.createElement(Check, { size: 13, strokeWidth: 2.25 }) : k === i ? React.createElement("span", { className: "h-3 w-3 animate-spin rounded-full border-[1.5px] border-[#2D4739]/25 border-t-[#2D4739]" }) : React.createElement("span", { className: "h-1 w-1 rounded-full bg-current" })),
            React.createElement("span", { className: "min-w-0" }, s))))),
        React.createElement("div", { className: "mt-5 space-y-2" },
            React.createElement("div", { className: "shimmer h-2.5 w-4/5 rounded-full" }),
            React.createElement("div", { className: "shimmer h-2.5 w-3/5 rounded-full" })),
        onCancel && React.createElement(Button, { variant: "ghost", size: "sm", className: "mt-5", onClick: onCancel },
            React.createElement(X, { size: 15, strokeWidth: SW }),
            "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")));
}
function ErrorCard({ error, onRetry, onSettings }) {
    const toSettings = ['no_key', 'bad_key', 'no_credits', 'model', 'no_vision'].includes(error.code);
    return (React.createElement("div", { className: cx('anim-rise p-5', T.card), role: "alert" },
        React.createElement("div", { className: "flex gap-3" },
            React.createElement("span", { className: cx('grid h-10 w-10 shrink-0 place-items-center rounded-2xl', T.seaSoft, T.sea) }, error.code === 'offline' ? React.createElement(WifiOff, { size: 19, strokeWidth: SW }) : error.code === 'no_key' || error.code === 'bad_key' ? React.createElement(KeyRound, { size: 19, strokeWidth: SW }) : React.createElement(CircleAlert, { size: 19, strokeWidth: SW })),
            React.createElement("div", { className: "min-w-0" },
                React.createElement("div", { className: cx('text-[16px] font-semibold tracking-tight', T.fg) }, error.code === 'no_key' ? 'Нужен ключ OpenRouter' : 'Не получилось'),
                React.createElement("p", { className: cx('mt-1 text-[14px] leading-relaxed', T.mute) }, error.message),
                error.extra && error.code !== 'no_key' && React.createElement("p", { className: cx('mt-1 break-words text-[12px]', T.faint) }, String(error.extra).slice(0, 160)))),
        React.createElement("div", { className: "mt-4 flex flex-wrap gap-2" },
            toSettings && React.createElement(Button, { variant: "contrast", size: "sm", onClick: onSettings },
                React.createElement(Settings, { size: 15, strokeWidth: SW }),
                "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"),
            onRetry && error.code !== 'no_key' && React.createElement(Button, { variant: "ghost", size: "sm", onClick: onRetry },
                React.createElement(RotateCcw, { size: 15, strokeWidth: SW }),
                "\u0415\u0449\u0451 \u0440\u0430\u0437"))));
}
function EmptyState({ Icon, title, text, children }) {
    return (React.createElement("div", { className: cx('anim-rise p-7 text-center', T.card) },
        React.createElement("span", { className: cx('mx-auto grid h-12 w-12 place-items-center rounded-2xl', T.aSoft, T.aText) },
            React.createElement(Icon, { size: 22, strokeWidth: SW })),
        React.createElement("div", { className: cx('mt-4 text-[17px] font-semibold tracking-tight', T.fg) }, title),
        React.createElement("p", { className: cx('mx-auto mt-1 max-w-[30ch] text-[14px] leading-relaxed', T.mute) }, text),
        children && React.createElement("div", { className: "mt-5 flex flex-wrap justify-center gap-2" }, children)));
}
const ADAPT_PRESETS = [
    ['Попроще', 'Сделай рецепт проще: меньше шагов и посуды, без сложных техник.'],
    ['Быстрее', 'Сделай рецепт быстрее, уложись примерно в 30 минут.'],
    ['Без духовки', 'Переделай рецепт так, чтобы не нужна была духовка.'],
    ['Подешевле', 'Замени дорогие продукты на доступные.'],
    ['Полегче', 'Сделай рецепт легче по калориям, сохранив вкус.'],
];
function RecipeView({ recipe, a, strict, portions, setPortions, saved, onBack, backLabel, onShop, onSave, onCook, onAlt, onAdapt, adapting, adapted, onUndoAdapt, inShop, localNote, extraActions }) {
    const v = verdictCopy(recipe, a, strict);
    const factor = portions / (recipe.servings || portions);
    const needBuy = [...a.crit, ...a.buy];
    const allInShop = needBuy.length > 0 && needBuy.every((i) => inShop(i.name));
    const [custom, setCustom] = useState('');
    const VIcon = a.verdict === 'ok' ? CircleCheck : a.verdict === 'bad' ? Ban : ArrowRightLeft;
    const groups = [
        ['crit', 'Не хватает главного', Ban, false, true],
        ['buy', strict ? 'Докупить для оригинала' : 'Докупить', ShoppingBasket, false, true],
        ['sub', 'Заменим тем, что есть', ArrowRightLeft, 'sea', true],
        ['skip', 'Обойдёмся без', CircleMinus, false, false],
        ['have', 'Есть дома', Check, 'sage', false],
    ];
    return (React.createElement("section", { className: "space-y-4" },
        onBack && (React.createElement("button", { type: "button", onClick: onBack, className: cx('-ml-1 inline-flex h-8 items-center gap-1 rounded-full pl-1 pr-3 text-[14px] font-medium transition-all duration-200 hover:bg-[#2D4739]/[0.06]', T.aText, T.focus) },
            React.createElement(ChevronLeft, { size: 18, strokeWidth: SW }),
            backLabel || 'Назад')),
        React.createElement("div", { className: "anim-rise" },
            React.createElement("div", { className: T.label }, recipe.origin),
            React.createElement("h2", { className: cx('mt-2 text-[30px] font-semibold leading-[1.08] tracking-tight', T.fg) }, recipe.name),
            React.createElement("div", { className: "mt-4" },
                React.createElement(DishPills, { r: recipe }))),
        recipe.level_note && (React.createElement("div", { className: cx('anim-rise flex gap-3 rounded-3xl p-5', T.seaSoft) },
            React.createElement("span", { className: cx('grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/70', T.sea) },
                React.createElement(ChefHat, { size: 18, strokeWidth: SW })),
            React.createElement("div", { className: "min-w-0" },
                React.createElement("div", { className: cx('text-[15px] font-semibold tracking-tight', T.fg) }, "\u041F\u043E\u0434 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u0443\u044E \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C"),
                React.createElement("p", { className: cx('mt-1 text-[14px] leading-relaxed', T.mute) }, recipe.level_note)))),
        React.createElement("div", { className: cx('anim-rise p-5', T.card), style: { animationDelay: '50ms' } },
            React.createElement("div", { className: "flex gap-4" },
                React.createElement("span", { className: cx('grid h-11 w-11 shrink-0 place-items-center rounded-2xl', a.verdict === 'ok' ? T.aSolid : a.verdict === 'bad' ? T.seaSolid : cx(T.seaSoft, T.sea)) },
                    React.createElement(VIcon, { size: 20, strokeWidth: SW })),
                React.createElement("div", { className: "min-w-0" },
                    React.createElement("div", { className: cx('text-[17px] font-semibold tracking-tight', T.fg) }, v.title),
                    v.sub && React.createElement("p", { className: cx('mt-1 text-[14px] leading-relaxed', T.mute) }, v.sub))),
            React.createElement("div", { className: "mt-5" },
                React.createElement("div", { className: "flex items-baseline justify-between" },
                    React.createElement("span", { className: T.label }, "\u041F\u043E\u043A\u0440\u044B\u0442\u0438\u0435 \u043A\u043B\u0430\u0434\u043E\u0432\u043A\u043E\u0439"),
                    React.createElement("span", { className: cx('text-[13px] font-medium tnum', T.fg) },
                        a.have.length,
                        React.createElement("span", { className: T.faint },
                            "/",
                            a.items.length))),
                React.createElement(Meter, { a: a, className: "mt-2.5" }),
                React.createElement("div", { className: cx('mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[12px]', T.mute) },
                    React.createElement("span", { className: "inline-flex items-center gap-1.5" },
                        React.createElement("span", { className: "h-1.5 w-3 rounded-full bg-[#4F7A5E]" }),
                        "\u0435\u0441\u0442\u044C"),
                    React.createElement("span", { className: "inline-flex items-center gap-1.5" },
                        React.createElement("span", { className: "h-1.5 w-3 rounded-full bg-[#2F6464]" }),
                        "\u0437\u0430\u043C\u0435\u043D\u0430"),
                    React.createElement("span", { className: "inline-flex items-center gap-1.5" },
                        React.createElement("span", { className: "h-1.5 w-3 rounded-full ring-1 ring-inset ring-[#CFC8BA]" }),
                        "\u043A\u0443\u043F\u0438\u0442\u044C")),
                localNote && React.createElement("p", { className: cx('mt-3 text-[12px] leading-snug', T.faint) }, localNote)),
            recipe.kbju && recipe.kbju.kcal > 0 && React.createElement("div", { className: cx('mt-5 border-t pt-5', T.hair) },
                React.createElement(Macros, { kbju: recipe.kbju }))),
        recipe.honest_note && !strict && (React.createElement("div", { className: cx('anim-rise flex gap-3 rounded-2xl p-4', T.inset) },
            React.createElement(Lightbulb, { size: 18, strokeWidth: SW, className: cx('mt-0.5 shrink-0', T.aText) }),
            React.createElement("p", { className: cx('text-[14px] leading-relaxed', T.mute) },
                React.createElement("span", { className: cx('font-semibold', T.fg) }, "\u0427\u0435\u0441\u0442\u043D\u043E:"),
                " ",
                recipe.honest_note))),
        saved && saved.note && (React.createElement("div", { className: cx('anim-rise flex gap-3 rounded-2xl p-4', T.inset) },
            React.createElement(BookmarkCheck, { size: 18, strokeWidth: SW, className: cx('mt-0.5 shrink-0', T.aText) }),
            React.createElement("div", { className: "min-w-0 text-[14px] leading-relaxed" },
                React.createElement("div", { className: cx('flex flex-wrap items-center gap-2 font-semibold', T.fg) },
                    "\u0412\u0430\u0448\u0430 \u0437\u0430\u043C\u0435\u0442\u043A\u0430 ",
                    React.createElement(Stars, { value: saved.rating || 0, size: 13 })),
                React.createElement("p", { className: T.mute },
                    "\u00AB",
                    saved.note,
                    "\u00BB")))),
        React.createElement("div", { className: cx('anim-rise px-5 py-1', T.card), style: { animationDelay: '100ms' } },
            React.createElement("div", { className: cx('flex items-center justify-between gap-3 border-b py-3', T.hair) },
                React.createElement("span", { className: cx('inline-flex items-center gap-2 text-[15px] font-medium', T.fg) },
                    React.createElement(Users, { size: 17, strokeWidth: SW, className: T.sea }),
                    "\u041F\u043E\u0440\u0446\u0438\u0439"),
                React.createElement(Stepper, { value: portions, onChange: setPortions })),
            React.createElement("div", { className: cx('divide-y', T.divide) }, groups.map(([s, title, Icon, accent, open]) => a[s].length > 0 && (React.createElement(Disclosure, { key: s + (strict ? 1 : 0) + recipe.name, title: title, count: a[s].length, Icon: Icon, accent: accent, defaultOpen: open },
                React.createElement("ul", { className: cx('divide-y pb-2', T.divide) }, a[s].map((it, k) => React.createElement(IngredientRow, { key: k, it: it, factor: factor })))))))),
        React.createElement("div", { className: "anim-rise space-y-2", style: { animationDelay: '140ms' } },
            React.createElement(Button, { size: "lg", className: "w-full", onClick: onCook, disabled: a.verdict === 'bad' },
                React.createElement(CookingPot, { size: 18, strokeWidth: SW }),
                a.verdict === 'bad' ? 'Сначала докупить главное' : 'Начать готовить'),
            React.createElement("div", { className: "grid grid-cols-2 gap-2" },
                React.createElement(Button, { variant: "ghost", onClick: () => onShop(needBuy), disabled: !needBuy.length || allInShop },
                    allInShop ? React.createElement(Check, { size: 17, strokeWidth: SW }) : React.createElement(ShoppingBasket, { size: 17, strokeWidth: SW }),
                    allInShop ? 'В покупках' : needBuy.length ? `В покупки · ${needBuy.length}` : 'Всё есть'),
                React.createElement(Button, { variant: "ghost", onClick: onSave, disabled: !onSave },
                    saved ? React.createElement(BookmarkCheck, { size: 17, strokeWidth: SW }) : React.createElement(BookmarkPlus, { size: 17, strokeWidth: SW }),
                    saved ? 'В книге' : 'В книгу')),
            extraActions),
        onAdapt && (React.createElement("div", { className: cx('anim-rise p-5', T.card), style: { animationDelay: '170ms' } },
            React.createElement("div", { className: "flex items-center justify-between gap-3" },
                React.createElement("span", { className: cx('inline-flex items-center gap-1.5', T.label) },
                    React.createElement(WandSparkles, { size: 13, strokeWidth: SW }),
                    "\u041F\u043E\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u044C"),
                adapted && React.createElement("button", { type: "button", onClick: onUndoAdapt, className: cx('text-[13px] font-medium underline decoration-dotted underline-offset-4', T.sea, T.focus) }, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0439")),
            React.createElement("div", { className: "mt-3 flex flex-wrap gap-2" }, ADAPT_PRESETS.map(([l, instr]) => React.createElement(Chip, { key: l, disabled: adapting, onClick: () => onAdapt(instr, l) }, l))),
            React.createElement("form", { className: cx('mt-3 flex h-11 items-center gap-2 rounded-xl pl-3.5 pr-1 transition-all duration-200 focus-within:ring-2 focus-within:ring-[#2D4739]/25', T.inset), onSubmit: (e) => { e.preventDefault(); if (custom.trim()) {
                    onAdapt(custom.trim(), custom.trim());
                    setCustom('');
                } } },
                React.createElement("label", { htmlFor: "adapt-custom", className: "sr-only" }, "\u0421\u0432\u043E\u0451 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u0435 \u043A \u0440\u0435\u0446\u0435\u043F\u0442\u0443"),
                React.createElement("input", { id: "adapt-custom", value: custom, onChange: (e) => setCustom(e.target.value), placeholder: "\u0421\u0432\u043E\u0451: \u0431\u0435\u0437 \u043B\u0443\u043A\u0430, \u0434\u043B\u044F \u0440\u0435\u0431\u0451\u043D\u043A\u0430\u2026", autoComplete: "off", className: cx('h-full min-w-0 flex-1 text-[14px]', T.input, T.fg) }),
                React.createElement("button", { type: "submit", "aria-label": "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C", disabled: !custom.trim() || adapting, className: cx('grid h-9 w-9 shrink-0 place-items-center rounded-lg transition-all duration-200 disabled:opacity-30', T.aSolid, T.focus) },
                    React.createElement(ArrowUp, { size: 16, strokeWidth: 2 }))),
            adapting && React.createElement("div", { className: cx('mt-3 flex items-center gap-2 text-[13px]', T.mute) },
                React.createElement("span", { className: "h-3.5 w-3.5 animate-spin rounded-full border-[1.5px] border-[#2D4739]/25 border-t-[#2D4739]" }),
                "\u041F\u0435\u0440\u0435\u0434\u0435\u043B\u044B\u0432\u0430\u044E \u0440\u0435\u0446\u0435\u043F\u0442: ",
                adapting))),
        React.createElement("div", { className: "anim-rise pt-4", style: { animationDelay: '200ms' } },
            React.createElement("h3", { className: cx('text-[20px] font-semibold tracking-tight', T.fg) }, "\u0420\u0435\u0446\u0435\u043F\u0442 \u043F\u043E\u0434 \u0432\u0430\u0448 \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A"),
            React.createElement("ol", { className: "mt-4" }, recipe.steps.map((st, i) => (React.createElement("li", { key: i, className: "relative flex gap-4 pb-5 last:pb-0" },
                i < recipe.steps.length - 1 && React.createElement("span", { className: "absolute bottom-0 left-[15px] top-9 w-px bg-[#E8E4DC]" }),
                React.createElement("span", { className: cx('relative grid h-8 w-8 shrink-0 place-items-center rounded-full border bg-white text-[13px] font-semibold tnum', T.hair, T.aText) }, i + 1),
                React.createElement("div", { className: "min-w-0 pt-1" },
                    React.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                        st.title && React.createElement("span", { className: cx('text-[15px] font-semibold', T.fg) }, st.title),
                        st.minutes && React.createElement("span", { className: cx('inline-flex h-6 items-center gap-1 rounded-full px-2 text-[12px] font-medium tnum', T.seaSoft, T.sea) },
                            React.createElement(Timer, { size: 12, strokeWidth: SW }),
                            st.minutes,
                            " \u043C\u0438\u043D")),
                    React.createElement("p", { className: cx('mt-1 text-[14px] leading-relaxed', T.mute) }, st.text))))))),
        onAlt && recipe.alternatives && recipe.alternatives.length > 0 && (React.createElement("div", { className: "anim-rise pt-4", style: { animationDelay: '230ms' } },
            React.createElement("h3", { className: cx('text-[20px] font-semibold tracking-tight', T.fg) }, "\u0415\u0449\u0451 \u0438\u0437 \u044D\u0442\u0438\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432"),
            React.createElement("div", { className: "mt-3 flex flex-wrap gap-2" }, recipe.alternatives.map((n) => (React.createElement("button", { key: n, type: "button", onClick: () => onAlt(n), className: cx('inline-flex h-10 items-center gap-1.5 rounded-full border bg-white px-4 text-[14px] font-medium transition-all duration-200 hover:border-[#2D4739]/40 active:scale-95', T.hair, T.fg, T.focus) },
                n,
                React.createElement(ChevronRight, { size: 15, strokeWidth: SW, className: T.faint })))))))));
}
function SuggestionCard({ s, pantry, saved, onOpen, delay }) {
    const exp = s.uses_ids.map((id) => pantry.find((p) => p.id === id)).filter((p) => p && daysLeft(p.exp) != null && daysLeft(p.exp) <= 2);
    const fake = { verdict: s.verdict, buy: [], sub: [] };
    return (React.createElement("button", { type: "button", onClick: onOpen, style: { animationDelay: `${delay}ms` }, className: cx('anim-rise group block w-full p-5 text-left transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.99]', T.card, 'hover:border-[#D9D3C7]', T.focus) },
        React.createElement("div", { className: "flex items-start justify-between gap-3" },
            React.createElement("div", { className: "min-w-0" },
                React.createElement("div", { className: cx('flex items-center gap-1.5', T.label) },
                    s.origin || 'Блюдо',
                    saved && React.createElement(React.Fragment, null,
                        React.createElement("span", null, "\u00B7"),
                        React.createElement(BookmarkCheck, { size: 12, strokeWidth: SW, className: T.aText }),
                        React.createElement("span", { className: T.aText }, "\u0432 \u043A\u043D\u0438\u0433\u0435"))),
                React.createElement("div", { className: cx('mt-1.5 text-[17px] font-semibold leading-snug tracking-tight', T.fg) }, s.name)),
            React.createElement(VerdictTag, { a: fake })),
        React.createElement("div", { className: "mt-3.5" },
            React.createElement(DishPills, { r: s, kcal: s.kcal })),
        React.createElement("div", { className: "mt-3 flex items-center justify-between gap-3" },
            React.createElement("p", { className: cx('min-w-0 text-[13px] leading-snug', T.mute) }, s.summary),
            React.createElement(ChevronRight, { size: 16, strokeWidth: SW, className: cx('shrink-0 transition-transform duration-200 group-hover:translate-x-0.5', T.faint) })),
        exp.length > 0 && React.createElement("div", { className: "mt-3" },
            React.createElement(Pill, { Icon: Hourglass, tone: "sage" },
                "\u0421\u043F\u0430\u0441\u0451\u0442: ",
                exp.map((p) => low(p.name)).join(', ')))));
}
function CookTab({ app }) {
    const { data, update, ai, run, profile, pantry, inShop, addToShop, saveRecipe, savedByName, startCooking, openSettings } = app;
    const cook = data.cook;
    const set = (patch) => update((d) => ({ ...d, cook: { ...d.cook, ...patch } }));
    const [busy, setBusy] = useState(null);
    const [adapting, setAdapting] = useState(null);
    const [portions, setPortions] = useState(profile.portions);
    const ctrl = useRef(null);
    const bodyRef = useRef(null);
    const mounted = useRef(false);
    const extras = useMemo(() => cook.extras.split(/[,;]+/).map((s) => s.trim()).filter(Boolean), [cook.extras]);
    const view = cook.view;
    useEffect(() => { if (view && view.kind === 'recipe')
        setPortions(view.recipe.servings || profile.portions); }, [view && view.kind === 'recipe' && view.recipe.name]);
    useEffect(() => () => ctrl.current && ctrl.current.abort(), []);
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            return;
        }
        const el = bodyRef.current;
        if (el && (busy || view)) {
            const top = el.getBoundingClientRect().top + window.scrollY - 12;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }, [busy && busy.label, view]);
    const ctx = () => ({ pantry, profile, extras });
    const go = async (kind, label, fn, stages) => {
        if (ctrl.current)
            ctrl.current.abort();
        const c = new AbortController();
        ctrl.current = c;
        setBusy({ stages, label });
        const prev = view;
        const res = await run(label, () => fn(c.signal), { quiet: true });
        if (ctrl.current !== c)
            return;
        ctrl.current = null;
        setBusy(null);
        if (res.error) {
            set({ view: { kind: 'error', error: { code: res.error.code, message: res.error.message, extra: res.error.extra }, retry: { kind, label }, prev } });
            return;
        }
        return res.data;
    };
    const askRecipe = async (wish, back) => {
        const w = String(wish || '').trim();
        if (!w)
            return;
        const data = await go('recipe', w, (signal) => ai.recipe(ctx(), { wish: w, strict: cook.strict, level: cook.level, portions: profile.portions }, signal), ['Смотрю кладовку', `Сверяю с рецептом «${w}»`, 'Подбираю замены', 'Пишу шаги под ваши продукты']);
        if (data)
            set({ view: { kind: 'recipe', recipe: data, original: null, query: w, back: back || null, strict: cook.strict } });
    };
    const askList = async (type, back) => {
        const wish = cook.wish.trim();
        const data = await go('list', type || wish || 'Что приготовить', (signal) => ai.suggest(ctx(), { type, wish: type ? '' : wish, strict: cook.strict, level: cook.level, expiringFirst: type === '__expiring' }, signal), ['Смотрю кладовку и сроки', type && type !== '__expiring' ? `Перебираю: ${low(type)}` : 'Перебираю блюда', 'Сверяю с профилем семьи']);
        if (data)
            set({ view: { kind: 'list', items: data, type: type === '__expiring' ? 'Спасём продукты' : type || null, wish: type ? '' : wish } });
    };
    useEffect(() => {
        if (cook.pending) {
            const p = cook.pending;
            set({ pending: null });
            if (p.kind === 'recipe')
                askRecipe(p.wish);
            else
                askList(p.type);
        }
    }, [cook.pending]);
    const adapt = async (instruction, label) => {
        if (!view || view.kind !== 'recipe')
            return;
        setAdapting(label);
        const res = await run(label, () => ai.adapt(ctx(), { recipe: view.recipe, instruction, portions }, undefined));
        setAdapting(null);
        if (res.error)
            return app.notify({ Icon: CircleAlert, text: res.error.message });
        set({ view: { ...view, recipe: res.data, original: view.original || view.recipe } });
    };
    const submit = (e) => {
        e && e.preventDefault();
        if (cook.wish.trim())
            askRecipe(cook.wish);
        else
            askList(null);
    };
    let body = null;
    if (busy)
        body = React.createElement(ThinkingCard, { key: busy.label, stages: busy.stages, onCancel: () => { const c = ctrl.current; ctrl.current = null; c && c.abort(); setBusy(null); } });
    else if (view && view.kind === 'error') {
        body = React.createElement(ErrorCard, { error: view.error, onSettings: openSettings, onRetry: () => (view.retry.kind === 'recipe' ? askRecipe(view.retry.label) : askList(view.retry.label === 'Что приготовить' ? null : view.retry.label)) });
    }
    else if (view && view.kind === 'recipe') {
        const r = view.recipe;
        const a = analyzeRecipe(r);
        const saved = savedByName(r.name);
        body = (React.createElement(RecipeView, { recipe: r, a: a, strict: view.strict, portions: portions, setPortions: setPortions, saved: saved, onBack: view.back ? () => set({ view: view.back }) : null, backLabel: view.back && view.back.kind === 'list' ? 'Все варианты' : 'Назад', onShop: (items) => addToShop(items.map((i) => ({ name: i.name, amt: scaleAmt(i.amount, portions / (r.servings || portions)) })), r.name), onSave: saved ? null : () => saveRecipe(r), onCook: () => startCooking(r, portions), onAlt: (n) => askRecipe(n, { ...view, back: view.back ? { ...view.back, back: null } : null }), onAdapt: adapt, adapting: adapting, adapted: !!view.original, onUndoAdapt: () => set({ view: { ...view, recipe: view.original, original: null } }), inShop: inShop }));
    }
    else if (view && view.kind === 'list') {
        body = (React.createElement("section", { className: "space-y-3" },
            React.createElement("div", { className: "anim-rise pb-1" },
                React.createElement("h2", { className: cx('text-[24px] font-semibold leading-tight tracking-tight', T.fg) }, view.type || (view.wish ? cap(view.wish) : 'Можно приготовить сейчас')),
                React.createElement("p", { className: cx('mt-1 text-[14px]', T.mute) }, "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0431\u043B\u044E\u0434\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0435\u0446\u0435\u043F\u0442 \u043F\u043E\u0434 \u0432\u0430\u0448\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B.")),
            view.items.map((s, i) => (React.createElement(SuggestionCard, { key: s.name + i, s: s, pantry: pantry, saved: !!savedByName(s.name), delay: i * 50, onOpen: () => askRecipe(s.name, view) })))));
    }
    else {
        body = (React.createElement(EmptyState, { Icon: ChefHat, title: pantry.length ? 'Что будем готовить?' : 'Начните с кладовки', text: pantry.length ? 'Впишите блюдо, например «паэлья», или нажмите «Что приготовить?», и я предложу варианты из того, что есть.' : 'Добавьте продукты текстом или сфотографируйте холодильник, тогда рецепты будут под то, что есть дома.' }, !pantry.length && React.createElement(Button, { variant: "contrast", onClick: () => app.go('pantry') },
            React.createElement(Refrigerator, { size: 16, strokeWidth: SW }),
            "\u0412 \u043A\u043B\u0430\u0434\u043E\u0432\u043A\u0443")));
    }
    return (React.createElement("div", { className: "space-y-5" },
        !app.hasKey && (React.createElement("button", { type: "button", onClick: openSettings, className: cx('anim-rise flex w-full items-center gap-3 rounded-2xl p-4 text-left transition-all duration-200 hover:brightness-[0.98]', T.seaSoft, T.focus) },
            React.createElement(KeyRound, { size: 18, strokeWidth: SW, className: cx('shrink-0', T.sea) }),
            React.createElement("span", { className: cx('min-w-0 flex-1 text-[14px] leading-snug', T.fg) },
                React.createElement("span", { className: "font-semibold" }, "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043A\u043B\u044E\u0447 OpenRouter,"),
                " \u0447\u0442\u043E\u0431\u044B \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u044C \u043F\u043E\u0434\u0431\u0438\u0440\u0430\u043B\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u044B."),
            React.createElement(ChevronRight, { size: 17, strokeWidth: SW, className: T.sea }))),
        React.createElement("form", { className: cx('anim-rise space-y-4 p-5', T.card), onSubmit: submit },
            React.createElement("div", { className: cx('flex h-14 items-center gap-3 rounded-2xl px-4 transition-all duration-200 focus-within:ring-2 focus-within:ring-[#2D4739]/25', T.inset) },
                React.createElement(ChefHat, { size: 19, strokeWidth: SW, className: cx('shrink-0', T.aText) }),
                React.createElement("label", { htmlFor: "wish", className: "sr-only" }, "\u0427\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C"),
                React.createElement("input", { id: "wish", value: cook.wish, onChange: (e) => set({ wish: e.target.value }), autoComplete: "off", enterKeyHint: "go", placeholder: "\u0425\u043E\u0447\u0443 \u043F\u0430\u044D\u043B\u044C\u044E, \u0431\u043E\u0440\u0449, \u0441\u0443\u043F\u2026", className: cx('h-full min-w-0 flex-1 text-[16px] font-medium', T.input, T.fg) }),
                cook.wish && React.createElement("button", { type: "button", "aria-label": "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C", onClick: () => set({ wish: '' }), className: cx('grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#C9C2B5] text-white transition-all duration-200 hover:bg-[#B3AB9C]', T.focus) },
                    React.createElement(X, { size: 13, strokeWidth: 2.25 }))),
            React.createElement("div", { className: "no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5" }, TYPE_CHIPS.map((t) => React.createElement(Chip, { key: t, disabled: !!busy, active: view && view.kind === 'list' && view.type === t, onClick: () => askList(t) }, t))),
            React.createElement("div", { className: cx('border-t pt-4', T.hair) },
                React.createElement("div", { className: "mb-2.5 flex items-baseline justify-between gap-3" },
                    React.createElement("span", { className: cx('text-[15px] font-medium', T.fg) }, "\u0421\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C"),
                    React.createElement("span", { className: cx('text-right text-[12px]', T.mute) }, cook.level === 'any' ? 'Покажу всё подходящее' : LEVELS[cook.level].hint)),
                React.createElement(Segmented, { label: "\u0421\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0440\u0435\u0446\u0435\u043F\u0442\u0430", value: cook.level, onChange: (v) => set({ level: v }), options: [{ value: 'any', label: 'Любая' }, ...Object.entries(LEVELS).map(([k, L]) => ({ value: k, label: React.createElement("span", { className: "inline-flex items-center gap-1.5" },
                                React.createElement(LevelBars, { n: L.n, className: cook.level === k ? T.sea : '' }),
                                L.label) }))] })),
            React.createElement("div", { className: cx('flex items-center gap-4 border-t pt-4', T.hair) },
                React.createElement("div", { className: "min-w-0 flex-1" },
                    React.createElement("label", { htmlFor: "strict", className: cx('block text-[15px] font-medium', T.fg) }, "\u041A\u0430\u043A \u0432 \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u0435"),
                    React.createElement("p", { className: cx('mt-0.5 text-[13px] leading-snug', T.mute) }, cook.strict ? 'Строже к заменам, подскажу, что докупить' : 'Выжму максимум из того, что есть')),
                React.createElement(Switch, { id: "strict", checked: cook.strict, onChange: (v) => set({ strict: v }), label: "\u041A\u0430\u043A \u0432 \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u0435" })),
            React.createElement("div", { className: cx('border-t pt-3', T.hair) },
                React.createElement("button", { type: "button", "aria-expanded": cook.showExtras, onClick: () => set({ showExtras: !cook.showExtras }), className: cx('flex w-full items-center gap-2 py-1 text-left text-[14px] font-medium transition-all duration-200 hover:text-[#1E3A3A]', T.mute, T.focus) },
                    React.createElement(Plus, { size: 16, strokeWidth: SW, className: cx('transition-transform duration-300', cook.showExtras && 'rotate-45') }),
                    "\u0415\u0441\u0442\u044C \u0435\u0449\u0451 \u0447\u0442\u043E-\u0442\u043E \u043D\u0435 \u0438\u0437 \u043A\u043B\u0430\u0434\u043E\u0432\u043A\u0438",
                    extras.length ? ` · ${extras.length}` : ''),
                React.createElement("div", { className: cx('grid transition-all duration-300 ease-out', cook.showExtras ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0') },
                    React.createElement("div", { className: "overflow-hidden" },
                        React.createElement("label", { htmlFor: "extras", className: cx('mt-2 block text-[12px]', T.faint) }, "\u0423\u0447\u0442\u0443 \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u044D\u0442\u043E\u043C \u0437\u0430\u043F\u0440\u043E\u0441\u0435"),
                        React.createElement("input", { id: "extras", value: cook.extras, onChange: (e) => set({ extras: e.target.value }), tabIndex: cook.showExtras ? 0 : -1, placeholder: "\u043A\u0440\u0435\u0432\u0435\u0442\u043A\u0438, \u0448\u0430\u0444\u0440\u0430\u043D", autoComplete: "off", className: cx('mt-1.5 h-11 w-full rounded-xl px-3.5 text-[15px] transition-all duration-200 focus:ring-2 focus:ring-[#2D4739]/25', T.inset, T.input, T.fg) })))),
            React.createElement(Button, { type: "submit", size: "lg", className: "w-full", disabled: !!busy },
                React.createElement(ChefHat, { size: 18, strokeWidth: SW }),
                cook.wish.trim() ? 'Подобрать рецепт' : 'Что приготовить?')),
        React.createElement("button", { type: "button", onClick: () => app.openSettings('profile'), className: cx('flex w-full items-center gap-3 rounded-2xl px-1 text-left text-[13px] transition-all duration-200 hover:text-[#1E3A3A]', T.mute, T.focus) },
            React.createElement(SlidersHorizontal, { size: 16, strokeWidth: SW, className: "shrink-0" }),
            React.createElement("span", { className: "min-w-0 flex-1 truncate" },
                profile.portions,
                " ",
                plural(profile.portions, 'порция', 'порции', 'порций'),
                profile.dislikes.length ? ` · без: ${profile.dislikes.join(', ')}` : '',
                " \u00B7 \u0431\u0443\u0434\u043D\u0438 \u0434\u043E ",
                profile.weekday,
                " \u043C\u0438\u043D"),
            React.createElement(ChevronRight, { size: 16, strokeWidth: SW, className: "shrink-0" })),
        React.createElement("div", { ref: bodyRef }, body)));
}
const EXP_PRESETS = [['Без срока', null], ['Сегодня', 0], ['Завтра', 1], ['3 дня', 3], ['Неделя', 7], ['Месяц', 30]];
function ItemSheet({ item, onSave, onDelete, onClose }) {
    const [f, setF] = useState(item);
    const upd = (p) => setF((x) => ({ ...x, ...p }));
    const dl = daysLeft(f.exp);
    return (React.createElement("form", { className: "space-y-5", onSubmit: (e) => { e.preventDefault(); if (f.name.trim()) {
            onSave({ ...f, name: cap(f.name.trim()) });
            onClose();
        } } },
        React.createElement("div", { className: "grid grid-cols-[1fr_120px] gap-2" },
            React.createElement("div", null,
                React.createElement("label", { htmlFor: "it-name", className: T.label }, "\u041F\u0440\u043E\u0434\u0443\u043A\u0442"),
                React.createElement("input", { id: "it-name", value: f.name, onChange: (e) => upd({ name: e.target.value }), className: cx('mt-2 h-12 w-full rounded-2xl px-4 text-[16px] font-medium focus:ring-2 focus:ring-[#2D4739]/25', T.inset, T.input, T.fg) })),
            React.createElement("div", null,
                React.createElement("label", { htmlFor: "it-qty", className: T.label }, "\u0421\u043A\u043E\u043B\u044C\u043A\u043E"),
                React.createElement("input", { id: "it-qty", value: f.qty || '', onChange: (e) => upd({ qty: e.target.value }), placeholder: "500 \u0433", className: cx('mt-2 h-12 w-full rounded-2xl px-4 text-[16px] focus:ring-2 focus:ring-[#2D4739]/25', T.inset, T.input, T.fg) }))),
        React.createElement("div", null,
            React.createElement("div", { className: T.label }, "\u0413\u0434\u0435 \u043B\u0435\u0436\u0438\u0442"),
            React.createElement("div", { className: "mt-2 flex flex-wrap gap-2" }, CATS.map((c) => React.createElement(Chip, { key: c, active: f.cat === c, onClick: () => upd({ cat: c }) }, CAT_SHORT[c])))),
        React.createElement("div", null,
            React.createElement("div", { className: "flex items-baseline justify-between" },
                React.createElement("span", { className: T.label }, "\u0421\u0440\u043E\u043A \u0433\u043E\u0434\u043D\u043E\u0441\u0442\u0438"),
                f.exp && React.createElement("span", { className: cx('text-[12px]', dl != null && dl <= 1 ? T.sea : T.mute) }, expLabel(f.exp))),
            React.createElement("div", { className: "mt-2 flex flex-wrap gap-2" }, EXP_PRESETS.map(([l, d]) => React.createElement(Chip, { key: l, active: d == null ? !f.exp : f.exp === addDaysISO(d), onClick: () => upd({ exp: d == null ? null : addDaysISO(d) }) }, l))),
            React.createElement("label", { htmlFor: "it-date", className: "sr-only" }, "\u0414\u0430\u0442\u0430"),
            React.createElement("input", { id: "it-date", type: "date", value: f.exp || '', onChange: (e) => upd({ exp: e.target.value || null }), className: cx('mt-3 h-11 w-full rounded-xl px-3.5 text-[15px]', T.inset, T.input, T.fg) })),
        React.createElement("div", { className: "space-y-2 pt-1" },
            React.createElement(Button, { type: "submit", size: "lg", className: "w-full" },
                React.createElement(Check, { size: 17, strokeWidth: SW }),
                "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"),
            onDelete && React.createElement(Button, { variant: "ghost", className: "w-full", onClick: () => { onDelete(); onClose(); } },
                React.createElement(Trash2, { size: 16, strokeWidth: SW }),
                "\u0423\u0431\u0440\u0430\u0442\u044C \u0438\u0437 \u043A\u043B\u0430\u0434\u043E\u0432\u043A\u0438"))));
}
function PhotoReview({ result, onAdd, onClose }) {
    const [sel, setSel] = useState(() => result.items.map(() => true));
    const n = sel.filter(Boolean).length;
    return (React.createElement("div", { className: "space-y-4" },
        React.createElement("p", { className: cx('text-[14px] leading-relaxed', T.mute) },
            result.kind === 'receipt' ? 'Разобрала чек.' : 'Вот что видно на фото.',
            " \u0421\u043D\u0438\u043C\u0438\u0442\u0435 \u043E\u0442\u043C\u0435\u0442\u043A\u0443 \u0441 \u043B\u0438\u0448\u043D\u0435\u0433\u043E, \u0441\u0440\u043E\u043A\u0438 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0442\u043E\u043C."),
        result.items.length === 0 && React.createElement("p", { className: cx('rounded-2xl p-4 text-[14px]', T.inset, T.mute) }, "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u043D\u0435 \u043D\u0430\u0448\u043B\u043E\u0441\u044C. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u044F\u0442\u044C \u0431\u043B\u0438\u0436\u0435 \u0438 \u043F\u0440\u0438 \u0445\u043E\u0440\u043E\u0448\u0435\u043C \u0441\u0432\u0435\u0442\u0435."),
        React.createElement("ul", { className: cx('divide-y', T.divide) }, result.items.map((it, k) => (React.createElement("li", { key: k },
            React.createElement("button", { type: "button", role: "checkbox", "aria-checked": sel[k], onClick: () => setSel((s) => s.map((v, j) => (j === k ? !v : v))), className: cx('flex w-full items-center gap-3 py-3 text-left', T.focus) },
                React.createElement("span", { className: cx('grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full transition-all duration-200', sel[k] ? T.aSolid : 'ring-[1.5px] ring-inset ring-[#CFC8BA]') }, sel[k] && React.createElement(Check, { size: 13, strokeWidth: 2.5 })),
                React.createElement("span", { className: "min-w-0 flex-1" },
                    React.createElement("span", { className: cx('block truncate text-[15px] font-medium', T.fg) }, it.name),
                    React.createElement("span", { className: cx('block text-[12px]', T.faint) },
                        CAT_SHORT[it.cat],
                        it.exp ? ` · ${expLabel(it.exp)}` : '')),
                it.qty && React.createElement("span", { className: cx('shrink-0 text-[13px] tnum', T.mute) }, it.qty)))))),
        React.createElement(Button, { size: "lg", className: "w-full", disabled: !n, onClick: () => { onAdd(result.items.filter((_, k) => sel[k])); onClose(); } },
            React.createElement(Plus, { size: 17, strokeWidth: SW }),
            "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u00B7 ",
            n)));
}
function PantryTab({ app }) {
    const { pantry, setPantry, ai, run, notify, openSheet } = app;
    const [text, setText] = useState('');
    const [scan, setScan] = useState(null);
    const [cat, setCat] = useState('all');
    const [fresh, setFresh] = useState([]);
    const flash = (ids) => { setFresh(ids); setTimeout(() => setFresh([]), 1700); };
    const addItems = (items) => {
        const now = Date.now();
        const made = items.map((i) => ({ id: uid('p'), name: i.name, qty: i.qty || '', cat: i.cat || guessCat(i.name), exp: i.exp || null, added: now }));
        setPantry((p) => {
            const rest = p.filter((x) => !made.some((m) => norm(m.name) === norm(x.name)));
            return [...made, ...rest];
        });
        flash(made.map((m) => m.id));
        return made;
    };
    const add = (e) => {
        e && e.preventDefault();
        const items = parseItems(text);
        if (!items.length)
            return;
        addItems(items);
        setText('');
        notify({ Icon: Check, text: `Добавлено: ${items.map((i) => low(i.name)).join(', ')}` });
    };
    const onFile = async (e) => {
        const f = e.target.files && e.target.files[0];
        e.target.value = '';
        if (!f)
            return;
        let src;
        try {
            src = await shrinkImage(f);
        }
        catch (err) {
            return notify({ Icon: CircleAlert, text: err.message });
        }
        setScan({ src });
        const res = await run('Распознаю фото', () => ai.photo(src));
        setScan(null);
        if (res.error) {
            if (['no_key', 'bad_key', 'no_credits', 'no_vision', 'model'].includes(res.error.code))
                app.openSettings();
            return notify({ Icon: CircleAlert, text: res.error.message, long: true });
        }
        openSheet({ title: res.data.kind === 'receipt' ? 'Продукты из чека' : 'Продукты с фото', render: (close) => React.createElement(PhotoReview, { result: res.data, onAdd: (items) => { addItems(items); notify({ Icon: ScanLine, text: `В кладовке: +${items.length}` }); }, onClose: close }) });
    };
    const editItem = (p) => openSheet({
        title: p.name,
        render: (close) => React.createElement(ItemSheet, { item: p, onClose: close, onSave: (np) => setPantry((list) => list.map((x) => (x.id === p.id ? np : x))), onDelete: () => app.removePantry(p) }),
    });
    const soon = pantry.filter((p) => { const d = daysLeft(p.exp); return d != null && d <= 2; }).sort((a, b) => daysLeft(a.exp) - daysLeft(b.exp));
    const cats = CATS.filter((c) => pantry.some((p) => p.cat === c));
    const shown = CATS.map((c) => [c, pantry.filter((p) => p.cat === c)]).filter(([c, l]) => l.length && (cat === 'all' || cat === c));
    const Row = ({ p }) => {
        const d = daysLeft(p.exp);
        return (React.createElement("li", { className: cx('group flex items-center gap-1', fresh.includes(p.id) && 'flash') },
            React.createElement("button", { type: "button", onClick: () => editItem(p), className: cx('flex min-w-0 flex-1 items-center gap-3 rounded-xl py-3 text-left', T.focus) },
                React.createElement("div", { className: "min-w-0 flex-1" },
                    React.createElement("div", { className: cx('truncate text-[15px] font-medium', T.fg) }, p.name),
                    d != null && d <= 3 && React.createElement("div", { className: cx('mt-0.5 text-[12px]', d <= 1 ? T.sea : T.faint) }, cap(expLabel(p.exp)))),
                p.qty && React.createElement("span", { className: cx('shrink-0 text-[13px] tnum', T.mute) }, p.qty)),
            React.createElement("button", { type: "button", onClick: () => app.removePantry(p), "aria-label": `Убрать: ${p.name}`, className: cx('grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-200 hover:bg-[#2D4739]/[0.06] hover:text-[#1E3A3A] active:scale-90', T.faint, T.focus) },
                React.createElement(X, { size: 16, strokeWidth: SW }))));
    };
    return (React.createElement("div", { className: "space-y-6" },
        React.createElement("div", { className: cx('anim-rise space-y-3 p-5', T.card) },
            React.createElement("form", { onSubmit: add, className: cx('flex h-14 items-center gap-2 rounded-2xl pl-4 pr-2 transition-all duration-200 focus-within:ring-2 focus-within:ring-[#2D4739]/25', T.inset) },
                React.createElement("label", { htmlFor: "pantry-add", className: "sr-only" }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B"),
                React.createElement("input", { id: "pantry-add", value: text, onChange: (e) => setText(e.target.value), autoComplete: "off", enterKeyHint: "done", placeholder: "\u043C\u043E\u043B\u043E\u043A\u043E 1 \u043B, 2 \u043A\u0433 \u043A\u0430\u0440\u0442\u043E\u0448\u043A\u0438", className: cx('h-full min-w-0 flex-1 text-[16px]', T.input, T.fg) }),
                React.createElement("button", { type: "submit", "aria-label": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C", disabled: !text.trim(), className: cx('grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-all duration-200 active:scale-90 disabled:opacity-30', T.aSolid, T.focus) },
                    React.createElement(Plus, { size: 18, strokeWidth: 2 }))),
            React.createElement("input", { id: "pantry-photo", type: "file", accept: "image/*", className: "sr-only", onChange: onFile, disabled: !!scan }),
            React.createElement("label", { htmlFor: "pantry-photo", className: cx('group flex cursor-pointer items-center gap-4 rounded-2xl p-3 transition-all duration-200 hover:bg-[#F7F4EE] active:scale-[0.99]', scan && 'pointer-events-none opacity-60') },
                React.createElement("span", { className: cx('grid h-11 w-11 shrink-0 place-items-center rounded-2xl', T.aSoft, T.aText) },
                    React.createElement(Camera, { size: 20, strokeWidth: SW })),
                React.createElement("span", { className: "min-w-0 flex-1" },
                    React.createElement("span", { className: cx('block text-[15px] font-medium', T.fg) }, "\u0424\u043E\u0442\u043E \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A\u0430 \u0438\u043B\u0438 \u0447\u0435\u043A\u0430"),
                    React.createElement("span", { className: cx('block text-[13px]', T.mute) }, "\u041D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u044C \u0441\u0430\u043C\u0430 \u0440\u0430\u0437\u0431\u0435\u0440\u0451\u0442 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0438 \u0441\u0440\u043E\u043A\u0438")),
                React.createElement(ChevronRight, { size: 18, strokeWidth: SW, className: cx('shrink-0 transition-transform duration-200 group-hover:translate-x-0.5', T.faint) })),
            scan && (React.createElement("div", { className: cx('anim-rise flex items-center gap-4 rounded-2xl p-3', T.inset) },
                React.createElement("div", { className: "scan relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[#E8E4DC]" },
                    React.createElement("img", { src: scan.src, alt: "", className: "h-full w-full object-cover" })),
                React.createElement("div", null,
                    React.createElement("div", { className: cx('text-[14px] font-medium', T.fg) }, "\u0420\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u044E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B\u2026"),
                    React.createElement("div", { className: cx('text-[13px]', T.mute) }, "\u041E\u0431\u044B\u0447\u043D\u043E 5\u201315 \u0441\u0435\u043A\u0443\u043D\u0434"))))),
        soon.length > 0 && (React.createElement("section", { className: cx('anim-rise p-5', T.card) },
            React.createElement("div", { className: "flex flex-wrap items-center gap-3" },
                React.createElement("span", { className: cx('grid h-9 w-9 place-items-center rounded-xl', T.seaSoft, T.sea) },
                    React.createElement(Hourglass, { size: 17, strokeWidth: SW })),
                React.createElement("h2", { className: cx('flex-1 text-[17px] font-semibold tracking-tight', T.fg) }, "\u0421\u043A\u043E\u0440\u043E \u0438\u0441\u043F\u043E\u0440\u0442\u0438\u0442\u0441\u044F"),
                React.createElement(Button, { variant: "soft", size: "sm", onClick: () => app.cookFromPantry() },
                    "\u0427\u0442\u043E \u043F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C",
                    React.createElement(ChevronRight, { size: 15, strokeWidth: SW }))),
            React.createElement("ul", { className: cx('mt-2 divide-y', T.divide) }, soon.map((p) => React.createElement(Row, { key: p.id, p: p }))))),
        pantry.length === 0 ? (React.createElement(EmptyState, { Icon: Refrigerator, title: "\u041A\u043B\u0430\u0434\u043E\u0432\u043A\u0430 \u043F\u0443\u0441\u0442\u0430", text: "\u0412\u043F\u0438\u0448\u0438\u0442\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E \u0438\u043B\u0438 \u0441\u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0440\u0443\u0439\u0442\u0435 \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A. \u0421\u043E\u043B\u044C, \u0441\u0430\u0445\u0430\u0440 \u0438 \u043C\u0430\u0441\u043B\u043E \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u044B \u043A\u0430\u043A \u00AB\u0435\u0441\u0442\u044C \u0432\u0441\u0435\u0433\u0434\u0430\u00BB." },
            React.createElement(Button, { variant: "ghost", onClick: () => { addItems(SAMPLE_PANTRY()); notify({ Icon: Check, text: 'Добавлены примерные продукты' }); } }, "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u0440\u043E\u043C"))) : (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5" },
                React.createElement(Chip, { active: cat === 'all', onClick: () => setCat('all') },
                    "\u0412\u0441\u0435 \u00B7 ",
                    pantry.length),
                cats.map((c) => React.createElement(Chip, { key: c, active: cat === c, onClick: () => setCat(c) }, CAT_SHORT[c]))),
            shown.map(([c, list]) => (React.createElement("section", { key: c, className: "anim-rise" },
                React.createElement("h2", { className: cx('mb-2 flex justify-between px-1', T.label) },
                    React.createElement("span", null, c),
                    React.createElement("span", { className: "tnum" }, list.length)),
                React.createElement("ul", { className: cx('divide-y pl-4 pr-2', T.divide, T.card) }, list.map((p) => React.createElement(Row, { key: p.id, p: p })))))))),
        React.createElement("section", null,
            React.createElement("div", { className: "mb-2 flex items-center justify-between px-1" },
                React.createElement("h2", { className: T.label }, "\u0415\u0441\u0442\u044C \u0432\u0441\u0435\u0433\u0434\u0430"),
                React.createElement("button", { type: "button", onClick: () => app.openSettings('profile'), className: cx('text-[12px] font-medium', T.aText, T.focus) }, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C")),
            React.createElement("div", { className: "flex flex-wrap gap-2" }, app.profile.staples.map((s) => React.createElement("span", { key: s, className: cx('rounded-full px-3 py-1.5 text-[13px]', T.inset, T.mute) }, s))))));
}
const SAMPLE_PANTRY = () => [
    { name: 'Куриные бёдра', qty: '800 г', cat: 'Холодильник', exp: addDaysISO(2) },
    { name: 'Яйца', qty: '8 шт', cat: 'Холодильник', exp: addDaysISO(14) },
    { name: 'Сметана 20%', qty: '300 г', cat: 'Холодильник', exp: addDaysISO(4) },
    { name: 'Сыр твёрдый', qty: '200 г', cat: 'Холодильник', exp: null },
    { name: 'Помидоры', qty: '4 шт', cat: 'Овощи и фрукты', exp: addDaysISO(1) },
    { name: 'Болгарский перец', qty: '2 шт', cat: 'Овощи и фрукты', exp: addDaysISO(5) },
    { name: 'Кабачок', qty: '1 шт', cat: 'Овощи и фрукты', exp: addDaysISO(3) },
    { name: 'Лук репчатый', qty: '5 шт', cat: 'Овощи и фрукты', exp: null },
    { name: 'Чеснок', qty: '1 головка', cat: 'Овощи и фрукты', exp: null },
    { name: 'Картофель', qty: '2 кг', cat: 'Овощи и фрукты', exp: null },
    { name: 'Рис круглый', qty: '1 кг', cat: 'Крупы и макароны', exp: null },
    { name: 'Спагетти', qty: '500 г', cat: 'Крупы и макароны', exp: null },
    { name: 'Куркума', qty: '', cat: 'Специи и соусы', exp: null },
    { name: 'Паприка копчёная', qty: '', cat: 'Специи и соусы', exp: null },
    { name: 'Томатная паста', qty: '1 банка', cat: 'Специи и соусы', exp: null },
];
function BookTab({ app }) {
    const { book, pantry, profile } = app;
    const [q, setQ] = useState('');
    const [f, setF] = useState('all');
    const rows = book.map((e) => ({ e, a: localCheck(e.recipe, pantry, profile.staples) }))
        .filter((r) => norm(r.e.recipe.name).includes(norm(q)))
        .filter((r) => (f === 'now' ? r.a.verdict !== 'bad' : f === 'top' ? (r.e.rating || 0) >= 5 : f === 'easy' ? r.e.recipe.level === 'easy' : true));
    if (!book.length) {
        return (React.createElement(EmptyState, { Icon: BookOpenText, title: "\u041F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u043E", text: "\u041A\u043E\u0433\u0434\u0430 \u0431\u043B\u044E\u0434\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0441\u044F, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u00AB\u0412 \u043A\u043D\u0438\u0433\u0443\u00BB. \u041D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u044C \u0431\u0443\u0434\u0435\u0442 \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0441\u044E\u0434\u0430." },
            React.createElement(Button, { variant: "contrast", onClick: () => app.go('cook') }, "\u041F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0440\u0435\u0446\u0435\u043F\u0442")));
    }
    return (React.createElement("div", { className: "space-y-5" },
        React.createElement("div", { className: cx('anim-rise flex h-12 items-center gap-3 rounded-2xl px-4 transition-all duration-200 focus-within:ring-2 focus-within:ring-[#2D4739]/25', T.inset) },
            React.createElement(Search, { size: 17, strokeWidth: SW, className: T.faint }),
            React.createElement("label", { htmlFor: "book-q", className: "sr-only" }, "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043A\u043D\u0438\u0433\u0435"),
            React.createElement("input", { id: "book-q", value: q, onChange: (e) => setQ(e.target.value), placeholder: "\u041D\u0430\u0439\u0442\u0438 \u0440\u0435\u0446\u0435\u043F\u0442", autoComplete: "off", className: cx('h-full min-w-0 flex-1 text-[15px]', T.input, T.fg) })),
        React.createElement("div", { className: "no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5" },
            React.createElement(Chip, { active: f === 'all', onClick: () => setF('all') }, "\u0412\u0441\u0435"),
            React.createElement(Chip, { active: f === 'now', onClick: () => setF('now') }, "\u041C\u043E\u0436\u043D\u043E \u0441\u0435\u0439\u0447\u0430\u0441"),
            React.createElement(Chip, { active: f === 'top', onClick: () => setF('top') }, "\u041B\u044E\u0431\u0438\u043C\u044B\u0435"),
            React.createElement(Chip, { active: f === 'easy', onClick: () => setF('easy') }, "\u041F\u0440\u043E\u0441\u0442\u043E")),
        React.createElement("ul", { className: "space-y-3" },
            rows.map(({ e, a }, i) => (React.createElement("li", { key: e.id },
                React.createElement("button", { type: "button", onClick: () => app.openBookEntry(e.id), style: { animationDelay: `${i * 40}ms` }, className: cx('anim-rise group block w-full p-5 text-left transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.99]', T.card, T.focus) },
                    React.createElement("div", { className: "flex items-start justify-between gap-3" },
                        React.createElement("div", { className: "min-w-0" },
                            React.createElement("div", { className: cx('text-[17px] font-semibold leading-snug tracking-tight', T.fg) }, e.recipe.name),
                            React.createElement("div", { className: "mt-1.5" },
                                React.createElement(Stars, { value: e.rating || 0, size: 13 }))),
                        React.createElement(VerdictTag, { a: analyzeRecipe(e.recipe, a.items) })),
                    React.createElement("div", { className: "mt-3.5" },
                        React.createElement(DishPills, { r: e.recipe })),
                    React.createElement(Meter, { a: analyzeRecipe(e.recipe, a.items), className: "mt-4" }),
                    e.note && React.createElement("p", { className: cx('mt-3 text-[14px] leading-relaxed', T.mute) },
                        "\u00AB",
                        e.note,
                        "\u00BB"))))),
            rows.length === 0 && React.createElement("p", { className: cx('py-6 text-center text-[14px]', T.mute) }, "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0448\u043B\u043E\u0441\u044C."))));
}
function BookEntryPage({ app, entry, onClose }) {
    const { pantry, profile, ai, run } = app;
    const [portions, setPortions] = useState(entry.recipe.servings || profile.portions);
    const [checked, setChecked] = useState(null);
    const [adapting, setAdapting] = useState(null);
    const [confirm, setConfirm] = useState(false);
    const local = localCheck(entry.recipe, pantry, profile.staples);
    const recipe = checked || entry.recipe;
    const a = checked ? analyzeRecipe(checked) : { ...analyzeRecipe(entry.recipe, local.items), local: true };
    const upd = (p) => app.updateBook(entry.id, p);
    const ask = async (instruction, label) => {
        setAdapting(label);
        const res = await run(label, () => ai.adapt({ pantry, profile, extras: [] }, { recipe: entry.recipe, instruction, portions, note: entry.note }));
        setAdapting(null);
        if (res.error)
            return app.notify({ Icon: CircleAlert, text: res.error.message, long: true });
        setChecked(res.data);
    };
    return (React.createElement("div", { className: "space-y-6" },
        React.createElement("div", { className: cx('anim-rise space-y-4 p-5', T.card) },
            React.createElement("div", { className: "flex items-center justify-between gap-3" },
                React.createElement("span", { className: T.label }, "\u0412\u0430\u0448\u0430 \u043E\u0446\u0435\u043D\u043A\u0430"),
                React.createElement(Stars, { value: entry.rating || 0, onChange: (n) => upd({ rating: n }), size: 24 })),
            React.createElement("div", null,
                React.createElement("label", { htmlFor: "book-note", className: T.label }, "\u0417\u0430\u043C\u0435\u0442\u043A\u0430"),
                React.createElement("textarea", { id: "book-note", rows: 2, value: entry.note || '', onChange: (e) => upd({ note: e.target.value }), placeholder: "\u0427\u0442\u043E \u043F\u043E\u043C\u0435\u043D\u044F\u0442\u044C \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0440\u0430\u0437", className: cx('mt-2 w-full resize-none rounded-2xl px-4 py-3 text-[15px] leading-relaxed transition-all duration-200 focus:ring-2 focus:ring-[#2D4739]/25', T.inset, T.input, T.fg) }))),
        React.createElement(RecipeView, { recipe: recipe, a: a, strict: false, portions: portions, setPortions: setPortions, saved: null, onShop: (items) => app.addToShop(items.map((i) => ({ name: i.name, amt: scaleAmt(i.amount, portions / (recipe.servings || portions)) })), recipe.name), onSave: checked ? () => { upd({ recipe: checked }); setChecked(null); app.notify({ Icon: BookmarkCheck, text: 'Рецепт в книге обновлён' }); } : null, onCook: () => { onClose(); app.startCooking(recipe, portions); }, onAdapt: ask, adapting: adapting, adapted: !!checked, onUndoAdapt: () => setChecked(null), inShop: app.inShop, localNote: checked ? null : 'Наличие сверено с кладовкой примерно, по названиям. Для точных замен нажмите «Сверить с кладовкой».', extraActions: React.createElement("div", { className: "grid grid-cols-1 gap-2" },
                !checked && React.createElement(Button, { variant: "soft", onClick: () => ask('Сверь рецепт с текущей кладовкой: обнови статусы ингредиентов и замены.', 'Сверяю с кладовкой'), disabled: !!adapting },
                    React.createElement(Refrigerator, { size: 17, strokeWidth: SW }),
                    "\u0421\u0432\u0435\u0440\u0438\u0442\u044C \u0441 \u043A\u043B\u0430\u0434\u043E\u0432\u043A\u043E\u0439"),
                checked && React.createElement("p", { className: cx('text-center text-[13px]', T.mute) }, "\u042D\u0442\u043E \u043D\u043E\u0432\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u00AB\u0412 \u043A\u043D\u0438\u0433\u0443\u00BB, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u0443\u044E.")) }),
        React.createElement("div", { className: "pt-2" }, !confirm
            ? React.createElement(Button, { variant: "ghost", className: "w-full", onClick: () => setConfirm(true) },
                React.createElement(Trash2, { size: 16, strokeWidth: SW }),
                "\u0423\u0431\u0440\u0430\u0442\u044C \u0438\u0437 \u043A\u043D\u0438\u0433\u0438")
            : (React.createElement("div", { className: "anim-rise grid grid-cols-2 gap-2" },
                React.createElement(Button, { variant: "contrast", onClick: () => { app.removeBook(entry.id); onClose(); } }, "\u0414\u0430, \u0443\u0431\u0440\u0430\u0442\u044C"),
                React.createElement(Button, { variant: "ghost", onClick: () => setConfirm(false) }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C"))))));
}
function ShopTab({ app }) {
    const { shop, setShop, ai, run, notify, pantry, profile, data, update } = app;
    const [text, setText] = useState('');
    const [planning, setPlanning] = useState(false);
    const plan = data.plan;
    const add = (e) => {
        e && e.preventDefault();
        const items = parseItems(text).map((p) => ({ id: uid('s'), name: p.name, amt: p.qty, from: null, done: false }));
        if (!items.length)
            return;
        setShop((s) => [...items, ...s]);
        setText('');
    };
    const toggle = (id) => setShop((s) => s.map((x) => (x.id === id ? { ...x, done: !x.done } : x)));
    const remove = (id) => setShop((s) => s.filter((x) => x.id !== id));
    const doneN = shop.filter((x) => x.done).length;
    const left = shop.filter((x) => !x.done);
    const groups = [];
    shop.forEach((x) => {
        const key = x.from || 'Своё';
        let g = groups.find((y) => y[0] === key);
        if (!g)
            groups.push((g = [key, []]));
        g[1].push(x);
    });
    groups.sort((a, b) => (a[0] === 'Своё') - (b[0] === 'Своё'));
    const pct = shop.length ? doneN / shop.length : 0;
    const planWeek = async () => {
        setPlanning(true);
        const res = await run('Собираю меню', () => ai.menu({ pantry, profile, extras: [] }));
        setPlanning(false);
        if (res.error)
            return notify({ Icon: CircleAlert, text: res.error.message, long: true });
        update((d) => ({ ...d, plan: { days: res.data.days, at: Date.now() } }));
        const need = res.data.shopping.filter((i) => !app.inShop(i.name));
        setShop((s) => [...need.map((i) => ({ id: uid('s'), name: i.name, amt: i.amount, from: 'Меню на неделю', done: false })), ...s.filter((x) => x.from !== 'Меню на неделю' || x.done)]);
        notify({ Icon: CalendarDays, text: need.length ? `Меню готово · в покупки: ${need.length}` : 'Меню готово, докупать нечего' });
    };
    const send = async () => {
        const lines = left.map((x) => `• ${x.name}${x.amt ? ` — ${x.amt}` : ''}`);
        const r = await shareText({ title: 'Список покупок', text: `Купить:\n${lines.join('\n')}` });
        if (r === 'copied')
            notify({ Icon: Copy, text: 'Список скопирован, вставьте его в сообщение' });
        if (r === 'failed')
            notify({ Icon: CircleAlert, text: 'Не получилось поделиться. Выделите список вручную.' });
    };
    return (React.createElement("div", { className: "space-y-6" },
        React.createElement("div", { className: cx('anim-rise p-5', T.card) },
            React.createElement("div", { className: "flex items-baseline justify-between" },
                React.createElement("span", { className: cx('text-[15px] font-medium', T.fg) }, "\u041A\u0443\u043F\u043B\u0435\u043D\u043E"),
                React.createElement("span", { className: cx('text-[15px] font-semibold tnum', T.fg) },
                    doneN,
                    React.createElement("span", { className: T.faint },
                        " \u0438\u0437 ",
                        shop.length))),
            React.createElement("div", { className: "mt-3 h-1.5 overflow-hidden rounded-full bg-[#F2EFE9]" },
                React.createElement("div", { className: "h-full rounded-full bg-[#2D4739] transition-all duration-500 ease-out", style: { width: `${pct * 100}%` } })),
            React.createElement("form", { onSubmit: add, className: cx('mt-5 flex h-12 items-center gap-2 rounded-2xl pl-4 pr-1.5 transition-all duration-200 focus-within:ring-2 focus-within:ring-[#2D4739]/25', T.inset) },
                React.createElement("label", { htmlFor: "shop-add", className: "sr-only" }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043F\u043E\u043A\u0443\u043F\u043A\u0438"),
                React.createElement("input", { id: "shop-add", value: text, onChange: (e) => setText(e.target.value), placeholder: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C: \u0441\u044B\u0440, 2 \u043B \u043C\u043E\u043B\u043E\u043A\u0430", autoComplete: "off", enterKeyHint: "done", className: cx('h-full min-w-0 flex-1 text-[15px]', T.input, T.fg) }),
                React.createElement("button", { type: "submit", "aria-label": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C", disabled: !text.trim(), className: cx('grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-all duration-200 active:scale-90 disabled:opacity-30', T.aSolid, T.focus) },
                    React.createElement(Plus, { size: 17, strokeWidth: 2 }))),
            left.length > 0 && React.createElement(Button, { variant: "ghost", className: "mt-3 w-full", onClick: send },
                React.createElement(Send, { size: 16, strokeWidth: SW }),
                "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A")),
        React.createElement("section", { className: cx('anim-rise relative overflow-hidden p-5', T.card) },
            React.createElement("div", { className: "pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#9FC3A8]/25 blur-3xl" }),
            React.createElement("div", { className: "relative flex items-start gap-3" },
                React.createElement("span", { className: cx('grid h-10 w-10 shrink-0 place-items-center rounded-xl', T.aSoft, T.aText) },
                    React.createElement(CalendarDays, { size: 19, strokeWidth: SW })),
                React.createElement("div", { className: "min-w-0" },
                    React.createElement("h2", { className: cx('text-[17px] font-semibold tracking-tight', T.fg) }, "\u041C\u0435\u043D\u044E \u043D\u0430 \u043D\u0435\u0434\u0435\u043B\u044E"),
                    React.createElement("p", { className: cx('mt-0.5 text-[13px] leading-snug', T.mute) }, "5 \u0443\u0436\u0438\u043D\u043E\u0432 \u0438\u0437 \u0442\u043E\u0433\u043E, \u0447\u0442\u043E \u0435\u0441\u0442\u044C. \u041D\u0435\u0434\u043E\u0441\u0442\u0430\u044E\u0449\u0435\u0435 \u0441\u0440\u0430\u0437\u0443 \u0432 \u0441\u043F\u0438\u0441\u043E\u043A."))),
            plan && plan.days && (React.createElement("ol", { className: cx('relative mt-4 divide-y', T.divide) }, plan.days.map((d, i) => (React.createElement("li", { key: i },
                React.createElement("button", { type: "button", onClick: () => app.cookByName(d.name), className: cx('anim-rise group flex w-full items-center gap-4 py-2.5 text-left', T.focus), style: { animationDelay: `${i * 60}ms` } },
                    React.createElement("span", { className: cx('w-6 text-[12px] font-semibold uppercase tracking-wider', T.faint) }, d.day),
                    React.createElement("span", { className: cx('min-w-0 flex-1 truncate text-[14px] font-medium', T.fg) }, d.name),
                    React.createElement("span", { className: cx('shrink-0 text-[12px] tnum', T.faint) },
                        d.time_min,
                        " \u043C\u0438\u043D"),
                    React.createElement(ChevronRight, { size: 15, strokeWidth: SW, className: cx('shrink-0 transition-transform duration-200 group-hover:translate-x-0.5', T.faint) }))))))),
            React.createElement(Button, { variant: plan ? 'ghost' : 'contrast', className: "relative mt-4 w-full", onClick: planWeek, disabled: planning },
                planning ? React.createElement("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current/30 border-t-current" }) : plan ? React.createElement(RotateCcw, { size: 16, strokeWidth: SW }) : React.createElement(Sparkles, { size: 16, strokeWidth: SW }),
                planning ? 'Собираю меню…' : plan ? 'Пересобрать' : 'Собрать меню')),
        shop.length === 0 && React.createElement("p", { className: cx('px-1 text-center text-[14px]', T.mute) }, "\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442. \u041D\u0435\u0434\u043E\u0441\u0442\u0430\u044E\u0449\u0435\u0435 \u0438\u0437 \u0440\u0435\u0446\u0435\u043F\u0442\u043E\u0432 \u043F\u043E\u043F\u0430\u0434\u0451\u0442 \u0441\u044E\u0434\u0430 \u043E\u0434\u043D\u043E\u0439 \u043A\u043D\u043E\u043F\u043A\u043E\u0439."),
        groups.map(([g, items]) => (React.createElement("section", { key: g, className: "anim-rise" },
            React.createElement("h2", { className: cx('mb-2 truncate px-1', T.label) }, g === 'Своё' ? 'Своё' : `Для: ${g}`),
            React.createElement("ul", { className: cx('divide-y px-3', T.divide, T.card) }, items.map((x) => (React.createElement("li", { key: x.id, className: "group flex items-center gap-1" },
                React.createElement("button", { type: "button", role: "checkbox", "aria-checked": x.done, onClick: () => toggle(x.id), className: cx('flex min-w-0 flex-1 items-center gap-3 rounded-xl px-2 py-3.5 text-left transition-all duration-200', T.focus) },
                    React.createElement("span", { className: cx('grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full transition-all duration-200', x.done ? T.aSolid : 'ring-[1.5px] ring-inset ring-[#CFC8BA]') }, x.done && React.createElement(Check, { size: 13, strokeWidth: 2.5, className: "anim-pop" })),
                    React.createElement("span", { className: cx('min-w-0 flex-1 truncate text-[15px] font-medium transition-all duration-200', x.done ? cx(T.faint, 'line-through') : T.fg) }, x.name),
                    x.amt && React.createElement("span", { className: cx('shrink-0 text-[13px] tnum', T.faint) }, x.amt)),
                React.createElement("button", { type: "button", onClick: () => remove(x.id), "aria-label": `Удалить: ${x.name}`, className: cx('grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-200 hover:bg-[#2D4739]/[0.06] active:scale-90', T.faint, T.focus) },
                    React.createElement(X, { size: 15, strokeWidth: SW }))))))))),
        doneN > 0 && React.createElement(Button, { variant: "soft", size: "lg", className: "anim-rise w-full", onClick: app.moveBoughtToPantry },
            React.createElement(Refrigerator, { size: 17, strokeWidth: SW }),
            "\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u043A\u0443\u043F\u043B\u0435\u043D\u043D\u043E\u0435 \u0432 \u043A\u043B\u0430\u0434\u043E\u0432\u043A\u0443 \u00B7 ",
            doneN)));
}
function beep() {
    try {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        const ac = new Ctx();
        [0, 0.35, 0.7].forEach((t) => {
            const o = ac.createOscillator();
            const g = ac.createGain();
            o.frequency.value = 880;
            o.connect(g);
            g.connect(ac.destination);
            g.gain.setValueAtTime(0.0001, ac.currentTime + t);
            g.gain.exponentialRampToValueAtTime(0.25, ac.currentTime + t + 0.02);
            g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + t + 0.25);
            o.start(ac.currentTime + t);
            o.stop(ac.currentTime + t + 0.3);
        });
        setTimeout(() => ac.close(), 1500);
    }
    catch (e) { }
}
function CookingMode({ recipe, portions, pantry, saved, onClose, onUseUp, onSave }) {
    const steps = recipe.steps;
    const [i, setI] = useState(0);
    const [endAt, setEndAt] = useState(null);
    const [left, setLeft] = useState(null);
    const [done, setDone] = useState(false);
    const [used, setUsed] = useState({});
    const st = steps[i] || steps[0];
    const total = st && st.minutes ? st.minutes * 60 : 0;
    useEffect(() => { setEndAt(null); setLeft(total || null); }, [i]);
    useEffect(() => {
        if (!endAt)
            return;
        const tick = () => {
            const l = Math.max(0, Math.round((endAt - Date.now()) / 1000));
            setLeft(l);
            if (l === 0) {
                setEndAt(null);
                beep();
                try {
                    navigator.vibrate && navigator.vibrate([300, 150, 300]);
                }
                catch (e) { }
            }
        };
        tick();
        const t = setInterval(tick, 500);
        return () => clearInterval(t);
    }, [endAt]);
    useEffect(() => {
        let lock = null;
        const req = () => { try {
            navigator.wakeLock && navigator.wakeLock.request('screen').then((l) => { lock = l; }).catch(() => { });
        }
        catch (e) { } };
        req();
        const vis = () => document.visibilityState === 'visible' && req();
        document.addEventListener('visibilitychange', vis);
        return () => { document.removeEventListener('visibilitychange', vis); try {
            lock && lock.release();
        }
        catch (e) { } };
    }, []);
    const candidates = useMemo(() => {
        const ids = new Set(recipe.ingredients.filter((x) => (x.status === 'have' || x.status === 'sub') && x.pantry_id).map((x) => x.pantry_id));
        const out = pantry.filter((p) => ids.has(p.id));
        recipe.ingredients.forEach((x) => { if (x.status === 'have' && !x.pantry_id) {
            const h = matchesPantry(x.name, pantry, []);
            if (h && h.id && !out.some((o) => o.id === h.id))
                out.push(pantry.find((p) => p.id === h.id));
        } });
        return out;
    }, []);
    const running = !!endAt;
    const pct = total ? 1 - (left == null ? total : left) / total : 0;
    const mm = left == null ? '' : `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`;
    const R = 36, C = 2 * Math.PI * R;
    const usedN = Object.values(used).filter(Boolean).length;
    return (React.createElement("div", { className: cx('anim-fade fixed inset-0 z-50 overflow-y-auto', T.page), role: "dialog", "aria-modal": "true", "aria-label": `Готовим: ${recipe.name}` },
        React.createElement("div", { className: "mx-auto flex min-h-full max-w-md flex-col px-5 pb-[calc(24px+env(safe-area-inset-bottom,0px))] pt-[calc(16px+env(safe-area-inset-top,0px))]" },
            React.createElement("div", { className: "flex items-center gap-3" },
                React.createElement("div", { className: "min-w-0 flex-1" },
                    React.createElement("div", { className: T.label },
                        "\u0420\u0435\u0436\u0438\u043C \u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u00B7 ",
                        portions,
                        " ",
                        plural(portions, 'порция', 'порции', 'порций')),
                    React.createElement("div", { className: cx('mt-0.5 truncate text-[16px] font-semibold tracking-tight', T.fg) }, recipe.name)),
                React.createElement(IconButton, { label: "\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u0440\u0435\u0436\u0438\u043C\u0430 \u0433\u043E\u0442\u043E\u0432\u043A\u0438", onClick: onClose },
                    React.createElement(X, { size: 18, strokeWidth: SW }))),
            React.createElement("div", { className: "mt-5 flex gap-1.5" }, steps.map((_, k) => React.createElement("span", { key: k, className: cx('h-1 flex-1 rounded-full transition-all duration-500', k < i || done ? 'bg-[#2D4739]' : k === i ? 'bg-[#2F6464]' : 'bg-[#E8E4DC]') }))),
            !done ? (React.createElement("div", { key: i, className: "anim-step flex flex-1 flex-col" },
                React.createElement("div", { className: cx('mt-10 inline-flex items-center gap-1.5 text-[13px] font-medium tnum', T.sea) },
                    React.createElement(CookingPot, { size: 15, strokeWidth: SW }),
                    "\u0428\u0430\u0433 ",
                    i + 1,
                    " \u0438\u0437 ",
                    steps.length),
                st.title && React.createElement("h2", { className: cx('mt-2 text-[34px] font-semibold leading-[1.05] tracking-tight', T.fg) }, st.title),
                React.createElement("p", { className: "mt-5 text-[19px] leading-relaxed text-[#35504E]" }, st.text),
                total > 0 && (React.createElement("div", { className: cx('mt-8 flex items-center gap-5 p-4', T.card) },
                    React.createElement("div", { className: "relative h-[88px] w-[88px] shrink-0" },
                        React.createElement("svg", { viewBox: "0 0 88 88", className: "h-full w-full -rotate-90", "aria-hidden": "true" },
                            React.createElement("circle", { cx: "44", cy: "44", r: R, fill: "none", strokeWidth: "6", className: "stroke-[#ECE7DE]" }),
                            React.createElement("circle", { cx: "44", cy: "44", r: R, fill: "none", strokeWidth: "6", strokeLinecap: "round", className: "stroke-[#2F6464]", strokeDasharray: C, strokeDashoffset: C * (1 - pct), style: { transition: 'stroke-dashoffset .5s linear' } })),
                        React.createElement("span", { className: cx('absolute inset-0 grid place-items-center text-[17px] font-semibold tnum', T.fg) }, left === 0 ? 'Всё' : mm)),
                    React.createElement("div", { className: "min-w-0 flex-1" },
                        React.createElement("div", { className: cx('flex items-center gap-1.5 text-[15px] font-medium', T.fg) },
                            React.createElement(AlarmClock, { size: 16, strokeWidth: SW, className: T.sea }),
                            left === 0 ? 'Время вышло' : `Таймер · ${st.minutes} мин`),
                        React.createElement("div", { className: "mt-2.5 flex flex-wrap gap-2" },
                            React.createElement(Button, { variant: running ? 'ghost' : 'contrast', size: "sm", onClick: () => {
                                    if (running) {
                                        setEndAt(null);
                                    }
                                    else {
                                        const l = left === 0 || left == null ? total : left;
                                        setLeft(l);
                                        setEndAt(Date.now() + l * 1000);
                                    }
                                } },
                                running ? React.createElement(Pause, { size: 15, strokeWidth: SW }) : React.createElement(Play, { size: 15, strokeWidth: SW, fill: "currentColor" }),
                                running ? 'Пауза' : left === 0 ? 'Ещё раз' : left < total ? 'Продолжить' : 'Старт'),
                            left !== total && left !== 0 && React.createElement(Button, { variant: "ghost", size: "sm", onClick: () => { setEndAt(null); setLeft(total); } },
                                React.createElement(RotateCcw, { size: 15, strokeWidth: SW }),
                                "\u0421\u0431\u0440\u043E\u0441"))))),
                React.createElement("div", { className: "mt-auto flex gap-2 pt-8" },
                    React.createElement(IconButton, { label: "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u0448\u0430\u0433", onClick: () => setI((x) => Math.max(0, x - 1)), disabled: i === 0, className: "h-14 w-14 rounded-2xl disabled:opacity-30" },
                        React.createElement(ChevronLeft, { size: 20, strokeWidth: SW })),
                    React.createElement(Button, { size: "lg", className: "h-14 flex-1 rounded-2xl text-[16px]", onClick: () => (i < steps.length - 1 ? setI(i + 1) : setDone(true)) },
                        i < steps.length - 1 ? 'Следующий шаг' : 'Готово',
                        React.createElement(ChevronRight, { size: 18, strokeWidth: SW }))))) : (React.createElement("div", { className: "anim-step flex flex-1 flex-col" },
                React.createElement("span", { className: cx('anim-pop mt-10 grid h-14 w-14 place-items-center rounded-2xl', T.aSolid) },
                    React.createElement(Utensils, { size: 26, strokeWidth: SW })),
                React.createElement("h2", { className: cx('mt-5 text-[30px] font-semibold leading-tight tracking-tight', T.fg) }, "\u041F\u0440\u0438\u044F\u0442\u043D\u043E\u0433\u043E \u0430\u043F\u043F\u0435\u0442\u0438\u0442\u0430"),
                candidates.length > 0 ? (React.createElement(React.Fragment, null,
                    React.createElement("p", { className: cx('mt-2 text-[15px]', T.mute) }, "\u0427\u0442\u043E \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u043E\u0441\u044C? \u041E\u0442\u043C\u0435\u0447\u0435\u043D\u043D\u043E\u0435 \u0443\u0431\u0435\u0440\u0443 \u0438\u0437 \u043A\u043B\u0430\u0434\u043E\u0432\u043A\u0438."),
                    React.createElement("ul", { className: cx('mt-5 divide-y px-3', T.divide, T.card) }, candidates.map((p) => (React.createElement("li", { key: p.id },
                        React.createElement("button", { type: "button", role: "checkbox", "aria-checked": !!used[p.id], onClick: () => setUsed((u) => ({ ...u, [p.id]: !u[p.id] })), className: cx('flex w-full items-center gap-3 rounded-xl px-2 py-3 text-left', T.focus) },
                            React.createElement("span", { className: cx('grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full transition-all duration-200', used[p.id] ? T.aSolid : 'ring-[1.5px] ring-inset ring-[#CFC8BA]') }, used[p.id] && React.createElement(Check, { size: 13, strokeWidth: 2.5 })),
                            React.createElement("span", { className: cx('flex-1 text-[15px] font-medium', T.fg) }, p.name),
                            React.createElement("span", { className: cx('text-[13px] tnum', T.faint) }, p.qty)))))))) : React.createElement("p", { className: cx('mt-2 text-[15px]', T.mute) }, "\u0415\u0441\u043B\u0438 \u0447\u0442\u043E-\u0442\u043E \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u043E\u0441\u044C, \u0443\u0431\u0435\u0440\u0438\u0442\u0435 \u044D\u0442\u043E \u0432 \u043A\u043B\u0430\u0434\u043E\u0432\u043A\u0435."),
                React.createElement("div", { className: "mt-auto space-y-2 pt-8" },
                    !saved && React.createElement(Button, { variant: "ghost", size: "lg", className: "w-full", onClick: onSave },
                        React.createElement(BookmarkPlus, { size: 17, strokeWidth: SW }),
                        "\u041F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u043E\u0441\u044C: \u0432 \u043A\u043D\u0438\u0433\u0443"),
                    React.createElement(Button, { size: "lg", className: "h-14 w-full rounded-2xl text-[16px]", onClick: () => onUseUp(candidates.filter((p) => used[p.id])) }, usedN ? `Списать и закрыть · ${usedN}` : 'Закрыть')))))));
}
function Page({ title, onClose, children, right }) {
    useEffect(() => {
        const h = (e) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', h);
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { window.removeEventListener('keydown', h); document.body.style.overflow = prev; };
    }, []);
    return (React.createElement("div", { className: cx('anim-page fixed inset-0 z-40 overflow-y-auto overscroll-contain', T.page), role: "dialog", "aria-modal": "true", "aria-label": title },
        React.createElement("div", { className: "mx-auto max-w-md" },
            React.createElement("div", { className: cx('sticky top-0 z-10 flex items-center gap-2 px-3 pb-2 pt-[calc(env(safe-area-inset-top,0px)+10px)] backdrop-blur-xl', 'bg-[#FBF9F5]/85') },
                React.createElement("button", { type: "button", onClick: onClose, className: cx('inline-flex h-10 items-center gap-0.5 rounded-full pl-1 pr-3 text-[15px] font-medium transition-all duration-200 hover:bg-[#2D4739]/[0.06]', T.aText, T.focus) },
                    React.createElement(ChevronLeft, { size: 22, strokeWidth: SW }),
                    "\u041D\u0430\u0437\u0430\u0434"),
                React.createElement("div", { className: cx('min-w-0 flex-1 truncate text-center text-[16px] font-semibold', T.fg) }, title),
                React.createElement("div", { className: "flex w-[84px] justify-end" }, right)),
            React.createElement("div", { className: "px-5 pb-[calc(48px+env(safe-area-inset-bottom,0px))] pt-3" }, children))));
}
function Section({ id, title, Icon, children, hint }) {
    return (React.createElement("section", { id: id, className: "scroll-mt-20" },
        React.createElement("h2", { className: cx('mb-2 flex items-center gap-1.5 px-1', T.label) },
            Icon && React.createElement(Icon, { size: 13, strokeWidth: SW }),
            title),
        React.createElement("div", { className: cx('p-5', T.card) }, children),
        hint && React.createElement("p", { className: cx('mt-2 px-1 text-[12px] leading-snug', T.faint) }, hint)));
}
function TagEditor({ id, items, onChange, placeholder, tone }) {
    const [txt, setTxt] = useState('');
    return (React.createElement("div", { className: "flex flex-wrap gap-2" },
        items.map((d) => (React.createElement("span", { key: d, className: cx('anim-pop inline-flex h-9 items-center gap-1 rounded-full pl-3.5 pr-1 text-[13px] font-medium', tone === 'sea' ? cx(T.seaSoft, T.sea) : cx(T.inset, T.fg)) },
            d,
            React.createElement("button", { type: "button", "aria-label": `Убрать: ${d}`, onClick: () => onChange(items.filter((x) => x !== d)), className: cx('grid h-7 w-7 place-items-center rounded-full transition-all duration-200 hover:bg-[#2D4739]/[0.08]', T.faint, T.focus) },
                React.createElement(X, { size: 13, strokeWidth: 2 }))))),
        React.createElement("form", { onSubmit: (e) => { e.preventDefault(); const v = txt.trim(); if (v && !items.some((x) => norm(x) === norm(v)))
                onChange([...items, tone === 'sea' ? v.toLowerCase() : cap(v)]); setTxt(''); } },
            React.createElement("label", { htmlFor: id, className: "sr-only" }, placeholder),
            React.createElement("input", { id: id, value: txt, onChange: (e) => setTxt(e.target.value), placeholder: placeholder, className: cx('h-9 w-36 rounded-full border border-dashed border-[#D6CFC2] px-3.5 text-[13px] transition-all duration-200 focus:border-[#2D4739]', T.input, T.fg) }))));
}
function AddKeyForm({ onAdded, compact, existing }) {
    const [name, setName] = useState('');
    const [key, setKey] = useState('');
    const [show, setShow] = useState(false);
    const [state, setState] = useState({ busy: false, error: null, offline: false });
    const clean = key.trim().replace(/\s+/g, '');
    const submit = async (e, force) => {
        e && e.preventDefault();
        if (!clean)
            return;
        if (existing.some((k) => k.key === clean))
            return setState({ busy: false, error: 'Этот ключ уже добавлен.' });
        setState({ busy: true, error: null });
        try {
            const info = force ? null : await checkKey(clean);
            onAdded({ id: uid('k'), name: name.trim() || (info && info.label && !/^sk-or/.test(info.label) ? info.label : `Ключ ${existing.length + 1}`), key: clean, addedAt: Date.now() }, info);
            setName('');
            setKey('');
            setState({ busy: false, error: null });
        }
        catch (err) {
            setState({ busy: false, error: err.message, offline: err.code === 'offline' || err.code === 'network' });
        }
    };
    return (React.createElement("form", { onSubmit: submit, className: "space-y-3" },
        !compact && (React.createElement("div", null,
            React.createElement("label", { htmlFor: "key-name", className: T.label }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0435 \u043F\u0443\u0442\u0430\u0442\u044C"),
            React.createElement("input", { id: "key-name", value: name, onChange: (e) => setName(e.target.value), placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u041C\u043E\u0439, \u0414\u043B\u044F \u041C\u0430\u0448\u0438", autoComplete: "off", className: cx('mt-2 h-11 w-full rounded-xl px-3.5 text-[15px] focus:ring-2 focus:ring-[#2D4739]/25', T.inset, T.input, T.fg) }))),
        React.createElement("div", null,
            React.createElement("label", { htmlFor: "key-value", className: T.label }, "\u041A\u043B\u044E\u0447 OpenRouter"),
            React.createElement("div", { className: cx('mt-2 flex h-11 items-center gap-1 rounded-xl pl-3.5 pr-1 focus-within:ring-2 focus-within:ring-[#2D4739]/25', T.inset) },
                React.createElement("input", { id: "key-value", value: key, onChange: (e) => setKey(e.target.value), type: show ? 'text' : 'password', placeholder: "sk-or-v1-\u2026", autoComplete: "off", autoCapitalize: "off", spellCheck: false, className: cx('h-full min-w-0 flex-1 font-mono text-[14px]', T.input, T.fg) }),
                React.createElement("button", { type: "button", onClick: () => setShow((s) => !s), "aria-label": show ? 'Скрыть ключ' : 'Показать ключ', className: cx('grid h-9 w-9 place-items-center rounded-lg', T.faint, T.focus) }, show ? React.createElement(EyeOff, { size: 16, strokeWidth: SW }) : React.createElement(Eye, { size: 16, strokeWidth: SW }))),
            clean && !/^sk-or-/.test(clean) && React.createElement("p", { className: cx('mt-1.5 text-[12px]', T.sea) }, "\u041A\u043B\u044E\u0447\u0438 OpenRouter \u043E\u0431\u044B\u0447\u043D\u043E \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0442\u0441\u044F \u0441 \u00ABsk-or-\u00BB. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435, \u0447\u0442\u043E \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043B\u0438 \u0435\u0433\u043E \u0446\u0435\u043B\u0438\u043A\u043E\u043C.")),
        state.error && React.createElement("p", { className: cx('rounded-xl p-3 text-[13px] leading-snug', T.seaSoft, T.fg), role: "alert" }, state.error),
        React.createElement("div", { className: "flex flex-wrap gap-2" },
            React.createElement(Button, { type: "submit", className: "flex-1", disabled: !clean || state.busy },
                state.busy ? React.createElement("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" }) : React.createElement(ShieldCheck, { size: 17, strokeWidth: SW }),
                state.busy ? 'Проверяю…' : 'Проверить и сохранить'),
            state.offline && React.createElement(Button, { variant: "ghost", onClick: () => submit(null, true) }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0431\u0435\u0437 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438"))));
}
function KeysSection({ app }) {
    const { keys, setKeys, keyInfo, setKeyInfo, notify } = app;
    const [adding, setAdding] = useState(!keys.list.length);
    const [confirm, setConfirm] = useState(null);
    const [checking, setChecking] = useState(null);
    const check = async (k) => {
        setChecking(k.id);
        try {
            const info = await checkKey(k.key);
            setKeyInfo((m) => ({ ...m, [k.id]: info }));
        }
        catch (e) {
            setKeyInfo((m) => ({ ...m, [k.id]: { error: e.message, code: e.code, checkedAt: Date.now() } }));
        }
        setChecking(null);
    };
    const onAdded = (k, info) => {
        setKeys((s) => ({ list: [...s.list, k], active: s.active && s.list.some((x) => x.id === s.active) ? s.active : k.id }));
        if (info)
            setKeyInfo((m) => ({ ...m, [k.id]: info }));
        setAdding(false);
        notify({ Icon: KeyRound, text: `Ключ «${k.name}» сохранён` });
        app.ensureModels(k.key);
    };
    return (React.createElement("div", { className: "space-y-4" },
        keys.list.length > 0 && (React.createElement("ul", { className: cx('divide-y', T.divide) }, keys.list.map((k) => {
            const info = keyInfo[k.id];
            const active = keys.active === k.id;
            return (React.createElement("li", { key: k.id, className: "py-3 first:pt-0" },
                React.createElement("div", { className: "flex items-start gap-3" },
                    React.createElement("button", { type: "button", role: "radio", "aria-checked": active, "aria-label": `Сделать активным: ${k.name}`, onClick: () => setKeys((s) => ({ ...s, active: k.id })), className: cx('mt-0.5 grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full transition-all duration-200', active ? T.aSolid : 'ring-[1.5px] ring-inset ring-[#CFC8BA]', T.focus) }, active && React.createElement(Check, { size: 13, strokeWidth: 2.5 })),
                    React.createElement("div", { className: "min-w-0 flex-1" },
                        React.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                            React.createElement("span", { className: cx('text-[15px] font-semibold', T.fg) }, k.name),
                            active && React.createElement(Pill, { tone: "sage" }, "\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439")),
                        React.createElement("div", { className: cx('mt-0.5 font-mono text-[12px]', T.faint) }, maskKey(k.key)),
                        info && !info.error && (React.createElement("div", { className: cx('mt-1 text-[13px]', T.mute) },
                            info.remaining != null ? React.createElement(React.Fragment, null,
                                "\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u043F\u043E \u043B\u0438\u043C\u0438\u0442\u0443: ",
                                React.createElement("span", { className: "font-semibold tnum" }, fmtUsd(info.remaining)),
                                " \u0438\u0437 ",
                                fmtUsd(info.limit)) : 'Лимит на ключе не задан',
                            info.usageMonthly != null && React.createElement(React.Fragment, null,
                                " \u00B7 \u0437\u0430 \u043C\u0435\u0441\u044F\u0446 ",
                                fmtUsd(info.usageMonthly)))),
                        info && info.error && React.createElement("div", { className: cx('mt-1 text-[13px]', T.sea) }, info.error),
                        React.createElement("div", { className: "mt-2 flex flex-wrap gap-2" },
                            React.createElement(Button, { variant: "ghost", size: "sm", onClick: () => check(k), disabled: checking === k.id },
                                checking === k.id ? React.createElement("span", { className: "h-3.5 w-3.5 animate-spin rounded-full border-2 border-[#2D4739]/25 border-t-[#2D4739]" }) : React.createElement(RefreshCw, { size: 14, strokeWidth: SW }),
                                "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C"),
                            confirm === k.id ? (React.createElement(React.Fragment, null,
                                React.createElement(Button, { variant: "contrast", size: "sm", onClick: () => { setKeys((s) => { const list = s.list.filter((x) => x.id !== k.id); return { list, active: s.active === k.id ? (list[0] || {}).id || null : s.active }; }); setConfirm(null); notify({ Icon: Trash2, text: 'Ключ удалён с этого устройства' }); } }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"),
                                React.createElement(Button, { variant: "ghost", size: "sm", onClick: () => setConfirm(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"))) : React.createElement(Button, { variant: "ghost", size: "sm", onClick: () => setConfirm(k.id) },
                                React.createElement(Trash2, { size: 14, strokeWidth: SW }),
                                "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"))))));
        }))),
        adding ? (React.createElement("div", { className: cx(keys.list.length && 'border-t pt-4', T.hair) },
            React.createElement(AddKeyForm, { onAdded: onAdded, existing: keys.list }),
            keys.list.length > 0 && React.createElement(Button, { variant: "ghost", size: "sm", className: "mt-2", onClick: () => setAdding(false) }, "\u041E\u0442\u043C\u0435\u043D\u0430"))) : (React.createElement(Button, { variant: "soft", className: "w-full", onClick: () => setAdding(true) },
            React.createElement(Plus, { size: 16, strokeWidth: SW }),
            "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043B\u044E\u0447")),
        React.createElement("a", { href: "https://openrouter.ai/settings/keys", target: "_blank", rel: "noopener noreferrer", className: cx('flex items-center gap-2 text-[13px] font-medium', T.aText, T.focus) },
            React.createElement(ExternalLink, { size: 14, strokeWidth: SW }),
            "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043B\u044E\u0447 \u043D\u0430 openrouter.ai")));
}
function ModelPicker({ catalog, current, needImage, onPick, onReload, loading }) {
    const [q, setQ] = useState('');
    const [onlyImg, setOnlyImg] = useState(!!needImage);
    const rec = useMemo(() => (catalog ? recommendModels(catalog) : {}), [catalog]);
    if (!catalog) {
        return (React.createElement("div", { className: "space-y-3 py-6 text-center" },
            React.createElement("p", { className: cx('text-[14px]', T.mute) }, loading ? 'Загружаю список моделей…' : 'Не удалось загрузить список моделей.'),
            !loading && React.createElement(Button, { variant: "ghost", onClick: onReload },
                React.createElement(RefreshCw, { size: 15, strokeWidth: SW }),
                "\u0415\u0449\u0451 \u0440\u0430\u0437")));
    }
    const list = catalog
        .filter((m) => !onlyImg || hasImage(m))
        .filter((m) => !q || norm(m.id + ' ' + m.name).includes(norm(q)))
        .sort((a, b) => priceIn(a) + priceOut(a) - (priceIn(b) + priceOut(b)))
        .slice(0, 80);
    const Row = ({ m, badge }) => (React.createElement("li", null,
        React.createElement("button", { type: "button", onClick: () => onPick(m), className: cx('flex w-full items-center gap-3 py-3 text-left transition-all duration-200', T.focus) },
            React.createElement("span", { className: cx('grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full', current === m.id ? T.aSolid : 'ring-[1.5px] ring-inset ring-[#CFC8BA]') }, current === m.id && React.createElement(Check, { size: 13, strokeWidth: 2.5 })),
            React.createElement("span", { className: "min-w-0 flex-1" },
                React.createElement("span", { className: cx('flex flex-wrap items-center gap-1.5 text-[14px] font-medium', T.fg) },
                    m.name,
                    badge && React.createElement(Pill, { tone: "sage", className: "h-6" }, badge),
                    hasImage(m) && React.createElement(Pill, { Icon: Camera, tone: "sea", className: "h-6" }, "\u0444\u043E\u0442\u043E")),
                React.createElement("span", { className: cx('block truncate font-mono text-[11px]', T.faint) }, m.id)),
            React.createElement("span", { className: cx('shrink-0 text-right text-[12px] leading-tight tnum', T.mute) }, priceIn(m) === 0 ? 'бесплатно' : React.createElement(React.Fragment, null,
                fmtUsd(perM(priceIn(m))),
                React.createElement("br", null),
                fmtUsd(perM(priceOut(m))))))));
    return (React.createElement("div", { className: "space-y-4" },
        (rec.economy || rec.smart) && (React.createElement("div", null,
            React.createElement("div", { className: T.label }, "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C"),
            React.createElement("ul", { className: cx('mt-1 divide-y', T.divide) },
                rec.economy && React.createElement(Row, { m: rec.economy, badge: "\u042D\u043A\u043E\u043D\u043E\u043C\u043D\u0430\u044F" }),
                rec.smart && rec.smart.id !== (rec.economy || {}).id && React.createElement(Row, { m: rec.smart, badge: "\u0423\u043C\u043D\u0430\u044F" })))),
        React.createElement("div", { className: cx('flex h-11 items-center gap-2 rounded-xl px-3.5 focus-within:ring-2 focus-within:ring-[#2D4739]/25', T.inset) },
            React.createElement(Search, { size: 16, strokeWidth: SW, className: T.faint }),
            React.createElement("label", { htmlFor: "model-q", className: "sr-only" }, "\u041F\u043E\u0438\u0441\u043A \u043C\u043E\u0434\u0435\u043B\u0438"),
            React.createElement("input", { id: "model-q", value: q, onChange: (e) => setQ(e.target.value), placeholder: "gemini, claude, gpt\u2026", autoComplete: "off", className: cx('h-full min-w-0 flex-1 text-[15px]', T.input, T.fg) })),
        React.createElement("div", { className: "flex items-center justify-between gap-3" },
            React.createElement("label", { htmlFor: "only-img", className: cx('text-[14px]', T.fg) }, "\u0422\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u043D\u0438\u043C\u0430\u044E\u0449\u0438\u0435 \u0444\u043E\u0442\u043E"),
            React.createElement(Switch, { id: "only-img", checked: onlyImg, onChange: setOnlyImg, label: "\u0422\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u043D\u0438\u043C\u0430\u044E\u0449\u0438\u0435 \u0444\u043E\u0442\u043E" })),
        React.createElement("p", { className: cx('text-[12px]', T.faint) }, "\u0426\u0435\u043D\u0430 \u0441\u043F\u0440\u0430\u0432\u0430: \u0437\u0430 1 \u043C\u043B\u043D \u0442\u043E\u043A\u0435\u043D\u043E\u0432 \u0432\u0445\u043E\u0434\u0430 / \u0432\u044B\u0445\u043E\u0434\u0430. \u041E\u0434\u0438\u043D \u0440\u0435\u0446\u0435\u043F\u0442 \u2014 \u044D\u0442\u043E \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E 2\u20134 \u0442\u044B\u0441\u044F\u0447\u0438 \u0442\u043E\u043A\u0435\u043D\u043E\u0432."),
        React.createElement("ul", { className: cx('divide-y', T.divide) }, list.map((m) => React.createElement(Row, { key: m.id, m: m }))),
        list.length === 0 && React.createElement("p", { className: cx('py-4 text-center text-[14px]', T.mute) }, "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0448\u043B\u043E\u0441\u044C.")));
}
function ModelsSection({ app }) {
    const { data, update, catalog, loadCatalog, catalogLoading, openSheet } = app;
    const find = (id) => (catalog || []).find((m) => m.id === id);
    const pick = (which) => {
        if (!catalog)
            loadCatalog();
        openSheet({
            title: which === 'photo' ? 'Модель для фото' : 'Модель для рецептов',
            render: (close) => React.createElement(ModelPickerLive, { app: app, which: which, close: close }),
        });
    };
    const rowFor = (which, title, sub) => {
        const id = data.models[which];
        const m = find(id);
        return (React.createElement("button", { type: "button", onClick: () => pick(which), className: cx('flex w-full items-center gap-3 py-3 text-left first:pt-0', T.focus) },
            React.createElement("span", { className: cx('grid h-10 w-10 shrink-0 place-items-center rounded-xl', which === 'photo' ? cx(T.seaSoft, T.sea) : cx(T.aSoft, T.aText)) }, which === 'photo' ? React.createElement(Camera, { size: 18, strokeWidth: SW }) : React.createElement(ChefHat, { size: 18, strokeWidth: SW })),
            React.createElement("span", { className: "min-w-0 flex-1" },
                React.createElement("span", { className: cx('block text-[15px] font-medium', T.fg) }, title),
                React.createElement("span", { className: cx('block truncate text-[13px]', T.mute) }, m ? m.name : id || sub),
                m && React.createElement("span", { className: cx('block text-[12px] tnum', T.faint) },
                    fmtUsd(perM(priceIn(m))),
                    " / ",
                    fmtUsd(perM(priceOut(m))),
                    " \u0437\u0430 1 \u043C\u043B\u043D \u0442\u043E\u043A\u0435\u043D\u043E\u0432"),
                which === 'photo' && m && !hasImage(m) && React.createElement("span", { className: cx('block text-[12px]', T.sea) }, "\u042D\u0442\u0430 \u043C\u043E\u0434\u0435\u043B\u044C \u043D\u0435 \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u0442 \u0444\u043E\u0442\u043E")),
            React.createElement(ChevronRight, { size: 17, strokeWidth: SW, className: T.faint })));
    };
    return (React.createElement("div", null,
        React.createElement("div", { className: cx('divide-y', T.divide) },
            rowFor('text', 'Для рецептов и меню', 'Выберется автоматически'),
            rowFor('photo', 'Для фото холодильника и чеков', 'Выберется автоматически')),
        catalogLoading && React.createElement("p", { className: cx('mt-2 text-[12px]', T.faint) }, "\u041E\u0431\u043D\u043E\u0432\u043B\u044F\u044E \u0441\u043F\u0438\u0441\u043E\u043A \u043C\u043E\u0434\u0435\u043B\u0435\u0439\u2026")));
}
function ModelPickerLive({ app, which, close }) {
    const { data, update, catalog, loadCatalog, catalogLoading } = app;
    return (React.createElement(ModelPicker, { catalog: catalog, loading: catalogLoading, onReload: () => loadCatalog(true), current: data.models[which], needImage: which === 'photo', onPick: (m) => { update((d) => ({ ...d, models: { ...d.models, [which]: m.id } })); app.notify({ Icon: Check, text: `Модель: ${m.name}` }); close(); } }));
}
function ProfileSection({ app }) {
    const { profile, update } = app;
    const upd = (p) => update((d) => ({ ...d, profile: { ...d.profile, ...p } }));
    const EQ = [['oven', 'Духовка'], ['multi', 'Мультиварка'], ['air', 'Аэрогриль'], ['micro', 'Микроволновка']];
    return (React.createElement("div", { className: "space-y-6" },
        React.createElement("div", { className: "flex items-center justify-between gap-4" },
            React.createElement("div", null,
                React.createElement("div", { className: cx('text-[15px] font-medium', T.fg) }, "\u041F\u043E\u0440\u0446\u0438\u0439 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E"),
                React.createElement("div", { className: cx('text-[13px]', T.mute) }, "\u0420\u0435\u0446\u0435\u043F\u0442\u044B \u0431\u0443\u0434\u0443\u0442 \u043D\u0430 \u044D\u0442\u043E \u0447\u0438\u0441\u043B\u043E")),
            React.createElement(Stepper, { value: profile.portions, onChange: (v) => upd({ portions: v }) })),
        React.createElement("div", null,
            React.createElement("div", { className: T.label }, "\u041D\u0435 \u0435\u0434\u0438\u043C \u0438 \u0430\u043B\u043B\u0435\u0440\u0433\u0438\u0438"),
            React.createElement("p", { className: cx('mb-3 mt-1 text-[12px]', T.faint) }, "\u041D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u044C \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u0442 \u044D\u0442\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B."),
            React.createElement(TagEditor, { id: "dislike-add", items: profile.dislikes, onChange: (v) => upd({ dislikes: v }), placeholder: "+ \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C", tone: "sea" })),
        React.createElement("div", null,
            React.createElement("div", { className: T.label }, "\u0415\u0441\u0442\u044C \u0432\u0441\u0435\u0433\u0434\u0430"),
            React.createElement("p", { className: cx('mb-3 mt-1 text-[12px]', T.faint) }, "\u0411\u0430\u0437\u043E\u0432\u044B\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435 \u043D\u0443\u0436\u043D\u043E \u0432\u043D\u043E\u0441\u0438\u0442\u044C \u0432 \u043A\u043B\u0430\u0434\u043E\u0432\u043A\u0443."),
            React.createElement(TagEditor, { id: "staple-add", items: profile.staples, onChange: (v) => upd({ staples: v }), placeholder: "+ \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C" })),
        React.createElement("div", null,
            React.createElement("div", { className: T.label }, "\u0422\u0435\u0445\u043D\u0438\u043A\u0430"),
            React.createElement("div", { className: cx('mt-2 divide-y', T.divide) }, EQ.map(([k, l]) => (React.createElement("div", { key: k, className: "flex items-center justify-between py-3" },
                React.createElement("label", { htmlFor: `eq-${k}`, className: cx('text-[15px] font-medium', T.fg) }, l),
                React.createElement(Switch, { id: `eq-${k}`, checked: !!profile.equip[k], onChange: (v) => upd({ equip: { ...profile.equip, [k]: v } }), label: l })))))),
        React.createElement("div", null,
            React.createElement("div", { className: T.label }, "\u0412\u0440\u0435\u043C\u044F \u043D\u0430 \u0433\u043E\u0442\u043E\u0432\u043A\u0443 \u0432 \u0431\u0443\u0434\u043D\u0438"),
            React.createElement("div", { className: "mt-3" },
                React.createElement(Segmented, { label: "\u0412\u0440\u0435\u043C\u044F \u0432 \u0431\u0443\u0434\u043D\u0438", value: profile.weekday, onChange: (v) => upd({ weekday: v }), options: [{ value: 30, label: '30 мин' }, { value: 45, label: '45 мин' }, { value: 60, label: 'Час' }, { value: 90, label: '1,5 ч' }] })))));
}
function DataSection({ app }) {
    const { data, setDataAll, notify } = app;
    const [confirm, setConfirm] = useState(false);
    const exportIt = async () => {
        const name = `iz-holodilnika-${addDaysISO(0)}.json`;
        const r = await saveFile(name, JSON.stringify(makeBackup(data), null, 1));
        if (r === 'downloaded' || r === 'shared')
            notify({ Icon: Check, text: 'Копия сохранена' });
    };
    const importIt = (e) => {
        const f = e.target.files && e.target.files[0];
        e.target.value = '';
        if (!f)
            return;
        const fr = new FileReader();
        fr.onload = () => {
            try {
                const d = readBackup(JSON.parse(fr.result));
                setDataAll((cur) => ({ ...cur, ...d, cook: cur.cook, onboarded: true }));
                notify({ Icon: Check, text: `Восстановлено: ${d.pantry.length} продуктов, ${d.book.length} рецептов` });
            }
            catch (err) {
                notify({ Icon: CircleAlert, text: err.message || 'Не удалось прочитать файл', long: true });
            }
        };
        fr.readAsText(f);
    };
    return (React.createElement("div", { className: "space-y-3" },
        React.createElement("p", { className: cx('text-[13px] leading-relaxed', T.mute) }, "\u041A\u043B\u0430\u0434\u043E\u0432\u043A\u0430, \u0440\u0435\u0446\u0435\u043F\u0442\u044B \u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0445\u0440\u0430\u043D\u044F\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u044D\u0442\u043E\u043C \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435. \u0412\u0440\u0435\u043C\u044F \u043E\u0442 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0439\u0442\u0435 \u043A\u043E\u043F\u0438\u044E: \u043E\u043D\u0430 \u043F\u0440\u0438\u0433\u043E\u0434\u0438\u0442\u0441\u044F \u043F\u0440\u0438 \u0441\u043C\u0435\u043D\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430. \u041A\u043B\u044E\u0447\u0438 \u0432 \u043A\u043E\u043F\u0438\u044E \u043D\u0435 \u043F\u043E\u043F\u0430\u0434\u0430\u044E\u0442."),
        React.createElement("div", { className: "grid grid-cols-2 gap-2" },
            React.createElement(Button, { variant: "ghost", onClick: exportIt },
                React.createElement(Download, { size: 16, strokeWidth: SW }),
                "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u043E\u043F\u0438\u044E"),
            React.createElement("input", { id: "restore-file", type: "file", accept: "application/json,.json", className: "sr-only", onChange: importIt }),
            React.createElement("label", { htmlFor: "restore-file", className: cx('inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 text-[14px] font-medium transition-all duration-200 active:scale-[0.98]', T.hair, T.fg, 'bg-white hover:bg-[#F7F4EE]') },
                React.createElement(Upload, { size: 16, strokeWidth: SW }),
                "\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C")),
        !confirm
            ? React.createElement("button", { type: "button", onClick: () => setConfirm(true), className: cx('pt-1 text-[13px] font-medium underline decoration-dotted underline-offset-4', T.faint, T.focus) }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0441 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430")
            : (React.createElement("div", { className: cx('anim-rise rounded-2xl p-4', T.seaSoft) },
                React.createElement("p", { className: cx('text-[13px] leading-snug', T.fg) }, "\u0423\u0434\u0430\u043B\u044F\u0442\u0441\u044F \u043A\u043B\u0430\u0434\u043E\u0432\u043A\u0430, \u0440\u0435\u0446\u0435\u043F\u0442\u044B, \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u044C. \u041A\u043B\u044E\u0447\u0438 \u043E\u0441\u0442\u0430\u043D\u0443\u0442\u0441\u044F. \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u0435\u043B\u044C\u0437\u044F."),
                React.createElement("div", { className: "mt-3 flex gap-2" },
                    React.createElement(Button, { variant: "contrast", size: "sm", onClick: () => { setDataAll(() => ({ ...DEFAULT_DATA(), onboarded: true, models: data.models })); setConfirm(false); notify({ Icon: Trash2, text: 'Данные удалены' }); } }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"),
                    React.createElement(Button, { variant: "ghost", size: "sm", onClick: () => setConfirm(false) }, "\u041E\u0442\u043C\u0435\u043D\u0430"))))));
}
function ShareSection({ app }) {
    const share = async () => {
        const url = location.href.split('#')[0];
        const r = await shareText({ title: 'Из холодильника', text: 'Приложение, которое подбирает рецепты из того, что есть дома. Понадобится свой ключ OpenRouter.', url });
        if (r === 'copied')
            app.notify({ Icon: Copy, text: 'Ссылка скопирована' });
    };
    return (React.createElement("div", { className: "space-y-3" },
        React.createElement("p", { className: cx('text-[13px] leading-relaxed', T.mute) }, "\u0414\u0440\u0443\u0433 \u043F\u043E\u043B\u0443\u0447\u0438\u0442 \u043F\u0443\u0441\u0442\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435: \u043D\u0438 \u0432\u0430\u0448\u0438 \u043A\u043B\u044E\u0447\u0438, \u043D\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B, \u043D\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u044B \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435 \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u0441\u044F. \u041F\u0440\u0438 \u043F\u0435\u0440\u0432\u043E\u043C \u0437\u0430\u043F\u0443\u0441\u043A\u0435 \u043E\u043D \u0432\u0441\u0442\u0430\u0432\u0438\u0442 \u0441\u0432\u043E\u0439 \u043A\u043B\u044E\u0447."),
        React.createElement(Button, { variant: "contrast", className: "w-full", onClick: share },
            React.createElement(Share2, { size: 16, strokeWidth: SW }),
            "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0441\u0441\u044B\u043B\u043A\u043E\u0439"),
        React.createElement("div", { className: cx('rounded-2xl p-4 text-[13px] leading-relaxed', T.inset, T.mute) },
            React.createElement("span", { className: cx('font-semibold', T.fg) }, "\u0425\u043E\u0442\u0438\u0442\u0435 \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0442\u044C \u0437\u0430 \u0434\u0440\u0443\u0433\u0430?"),
            " \u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043D\u0430 OpenRouter \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u043A\u043B\u044E\u0447 \u0441 \u043B\u0438\u043C\u0438\u0442\u043E\u043C, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 $3 \u0432 \u043C\u0435\u0441\u044F\u0446, \u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0439\u0442\u0435 \u0435\u0433\u043E \u043B\u0438\u0447\u043D\u043E. \u0415\u0433\u043E \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043E\u0437\u0432\u0430\u0442\u044C \u0432 \u043B\u044E\u0431\u043E\u0439 \u043C\u043E\u043C\u0435\u043D\u0442, \u043D\u0435 \u0442\u0440\u043E\u0433\u0430\u044F \u0441\u0432\u043E\u0439.")));
}
function InstallCard({ app }) {
    const { installEvt, standalone } = app;
    if (standalone)
        return null;
    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
    return (React.createElement("div", { className: cx('flex gap-3 rounded-3xl p-5', T.aSoft) },
        React.createElement("span", { className: cx('grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/70', T.aText) },
            React.createElement(Smartphone, { size: 19, strokeWidth: SW })),
        React.createElement("div", { className: "min-w-0 flex-1" },
            React.createElement("div", { className: cx('text-[15px] font-semibold', T.fg) }, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D"),
            React.createElement("p", { className: cx('mt-1 text-[13px] leading-relaxed', T.mute) }, installEvt ? 'Приложение откроется на весь экран, как обычное.' : ios ? 'В Safari нажмите «Поделиться», затем «На экран „Домой“».' : 'В меню браузера выберите «Установить приложение» или «Добавить на главный экран».'),
            installEvt && React.createElement(Button, { size: "sm", className: "mt-3", onClick: app.install },
                React.createElement(Download, { size: 15, strokeWidth: SW }),
                "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C"))));
}
function SettingsPage({ app, focus, onClose }) {
    useEffect(() => {
        if (!focus)
            return;
        const t = setTimeout(() => { const el = document.getElementById(`set-${focus}`); el && el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 250);
        return () => clearTimeout(t);
    }, [focus]);
    const s = app.data.spent;
    return (React.createElement(Page, { title: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438", onClose: onClose },
        React.createElement("div", { className: "space-y-7" },
            React.createElement(InstallCard, { app: app }),
            React.createElement(Section, { id: "set-keys", title: "\u041A\u043B\u044E\u0447\u0438 OpenRouter", Icon: KeyRound, hint: "\u041A\u043B\u044E\u0447 \u0445\u0440\u0430\u043D\u0438\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u044D\u0442\u043E\u043C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u043D\u0430 \u044D\u0442\u043E\u043C \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435 \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043B\u0438\u0448\u044C \u0432 OpenRouter. \u041C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0438 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u044C\u0441\u044F \u043C\u0435\u0436\u0434\u0443 \u043D\u0438\u043C\u0438." },
                React.createElement(KeysSection, { app: app })),
            React.createElement(Section, { id: "set-models", title: "\u041D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u044C", Icon: Sparkles, hint: "\u0415\u0441\u043B\u0438 \u043E\u0442\u0432\u0435\u0442\u044B \u043A\u0430\u0436\u0443\u0442\u0441\u044F \u0441\u043B\u0430\u0431\u044B\u043C\u0438, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u043E\u0434\u0435\u043B\u044C \u043F\u043E\u0443\u043C\u043D\u0435\u0435. \u0415\u0441\u043B\u0438 \u0434\u043E\u0440\u043E\u0433\u043E, \u043F\u043E\u0434\u0435\u0448\u0435\u0432\u043B\u0435." },
                React.createElement(ModelsSection, { app: app })),
            React.createElement(Section, { id: "set-spent", title: "\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u044D\u0442\u043E\u043C \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435", Icon: Wallet },
                React.createElement("dl", { className: "grid grid-cols-3 gap-2" }, [['В этом месяце', fmtUsd(s.month === addDaysISO(0).slice(0, 7) ? s.monthTotal : 0)], ['Всего', fmtUsd(s.total)], ['Запросов', String(s.requests)]].map(([l, v]) => (React.createElement("div", { key: l, className: cx('rounded-2xl px-3 py-2.5', T.inset) },
                    React.createElement("dt", { className: cx('text-[11px]', T.mute) }, l),
                    React.createElement("dd", { className: cx('mt-0.5 text-[16px] font-semibold tnum', T.fg) }, v))))),
                React.createElement("p", { className: cx('mt-3 text-[12px] leading-snug', T.faint) }, "\u041F\u043E\u0441\u0447\u0438\u0442\u0430\u043D\u043E \u043F\u043E \u043E\u0442\u0432\u0435\u0442\u0430\u043C OpenRouter, \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E. \u0422\u043E\u0447\u043D\u044B\u0439 \u0431\u0430\u043B\u0430\u043D\u0441 \u0432\u0438\u0434\u043D\u043E \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u043A\u043B\u044E\u0447\u0435\u0439 \u0438 \u043D\u0430 openrouter.ai.")),
            React.createElement(Section, { id: "set-profile", title: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u0441\u0435\u043C\u044C\u0438", Icon: Users },
                React.createElement(ProfileSection, { app: app })),
            React.createElement(Section, { id: "set-share", title: "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0441 \u0434\u0440\u0443\u0437\u044C\u044F\u043C\u0438", Icon: Share2 },
                React.createElement(ShareSection, { app: app })),
            React.createElement(Section, { id: "set-data", title: "\u0414\u0430\u043D\u043D\u044B\u0435 \u0438 \u043A\u043E\u043F\u0438\u044F", Icon: HardDrive },
                React.createElement(DataSection, { app: app })),
            React.createElement("p", { className: cx('text-center text-[12px]', T.faint) },
                "\u0418\u0437 \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A\u0430 \u00B7 \u0432\u0435\u0440\u0441\u0438\u044F ",
                APP_VERSION))));
}
function Onboarding({ app, onDone }) {
    const [added, setAdded] = useState(false);
    return (React.createElement("div", { className: cx('anim-fade fixed inset-0 z-50 overflow-y-auto', T.page) },
        React.createElement("div", { className: "mx-auto max-w-md px-5 pb-[calc(40px+env(safe-area-inset-bottom,0px))] pt-[calc(env(safe-area-inset-top,0px)+36px)]" },
            React.createElement("span", { className: cx('grid h-14 w-14 place-items-center rounded-2xl', T.aSolid) },
                React.createElement(ChefHat, { size: 28, strokeWidth: SW })),
            React.createElement("h1", { className: cx('mt-6 text-[34px] font-semibold leading-[1.05] tracking-tight', T.fg) }, "\u0418\u0437 \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A\u0430"),
            React.createElement("p", { className: cx('mt-3 text-[16px] leading-relaxed', T.mute) }, "\u041F\u043E\u0434\u0431\u0435\u0440\u0443 \u0440\u0435\u0446\u0435\u043F\u0442 \u0438\u0437 \u0442\u043E\u0433\u043E, \u0447\u0442\u043E \u0435\u0441\u0442\u044C \u0434\u043E\u043C\u0430, \u043F\u043E\u0434\u0441\u043A\u0430\u0436\u0443 \u0437\u0430\u043C\u0435\u043D\u044B \u0438 \u0447\u0442\u043E \u0434\u043E\u043A\u0443\u043F\u0438\u0442\u044C."),
            React.createElement("ol", { className: "mt-8 space-y-4" }, [
                ['Зарегистрируйтесь на OpenRouter', 'Это сервис, через который приложение обращается к нейросетям. Платите только за запросы, без подписки.'],
                ['Пополните баланс и создайте ключ', 'В настройках ключа поставьте лимит, например $5 в месяц. Так точно не потратится больше.'],
                ['Вставьте ключ ниже', 'Он сохранится только на этом телефоне.'],
            ].map(([t, d], i) => (React.createElement("li", { key: i, className: "flex gap-4" },
                React.createElement("span", { className: cx('grid h-8 w-8 shrink-0 place-items-center rounded-full border bg-white text-[13px] font-semibold tnum', T.hair, T.aText) }, i + 1),
                React.createElement("div", { className: "min-w-0 pt-1" },
                    React.createElement("div", { className: cx('text-[15px] font-semibold', T.fg) }, t),
                    React.createElement("p", { className: cx('mt-0.5 text-[14px] leading-relaxed', T.mute) }, d)))))),
            React.createElement("a", { href: "https://openrouter.ai/settings/keys", target: "_blank", rel: "noopener noreferrer", className: cx('mt-5 inline-flex h-11 items-center gap-2 rounded-xl border bg-white px-4 text-[14px] font-medium transition-all duration-200 hover:bg-[#F7F4EE]', T.hair, T.fg, T.focus) },
                React.createElement(ExternalLink, { size: 15, strokeWidth: SW }),
                "\u041E\u0442\u043A\u0440\u044B\u0442\u044C openrouter.ai"),
            React.createElement("div", { className: cx('mt-8 p-5', T.card) }, added ? (React.createElement("div", { className: "anim-rise text-center" },
                React.createElement("span", { className: cx('mx-auto grid h-12 w-12 place-items-center rounded-2xl', T.aSoft, T.aText) },
                    React.createElement(CircleCheck, { size: 24, strokeWidth: SW })),
                React.createElement("div", { className: cx('mt-3 text-[17px] font-semibold', T.fg) }, "\u041A\u043B\u044E\u0447 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),
                React.createElement("p", { className: cx('mt-1 text-[14px]', T.mute) }, "\u041C\u043E\u0434\u0435\u043B\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438, \u0435\u0451 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043C\u0435\u043D\u044F\u0442\u044C \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445."),
                React.createElement(Button, { size: "lg", className: "mt-5 w-full", onClick: onDone }, "\u041D\u0430\u0447\u0430\u0442\u044C"))) : (React.createElement(AddKeyForm, { compact: true, existing: app.keys.list, onAdded: (k, info) => {
                    app.setKeys((s) => ({ list: [...s.list, { ...k, name: 'Мой ключ' }], active: k.id }));
                    if (info)
                        app.setKeyInfo((m) => ({ ...m, [k.id]: info }));
                    app.ensureModels(k.key);
                    setAdded(true);
                } }))),
            !added && React.createElement("button", { type: "button", onClick: onDone, className: cx('mx-auto mt-5 block text-[14px] font-medium underline decoration-dotted underline-offset-4', T.mute, T.focus) }, "\u041F\u043E\u0437\u0436\u0435, \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u044E"))));
}
const APP_VERSION = '1.0.0';
const TABS = [
    { id: 'cook', label: 'Готовим', Icon: ChefHat },
    { id: 'pantry', label: 'Кладовка', Icon: Refrigerator },
    { id: 'book', label: 'Рецепты', Icon: BookOpenText },
    { id: 'shop', label: 'Покупки', Icon: ShoppingBasket },
];
function App() {
    const [data, setData] = useState(loadData);
    const [keys, setKeys] = useState(loadKeys);
    const [keyInfo, setKeyInfo] = useState({});
    const [catalog, setCatalog] = useState(() => { const c = lsGet(LS_MODELS); return c && Array.isArray(c.list) ? c.list : null; });
    const [catalogLoading, setCatalogLoading] = useState(false);
    const [tab, setTab] = useState(() => { const h = (location.hash || '').slice(1); return TABS.some((t) => t.id === h) ? h : 'cook'; });
    const [island, setIsland] = useState(null);
    const [sheet, setSheet] = useState(null);
    const [page, setPage] = useState(null);
    const [cooking, setCooking] = useState(null);
    const [online, setOnline] = useState(() => navigator.onLine !== false);
    const [installEvt, setInstallEvt] = useState(null);
    const islandTimer = useRef(null);
    const cfgRef = useRef({});
    const standalone = (() => { try {
        return window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
    }
    catch (e) {
        return false;
    } })();
    useEffect(() => { const t = setTimeout(() => saveData(data), 200); return () => clearTimeout(t); }, [data]);
    useEffect(() => { saveKeys(keys); }, [keys]);
    useEffect(() => {
        requestPersistence();
        const on = () => setOnline(true), off = () => setOnline(false);
        const bip = (e) => { e.preventDefault(); setInstallEvt(e); };
        window.addEventListener('online', on);
        window.addEventListener('offline', off);
        window.addEventListener('beforeinstallprompt', bip);
        const save = () => saveData(dataRef.current);
        window.addEventListener('pagehide', save);
        document.addEventListener('visibilitychange', save);
        return () => { window.removeEventListener('online', on); window.removeEventListener('offline', off); window.removeEventListener('beforeinstallprompt', bip); window.removeEventListener('pagehide', save); document.removeEventListener('visibilitychange', save); };
    }, []);
    const dataRef = useRef(data);
    dataRef.current = data;
    const activeKey = keys.list.find((k) => k.id === keys.active) || keys.list[0] || null;
    const findModel = (id) => (catalog || []).find((m) => m.id === id) || null;
    cfgRef.current = { key: activeKey && activeKey.key, text: data.models.text, photo: data.models.photo || data.models.text, textInfo: findModel(data.models.text), photoInfo: findModel(data.models.photo || data.models.text) };
    const ai = useMemo(() => makeAI(() => cfgRef.current), []);
    const update = (fn) => setData((d) => fn(d));
    const setter = (field) => (fn) => setData((d) => ({ ...d, [field]: typeof fn === 'function' ? fn(d[field]) : fn }));
    const setPantry = setter('pantry'), setShop = setter('shop'), setBook = setter('book');
    const notify = (n) => {
        clearTimeout(islandTimer.current);
        if (!n)
            return setIsland(null);
        setIsland({ Icon: Check, ...n, k: Date.now() });
        if (!n.sticky)
            islandTimer.current = setTimeout(() => setIsland(null), n.undo ? 4500 : n.long ? 5500 : 2800);
    };
    const loadCatalog = async (force) => {
        setCatalogLoading(true);
        try {
            const list = await loadModels(force);
            setCatalog(list);
            return list;
        }
        catch (e) {
            return null;
        }
        finally {
            setCatalogLoading(false);
        }
    };
    const ensureModels = async () => {
        const cur = dataRef.current.models;
        if (cur.text && cur.photo && catalog)
            return cur;
        const list = catalog || (await loadCatalog());
        if (!list)
            return cur;
        const rec = recommendModels(list);
        const next = {
            text: cur.text || (rec.economy && rec.economy.id) || null,
            photo: cur.photo || (rec.economy && hasImage(rec.economy) ? rec.economy.id : (list.find(hasImage) || {}).id) || null,
        };
        dataRef.current = { ...dataRef.current, models: next };
        update((x) => ({ ...x, models: { text: x.models.text || next.text, photo: x.models.photo || next.photo } }));
        return next;
    };
    useEffect(() => { if (activeKey && (!data.models.text || !catalog))
        ensureModels(); }, [activeKey && activeKey.id]);
    const run = async (label, fn, opts = {}) => {
        if (!cfgRef.current.key)
            return { error: new AIError('no_key', ERR_TEXT.no_key) };
        if (!cfgRef.current.text) {
            const m = await ensureModels();
            if (!m || !m.text)
                return { error: new AIError('model', 'Не удалось выбрать модель автоматически: нет связи с OpenRouter. Проверьте интернет или выберите модель в настройках.') };
            cfgRef.current = { ...cfgRef.current, text: m.text, photo: m.photo || m.text };
        }
        if (!opts.quiet)
            notify({ loading: true, text: `${label}…`, sticky: true });
        try {
            const r = await fn();
            const month = addDaysISO(0).slice(0, 7);
            update((d) => ({ ...d, spent: { total: d.spent.total + (r.cost || 0), month, monthTotal: (d.spent.month === month ? d.spent.monthTotal : 0) + (r.cost || 0), requests: d.spent.requests + 1 } }));
            notify({ Icon: Sparkles, text: `${label}: готово${r.cost ? ` · ≈${fmtUsd(r.cost)}` : ''}` });
            return { data: r.data, cost: r.cost };
        }
        catch (e) {
            const err = e instanceof AIError ? e : new AIError('server', (e && e.message) || ERR_TEXT.server);
            if ((err.code === 'bad_key' || err.code === 'no_credits') && activeKey)
                setKeyInfo((m) => ({ ...m, [activeKey.id]: { error: err.message, code: err.code, checkedAt: Date.now() } }));
            if (!opts.quiet)
                notify(null);
            else if (err.code !== 'cancelled')
                setIsland(null);
            return { error: err };
        }
    };
    const go = (id) => { setTab(id); try {
        history.replaceState(null, '', `#${id}`);
    }
    catch (e) { } window.scrollTo({ top: 0 }); };
    const inShop = (n) => data.shop.some((x) => !x.done && norm(x.name) === norm(n));
    const addToShop = (items, from) => {
        const fresh = items.filter((i) => !inShop(i.name));
        if (!fresh.length)
            return notify({ Icon: ShoppingBasket, text: 'Уже в списке покупок' });
        setShop((s) => [...fresh.map((i) => ({ id: uid('s'), name: i.name, amt: i.amt || '', from: from || null, done: false })), ...s]);
        notify({ Icon: ShoppingBasket, text: `В покупки: ${fresh.map((i) => low(i.name)).join(', ')}` });
    };
    const savedByName = (n) => data.book.find((e) => norm(e.recipe.name) === norm(n)) || null;
    const saveRecipe = (r) => {
        if (savedByName(r.name))
            return;
        setBook((b) => [{ id: uid('r'), recipe: r, rating: 0, note: '', savedAt: Date.now() }, ...b]);
        notify({ Icon: BookmarkCheck, text: `«${r.name}» в книге` });
    };
    const removePantry = (p) => {
        setPantry((list) => list.filter((x) => x.id !== p.id));
        notify({ Icon: Trash2, text: `Убрано: ${low(p.name)}`, undo: () => setPantry((list) => [p, ...list]) });
    };
    const moveBoughtToPantry = () => {
        const done = data.shop.filter((x) => x.done);
        setShop((s) => s.filter((x) => !x.done));
        setPantry((p) => [...done.map((x) => ({ id: uid('p'), name: x.name, qty: x.amt || '', cat: guessCat(x.name), exp: null, added: Date.now() })), ...p.filter((y) => !done.some((x) => norm(x.name) === norm(y.name)))]);
        notify({ Icon: Refrigerator, text: `В кладовке: ${done.map((x) => low(x.name)).join(', ')}` });
    };
    const cookByName = (name) => { update((d) => ({ ...d, cook: { ...d.cook, wish: name, pending: { kind: 'recipe', wish: name } } })); go('cook'); };
    const cookFromPantry = () => { update((d) => ({ ...d, cook: { ...d.cook, wish: '', pending: { kind: 'list', type: '__expiring' } } })); go('cook'); };
    const openSettings = (focus) => setPage({ type: 'settings', focus: typeof focus === 'string' ? focus : null });
    const install = async () => { if (!installEvt)
        return; installEvt.prompt(); try {
        await installEvt.userChoice;
    }
    catch (e) { } setInstallEvt(null); };
    const app = {
        data, update, setDataAll: setData, keys, setKeys, keyInfo, setKeyInfo, catalog, loadCatalog, catalogLoading, ensureModels,
        pantry: data.pantry, setPantry, shop: data.shop, setShop, book: data.book, profile: data.profile,
        ai, run, notify, go, inShop, addToShop, saveRecipe, savedByName, removePantry, moveBoughtToPantry, cookByName, cookFromPantry,
        startCooking: (recipe, portions) => { notify(null); setCooking({ recipe, portions }); },
        openSettings, openSheet: (s) => setSheet(s), openBookEntry: (id) => setPage({ type: 'book', id }),
        updateBook: (id, p) => setBook((b) => b.map((e) => (e.id === id ? { ...e, ...p } : e))),
        removeBook: (id) => { setBook((b) => b.filter((e) => e.id !== id)); notify({ Icon: Trash2, text: 'Убрано из книги' }); },
        hasKey: !!activeKey, installEvt, install, standalone,
    };
    const shopLeft = data.shop.filter((x) => !x.done).length;
    const tabIdx = TABS.findIndex((t) => t.id === tab);
    const today = new Date().toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' });
    const soonN = data.pantry.filter((p) => { const d = daysLeft(p.exp); return d != null && d <= 2; }).length;
    const headers = {
        cook: [cap(today), 'Готовим'],
        pantry: [`${data.pantry.length} ${plural(data.pantry.length, 'продукт', 'продукта', 'продуктов')}${soonN ? ` · ${soonN} скоро испортится` : ''}`, 'Кладовка'],
        book: [`${data.book.length} ${plural(data.book.length, 'рецепт', 'рецепта', 'рецептов')}`, 'Рецепты'],
        shop: [shopLeft ? `${shopLeft} к покупке` : 'Всё куплено', 'Покупки'],
    };
    const bookEntry = page && page.type === 'book' ? data.book.find((e) => e.id === page.id) : null;
    return (React.createElement("div", { className: cx('min-h-full font-sans antialiased', T.page, T.fg) },
        React.createElement(Island, { island: island, onUndo: () => { island && island.undo && island.undo(); notify(null); } }),
        React.createElement("main", { className: "mx-auto max-w-md px-5 pb-[calc(120px+env(safe-area-inset-bottom,0px))] pt-[calc(env(safe-area-inset-top,0px)+8px)]" },
            React.createElement(LargeTitle, { eyebrow: headers[tab][0], title: headers[tab][1], right: React.createElement(React.Fragment, null,
                    !online && React.createElement("span", { className: cx('inline-flex h-10 items-center gap-1.5 rounded-full px-3 text-[12px] font-medium', T.seaSoft, T.sea) },
                        React.createElement(WifiOff, { size: 14, strokeWidth: SW }),
                        "\u041E\u0444\u043B\u0430\u0439\u043D"),
                    React.createElement(IconButton, { label: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438", onClick: () => openSettings() },
                        React.createElement(Settings, { size: 18, strokeWidth: SW }))) }),
            React.createElement("div", { key: tab, className: "anim-tab" },
                tab === 'cook' && React.createElement(CookTab, { app: app }),
                tab === 'pantry' && React.createElement(PantryTab, { app: app }),
                tab === 'book' && React.createElement(BookTab, { app: app }),
                tab === 'shop' && React.createElement(ShopTab, { app: app }))),
        React.createElement("nav", { "aria-label": "\u0420\u0430\u0437\u0434\u0435\u043B\u044B", className: "fixed inset-x-0 bottom-0 z-30 px-4 pb-[calc(env(safe-area-inset-bottom,0px)+12px)]" },
            React.createElement("div", { className: cx('relative mx-auto grid max-w-md grid-cols-4 rounded-[26px] border p-1.5 backdrop-blur-2xl', T.hair, 'bg-white/85 shadow-[0_12px_32px_-12px_rgba(45,71,57,0.18)]') },
                React.createElement("span", { className: "absolute bottom-1.5 left-1.5 top-1.5 rounded-[20px] bg-[#E7EEE6] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]", style: { width: 'calc((100% - 12px) / 4)', transform: `translateX(${tabIdx * 100}%)` } }),
                TABS.map((t) => {
                    const active = tab === t.id;
                    return (React.createElement("button", { key: t.id, type: "button", onClick: () => go(t.id), "aria-current": active ? 'page' : undefined, "aria-label": t.id === 'shop' && shopLeft ? `${t.label}, ${shopLeft} к покупке` : t.label, className: cx('relative z-10 flex h-[54px] flex-col items-center justify-center gap-1 rounded-[20px] text-[11px] font-medium transition-all duration-200 active:scale-95', T.focus, active ? T.aText : cx(T.faint, 'hover:text-[#35504E]')) },
                        React.createElement("span", { className: "relative" },
                            React.createElement(t.Icon, { size: 22, strokeWidth: active ? 2 : SW }),
                            t.id === 'shop' && shopLeft > 0 && React.createElement("span", { key: shopLeft, className: "anim-pop absolute -right-2.5 -top-1.5 grid h-[17px] min-w-[17px] place-items-center rounded-full bg-[#2F6464] px-1 text-[10px] font-bold text-[#FBF9F5] tnum" }, shopLeft)),
                        t.label));
                }))),
        page && page.type === 'settings' && React.createElement(SettingsPage, { app: app, focus: page.focus, onClose: () => setPage(null) }),
        bookEntry && React.createElement(Page, { title: bookEntry.recipe.name, onClose: () => setPage(null) },
            React.createElement(BookEntryPage, { app: app, entry: bookEntry, onClose: () => setPage(null) })),
        React.createElement(Sheet, { open: !!sheet, onClose: () => setSheet(null), title: sheet ? sheet.title : '' }, sheet && sheet.render(() => setSheet(null))),
        cooking && (React.createElement(CookingMode, { recipe: cooking.recipe, portions: cooking.portions, pantry: data.pantry, saved: !!savedByName(cooking.recipe.name), onClose: () => setCooking(null), onSave: () => saveRecipe(cooking.recipe), onUseUp: (items) => {
                if (items.length) {
                    setPantry((p) => p.filter((x) => !items.some((i) => i.id === x.id)));
                    notify({ Icon: Check, text: `Списано: ${items.map((i) => low(i.name)).join(', ')}` });
                }
                setCooking(null);
            } })),
        !data.onboarded && React.createElement(Onboarding, { app: app, onDone: () => update((d) => ({ ...d, onboarded: true })) })));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
