
import axios from'axios'

const getAll = () => {
    return axios.get('http://localhost:3001/persons')
}

const removePerson = (id) => {
    axios.delete(`http://localhost:3001/persons/${id}`)
}

const postPersons = ({newPersonObject}) => {
    return(axios
    .post('http://localhost:3001/persons', newPersonObject))
}

const replaceNumber = ({changedPerson}) =>{
    return axios.put(`http://localhost:3001/persons/${changedPerson.id}` , changedPerson)
}

export default {
    getAll,
    removePerson,
    postPersons,
    replaceNumber
}