// backend/controllers/jobController.js
import Job from '../models/Job.js';
import asyncHandler from '../middleware/asyncHandler.js';

export const getAllJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find({}).sort('-createdAt');
  res.json({ jobs });
});

export const getJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) {
    res.status(404);
    throw new Error('Job not found');
  }
  res.json(job);
});

export const createJob = asyncHandler(async (req, res) => {
  const job = await Job.create(req.body);
  res.status(201).json(job);
});

export const updateJob = asyncHandler(async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!job) {
    res.status(404);
    throw new Error('Job not found');
  }
  res.json(job);
});

export const deleteJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) {
    res.status(404);
    throw new Error('Job not found');
  }
  await job.deleteOne();
  res.json({ message: 'Job removed' });
});