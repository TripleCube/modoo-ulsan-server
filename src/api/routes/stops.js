import { Router } from 'express';

import { Stop } from '@controllers';
import { validateQuery } from '@middlewares';
import { constraint } from '@utils';

const router = Router();
const validateStop = validateQuery(constraint.stop);

router.get('/', validateStop, Stop.findStop);

export default router;
