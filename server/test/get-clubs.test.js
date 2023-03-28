import request from 'supertest';
import app from '../index.js';


describe('GET Clubs Info',() => {
    test('should return array of clubs', async () => {
        const response = await request(app).get('http://localhost:5000/get-clubs');
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(3);
    })
})