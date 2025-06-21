import express from 'express';
import { protect } from '../middleware/auth.middleware.js';
import {
  getAllProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject
} from '../controllers/project.controller.js';

const router = express.Router();

router.route('/')
  .get(getAllProjects)
  .post(protect, createProject);

router.route('/:id')
  .get(getProjectById)
  .put(protect, updateProject)
  .delete(protect, deleteProject);

export default router;