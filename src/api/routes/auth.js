import { Router } from 'express';

import { Auth } from '@controllers';
import { validateBody } from '@middlewares';

const router = Router();

router.post('/login', validateBody(), Auth.signIn);
router.post('/logout', Auth.signOut);

export default router;
