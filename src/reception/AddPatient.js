import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import ApiService, { urls } from "../service/ApiService"
import { useSelector } from "react-redux"

export default function AddPatient() {

    const dinfo = useSelector(state => state.dinfo.value.msg)
    console.log(dinfo)

    console.log("storedata", dinfo)
    const [msg, setMsg] = useState("")
    var nameBox = useRef()
    var genBox = useRef()
    var phoneBox = useRef()
    var ageBox = useRef()
    var appointBox = useRef()
    var timeBox = useRef()
    var diseBox = useRef()



    const patient = async (event) => {
        event.preventDefault()

        var ob = {

            name: nameBox.current.value,
            sex: genBox.current.value,
            phoneNumber: phoneBox.current.value,
            age: ageBox.current.value,
            appointmentdate: appointBox.current.value,
            time: timeBox.current.value,
            daignosis: diseBox.current.value


        }
        console.log(ob)
        const response = await ApiService.PostCall(urls.ADD_PATIENT, ob, dinfo)
        setMsg(response.data.msg)
        console.log(response.data.msg)

        if (response.status)
            console.log(response.data)
        event.target.reset()


    }

    return <>
        <div className="row justify-content-center position-relative" style={{ zIndex: "1" }}>
            <div className="col-lg-8">
                <div className="bg-white rounded p-5 m-5 mb-0">
                    <h1>New Appointments</h1>
                    <form onSubmit={patient}>
                        <div className="row g-3">
                            <div className="col-12 col-sm-6">
                                <input type="text" ref={nameBox} className="form-control bg-light border-0" placeholder="Your Name" style={{ height: "55px" }} />
                            </div>
                            <div className="col-12 col-sm-6">
                                <select type="text" ref={genBox} className="form-control bg-light border-0" placeholder="" style={{ height: "55px" }} >
                                    <option value="">Select Gender</option>
                                    <option >Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="number" ref={ageBox} className="form-control bg-light border-0" placeholder="Your Age" style={{ height: "55px" }} />
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="text" ref={phoneBox} className="form-control bg-light border-0" placeholder="Mobile" style={{ height: "55px" }} />
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="text" ref={diseBox} className="form-control bg-light border-0" placeholder="Your Disease" style={{ height: "55px" }} />
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="date" ref={appointBox} className="form-control bg-light border-0" placeholder="Appointment Date" style={{ height: "55px" }} />
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="time" ref={timeBox} className="form-control bg-light border-0" placeholder="" style={{ height: "55px" }} />
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Add Reception</button>
                            </div>


                            <b>{msg}</b>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    </>
}