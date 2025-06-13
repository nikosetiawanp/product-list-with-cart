import { d as attr_class, f as attr, e as escape_html, h as bind_props, c as pop, p as push, i as stringify, j as ensure_array_like } from "../../chunks/index.js";
const data = [
  {
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg"
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5
  },
  {
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg"
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7
  },
  {
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-macaron-desktop.jpg"
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8
  },
  {
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "./assets/images/image-tiramisu-desktop.jpg"
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5
  },
  {
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "./assets/images/image-baklava-desktop.jpg"
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4
  },
  {
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "./assets/images/image-meringue-desktop.jpg"
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5
  },
  {
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "./assets/images/image-cake-desktop.jpg"
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5
  },
  {
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "./assets/images/image-brownie-desktop.jpg"
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5
  },
  {
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "./assets/images/image-panna-cotta-desktop.jpg"
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5
  }
];
function ProductCard($$payload, $$props) {
  push();
  let isOnCart;
  const formatterUSD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
  let product = $$props["product"];
  let cartItems = $$props["cartItems"];
  let onAddToCart = $$props["onAddToCart"];
  let onIncrement = $$props["onIncrement"];
  let onDecrement = $$props["onDecrement"];
  isOnCart = cartItems.find((cartItem) => cartItem.id == product.id);
  $$payload.out += `<div class="flex flex-col w-full"><div${attr_class(`relative flex justify-center mb-10 border-2 border-red/0 rounded-lg ${stringify(isOnCart && "border-red/100")}`)}><div class="rounded-lg overflow-hidden relative flex flex-col justify-center items-center w-full"><img class="md:hidden w-full h-full"${attr("src", product.image.mobile)}${attr("alt", "image-mobile-" + product.id)}/> <img class="hidden md:block lg:hidden w-full"${attr("src", product.image.tablet)}${attr("alt", "image-tablet-" + product.id)}/> <img class="hidden lg:block w-full"${attr("src", product.image.desktop)}${attr("alt", "image-desktop-" + product.id)}/></div> `;
  if (!isOnCart) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="w-full max-w-[160px] text-sm absolute -bottom-6 flex gap-2 border border-rose-400 py-3 px-6 rounded-full bg-white font-bold text-rose-900 hover:text-red hover:border-red hover:cursor-pointer whitespace-nowrap transition-all"><img src="./assets/images/icon-add-to-cart.svg" alt="icon-add-to-cart"/> Add to Cart</button>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="w-full max-w-[160px] absolute -bottom-6 flex justify-between items-center gap-2 border border-red py-3 px-4 rounded-full bg-red font-bold text-white"><button class="flex justify-center border-2 border-white rounded-full w-[20px] h-[20px] p-1 hover:cursor-pointer"><img src="./assets/images/icon-decrement-quantity.svg" alt="icon-decrement-quantity"/></button> ${escape_html(isOnCart.quantity)} <button class="flex justify-center border-2 border-white rounded-full w-[20px] h-[20px] p-1 hover:cursor-pointer"><img src="./assets/images/icon-increment-quantity.svg" alt="icon-increment-quantity"/></button></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="flex flex-col gap-1"><span class="text-rose-500 text-sm">${escape_html(product.category)}</span> <span class="text-rose-900 font-semibold">${escape_html(product.name)}</span> <span class="text-red">${escape_html(formatterUSD.format(product.price))}</span></div></div>`;
  bind_props($$props, {
    product,
    cartItems,
    onAddToCart,
    onIncrement,
    onDecrement
  });
  pop();
}
function _page($$payload, $$props) {
  push();
  let arrayOfPrices, totalPrice;
  const formatterUSD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
  const products = data.map((data2, index) => ({ ...data2, id: index, quantity: 0 }));
  let cartItems = [];
  const increment = (id) => {
    cartItems = cartItems.map((cartItem) => cartItem.id == id && cartItem.quantity <= 99 ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
  };
  const decrement = (id) => {
    cartItems = cartItems.map((cartItem) => cartItem.id == id && cartItem.quantity > 1 ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);
  };
  let addToCart = (id) => {
    const product = products.find((product2) => product2.id == id);
    cartItems = [...cartItems, { ...product, quantity: 1 }];
  };
  arrayOfPrices = cartItems.map((cartItem) => cartItem.price * cartItem.quantity);
  totalPrice = arrayOfPrices.reduce((a, b) => a + b, 0);
  const each_array = ensure_array_like(products);
  const each_array_2 = ensure_array_like(cartItems);
  $$payload.out += `<div class="bg-rose-100 flex justify-center"><div class="flex flex-col justify-center lg:flex-row gap-8 p-10 w-full max-w-[1440px]"><div class="flex flex-col"><h1 class="text-4xl font-extrabold mb-8 text-rose-900">Desserts</h1> <div class="flex flex-col md:grid md:grid-cols-3 gap-6 w-full max-w-[800px]"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let product = each_array[$$index];
    ProductCard($$payload, {
      product,
      cartItems,
      onAddToCart: addToCart,
      onIncrement: increment,
      onDecrement: decrement
    });
  }
  $$payload.out += `<!--]--></div></div> <div class="flex flex-col bg-white p-6 rounded-xl gap-6 h-fit w-full lg:max-w-[385px]"><span class="text-4xl font-bold text-red">Your Cart (${escape_html(cartItems.length)})</span> `;
  if (cartItems.length == 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex flex-col justify-center items-center gap-4"><img src="./assets/images/illustration-empty-cart.svg" alt="illustration-empty-cart"/> <span class="text-rose-500 text-sm font-bold">Your added items will appear here</span></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    const each_array_1 = ensure_array_like(cartItems);
    $$payload.out += `<div class="flex flex-col gap-4"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let cartItem = each_array_1[$$index_1];
      $$payload.out += `<div class="flex justify-between items-center"><div class="flex flex-col gap-2"><span class="text-sm text-rose-900 font-bold">${escape_html(cartItem.name)}</span> <div class="flex gap-2"><span class="text-red text-sm font-bold">${escape_html(cartItem.quantity)}x</span> <span class="text-rose-500 text-sm">@ ${escape_html(formatterUSD.format(cartItem.price))}</span> <span class="text-rose-500 text-sm font-bold">${escape_html(formatterUSD.format(cartItem.price * cartItem.quantity))}</span></div></div> <button class="w-[20px] h-[20px] border border-rose-400 rounded-full p-1 hover:cursor-pointer"><img src="./assets/images/icon-remove-item.svg" alt="icon-remove-item"/></button></div> <hr class="border border-rose-100"/>`;
    }
    $$payload.out += `<!--]--></div> <div class="flex justify-between items-center"><span class="text-sm text-rose-900">Order Total</span> <span class="text-2xl text-rose-900 font-bold">${escape_html(formatterUSD.format(totalPrice))}</span></div> <div class="flex justify-center items-center bg-rose-50 p-4 rounded-lg"><img src="./assets/images/icon-carbon-neutral.svg" alt="icon-carbon-neutral"/> <span class="text-sm text-rose-900">This is a <b>carbon-neutral</b> delivery</span></div> <button class="w-full bg-red text-white font-bold rounded-full px-6 py-4 hover:cursor-pointer hover:bg-red-hover disabled:bg-rose-300 transition-all"${attr("disabled", false, true)}>${escape_html("Confirm Order")}</button>`;
  }
  $$payload.out += `<!--]--></div></div> <div${attr_class(`${stringify("hidden")} top-0 left-0 w-full h-full md:p-10 bg-black/50 flex justify-center items-end md:items-center`)}><div class="bg-white flex flex-col p-10 rounded-t-xl md:rounded-xl gap-8 w-full lg:max-w-[600px] h-fit md:h-full md:max-h-[685px]"><div class="flex flex-col"><img class="w-[48px] h-[48px] mb-4" src="./assets/images/icon-order-confirmed.svg" alt="icon-order-confirmed"/> <span class="text-rose-900 text-[40px] font-bold">Order Confirmed</span> <p class="text-rose-500">We hope you enjoy your food!</p></div> <div class="bg-rose-50 p-6 rounded-lg flex flex-col gap-4 h-full max-h-[340px]"><div class="flex flex-col gap-4 h-full overflow-y-scroll"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let cartItem = each_array_2[$$index_2];
    $$payload.out += `<div class="rounded-lg flex items-center gap-4"><div class="rounded-sm overflow-hidden w-[48px] h-[48px]"><img class="h-[48px]"${attr("src", cartItem.image.thumbnail)} alt="img"/></div> <div class="flex flex-col gap-1"><span class="text-rose-900 font-bold text-sm">${escape_html(cartItem.name)}</span> <div class="flex gap-2"><span class="text-red font-bold text-sm">${escape_html(cartItem.quantity)}x</span> <span class="text-rose-500 text-sm">@ ${escape_html(formatterUSD.format(cartItem.price))}</span></div></div> <span class="font-bold text-rose-900 ml-auto">${escape_html(formatterUSD.format(cartItem.price * cartItem.quantity))}</span></div> <hr class="border border-rose-100"/>`;
  }
  $$payload.out += `<!--]--></div> <div class="flex justify-between items-center"><span class="text-sm text-rose-900">Order Total</span> <span class="text-rose-900 font-bold text-2xl">${escape_html(formatterUSD.format(totalPrice))}</span></div></div> <button class="w-full bg-red text-white font-bold rounded-full px-6 py-4 hover:cursor-pointer hover:bg-red-hover transition-all">Start New Order</button></div></div></div>`;
  pop();
}
export {
  _page as default
};
