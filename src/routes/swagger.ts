/* eslint-disable indent */
import fs from 'fs';
import path from 'path';
import type { Response, Request } from 'express';
import { Router } from 'express';
import { fileURLToPath } from 'url';

const swaggerRouter = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

swaggerRouter.get('/', (_: Request, res: Response) => {
  const openapiPath = path.resolve(__dirname, '../openapi.json');
  fs.readFile(openapiPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Unable to load OpenAPI spec.');
      return;
    }
    const openapiJson = data.replace(/<\/?script>/g, (match) => match.replace('<', '<'));
    res.type('html').send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Swagger UI</title>
        <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist/swagger-ui.css">
        <style>
          body { margin: 0; }
          #swagger-ui { height: 100vh; }
        </style>
      </head>
      <body>
        <div id="swagger-ui"></div>
        <script src="https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js"></script>
        <script>
          const spec = ${openapiJson};
          window.onload = function() {
            window.ui = SwaggerUIBundle({
              spec: spec,
              dom_id: '#swagger-ui',
            });
          };
        </script>
      </body>
      </html>
    `);
  });
});

export default swaggerRouter;
