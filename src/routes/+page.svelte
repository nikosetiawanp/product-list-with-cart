<script lang="ts">
  import type { Product } from "../types";
  import data from "../data.json";
  import ProductCard from "./ProductCard.svelte";
  const formatterUSD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const products = data.map((data, index) => ({
    ...data,
    id: index,
    quantity: 0,
  }));
  let isLoading = false;
  let confirmModalOpen = false;

  const confirmOrder = () => {
    isLoading = true;
    setTimeout(function () {
      isLoading = false;
      confirmModalOpen = true;
    }, 1000);
  };

  const startNewOrder = () => {
    isLoading = false;
    cartItems = [];
    confirmModalOpen = false;
  };
  let cartItems: Product[] = [];
  $: arrayOfPrices = cartItems.map(
    (cartItem) => cartItem.price * cartItem.quantity,
  );
  $: totalPrice = arrayOfPrices.reduce((a, b) => a + b, 0);
  const increment = (id: number) => {
    cartItems = cartItems.map((cartItem) =>
      cartItem.id == id && cartItem.quantity <= 99
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  };
  const decrement = (id: number) => {
    cartItems = cartItems.map((cartItem) =>
      cartItem.id == id && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem,
    );
  };
  let addToCart = (id: number) => {
    const product = products.find((product: Product) => product.id == id);
    cartItems = [...cartItems, { ...(product as Product), quantity: 1 }];
  };
  const removeFromCart = (id: number) => {
    cartItems = cartItems.filter((cartItem) => cartItem.id !== id);
  };
</script>

<!-- BACKGROUND -->
<div class="bg-rose-100 flex justify-center">
  <!-- CONTAINER -->
  <div
    class="flex flex-col justify-center lg:flex-row gap-8 p-10 w-full max-w-[1440px]"
  >
    <div class="flex flex-col">
      <h1 class="text-4xl font-extrabold mb-8 text-rose-900">Desserts</h1>
      <div
        class="flex flex-col md:grid md:grid-cols-3 gap-6 w-full max-w-[800px]"
      >
        {#each products as product}
          <!-- PRODUCT CONTAINER -->
          <ProductCard
            {product}
            {cartItems}
            onAddToCart={addToCart}
            onIncrement={increment}
            onDecrement={decrement}
          />
        {/each}
      </div>
    </div>

    <!-- CART -->
    <div
      class="flex flex-col bg-white p-6 rounded-xl gap-6 h-fit w-full lg:max-w-[385px]"
    >
      <span class="text-4xl font-bold text-red"
        >Your Cart ({cartItems.length})</span
      >
      {#if cartItems.length == 0}
        <div class="flex flex-col justify-center items-center gap-4">
          <img
            src="./assets/images/illustration-empty-cart.svg"
            alt="illustration-empty-cart"
          />
          <span class="text-rose-500 text-sm font-bold">
            Your added items will appear here
          </span>
        </div>
      {:else}
        <div class="flex flex-col gap-4">
          {#each cartItems as cartItem}
            <div class="flex justify-between items-center">
              <!-- ITEM -->
              <div class="flex flex-col gap-2">
                <!-- ITEM NAME -->
                <span class="text-sm text-rose-900 font-bold"
                  >{cartItem.name}</span
                >
                <!-- ITEM PROPERTIES -->
                <div class="flex gap-2">
                  <span class="text-red text-sm font-bold"
                    >{cartItem.quantity}x</span
                  >
                  <span class="text-rose-500 text-sm"
                    >@ {formatterUSD.format(cartItem.price)}</span
                  >
                  <span class="text-rose-500 text-sm font-bold"
                    >{formatterUSD.format(
                      cartItem.price * cartItem.quantity,
                    )}</span
                  >
                </div>
              </div>
              <button
                class="w-[20px] h-[20px] border border-rose-400 rounded-full p-1 hover:cursor-pointer"
                onclick={() => removeFromCart(cartItem.id)}
              >
                <img
                  src="./assets/images/icon-remove-item.svg"
                  alt="icon-remove-item"
                />
              </button>
            </div>
            <hr class="border border-rose-100" />
          {/each}
        </div>

        <div class="flex justify-between items-center">
          <span class="text-sm text-rose-900">Order Total</span>
          <span class="text-2xl text-rose-900 font-bold"
            >{formatterUSD.format(totalPrice)}</span
          >
        </div>
        <div class="flex justify-center items-center bg-rose-50 p-4 rounded-lg">
          <img
            src="./assets/images/icon-carbon-neutral.svg"
            alt="icon-carbon-neutral"
          />
          <span class="text-sm text-rose-900"
            >This is a <b>carbon-neutral</b> delivery</span
          >
        </div>
        <button
          class="w-full bg-red text-white font-bold rounded-full px-6 py-4 hover:cursor-pointer hover:bg-red-hover disabled:bg-rose-300 transition-all"
          onclick={() => confirmOrder()}
          disabled={isLoading ? true : false}
          >{isLoading ? "Placing Order..." : "Confirm Order"}</button
        >
      {/if}
    </div>
  </div>
  <!-- BACKDROP-->
  <div
    class="{confirmModalOpen
      ? 'fixed'
      : 'hidden'} top-0 left-0 w-full h-full md:p-10 bg-black/50 flex justify-center items-end md:items-center"
  >
    <!-- CONFIRM MODAL -->
    <div
      class="bg-white flex flex-col p-10 rounded-t-xl md:rounded-xl gap-8 w-full lg:max-w-[600px] h-fit md:h-full md:max-h-[685px]"
    >
      <!-- HEADING AND SUBHEADING -->
      <div class="flex flex-col">
        <img
          class="w-[48px] h-[48px] mb-4"
          src="./assets/images/icon-order-confirmed.svg"
          alt="icon-order-confirmed"
        />
        <span class="text-rose-900 text-[40px] font-bold">Order Confirmed</span>
        <p class="text-rose-500">We hope you enjoy your food!</p>
      </div>
      <!-- CART ITEMS -->
      <div
        class="bg-rose-50 p-6 rounded-lg flex flex-col gap-4 h-full max-h-[340px]"
      >
        <div class="flex flex-col gap-4 h-full overflow-y-scroll">
          {#each cartItems as cartItem}
            <!-- CART ITEM -->
            <div class="rounded-lg flex items-center gap-4">
              <!-- IMAGE -->
              <div class="rounded-sm overflow-hidden w-[48px] h-[48px]">
                <img
                  class="h-[48px]"
                  src={cartItem.image.thumbnail}
                  alt="img"
                />
              </div>
              <!-- PRODUCT INFO -->
              <div class="flex flex-col gap-1">
                <span class="text-rose-900 font-bold text-sm"
                  >{cartItem.name}</span
                >
                <div class="flex gap-2">
                  <span class="text-red font-bold text-sm"
                    >{cartItem.quantity}x</span
                  >
                  <span class="text-rose-500 text-sm"
                    >@ {formatterUSD.format(cartItem.price)}</span
                  >
                </div>
              </div>
              <span class="font-bold text-rose-900 ml-auto"
                >{formatterUSD.format(cartItem.price * cartItem.quantity)}</span
              >
            </div>
            <hr class="border border-rose-100" />
          {/each}
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm text-rose-900">Order Total</span>
          <span class="text-rose-900 font-bold text-2xl"
            >{formatterUSD.format(totalPrice)}</span
          >
        </div>
      </div>
      <button
        class="w-full bg-red text-white font-bold rounded-full px-6 py-4 hover:cursor-pointer hover:bg-red-hover transition-all"
        onclick={() => startNewOrder()}>Start New Order</button
      >
    </div>
  </div>
</div>
