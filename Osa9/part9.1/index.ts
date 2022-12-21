import express from 'express';
import calculateBMI from './bmiCalculator';
import calculateExercises from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  if (req.query.height && req.query.weight) {
    res.send({
      weight: req.query.weight,
      height: req.query.height,
      bmi: calculateBMI(Number(req.query.height), Number(req.query.weight)),
    });
  } else
    res.send({
      error: 'malformatted parameters',
    });
});

app.post('/exercises', (req, res) => {
  if (req.body) {
    const { daily_exercises, target } = req.body;
    if (daily_exercises && target) {
      res.send(calculateExercises(daily_exercises, target));
    } else
      res.send({
        error: 'malformatted parameters',
      });
  } else {
    res.send({
      error: 'parameters missing',
    });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
