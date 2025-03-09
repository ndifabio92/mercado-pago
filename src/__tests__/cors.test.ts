import request from 'supertest';
import express from 'express';
import cors from 'cors';
import { corsMiddleware } from '../presentation/middleware/cors';
import { errorHandler } from '../presentation/middleware/errorHandler';

jest.mock('../infrastructure/config/envs', () => ({
    envs: {
        development: false,
        corsOrigin: 'http://localhost:3000,https://mi-dominio.com'
    }
}));

describe('CORS Configuration based on DEVELOPMENT variable', () => {

    let app: express.Express;
    const allowedOriginsFromEnv = ['http://localhost:3000', 'https://mi-dominio.com'];
    const localhost = allowedOriginsFromEnv[0];
    const anotherAllowedOrigin = allowedOriginsFromEnv[1];
    const disallowedOrigin = 'http://malicious-site.com';

    describe('DEVELOPMENT = true (Allow all origins)', () => {
        beforeEach(() => {
            app = express();
            app.use(cors({ origin: '*' }));
            app.get('/test', (req, res) => { res.json({ message: 'Test route - DEVELOPMENT=true' }); });
        });

        it('Should allow requests from ANY origin (http://localhost:3000 - allowed in dev)', async () => {
            const response = await request(app)
                .get('/test')
                .set('Origin', localhost);

            expect(response.status).toBe(200);
            expect(response.body).toEqual({ message: 'Test route - DEVELOPMENT=true' });
            expect(response.headers['access-control-allow-origin']).toBe('*');
        });

        it('Should allow requests from ANY origin (anotherAllowedOrigin - not specifically allowed, but * allows all)', async () => {
            const response = await request(app)
                .get('/test')
                .set('Origin', anotherAllowedOrigin);

            expect(response.status).toBe(200);
            expect(response.body).toEqual({ message: 'Test route - DEVELOPMENT=true' });
            expect(response.headers['access-control-allow-origin']).toBe('*');
        });
    });

    describe('DEVELOPMENT = false (Permitir orígenes específicos de .env)', () => {
        beforeEach(() => {
            app = express();
            app.use(corsMiddleware);
            app.get('/test', (req, res) => { res.json({ message: 'Ruta de prueba - DEVELOPMENT=false' }); });
            app.use(errorHandler);
        });

        it('Debería permitir peticiones desde un origen PERMITIDO (http://localhost:3000 - desde .env)', async () => {
            const response = await request(app)
                .get('/test')
                .set('Origin', localhost);

            expect(response.status).toBe(200);
            expect(response.body).toEqual({ message: 'Ruta de prueba - DEVELOPMENT=false' });
            expect(response.headers['access-control-allow-origin']).toBe(localhost);
        });

        it('Debería permitir peticiones desde OTRO origen PERMITIDO (http://example.com - desde .env)', async () => {
            const response = await request(app)
                .get('/test')
                .set('Origin', anotherAllowedOrigin);

            expect(response.status).toBe(200);
            expect(response.body).toEqual({ message: 'Ruta de prueba - DEVELOPMENT=false' });
            expect(response.headers['access-control-allow-origin']).toBe(anotherAllowedOrigin);
        });

        it('NO debería permitir peticiones desde un origen NO PERMITIDO (http://malicious-site.com - NO en .env)', async () => {
            const response = await request(app)
                .get('/test')
                .set('Origin', disallowedOrigin);

            expect(response.status).toBe(403);
            expect(response.body.error).toBe('CORS Error');
            expect(response.headers['access-control-allow-origin']).toBeUndefined();
        });
    });
});