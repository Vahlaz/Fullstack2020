import {argv} from 'process'

const calculateExercises = (exercises: Array<number>, target: number)  => {
    const period = exercises.length
    const trainingDays = exercises.filter(a => a > 0 ).length
    const success = exercises.filter(a => a >= target).length == period
    const average = exercises.reduce((partialSum, a) => partialSum + a, 0) / period
    let rating = 1
    if (average >= target) rating = 3
    else if (average / target > 1) rating = 2
    else if (average / target < 1) rating = 1
    return {periodLength: period,
            trainingDays: trainingDays,
            success: success,
            rating: rating,
            ratingDescription: 'not too bad but could be better',
            target: target,
            average: average    
    }
}

export default calculateExercises

console.log(calculateExercises(argv.slice(3).map(a => Number(a)) , Number(argv[3])))

