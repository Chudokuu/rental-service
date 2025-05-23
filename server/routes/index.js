import {Router} from 'express';

import offerRouter from './offerRoutes.js';
import reviewRouter from './reviewRoutes.js';
import userRouter  from './userRoutes.js';

const router = new Router();
router.use('/', offerRouter);
router.use('/', reviewRouter);
router.use('/', userRouter);
export{router}