import { NoSsnPatient} from "../types";
import patients from "../../data/patients";



const getEntries = (): Array<NoSsnPatient> => {
    return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id, 
        name,
        dateOfBirth,
        gender,
        occupation,
    }))
}

export default {getEntries}