import { Router } from 'express';
import { getAllBooks } from '../controllers/productsController.js';

const router = Router();

router.get('/', getAllBooks);

export default router;