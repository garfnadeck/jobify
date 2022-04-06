import Job from "../models/Jobs.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const createJob = async (req, res) => {
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError("Please provide All Values");
  }

  req.body.createBy = req.user;
};

const deleteJob = async (req, res) => {
  res.send("delete job");
};

const getAllJobs = async (req, res) => {
  res.send("getAllJobs job");
};

const updateJob = async (req, res) => {
  res.send("updateJob job");
};

const showStats = async (req, res) => {
  res.send("showStats job");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
