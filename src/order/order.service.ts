import { Injectable } from '@nestjs/common';
import { OrderDTO } from './dto/order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from 'src/types/order';

@Injectable()
export class OrderService {

    constructor(
        @InjectModel('Order') private orderModel: Model<Order>
    ) {}
    async add(orderDTO: OrderDTO) {
        let order = await this.orderModel.findOne()
        .where({ owner: orderDTO.owner })
        .where({ 'products.product': orderDTO.product.product });
    
        if(!order) {
            order = new this.orderModel({
                owner: orderDTO.owner,
                totalPrice: orderDTO.totalPrice,
                $set: {
                    products: { ...orderDTO.product }
                }
            });

            await order.save();
            return order;
        }

        await order.updateOne({
            owner: orderDTO.owner,
            totalPrice: orderDTO.totalPrice,
            $set: {
                products: { ...orderDTO.product }
            }
        });

        return order;
    }
}
