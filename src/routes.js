import { Router } from 'express';
import { createUser, loginUser } from './controllers/userControllers.js';

const router = Router()

router.post('/cadastro', createUser )
router.post('/login', loginUser)

export default router;