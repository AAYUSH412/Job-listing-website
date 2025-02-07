import express from 'express';
import { 
  getAllJobs, 
  getJob, 
  createJob, 
  updateJob, 
  deleteJob 
} from '../controllers/jobController.js';
import validateJob from '../middleware/validateJob.js';

const router = express.Router();

router.route('/')
  .get(getAllJobs)
  .post(validateJob, createJob);

router.route('/:id')
  .get(getJob)
  .put(validateJob, updateJob)
  .delete(deleteJob);

export default router;