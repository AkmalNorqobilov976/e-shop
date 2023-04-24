import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { HttpException, HttpStatus } from '@nestjs/common';

export const UserSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    region: {
        type: String
    },
    district: {
        type: String
    }
}, {
    timestamps: true
}) 


UserSchema.pre('save', async function(next: any) {
    try {
        if(!this.isModified('password')) {
            return next();
        }

        const hashedPassword = await bcrypt.hash(this['password'], 10);
        this['password'] = hashedPassword;

        next();
    } catch (error) {
        return next(error);
    }
})