import { useDispatch, useSelector } from "react-redux"
import ApiService, { urls } from "../service/ApiService"
import { useEffect, useState } from "react"
import { addReception, changeReception } from "../reduxdata/receptionSlice"
import { updateRecp } from "../reduxdata/updateSlice"
import { useNavigate } from "react-router-dom"

export default function ReceptionDetail() {

    const dinfo = useSelector(state => state.dinfo.value)
    const token = useSelector(state => state.dinfo.value.msg)
    console.log(token)
    const receptionlist = useSelector(state => state.reception.value)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        loadReception()
    }, [])



    const loadReception = async () => {

        const response = await ApiService.GetApiCall(urls.RECEPTION_LIST, dinfo.msg)
        if (response.data.status) {
            // setReception(response.data.data)
            dispatch(addReception(response.data.data))
        }
        console.log(response.data)
    }

    const dele = async (id) => {
        var confir = window.confirm("Are You Sure You want to delete this reception ?")
        // alert(id)
        if (confir) {
            const URL = urls.DELETE_RECEPTION + id
            const response = await ApiService.PutApiCall(URL, null, token)
            console.log(response)
            if (response.data.status) {
                var list = receptionlist.filter(ob => ob.id != response.data.data.id)
                dispatch(changeReception(list))
            }
        }

    }

    const updateRec = (ob) => {
        dispatch(updateRecp(ob))
        navigate("/updatereception")

    }


    return <>
        <div class="container-fluid py-5">
            <div class="container">
                <div class="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                    <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">Reception</h5>
                    <h1 class="display-4">Reception Details</h1>
                </div>
                <div class="row g-5">
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>S.no</th>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {receptionlist.map((ob, index) => <tr>
                                <td>{index + 1}</td>
                                <td>{ob.name}</td>
                                <td>{ob.phoneNumber}</td>
                                <td>{ob.email}</td>
                                <td>{ob.password}</td>
                                <td>{ob.raddress}</td>
                                <td>
                                    <button className="btn btn-success" onClick={() => updateRec(ob)}>Update</button> &nbsp;
                                    <button className="btn btn-danger" onClick={() => dele(ob.id)}>Delete</button></td>


                            </tr>)}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </>
}