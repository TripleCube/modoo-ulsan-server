import express from 'express';

import routes from './api/routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(port, () => console.log(`Server listening on port: ${port}`));
