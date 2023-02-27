import { OrderStatus } from "~/constants/order";
import { CartItem } from "~/models/CartItem";
import { Order } from "~/models/Order";
import { AvailableProduct, Product } from "~/models/Product";

export const products: Product[] = [
    {
        description:
            "The ProMark Rebound 5A drumstick features an acorn tip shape and a long taper, producing a rear-weighted feel that is ideal for agility.",
        id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
        price: 24,
        title: "promark5a",
    },
    {
        description:
            "The ProMark Classic Forward 5B drumstick features an oval tip shape and a short taper, producing a forward-weighted feel for increased power.",
        id: "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
        price: 15,
        title: "promark5b",
    },
    {
        description:
            'Vater Power 5A Drumsticks Features: 0.58", 16" length; Hickory; 1/2" of extra length provides extended reach and increased weight.',
        id: "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
        price: 23,
        title: "vater5a",
    },
    {
        description:
            "Balancing power, finesse, and durability, the 5B stick size is a longstanding rock favorite.",
        id: "7567ec4b-b10c-48c5-9345-fc73348a80a1",
        price: 15,
        title: "vater5b",
    },
    {
        description: "Vic Firth 5A American Classic Hickory.",
        id: "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
        price: 23,
        title: "vicfirth5a",
    },
    {
        description:
            "Vic Firth 5B American classic drumsticks line combines tradition and Vic Firth style.",
        id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
        price: 15,
        title: "vicfirth5b",
    },
];

export const availableProducts: AvailableProduct[] = products.map(
    (product, index) => ({ ...product, count: index + 1 })
);

export const cart: CartItem[] = [
    {
        product: {
            description: "Short Product Description1",
            id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
            price: 24,
            title: "ProductOne",
        },
        count: 2,
    },
    {
        product: {
            description: "Short Product Description7",
            id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
            price: 15,
            title: "ProductName",
        },
        count: 5,
    },
];

export const orders: Order[] = [
    {
        id: "1",
        address: {
            address: "some address",
            firstName: "Name",
            lastName: "Surname",
            comment: "",
        },
        items: [
            { productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 2 },
            { productId: "7567ec4b-b10c-45c5-9345-fc73c48a80a1", count: 5 },
        ],
        statusHistory: [
            {
                status: OrderStatus.Open,
                timestamp: Date.now(),
                comment: "New order",
            },
        ],
    },
    {
        id: "2",
        address: {
            address: "another address",
            firstName: "John",
            lastName: "Doe",
            comment: "Ship fast!",
        },
        items: [
            { productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 3 },
        ],
        statusHistory: [
            {
                status: OrderStatus.Sent,
                timestamp: Date.now(),
                comment: "Fancy order",
            },
        ],
    },
];
