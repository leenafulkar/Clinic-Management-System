import { Link, useNavigate } from "react-router-dom"
import ApiService, { urls } from "../service/ApiService"
import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { doctorReducer } from "../reduxdata/doctorSlice"

export default function Login() {
    const [msg, setMsg] = useState("")

    const dinfo = useSelector(state => state.dinfo.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    var emailBox = useRef()
    var passBox = useRef()

    const login = async (event) => {
        setMsg("")
        event.preventDefault()

        var ob = {

            email: emailBox.current.value,
            password: passBox.current.value
        }
        console.log(ob)
        const response = await ApiService.PostApiCall(urls.AUTHLOGIN, ob)
        console.log(response.data)
        setMsg("user login")
        if (response.status) {
            console.log(response.data)
            // console.log(response.data.msg)


            var dis = dispatch(doctorReducer({ name: response.data.data.name, msg: response.data.msg, isLogin: true, type: response.data.type }))
            console.log("slicedata", dis)


            navigate("/doctorhome")
            event.target.reset()
        }


    }


    return <>
        <div className="row justify-content-center position-relative " style={{ zIndex: "1" }}>
            <div className="col-lg-8">
                <div className="bg-white rounded p-5 m-5 mb-0">
                    <h2>Login Here.....</h2>
                    <form onSubmit={login}>
                        <div className="row g-3">

                            <div className="col-12 ">
                                <input type="email" ref={emailBox} className="form-control bg-light border-0" placeholder="Your Email" style={{ height: "55px" }} />
                            </div>
                            <div className="col-12">
                                <input type="password" ref={passBox} className="form-control bg-light border-0" placeholder="Your Password" style={{ height: "55px" }} />
                            </div>

                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Login</button>
                            </div>
                            <b>Don't have an account then please <Link to="/register">Register !</Link></b>
                            <b>{msg}</b>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}