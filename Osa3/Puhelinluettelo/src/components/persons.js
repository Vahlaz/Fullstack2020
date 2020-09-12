
import axios from'axios'

const getAll = () => {
    console.log(axios.get('https://immense-harbor-69467.herokuapp.com/api/persons'))
    return axios.get('https://immense-harbor-69467.herokuapp.com/api/persons')
}

const removePerson = (id) => {
    axios.delete(`https://immense-harbor-69467.herokuapp.com/api/persons/${id}`)
}

const postPersons = ({newPersonObject}) => {
    return(axios.post('https://immense-harbor-69467.herokuapp.com/api/persons', newPersonObject))
}

const replaceNumber = ({changedPerson}) =>{
    return axios.put(`https://immense-harbor-69467.herokuapp.com/api/persons/${changedPerson.id}` , changedPerson)
}

export default {
    getAll,
    removePerson,
    postPersons,
    replaceNumber
}