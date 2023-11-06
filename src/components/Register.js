import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import ApiService, { urls } from "../service/ApiService"
export default function Register() {

    const [msg, setMsg] = useState("")
    var nameBox = useRef()
    var emailBox = useRef()
    var phoneBox = useRef()
    var passBox = useRef()

    const register = async (event) => {
        event.preventDefault()

        var ob = {

            name: nameBox.current.value,
            email: emailBox.current.value,
            phoneNumber: phoneBox.current.value,
            password: passBox.current.value
        }
        console.log(ob)
        const response = await ApiService.PostApiCall(urls.DOCREGISTER, ob)
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
                    <h1>Registeration</h1>
                    <form onSubmit={register}>
                        <div className="row g-3">
                            <div className="col-12 col-sm-6">
                                <input type="text" ref={nameBox} className="form-control bg-light border-0" placeholder="Your Name" style={{ height: "55px" }} />
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="email" ref={emailBox} className="form-control bg-light border-0" placeholder="Your Email" style={{ height: "55px" }} />
                            </div>
                            <div className="col-12">
                                <input type="text" ref={phoneBox} className="form-control bg-light border-0" placeholder="Mobile" style={{ height: "55px" }} />
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="password" ref={passBox} className="form-control bg-light border-0" placeholder="Your Password" style={{ height: "55px" }} />
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="password" className="form-control bg-light border-0" placeholder="Confirm Password" style={{ height: "55px" }} />
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Register</button>
                            </div>
                            <b>Already have an account then please <Link to="/login">Login </Link> to continue.</b>

                            <b>{msg}</b>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}