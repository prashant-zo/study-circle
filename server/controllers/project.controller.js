import Project from '../models/project.model.js';
import { NotFoundError, BadRequestError } from '../utils/errors.js';

export const getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.find()
      .populate('creator', 'name email')
      .populate('collaborators', 'name email');
    res.json(projects);
  } catch (error) {
    next(error);
  }
};

export const createProject = async (req, res, next) => {
  try {
    const project = await Project.create({
      ...req.body,
      creator: req.user.id
    });
    res.status(201).json(project);
  } catch (error) {
    next(error);
  }
};

export const getProjectById = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate('creator', 'name email')
      .populate('collaborators', 'name email');
    
    if (!project) {
      throw new NotFoundError('Project not found');
    }
    
    res.json(project);
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      throw new NotFoundError('Project not found');
    }
    
    if (project.creator.toString() !== req.user.id) {
      throw new BadRequestError('Not authorized to update this project');
    }
    
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    
    res.json(updatedProject);
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      throw new NotFoundError('Project not found');
    }
    
    if (project.creator.toString() !== req.user.id) {
      throw new BadRequestError('Not authorized to delete this project');
    }
    
    await project.deleteOne();
    res.json({ message: 'Project removed' });
  } catch (error) {
    next(error);
  }
};