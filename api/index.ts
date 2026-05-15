import app from '../server/index';
import { Server } from 'http';
import { registerRoutes } from '../server/routes';
import serverless from 'serverless-http';

let routesRegistered = false;

// We need a mock server object for registerRoutes, but we won't use it for listening
const mockServer = {} as Server;

const handler = serverless(app);

export default async (req: any, res: any) => {
    if (!routesRegistered) {
        await registerRoutes(mockServer, app);
        routesRegistered = true;
    }
    return handler(req, res);
};
