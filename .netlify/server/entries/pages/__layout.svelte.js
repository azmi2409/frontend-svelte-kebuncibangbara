var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => _layout
});
var import_index_6229fc34 = __toModule(require("../../chunks/index-6229fc34.js"));
var import_stores_0457393c = __toModule(require("../../chunks/stores-0457393c.js"));
var Header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');header.svelte-eg5t8i{font-family:'Roboto Mono', serif;padding-left:12% !important;padding-right:12% !important}#sticky.svelte-eg5t8i{background:rgb(211, 222, 220,0.4);backdrop-filter:blur(10px)}#logo.svelte-eg5t8i{height:100px;width:auto;cursor:pointer;transition:all 0.5s ease}#logo-sticky.svelte-eg5t8i{max-height:50px;width:auto;cursor:pointer;transition:all 0.5s ease}.nav-link.svelte-eg5t8i{color:#434343}.nav-link.svelte-eg5t8i:hover{color:#F05454}",
  map: null
};
const Header = (0, import_index_6229fc34.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_6229fc34.a)(import_stores_0457393c.p, (value) => $page = value);
  $$result.css.add(css$3);
  $page.url.pathname;
  $$unsubscribe_page();
  return `

<header${(0, import_index_6229fc34.b)("id", "header", 0)} class="${"navbar navbar-expand justify-content-between flex-column flex-md-row p-0 my-0 px-lg-5 " + (0, import_index_6229fc34.e)("") + " svelte-eg5t8i"}"><a class="${"navbar navbar-brand"}" href="${"/"}"><img class="${"d-block align-self-auto svelte-eg5t8i"}"${(0, import_index_6229fc34.b)("id", "logo", 0)} alt="${"logo"}"${(0, import_index_6229fc34.b)("src", "/logo-big.png", 0)}></a>
	<div class="${"navbar-nav-sroll"}"><ul class="${"navbar-nav flex-row"}"><li class="${"nav-item"}"><a class="${"nav-link active svelte-eg5t8i"}" href="${"/"}">Home</a></li>
			<li class="${"nav-item"}"><a class="${"nav-link svelte-eg5t8i"}" href="${"/"}">Account</a></li></ul></div>
</header>`;
});
var Footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');footer.svelte-132mm7o.svelte-132mm7o{bottom:0}h6.svelte-132mm7o.svelte-132mm7o,a.svelte-132mm7o.svelte-132mm7o{font-family:'Roboto Mono',serif;color:#434343;text-decoration:none}h6.svelte-132mm7o>a.svelte-132mm7o:hover{color:#F05454}",
  map: null
};
const Footer = (0, import_index_6229fc34.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<footer class="${"d-flex justify-content-center align-items-center py-3 svelte-132mm7o"}"><h6 class="${"svelte-132mm7o"}">Copyright \xA9 2022 <a href="${"https://azmi.web.id"}" target="${"_blank"}" class="${"svelte-132mm7o"}">azmi.web.id</a></h6>
</footer>`;
});
var Circle_svelte_svelte_type_style_lang = "";
var Circle2_svelte_svelte_type_style_lang = "";
var Circle3_svelte_svelte_type_style_lang = "";
var DoubleBounce_svelte_svelte_type_style_lang = "";
var GoogleSpin_svelte_svelte_type_style_lang = "";
var ScaleOut_svelte_svelte_type_style_lang = "";
var SpinLine_svelte_svelte_type_style_lang = "";
var Stretch_svelte_svelte_type_style_lang = "";
var BarLoader_svelte_svelte_type_style_lang = "";
var Jumper_svelte_svelte_type_style_lang = "";
var RingLoader_svelte_svelte_type_style_lang = "";
var SyncLoader_svelte_svelte_type_style_lang = "";
var Rainbow_svelte_svelte_type_style_lang = "";
var Wave_svelte_svelte_type_style_lang = "";
var Firework_svelte_svelte_type_style_lang = "";
var Pulse_svelte_svelte_type_style_lang = "";
var Jellyfish_svelte_svelte_type_style_lang = "";
var Chasing_svelte_svelte_type_style_lang = "";
var Shadow_svelte_svelte_type_style_lang = "";
var Square_svelte_svelte_type_style_lang = "";
var Moon_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".wrapper.svelte-nlgli4{height:var(--size);width:var(--size);border-radius:100%;animation:svelte-nlgli4-moonStretchDelay var(--duration) 0s infinite linear;animation-fill-mode:forwards;position:relative}.circle-one.svelte-nlgli4{top:var(--moonSize);background-color:var(--color);width:calc(var(--size) / 7);height:calc(var(--size) / 7);border-radius:100%;animation:svelte-nlgli4-moonStretchDelay var(--duration) 0s infinite linear;animation-fill-mode:forwards;opacity:0.8;position:absolute}.circle-two.svelte-nlgli4{opacity:0.1;border:calc(var(--size) / 7) solid var(--color);height:var(--size);width:var(--size);border-radius:100%;box-sizing:border-box}@keyframes svelte-nlgli4-moonStretchDelay{100%{transform:rotate(360deg)}}",
  map: null
};
const Moon = (0, import_index_6229fc34.c)(($$result, $$props, $$bindings, slots) => {
  let { color = "#FF3E00" } = $$props;
  let { unit = "px" } = $$props;
  let { duration = "0.6s" } = $$props;
  let { size = "60" } = $$props;
  let moonSize = +size / 7;
  let top = +size / 2 - moonSize / 2;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$1);
  return `<div class="${"wrapper svelte-nlgli4"}" style="${"--size: " + (0, import_index_6229fc34.e)(size) + (0, import_index_6229fc34.e)(unit) + "; --color: " + (0, import_index_6229fc34.e)(color) + "; --moonSize: " + (0, import_index_6229fc34.e)(top) + (0, import_index_6229fc34.e)(unit) + "; --duration: " + (0, import_index_6229fc34.e)(duration) + ";"}"><div class="${"circle-one svelte-nlgli4"}"></div>
  <div class="${"circle-two svelte-nlgli4"}"></div></div>`;
});
var Plane_svelte_svelte_type_style_lang = "";
var Diamonds_svelte_svelte_type_style_lang = "";
var Clock_svelte_svelte_type_style_lang = "";
const Loading = (0, import_index_6229fc34.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"d-flex align-items-center justify-content-center"}" style="${"height: 100vh;"}">${(0, import_index_6229fc34.v)(Moon, "Moon").$$render($$result, {
    color: "black",
    size: "250",
    unit: "px",
    duration: "1s"
  }, {}, {})}</div>`;
});
var bootstrap_min = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');body{font-family:'Lato', sans-serif !important;background-color:EFEFEF}",
  map: null
};
const _layout = (0, import_index_6229fc34.c)(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_navigating = (0, import_index_6229fc34.a)(import_stores_0457393c.n, (value) => $navigating = value);
  let loading = false;
  async function loadSpinner() {
    loading = true;
    const timeout = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };
    await timeout(3e3);
    loading = false;
  }
  $$result.css.add(css);
  {
    if ($navigating) {
      loadSpinner();
    }
  }
  $$unsubscribe_navigating();
  return `${(0, import_index_6229fc34.v)(Header, "Header").$$render($$result, {}, {}, {})}
<main class="${"container-fluid container-lg my-3 mx-auto py-2"}">${loading ? `${(0, import_index_6229fc34.v)(Loading, "Loading").$$render($$result, {}, {}, {})}` : `${slots.default ? slots.default({}) : ``}`}</main>
${(0, import_index_6229fc34.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
