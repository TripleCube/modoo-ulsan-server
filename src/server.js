import express from 'express';

import { handleClientError, handleServerError } from '@middlewares';
import routes from '@routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.use(handleClientError);
app.use(handleServerError);

app.listen(port, () => console.log(`Server listening on port: ${port}`));
