import express from 'express';
import { protect } from '../middleware/auth.middleware.js';
import { getGroupMessages, sendMessage } from '../controllers/message.controller.js';

const router = express.Router();

router.get('/:groupId', protect, getGroupMessages);
router.post('/:groupId', protect, sendMessage);

export default router;