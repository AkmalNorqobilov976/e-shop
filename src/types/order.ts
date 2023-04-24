import { Product } from "./product";
import { User } from "./user";

interface ProductOrder {
    product: Product,
    quantity: number
}

export interface Order extends Document {
    owner: User,
    totalPrice: string,
    products: ProductOrder[]
}