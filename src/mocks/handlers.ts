import { rest } from "msw";
import API_PATHS from "~/constants/apiPaths";
import { availableProducts, orders, products, cart } from "~/mocks/data";
import { Order } from "~/models/Order";
import { AvailableProduct, Product } from "~/models/Product";

export const handlers = [
  rest.put(`${API_PATHS.bff}/product`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.delete(`${API_PATHS.bff}/product/:id`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.get(`${API_PATHS.bff}/product/available`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(),
      ctx.json<AvailableProduct[]>(availableProducts)
    );
  }),
  rest.get(`${API_PATHS.bff}/product/:id`, (req, res, ctx) => {
    const product = availableProducts.find((p) => p.id === req.params.id);
    if (!product) {
      return res(ctx.status(404));
    }
    return res(
      ctx.status(200),
      ctx.delay(),
      ctx.json<AvailableProduct>(product)
    );
  }),
];
