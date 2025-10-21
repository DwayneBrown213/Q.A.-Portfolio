import { deleteHandler } from '../src/deleteHandler';
import request from 'supertest';
import app from '../src/app';

describe('DELETE /delete-handler', () => {
    it('should delete an item and return 204', async () => {
        const response = await request(app)
            .delete('/delete-handler/1');

        expect(response.status).toBe(204);
    });

    it('should return 404 if the item does not exist', async () => {
        const response = await request(app)
            .delete('/delete-handler/999');

        expect(response.status).toBe(404);
    });
});
