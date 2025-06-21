import express from 'express';
import { protect } from '../middleware/auth.middleware.js';
import {
  getAllPeerGroups,
  createPeerGroup,
  getPeerGroupById,
  joinPeerGroup,
  leavePeerGroup
} from '../controllers/peerGroup.controller.js';

const router = express.Router();

router.route('/')
  .get(getAllPeerGroups)
  .post(protect, createPeerGroup);

router.route('/:id')
  .get(getPeerGroupById);

router.route('/:id/join')
  .post(protect, joinPeerGroup);

router.route('/:id/leave')
  .post(protect, leavePeerGroup);

export default router;