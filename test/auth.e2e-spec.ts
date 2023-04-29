import { MONGODB_URI_TEST, URL } from "./constants";
import * as request from 'supertest';
import * as mongoose from 'mongoose';

beforeAll(async () => {
    await mongoose.connect(MONGODB_URI_TEST);
    // await mongoose.connection.dropDatabase();
});

afterAll(async () => {
    await mongoose.disconnect();
});

describe('AuthController e2e', () => {
    it('/auth/register (POST)', () => {
        const RegisterDTO = {
            username: `${Date.now()}`,
            password: `${Date.now()}`,
            region: 'Region',
            district: 'District'
        }
        return request(URL)
            .post('/auth/register')
            .set('Accept', 'application/json')
            .send(RegisterDTO)
            .expect(201)
            .expect(({ body }) => {
                expect(body.token).toBeDefined();
                expect(body.user.username).toBe(RegisterDTO.username)
            });
    })
})