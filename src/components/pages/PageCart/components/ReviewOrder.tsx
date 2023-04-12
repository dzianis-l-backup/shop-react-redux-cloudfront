import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CartItemsComponent from "~/components/CartItems/CartItems";
import { FormikValues } from "formik";
import { CartItem, CartItems } from "~/models/CartItem";

type ReviewOrderProps = {
  address: FormikValues;
  items?: CartItems[];
};

export default function ReviewOrder({ address, items }: ReviewOrderProps) {
  if (!address) {
    return null;
  }
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <CartItemsComponent items={items} isEditable={false} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {address.firstName} {address.lastName}
          </Typography>
          <Typography gutterBottom>{address.address}</Typography>
        </Grid>
      </Grid>
    </>
  );
}
