import { Router } from 'express';

import { Auth } from '@controllers';
import { authentication, validateBody } from '@middlewares';

const router = Router();

router.post('/register', Auth.signUp);
router.post('/login', validateBody(authentication), Auth.signIn);
router.post('/logout', Auth.signOut);

export default router;
