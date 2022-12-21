import express from 'express';
import patientService from '../services/patientService';

const router = express.Router();
router.use(express.json())

router.get('/', (_req, res) => {
  res.send(patientService.getEntries());
});

router.post('/', (_req, res) => {
  res.send('saving diagnose');
});

export default router;