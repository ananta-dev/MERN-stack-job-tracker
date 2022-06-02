import express from 'express';
const router = express.Router();

import {
    createJob,
    deleteJob,
    getAllJobs,
    updateJob,
    showStats,
} from '../controllers/jobsController.js';

router.patch('/:id', (req, res) => {
    res.send('Update job');
});

router.delete('/:id', (req, res) => {
    res.send('Delete job');
});

router.route('/').post(createJob).get(getAllJobs);
// remember about :id
router.route('/stats').get(showStats);
router.route('/:id').delete(deleteJob).patch(updateJob);

export default router;
