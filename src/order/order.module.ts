import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './../models/order.schema';
import { SharedModule } from './../shared/shared.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Order',
        schema: OrderSchema
      }
    ]),
    SharedModule
  ],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
