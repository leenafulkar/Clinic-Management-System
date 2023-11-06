import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { doctorReducer } from "../reduxdata/doctorSlice"
export default function Menus() {

    const dinfo = useSelector(state => state.dinfo.value)
    console.log(dinfo)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        dispatch(doctorReducer({ name: undefined, msg: undefined, isLogin: false }))
        navigate('/')
    }

    return <div>
        <div className="container-fluid py-2 border-bottom d-none d-lg-block">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center">
                            <Link className="text-decoration-none text-body pe-3" to=""><i
                                className="bi bi-telephone me-2"></i>+012 345 6789</Link>
                            <span className="text-body">|</span>
                            <Link className="text-decoration-none text-body px-3" to=""><i
                                className="bi bi-envelope me-2"></i>info@example.com</Link>
                        </div>
                    </div>
                    <div className="col-md-6 text-center text-lg-end">
                        <div className="d-inline-flex align-items-center">
                            <Link className="text-body px-2" to="">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link className="text-body px-2" to="">
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link className="text-body px-2" to="">
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                            <Link className="text-body px-2" to="">
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link className="text-body ps-2" to="">
                                <i className="fab fa-youtube"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <div className="container-fluid sticky-top bg-white shadow-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                    <Link to="index.html" className="navbar-brand">
                        <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2"></i>SHUBHCLINIC
                        </h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">

                            {dinfo.isLogin ? <>
                                {dinfo.type == 'doctor' ? <>
                                    <Link to="/home" className="nav-item nav-link active">Home</Link>
                                    <Link to="/addreception" className="nav-item nav-link ">NewReception</Link>
                                    <Link to="/receptiondetails" className="nav-item nav-link ">ReceptionDetails</Link>
                                    <Link to="/appointments" className="nav-item nav-link ">Patients</Link>

                                    <b className="nav-item nav-link active" style={{ cursor: "pointer" }} onClick={logout}>Logout</b></>
                                    : ""}

                                {dinfo.type == 'reception' ? <>
                                    <Link to="/home" className="nav-item nav-link active">Home</Link>
                                    <Link to="/addpatient" className="nav-item nav-link ">NewApointment</Link>
                                    <Link to="/patientdetail" className="nav-item nav-link ">PatientsDetails</Link>
                                    <b className="nav-item nav-link active" style={{ cursor: "pointer" }} onClick={logout}>Logout</b></>
                                    : ""}



                            </> :
                                <>
                                    <Link to="/home" className="nav-item nav-link active">Home</Link>
                                    <Link to="/about" className="nav-item nav-link">About</Link>
                                    <Link to="/service" className="nav-item nav-link">Service</Link>
                                    <Link to="/contact" className="nav-item nav-link">Contact</Link>
                                    <Link to="/login" className="nav-item nav-link">Login</Link>
                                    <Link to="/register" className="nav-item nav-link">Register</Link> </>
                            }




                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>

}