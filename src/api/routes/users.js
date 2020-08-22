import { Router } from 'express';

import { User } from '@controllers';
import { validateBody, validateParams } from '@middlewares';
import { constraint } from '@utils';

const router = Router();
const validateAccount = validateBody(constraint.account);
const validateUuid = validateParams(constraint.uuid);
const validateVerifCode = validateBody(constraint.verifCode);

router.post('/accounts', validateAccount, User.registerAccount);
router.post('/emails/:uuid', validateUuid, validateVerifCode, User.verifyEmail);
router.post('/profiles/:uuid', User.registerProfile);

export default router;
