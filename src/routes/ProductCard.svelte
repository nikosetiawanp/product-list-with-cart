<script lang="ts">
  import type { Product } from "../types";
  const formatterUSD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  export let product: Product;
  export let cartItems: Product[];
  export let onAddToCart: (id: number) => void;
  export let onIncrement: (id: number) => void;
  export let onDecrement: (id: number) => void;

  $: isOnCart = cartItems.find((cartItem) => cartItem.id == product.id);
</script>

<div class="flex flex-col w-full">
  <!-- IMAGE AND BUTTON CONTAINER -->
  <div
    class="relative flex justify-center mb-10 border-2 border-red/0 rounded-lg {isOnCart &&
      'border-red/100'}"
  >
    <!-- IMAGE CONTAINER -->
    <div
      class="rounded-lg overflow-hidden relative flex flex-col justify-center items-center w-full"
    >
      <!-- IMAGES -->
      <img
        class="md:hidden w-full h-full"
        src={product.image.mobile}
        alt={"image-mobile-" + product.id}
      />
      <img
        class="hidden md:block lg:hidden w-full"
        src={product.image.tablet}
        alt={"image-tablet-" + product.id}
      />
      <img
        class="hidden lg:block w-full"
        src={product.image.desktop}
        alt={"image-desktop-" + product.id}
      />
    </div>
    {#if !isOnCart}
      <button
        class="w-full max-w-[160px] text-sm absolute -bottom-6 flex gap-2 border border-rose-400 py-3 px-6 rounded-full bg-white font-bold text-rose-900 hover:text-red hover:border-red hover:cursor-pointer whitespace-nowrap transition-all"
        onclick={() => onAddToCart(product.id)}
      >
        <img
          src="./assets/images/icon-add-to-cart.svg"
          alt="icon-add-to-cart"
        />
        Add to Cart</button
      >
    {:else}
      <div
        class="w-full max-w-[160px] absolute -bottom-6 flex justify-between items-center gap-2 border border-red py-3 px-4 rounded-full bg-red font-bold text-white"
      >
        <!-- DECREMENT -->
        <button
          class="flex justify-center border-2 border-white rounded-full w-[20px] h-[20px] p-1 hover:cursor-pointer"
          onclick={() => onDecrement(product.id)}
        >
          <img
            src="./assets/images/icon-decrement-quantity.svg"
            alt="icon-decrement-quantity"
          /></button
        >
        {isOnCart.quantity}
        <button
          class="flex justify-center border-2 border-white rounded-full w-[20px] h-[20px] p-1 hover:cursor-pointer"
          onclick={() => onIncrement(product.id)}
        >
          <img
            src="./assets/images/icon-increment-quantity.svg"
            alt="icon-increment-quantity"
          /></button
        >
      </div>
    {/if}
  </div>
  <div class="flex flex-col gap-1">
    <span class="text-rose-500 text-sm">{product.category}</span>
    <span class="text-rose-900 font-semibold">{product.name}</span>
    <span class="text-red">{formatterUSD.format(product.price)}</span>
  </div>
</div>
