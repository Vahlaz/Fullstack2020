import {argv} from 'process'

const calculateBMI = (height: number, weight: number): String => {
    const bmi = (weight /((height/100)^2)) 
    if (bmi < 16) return 'Underweight (Severe thinness)'
    if (bmi < 17) return 'Underweight (Moderate thinness)'
    if (bmi < 18.5) return 'Underweight (Mild thinness)'
    if (bmi < 25) return 'Normal (Healthy weight)'
    if (bmi < 30) return 'Overweight (Pre-Obese)'
    if (bmi < 35) return 'Obese (class I)'
    if (bmi < 39.9) return 'Obese (class II)'
    if (bmi >= 40) return 'Obese (class III)'
    return 'no proper bmi'
}


console.log(calculateBMI(Number(argv[2]), Number(argv[3])))

export default calculateBMI

