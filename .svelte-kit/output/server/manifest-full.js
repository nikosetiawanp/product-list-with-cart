export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "product-list-with-cart/_app",
	assets: new Set(["assets/fonts/OFL.txt","assets/fonts/README.txt","assets/fonts/RedHatText-Italic-VariableFont_wght.ttf","assets/fonts/RedHatText-VariableFont_wght.ttf","assets/fonts/static/RedHatText-Bold.ttf","assets/fonts/static/RedHatText-Regular.ttf","assets/fonts/static/RedHatText-SemiBold.ttf","assets/images/favicon-32x32.png","assets/images/icon-add-to-cart.svg","assets/images/icon-carbon-neutral.svg","assets/images/icon-decrement-quantity.svg","assets/images/icon-increment-quantity.svg","assets/images/icon-order-confirmed.svg","assets/images/icon-remove-item.svg","assets/images/illustration-empty-cart.svg","assets/images/image-baklava-desktop.jpg","assets/images/image-baklava-mobile.jpg","assets/images/image-baklava-tablet.jpg","assets/images/image-baklava-thumbnail.jpg","assets/images/image-brownie-desktop.jpg","assets/images/image-brownie-mobile.jpg","assets/images/image-brownie-tablet.jpg","assets/images/image-brownie-thumbnail.jpg","assets/images/image-cake-desktop.jpg","assets/images/image-cake-mobile.jpg","assets/images/image-cake-tablet.jpg","assets/images/image-cake-thumbnail.jpg","assets/images/image-creme-brulee-desktop.jpg","assets/images/image-creme-brulee-mobile.jpg","assets/images/image-creme-brulee-tablet.jpg","assets/images/image-creme-brulee-thumbnail.jpg","assets/images/image-macaron-desktop.jpg","assets/images/image-macaron-mobile.jpg","assets/images/image-macaron-tablet.jpg","assets/images/image-macaron-thumbnail.jpg","assets/images/image-meringue-desktop.jpg","assets/images/image-meringue-mobile.jpg","assets/images/image-meringue-tablet.jpg","assets/images/image-meringue-thumbnail.jpg","assets/images/image-panna-cotta-desktop.jpg","assets/images/image-panna-cotta-mobile.jpg","assets/images/image-panna-cotta-tablet.jpg","assets/images/image-panna-cotta-thumbnail.jpg","assets/images/image-tiramisu-desktop.jpg","assets/images/image-tiramisu-mobile.jpg","assets/images/image-tiramisu-tablet.jpg","assets/images/image-tiramisu-thumbnail.jpg","assets/images/image-waffle-desktop.jpg","assets/images/image-waffle-mobile.jpg","assets/images/image-waffle-tablet.jpg","assets/images/image-waffle-thumbnail.jpg","favicon.png"]),
	mimeTypes: {".txt":"text/plain",".ttf":"font/ttf",".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.DOnaZPa5.js",app:"_app/immutable/entry/app.GWVFDQ3e.js",imports:["_app/immutable/entry/start.DOnaZPa5.js","_app/immutable/chunks/ibJ6_BDG.js","_app/immutable/chunks/CTrXZdPZ.js","_app/immutable/chunks/DNnwGyYT.js","_app/immutable/entry/app.GWVFDQ3e.js","_app/immutable/chunks/CTrXZdPZ.js","_app/immutable/chunks/JAS4l9Du.js","_app/immutable/chunks/DMukmq1k.js","_app/immutable/chunks/DNnwGyYT.js","_app/immutable/chunks/CY8BLVit.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
