import axios from "axios"
class ApiService {

    PostApiCall(url, data) {

        return axios.post(url, data)
    }

    PostCall(url, data, msg) {

        return axios.post(url, data, { headers: { Authorization: 'Bearer ' + msg } })
    }

    GetApiCall(url, msg) {
        return axios.get(url, { headers: { Authorization: 'Bearer ' + msg } })
    }

    DeleteApiCall(url, msg) {
        return axios.delete(url, { headers: { Authorization: 'Bearer ' + msg } })
    }

    PutApiCall(url, data, msg) {
        return axios.put(url, data, { headers: { Authorization: 'Bearer ' + msg } })
    }

}

const SERVER = "http://apps.codebetter.in:8082"

export const urls = {
    DOCREGISTER: `${SERVER}/clinic/auth/doctor/save`,
    AUTHLOGIN: `${SERVER}/clinic/auth/login`,
    ADDRECEPTION: `${SERVER}/clinic/api/reception/save`,

    RECEPTION_LIST: `${SERVER}/clinic/api/reception/lists`,

    ADD_PATIENT: `${SERVER}/clinic/api/patient/addpatient`,

    PATIENT_LIST: `${SERVER}/clinic/api/patient/lists`,
    APPOINTMENT_LIST: `${SERVER}/clinic/api/patient/list`,

    DELETE_PATIENT: `${SERVER}/clinic/api/patient/delete/`,
    DELETE_RECEPTION: `${SERVER}/clinic/api/reception/delete/`,

    UPDATE_RECEPTION: `${SERVER}/clinic/api/reception/updateReception/`,
    DONE: `${SERVER}/clinic/api/patient/done/`,
    UNDO: `${SERVER}/clinic/api/patient/undo/`


}

export default new ApiService