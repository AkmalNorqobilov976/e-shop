import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/types/product';

@Injectable()
export class ProductService {
  
  constructor(
    @InjectModel('Product') private productModel: Model<Product> 
  ) {}

  async create(productDTO: CreateProductDTO) {
    return await this.productModel.create(productDTO);
  }

  async findAll() {
    return await this.productModel.find();
  }

  async findOne(id: string) {
    return await this.productModel.findOne({ _id: id});
  }

  async update(id: string, productDTO: UpdateProductDTO) {
    return await this.productModel.updateOne({ _id: id }, productDTO);
  }

  async remove(id: string) {
    return await this.productModel.deleteOne({ _id: id });
  }
}
