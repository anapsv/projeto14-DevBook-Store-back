import { Router } from 'express';
import { createUser } from './controllers/userControllers.js';

const router = Router()
router.post('/cadastro',createUser )

export default router