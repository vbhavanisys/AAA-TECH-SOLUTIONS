const Project = require('../models/Project');

// @desc    Get all active portfolio projects
// @route   GET /api/projects
exports.getProjects = async (req, res, next) => {
  try {
    const projects = await Project.findAll(true);
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single project by ID
// @route   GET /api/projects/:id
exports.getProjectById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
};

// @desc    Create project (Admin)
// @route   POST /api/projects
exports.createProject = async (req, res, next) => {
  try {
    const projectId = await Project.create(req.body);
    const newProject = await Project.findById(projectId);
    res.status(201).json({ success: true, message: 'Project created', data: newProject });
  } catch (error) {
    next(error);
  }
};

// @desc    Update project (Admin)
// @route   PUT /api/projects/:id
exports.updateProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Project.update(id, req.body);
    const updated = await Project.findById(id);
    res.status(200).json({ success: true, message: 'Project updated', data: updated });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete project (Admin)
// @route   DELETE /api/projects/:id
exports.deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Project.delete(id);
    res.status(200).json({ success: true, message: 'Project deleted' });
  } catch (error) {
    next(error);
  }
};
