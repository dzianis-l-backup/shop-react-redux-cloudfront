import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { formatAsPrice } from '~/utils/utils';
import AddProductToCart from '~/components/AddProductToCart/AddProductToCart';
import { useAvailableProducts } from '~/queries/products';
import promark5a from './imgs/promark5a.jpeg';
import promark5b from './imgs/promark5b.jpeg';
import vicfirth5a from './imgs/vicfirth5a.jpeg';
import vicfirth5b from './imgs/vicfirth5b.jpeg';
import vater5a from './imgs/vater5a.jpeg';
import vater5b from './imgs/vater5b.jpeg';

const imagesMapping = {
  promark5a: promark5a,
  promark5b: promark5b,
  vicfirth5a: vicfirth5a,
  vicfirth5b: vicfirth5b,
  vater5a: vater5a,
  vater5b: vater5b,
};

type ProductTitle =
  | 'promark5a'
  | 'promark5b'
  | 'vicfirth5a'
  | 'vicfirth5b'
  | 'vater5a'
  | 'vater5b';

export default function Products() {
  const { data = [], isLoading } = useAvailableProducts();

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Grid container spacing={4}>
      {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {data.map(({ count, ...product }, index) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardMedia
              sx={{ pt: '56.25%' }}
              image={imagesMapping[product.title as ProductTitle]}
              title={product.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {product.title}
              </Typography>
              <Typography sx={{ fontStyle: 'italic' }}>
                {product.description}
              </Typography>
              <Divider />
              <Typography>{formatAsPrice(product.price)}</Typography>
            </CardContent>
            <CardActions>
              <AddProductToCart product={product} />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
