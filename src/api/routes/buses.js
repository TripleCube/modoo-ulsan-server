import { Router } from 'express';

import { Bus } from '@controllers';
import { validateQuery } from '@middlewares';
import { constraint } from '@utils';

const router = Router();
const validateBus = validateQuery(constraint.bus);

router.get('/', validateBus, Bus.findBus);

export default router;
