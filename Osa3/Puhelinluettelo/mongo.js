const mongoose = require('mongoose')



const password=process.argv[2]

const uri = `mongodb+srv://fullstack:${password}@cluster0.qy8qe.mongodb.net/puhelinluettelo?retryWrites=true&w=majority`
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
const personSchema = new mongoose.Schema({
    name: String,
    number: Number,
    
})
const Person = mongoose.model('person',personSchema)
const person = new Person ({
    name: process.argv[3],
    number: process.argv[4],
})

if(process.argv.length === 5){
person.save().then(response => {
    console.log(`added ${person.name} number: ${person.number} to phonebook`)
    mongoose.connection.close()
})
}else if(process.argv.length===3)
Person.find({}).then(result=>{
    console.log(result[0])
    console.log('Phonebook:')
    result.map(person => console.log(`${person.name} ${person.number}`))
    mongoose.connection.close()
})
