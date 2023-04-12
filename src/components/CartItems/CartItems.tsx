import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { CartItemsType } from "~/models/CartItem";
import { formatAsPrice } from "~/utils/utils";
import AddProductToCart from "~/components/AddProductToCart/AddProductToCart";
import { Product } from "~/models/Product";
import { useAvailableProducts } from "~/queries/products";

type CartItemsProps = {
  items?: CartItemsType[];
  isEditable: boolean;
};

const getProductByCartItem = (
  cartItems: CartItemsType,
  products: Product[]
): Product | undefined => {
  return products.find((product) => product.id === cartItems.productId);
};

export default function CartItems({ items, isEditable }: CartItemsProps) {
  if (!items) {
    return null;
  }
  const { data: products } = useAvailableProducts();

  if (!products) {
    return null;
  }

  const totalPrice: number = items.reduce(
    (total, item) => item.count * item.price + total,
    0
  );

  return (
    <>
      <List disablePadding>
        {items.map((cartItem: CartItemsType) => {
          const product = getProductByCartItem(cartItem, products);

          if (!product) {
            return null;
          }

          return (
            <ListItem
              sx={{ padding: (theme) => theme.spacing(1, 0) }}
              key={cartItem.productId}
            >
              {isEditable && <AddProductToCart product={product} />}
              <ListItemText
                primary={product.title}
                secondary={product.description}
              />
              <Typography variant="body2">
                {formatAsPrice(cartItem.price)} x {cartItem.count} ={" "}
                {formatAsPrice(cartItem.price * cartItem.count)}
              </Typography>
            </ListItem>
          );
        })}
        <ListItem sx={{ padding: (theme) => theme.spacing(1, 0) }}>
          <ListItemText primary="Shipping" />
          <Typography variant="body2">Free</Typography>
        </ListItem>
        <ListItem sx={{ padding: (theme) => theme.spacing(1, 0) }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {formatAsPrice(totalPrice)}
          </Typography>
        </ListItem>
      </List>
    </>
  );
}
