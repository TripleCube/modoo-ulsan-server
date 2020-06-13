import fs from 'fs';
import path from 'path';
import { Router } from 'express';

const router = Router();
const basename = path.basename(__filename);

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    import(`./${file}`).then(route =>
      router.use(`/${file.split('.')[0]}`, route.default),
    );
  });

export default router;
