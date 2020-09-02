
import axios from'axios'

const getAll = () => {
    console.log(axios.get('http://localhost:3001/api/persons'))
    return axios.get('http://localhost:3001/api/persons')
}

const removePerson = (id) => {
    axios.delete(`http://localhost:3001/api/persons/${id}`)
}

const postPersons = ({newPersonObject}) => {
    
    return(axios.post('http://localhost:3001/api/persons', newPersonObject))
}

const replaceNumber = ({changedPerson}) =>{
    return axios.put(`http://localhost:3001/api/persons/${changedPerson.id}` , changedPerson)
}

export default {
    getAll,
    removePerson,
    postPersons,
    replaceNumber
}