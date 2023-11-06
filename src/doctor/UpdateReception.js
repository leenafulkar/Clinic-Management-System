import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import ApiService, { urls } from "../service/ApiService"
import { useDispatch, useSelector } from "react-redux"
import { updateRecp } from "../reduxdata/updateSlice"

export default function UpdateReception() {

    const dinfo = useSelector(state => state.dinfo.value.msg)
    const datatoupdate = useSelector(state => state.updaterec.value)
    const dispatch = useDispatch()
    console.log(datatoupdate)

    console.log("storedata", dinfo)
    const [msg, setMsg] = useState("")
    var nameBox = useRef()
    var phoneBox = useRef()
    var passBox = useRef()
    var newpassBox = useRef()

    const reception = async (event) => {
        event.preventDefault()

        var ob = {

            name: nameBox.current.value,
            phoneNumber: phoneBox.current.value,
            oldPassword: passBox.current.value,
            password: newpassBox.current.value,

        }
        console.log(ob)
        const URL = urls.UPDATE_RECEPTION + datatoupdate.id
        const response = await ApiService.PutApiCall(URL, ob, dinfo)
        setMsg(response.data.msg)
        console.log(response)
        if (response.data.status) {
            dispatch(updateRecp(response.data.data))
        }
        event.target.reset()


    }

    return <>
        <div className="row justify-content-center position-relative" style={{ zIndex: "1" }}>
            <div className="col-lg-8">
                <div className="bg-white rounded p-5 m-5 mb-0">
                    <h1>Update Reception Details</h1>
                    <form onSubmit={reception}>
                        <div className="row g-3">
                            <div className="col-12 col-sm-6">
                                <input type="text" defaultValue={datatoupdate.name} ref={nameBox} className="form-control bg-light border-0" placeholder="Your Name" style={{ height: "55px" }} />
                            </div>

                            <div className="col-12">
                                <input type="text" defaultValue={datatoupdate.phoneNumber} ref={phoneBox} className="form-control bg-light border-0" placeholder="Mobile" style={{ height: "55px" }} />
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="password" ref={passBox} className="form-control bg-light border-0" placeholder="Old Password" style={{ height: "55px" }} />
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="password" ref={newpassBox} className="form-control bg-light border-0" placeholder="New Password" style={{ height: "55px" }} />
                            </div>

                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Update Reception</button>
                            </div>


                            <b>{msg}</b>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    </>
}