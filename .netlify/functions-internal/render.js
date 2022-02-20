const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["Berbuah.HEIC","QRCode.js","favicon.png","logo-big.png","logo.png","longan/k1.jpg","longan/k10.jpg","longan/k11.jpg","longan/k12.jpg","longan/k13.jpg","longan/k14.jpg","longan/k15.jpg","longan/k16.jpg","longan/k17.jpg","longan/k18.jpg","longan/k19.jpg","longan/k2.jpg","longan/k20.jpg","longan/k21.jpg","longan/k22.jpg","longan/k23.jpg","longan/k24.jpg","longan/k25.jpg","longan/k26.jpg","longan/k27.jpg","longan/k28.jpg","longan/k29.jpg","longan/k3.jpg","longan/k30.jpg","longan/k31.jpg","longan/k32.jpg","longan/k33.jpg","longan/k34.jpg","longan/k35.jpg","longan/k36.jpg","longan/k37.jpg","longan/k38.jpg","longan/k39.jpg","longan/k4.jpg","longan/k5.jpg","longan/k6.jpg","longan/k7.jpg","longan/k8.jpg","longan/k9.jpg","robots.txt","smui-dark.css","smui.css","svelte-welcome.png","svelte-welcome.webp"]),
	_: {
		mime: {".HEIC":"image/heic",".js":"application/javascript",".png":"image/png",".jpg":"image/jpeg",".txt":"text/plain",".css":"text/css",".webp":"image/webp"},
		entry: {"file":"start-adf9d900.js","js":["start-adf9d900.js","chunks/vendor-30baa40e.js","chunks/singletons-a6a7384f.js"],"css":["assets/vendor-e9bb7df1.css"]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/tree\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				shadow: null,
				a: [0,3],
				b: [1]
			}
		]
	}
});
