const request = require('supertest');
const app = require('../app');

describe('PUT /api/handlers', () => {
    it('should update a handler', async () => {
        const response = await request(app)
            .put('/api/handlers/1')
            .send({ name: 'Updated Handler' });
        expect(response.status).toBe(200);
        expect(response.body.name).toBe('Updated Handler');
    });
});
