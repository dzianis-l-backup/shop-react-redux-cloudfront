import * as Yup from "yup";
import { OrderStatus } from "~/constants/order";

export const DeliverySchema = Yup.object({
  firstName: Yup.string().required().default(""),
  lastName: Yup.string().required().default(""),
  address: Yup.string().required().default(""),
}).defined();

export type Delivery = Yup.InferType<typeof DeliverySchema>;

export const OrderItemSchema = Yup.object({
  productId: Yup.string().required(),
  count: Yup.number().integer().positive().required(),
}).defined();

export type OrderItem = Yup.InferType<typeof OrderItemSchema>;

export const statusHistorySchema = Yup.object({
  status: Yup.mixed<OrderStatus>().oneOf(Object.values(OrderStatus)).required(),
  timestamp: Yup.number().required(),
  comment: Yup.string().required(),
});

export type statusHistory = Yup.InferType<typeof statusHistorySchema>;

export const OrderSchema = Yup.object({
  id: Yup.string().required(),
  delivery: DeliverySchema.required(),
  status: Yup.string().required(),
}).defined();

export type Order = Yup.InferType<typeof OrderSchema>;
