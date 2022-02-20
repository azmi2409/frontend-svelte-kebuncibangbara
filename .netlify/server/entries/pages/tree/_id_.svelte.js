var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
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
  default: () => U5Bidu5D,
  load: () => load
});
var import_index_6229fc34 = __toModule(require("../../../chunks/index-6229fc34.js"));
var import_trees_117503be = __toModule(require("../../../chunks/trees-117503be.js"));
var import_stores_0457393c = __toModule(require("../../../chunks/stores-0457393c.js"));
var import_moment = __toModule(require("moment"));
var import_html2canvas = __toModule(require("html2canvas"));
const Figure = (0, import_index_6229fc34.c)(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = (0, import_index_6229fc34.d)($$props, ["class", "alt", "caption"]);
  let $$slots = (0, import_index_6229fc34.y)(slots);
  (0, import_index_6229fc34.s)("figure", true);
  let { class: className = "" } = $$props;
  let { alt = void 0 } = $$props;
  let { caption = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
    $$bindings.caption(caption);
  classes = (0, import_trees_117503be.c)("figure", className);
  return `<img${(0, import_index_6229fc34.f)([
    { alt: (0, import_index_6229fc34.i)(alt) },
    (0, import_index_6229fc34.h)($$restProps),
    { class: (0, import_index_6229fc34.i)(classes) }
  ], {})}>

<figure${(0, import_index_6229fc34.f)([{ class: (0, import_index_6229fc34.i)(classes) }, (0, import_index_6229fc34.h)($$restProps)], {})}>${slots.default ? slots.default({}) : ``}
  ${caption || $$slots.caption ? `<figcaption class="${"figure-caption"}">${(0, import_index_6229fc34.e)(caption)}${slots.caption ? slots.caption({}) : ``}</figcaption>` : ``}</figure>`;
});
const Image = (0, import_index_6229fc34.c)(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = (0, import_index_6229fc34.d)($$props, ["class", "alt", "figure", "fluid", "thumbnail"]);
  let { class: className = "" } = $$props;
  let { alt = void 0 } = $$props;
  let { figure = (0, import_index_6229fc34.g)("figure") } = $$props;
  let { fluid = false } = $$props;
  let { thumbnail = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.figure === void 0 && $$bindings.figure && figure !== void 0)
    $$bindings.figure(figure);
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0)
    $$bindings.fluid(fluid);
  if ($$props.thumbnail === void 0 && $$bindings.thumbnail && thumbnail !== void 0)
    $$bindings.thumbnail(thumbnail);
  classes = (0, import_trees_117503be.c)(className, {
    "figure-img": figure,
    "img-fluid": fluid,
    "img-thumbnail": thumbnail
  });
  return `<img${(0, import_index_6229fc34.f)([
    { alt: (0, import_index_6229fc34.i)(alt) },
    (0, import_index_6229fc34.h)($$restProps),
    { class: (0, import_index_6229fc34.i)(classes) }
  ], {})}>`;
});
const InlineContainer = (0, import_index_6229fc34.c)(($$result, $$props, $$bindings, slots) => {
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const ModalBackdrop = (0, import_index_6229fc34.c)(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = (0, import_index_6229fc34.d)($$props, ["class", "isOpen", "fade"]);
  let { class: className = "" } = $$props;
  let { isOpen = false } = $$props;
  let { fade = true } = $$props;
  let loaded = false;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.fade === void 0 && $$bindings.fade && fade !== void 0)
    $$bindings.fade(fade);
  classes = (0, import_trees_117503be.c)(className, "modal-backdrop");
  return `${isOpen && loaded ? `<div${(0, import_index_6229fc34.f)([(0, import_index_6229fc34.h)($$restProps), { class: (0, import_index_6229fc34.i)(classes) }], { classes: fade ? "fade" : "" })}></div>` : ``}`;
});
const ModalBody = (0, import_index_6229fc34.c)(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = (0, import_index_6229fc34.d)($$props, ["class"]);
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  classes = (0, import_trees_117503be.c)(className, "modal-body");
  return `<div${(0, import_index_6229fc34.f)([(0, import_index_6229fc34.h)($$restProps), { class: (0, import_index_6229fc34.i)(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
const ModalHeader = (0, import_index_6229fc34.c)(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = (0, import_index_6229fc34.d)($$props, ["class", "toggle", "closeAriaLabel", "children", "id"]);
  let { class: className = "" } = $$props;
  let { toggle = void 0 } = $$props;
  let { closeAriaLabel = "Close" } = $$props;
  let { children = void 0 } = $$props;
  let { id = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.closeAriaLabel === void 0 && $$bindings.closeAriaLabel && closeAriaLabel !== void 0)
    $$bindings.closeAriaLabel(closeAriaLabel);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  classes = (0, import_trees_117503be.c)(className, "modal-header");
  return `<div${(0, import_index_6229fc34.f)([(0, import_index_6229fc34.h)($$restProps), { class: (0, import_index_6229fc34.i)(classes) }], {})}><h5 class="${"modal-title"}"${(0, import_index_6229fc34.b)("id", id, 0)}>${children ? `${(0, import_index_6229fc34.e)(children)}` : `${slots.default ? slots.default({}) : ``}`}</h5>
  ${slots.close ? slots.close({}) : `
    ${typeof toggle === "function" ? `<button type="${"button"}" class="${"btn-close"}"${(0, import_index_6229fc34.b)("aria-label", closeAriaLabel, 0)}></button>` : ``}
  `}</div>`;
});
const Portal = (0, import_index_6229fc34.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_6229fc34.d)($$props, []);
  let ref;
  let portal;
  (0, import_index_6229fc34.r)(() => {
    if (typeof document !== "undefined") {
      document.body.removeChild(portal);
    }
  });
  return `<div${(0, import_index_6229fc34.f)([(0, import_index_6229fc34.h)($$restProps)], {})}${(0, import_index_6229fc34.b)("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const css$1 = {
  code: ".modal-open{overflow:hidden;padding-right:0}",
  map: null
};
const dialogBaseClass = "modal-dialog";
const Modal = (0, import_index_6229fc34.c)(($$result, $$props, $$bindings, slots) => {
  let outer;
  (0, import_index_6229fc34.d)($$props, [
    "class",
    "static",
    "isOpen",
    "autoFocus",
    "body",
    "centered",
    "container",
    "fullscreen",
    "header",
    "scrollable",
    "size",
    "toggle",
    "labelledBy",
    "backdrop",
    "wrapClassName",
    "modalClassName",
    "contentClassName",
    "fade",
    "unmountOnClose",
    "returnFocusAfterClose"
  ]);
  (0, import_index_6229fc34.z)();
  let { class: className = "" } = $$props;
  let { static: staticModal = false } = $$props;
  let { isOpen = false } = $$props;
  let { autoFocus = true } = $$props;
  let { body = false } = $$props;
  let { centered = false } = $$props;
  let { container = void 0 } = $$props;
  let { fullscreen = false } = $$props;
  let { header = void 0 } = $$props;
  let { scrollable = false } = $$props;
  let { size = "" } = $$props;
  let { toggle = void 0 } = $$props;
  let { labelledBy = header ? `modal-${(0, import_trees_117503be.u)()}` : void 0 } = $$props;
  let { backdrop = true } = $$props;
  let { wrapClassName = "" } = $$props;
  let { modalClassName = "" } = $$props;
  let { contentClassName = "" } = $$props;
  let { fade = true } = $$props;
  let { unmountOnClose = true } = $$props;
  let { returnFocusAfterClose = true } = $$props;
  (0, import_index_6229fc34.r)(() => {
  });
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.static === void 0 && $$bindings.static && staticModal !== void 0)
    $$bindings.static(staticModal);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.autoFocus === void 0 && $$bindings.autoFocus && autoFocus !== void 0)
    $$bindings.autoFocus(autoFocus);
  if ($$props.body === void 0 && $$bindings.body && body !== void 0)
    $$bindings.body(body);
  if ($$props.centered === void 0 && $$bindings.centered && centered !== void 0)
    $$bindings.centered(centered);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.fullscreen === void 0 && $$bindings.fullscreen && fullscreen !== void 0)
    $$bindings.fullscreen(fullscreen);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.scrollable === void 0 && $$bindings.scrollable && scrollable !== void 0)
    $$bindings.scrollable(scrollable);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.labelledBy === void 0 && $$bindings.labelledBy && labelledBy !== void 0)
    $$bindings.labelledBy(labelledBy);
  if ($$props.backdrop === void 0 && $$bindings.backdrop && backdrop !== void 0)
    $$bindings.backdrop(backdrop);
  if ($$props.wrapClassName === void 0 && $$bindings.wrapClassName && wrapClassName !== void 0)
    $$bindings.wrapClassName(wrapClassName);
  if ($$props.modalClassName === void 0 && $$bindings.modalClassName && modalClassName !== void 0)
    $$bindings.modalClassName(modalClassName);
  if ($$props.contentClassName === void 0 && $$bindings.contentClassName && contentClassName !== void 0)
    $$bindings.contentClassName(contentClassName);
  if ($$props.fade === void 0 && $$bindings.fade && fade !== void 0)
    $$bindings.fade(fade);
  if ($$props.unmountOnClose === void 0 && $$bindings.unmountOnClose && unmountOnClose !== void 0)
    $$bindings.unmountOnClose(unmountOnClose);
  if ($$props.returnFocusAfterClose === void 0 && $$bindings.returnFocusAfterClose && returnFocusAfterClose !== void 0)
    $$bindings.returnFocusAfterClose(returnFocusAfterClose);
  $$result.css.add(css$1);
  (0, import_trees_117503be.c)(dialogBaseClass, className, {
    [`modal-${size}`]: size,
    "modal-fullscreen": fullscreen === true,
    [`modal-fullscreen-${fullscreen}-down`]: fullscreen && typeof fullscreen === "string",
    [`${dialogBaseClass}-centered`]: centered,
    [`${dialogBaseClass}-scrollable`]: scrollable
  });
  outer = container === "inline" || staticModal ? InlineContainer : Portal;
  return `${``}
${backdrop && !staticModal ? `${(0, import_index_6229fc34.v)(outer || import_index_6229fc34.m, "svelte:component").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_index_6229fc34.v)(ModalBackdrop, "ModalBackdrop").$$render($$result, { fade, isOpen }, {}, {})}`;
    }
  })}` : ``}`;
});
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const TableLog = (0, import_index_6229fc34.c)(($$result, $$props, $$bindings, slots) => {
  let $treeLogs, $$unsubscribe_treeLogs;
  $$unsubscribe_treeLogs = (0, import_index_6229fc34.a)(import_trees_117503be.a, (value) => $treeLogs = value);
  let { reload = false } = $$props;
  async function loadLogs() {
    try {
      await timeout(1e3);
      const data2 = $treeLogs;
      return data2;
    } catch (error) {
      throw new Error(data);
    }
  }
  let promise = loadLogs();
  if ($$props.reload === void 0 && $$bindings.reload && reload !== void 0)
    $$bindings.reload(reload);
  {
    if (reload == true) {
      promise = loadLogs();
      reload = false;
    }
  }
  $$unsubscribe_treeLogs();
  return `<div class="${"table-responsive"}"><table class="${"table table-bordered align-middle table-hover"}"><thead class="${"table-dark"}"><tr><th scope="${"col"}">No</th>
				<th scope="${"col"}">Perlakuan</th>
				<th scope="${"col"}">Tanggal</th>
				<th scope="${"col"}">Petugas</th>
				<th scope="${"col"}">Keterangan</th></tr></thead>
		<tbody>${function(__value) {
    if ((0, import_index_6229fc34.A)(__value)) {
      __value.then(null, import_index_6229fc34.w);
      return `
				<tr><th colspan="${"5"}" class="${"text-center"}">Loading....</th></tr>
			`;
    }
    return function(data2) {
      return `
				${data2.length > 0 ? `${(0, import_index_6229fc34.j)(data2, (table) => {
        return `<tr><th scope="${"row"}">${(0, import_index_6229fc34.e)(table.no)}.</th>
							<td class="${"text-capitalize"}">${(0, import_index_6229fc34.e)(table.perlakuan)}</td>
							<td>${(0, import_index_6229fc34.e)((0, import_moment.default)(table.tanggal).format("ll"))}</td>
							<td class="${"text-capitalize"}">${(0, import_index_6229fc34.e)(table.petugas)}</td>
							<td class="${"text-capitalize"}">${(0, import_index_6229fc34.e)(table.keterangan)}</td>
						</tr>`;
      })}` : `<tr><th colspan="${"5"}" class="${"text-center bg-dark"}" style="${"color:white;"}">No Data</th></tr>`}
			`;
    }(__value);
  }(promise)}</tbody></table></div>`;
});
const Modal_1 = (0, import_index_6229fc34.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_treeLogs;
  $$unsubscribe_treeLogs = (0, import_index_6229fc34.a)(import_trees_117503be.a, (value) => value);
  (0, import_index_6229fc34.z)();
  let { id } = $$props;
  let { open = false } = $$props;
  const originalData = {
    id,
    perlakuan: "",
    tanggal: new Date().toISOString().slice(0, 10),
    petugas: "",
    keterangan: ""
  };
  let data2 = __spreadValues({}, originalData);
  const toggle = () => open = !open;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$unsubscribe_treeLogs();
  return `${(0, import_index_6229fc34.v)(Modal, "Modal").$$render($$result, { isOpen: open }, {}, {
    default: () => {
      return `${(0, import_index_6229fc34.v)(ModalHeader, "ModalHeader").$$render($$result, { toggle }, {}, {
        default: () => {
          return `Add Logs`;
        }
      })}
	${(0, import_index_6229fc34.v)(ModalBody, "ModalBody").$$render($$result, {}, {}, {
        default: () => {
          return `<form class="${"container px-3"}"><div class="${"d-block justify-content-center mb-3"}"><label class="${"form-label"}" for="${"perlakuan"}">Perlakuan</label>
				<input class="${"form-control"}" name="${"perlakuan"}" type="${"text"}" required${(0, import_index_6229fc34.b)("value", data2.perlakuan, 0)}>
				<div class="${"mt-3"}"><label class="${"form-label"}" for="${"tanggal"}">Tanggal</label>
					<input class="${"form-control"}" name="${"tanggal"}" type="${"date"}" required${(0, import_index_6229fc34.b)("value", data2.tanggal, 0)}></div>
				<div class="${"mt-3"}"><label class="${"form-label"}" for="${"petugas"}">Petugas</label>
					<input class="${"form-control"}" name="${"petugas"}" type="${"text"}" required${(0, import_index_6229fc34.b)("value", data2.petugas, 0)}></div>
				<div class="${"mt-3"}"><label class="${"form-label"}" for="${"keterangan"}">Keterangan</label>
					<input class="${"form-control"}" name="${"keterangan"}" type="${"text"}"${(0, import_index_6229fc34.b)("value", data2.keterangan, 0)}></div>
				<div class="${"mt-3"}"><button type="${"submit"}" class="${"btn btn-secondary btn-lg px-3"}">Submit</button></div></div></form>`;
        }
      })}`;
    }
  })}`;
});
var Qrjs_svelte_svelte_type_style_lang = "";
const css = {
  code: "#qrcode.svelte-1n7zj0o{width:210px;height:210x;margin-top:15px}",
  map: null
};
const Qrjs = (0, import_index_6229fc34.c)(($$result, $$props, $$bindings, slots) => {
  let { codeValue } = $$props;
  let { squareSize } = $$props;
  let { open = false } = $$props;
  const toggle = () => open = !open;
  if ($$props.codeValue === void 0 && $$bindings.codeValue && codeValue !== void 0)
    $$bindings.codeValue(codeValue);
  if ($$props.squareSize === void 0 && $$bindings.squareSize && squareSize !== void 0)
    $$bindings.squareSize(squareSize);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css);
  return `<button class="${"btn btn-secondary px-5 my-5"}">Qrcode</button>
${(0, import_index_6229fc34.v)(Modal, "Modal").$$render($$result, { isOpen: open }, {}, {
    default: () => {
      return `${(0, import_index_6229fc34.v)(ModalHeader, "ModalHeader").$$render($$result, { toggle }, {}, {
        default: () => {
          return `QrCode Viewer`;
        }
      })}
	${(0, import_index_6229fc34.v)(ModalBody, "ModalBody").$$render($$result, { class: "my-3 py-3" }, {}, {
        default: () => {
          return `<div class="${"d-flex justify-content-center align-items-center"}"><div class="${"d-flex justify-content-evenly svelte-1n7zj0o"}" id="${"qrcode"}" style="${"height: 200px; width: 200px;"}"></div></div>
		<div class="${"d-flex justify-content-lg-center mt-4 py-3"}"><button class="${"btn btn-primary px-2"}">Download QRCode</button></div>`;
        }
      })}`;
    }
  })}`;
});
async function load({ params, fetch }) {
  try {
    const url = `${import_trees_117503be.v.targetUrl}trees/${params.id}`;
    const res = await fetch(url);
    const data2 = await res.json();
    const url2 = `${import_trees_117503be.v.targetUrl}logs/${params.id}`;
    const res2 = await fetch(url2);
    const data22 = await res2.json();
    return { props: { table: data22, profile: data2 } };
  } catch (err) {
    console.log("500:", err);
  }
}
const U5Bidu5D = (0, import_index_6229fc34.c)(($$result, $$props, $$bindings, slots) => {
  let open;
  let $treeLogs, $$unsubscribe_treeLogs;
  let $page, $$unsubscribe_page;
  $$unsubscribe_treeLogs = (0, import_index_6229fc34.a)(import_trees_117503be.a, (value) => $treeLogs = value);
  $$unsubscribe_page = (0, import_index_6229fc34.a)(import_stores_0457393c.p, (value) => $page = value);
  let { profile } = $$props;
  let { table } = $$props;
  let reload = false;
  const setLogs = () => {
    (0, import_index_6229fc34.u)(import_trees_117503be.a, $treeLogs = table.map((data2, i) => {
      i += 1;
      data2.no = i;
      return data2;
    }), $treeLogs);
  };
  setLogs();
  if ($$props.profile === void 0 && $$bindings.profile && profile !== void 0)
    $$bindings.profile(profile);
  if ($$props.table === void 0 && $$bindings.table && table !== void 0)
    $$bindings.table(table);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    open = false;
    $$rendered = `${$$result.head += `${$$result.title = `<title>Tree Profile: ${(0, import_index_6229fc34.e)(profile.id)}</title>`, ""}`, ""}

<div class="${"container-fluid container-md py-5"}"><div class="${"d-flex justify-content-center mb-5"}"><h1>Tree Profile: ${(0, import_index_6229fc34.e)(profile.id)}</h1></div>
	<div class="${"row justify-content-center mb-5"}"><div class="${"col-lg-auto col-md-auto text-center"}">${(0, import_index_6229fc34.v)(Figure, "Figure").$$render($$result, { caption: profile.id }, {}, {
      default: () => {
        return `${(0, import_index_6229fc34.v)(Image, "Image").$$render($$result, {
          thumbnail: true,
          style: "max-height: 400px; width:auto; border-radius:30px;",
          loading: "lazy",
          src: "/longan/" + profile.id.toLowerCase() + ".jpg",
          alt: "profile"
        }, {}, {})}`;
      }
    })}</div>
		<div class="${"col-lg-auto col-md-auto"}"><h5>Status: ${(0, import_index_6229fc34.e)(profile.status)}</h5>
			<h5>Lokasi: ${(0, import_index_6229fc34.e)(profile.lokasi)}</h5>
			<h6>Current URL : http://kebuncibangbara.xyz${(0, import_index_6229fc34.e)($page.url.pathname)}/</h6>
			${(0, import_index_6229fc34.v)(Qrjs, "Qrjs").$$render($$result, {
      codeValue: "http://kebuncibangbara.xyz" + $page.url.pathname + "/",
      squareSize: "200"
    }, {}, {})}</div></div>
	<div class="${"row justify-content-center mt-5"}"><div class="${"col-8 py-4"}"><button class="${"d-flex btn btn-secondary rounded-3 px-4 mb-3"}">Add Log</button>
			${(0, import_index_6229fc34.v)(Modal_1, "Modal").$$render($$result, { id: profile.id, open }, {
      open: ($$value) => {
        open = $$value;
        $$settled = false;
      }
    }, {})}
			${(0, import_index_6229fc34.v)(TableLog, "TableLog").$$render($$result, { reload }, {
      reload: ($$value) => {
        reload = $$value;
        $$settled = false;
      }
    }, {})}</div></div></div>`;
  } while (!$$settled);
  $$unsubscribe_treeLogs();
  $$unsubscribe_page();
  return $$rendered;
});
