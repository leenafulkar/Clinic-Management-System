import { useDispatch, useSelector } from "react-redux"
import ApiService, { urls } from "../service/ApiService"
import { useEffect, useState } from "react"
import { addPatient, changePatient } from "../reduxdata/patientSlice"


export default function PatientDetail() {

    const dinfo = useSelector(state => state.dinfo.value)
    var patientlist = useSelector(state => state.patient.value)

    // const [patient, setPatient] = useState([])
    const dispatch = useDispatch()




    const loadPatient = async () => {

        const response = await ApiService.GetApiCall(urls.PATIENT_LIST, dinfo.msg)
        if (response.data.status) {
            // setPatient(response.data.data)
            dispatch(addPatient(response.data.data))
        }
        console.log(response.data)
    }

    useEffect(() => {
        loadPatient()
    }, [])


    const dele = async (id) => {
        var status = window.confirm("Are You sure to want to delete this record ?")
        if (status) {
            const URL = urls.DELETE_PATIENT + id
            const response = await ApiService.DeleteApiCall(URL, dinfo.msg)
            if (response.data.status) {
                var list = patientlist.filter(ob => ob.id != response.data.data.id)
                dispatch(changePatient(list))
                console.log(response)
            }
        }

    }

    return <>
        <div class="container-fluid py-5">
            <div class="container">
                <div class="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                    <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">Patients</h5>
                    <h1 class="display-4">Patients Details</h1>
                </div>
                <div class="row g-5">
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>S.no</th>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Gender</th>
                                <th>Age</th>
                                <th>Disease</th>
                                <th>Appointment Date</th>
                                <th>Time</th>
                                <th >Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {patientlist.map((ob, index) => <tr>
                                <td>{index + 1}</td>
                                <td>{ob.name}</td>
                                <td>{ob.phoneNumber}</td>
                                <td>{ob.sex}</td>
                                <td>{ob.age}</td>
                                <td>{ob.daignosis}</td>


                                <td>{ob.appointmentdate}</td>
                                <td>{ob.time}</td>

                                <td><button className="btn btn-success">Update</button> &nbsp;
                                    <button onClick={() => dele(ob.id)} className="btn btn-danger">Delete</button></td>



                            </tr>)}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </>
}