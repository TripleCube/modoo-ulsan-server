import { Router } from 'express';

import { User } from '@controllers';
import { validateBody, validateParams } from '@middlewares';
import { constraint } from '@utils';

const router = Router();
const validateAccount = validateBody(constraint.account);
const validateUuid = validateParams(constraint.uuid);
const validateVerifCode = validateBody(constraint.verifCode);
const validateDisplayName = validateParams(constraint.displayName);

router.post('/accounts', validateAccount, User.registerAccount);
router.post('/emails/:uuid', validateUuid, validateVerifCode, User.verifyEmail);
router.get('/display-name/:displayName', validateDisplayName, User.check);
router.post('/profiles/:uuid', User.registerProfile);

export default router;
