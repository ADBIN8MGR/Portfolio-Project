import Project from "../models/ProjectModel.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customErrors.js";

export const getAllProjects = async (req, res) => {
  const projects = await Project.find();
  res.status(StatusCodes.OK).json({ projects });
};

export const addProject = async (req, res) => {
  const project = await Project.create(req.body);
  res.status(StatusCodes.CREATED).json({ project });
};

export const getProject = async (req, res) => {
  const { id } = req.params;
  const project = await Project.findById(id);
  if (!project) throw new NotFoundError(`No project with id ${id}`);
  res.status(StatusCodes.OK).json({ project });
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const updatedProject = await Project.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(StatusCodes.OK).json({ project: updatedProject });
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;
  const removedProject = await Project.findByIdAndDelete(id);
  if (!removedProject) {
    throw new NotFoundError(`No project with id ${id}`);
  }
  res
    .status(StatusCodes.OK)
    .json({ messsage: "project deleted", project: removedProject });
};
