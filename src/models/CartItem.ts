import { Product } from "~/models/Product";

export type CartItem = {
  product: Product;
  count: number;
};

export type CartItems = {
  cart_id: string;
  productId: string;
  count: number;
  price: number;
};

export type CartItemsType = CartItems

export type ResponseCarts = {
  data: {
    cart: Carts;
  };
};

export type Carts = {
  id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  status: "OPEN" | "ORDERED";
  cartItems: CartItems[];
};

export type RequestCartItems = {
  cartItems: {
    productId: string;
    price: number;
    count: number;
  };
};
