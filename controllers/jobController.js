import Job from "../models/Jobs.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const createJob = async (req, res) => {
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError("Please provide All Values");
  }
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const deleteJob = async (req, res) => {
  res.send("delete job");
};

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createBy: req.user.userId });

  res
    .status(StatusCodes.OK)
    .json({ jobs, totalJobs: jobs.lenght, numOfPages: 1 });
};

const updateJob = async (req, res) => {
  res.send("updateJob job");
};

const showStats = async (req, res) => {
  res.send("showStats job");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
