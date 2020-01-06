import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';

import ToolsController from './app/controllers/ToolsController';
import validateTool from './app/validators/ToolsStore';
import openApiDocumentation from './app/documentation/openApiDocumentation';

const routes = new Router();

routes.post('/tools', validateTool, ToolsController.store);
routes.get('/tools', ToolsController.index);
routes.delete('/tools/:id', ToolsController.remove);
routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));

export default routes;
