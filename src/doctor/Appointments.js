import { useDispatch, useSelector } from "react-redux"
import ApiService, { urls } from "../service/ApiService"
import { useEffect, useState } from "react"
import { addPatient, donePatient } from "../reduxdata/patientSlice"


export default function Appointments() {

    const [activeView, setActiveView] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const dinfo = useSelector(state => state.dinfo.value)
    var patientlist = useSelector(state => state.patient.value)
    var patientdonelist = useSelector(state => state.patient.value)



    // const [patient, setPatient] = useState([])
    const dispatch = useDispatch()




    const loadPatient = async () => {

        const response = await ApiService.GetApiCall(urls.APPOINTMENT_LIST, dinfo.msg)
        if (response.data.status) {
            // setPatient(response.data.data)
            dispatch(addPatient(response.data.data))
        }
        console.log(response.data)
    }

    const done = async (id) => {
        var URL = urls.DONE + id
        const response = await ApiService.PutApiCall(URL, null, dinfo.msg)
        console.log(response)
        if (response.data.status) {
            var newList = patientlist.filter(ob => ob.id !== id)  // Remove the patient with the given id
            dispatch(donePatient(newList))
            console.log(response.data)
        }
    }

    const undo = async (id) => {
        var URL = urls.UNDO + id
        const response = await ApiService.PutApiCall(URL, null, dinfo.msg)
        console.log(response)
        if (response.data.status) {
            var newList = patientlist.filter(ob => ob.id !== id)  // Remove the patient with the given id
            dispatch(donePatient(newList))
            console.log(response.data)
        }
    }

    useEffect(() => {
        loadPatient()
    }, [])


    const activePatients = patientlist.filter(ob => ob.activeStatus);
    const inactivePatients = patientlist.filter(ob => !ob.activeStatus);

    const filterPatients = (patients, query) => {
        return patients.filter(ob =>
            ob.name.toLowerCase().includes(query.toLowerCase()) ||
            ob.address.raddress.toLowerCase().includes(query.toLowerCase()) ||
            ob.appointmentdate.toLowerCase().includes(query.toLowerCase()) ||
            ob.phoneNumber.includes(query)
        );
    };

    const filteredActivePatients = filterPatients(activePatients, searchQuery);
    const filteredInactivePatients = filterPatients(inactivePatients, searchQuery);

    return <>
        <div class="container-fluid py-5">
            <div class="container">
                <div class="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                    <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">Patients</h5>
                    <h1 class="display-4">Patients Details</h1>
                </div>
                <div className="row text-center mb-5">
                    <div className="col-lg-4"><button className="btn btn-primary " onClick={() => setActiveView(true)}>Active Appointments</button></div>

                    <div className="col-lg-4 "><input className="form-control"
                        type="text"
                        placeholder="Search Patient By Name / Address/ Mobile / Date"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    /></div>
                    <div className="col-lg-4"><button className="btn btn-secondary" onClick={() => setActiveView(false)}>Deactive Appointments</button></div>

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
                                <th>Appointment Date</th>
                                <th>Time</th>
                                <th>Address</th>
                                <th>Action</th>


                            </tr>
                        </thead>
                        <tbody>
                            {/* {patientdonelist.map((ob, index) => <tr>
                                <td>{index + 1}</td>
                                <td>{ob.name}</td>
                                <td>{ob.phoneNumber}</td>
                                <td>{ob.sex}</td>
                                <td>{ob.age}</td>
                                <td>{ob.appointmentdate}</td>
                                <td>{ob.time}</td>
                                <td>{ob.address.raddress}</td>

                                <td>{ob.activeStatus ? <button onClick={() => done(ob.id)} className="btn btn-danger" >Check</button>
                                    : <button onClick={() => undo(ob.id)} className="btn btn-warning" >unCheck</button>}</td>


                            </tr>)} */}

                            {activeView
                                ? filteredActivePatients.map((ob, index) => (<tr>
                                    <td>{index + 1}</td>
                                    <td>{ob.name}</td>
                                    <td>{ob.phoneNumber}</td>
                                    <td>{ob.sex}</td>
                                    <td>{ob.age}</td>
                                    <td>{ob.appointmentdate}</td>
                                    <td>{ob.time}</td>
                                    <td>{ob.address.raddress}</td>

                                    <td>{ob.activeStatus ? <button onClick={() => done(ob.id)} className="btn btn-danger" >Check</button>
                                        : <button onClick={() => undo(ob.id)} className="btn btn-warning" >unCheck</button>}</td>


                                </tr>))

                                : filteredInactivePatients.map((ob, index) => (<tr>
                                    <td>{index + 1}</td>
                                    <td>{ob.name}</td>
                                    <td>{ob.phoneNumber}</td>
                                    <td>{ob.sex}</td>
                                    <td>{ob.age}</td>
                                    <td>{ob.appointmentdate}</td>
                                    <td>{ob.time}</td>
                                    <td>{ob.address.raddress}</td>

                                    <td>{ob.activeStatus ? <button onClick={() => done(ob.id)} className="btn btn-danger" >Check</button>
                                        : <button onClick={() => undo(ob.id)} className="btn btn-warning" >unCheck</button>}</td>


                                </tr>
                                ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </>
}