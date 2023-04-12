import Typography from "@mui/material/Typography";
import CartItemsComponent from "~/components/CartItems/CartItems";
import { CartItems } from "~/models/CartItem";

type ReviewCartProps = {
  items?: CartItems[];
};

export default function ReviewCart({ items }: ReviewCartProps) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <CartItemsComponent items={items} isEditable />
    </>
  );
}
